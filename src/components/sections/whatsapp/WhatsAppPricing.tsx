import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, ArrowRight } from 'lucide-react';

export const WhatsAppPricing = () => {
  const packages = [
    {
      name: "Starter",
      price: "$799",
      duration: "/month",
      description: "Perfect for small businesses ready to automate",
      features: [
        "3 automation flows",
        "5,000 messages included",
        "Basic AI chatbot",
        "Cart recovery system",
        "Email support",
        "Analytics dashboard"
      ],
      expectedROI: "250%",
      cta: "Get Started",
      popular: false
    },
    {
      name: "Growth",
      price: "$2,499", 
      duration: "/month",
      description: "Advanced AI and unlimited flows for scaling businesses",
      features: [
        "Unlimited automation flows",
        "50,000 messages included",
        "Advanced AI (GPT-4)",
        "CRM integrations",
        "A/B testing suite",
        "Priority support",
        "Custom training",
        "Advanced analytics"
      ],
      expectedROI: "450%",
      cta: "Start Growth Plan",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$5,999",
      duration: "+/month",
      description: "Custom AI, dedicated support, and enterprise SLAs",
      features: [
        "Custom AI development",
        "Unlimited messages",
        "White-label solution",
        "24/7 dedicated support", 
        "Custom integrations",
        "SLA guarantees",
        "Dedicated account manager",
        "Advanced security"
      ],
      expectedROI: "600%+",
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Pricing Packages That Pay For Themselves
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that fits your business size. Every package includes guaranteed ROI or your money back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative h-full ${
                  pkg.popular 
                    ? 'border-2 border-primary shadow-2xl scale-105' 
                    : 'border border-muted hover:shadow-xl'
                } transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                    <span className="text-muted-foreground">{pkg.duration}</span>
                  </div>
                  <p className="text-muted-foreground mt-4">{pkg.description}</p>
                  <div className="bg-gradient-to-r from-primary/10 to-green-500/10 rounded-lg p-3 mt-4">
                    <p className="text-sm font-semibold text-primary">
                      Expected ROI: {pkg.expectedROI}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-muted hover:bg-muted/80 text-foreground'
                    }`}
                    size="lg"
                  >
                    {pkg.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Case Study Highlight */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-primary/10 to-green-500/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Client Success Story</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  "AMO AI's WhatsApp automation generated <span className="text-primary font-semibold">$1.2M additional revenue</span> in 6 months. 
                  The ROI was immediate and the system runs itself."
                </p>
                <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">67%</div>
                    <div>Cart Recovery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">450%</div>
                    <div>ROI Achieved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">6 weeks</div>
                    <div>Implementation</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};