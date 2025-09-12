import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Download, Sparkles } from 'lucide-react';

export const ProjectsCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-background/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-white">Join Our Success Stories</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            <span className="text-white">Ready to Be Our Next</span>
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">Success Story?</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with AI applications delivered in just 8 weeks. 
            Join the companies already achieving 3x ROI with our proven process.
          </p>

          {/* Urgency Indicator */}
          <div className="inline-flex items-center space-x-2 bg-orange/20 border border-orange/30 rounded-full px-4 py-2 mb-8">
            <Calendar className="h-4 w-4 text-orange" />
            <span className="text-sm font-medium text-orange">Only 2 slots available this month</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-glow"
              asChild
            >
              <Link to="/brief" className="flex items-center space-x-2">
                <span>Start Your 8-Week Journey</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold px-8 py-6 text-lg backdrop-blur-sm"
              asChild
            >
              <Link to="/process" className="flex items-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Download Portfolio PDF</span>
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center text-white/90">
              <div className="text-2xl font-bold text-accent mb-1">8 Weeks</div>
              <span className="font-medium">Average Delivery Time</span>
            </div>
            <div className="text-center text-white/90">
              <div className="text-2xl font-bold text-accent mb-1">0</div>
              <span className="font-medium">Failed Projects</span>
            </div>
            <div className="text-center text-white/90">
              <div className="text-2xl font-bold text-accent mb-1">94%</div>
              <span className="font-medium">On-Time Delivery</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-white/70 text-sm mb-4">Trusted by innovative companies worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-white font-semibold text-sm">FashionOS</div>
              <div className="w-1 h-1 bg-white/50 rounded-full" />
              <div className="text-white font-semibold text-sm">AutoMax</div>
              <div className="w-1 h-1 bg-white/50 rounded-full" />
              <div className="text-white font-semibold text-sm">I Love Medellín</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};