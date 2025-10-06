import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Building2, DollarSign, Calendar, MoreVertical, Edit, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

interface Deal {
  id: string;
  deal_name: string;
  deal_value: number;
  currency: string;
  stage: string;
  probability: number;
  expected_close_date: string | null;
  clients?: {
    name: string;
    company_name: string;
  };
}

interface DealCardProps {
  deal: Deal;
  onEdit: (deal: Deal) => void;
  onDelete: (deal: Deal) => void;
}

export function DealCard({ deal, onEdit, onDelete }: DealCardProps) {
  const navigate = useNavigate();
  
  return (
    <Card 
      className="p-4 hover:shadow-md transition-shadow cursor-pointer bg-card"
      onClick={() => navigate(`/crm/deals/${deal.id}`)}
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-foreground truncate">{deal.deal_name}</h4>
            {deal.clients && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                <Building2 className="h-3 w-3 flex-shrink-0" />
                <span className="truncate">{deal.clients.company_name}</span>
              </div>
            )}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 flex-shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={(e) => {
                e.stopPropagation();
                onEdit(deal);
              }}>
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(deal);
                }}
                className="text-destructive focus:text-destructive"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="h-4 w-4 text-green-600" />
            <span className="font-semibold text-foreground">
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: deal.currency
              }).format(deal.deal_value)}
            </span>
          </div>

          {deal.expected_close_date && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{format(new Date(deal.expected_close_date), 'MMM d, yyyy')}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {deal.probability}% likely
          </Badge>
        </div>
      </div>
    </Card>
  );
}
