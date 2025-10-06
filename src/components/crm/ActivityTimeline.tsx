import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Phone,
  Mail,
  Calendar,
  FileText,
  CheckCircle2,
  User,
  Clock,
} from 'lucide-react';
import { format } from 'date-fns';

interface Activity {
  id: string;
  activity_type: 'call' | 'email' | 'meeting' | 'note' | 'task' | 'other';
  subject: string;
  description: string | null;
  created_at: string;
  scheduled_at: string | null;
  completed_at: string | null;
  profiles?: {
    full_name: string;
  };
}

interface ActivityTimelineProps {
  activities: Activity[];
}

export function ActivityTimeline({ activities }: ActivityTimelineProps) {
  const getActivityIcon = (type: string) => {
    const icons = {
      call: Phone,
      email: Mail,
      meeting: Calendar,
      note: FileText,
      task: CheckCircle2,
      other: User,
    };
    const Icon = icons[type as keyof typeof icons] || User;
    return <Icon className="h-4 w-4" />;
  };

  const getActivityColor = (type: string) => {
    const colors = {
      call: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      email: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
      meeting: 'bg-green-500/10 text-green-500 border-green-500/20',
      note: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
      task: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
      other: 'bg-gray-500/10 text-gray-500 border-gray-500/20',
    };
    return colors[type as keyof typeof colors] || colors.other;
  };

  if (activities.length === 0) {
    return (
      <Card className="p-8 text-center">
        <p className="text-muted-foreground">No activities recorded yet</p>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <Card key={activity.id} className="p-4">
          <div className="flex gap-4">
            {/* Timeline Line */}
            <div className="flex flex-col items-center">
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center ${
                  activity.completed_at ? 'bg-green-500/10' : 'bg-primary/10'
                }`}
              >
                {getActivityIcon(activity.activity_type)}
              </div>
              {index < activities.length - 1 && (
                <div className="w-0.5 flex-1 bg-border mt-2" style={{ minHeight: '24px' }} />
              )}
            </div>

            {/* Activity Content */}
            <div className="flex-1 min-w-0 pb-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-semibold text-foreground">{activity.subject}</h4>
                  <Badge
                    variant="outline"
                    className={getActivityColor(activity.activity_type)}
                  >
                    {activity.activity_type}
                  </Badge>
                  {activity.completed_at && (
                    <Badge variant="outline" className="bg-green-500/10 text-green-500">
                      Completed
                    </Badge>
                  )}
                </div>
              </div>

              {activity.description && (
                <p className="text-sm text-muted-foreground mb-2">{activity.description}</p>
              )}

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                {activity.profiles && (
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{activity.profiles.full_name}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{format(new Date(activity.created_at), 'MMM d, yyyy h:mm a')}</span>
                </div>
                {activity.scheduled_at && (
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Scheduled: {format(new Date(activity.scheduled_at), 'MMM d, yyyy')}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
