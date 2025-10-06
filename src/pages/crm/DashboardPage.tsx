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

      const totalPipeline = dealsRes.data?.reduce((sum, deal) => {
        if (deal.stage !== 'won' && deal.stage !== 'lost') {
          return sum + Number(deal.deal_value);
        }
        return sum;
      }, 0) || 0;

      const wonDeals = dealsRes.data?.filter(d => d.stage === 'won').length || 0;
      const wonValue = dealsRes.data?.filter(d => d.stage === 'won').reduce((sum, d) => 
        sum + Number(d.deal_value), 0) || 0;

      return {
        totalClients: clientsRes.count || 0,
        totalDeals: dealsRes.data?.filter(d => d.stage !== 'won' && d.stage !== 'lost').length || 0,
        totalPipeline,
        wonDeals,
        wonValue
      };
    }
  });

  const statCards = [
    {
      title: 'Total Clients',
      value: stats?.totalClients || 0,
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'Active Deals',
      value: stats?.totalDeals || 0,
      icon: Briefcase,
      color: 'text-green-600',
      bgColor: 'bg-green-500/10'
    },
    {
      title: 'Pipeline Value',
      value: `$${(stats?.totalPipeline || 0).toLocaleString()}`,
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-500/10'
    },
    {
      title: 'Won Deals',
      value: stats?.wonDeals || 0,
      subtitle: stats?.wonValue ? `$${stats.wonValue.toLocaleString()} total` : undefined,
      icon: FileText,
      color: 'text-orange-600',
      bgColor: 'bg-orange-500/10'
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
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Skeleton className="h-8 w-24" />
                ) : (
                  <>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    {stat.subtitle && (
                      <p className="text-xs text-muted-foreground mt-1">{stat.subtitle}</p>
                    )}
                  </>
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
