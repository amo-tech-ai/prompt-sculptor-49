import { Search, Rocket, Network, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const CopilotKitProcess = () => {
  const steps = [
    {
      icon: Search,
      week: "Weeks 1-2",
      title: "Discovery",
      description: "Define workflows & ROI targets. Analyze your current application architecture and identify optimization opportunities.",
      deliverables: ["Workflow analysis", "ROI projections", "Technical blueprint"],
      color: "text-blue-600",
      bg: "bg-blue-600/10"
    },
    {
      icon: Rocket,
      week: "Weeks 3-4",
      title: "Pilot",
      description: "First copilot in 2 weeks. Deploy initial AI assistant with core functionality and user feedback integration.",
      deliverables: ["Working prototype", "User testing", "Performance metrics"],
      color: "text-green-600",
      bg: "bg-green-600/10"
    },
    {
      icon: Network,
      week: "Weeks 5-6",
      title: "Expansion",
      description: "Multi-agent automation & integrations. Scale AI capabilities and connect with existing systems and workflows.",
      deliverables: ["Multi-agent system", "API integrations", "Advanced features"],
      color: "text-purple-600",
      bg: "bg-purple-600/10"
    },
    {
      icon: TrendingUp,
      week: "Weeks 7-8",
      title: "Optimization",
      description: "Scale, dashboards, ongoing tuning. Fine-tune performance, implement analytics, and establish monitoring systems.",
      deliverables: ["Performance dashboards", "Optimization reports", "Training documentation"],
      color: "text-orange-600",
      bg: "bg-orange-600/10"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Implementation Timeline
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Our proven 8-week process gets you from concept to production
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline visualization for desktop */}
          <div className="hidden lg:block mb-16">
            <div className="flex items-center justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2"></div>
              {steps.map((_, index) => (
                <div key={index} className="w-4 h-4 rounded-full bg-primary border-4 border-background relative z-10"></div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-xl ${step.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 ${step.color}`} />
                    </div>
                    
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {step.week}
                    </Badge>
                    
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {step.description}
                    </p>
                    
                    <div className="space-y-1">
                      <div className="text-xs font-medium text-muted-foreground mb-2">Key Deliverables:</div>
                      {step.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1 h-1 rounded-full bg-primary mr-2"></div>
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};