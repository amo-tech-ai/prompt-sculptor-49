import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-background/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-white">AI Automation Specialists</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            <span className="text-white">Turn </span>
            <span className="bg-gradient-accent bg-clip-text text-transparent">3-Day Processes</span>
            <br />
            <span className="text-white">Into </span>
            <span className="bg-gradient-accent bg-clip-text text-transparent">3-Minute Solutions</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI-powered automation that transforms your business in weeks, not months. 
            Join 500+ companies already scaling with intelligent systems.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-glow"
              asChild
            >
              <Link to="/contact" className="flex items-center space-x-2">
                <span>See Live Demo</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold px-8 py-6 text-lg backdrop-blur-sm"
              asChild
            >
              <Link to="/contact">Calculate ROI</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-white/90">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="font-medium">500+ Projects</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white/90">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="font-medium">90% Automation</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white/90">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="font-medium">3-Month ROI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};