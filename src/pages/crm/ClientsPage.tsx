import { CRMLayout } from '@/components/crm/CRMLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Plus, Search } from 'lucide-react';
import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function ClientsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: clients, isLoading } = useQuery({
    queryKey: ['clients'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('clients')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    }
  });

  const filteredClients = clients?.filter(client =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    const colors = {
      prospect: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
      active: 'bg-green-500/10 text-green-500 border-green-500/20',
      inactive: 'bg-gray-500/10 text-gray-500 border-gray-500/20',
      archived: 'bg-red-500/10 text-red-500 border-red-500/20'
    };
    return colors[status as keyof typeof colors] || colors.prospect;
  };

  return (
    <CRMLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Clients</h1>
            <p className="text-muted-foreground mt-1">
              Manage your client relationships and contacts
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Client
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search clients by name, company, or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center gap-4 p-4 border border-border rounded-lg">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-4 w-48" />
                      <Skeleton className="h-3 w-32" />
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredClients && filteredClients.length > 0 ? (
              <div className="space-y-4">
                {filteredClients.map((client) => (
                  <div
                    key={client.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-semibold text-primary">
                          {client.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{client.name}</h3>
                        <p className="text-sm text-muted-foreground">{client.company_name}</p>
                        {client.email && (
                          <p className="text-xs text-muted-foreground mt-1">{client.email}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className={getStatusColor(client.status)}>
                        {client.status}
                      </Badge>
                      {client.industry && (
                        <span className="text-sm text-muted-foreground">{client.industry}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Users className="mx-auto h-12 w-12 text-muted-foreground/50" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">No clients found</h3>
                <p className="text-muted-foreground mt-2">
                  {searchQuery ? 'Try adjusting your search' : 'Get started by adding your first client'}
                </p>
                {!searchQuery && (
                  <Button className="mt-4">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Client
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </CRMLayout>
  );
}

function Users(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}
