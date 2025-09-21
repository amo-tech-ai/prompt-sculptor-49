import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Plug, 
  BarChart3, 
  UserCheck, 
  TrendingUp, 
  Shield 
} from 'lucide-react';

export const Capabilities = () => {
  const capabilities = [
    {
      icon: Users,
      title: "Task Delegation",
      description: "Agents collaborate like a human team, each with a clear specialty.",
      color: "text-foreground",
      bgColor: "bg-muted"
    },
    {
      icon: Plug,
      title: "Cross-System Integration", 
      description: "Seamless connections to Supabase, Stripe, WhatsApp, Cloudinary, and more.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: BarChart3,
      title: "Performance Dashboards",
      description: "Monitor accuracy, throughput, ROI, and agent activity in real time.",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: UserCheck,
      title: "Human-in-the-Loop Safeguards",
      description: "Agents ask for approval when confidence is low.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Deploy 5 or 500 agents instantly, with no extra overhead.",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10"
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Enterprise-grade standards (GDPR, SOC2, ISO).",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Core Features
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What Makes{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Multi-Agent Systems Powerful
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-card/50 overflow-hidden relative"
              >
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${capability.bgColor} rounded-full blur-2xl`} />
                
                <CardContent className="p-8 relative z-10">
                  <div className={`${capability.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <capability.icon className={`w-8 h-8 ${capability.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {capability.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};