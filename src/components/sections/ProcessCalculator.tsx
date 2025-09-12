import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calculator, Check, ArrowRight, Clock, DollarSign } from 'lucide-react';

export const ProcessCalculator = () => {
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const projectTypes = [
    {
      id: 'marketplace',
      name: 'AI Marketplace',
      description: 'Multi-vendor platform with recommendations',
      baseWeeks: 8,
      basePrice: 75000,
      icon: '🛒'
    },
    {
      id: 'chatbot',
      name: 'Conversational AI',
      description: 'Intelligent chatbot system',
      baseWeeks: 6,
      basePrice: 45000,
      icon: '💬'
    },
    {
      id: 'workflow',
      name: 'AI Automation',
      description: 'Process automation with AI',
      baseWeeks: 7,
      basePrice: 55000,
      icon: '⚙️'
    },
    {
      id: 'custom',
      name: 'Custom Solution',
      description: 'Bespoke AI application',
      baseWeeks: 10,
      basePrice: 125000,
      icon: '✨'
    }
  ];

  const features = [
    {
      id: 'payments',
      name: 'Payment Integration',
      description: 'Stripe, PayPal, subscriptions',
      addWeeks: 0.5,
      addPrice: 5000
    },
    {
      id: 'auth',
      name: 'Advanced Authentication',
      description: 'SSO, multi-factor, roles',
      addWeeks: 1,
      addPrice: 8000
    },
    {
      id: 'analytics',
      name: 'Advanced Analytics',
      description: 'Custom dashboards, reporting',
      addWeeks: 1.5,
      addPrice: 12000
    },
    {
      id: 'mobile',
      name: 'Mobile Optimization',
      description: 'PWA, responsive design',
      addWeeks: 1,
      addPrice: 10000
    },
    {
      id: 'integrations',
      name: 'Third-party APIs',
      description: 'WhatsApp, email, CRM',
      addWeeks: 1,
      addPrice: 8000
    },
    {
      id: 'ai-training',
      name: 'Custom AI Training',
      description: 'Domain-specific model training',
      addWeeks: 2,
      addPrice: 20000
    }
  ];

  const selectedProject = projectTypes.find(p => p.id === selectedType);
  
  const calculateResults = () => {
    if (!selectedProject) return { weeks: 0, price: 0 };
    
    let totalWeeks = selectedProject.baseWeeks;
    let totalPrice = selectedProject.basePrice;
    
    selectedFeatures.forEach(featureId => {
      const feature = features.find(f => f.id === featureId);
      if (feature) {
        totalWeeks += feature.addWeeks;
        totalPrice += feature.addPrice;
      }
    });
    
    return { weeks: totalWeeks, price: totalPrice };
  };

  const results = calculateResults();

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const handleCalculate = () => {
    if (selectedType) {
      setShowResults(true);
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-orange-50 text-orange-700 px-6 py-3 rounded-full border border-orange-200 mb-6">
            <Calculator className="h-5 w-5" />
            <span className="font-semibold">Project Calculator</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your <span className="text-orange-500">Project Timeline</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get an instant estimate for your AI project. See exactly how long it will take and what it will cost.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Step 1: Project Type */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              Choose Your Project Type
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`
                    text-left p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg
                    ${selectedType === type.id 
                      ? 'border-orange-500 bg-orange-50' 
                      : 'border-gray-200 bg-white hover:border-orange-300'
                    }
                  `}
                >
                  <div className="text-3xl mb-3">{type.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{type.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{type.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-orange-600 font-medium">{type.baseWeeks} weeks</span>
                    <span className="text-gray-700 font-medium">From ${type.basePrice.toLocaleString()}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Features */}
          {selectedType && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Select Additional Features
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => handleFeatureToggle(feature.id)}
                    className={`
                      text-left p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-md
                      ${selectedFeatures.includes(feature.id)
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 bg-white hover:border-orange-300'
                      }
                    `}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`
                          w-5 h-5 rounded border-2 flex items-center justify-center
                          ${selectedFeatures.includes(feature.id)
                            ? 'border-orange-500 bg-orange-500'
                            : 'border-gray-300'
                          }
                        `}>
                          {selectedFeatures.includes(feature.id) && (
                            <Check className="h-3 w-3 text-white" />
                          )}
                        </div>
                        <h4 className="font-semibold text-gray-900">{feature.name}</h4>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 ml-8">{feature.description}</p>
                    <div className="flex items-center space-x-4 text-sm ml-8">
                      <span className="text-orange-600 font-medium">+{feature.addWeeks} weeks</span>
                      <span className="text-gray-700 font-medium">+${feature.addPrice.toLocaleString()}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Calculate Button */}
          {selectedType && (
            <div className="text-center mb-12">
              <Button
                onClick={handleCalculate}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-lg font-semibold rounded-xl"
              >
                Calculate Timeline & Cost
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}

          {/* Results */}
          {showResults && selectedProject && (
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-200">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Your Project Estimate
                </h3>
                <p className="text-gray-600">
                  Based on your selections, here's what you can expect:
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Timeline */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="h-6 w-6 text-orange-500" />
                    <h4 className="text-xl font-semibold text-gray-900">Timeline</h4>
                  </div>
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    {results.weeks} weeks
                  </div>
                  <p className="text-gray-600">
                    Still faster than traditional agencies by <span className="font-semibold text-green-600">3-4x</span>
                  </p>
                </div>

                {/* Investment */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <DollarSign className="h-6 w-6 text-orange-500" />
                    <h4 className="text-xl font-semibold text-gray-900">Investment</h4>
                  </div>
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    ${results.price.toLocaleString()}
                  </div>
                  <p className="text-gray-600">
                    Includes everything: design, development, testing, deployment
                  </p>
                </div>
              </div>

              {/* Breakdown */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Project Breakdown</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">{selectedProject.name}</span>
                    <span className="font-medium">${selectedProject.basePrice.toLocaleString()}</span>
                  </div>
                  {selectedFeatures.map(featureId => {
                    const feature = features.find(f => f.id === featureId);
                    if (!feature) return null;
                    return (
                      <div key={featureId} className="flex justify-between items-center">
                        <span className="text-gray-700">{feature.name}</span>
                        <span className="font-medium">+${feature.addPrice.toLocaleString()}</span>
                      </div>
                    );
                  })}
                  <div className="border-t border-gray-200 pt-3 flex justify-between items-center font-semibold">
                    <span className="text-gray-900">Total Investment</span>
                    <span className="text-orange-600">${results.price.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-8">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl mr-4"
                >
                  Get Detailed Proposal
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-300 text-orange-700 hover:bg-orange-50 px-8 py-3 rounded-xl"
                >
                  Schedule Call
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};