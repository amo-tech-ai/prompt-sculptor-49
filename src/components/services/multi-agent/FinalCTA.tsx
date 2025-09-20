import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Download, Play, ArrowRight } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-4 py-2 bg-background/50 backdrop-blur-sm">
            Ready to Transform?
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Start Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              AI Transformation
            </span>{' '}
            Today
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 100+ businesses already running 90% of their operations on autopilot.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-4 h-auto bg-gradient-to-r from-primary to-accent">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
              <Download className="w-5 h-5 mr-2" />
              Download Case Studies
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
              <Play className="w-5 h-5 mr-2" />
              Watch 10-Minute Demo
            </Button>
          </div>
          
          <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <p className="text-lg text-muted-foreground mb-4">
              <span className="font-semibold text-primary">50+ live apps</span> • 
              <span className="font-semibold text-accent ml-2">$4.3M monthly revenue delivered</span>
            </p>
            <p className="text-muted-foreground">
              Every day you wait, manual work eats into profits and competitors move faster. 
              The future of work is autonomous — and it starts here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};