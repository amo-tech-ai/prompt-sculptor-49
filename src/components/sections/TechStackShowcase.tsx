import { Badge } from '@/components/ui/badge';

const techStack = [
  {
    category: "Frontend & Development",
    technologies: [
      { name: "Vite", description: "Lightning-fast build tool for modern web apps" },
      { name: "React", description: "Robust frontend framework for scalable UIs" }
    ]
  },
  {
    category: "AI & Orchestration", 
    technologies: [
      { name: "CopilotKit", description: "Conversational AI workflows" },
      { name: "CrewAI", description: "Multi-agent orchestration" },
      { name: "Mastra", description: "Event wizard & automation planner" },
      { name: "Tavilly", description: "Web scraping & enrichment" },
      { name: "MCP", description: "AI-native developer tools integration" }
    ]
  },
  {
    category: "AI Intelligence & Automation",
    technologies: [
      { name: "OpenAI", description: "GPT-powered AI integration" },
      { name: "Claude SDK", description: "Advanced LLM assistant" },
      { name: "Cloudinary", description: "Media management & optimization" },
      { name: "WhatsApp", description: "Messaging & client engagement" },
      { name: "n8n", description: "Workflow automation engine" }
    ]
  },
  {
    category: "Data & Infrastructure",
    technologies: [
      { name: "Supabase", description: "Database & authentication" },
      { name: "Clerk", description: "Authentication & social login" },
      { name: "Qdrant", description: "Vector database for semantic search" },
      { name: "GitHub", description: "Version control & collaboration" },
      { name: "Vercel", description: "Enterprise-grade deployment & hosting" }
    ]
  }
];

export const TechStackShowcase = () => {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 border-background/20 text-background">
              Technology Stack
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-background">
              We Build With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange/70">
                The Best
              </span>
            </h2>
            <p className="text-lg text-background/70 max-w-3xl mx-auto mb-8">
              Cutting-edge technologies and proven frameworks that power AMO AI solutions.
            </p>
          </div>

          {/* Tech Stack Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((category, categoryIndex) => (
              <div
                key={category.category}
                className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/20 hover:bg-background/15 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-orange mb-2">
                    {category.category}
                  </h3>
                  <div className="w-12 h-1 bg-orange rounded-full" />
                </div>

                {/* Technologies */}
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={tech.name}
                      className="group"
                    >
                      <h4 className="font-semibold text-background group-hover:text-orange transition-colors duration-200 mb-1">
                        {tech.name}
                      </h4>
                      <p className="text-sm text-background/60 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange mb-2">20+</div>
                <p className="text-sm text-background/60">Technologies Mastered</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange mb-2">99.9%</div>
                <p className="text-sm text-background/60">Uptime Guaranteed</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange mb-2">24/7</div>
                <p className="text-sm text-background/60">Monitoring & Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};