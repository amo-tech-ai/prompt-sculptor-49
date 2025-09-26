import { TrendingUp, HeadphonesIcon, DollarSign, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const CopilotKitResults = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "70%",
      label: "Time Savings",
      description: "Average reduction in manual task completion time"
    },
    {
      icon: HeadphonesIcon,
      value: "40%",
      label: "Fewer Support Tickets",
      description: "Reduction in customer support requests"
    },
    {
      icon: DollarSign,
      value: "60 Days",
      label: "ROI Timeline",
      description: "Average time to achieve return on investment"
    },
    {
      icon: Star,
      value: "293%",
      label: "Average ROI",
      description: "Typical return on investment within first year"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Proven Impact
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Results That Matter
          </h2>
          <p className="text-xl text-muted-foreground">
            Measurable outcomes from real CopilotKit implementations
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="border-0 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {metric.value}
                  </div>
                  <div className="font-semibold mb-2 text-foreground">
                    {metric.label}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Case Study Highlight */}
        <Card className="max-w-4xl mx-auto border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-8">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                Case Study Highlight
              </Badge>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                RetailPlus Support Copilot
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Implemented AI-powered customer support copilot that understands product catalogs, 
                order history, and customer preferences to provide instant, accurate assistance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">70%</div>
                  <div className="text-sm text-muted-foreground">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">4.8/5</div>
                  <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">2 Weeks</div>
                  <div className="text-sm text-muted-foreground">Implementation Time</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};