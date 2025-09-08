import { ArrowRight, CheckCircle } from 'lucide-react';

export const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Discovery",
      timeline: "1-2 days",
      description: "We understand your vision, challenges, and goals. Free consultation to explore possibilities."
    },
    {
      number: "2", 
      title: "Prototype",
      timeline: "1-2 weeks",
      description: "See your idea working. Real functionality, not mockups. Test with actual users."
    },
    {
      number: "3",
      title: "Build",
      timeline: "2-8 weeks", 
      description: "Full development with weekly updates. Your feedback shapes every iteration."
    },
    {
      number: "4",
      title: "Launch",
      timeline: "Ongoing",
      description: "Deploy to production. We handle scaling, monitoring, and continuous improvement."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30" />
      
      {/* Floating decorative shapes */}
      <div 
        className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-orange-100/20 to-orange-200/20 rounded-full blur-3xl opacity-40 animate-float"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-100/15 to-orange-200/15 rounded-full blur-3xl opacity-30 animate-float"
        style={{ animationDelay: '1s' }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Journey to{' '}
            <span className="text-orange-500">AI-Powered</span>{' '}
            Success
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From initial concept to production deployment, we guide you through every step of building intelligent applications that drive real business results.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-orange-300/60 transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <div className="text-sm text-orange-600 font-semibold bg-orange-100 px-3 py-1 rounded-full">
                    {step.timeline}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>

                {/* Step Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Arrow for connection */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-orange-50 rounded-full px-6 py-3 border border-orange-200">
            <CheckCircle className="h-5 w-5 text-orange-500" />
            <span className="text-orange-700 font-medium">Ready to start your project?</span>
          </div>
        </div>
      </div>
    </section>
  );
};
