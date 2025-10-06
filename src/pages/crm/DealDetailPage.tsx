import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CRMLayout } from '@/components/crm/CRMLayout';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Building2, DollarSign, Calendar, Edit, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { InvoiceCard } from '@/components/crm/InvoiceCard';
import { ActivityTimeline } from '@/components/crm/ActivityTimeline';
import { DealDialog } from '@/components/crm/DealDialog';

export default function DealDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [deal, setDeal] = useState<any>(null);
  const [invoices, setInvoices] = useState<any[]>([]);
  const [activities, setActivities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  useEffect(() => {
    if (id) {
      fetchDealData();
    }
  }, [id]);

  const fetchDealData = async () => {
    try {
      setLoading(true);

      // Fetch deal details
      const { data: dealData, error: dealError } = await supabase
        .from('deals')
        .select('*, clients(id, name, company_name)')
        .eq('id', id)
        .single();

      if (dealError) throw dealError;
      setDeal(dealData);

      // Fetch related invoices
      const { data: invoicesData, error: invoicesError } = await supabase
        .from('invoices')
        .select('*, clients(name, company_name), deals(deal_name)')
        .eq('deal_id', id)
        .order('created_at', { ascending: false });

      if (invoicesError) throw invoicesError;
      setInvoices(invoicesData || []);

      // Fetch activities
      const { data: activitiesData, error: activitiesError } = await supabase
        .from('activities')
        .select('*, profiles(full_name)')
        .eq('entity_id', id)
        .eq('entity_type', 'deal')
        .order('created_at', { ascending: false })
        .limit(20);

      if (activitiesError) throw activitiesError;
      setActivities(activitiesData || []);

    } catch (error: any) {
      console.error('Error fetching deal data:', error);
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const getStageColor = (stage: string) => {
    const colors = {
      lead: 'bg-gray-500/10 text-gray-500 border-gray-500/20',
      qualified: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      proposal: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
      negotiation: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
      won: 'bg-green-500/10 text-green-500 border-green-500/20',
      lost: 'bg-red-500/10 text-red-500 border-red-500/20'
    };
    return colors[stage as keyof typeof colors] || colors.lead;
  };

  if (loading) {
    return (
      <CRMLayout>
        <div className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">Loading deal details...</p>
        </div>
      </CRMLayout>
    );
  }

  if (!deal) {
    return (
      <CRMLayout>
        <div className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">Deal not found</p>
        </div>
      </CRMLayout>
    );
  }

  return (
    <CRMLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/crm/deals')}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{deal.deal_name}</h1>
              {deal.clients && (
                <button
                  onClick={() => navigate(`/crm/clients/${deal.clients.id}`)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {deal.clients.company_name}
                </button>
              )}
            </div>
            <Badge variant="outline" className={getStageColor(deal.stage)}>
              {deal.stage}
            </Badge>
          </div>
          <Button onClick={() => setEditDialogOpen(true)}>
            <Edit className="mr-2 h-4 w-4" />
            Edit Deal
          </Button>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <DollarSign className="h-4 w-4" />
              <span className="text-sm">Deal Value</span>
            </div>
            <p className="text-2xl font-bold text-foreground">
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: deal.currency
              }).format(deal.deal_value)}
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm">Probability</span>
            </div>
            <p className="text-2xl font-bold text-foreground">{deal.probability}%</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">Expected Close</span>
            </div>
            <p className="text-2xl font-bold text-foreground">
              {deal.expected_close_date
                ? format(new Date(deal.expected_close_date), 'MMM d, yyyy')
                : 'Not set'}
            </p>
          </Card>
        </div>

        {/* Details Card */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Deal Details</h3>
          {deal.description && (
            <div className="mb-4">
              <h4 className="font-medium mb-2">Description</h4>
              <p className="text-muted-foreground">{deal.description}</p>
            </div>
          )}
          {deal.notes && (
            <div>
              <h4 className="font-medium mb-2">Notes</h4>
              <p className="text-muted-foreground">{deal.notes}</p>
            </div>
          )}
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="invoices" className="space-y-4">
          <TabsList>
            <TabsTrigger value="invoices">Invoices ({invoices.length})</TabsTrigger>
            <TabsTrigger value="activities">Activities ({activities.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="invoices" className="space-y-4">
            {invoices.length === 0 ? (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground">No invoices found for this deal</p>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {invoices.map((invoice) => (
                  <InvoiceCard
                    key={invoice.id}
                    invoice={invoice}
                    onEdit={() => {}}
                    onDelete={() => {}}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="activities" className="space-y-4">
            <ActivityTimeline activities={activities} />
          </TabsContent>
        </Tabs>
      </div>

      <DealDialog
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        deal={deal}
        onSuccess={() => {
          fetchDealData();
          setEditDialogOpen(false);
        }}
      />
    </CRMLayout>
  );
}
