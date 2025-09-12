import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Zap } from 'lucide-react';

export const ProcessHero = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background gradient matching homepage */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-white to-orange-50/60" />
      
      {/* Floating decorative shapes */}
      <div 
        className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-orange-100/30 to-orange-200/20 rounded-full blur-3xl opacity-60"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-100/20 to-orange-200/15 rounded-full blur-3xl opacity-40"
        style={{ animationDelay: '1s' }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Timeline visual element */}
          <div className="inline-flex items-center space-x-4 mb-8 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-200">
            <Calendar className="h-5 w-5 text-orange-500" />
            <span className="text-orange-700 font-semibold">Week 1</span>
            <ArrowRight className="h-4 w-4 text-orange-400" />
            <span className="text-orange-700 font-semibold">Week 8</span>
            <Zap className="h-5 w-5 text-orange-500" />
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            <span className="text-orange-500">8 Weeks.</span><br />
            Not 8 Months.
          </h1>

          {/* Supporting text */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-4 leading-relaxed">
            While others take 6+ months to deliver, we launch complete AI applications in just 8 weeks.
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Our proven process eliminates delays, reduces scope creep, and gets you to market faster than you thought possible.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl"
            >
              Start Your 8-Week Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-orange-300 text-orange-700 hover:bg-orange-50 px-8 py-4 text-lg rounded-xl"
            >
              See Live Examples
            </Button>
          </div>

          {/* Trust indicator */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Trusted by innovative companies</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <span className="text-gray-400 font-semibold">MotoMatch</span>
              <span className="text-gray-400 font-semibold">Fashionistas</span>
              <span className="text-gray-400 font-semibold">RainfallTech</span>
              <span className="text-gray-400 font-semibold">TechFlow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};