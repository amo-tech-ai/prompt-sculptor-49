import { CRMLayout } from '@/components/crm/CRMLayout';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { DealDialog } from '@/components/crm/DealDialog';
import { DealCard } from '@/components/crm/DealCard';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { toast } from 'sonner';
import { Skeleton } from '@/components/ui/skeleton';

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
  clients?: {
    name: string;
    company_name: string;
  };
}

const stages = [
  { id: 'lead', label: 'Lead', color: 'bg-blue-500' },
  { id: 'qualified', label: 'Qualified', color: 'bg-purple-500' },
  { id: 'proposal', label: 'Proposal', color: 'bg-yellow-500' },
  { id: 'negotiation', label: 'Negotiation', color: 'bg-orange-500' },
  { id: 'won', label: 'Won', color: 'bg-green-500' },
  { id: 'lost', label: 'Lost', color: 'bg-red-500' }
];

export default function DealsPage() {
  const queryClient = useQueryClient();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);
  const [deletingDeal, setDeletingDeal] = useState(false);

  const { data: deals, isLoading } = useQuery({
    queryKey: ['deals'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('deals')
        .select(`
          *,
          clients (
            name,
            company_name
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as Deal[];
    }
  });

  // Real-time subscription
  useEffect(() => {
    const channel = supabase
      .channel('deals-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'deals'
        },
        () => {
          queryClient.invalidateQueries({ queryKey: ['deals'] });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [queryClient]);

  const getDealsByStage = (stageId: string) => {
    return deals?.filter(deal => deal.stage === stageId) || [];
  };

  const getTotalValue = (stageDeals: Deal[]) => {
    return stageDeals.reduce((sum, deal) => sum + deal.deal_value, 0);
  };

  const handleEdit = (deal: Deal) => {
    setSelectedDeal(deal);
    setDialogOpen(true);
  };

  const handleDelete = (deal: Deal) => {
    setSelectedDeal(deal);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!selectedDeal) return;

    setDeletingDeal(true);
    try {
      const { error } = await supabase
        .from('deals')
        .delete()
        .eq('id', selectedDeal.id);

      if (error) throw error;

      toast.success('Deal deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['deals'] });
      setDeleteDialogOpen(false);
    } catch (error: any) {
      toast.error(error.message || 'Failed to delete deal');
    } finally {
      setDeletingDeal(false);
    }
  };

  const handleAddNew = () => {
    setSelectedDeal(null);
    setDialogOpen(true);
  };

  return (
    <CRMLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Deals</h1>
            <p className="text-muted-foreground mt-1">
              Track your sales pipeline and opportunities
            </p>
          </div>
          <Button onClick={handleAddNew}>
            <Plus className="mr-2 h-4 w-4" />
            Add Deal
          </Button>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <Card key={i} className="p-4">
                <Skeleton className="h-6 w-24 mb-4" />
                <Skeleton className="h-32 w-full" />
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {stages.map(stage => {
              const stageDeals = getDealsByStage(stage.id);
              const totalValue = getTotalValue(stageDeals);

              return (
                <div key={stage.id} className="flex flex-col">
                  <Card className="mb-4">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <div className={`h-3 w-3 rounded-full ${stage.color}`} />
                        <CardTitle className="text-sm font-medium">
                          {stage.label}
                        </CardTitle>
                        <span className="ml-auto text-xs text-muted-foreground">
                          {stageDeals.length}
                        </span>
                      </div>
                      {totalValue > 0 && (
                        <p className="text-xs text-muted-foreground mt-1">
                          ${totalValue.toLocaleString()}
                        </p>
                      )}
                    </CardHeader>
                  </Card>

                  <div className="space-y-3 flex-1">
                    {stageDeals.length === 0 ? (
                      <Card className="p-4 border-dashed">
                        <p className="text-sm text-muted-foreground text-center">
                          No deals
                        </p>
                      </Card>
                    ) : (
                      stageDeals.map(deal => (
                        <DealCard
                          key={deal.id}
                          deal={deal}
                          onEdit={handleEdit}
                          onDelete={handleDelete}
                        />
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <DealDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        deal={selectedDeal}
      />

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete <strong>{selectedDeal?.deal_name}</strong>.
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deletingDeal}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              disabled={deletingDeal}
              className="bg-destructive hover:bg-destructive/90"
            >
              {deletingDeal && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Delete Deal
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </CRMLayout>
  );
}
