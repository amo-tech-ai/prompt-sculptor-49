import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light via-white to-brand-light/50" />
      
      {/* Floating decorative shapes - responsive positioning */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-brand-orange/40 to-pink-400/40 rounded-full blur-3xl opacity-40 animate-float" aria-hidden="true" />
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-brand-orange2/30 to-purple-400/30 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }} aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left animate-slide-up">
            {/* Main Headline - AI Agency style - responsive text sizing */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-6 sm:mb-8 leading-tight text-brand-dark">
              Turn Ideas Into{' '}
              <span className="text-brand-orange">AI-Powered</span>{' '}
              Applications in Weeks
            </h1>

            {/* Subheadline - responsive text sizing */}
            <p className="text-lg sm:text-xl md:text-2xl text-brand-gray mb-6 sm:mb-8 max-w-[60ch] leading-relaxed">
              We build intelligent systems with Claude, GPT-4, and CopilotKit. From $15K MVPs to enterprise solutions, we deliver production-ready apps in 2–8 weeks.
            </p>

            {/* ROI Proof */}
            <div className="bg-brand-orange/10 border border-brand-orange/20 rounded-2xl px-6 py-4 mb-8 sm:mb-12 max-w-2xl">
              <p className="text-lg font-semibold text-brand-dark">
                293% average ROI in 3 months. $4.3M in monthly client revenue already delivered.
              </p>
            </div>

            {/* CTAs - responsive spacing and sizing */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16">
              <Link 
                to="/brief-collection" 
                className="pill-button pill-button-primary inline-flex items-center justify-center space-x-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              
              <Link 
                to="/projects" 
                className="pill-button pill-button-secondary inline-flex items-center justify-center text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                See 50+ Live Projects
              </Link>
            </div>

            {/* Trust Statement */}
            <div className="max-w-5xl">
              <p className="text-brand-gray/70 text-sm text-center">Trusted by companies worldwide • Built with enterprise-grade technologies</p>
            </div>
          </div>

          {/* Right Column - AMO AI style circular badge and social proof - responsive sizing */}
          <div className="text-center lg:text-left animate-slide-up" style={{ animationDelay: '200ms' }}>
            {/* Circular Badge with Text - responsive sizing */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-8 sm:mb-12">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm border border-brand-orange/30 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs sm:text-sm font-bold text-brand-orange mb-1 sm:mb-2">AI</div>
                  <div className="text-xs sm:text-sm font-bold text-brand-orange mb-2 sm:mb-4">DEVELOPMENT</div>
                  <Play className="h-6 w-6 sm:h-8 sm:w-8 text-brand-orange mx-auto" />
                </div>
              </div>
              <div className="absolute -inset-2 sm:-inset-3 border-2 border-dashed border-brand-orange/30 rounded-full animate-spin-slow"></div>
            </div>

            {/* Social Proof - responsive text and layout */}
            <div className="text-center">
              <p className="text-base sm:text-lg text-brand-gray mb-4 sm:mb-6">Trusted by 50+ Companies Building the Future</p>
              <div className="flex justify-center items-center space-x-3">
                <div className="flex -space-x-1 sm:-space-x-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-foreground rounded-full border-2 border-white" />
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-orange rounded-full border-2 border-white" />
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-muted-foreground rounded-full border-2 border-white" />
                </div>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-brand-orange" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - responsive positioning */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-brand-orange/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-brand-orange/60 rounded-full mt-1 sm:mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
