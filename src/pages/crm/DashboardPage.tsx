import { CRMLayout } from '@/components/crm/CRMLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { 
  Users, 
  Briefcase, 
  FileText, 
  TrendingUp, 
  DollarSign, 
  AlertCircle, 
  CheckCircle,
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: async () => {
      const [clientsRes, dealsRes, invoicesRes, activitiesRes] = await Promise.all([
        supabase.from('clients').select('*, user_roles!clients_assigned_to_fkey(user_id)'),
        supabase.from('deals').select('*, clients(company_name)'),
        supabase.from('invoices').select('*, clients(company_name)'),
        supabase.from('activities').select('*, clients(company_name), deals(deal_name)').order('created_at', { ascending: false }).limit(10)
      ]);

      const deals = dealsRes.data || [];
      const invoices = invoicesRes.data || [];
      const today = new Date();

      // Deal statistics
      const activeDeals = deals.filter(d => d.stage !== 'won' && d.stage !== 'lost');
      const wonDeals = deals.filter(d => d.stage === 'won');
      const lostDeals = deals.filter(d => d.stage === 'lost');
      
      const totalPipeline = activeDeals.reduce((sum, deal) => sum + Number(deal.deal_value), 0);
      const wonValue = wonDeals.reduce((sum, d) => sum + Number(d.deal_value), 0);
      const lostValue = lostDeals.reduce((sum, d) => sum + Number(d.deal_value), 0);

      // Deal stage breakdown
      const pipelineByStage = {
        lead: deals.filter(d => d.stage === 'lead').length,
        qualified: deals.filter(d => d.stage === 'qualified').length,
        proposal: deals.filter(d => d.stage === 'proposal').length,
        negotiation: deals.filter(d => d.stage === 'negotiation').length,
        won: wonDeals.length,
        lost: lostDeals.length,
      };

      // Invoice statistics
      const paidInvoices = invoices.filter(i => i.status === 'paid');
      const overdueInvoices = invoices.filter(i => {
        return i.status !== 'paid' && i.status !== 'cancelled' && new Date(i.due_date) < today;
      });
      const pendingInvoices = invoices.filter(i => 
        i.status === 'sent' && new Date(i.due_date) >= today
      );

      const totalInvoiced = invoices.reduce((sum, inv) => sum + Number(inv.amount), 0);
      const totalPaid = paidInvoices.reduce((sum, inv) => sum + Number(inv.amount), 0);
      const totalOverdue = overdueInvoices.reduce((sum, inv) => sum + Number(inv.amount), 0);

      // Win rate calculation
      const closedDeals = wonDeals.length + lostDeals.length;
      const winRate = closedDeals > 0 ? (wonDeals.length / closedDeals) * 100 : 0;

      return {
        // Client stats
        totalClients: clientsRes.data?.length || 0,
        activeClients: clientsRes.data?.filter(c => c.status === 'active').length || 0,
        
        // Deal stats
        totalDeals: activeDeals.length,
        totalPipeline,
        wonDeals: wonDeals.length,
        wonValue,
        lostDeals: lostDeals.length,
        lostValue,
        winRate,
        pipelineByStage,
        recentDeals: deals.slice(0, 5),
        
        // Invoice stats
        totalInvoices: invoices.length,
        paidInvoices: paidInvoices.length,
        overdueInvoices: overdueInvoices.length,
        pendingInvoices: pendingInvoices.length,
        totalInvoiced,
        totalPaid,
        totalOverdue,
        
        // Activity
        recentActivities: activitiesRes.data || []
      };
    }
  });

  const statCards = [
    {
      title: 'Total Clients',
      value: stats?.totalClients || 0,
      subtitle: `${stats?.activeClients || 0} active`,
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-500/10',
      link: '/crm/clients'
    },
    {
      title: 'Active Deals',
      value: stats?.totalDeals || 0,
      subtitle: `${stats?.wonDeals || 0} won this period`,
      icon: Briefcase,
      color: 'text-green-600',
      bgColor: 'bg-green-500/10',
      link: '/crm/deals'
    },
    {
      title: 'Pipeline Value',
      value: `$${(stats?.totalPipeline || 0).toLocaleString()}`,
      subtitle: stats?.winRate ? `${stats.winRate.toFixed(0)}% win rate` : undefined,
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-500/10',
      link: '/crm/deals'
    },
    {
      title: 'Total Revenue',
      value: `$${(stats?.wonValue || 0).toLocaleString()}`,
      subtitle: `${stats?.wonDeals || 0} deals closed`,
      icon: DollarSign,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-500/10',
      link: '/crm/deals'
    }
  ];

  const invoiceCards = [
    {
      title: 'Total Invoiced',
      value: `$${(stats?.totalInvoiced || 0).toLocaleString()}`,
      subtitle: `${stats?.totalInvoices || 0} invoices`,
      icon: FileText,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-500/10'
    },
    {
      title: 'Paid Invoices',
      value: `$${(stats?.totalPaid || 0).toLocaleString()}`,
      subtitle: `${stats?.paidInvoices || 0} invoices`,
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-500/10'
    },
    {
      title: 'Pending Payment',
      value: stats?.pendingInvoices || 0,
      subtitle: 'Awaiting payment',
      icon: Clock,
      color: 'text-amber-600',
      bgColor: 'bg-amber-500/10'
    },
    {
      title: 'Overdue',
      value: `$${(stats?.totalOverdue || 0).toLocaleString()}`,
      subtitle: `${stats?.overdueInvoices || 0} invoices`,
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-500/10'
    }
  ];

  const activityTypeConfig: Record<string, { icon: any; color: string }> = {
    note: { icon: FileText, color: 'text-blue-600' },
    email: { icon: FileText, color: 'text-purple-600' },
    call: { icon: FileText, color: 'text-green-600' },
    meeting: { icon: Users, color: 'text-orange-600' },
    task: { icon: CheckCircle, color: 'text-indigo-600' },
    status_change: { icon: TrendingUp, color: 'text-amber-600' },
    file_upload: { icon: FileText, color: 'text-gray-600' },
    system: { icon: AlertCircle, color: 'text-gray-500' },
  };

  return (
    <CRMLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening with your business.
          </p>
        </div>

        {/* Main Metrics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat) => (
            <Link key={stat.title} to={stat.link}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
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
            </Link>
          ))}
        </div>

        {/* Invoice Metrics */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Invoice Overview</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {invoiceCards.map((stat) => (
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
        </div>

        {/* Pipeline Breakdown and Recent Activity */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Pipeline by Stage */}
          <Card>
            <CardHeader>
              <CardTitle>Pipeline by Stage</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Skeleton key={i} className="h-12 w-full" />
                  ))}
                </div>
              ) : stats?.pipelineByStage ? (
                <div className="space-y-3">
                  {Object.entries(stats.pipelineByStage).map(([stage, count]) => {
                    const stageColors: Record<string, string> = {
                      lead: 'bg-blue-500',
                      qualified: 'bg-purple-500',
                      proposal: 'bg-pink-500',
                      negotiation: 'bg-amber-500',
                      won: 'bg-green-500',
                      lost: 'bg-red-500',
                    };
                    
                    const maxCount = Math.max(...Object.values(stats.pipelineByStage));
                    const percentage = maxCount > 0 ? (count as number / maxCount) * 100 : 0;

                    return (
                      <div key={stage} className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium capitalize text-foreground">{stage}</span>
                          <span className="text-muted-foreground">{count as number} deals</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${stageColors[stage]}`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-8">
                  No pipeline data available
                </p>
              )}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Activity</CardTitle>
              <Badge variant="secondary" className="text-xs">
                Last 10
              </Badge>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Skeleton key={i} className="h-16 w-full" />
                  ))}
                </div>
              ) : stats?.recentActivities && stats.recentActivities.length > 0 ? (
                <div className="space-y-4 max-h-[400px] overflow-y-auto">
                  {stats.recentActivities.map((activity: any) => {
                    const config = activityTypeConfig[activity.activity_type] || activityTypeConfig.system;
                    const ActivityIcon = config.icon;

                    return (
                      <div key={activity.id} className="flex gap-3 pb-4 border-b last:border-0">
                        <div className={`p-2 rounded-lg bg-muted h-fit`}>
                          <ActivityIcon className={`h-4 w-4 ${config.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">
                            {activity.subject || 'Activity'}
                          </p>
                          {activity.description && (
                            <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                              {activity.description}
                            </p>
                          )}
                          <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                            <span className="capitalize">{activity.activity_type}</span>
                            {activity.clients && (
                              <>
                                <span>•</span>
                                <span>{activity.clients.company_name}</span>
                              </>
                            )}
                            {activity.deals && (
                              <>
                                <span>•</span>
                                <span>{activity.deals.deal_name}</span>
                              </>
                            )}
                            <span>•</span>
                            <span>{format(new Date(activity.created_at), 'MMM dd, HH:mm')}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-8">
                  No recent activity. Start by adding clients or deals!
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="grid gap-6 md:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-24 w-full" />
                ))}
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Win Rate</p>
                  <div className="flex items-end gap-2">
                    <p className="text-3xl font-bold text-foreground">
                      {stats?.winRate?.toFixed(1) || 0}%
                    </p>
                    {stats?.winRate && stats.winRate > 50 ? (
                      <ArrowUpRight className="h-5 w-5 text-green-600 mb-1" />
                    ) : (
                      <ArrowDownRight className="h-5 w-5 text-red-600 mb-1" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {stats?.wonDeals || 0} won / {(stats?.wonDeals || 0) + (stats?.lostDeals || 0)} closed
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Average Deal Size</p>
                  <p className="text-3xl font-bold text-foreground">
                    ${stats?.wonDeals && stats.wonDeals > 0
                      ? ((stats.wonValue || 0) / stats.wonDeals).toLocaleString(undefined, { maximumFractionDigits: 0 })
                      : '0'
                    }
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Based on won deals
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Collection Rate</p>
                  <p className="text-3xl font-bold text-foreground">
                    {stats?.totalInvoiced && stats.totalInvoiced > 0
                      ? ((stats.totalPaid / stats.totalInvoiced) * 100).toFixed(1)
                      : '0'
                    }%
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ${(stats?.totalPaid || 0).toLocaleString()} / ${(stats?.totalInvoiced || 0).toLocaleString()}
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </CRMLayout>
  );
}
