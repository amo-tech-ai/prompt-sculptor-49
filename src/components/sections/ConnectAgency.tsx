import { ArrowRight, Play } from 'lucide-react';

export const ConnectAgency = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-brand-light">
      {/* Background with floating bubble/gel shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light/50 via-white to-brand-light/30" />
      
      {/* Floating decorative shapes - responsive positioning */}
      <div 
        className="absolute top-10 sm:top-20 left-4 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-brand-orange/10 to-pink-400/10 rounded-full blur-3xl opacity-40 animate-float"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-36 h-36 sm:w-72 sm:h-72 bg-gradient-to-br from-brand-orange2/8 to-purple-400/8 rounded-full blur-3xl opacity-30 animate-float"
        style={{ animationDelay: '1s' }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Play Button - responsive sizing */}
          <div className="mb-6 sm:mb-8">
            <button className="w-16 h-16 sm:w-20 sm:h-20 bg-white border-2 border-brand-orange rounded-full flex items-center justify-center shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <Play className="h-6 w-6 sm:h-8 sm:w-8 text-brand-orange ml-1 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Main Headline - responsive text sizing */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4 sm:mb-6">
            Ready to Build Something{' '}
            <span className="relative">
              Extraordinary?
              {/* Blurred colorful shape above "Extraordinary?" - responsive sizing */}
              <div 
                className="absolute -top-4 sm:-top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-400/30 via-pink-400/20 to-orange-400/30 rounded-full blur-2xl opacity-60"
                aria-hidden="true"
              />
            </span>
          </h2>

          {/* Subheadline - responsive text sizing */}
          <p className="text-base sm:text-lg text-brand-gray max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
            Tell us about your project. No lengthy forms, just a conversation about what's possible.
          </p>

          {/* Contact Options - responsive layout */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
            <button className="pill-button pill-button-primary group text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3">
              Schedule a Call - 30 min
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="pill-button pill-button-secondary group text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3">
              Send a Message
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="pill-button pill-button-secondary group text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3">
              See Our Work
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Direct Contact - responsive text sizing */}
          <p className="text-sm sm:text-base text-brand-gray">
            Or reach out directly: <span className="text-brand-orange font-semibold">hello@youragency.com</span>
          </p>
        </div>
      </div>
    </section>
  );
};