import { Bot, Workflow, Shield, BarChart3, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const CopilotKitDeliverables = () => {
  const deliverables = [
    {
      icon: Bot,
      title: "Embedded Copilots",
      description: "Context-aware AI assistants integrated directly into your application interface",
      details: ["Custom UI components", "Natural language processing", "Real-time user assistance"]
    },
    {
      icon: Workflow,
      title: "Automation Workflows",
      description: "Intelligent workflows that handle complex business processes automatically",
      details: ["Multi-step automation", "Conditional logic", "Error handling & recovery"]
    },
    {
      icon: Shield,
      title: "Human-in-Loop Controls",
      description: "Safety mechanisms and approval workflows for critical operations",
      details: ["Approval gates", "Audit trails", "Permission management"]
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboards",
      description: "Comprehensive monitoring and performance tracking for your AI systems",
      details: ["Usage metrics", "Performance analytics", "ROI tracking"]
    },
    {
      icon: BookOpen,
      title: "Documentation & Training",
      description: "Complete guides and training materials for your team",
      details: ["Technical documentation", "User guides", "Best practices"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Project Deliverables
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What You Get
          </h2>
          <p className="text-xl text-muted-foreground">
            Complete AI integration package with everything you need for success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {deliverables.map((deliverable, index) => {
            const Icon = deliverable.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {deliverable.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {deliverable.description}
                  </p>
                  
                  <div className="space-y-2">
                    {deliverable.details.map((detail, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};