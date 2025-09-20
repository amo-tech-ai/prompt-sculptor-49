import { Badge } from '@/components/ui/badge';
import { Shield, Award, Users } from 'lucide-react';

// Import logos
import copilotKitLogo from '@/assets/logos/webflow-logo.svg';
import crewAILogo from '@/assets/logos/crewai-logo.svg';
import supabaseLogo from '@/assets/logos/supabase-logo.svg';
import stripeLogo from '@/assets/logos/stripe-logo.svg';
import whatsappLogo from '@/assets/logos/whatsapp-logo.png';

export const TrustProof = () => {
  const stats = [
    {
      icon: Users,
      value: "127",
      label: "Implementations"
    },
    {
      icon: Award,
      value: "94%",
      label: "Retention Rate"
    },
    {
      icon: Shield,
      value: "790%",
      label: "Average ROI"
    }
  ];

  const techLogos = [
    { src: copilotKitLogo, alt: "CopilotKit", name: "CopilotKit" },
    { src: crewAILogo, alt: "CrewAI", name: "CrewAI" },
    { src: supabaseLogo, alt: "Supabase", name: "Supabase" },
    { src: stripeLogo, alt: "Stripe", name: "Stripe" },
    { src: whatsappLogo, alt: "WhatsApp", name: "WhatsApp" }
  ];

  const complianceBadges = [
    { name: "GDPR", description: "EU Data Protection" },
    { name: "SOC2", description: "Security Standards" },
    { name: "ISO 27001", description: "Information Security" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Proven Track Record
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Trusted by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Leading Businesses
              </span>
            </h2>
          </div>
          
          {/* Stats Row */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground">
              We build on a proven tech stack and ensure compliance at every step.
            </p>
          </div>
          
          {/* Technology Stack */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-center mb-8">Built with Industry Leaders</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {techLogos.map((logo, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-border/50"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Compliance Badges */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-8">Enterprise Security & Compliance</h3>
            <div className="flex justify-center gap-6">
              {complianceBadges.map((badge, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-card to-card/50 rounded-lg p-4 border border-border/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="font-bold text-foreground">{badge.name}</div>
                  <div className="text-sm text-muted-foreground">{badge.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};