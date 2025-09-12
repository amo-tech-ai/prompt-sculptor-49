import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, FileText, MessageCircle } from 'lucide-react';

export const ServicesCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-brand-dark via-brand-dark to-gray-900">
      {/* Background Elements */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-brand-orange/15 to-brand-orange2/8 rounded-full blur-3xl opacity-50 animate-float" 
        style={{ 
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          animationDelay: '0s'
        }}
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-brand-orange2/10 to-purple-400/5 rounded-full blur-2xl opacity-40 animate-float" 
        style={{ 
          borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
          animationDelay: '2s'
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-400/8 to-brand-orange/12 rounded-full blur-xl opacity-30 animate-float" 
        style={{ 
          borderRadius: '50% 30% 50% 30% / 30% 50% 30% 50%',
          animationDelay: '1s'
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            <span className="text-white font-medium">Ready to Transform Your Business?</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 text-white leading-tight">
            Start Your AI{' '}
            <span className="bg-gradient-to-r from-brand-orange to-brand-orange2 bg-clip-text text-transparent">
              Transformation
            </span>
            {' '}Today
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join 50+ companies who've already transformed their operations with our AI-powered solutions. Let's discuss how we can accelerate your business growth.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button className="bg-brand-orange hover:bg-brand-orange2 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-3 group">
              <Calendar className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Schedule Free Consultation</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="border-2 border-white/30 text-white hover:border-brand-orange hover:bg-brand-orange/10 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 flex items-center space-x-3 group">
              <FileText className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span>View Case Studies</span>
            </button>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-brand-orange/50 transition-all duration-300 animate-slide-up group text-center">
            <div className="w-16 h-16 bg-brand-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300">
              <Calendar className="h-8 w-8 text-brand-orange group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-orange transition-colors duration-300">
              Free Strategy Call
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              30-minute consultation to understand your needs and explore AI opportunities for your business.
            </p>
            <button className="text-brand-orange hover:text-white font-semibold flex items-center space-x-2 mx-auto group-hover:bg-brand-orange px-4 py-2 rounded-full transition-all duration-300">
              <span>Book Now</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-brand-orange/50 transition-all duration-300 animate-slide-up group text-center" style={{ animationDelay: '200ms' }}>
            <div className="w-16 h-16 bg-brand-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300">
              <FileText className="h-8 w-8 text-brand-orange group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-orange transition-colors duration-300">
              Custom Proposal
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Detailed project proposal with timeline, costs, and expected ROI based on your specific requirements.
            </p>
            <button className="text-brand-orange hover:text-white font-semibold flex items-center space-x-2 mx-auto group-hover:bg-brand-orange px-4 py-2 rounded-full transition-all duration-300">
              <span>Get Quote</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-brand-orange/50 transition-all duration-300 animate-slide-up group text-center" style={{ animationDelay: '400ms' }}>
            <div className="w-16 h-16 bg-brand-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300">
              <MessageCircle className="h-8 w-8 text-brand-orange group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-orange transition-colors duration-300">
              Quick Questions
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Have questions about our services? Send us a message and we'll respond within 24 hours.
            </p>
            <button className="text-brand-orange hover:text-white font-semibold flex items-center space-x-2 mx-auto group-hover:bg-brand-orange px-4 py-2 rounded-full transition-all duration-300">
              <span>Contact Us</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20 animate-slide-up">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-2">50+</div>
            <div className="text-gray-300">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-2">98%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-2">340%</div>
            <div className="text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};