import { ShoppingCart, Store, Calendar, UtensilsCrossed } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const CopilotKitUseCases = () => {
  const useCases = [
    {
      icon: ShoppingCart,
      industry: "E-Commerce",
      title: "Smart Shopping Assistants",
      description: "AI copilots that guide customers through product discovery, answer questions, and optimize checkout flows.",
      results: "45% fewer abandoned carts, higher repeat sales",
      color: "text-blue-600",
      bg: "bg-blue-600/10"
    },
    {
      icon: Store,
      industry: "Retail",
      title: "AI Shopping Copilots",
      description: "Intelligent product recommendations and personalized shopping experiences that understand customer preferences.",
      results: "20% higher basket size",
      color: "text-green-600",
      bg: "bg-green-600/10"
    },
    {
      icon: Calendar,
      industry: "Events",
      title: "End-to-End AI Assistants",
      description: "Complete event management from registration and reminders to real-time engagement and follow-up.",
      results: "40% fewer no-shows",
      color: "text-purple-600",
      bg: "bg-purple-600/10"
    },
    {
      icon: UtensilsCrossed,
      industry: "Restaurants",
      title: "Reservation & Menu Copilots",
      description: "Smart reservation systems with menu recommendations, dietary assistance, and upselling capabilities.",
      results: "30% reduction in no-shows, higher upsell on orders",
      color: "text-orange-600",
      bg: "bg-orange-600/10"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Use Cases & Real Results
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Industry Solutions That Drive Results
          </h2>
          <p className="text-xl text-muted-foreground">
            See how CopilotKit transforms businesses across different industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl ${useCase.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-8 h-8 ${useCase.color}`} />
                    </div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {useCase.industry}
                      </Badge>
                      <h3 className="text-xl font-semibold text-foreground">
                        {useCase.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="text-sm text-muted-foreground mb-1">Results:</div>
                    <div className="font-semibold text-primary">
                      {useCase.results}
                    </div>
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