import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';

export const ServicesHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-light via-white to-brand-light">
      {/* Animated Background Elements */}
      <div 
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-brand-orange/20 to-brand-orange2/10 rounded-full blur-3xl opacity-60 animate-float" 
        style={{ 
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          animationDelay: '0s'
        }}
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-brand-orange2/15 to-purple-400/8 rounded-full blur-2xl opacity-40 animate-float" 
        style={{ 
          borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
          animationDelay: '3s'
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-400/8 to-brand-orange/12 rounded-full blur-xl opacity-30 animate-float" 
        style={{ 
          borderRadius: '50% 30% 50% 30% / 30% 50% 30% 50%',
          animationDelay: '1.5s'
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-brand-orange/20 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            <span className="text-brand-dark font-medium">AI-Powered Digital Transformation</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 text-brand-dark leading-tight">
            Our AI-Powered{' '}
            <span className="bg-gradient-to-r from-brand-orange to-brand-orange2 bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-brand-gray mb-12 max-w-4xl mx-auto leading-relaxed">
            Delivered in weeks, not months — using proven tools and frameworks to transform your business with cutting-edge AI solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
            <Button 
              asChild
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange2 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-elegant hover:shadow-lg transition-all duration-300 group"
            >
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 group"
            >
              <Link to="/portfolio" className="flex items-center space-x-2">
                <PlayCircle className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>View Our Work</span>
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-2">340%</div>
              <div className="text-brand-gray">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-2">8-12</div>
              <div className="text-brand-gray">Weeks Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-2">50+</div>
              <div className="text-brand-gray">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-2">98%</div>
              <div className="text-brand-gray">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};