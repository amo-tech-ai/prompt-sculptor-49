// AMO AI - Strapi Test Component
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useClients, useCreateClient } from '@/hooks/useStrapi';
import { Loader2, Plus, Building2 } from 'lucide-react';

const StrapiTestComponent: React.FC = () => {
  const { data: clients, isLoading, error } = useClients();
  const createClientMutation = useCreateClient();

  const handleCreateTestClient = () => {
    createClientMutation.mutate({
      company_name: `Test Client ${Date.now()}`,
      contact_name: 'John Doe',
      contact_email: 'john@example.com',
      status: 'lead',
      budget: 25000,
      industry: 'Technology',
      notes: 'Created via Strapi integration test',
    });
  };

  if (isLoading) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            Loading Strapi Connection...
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Testing connection to Strapi CMS at http://localhost:1337
          </p>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full max-w-2xl mx-auto border-red-200">
        <CardHeader>
          <CardTitle className="text-red-600">Strapi Connection Error</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-600 mb-4">
            Failed to connect to Strapi CMS. Error: {error.message}
          </p>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>• Make sure Strapi is running: <code>npm run develop</code></p>
            <p>• Check if http://localhost:1337 is accessible</p>
            <p>• Verify CORS settings in Strapi</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Connection Status */}
      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="text-green-600 flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Strapi CMS Connected Successfully!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              Connected to AMO AI Strapi backend at http://localhost:1337
            </p>
            <Button 
              onClick={handleCreateTestClient} 
              disabled={createClientMutation.isPending}
              size="sm"
            >
              {createClientMutation.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <Plus className="h-4 w-4 mr-2" />
              )}
              Create Test Client
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Clients List */}
      <Card>
        <CardHeader>
          <CardTitle>Clients from Strapi CMS</CardTitle>
          <p className="text-sm text-muted-foreground">
            Total clients: {clients?.length || 0}
          </p>
        </CardHeader>
        <CardContent>
          {clients && clients.length > 0 ? (
            <div className="space-y-3">
              {clients.map((client) => (
                <div 
                  key={client.id} 
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">{client.company_name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {client.contact_name} • {client.contact_email}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      client.status === 'active' ? 'bg-green-100 text-green-800' :
                      client.status === 'lead' ? 'bg-muted text-foreground' :
                      client.status === 'prospect' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {client.status}
                    </div>
                    {client.budget && (
                      <p className="text-sm text-muted-foreground mt-1">
                        ${client.budget.toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Building2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                No clients found. Create your first test client!
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StrapiTestComponent;
