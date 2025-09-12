import { Palette, Code, Settings, Rocket, CheckCircle, Clock, Users } from 'lucide-react';

export const ProcessPhases = () => {
  const phases = [
    {
      id: 1,
      weeks: "Week 1-2",
      title: "Design Sprint",
      icon: Palette,
      progress: "25%",
      description: "We start with deep discovery sessions to understand your vision, user needs, and business goals. No assumptions—just strategic thinking.",
      activities: [
        "Stakeholder interviews and requirements gathering",
        "User persona development and journey mapping",
        "Wireframing and information architecture",
        "Visual design system and branding",
        "Interactive prototypes for validation"
      ],
      deliverables: [
        "Complete wireframes and user flows",
        "Visual design mockups and style guide",
        "Interactive prototype for testing",
        "Technical architecture blueprint"
      ],
      example: "MotoMatch Discovery: We identified 3 core user types and designed a dual-interface system for dealers and customers, reducing complexity by 60%.",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      weeks: "Week 3-5", 
      title: "Rapid Build",
      icon: Code,
      progress: "62.5%",
      description: "Core development happens in parallel streams. While our AI team builds intelligent features, our frontend team creates the user experience.",
      activities: [
        "Database design and backend API development",
        "AI model integration and training",
        "Frontend component development",
        "Real-time features and notifications",
        "Admin dashboard and analytics setup"
      ],
      deliverables: [
        "Fully functional core application",
        "AI features working with test data",
        "Admin dashboard for management",
        "API documentation and testing suite"
      ],
      example: "Fashionistas Build: We implemented AI-powered recommendation engine, user authentication, and real-time chat—all working together by week 5.",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      weeks: "Week 6-7",
      title: "Integration & Testing", 
      icon: Settings,
      progress: "87.5%",
      description: "We connect your application to the real world—payment systems, third-party APIs, and rigorous testing to ensure everything works flawlessly.",
      activities: [
        "Payment gateway integration (Stripe, PayPal)",
        "Third-party API connections (WhatsApp, email)",
        "Comprehensive testing and bug fixes", 
        "Performance optimization and security review",
        "User acceptance testing with real scenarios"
      ],
      deliverables: [
        "Fully integrated payment system",
        "All third-party connections working",
        "Security audit and performance report",
        "User testing feedback and improvements"
      ],
      example: "RainfallTech Integration: Connected to 5 different weather APIs, Stripe payments, and SMS notifications—all tested with real user scenarios.",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      weeks: "Week 8",
      title: "Launch & Scale",
      icon: Rocket,
      progress: "100%",
      description: "Your application goes live with monitoring, analytics, and scaling infrastructure. We ensure a smooth launch and continued success.",
      activities: [
        "Production deployment and DNS setup",
        "Monitoring and analytics implementation",
        "Performance optimization and caching",
        "Team training and documentation handover",
        "Post-launch support and optimization"
      ],
      deliverables: [
        "Live application with custom domain",
        "Analytics dashboard and monitoring",
        "Complete documentation and training",
        "30-day post-launch support included"
      ],
      example: "TechFlow Launch: Deployed to custom domain, 99.9% uptime in first month, handled 10,000+ users on day one without issues.",
      image: "/api/placeholder/600/400",
      celebration: true
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Phase-by-Phase <span className="text-orange-500">Breakdown</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See exactly what happens each week and what you'll receive at every milestone.
          </p>
        </div>

        {/* Phases */}
        <div className="space-y-20">
          {phases.map((phase, index) => {
            const IconComponent = phase.icon;
            const isEven = index % 2 === 1;

            return (
              <div 
                key={phase.id}
                className={`
                  flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} 
                  items-center gap-12 lg:gap-16
                `}
              >
                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  {/* Phase Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-orange-600 font-semibold text-sm">{phase.weeks}</div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{phase.title}</h3>
                    </div>
                    <div className="ml-auto">
                      <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {phase.progress} Complete
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {phase.description}
                  </p>

                  {/* Activities */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Clock className="h-5 w-5 text-orange-500 mr-2" />
                      What Happens This Phase
                    </h4>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="bg-orange-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Users className="h-5 w-5 text-orange-500 mr-2" />
                      What You Get
                    </h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Real Example */}
                  <div className="border-l-4 border-orange-500 pl-6 py-2 bg-white rounded-r-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Real Project Example</h5>
                    <p className="text-gray-600 italic">{phase.example}</p>
                  </div>
                </div>

                {/* Visual Side */}
                <div className="flex-1">
                  <div className="relative">
                    {/* Placeholder for project screenshot/visual */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl border border-gray-300 flex items-center justify-center">
                      <div className="text-center">
                        <IconComponent className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500 font-medium">{phase.title} Visual</p>
                        <p className="text-sm text-gray-400">Real project screenshots</p>
                      </div>
                    </div>

                    {/* Progress indicator overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Phase Progress</span>
                          <span className="text-sm font-bold text-orange-600">{phase.progress}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full"
                            style={{ width: phase.progress }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Celebration effect for final phase */}
                    {phase.celebration && (
                      <div className="absolute -top-2 -right-2">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};