import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light via-white to-brand-light/50" />
      
      {/* Floating decorative shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-brand-orange/40 to-pink-400/40 rounded-full blur-3xl opacity-40 animate-float" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-brand-orange2/30 to-purple-400/30 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }} aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left animate-slide-up">
            {/* Main Headline - AI Agency style */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight text-brand-dark">
              Turn Ideas Into{' '}
              <span className="text-brand-orange">AI-Powered</span>{' '}
              Applications in Weeks
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-brand-gray mb-12 max-w-[60ch] leading-relaxed">
              We build intelligent systems using Claude, GPT-4, and modern automation platforms. From $15K MVPs to $250K enterprise solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Link 
                to="/contact" 
                className="pill-button pill-button-primary inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <Link 
                to="/portfolio" 
                className="pill-button pill-button-secondary inline-flex items-center justify-center text-lg px-8 py-4"
              >
                See Our Work
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-3 text-brand-gray">
                <div className="w-3 h-3 bg-brand-orange rounded-full" />
                <span className="font-medium text-lg">✓ 50+ Live Applications</span>
              </div>
              <div className="flex items-center space-x-3 text-brand-gray">
                <div className="w-3 h-3 bg-brand-orange rounded-full" />
                <span className="font-medium text-lg">✓ 2-16 Week Delivery</span>
              </div>
              <div className="flex items-center space-x-3 text-brand-gray">
                <div className="w-3 h-3 bg-brand-orange rounded-full" />
                <span className="font-medium text-lg">✓ Production-Ready Code</span>
              </div>
            </div>
          </div>

          {/* Right Column - Zizi style circular badge and social proof */}
          <div className="text-center lg:text-left animate-slide-up" style={{ animationDelay: '200ms' }}>
            {/* Circular Badge with Text */}
            <div className="relative w-48 h-48 mx-auto mb-12">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm border border-brand-orange/30 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm font-bold text-brand-orange mb-2">AI</div>
                  <div className="text-sm font-bold text-brand-orange mb-4">DEVELOPMENT</div>
                  <Play className="h-8 w-8 text-brand-orange mx-auto" />
                </div>
              </div>
              <div className="absolute -inset-3 border-2 border-dashed border-brand-orange/30 rounded-full animate-spin-slow"></div>
            </div>

            {/* Social Proof */}
            <div className="text-center">
              <p className="text-lg text-brand-gray mb-6">Trusted by 50+ Companies Building the Future</p>
              <div className="flex justify-center items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-blue-500 rounded-full border-2 border-white" />
                  <div className="w-10 h-10 bg-green-500 rounded-full border-2 border-white" />
                  <div className="w-10 h-10 bg-purple-500 rounded-full border-2 border-white" />
                </div>
                <ArrowRight className="h-5 w-5 text-brand-orange" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-brand-orange/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-orange/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
