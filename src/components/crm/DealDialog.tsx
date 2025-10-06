import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { supabase } from '@/integrations/supabase/client';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { z } from 'zod';
import { Loader2, CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface Deal {
  id: string;
  client_id: string;
  deal_name: string;
  deal_value: number;
  currency: string;
  stage: string;
  probability: number;
  expected_close_date: string | null;
  description: string | null;
  notes: string | null;
}

interface DealDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  deal?: Deal | null;
}

const dealSchema = z.object({
  client_id: z.string().min(1, 'Client is required'),
  deal_name: z.string().min(1, 'Deal name is required').max(200),
  deal_value: z.number().positive('Deal value must be positive'),
  currency: z.string().default('USD'),
  stage: z.enum(['lead', 'qualified', 'proposal', 'negotiation', 'won', 'lost']),
  probability: z.number().min(0).max(100),
  expected_close_date: z.string().optional(),
  description: z.string().max(5000).optional(),
  notes: z.string().max(5000).optional()
});

export function DealDialog({ open, onOpenChange, deal }: DealDialogProps) {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [expectedCloseDate, setExpectedCloseDate] = useState<Date | undefined>(
    deal?.expected_close_date ? new Date(deal.expected_close_date) : undefined
  );
  
  const [formData, setFormData] = useState({
    client_id: deal?.client_id || '',
    deal_name: deal?.deal_name || '',
    deal_value: deal?.deal_value || 0,
    currency: deal?.currency || 'USD',
    stage: deal?.stage || 'lead',
    probability: deal?.probability || 0,
    description: deal?.description || '',
    notes: deal?.notes || ''
  });

  const { data: clients } = useQuery({
    queryKey: ['clients-active'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('clients')
        .select('id, name, company_name')
        .in('status', ['active', 'prospect'])
        .order('company_name');

      if (error) throw error;
      return data;
    }
  });

  useEffect(() => {
    if (deal) {
      setFormData({
        client_id: deal.client_id,
        deal_name: deal.deal_name,
        deal_value: deal.deal_value,
        currency: deal.currency,
        stage: deal.stage,
        probability: deal.probability,
        description: deal.description || '',
        notes: deal.notes || ''
      });
      setExpectedCloseDate(deal.expected_close_date ? new Date(deal.expected_close_date) : undefined);
    }
  }, [deal]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      const dataToValidate = {
        ...formData,
        deal_value: Number(formData.deal_value),
        expected_close_date: expectedCloseDate?.toISOString().split('T')[0]
      };

      const validated = dealSchema.parse(dataToValidate);
      
      if (deal) {
        const { error } = await supabase
          .from('deals')
          .update(validated)
          .eq('id', deal.id);

        if (error) throw error;
        toast.success('Deal updated successfully');
      } else {
        const { error } = await supabase
          .from('deals')
          .insert(validated);

        if (error) throw error;
        toast.success('Deal created successfully');
      }

      queryClient.invalidateQueries({ queryKey: ['deals'] });
      onOpenChange(false);
      resetForm();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      client_id: '',
      deal_name: '',
      deal_value: 0,
      currency: 'USD',
      stage: 'lead',
      probability: 0,
      description: '',
      notes: ''
    });
    setExpectedCloseDate(undefined);
    setErrors({});
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      onOpenChange(isOpen);
      if (!isOpen) resetForm();
    }}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{deal ? 'Edit Deal' : 'Add New Deal'}</DialogTitle>
          <DialogDescription>
            {deal ? 'Update deal information' : 'Create a new deal in your pipeline'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="client_id">Client *</Label>
            <Select
              value={formData.client_id}
              onValueChange={(value) => setFormData({ ...formData, client_id: value })}
              disabled={loading}
            >
              <SelectTrigger className={errors.client_id ? 'border-destructive' : ''}>
                <SelectValue placeholder="Select a client" />
              </SelectTrigger>
              <SelectContent>
                {clients?.map((client) => (
                  <SelectItem key={client.id} value={client.id}>
                    {client.company_name} - {client.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.client_id && <p className="text-sm text-destructive">{errors.client_id}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="deal_name">Deal Name *</Label>
            <Input
              id="deal_name"
              value={formData.deal_name}
              onChange={(e) => setFormData({ ...formData, deal_name: e.target.value })}
              placeholder="e.g., Website Redesign Project"
              className={errors.deal_name ? 'border-destructive' : ''}
              disabled={loading}
            />
            {errors.deal_name && <p className="text-sm text-destructive">{errors.deal_name}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="deal_value">Deal Value *</Label>
              <Input
                id="deal_value"
                type="number"
                step="0.01"
                value={formData.deal_value}
                onChange={(e) => setFormData({ ...formData, deal_value: parseFloat(e.target.value) || 0 })}
                className={errors.deal_value ? 'border-destructive' : ''}
                disabled={loading}
              />
              {errors.deal_value && <p className="text-sm text-destructive">{errors.deal_value}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <Select
                value={formData.currency}
                onValueChange={(value) => setFormData({ ...formData, currency: value })}
                disabled={loading}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="stage">Stage *</Label>
              <Select
                value={formData.stage}
                onValueChange={(value: any) => setFormData({ ...formData, stage: value })}
                disabled={loading}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lead">Lead</SelectItem>
                  <SelectItem value="qualified">Qualified</SelectItem>
                  <SelectItem value="proposal">Proposal</SelectItem>
                  <SelectItem value="negotiation">Negotiation</SelectItem>
                  <SelectItem value="won">Won</SelectItem>
                  <SelectItem value="lost">Lost</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="probability">Probability (%)</Label>
              <Input
                id="probability"
                type="number"
                min="0"
                max="100"
                value={formData.probability}
                onChange={(e) => setFormData({ ...formData, probability: parseInt(e.target.value) || 0 })}
                disabled={loading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Expected Close Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !expectedCloseDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {expectedCloseDate ? format(expectedCloseDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={expectedCloseDate}
                  onSelect={setExpectedCloseDate}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={3}
              disabled={loading}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {deal ? 'Update Deal' : 'Create Deal'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
