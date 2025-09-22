import { ServiceCard } from '@/components/ui/ServiceCard';
import { 
  ShoppingCart, 
  MessageCircle, 
  Network, 
  Globe, 
  Workflow, 
  Sparkles 
} from 'lucide-react';

export const ServicesGrid = () => {
  const services = [
    {
      id: 'ai-marketplace-solutions',
      title: 'AI Marketplace Solutions',
      tagline: 'Multi-vendor platforms powered by intelligent recommendations',
      description: 'Build sophisticated marketplace platforms with AI-driven product recommendations, intelligent search, and automated vendor management systems.',
      features: [
        'Smart product matching',
        'Automated vendor onboarding',
        'Intelligent pricing optimization',
        'Real-time analytics dashboard'
      ],
      timeline: '8-12 weeks',
      startingPrice: 'From $75K',
      roi: '340%',
      icon: ShoppingCart,
      href: '/services/ai-marketplace-solutions'
    },
    {
      id: 'conversational-ai-systems',
      title: 'Conversational AI Systems',
      tagline: 'Intelligent chatbots that understand context',
      description: 'Deploy advanced conversational AI systems powered by Claude and ChatGPT for 24/7 customer support and engagement.',
      features: [
        'Multi-language support',
        'Context-aware responses',
        'Human handoff integration',
        'Custom knowledge training'
      ],
      timeline: '4-6 weeks',
      startingPrice: 'From $25K',
      roi: '250%',
      icon: MessageCircle,
      href: '/services/conversational-ai-systems'
    },
    {
      id: 'multi-agent-ai-systems',
      title: 'Multi-Agent AI Systems',
      tagline: 'Collaborative AI agents working in harmony',
      description: 'Orchestrate multiple AI agents using AI Tools, CrewAI, and LangChain to handle complex business workflows autonomously.',
      features: [
        'Agent task delegation',
        'Cross-system integration',
        'Performance monitoring',
        'Scalable architecture'
      ],
      timeline: '12-16 weeks',
      startingPrice: 'From $150K',
      roi: '420%',
      icon: Network,
      href: '/services/multi-agent-ai-systems'
    },
    {
      id: 'ai-enhanced-web-development',
      title: 'AI-Enhanced Web Development',
      tagline: 'Modern web applications powered by AI',
      description: 'Create next-generation web applications with AI features built-in, from smart forms to predictive analytics.',
      features: [
        'AI-powered user interfaces',
        'Predictive analytics',
        'Smart content generation',
        'Automated optimization'
      ],
      timeline: '6-10 weeks',
      startingPrice: 'From $45K',
      roi: '280%',
      icon: Globe,
      href: '/services/ai-enhanced-web-development'
    },
    {
      id: 'automation-workflows',
      title: 'Automation & Workflows',
      tagline: 'End-to-end process automation',
      description: 'Streamline your business operations with intelligent automation using n8n, WhatsApp Business API, and custom workflows.',
      features: [
        'WhatsApp Business integration',
        'Custom workflow design',
        'Multi-platform connectivity',
        'Real-time monitoring'
      ],
      timeline: '4-8 weeks',
      startingPrice: 'From $35K',
      roi: '310%',
      icon: Workflow,
      href: '/services/automation-workflows'
    },
    {
      id: 'custom-ai-development',
      title: 'Custom AI Development',
      tagline: 'Bespoke solutions for unique challenges',
      description: 'Tailored AI solutions designed specifically for your unique business requirements and industry challenges.',
      features: [
        'Custom model training',
        'Industry-specific solutions',
        'Enterprise integration',
        'Ongoing optimization'
      ],
      timeline: '16-24 weeks',
      startingPrice: 'From $200K',
      roi: '380%',
      icon: Sparkles,
      href: '/services/custom-ai-development'
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-brand-light">
      {/* Background Elements */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-brand-orange/8 to-brand-orange2/4 rounded-full blur-3xl opacity-50 animate-float" 
        style={{ 
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          animationDelay: '0s'
        }}
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-brand-orange2/6 to-purple-400/3 rounded-full blur-2xl opacity-40 animate-float" 
        style={{ 
          borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
          animationDelay: '2s'
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-brand-dark">
            Transform Your Business with AI
          </h2>
          <p className="text-xl md:text-2xl text-brand-gray max-w-4xl mx-auto leading-relaxed">
            Six core services that deliver measurable results and competitive advantage
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-slide-up">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-brand-divider shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-brand-gray mb-6">
              Every business is unique. Let's discuss how we can create a tailored AI solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-orange hover:bg-brand-orange2 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg">
                Schedule Consultation
              </button>
              <button className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};