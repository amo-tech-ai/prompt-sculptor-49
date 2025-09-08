import { ArrowRight, Play } from 'lucide-react';

export const ConnectAgency = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-brand-light">
      {/* Background with floating bubble/gel shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light/50 via-white to-brand-light/30" />
      
      {/* Floating decorative shapes */}
      <div 
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-brand-orange/10 to-pink-400/10 rounded-full blur-3xl opacity-40 animate-float"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-brand-orange2/8 to-purple-400/8 rounded-full blur-3xl opacity-30 animate-float"
        style={{ animationDelay: '1s' }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Play Button */}
          <div className="mb-8">
            <button className="w-20 h-20 bg-white border-2 border-brand-orange rounded-full flex items-center justify-center shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <Play className="h-8 w-8 text-brand-orange ml-1 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
            Ready to Build Something{' '}
            <span className="relative">
              Extraordinary?
              {/* Blurred colorful shape above "Extraordinary?" */}
              <div 
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-purple-400/30 via-pink-400/20 to-orange-400/30 rounded-full blur-2xl opacity-60"
                aria-hidden="true"
              />
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-brand-gray max-w-2xl mx-auto mb-8 leading-relaxed">
            Tell us about your project. No lengthy forms, just a conversation about what's possible.
          </p>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="pill-button pill-button-primary group">
              Schedule a Call - 30 min
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="pill-button pill-button-secondary group">
              Send a Message
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="pill-button pill-button-secondary group">
              See Our Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Direct Contact */}
          <p className="text-brand-gray">
            Or reach out directly: <span className="text-brand-orange font-semibold">hello@youragency.com</span>
          </p>
        </div>
      </div>
    </section>
  );
};