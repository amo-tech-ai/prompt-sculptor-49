import { ArrowRight } from 'lucide-react';

export const SpecialServices = () => {
  const services = [
    {
      id: 1,
      number: "01",
      title: "AI & Intelligence",
      description: "Claude 3 • GPT-4 • CrewAI • LangChain. Build agents that think, analyze, and execute complex workflows autonomously."
    },
    {
      id: 2,
      number: "02", 
      title: "Development Platforms",
      description: "Lovable • Webflow • React • Next.js. Ship faster with AI-powered development tools and modern frameworks."
    },
    {
      id: 3,
      number: "03",
      title: "Backend & Data", 
      description: "Supabase • PostgreSQL • Pinecone. Enterprise-grade infrastructure that scales with your business."
    },
    {
      id: 4,
      number: "04",
      title: "Automation & Integration",
      description: "n8n • WhatsApp • Stripe • Zapier. Connect everything, automate anything with 400+ integrations."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-brand-light">
      {/* Background with floating bubble/gel shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light/50 via-white to-brand-light/30" />
      
      {/* Floating decorative shapes */}
      <div 
        className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-brand-orange/10 to-pink-400/10 rounded-full blur-3xl opacity-40 animate-float"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
            We Build With{' '}
            <span className="relative">
              the Best
              {/* Blurred colorful shape above "the Best" */}
              <div 
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-purple-400/30 via-pink-400/20 to-orange-400/30 rounded-full blur-2xl opacity-60"
                aria-hidden="true"
              />
            </span>
          </h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto leading-relaxed">
            We use cutting-edge technologies and AI platforms to build production-ready applications. From Claude and GPT-4 to modern development frameworks, we leverage the best tools to deliver exceptional results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="glass-overlay rounded-2xl p-6 h-full border border-brand-divider shadow-card hover:shadow-lg hover:-translate-y-1 hover:border-brand-orange transition-all duration-300">
                {/* Service Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-brand-orange">{service.number}</span>
                    <h3 className="text-xl font-bold text-brand-dark">{service.title}</h3>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-orange/20 to-pink-400/20 rounded-full blur-sm"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-sm"></div>
                  </div>
                </div>

                {/* Service Description */}
                <p className="text-brand-gray leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Arrow Icon */}
                <div className="flex justify-end">
                  <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
