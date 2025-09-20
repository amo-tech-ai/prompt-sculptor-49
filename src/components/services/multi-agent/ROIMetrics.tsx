import { Badge } from '@/components/ui/badge';
import { TrendingUp, Clock, Star, Zap } from 'lucide-react';

export const ROIMetrics = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "340%",
      label: "Average ROI",
      description: "Return on investment"
    },
    {
      icon: Clock,
      value: "12–16",
      label: "Weeks to Delivery",
      description: "From start to automation"
    },
    {
      icon: Zap,
      value: "90%",
      label: "Process Automation",
      description: "Average workflow coverage"
    },
    {
      icon: Star,
      value: "98%",
      label: "Client Satisfaction",
      description: "Project success rate"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 bg-background/50 backdrop-blur-sm">
              Measurable Impact
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Proven Results,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Measurable Impact
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our clients achieve dramatic efficiency gains while reducing costs. 
              Every project is measured against clear ROI targets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-8 border border-border/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <metric.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                    {metric.value}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {metric.label}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {metric.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};