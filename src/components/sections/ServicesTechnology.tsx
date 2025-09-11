export const ServicesTechnology = () => {
  const techCategories = [
    {
      category: "AI & Machine Learning",
      technologies: [
        { name: "OpenAI", description: "GPT-4 & ChatGPT integration" },
        { name: "Claude", description: "Anthropic's AI assistant" },
        { name: "LangChain", description: "AI application framework" },
        { name: "CrewAI", description: "Multi-agent orchestration" }
      ]
    },
    {
      category: "Development Stack",
      technologies: [
        { name: "React", description: "Modern frontend framework" },
        { name: "TypeScript", description: "Type-safe development" },
        { name: "Supabase", description: "Database & authentication" },
        { name: "Stripe", description: "Payment processing" }
      ]
    },
    {
      category: "Automation & Integration",
      technologies: [
        { name: "n8n", description: "Workflow automation" },
        { name: "WhatsApp Business API", description: "Messaging platform" },
        { name: "Cloudinary", description: "Media management" },
        { name: "Vercel", description: "Deployment & hosting" }
      ]
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-brand-dark">
      {/* Background Elements */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-brand-orange/10 to-brand-orange2/5 rounded-full blur-3xl opacity-40 animate-float" 
        style={{ 
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          animationDelay: '1s'
        }}
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-brand-orange2/8 to-purple-400/3 rounded-full blur-2xl opacity-30 animate-float" 
        style={{ 
          borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
          animationDelay: '3s'
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white">
            We Build With the Best
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Cutting-edge technologies and proven frameworks that deliver exceptional results
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <div 
              key={category.category}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-brand-orange/50 transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 group-hover:text-brand-orange transition-colors duration-300">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={tech.name}
                    className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group/tech"
                  >
                    <div className="w-3 h-3 bg-brand-orange rounded-full mt-1.5 group-hover/tech:scale-125 transition-transform duration-300" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1 group-hover/tech:text-brand-orange transition-colors duration-300">
                        {tech.name}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Section */}
        <div className="text-center mt-20 animate-slide-up">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Enterprise-Grade Security & Reliability
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              All our solutions are built with security-first principles, scalable architecture, and comprehensive monitoring to ensure your business-critical applications perform flawlessly.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-orange mb-1">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-orange mb-1">ISO 27001</div>
                <div className="text-gray-400 text-sm">Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-orange mb-1">24/7</div>
                <div className="text-gray-400 text-sm">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-orange mb-1">GDPR</div>
                <div className="text-gray-400 text-sm">Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};