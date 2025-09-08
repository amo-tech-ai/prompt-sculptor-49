import { Link } from 'react-router-dom';
import { ArrowRight, Check, Zap, MessageCircle, Settings, Users, Database, Palette } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      id: 1,
      title: "AI Web Applications",
      description: "Build full-stack applications with AI assistants integrated at the core.",
      features: ["Custom AI models", "Scalable architecture", "Real-time processing"],
      icon: Zap,
      gradient: "from-brand-orange to-brand-orange2",
      size: "large"
    },
    {
      id: 2,
      title: "Conversational AI",
      description: "Smart chatbots with Claude & ChatGPT for 24/7 support.",
      features: ["Multi-language support", "Context awareness", "Human handoff"],
      icon: MessageCircle,
      gradient: "from-blue-400 to-purple-500",
      size: "medium"
    },
    {
      id: 3,
      title: "Process Automation",
      description: "Automate workflows across sales, marketing, ops with WhatsApp & n8n.",
      features: ["Workflow automation", "Integration APIs", "Analytics dashboard"],
      icon: Settings,
      gradient: "from-green-400 to-blue-500",
      size: "large"
    },
    {
      id: 4,
      title: "Multi-Agent Systems",
      description: "AI agents collaborating on complex tasks (CopilotKit, CrewAI, LangChain).",
      features: ["Agent orchestration", "Task delegation", "Performance monitoring"],
      icon: Users,
      gradient: "from-purple-400 to-pink-500",
      size: "medium"
    },
    {
      id: 5,
      title: "Data & Accounts",
      description: "Manage data, users, and payments with production-ready tools.",
      features: ["Database management", "User authentication", "Payment processing"],
      icon: Database,
      gradient: "from-orange-400 to-red-500",
      size: "medium"
    },
    {
      id: 6,
      title: "Web Design & Prototyping",
      description: "Rapidly design, prototype, and launch modern sites with AI help.",
      features: ["UI/UX design", "Interactive prototypes", "AI-powered iteration"],
      icon: Palette,
      gradient: "from-pink-400 to-orange-500",
      size: "large"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-brand-light to-white">
      {/* Organic blob background shapes */}
      <div 
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-brand-orange/10 to-brand-orange2/5 rounded-full blur-3xl opacity-60 animate-float" 
        style={{ 
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          animationDelay: '0s'
        }}
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-brand-orange2/8 to-purple-400/5 rounded-full blur-3xl opacity-40 animate-float" 
        style={{ 
          borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
          animationDelay: '3s'
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-yellow-400/5 to-brand-orange/8 rounded-full blur-2xl opacity-30 animate-float" 
        style={{ 
          borderRadius: '50% 30% 50% 30% / 30% 50% 30% 50%',
          animationDelay: '1.5s'
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8 text-brand-dark">
            Our AI-Powered Services
          </h2>
          <p className="text-xl md:text-2xl text-brand-gray max-w-4xl mx-auto leading-relaxed">
            Delivered in weeks, not months — using proven tools and frameworks
          </p>
        </div>

        {/* Modern Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isLarge = service.size === 'large';
            
            return (
              <div 
                key={service.id}
                className={`group animate-slide-up ${isLarge ? 'md:col-span-2 xl:col-span-1' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`
                  relative h-full min-h-[320px] rounded-[30px] p-10
                  bg-gradient-to-br ${service.gradient}
                  shadow-[0_20px_40px_rgba(255,107,53,0.15)]
                  hover:shadow-[0_30px_60px_rgba(255,107,53,0.25)]
                  hover:-translate-y-2 hover:rotate-[-1deg]
                  transition-all duration-500 ease-out
                  overflow-hidden
                  ${index % 2 === 1 ? 'glass-overlay backdrop-blur-md' : ''}
                `}>
                  {/* Glass effect overlay for alternating cards */}
                  {index % 2 === 1 && (
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-[30px]" />
                  )}
                  
                  {/* Circular arrow badge */}
                  <div className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>

                  {/* Icon badge */}
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-white">
                      {service.title}
                    </h3>
                    <p className="text-white/90 mb-6 text-lg leading-relaxed">
                      {service.description}
                    </p>

                    {/* Feature pills */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 group-hover:bg-white/30 transition-colors duration-300"
                        >
                          <Check className="h-4 w-4 text-white" />
                          <span className="text-white text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link 
                      to={`/services/${service.id}`}
                      className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 group-hover:translate-x-2"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Floating decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl opacity-50 animate-float" />
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full blur-2xl opacity-30 animate-float" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};