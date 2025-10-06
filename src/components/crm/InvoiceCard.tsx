import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2, FileText, Calendar, DollarSign } from 'lucide-react';
import { format } from 'date-fns';

interface Invoice {
  id: string;
  invoice_number?: string;
  client_id: string;
  deal_id?: string | null;
  amount: number;
  currency?: string;
  status: string;
  issue_date: string;
  due_date: string;
  paid_date?: string | null;
  description?: string;
  clients?: {
    company_name: string;
  };
  deals?: {
    deal_name: string;
  } | null;
}

interface InvoiceCardProps {
  invoice: Invoice;
  onEdit: (invoice: Invoice) => void;
  onDelete: (invoice: Invoice) => void;
}

const statusConfig = {
  draft: { label: 'Draft', className: 'bg-gray-500/10 text-gray-700 hover:bg-gray-500/20' },
  sent: { label: 'Sent', className: 'bg-blue-500/10 text-blue-700 hover:bg-blue-500/20' },
  paid: { label: 'Paid', className: 'bg-green-500/10 text-green-700 hover:bg-green-500/20' },
  overdue: { label: 'Overdue', className: 'bg-red-500/10 text-red-700 hover:bg-red-500/20' },
  cancelled: { label: 'Cancelled', className: 'bg-gray-500/10 text-gray-700 hover:bg-gray-500/20' },
};

export function InvoiceCard({ invoice, onEdit, onDelete }: InvoiceCardProps) {
  const statusInfo = statusConfig[invoice.status as keyof typeof statusConfig] || statusConfig.draft;
  
  const isOverdue = invoice.status !== 'paid' && invoice.status !== 'cancelled' && 
    new Date(invoice.due_date) < new Date();

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground">
                {invoice.invoice_number || 'Draft'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {invoice.clients?.company_name || 'Unknown Client'}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onEdit(invoice)}
              className="h-8 w-8"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onDelete(invoice)}
              className="h-8 w-8 text-destructive hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <DollarSign className="h-4 w-4" />
              <span>Amount</span>
            </div>
            <p className="font-semibold text-lg text-foreground">
              ${invoice.amount.toLocaleString()} {invoice.currency || 'USD'}
            </p>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Due Date</span>
            </div>
            <p className={isOverdue ? 'text-destructive font-medium' : 'text-foreground'}>
              {format(new Date(invoice.due_date), 'MMM dd, yyyy')}
            </p>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Issue Date</span>
            <p className="text-foreground">
              {format(new Date(invoice.issue_date), 'MMM dd, yyyy')}
            </p>
          </div>

          {invoice.paid_date && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Paid Date</span>
              <p className="text-green-600 font-medium">
                {format(new Date(invoice.paid_date), 'MMM dd, yyyy')}
              </p>
            </div>
          )}

          {invoice.deals && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Deal</span>
              <p className="text-foreground">{invoice.deals.deal_name}</p>
            </div>
          )}

          {invoice.description && (
            <p className="text-sm text-muted-foreground line-clamp-2 pt-2 border-t">
              {invoice.description}
            </p>
          )}
        </div>

        <div className="mt-4 pt-4 border-t flex items-center justify-between">
          <Badge className={statusInfo.className}>
            {statusInfo.label}
          </Badge>
          {isOverdue && invoice.status !== 'paid' && (
            <span className="text-xs text-destructive font-medium">
              Overdue
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
