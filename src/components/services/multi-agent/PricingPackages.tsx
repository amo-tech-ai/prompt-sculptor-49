import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, ArrowRight } from 'lucide-react';

export const PricingPackages = () => {
  const packages = [
    {
      name: "Pilot",
      price: "$45K",
      duration: "8 Weeks",
      description: "3–5 agents",
      features: [
        "Automates one department",
        "Ideal for proof of concept",
        "Measurable ROI within 2 months",
        "Basic integrations included",
        "Weekly progress reports"
      ],
      popular: false,
      cta: "Start Pilot"
    },
    {
      name: "Transform",
      price: "$125K", 
      duration: "12 Weeks",
      description: "10–15 agents",
      features: [
        "Multi-department automation",
        "Advanced workflow orchestration",
        "Designed for fast-growing businesses",
        "Complete system integrations",
        "Custom analytics dashboard",
        "Priority support"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "Dominate",
      price: "$250K+",
      duration: "16 Weeks", 
      description: "25+ agents",
      features: [
        "Full enterprise automation",
        "AI-powered decision making",
        "Industry leadership positioning",
        "Custom knowledge base",
        "Enterprise security compliance",
        "Dedicated success manager",
        "Ongoing optimization"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Investment Options
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Choose the Right Path{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                for Your Business
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <Card 
                key={index}
                className={`relative transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-card/50 ${
                  pkg.popular ? 'ring-2 ring-primary/50 scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                      {pkg.price}
                    </div>
                    <div className="text-sm text-muted-foreground">({pkg.duration})</div>
                    <div className="text-lg font-medium">{pkg.description}</div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-primary to-accent' : ''}`}
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    {pkg.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Case Study Highlight */}
          <div className="text-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
            <h3 className="text-xl font-bold mb-2">Real Client Success</h3>
            <p className="text-muted-foreground">
              A logistics company invested <span className="font-semibold text-primary">$125K</span> → 
              saved <span className="font-semibold text-green-600">$725K</span> in labor + 
              generated <span className="font-semibold text-blue-600">$500K</span> in new revenue within the first year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};