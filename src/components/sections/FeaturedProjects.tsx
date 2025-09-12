import { Button } from '@/components/ui/button';
import { ArrowUpRight, Calendar, DollarSign, TrendingUp, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const featuredProjects = [
  {
    id: 1,
    name: "FashionOS",
    tagline: "From 3 Days to 3 Minutes",
    client: "Fashion Week Global Inc.",
    industry: "Fashion & Events",
    challenge: "Fashion Week Global struggled with a complex 3-day event setup process requiring 100+ staff members with a 12% error rate.",
    solution: "Built FashionOS, a comprehensive AI-powered event management platform automating 90% of coordination between designers, models, venues, and sponsors.",
    image: "/api/placeholder/600/400",
    liveUrl: "https://fashionos.com",
    metrics: [
      { label: "Time Reduction", value: "97%", icon: Calendar },
      { label: "Cost Savings", value: "$400K", icon: DollarSign },
      { label: "ROI", value: "300%", icon: TrendingUp }
    ],
    technologies: ["React", "Next.js", "Supabase", "CrewAI", "WhatsApp API", "Stripe"],
    timeline: "8 weeks",
    testimonial: "AMO AI transformed our entire operation. What used to take us 3 days and 100 people now happens in 3 minutes with complete accuracy.",
    author: "David Kim",
    role: "Operations Director"
  },
  {
    id: 2,
    name: "AutoMax AI",
    tagline: "$4.3M Monthly GMV Marketplace",
    client: "AutoMax Dealer Network",
    industry: "Automotive",
    challenge: "Needed to connect 500 dealers with a unified platform handling 50,000+ vehicle listings while providing intelligent search capabilities.",
    solution: "Developed a comprehensive AI marketplace with advanced search algorithms, real-time inventory sync, and ML-powered recommendations.",
    image: "/api/placeholder/600/400",
    liveUrl: "https://automax.com",
    metrics: [
      { label: "Monthly GMV", value: "$4.3M", icon: DollarSign },
      { label: "Dealers Connected", value: "500+", icon: TrendingUp },
      { label: "Search Accuracy", value: "95%", icon: Calendar }
    ],
    technologies: ["React", "Next.js", "Supabase", "OpenAI", "Elasticsearch", "Stripe Connect"],
    timeline: "12 weeks",
    testimonial: "The AI-powered search and recommendations completely transformed how our customers find vehicles. Conversion rates increased 60%.",
    author: "Robert Wilson",
    role: "VP of Technology"
  },
  {
    id: 3,
    name: "I Love Medellín",
    tagline: "Tourism Revolution Platform",
    client: "I Love Medellín Tourism",
    industry: "Tourism & Hospitality",
    challenge: "Medellín needed a comprehensive tourism platform handling experience booking, property rentals, and AI-powered concierge services.",
    solution: "Created a multi-vertical tourism marketplace with intelligent booking systems, AI concierge powered by Claude, and Colombian payment integration.",
    image: "/api/placeholder/600/400",
    liveUrl: "https://ilovemedellin.co",
    metrics: [
      { label: "Automation Rate", value: "95%", icon: TrendingUp },
      { label: "Properties Listed", value: "50+", icon: Calendar },
      { label: "Monthly Target", value: "$75K", icon: DollarSign }
    ],
    technologies: ["Lovable", "Supabase", "Claude", "PSE", "Nequi", "WhatsApp API"],
    timeline: "10 weeks",
    testimonial: "The platform captures the essence of Medellín perfectly. The AI concierge provides authentic local recommendations.",
    author: "Maria Gonzalez",
    role: "Founder & CEO"
  }
];

export const FeaturedProjects = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Featured <span className="text-orange">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real AI applications transforming businesses across industries
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl bg-muted aspect-[4/3] group-hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={project.image} 
                    alt={`${project.name} screenshot`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Live Site Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="bg-white text-foreground hover:bg-white/90"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                        <span>View Live Site</span>
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* ROI Badge */}
                <div className="absolute -top-4 -right-4 bg-orange text-orange-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  {project.metrics[2].value} ROI
                </div>
              </div>

              {/* Project Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {/* Header */}
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <Badge variant="secondary" className="text-xs">{project.industry}</Badge>
                    <Badge variant="outline" className="text-xs">{project.timeline}</Badge>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">{project.name}</h3>
                  <p className="text-lg text-orange font-semibold">{project.tagline}</p>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">The Challenge</h4>
                    <p className="text-muted-foreground">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Our Solution</h4>
                    <p className="text-muted-foreground">{project.solution}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center p-4 bg-muted/50 rounded-xl">
                      <metric.icon className="h-6 w-6 text-orange mx-auto mb-2" />
                      <div className="font-bold text-lg">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-muted/30 rounded-xl p-6 border-l-4 border-orange">
                  <blockquote className="text-foreground italic mb-3">
                    "{project.testimonial}"
                  </blockquote>
                  <cite className="text-sm text-muted-foreground not-italic">
                    <span className="font-semibold">{project.author}</span>, {project.role}
                  </cite>
                </div>

                {/* CTA */}
                <div className="flex space-x-4">
                  <Button asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                      <span>View Live Site</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={`/case-study/${project.name.toLowerCase()}`}>
                      Read Case Study
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};