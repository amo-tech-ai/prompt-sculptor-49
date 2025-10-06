import { CRMLayout } from '@/components/crm/CRMLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function InvoicesPage() {
  return (
    <CRMLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Invoices</h1>
            <p className="text-muted-foreground mt-1">
              Manage invoices and track payments
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Invoice
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Coming Soon</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Invoice management features will be available soon.
            </p>
          </CardContent>
        </Card>
      </div>
    </CRMLayout>
  );
}
