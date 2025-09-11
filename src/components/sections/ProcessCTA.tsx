import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, CheckCircle, Clock } from 'lucide-react';

export const ProcessCTA = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background gradient matching homepage */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700" />
      
      {/* Decorative elements */}
      <div 
        className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Urgency indicator */}
          <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/30 mb-8">
            <Clock className="h-5 w-5" />
            <span className="font-semibold">Only 2 slots available this month</span>
          </div>

          {/* Main headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Launch in{' '}
            <span className="text-orange-200">8 Weeks?</span>
          </h2>

          {/* Supporting text */}
          <p className="text-xl sm:text-2xl text-orange-100 mb-8 leading-relaxed">
            Join the companies that chose speed over slowness, results over excuses.
          </p>

          <p className="text-lg text-orange-200 mb-12 max-w-2xl mx-auto">
            Your competitors are still in month 3 of their 6-month project. You could be launching next month.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50 px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your 8-Week Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-4 text-lg rounded-xl"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Strategy Call
            </Button>
          </div>

          {/* What happens next */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">What Happens Next?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Discovery Call</h4>
                  <p className="text-orange-100 text-sm">30-minute call to understand your vision and requirements</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Project Proposal</h4>
                  <p className="text-orange-100 text-sm">Detailed timeline, scope, and investment within 48 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Week 1 Kickoff</h4>
                  <p className="text-orange-100 text-sm">Start building immediately with our proven 8-week process</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-white font-medium">47 projects delivered</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-white font-medium">94% on-time rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-white font-medium">293% average ROI</span>
              </div>
            </div>
          </div>

          {/* Final testimonial */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-orange-100 text-lg italic mb-4">
                "I wish we had found AMO AI sooner. They delivered in 8 weeks what our previous agency couldn't do in 6 months."
              </p>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full" />
                <div className="text-left">
                  <div className="font-semibold text-white">Marcus Rodriguez</div>
                  <div className="text-sm text-orange-200">CEO, TechFlow Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};