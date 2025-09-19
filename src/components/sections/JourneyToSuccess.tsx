import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { CheckCircle, Clock, Users, Rocket } from 'lucide-react';

export const JourneyToSuccess = () => {
  const steps = [
    {
      icon: Users,
      title: "Discovery",
      duration: "2 days",
      description: "AI-powered wizard replaces long calls",
      highlight: "30 minutes vs 2.5-hour calls",
      progress: 25
    },
    {
      icon: CheckCircle,
      title: "Prototype",
      duration: "2 weeks",
      description: "Working prototype tested with users",
      highlight: "Real user feedback",
      progress: 50
    },
    {
      icon: Clock,
      title: "Build",
      duration: "3–6 weeks",
      description: "Weekly sprints with feedback",
      highlight: "Agile development",
      progress: 85
    },
    {
      icon: Rocket,
      title: "Launch",
      duration: "Ongoing",
      description: "Scaling + continuous improvement",
      highlight: "Post-launch support",
      progress: 100
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Journey to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                AI Success
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              A proven 8-week process that transforms ideas into production-ready AI applications.
            </p>
            
            {/* Highlight Feature */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-full px-6 py-3 mb-8">
              <span className="text-sm font-semibold text-foreground">
                ✨ AI Discovery Wizard: 30 minutes vs 2.5-hour calls
              </span>
            </div>
          </div>

          {/* Progress Timeline */}
          <div className="relative mb-16">
            {/* Progress Bar Background */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-secondary rounded-full transform -translate-y-1/2 z-0" />
            
            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Step Card */}
                  <Card className="p-6 w-full max-w-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group border-0 bg-gradient-to-br from-card to-card/50 relative">
                    {/* Progress indicator */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center border-4 border-background`}>
                        <span className="text-xs font-bold text-white">{index + 1}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <div className={`bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      
                      <Badge variant="secondary" className="mb-3 text-xs">
                        {step.duration}
                      </Badge>
                      
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="inline-flex items-center text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {step.highlight}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
            
            {/* Animated Progress Line */}
            <div className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-primary to-accent rounded-full transform -translate-y-1/2 z-10 animate-pulse" style={{ width: '100%' }} />
          </div>

          {/* Bottom Stats */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">2-8</div>
              <div className="text-lg font-medium text-foreground mb-1">Weeks Total</div>
              <div className="text-sm text-muted-foreground">vs 6+ months traditional</div>
            </div>
            <div className="p-6">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-lg font-medium text-foreground mb-1">Success Rate</div>
              <div className="text-sm text-muted-foreground">Every project delivered</div>
            </div>
            <div className="p-6">
              <div className="text-3xl sm:text-4xl font-bold text-orange mb-2">293%</div>
              <div className="text-lg font-medium text-foreground mb-1">Average ROI</div>
              <div className="text-sm text-muted-foreground">Within 3 months</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};