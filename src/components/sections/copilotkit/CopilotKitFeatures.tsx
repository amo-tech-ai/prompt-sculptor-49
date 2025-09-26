import { Brain, Users, Palette, Shield, Zap, Network } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const CopilotKitFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: "Context-Aware Copilots",
      description: "AI assistants that understand your app's state and user context",
      benefit: "60% fewer support tickets",
      color: "text-blue-600",
      bg: "bg-blue-600/10"
    },
    {
      icon: Users,
      title: "Multi-Agent Systems",
      description: "Coordinated AI agents working together on complex tasks",
      benefit: "25x faster content & research",
      color: "text-purple-600",
      bg: "bg-purple-600/10"
    },
    {
      icon: Palette,
      title: "Generative UI",
      description: "Dynamic interfaces that adapt based on user needs and context",
      benefit: "40% higher engagement",
      color: "text-green-600",
      bg: "bg-green-600/10"
    },
    {
      icon: Shield,
      title: "Human-in-the-Loop",
      description: "Safety controls and approval workflows for critical operations",
      benefit: "Compliance & safety assured",
      color: "text-orange-600",
      bg: "bg-orange-600/10"
    },
    {
      icon: Zap,
      title: "Headless + UI Components",
      description: "Flexible architecture with pre-built UI components",
      benefit: "Faster time-to-market",
      color: "text-cyan-600",
      bg: "bg-cyan-600/10"
    },
    {
      icon: Network,
      title: "LangGraph & MCP",
      description: "Advanced workflow orchestration and model connectivity",
      benefit: "Reliable integrations, fewer errors",
      color: "text-red-600",
      bg: "bg-red-600/10"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Key Features & Benefits
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powerful AI Integration Capabilities
          </h2>
          <p className="text-xl text-muted-foreground">
            Transform your applications with cutting-edge AI features that deliver measurable results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <Badge variant="secondary" className="text-xs font-medium">
                    {feature.benefit}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};