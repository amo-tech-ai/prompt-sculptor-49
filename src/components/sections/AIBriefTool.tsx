import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Brain, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AIBriefTool = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "30 min AI-powered briefing vs 2.5 hrs traditional calls",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Brain,
      title: "Smarter Scoping",
      description: "AI suggests timeline, budget, and tech stack instantly",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: TrendingUp,
      title: "Higher ROI",
      description: "Projects aligned with your business goals from day one",
      color: "text-orange",
      bgColor: "bg-orange/10"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge variant="outline" className="mb-4 px-4 py-2">
                AI-Powered Discovery
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Create Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Project Brief
                </span>{' '}
                in Minutes
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our AI consultant guides you through a simple discovery process to understand your goals 
                and deliver a tailored solution. No long forms, no endless calls — just clear results.
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`${benefit.bgColor} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" asChild className="shadow-lg">
                <Link to="/brief-collection" className="flex items-center space-x-2">
                  <span>Start My AI Project Brief</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Right Visual */}
            <div>
              <Card className="p-1 shadow-2xl bg-gradient-to-br from-card to-card/50 border-0">
                <img 
                  src="/src/assets/ai-brief-tool.png" 
                  alt="AI Project Brief Tool Interface" 
                  className="w-full h-auto rounded-lg"
                />
              </Card>
              
              {/* Stats overlay */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <Card className="p-4 text-center border-0 bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="text-2xl font-bold text-primary mb-1">30min</div>
                  <div className="text-xs text-muted-foreground">Average completion time</div>
                </Card>
                <Card className="p-4 text-center border-0 bg-gradient-to-br from-accent/5 to-orange/5">
                  <div className="text-2xl font-bold text-accent mb-1">98%</div>
                  <div className="text-xs text-muted-foreground">Project success rate</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};