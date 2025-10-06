import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

const invoiceSchema = z.object({
  client_id: z.string().uuid('Please select a client'),
  deal_id: z.string().uuid().optional().nullable(),
  amount: z.number().positive('Amount must be greater than 0'),
  status: z.enum(['draft', 'sent', 'paid', 'overdue', 'cancelled']),
  issue_date: z.date(),
  due_date: z.date(),
  description: z.string().max(1000).optional(),
  notes: z.string().max(5000).optional(),
});

type InvoiceFormData = z.infer<typeof invoiceSchema>;

interface Invoice {
  id: string;
  invoice_number?: string;
  client_id: string;
  deal_id?: string | null;
  amount: number;
  status: string;
  issue_date: string;
  due_date: string;
  description?: string;
  notes?: string;
}

interface InvoiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  invoice: Invoice | null;
}

export function InvoiceDialog({ open, onOpenChange, invoice }: InvoiceDialogProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [clientId, setClientId] = useState('');
  const [dealId, setDealId] = useState<string>('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState<string>('draft');
  const [issueDate, setIssueDate] = useState<Date>(new Date());
  const [dueDate, setDueDate] = useState<Date>(new Date());
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState('');

  const [clients, setClients] = useState<any[]>([]);
  const [deals, setDeals] = useState<any[]>([]);

  useEffect(() => {
    if (open) {
      fetchClients();
      if (invoice) {
        setClientId(invoice.client_id);
        setDealId(invoice.deal_id || '');
        setAmount(invoice.amount.toString());
        setStatus(invoice.status);
        setIssueDate(new Date(invoice.issue_date));
        setDueDate(new Date(invoice.due_date));
        setDescription(invoice.description || '');
        setNotes(invoice.notes || '');
      } else {
        resetForm();
      }
    }
  }, [open, invoice]);

  useEffect(() => {
    if (clientId) {
      fetchDealsForClient(clientId);
    } else {
      setDeals([]);
    }
  }, [clientId]);

  const fetchClients = async () => {
    const { data } = await supabase
      .from('clients')
      .select('id, name, company_name')
      .order('company_name');
    if (data) setClients(data);
  };

  const fetchDealsForClient = async (clientId: string) => {
    const { data } = await supabase
      .from('deals')
      .select('id, deal_name, stage')
      .eq('client_id', clientId)
      .order('created_at', { ascending: false });
    if (data) setDeals(data);
  };

  const resetForm = () => {
    setClientId('');
    setDealId('');
    setAmount('');
    setStatus('draft');
    setIssueDate(new Date());
    setDueDate(new Date());
    setDescription('');
    setNotes('');
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const formData: InvoiceFormData = {
        client_id: clientId,
        deal_id: dealId || null,
        amount: parseFloat(amount),
        status: status as any,
        issue_date: issueDate,
        due_date: dueDate,
        description: description || undefined,
        notes: notes || undefined,
      };

      const validated = invoiceSchema.parse(formData);

      const invoiceData: any = {
        client_id: validated.client_id,
        deal_id: validated.deal_id,
        amount: validated.amount,
        status: validated.status,
        issue_date: format(validated.issue_date, 'yyyy-MM-dd'),
        due_date: format(validated.due_date, 'yyyy-MM-dd'),
        description: validated.description,
        notes: validated.notes,
      };

      if (invoice) {
        const { error } = await supabase
          .from('invoices')
          .update(invoiceData)
          .eq('id', invoice.id);

        if (error) throw error;

        toast({
          title: 'Invoice Updated',
          description: 'The invoice has been updated successfully.',
        });
      } else {
        // Generate invoice number
        const { count } = await supabase
          .from('invoices')
          .select('*', { count: 'exact', head: true });
        
        invoiceData.invoice_number = `INV-${String((count || 0) + 1).padStart(5, '0')}`;

        const { error } = await supabase
          .from('invoices')
          .insert(invoiceData);

        if (error) throw error;

        toast({
          title: 'Invoice Created',
          description: `Invoice ${invoiceData.invoice_number} has been created successfully.`,
        });
      }

      queryClient.invalidateQueries({ queryKey: ['invoices'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard-stats'] });
      onOpenChange(false);
      resetForm();
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.issues.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        toast({
          title: 'Error',
          description: error.message || 'Failed to save invoice',
          variant: 'destructive',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{invoice ? 'Edit Invoice' : 'Create Invoice'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="client">Client *</Label>
              <Select value={clientId} onValueChange={setClientId}>
                <SelectTrigger id="client">
                  <SelectValue placeholder="Select client" />
                </SelectTrigger>
                <SelectContent>
                  {clients.map((client) => (
                    <SelectItem key={client.id} value={client.id}>
                      {client.company_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.client_id && <p className="text-sm text-destructive">{errors.client_id}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="deal">Deal (Optional)</Label>
              <Select value={dealId} onValueChange={setDealId} disabled={!clientId}>
                <SelectTrigger id="deal">
                  <SelectValue placeholder="Select deal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">None</SelectItem>
                  {deals.map((deal) => (
                    <SelectItem key={deal.id} value={deal.id}>
                      {deal.deal_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (USD) *</Label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              {errors.amount && <p className="text-sm text-destructive">{errors.amount}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status *</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger id="status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="sent">Sent</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Issue Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      'w-full justify-start text-left font-normal',
                      !issueDate && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {issueDate ? format(issueDate, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={issueDate}
                    onSelect={(date) => date && setIssueDate(date)}
                    initialFocus
                    className={cn('p-3 pointer-events-auto')}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Due Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      'w-full justify-start text-left font-normal',
                      !dueDate && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dueDate ? format(dueDate, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={dueDate}
                    onSelect={(date) => date && setDueDate(date)}
                    initialFocus
                    className={cn('p-3 pointer-events-auto')}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              placeholder="Brief description of invoice"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={1000}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              placeholder="Additional notes or payment terms..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              maxLength={5000}
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : invoice ? 'Update Invoice' : 'Create Invoice'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
