import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, Sparkles } from 'lucide-react';

export const ProjectsHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-background/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-white">Real Results, Real Impact</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            <span className="text-white">Our AI </span>
            <span className="bg-gradient-accent bg-clip-text text-transparent">Success Stories</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how we've transformed businesses with AI applications delivered in 8 weeks. 
            Real projects, real results, real impact.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-glow"
              asChild
            >
              <Link to="/brief" className="flex items-center space-x-2">
                <span>Start Your Project</span>
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
                <Eye className="h-5 w-5" />
                <span>See Our Process</span>
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center text-white/90">
              <div className="text-2xl font-bold text-accent mb-1">47+</div>
              <span className="font-medium">Projects Delivered</span>
            </div>
            <div className="text-center text-white/90">
              <div className="text-2xl font-bold text-accent mb-1">$4.3M</div>
              <span className="font-medium">Monthly GMV Generated</span>
            </div>
            <div className="text-center text-white/90">
              <div className="text-2xl font-bold text-accent mb-1">293%</div>
              <span className="font-medium">Average ROI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};