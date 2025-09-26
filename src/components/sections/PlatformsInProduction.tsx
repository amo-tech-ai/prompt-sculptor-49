import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, MapPin, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PlatformsInProduction = () => {
  const platforms = [
    {
      icon: TrendingUp,
      name: "FashionOS",
      description: "Event management platform for fashion industry",
      metrics: "Reduced event setup from 3 days to 3 minutes. 90% tasks automated.",
      status: "Live",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: MapPin,
      name: "I Love Medellín",
      description: "Tourism marketplace with AI concierge",
      metrics: "Tourism marketplace with AI concierge. Targeting $75K monthly revenue.",
      status: "Scaling",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Car,
      name: "Automotive Marketplace",
      description: "Multi-dealer platform processing millions",
      metrics: "Multi-dealer platform processing $4.3M/month. 500+ dealers connected.",
      status: "Enterprise",
      color: "text-orange",
      bgColor: "bg-orange/10"
    }
  ];

  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 border-background/20 text-background">
              Live Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-background">
              Platforms in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange/70">
                Production
              </span>
            </h2>
            <p className="text-lg text-background/70 max-w-3xl mx-auto">
              Real applications generating real revenue for real businesses across multiple industries.
            </p>
          </div>

          {/* Platforms Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {platforms.map((platform, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group border-0 bg-background/10 backdrop-blur-sm"
              >
                <div className={`${platform.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <platform.icon className={`w-8 h-8 ${platform.color}`} />
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-background">
                    {platform.name}
                  </h3>
                  <Badge variant="secondary" className={`${platform.color} font-medium`}>
                    {platform.status}
                  </Badge>
                </div>
                
                <p className="text-background/70 mb-4 leading-relaxed">
                  {platform.description}
                </p>
                
                <div className="border-l-4 border-orange/50 pl-4 mb-6">
                  <p className="font-semibold text-background text-sm">
                    {platform.metrics}
                  </p>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to="/projects" className="flex items-center justify-center space-x-2">
                    <span>View Case Study</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/projects" className="flex items-center space-x-2">
                <span>See All Success Stories</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};