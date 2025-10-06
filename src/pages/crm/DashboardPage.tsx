import { CRMLayout } from '@/components/crm/CRMLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Users, Briefcase, FileText, TrendingUp } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function DashboardPage() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: async () => {
      const [clientsRes, dealsRes, invoicesRes] = await Promise.all([
        supabase.from('clients').select('*', { count: 'exact', head: true }),
        supabase.from('deals').select('*'),
        supabase.from('invoices').select('*')
      ]);

      const totalPipeline = dealsRes.data?.reduce((sum, deal) => 
        sum + Number(deal.deal_value), 0) || 0;

      const wonDeals = dealsRes.data?.filter(d => d.stage === 'won').length || 0;

      return {
        totalClients: clientsRes.count || 0,
        totalDeals: dealsRes.data?.length || 0,
        totalPipeline,
        wonDeals
      };
    }
  });

  const statCards = [
    {
      title: 'Total Clients',
      value: stats?.totalClients || 0,
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Active Deals',
      value: stats?.totalDeals || 0,
      icon: Briefcase,
      color: 'text-green-600'
    },
    {
      title: 'Pipeline Value',
      value: `$${(stats?.totalPipeline || 0).toLocaleString()}`,
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: 'Won Deals',
      value: stats?.wonDeals || 0,
      icon: FileText,
      color: 'text-orange-600'
    }
  ];

  return (
    <CRMLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening with your business.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Skeleton className="h-8 w-24" />
                ) : (
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center py-8">
              No recent activity to display. Start by adding clients or deals!
            </p>
          </CardContent>
        </Card>
      </div>
    </CRMLayout>
  );
}
