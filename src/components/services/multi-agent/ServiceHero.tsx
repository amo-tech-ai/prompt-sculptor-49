import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, BarChart3 } from 'lucide-react';

export const ServiceHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground">
            Multi-Agent{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              AI Systems
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Specialized AI agents that collaborate to run your business workflows at scale — 
            delivering up to <span className="text-primary font-semibold">90% automation</span> in just 12–16 weeks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8 py-4 h-auto">
              <Phone className="w-5 h-5 mr-2" />
              Book Discovery Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
              <BarChart3 className="w-5 h-5 mr-2" />
              See Client Results
            </Button>
          </div>
          
          {/* Abstract AI network visualization */}
          <div className="relative max-w-2xl mx-auto">
            <div className="flex justify-center items-center space-x-8">
              {[1, 2, 3, 4, 5].map((node) => (
                <div
                  key={node}
                  className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"
                  style={{ animationDelay: `${node * 0.2}s` }}
                />
              ))}
            </div>
            <div className="mt-4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};