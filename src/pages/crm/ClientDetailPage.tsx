import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CRMLayout } from '@/components/crm/CRMLayout';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Building2, Mail, Phone, Globe, Edit } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { DealCard } from '@/components/crm/DealCard';
import { InvoiceCard } from '@/components/crm/InvoiceCard';
import { ActivityTimeline } from '@/components/crm/ActivityTimeline';
import { ClientDialog } from '@/components/crm/ClientDialog';

export default function ClientDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [client, setClient] = useState<any>(null);
  const [deals, setDeals] = useState<any[]>([]);
  const [invoices, setInvoices] = useState<any[]>([]);
  const [activities, setActivities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  useEffect(() => {
    if (id) {
      fetchClientData();
    }
  }, [id]);

  const fetchClientData = async () => {
    try {
      setLoading(true);

      // Fetch client details
      const { data: clientData, error: clientError } = await supabase
        .from('clients')
        .select('*')
        .eq('id', id)
        .single();

      if (clientError) throw clientError;
      setClient(clientData);

      // Fetch related deals
      const { data: dealsData, error: dealsError } = await supabase
        .from('deals')
        .select('*, clients(name, company_name)')
        .eq('client_id', id)
        .order('created_at', { ascending: false });

      if (dealsError) throw dealsError;
      setDeals(dealsData || []);

      // Fetch related invoices
      const { data: invoicesData, error: invoicesError } = await supabase
        .from('invoices')
        .select('*, clients(name, company_name), deals(deal_name)')
        .eq('client_id', id)
        .order('created_at', { ascending: false });

      if (invoicesError) throw invoicesError;
      setInvoices(invoicesData || []);

      // Fetch activities
      const { data: activitiesData, error: activitiesError } = await supabase
        .from('activities')
        .select('*, profiles(full_name)')
        .eq('entity_id', id)
        .eq('entity_type', 'client')
        .order('created_at', { ascending: false })
        .limit(20);

      if (activitiesError) throw activitiesError;
      setActivities(activitiesData || []);

    } catch (error: any) {
      console.error('Error fetching client data:', error);
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    const colors = {
      prospect: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
      active: 'bg-green-500/10 text-green-500 border-green-500/20',
      inactive: 'bg-gray-500/10 text-gray-500 border-gray-500/20',
      archived: 'bg-red-500/10 text-red-500 border-red-500/20'
    };
    return colors[status as keyof typeof colors] || colors.prospect;
  };

  if (loading) {
    return (
      <CRMLayout>
        <div className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">Loading client details...</p>
        </div>
      </CRMLayout>
    );
  }

  if (!client) {
    return (
      <CRMLayout>
        <div className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">Client not found</p>
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
              onClick={() => navigate('/crm/clients')}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{client.name}</h1>
              <p className="text-muted-foreground">{client.company_name}</p>
            </div>
            <Badge variant="outline" className={getStatusColor(client.status)}>
              {client.status}
            </Badge>
          </div>
          <Button onClick={() => setEditDialogOpen(true)}>
            <Edit className="mr-2 h-4 w-4" />
            Edit Client
          </Button>
        </div>

        {/* Overview Card */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {client.email && (
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{client.email}</span>
              </div>
            )}
            {client.phone && (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{client.phone}</span>
              </div>
            )}
            {client.website && (
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <a
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {client.website}
                </a>
              </div>
            )}
            {client.industry && (
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <span>{client.industry}</span>
              </div>
            )}
          </div>
          {client.notes && (
            <div className="mt-4">
              <h4 className="font-medium mb-2">Notes</h4>
              <p className="text-muted-foreground">{client.notes}</p>
            </div>
          )}
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="deals" className="space-y-4">
          <TabsList>
            <TabsTrigger value="deals">Deals ({deals.length})</TabsTrigger>
            <TabsTrigger value="invoices">Invoices ({invoices.length})</TabsTrigger>
            <TabsTrigger value="activities">Activities ({activities.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="deals" className="space-y-4">
            {deals.length === 0 ? (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground">No deals found for this client</p>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {deals.map((deal) => (
                  <div key={deal.id} onClick={() => navigate(`/crm/deals/${deal.id}`)}>
                    <DealCard
                      deal={deal}
                      onEdit={() => {}}
                      onDelete={() => {}}
                    />
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="invoices" className="space-y-4">
            {invoices.length === 0 ? (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground">No invoices found for this client</p>
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

      <ClientDialog
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        client={client}
        onSuccess={() => {
          fetchClientData();
          setEditDialogOpen(false);
        }}
      />
    </CRMLayout>
  );
}
