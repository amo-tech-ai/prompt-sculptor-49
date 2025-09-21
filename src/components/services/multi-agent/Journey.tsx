import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Map, Network, Brain, Rocket } from 'lucide-react';

export const Journey = () => {
  const phases = [
    {
      icon: Map,
      weeks: "Weeks 1–4",
      title: "Foundation",
      description: "Map workflows, design your first agent team, and launch pilot agents for your biggest bottleneck.",
      color: "text-foreground",
      bgColor: "bg-muted"
    },
    {
      icon: Network,
      weeks: "Weeks 5–8", 
      title: "Expansion",
      description: "Connect departments, integrate data and communication systems, and automate full workflows.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Brain,
      weeks: "Weeks 9–12",
      title: "Intelligence", 
      description: "Add decision-making, analytics agents, and a knowledge base that learns continuously.",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Rocket,
      weeks: "Weeks 13–16",
      title: "Scale",
      description: "Optimize performance, expand across your organization, and prepare for enterprise rollout.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Implementation Roadmap
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              From Manual to Autonomous — in Just{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                12–16 Weeks
              </span>
            </h2>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full transform -translate-y-1/2 z-0" />
            
            <div className="grid lg:grid-cols-4 gap-8 relative z-10">
              {phases.map((phase, index) => (
                <Card 
                  key={index}
                  className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group border-0 bg-gradient-to-br from-card to-card/50 relative overflow-hidden"
                >
                  {/* Background decoration */}
                  <div className={`absolute top-0 right-0 w-24 h-24 ${phase.bgColor} rounded-full blur-2xl`} />
                  
                  <div className={`${phase.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform relative z-10`}>
                    <phase.icon className={`w-10 h-10 ${phase.color}`} />
                  </div>
                  
                  <Badge variant="secondary" className="mb-4">
                    {phase.weeks}
                  </Badge>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 relative z-10">
                    {phase.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed relative z-10">
                    {phase.description}
                  </p>
                  
                  {/* Timeline dot for large screens */}
                  <div className="hidden lg:block absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background" />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};