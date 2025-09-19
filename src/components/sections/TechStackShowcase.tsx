import { Badge } from '@/components/ui/badge';
import { Shield, ExternalLink } from 'lucide-react';

export const TechStackShowcase = () => {
  const techLogos = [
    { name: 'Claude', logo: '/src/assets/logos/claude-logo.png', url: '#' },
    { name: 'OpenAI', logo: '/src/assets/logos/openai-logo.svg', url: '#' },
    { name: 'CrewAI', logo: '/src/assets/logos/crewai-logo.svg', url: '#' },
    { name: 'CopilotKit', logo: null, url: '#' },
    { name: 'Webflow', logo: '/src/assets/logos/webflow-logo.svg', url: '#' },
    { name: 'Shopify', logo: '/src/assets/logos/shopify-logo.svg', url: '#' },
    { name: 'Supabase', logo: '/src/assets/logos/supabase-logo.svg', url: '#' },
    { name: 'Stripe', logo: '/src/assets/logos/stripe-logo.svg', url: '#' },
    { name: 'WhatsApp', logo: '/src/assets/logos/whatsapp-logo.png', url: '#' },
    { name: 'Cloudinary', logo: null, url: '#' },
    { name: 'n8n', logo: null, url: '#' },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Technology Stack
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              We Build With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                The Best
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Enterprise-grade technologies chosen for reliability, scalability, and performance.
            </p>
          </div>

          {/* Tech Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
            {techLogos.map((tech, index) => (
              <a
                key={index}
                href={tech.url}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                {tech.logo ? (
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className="h-12 md:h-16 object-contain mb-3 group-hover:scale-110 transition-transform filter grayscale group-hover:grayscale-0"
                  />
                ) : (
                  <div className="h-12 md:h-16 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <span className="text-lg md:text-xl font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                      {tech.name}
                    </span>
                  </div>
                )}
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                  {tech.name}
                </span>
                <ExternalLink className="h-3 w-3 text-muted-foreground/50 group-hover:text-primary transition-colors mt-1 opacity-0 group-hover:opacity-100" />
              </a>
            ))}
          </div>

          {/* Compliance Badge */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full px-6 py-3">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">
                Enterprise-ready: SOC2 / GDPR compliant
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};