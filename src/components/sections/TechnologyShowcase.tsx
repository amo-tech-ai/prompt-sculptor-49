import { Badge } from '@/components/ui/badge';

const techCategories = [
  {
    category: "AI & Machine Learning",
    technologies: [
      { name: "CopilotKit", description: "AI-powered conversations" },
      { name: "OpenAI", description: "GPT models & embeddings" },
      { name: "Claude", description: "Advanced AI reasoning" },
      { name: "Qdrant", description: "Vector database" },
      { name: "LangChain", description: "AI application framework" },
      { name: "CrewAI", description: "Multi-agent systems" }
    ]
  },
  {
    category: "Frontend Development",
    technologies: [
      { name: "React", description: "Modern user interfaces" },
      { name: "Next.js", description: "Full-stack framework" },
      { name: "TypeScript", description: "Type-safe development" },
      { name: "Tailwind CSS", description: "Rapid UI styling" },
      { name: "Webflow", description: "Visual development" },
      { name: "Lovable", description: "AI-powered development" }
    ]
  },
  {
    category: "Backend & Database",
    technologies: [
      { name: "Supabase", description: "Backend as a service" },
      { name: "Node.js", description: "Server-side JavaScript" },
      { name: "PostgreSQL", description: "Relational database" },
      { name: "Prisma", description: "Database toolkit" },
      { name: "Firebase", description: "Real-time database" },
      { name: "MongoDB", description: "Document database" }
    ]
  },
  {
    category: "Integrations & APIs",
    technologies: [
      { name: "WhatsApp Business", description: "Messaging automation" },
      { name: "Stripe", description: "Payment processing" },
      { name: "n8n", description: "Workflow automation" },
      { name: "Zapier", description: "App integrations" },
      { name: "Twilio", description: "Communications API" },
      { name: "Sendgrid", description: "Email delivery" }
    ]
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      { name: "Vercel", description: "Deployment platform" },
      { name: "AWS", description: "Cloud infrastructure" },
      { name: "Cloudinary", description: "Media management" },
      { name: "Docker", description: "Containerization" },
      { name: "GitHub Actions", description: "CI/CD pipeline" },
      { name: "Sentry", description: "Error monitoring" }
    ]
  },
  {
    category: "Analytics & Monitoring",
    technologies: [
      { name: "Google Analytics", description: "Web analytics" },
      { name: "Mixpanel", description: "Product analytics" },
      { name: "Hotjar", description: "User behavior" },
      { name: "PostHog", description: "Product insights" },
      { name: "Datadog", description: "Infrastructure monitoring" },
      { name: "LogRocket", description: "Session replay" }
    ]
  }
];

export const TechnologyShowcase = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Built with the <span className="text-orange">Best Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We use cutting-edge tools and frameworks to ensure your AI applications are fast, scalable, and future-proof
          </p>
        </div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="bg-muted/30 rounded-2xl p-6 border border-border/50 hover:border-orange/20 transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-2 h-8 bg-orange rounded-full" />
                <h3 className="text-xl font-semibold text-foreground">
                  {category.category}
                </h3>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-background/60 transition-all duration-200"
                  >
                    {/* Tech Icon Placeholder */}
                    <div className="flex-shrink-0 w-8 h-8 bg-orange/10 group-hover:bg-orange/20 rounded-lg flex items-center justify-center transition-colors duration-200">
                      <div className="w-4 h-4 bg-orange/60 rounded-sm" />
                    </div>
                    
                    {/* Tech Info */}
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-foreground text-sm group-hover:text-orange transition-colors duration-200">
                        {tech.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {tech.description}
                      </p>
                    </div>
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
              <div className="text-2xl font-bold text-orange mb-2">30+</div>
              <p className="text-sm text-muted-foreground">Technologies Mastered</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange mb-2">99.9%</div>
              <p className="text-sm text-muted-foreground">Uptime Guaranteed</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Monitoring & Support</p>
            </div>
          </div>
        </div>

        {/* Tech Stack Badge */}
        <div className="text-center mt-12">
          <Badge variant="outline" className="px-6 py-2 text-sm font-medium">
            Always using the latest and most reliable technologies
          </Badge>
        </div>
      </div>
    </section>
  );
};