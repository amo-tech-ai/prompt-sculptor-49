import { AlertCircle, Clock, MessageSquare, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const CopilotKitProblem = () => {
  const challenges = [
    {
      icon: Clock,
      title: "Manual workflows slow teams down",
      description: "Repetitive tasks consume valuable time and resources"
    },
    {
      icon: MessageSquare,
      title: "Chatbots lack context",
      description: "Generic responses frustrate users and don't solve real problems"
    },
    {
      icon: AlertCircle,
      title: "Complex apps overwhelm users",
      description: "Users struggle to find features and complete tasks efficiently"
    },
    {
      icon: TrendingUp,
      title: "Support costs keep rising",
      description: "Manual support requests drain budgets and slow response times"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The Challenge
          </h2>
          <p className="text-xl text-muted-foreground">
            Modern applications face critical usability and efficiency barriers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                    <Icon className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="font-semibold mb-3 text-foreground">
                    {challenge.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {challenge.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};