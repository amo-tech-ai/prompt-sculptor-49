import { Check, ArrowRight } from 'lucide-react';

export const PricingSection = () => {
  const pricingTiers = [
    {
      name: "Starter Package",
      price: "$15,000 - $30,000",
      description: "Perfect for MVPs and proof of concepts",
      features: [
        "Single AI integration",
        "Basic automation",
        "2-4 week delivery",
        "Email support",
        "Basic documentation"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional Platform",
      price: "$50,000 - $150,000",
      description: "Complete applications with multiple features",
      features: [
        "Full-stack development",
        "AI agents & workflows",
        "6-12 week delivery",
        "Priority support",
        "Complete documentation",
        "Training & onboarding",
        "3 months maintenance"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise Solution",
      price: "$200,000+",
      description: "Complex systems for large organizations",
      features: [
        "Custom architecture",
        "Unlimited integrations",
        "Dedicated team",
        "24/7 support",
        "Custom training",
        "Ongoing maintenance",
        "SLA guarantees"
      ],
      cta: "Contact Us",
      popular: false
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gray-50">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30" />
      
      {/* Floating decorative shapes */}
      <div 
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-100/20 to-orange-200/20 rounded-full blur-3xl opacity-40 animate-float"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-orange-100/15 to-orange-200/15 rounded-full blur-3xl opacity-30 animate-float"
        style={{ animationDelay: '1.5s' }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Investment Levels
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transparent Pricing, Clear Value. Choose the package that fits your project scope and budget.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={tier.name}
              className={`relative group ${tier.popular ? 'md:-mt-8' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`bg-white rounded-2xl p-8 border-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full ${
                tier.popular 
                  ? 'border-orange-500 shadow-orange-100' 
                  : 'border-gray-200 hover:border-orange-300/60'
              }`}>
                {/* Package Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                
                {/* Price */}
                <div className="mb-4">
                  <span className={`text-3xl font-bold ${tier.popular ? 'text-orange-500' : 'text-gray-900'}`}>
                    {tier.price}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">{tier.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${tier.popular ? 'text-orange-500' : 'text-green-500'}`} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  tier.popular
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}>
                  <span>{tier.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            All projects include source code, documentation, and deployment. 
            <span className="text-orange-600 font-semibold"> Custom quotes available for unique requirements.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
