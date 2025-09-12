import { Check, ArrowRight, Star } from 'lucide-react';

export const ServicesInvestment = () => {
  const investmentTiers = [
    {
      name: "Starter Package",
      price: "$15,000 - $50,000",
      popular: false,
      description: "Perfect for MVPs and proof of concepts",
      features: [
        "Single AI integration",
        "Basic automation setup",
        "2-4 week delivery timeline",
        "Email support included",
        "Basic documentation",
        "1 month post-launch support"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Professional Platform",
      price: "$50,000 - $150,000", 
      popular: true,
      description: "Complete applications with multiple AI features",
      features: [
        "Full-stack AI development",
        "Multi-agent system integration",
        "6-12 week delivery timeline", 
        "Priority support & consultation",
        "Complete technical documentation",
        "Training & team onboarding",
        "3 months maintenance included",
        "Performance optimization"
      ],
      cta: "Most Popular",
      highlight: true
    },
    {
      name: "Enterprise Solution",
      price: "$150,000+",
      popular: false,
      description: "Complex systems for large organizations",
      features: [
        "Custom AI architecture design",
        "Unlimited system integrations",
        "Dedicated development team",
        "24/7 premium support",
        "Custom training programs",
        "Ongoing maintenance & updates",
        "SLA guarantees included",
        "White-label solutions"
      ],
      cta: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-brand-light to-white">
      {/* Background Elements */}
      <div 
        className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-brand-orange/8 to-brand-orange2/4 rounded-full blur-3xl opacity-40 animate-float"
        style={{ animationDelay: '0.5s' }}
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-orange2/6 to-purple-400/3 rounded-full blur-2xl opacity-30 animate-float"
        style={{ animationDelay: '2.5s' }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-brand-dark">
            Investment Levels
          </h2>
          <p className="text-xl md:text-2xl text-brand-gray max-w-4xl mx-auto leading-relaxed">
            Transparent pricing with clear value propositions. Choose the package that aligns with your project scope and business goals.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {investmentTiers.map((tier, index) => (
            <div 
              key={tier.name}
              className={`relative group ${tier.popular ? 'lg:-mt-8 lg:mb-8' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-brand-orange text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                    <Star className="h-4 w-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className={`h-full bg-white rounded-3xl p-8 border-2 shadow-card hover:shadow-xl transition-all duration-500 ${
                tier.highlight 
                  ? 'border-brand-orange shadow-brand-orange/20 hover:border-brand-orange2' 
                  : 'border-gray-200 hover:border-brand-orange/60'
              } ${tier.popular ? 'scale-105' : 'hover:scale-105'}`}>
                
                {/* Package Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-brand-dark mb-3">{tier.name}</h3>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${tier.highlight ? 'text-brand-orange' : 'text-brand-dark'}`}>
                      {tier.price}
                    </span>
                  </div>
                  <p className="text-brand-gray leading-relaxed">{tier.description}</p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${tier.highlight ? 'text-brand-orange' : 'text-green-500'}`} />
                      <span className="text-brand-gray leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-4 px-6 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  tier.highlight
                    ? 'bg-brand-orange hover:bg-brand-orange2 text-white shadow-lg hover:shadow-xl'
                    : 'bg-brand-dark hover:bg-brand-dark/90 text-white hover:bg-brand-orange'
                }`}>
                  <span>{tier.cta}</span>
                  <ArrowRight className="h-5 w-5" />
                </button>

                {/* Value Props */}
                {tier.highlight && (
                  <div className="mt-6 pt-6 border-t border-brand-orange/20">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-brand-orange">340%</div>
                        <div className="text-xs text-brand-gray">Avg ROI</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-brand-orange">98%</div>
                        <div className="text-xs text-brand-gray">Success Rate</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Value Props */}
        <div className="text-center mt-16 animate-slide-up">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-brand-divider shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">
              What's Included in Every Package
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Check className="h-6 w-6 text-brand-orange" />
                </div>
                <h4 className="font-semibold text-brand-dark mb-2">Source Code Included</h4>
                <p className="text-sm text-brand-gray">Complete ownership of your codebase</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Check className="h-6 w-6 text-brand-orange" />
                </div>
                <h4 className="font-semibold text-brand-dark mb-2">Documentation</h4>
                <p className="text-sm text-brand-gray">Comprehensive technical documentation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Check className="h-6 w-6 text-brand-orange" />
                </div>
                <h4 className="font-semibold text-brand-dark mb-2">Deployment</h4>
                <p className="text-sm text-brand-gray">Production-ready deployment setup</p>
              </div>
            </div>
            
            <p className="text-brand-gray mt-6">
              <span className="text-brand-orange font-semibold">Custom quotes available</span> for unique requirements and enterprise integrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};