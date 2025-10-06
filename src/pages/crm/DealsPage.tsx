import { CRMLayout } from '@/components/crm/CRMLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function DealsPage() {
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
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Deal
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Coming Soon</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Deals pipeline with kanban board will be available soon.
            </p>
          </CardContent>
        </Card>
      </div>
    </CRMLayout>
  );
}
