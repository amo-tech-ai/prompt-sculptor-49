import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Zap, Cog } from 'lucide-react';

export const ServicePillars = () => {
  const pillars = [
    {
      icon: Brain,
      title: "Intelligent Apps",
      description: "AI-powered applications that learn, adapt, and deliver personalized experiences for your users.",
      value: "From $15K → Enterprise Ready",
      highlight: "Latest AI stack",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Zap,
      title: "Launch Fast",
      description: "2-8 week delivery vs 6 months with traditional agencies. Get to market faster with validated MVPs.",
      value: "8x Faster Delivery",
      highlight: "Most Popular",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Cog,
      title: "Automate Everything",
      description: "Transform manual processes into intelligent workflows. From $50K investment → Payback in 3 months.",
      value: "293% Average ROI",
      highlight: "Proven Results",
      color: "text-orange",
      bgColor: "bg-orange/10"
    }
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 border-amo-orange text-amo-orange">
              Service Excellence
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
              Three Pillars of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amo-orange to-amo-orange-light">
                AI Success
              </span>
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              We deliver in 2–8 weeks vs 6 months with traditional agencies. 
              Focus on ROI, not just technology.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group border border-amo-orange/20 bg-gradient-to-br from-primary-foreground/95 to-primary-foreground relative overflow-hidden text-primary"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amo-orange/10 to-amo-orange/20 rounded-full blur-2xl" />
                
                <div className={`${pillar.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10`}>
                  <pillar.icon className={`w-8 h-8 ${pillar.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-4 relative z-10">
                  {pillar.title}
                </h3>
                
                <p className="text-primary/80 mb-6 leading-relaxed relative z-10">
                  {pillar.description}
                </p>
                
                <div className="space-y-3 relative z-10">
                  <div className="inline-flex items-center text-lg font-bold text-amo-orange bg-amo-orange/10 px-4 py-2 rounded-full">
                    {pillar.value}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-amo-orange bg-amo-orange/10 font-medium">
                      {pillar.highlight}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};