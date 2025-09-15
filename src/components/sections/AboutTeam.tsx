import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Github } from "lucide-react";

export const AboutTeam = () => {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Founder & AI Strategist",
      bio: "Former Google AI researcher with 8+ years building enterprise AI solutions. Passionate about making AI accessible to every business.",
      image: "/api/placeholder/300/300",
      skills: ["AI Strategy", "Machine Learning", "Product Vision"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Sarah Chen",
      role: "Lead AI Engineer",
      bio: "Ex-Microsoft AI engineer specializing in LLM integration and real-time AI applications. Expert in Claude, GPT-4, and custom AI solutions.",
      image: "/api/placeholder/300/300",
      skills: ["LLMs", "Python", "AI Integration"],
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Marcus Johnson",
      role: "Full-Stack Architect",
      bio: "15+ years building scalable applications. Specializes in React, Node.js, and cloud infrastructure for AI-powered systems.",
      image: "/api/placeholder/300/300",
      skills: ["React", "Node.js", "Cloud Architecture"],
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Emma Thompson",
      role: "UX/AI Design Lead",
      bio: "Award-winning designer focused on human-AI interaction. Creates intuitive interfaces that make complex AI feel simple and natural.",
      image: "/api/placeholder/300/300",
      skills: ["UX Design", "AI Interfaces", "Product Design"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "David Kim",
      role: "AI Operations Manager",
      bio: "Former startup CTO with expertise in rapid deployment and scaling AI applications. Ensures every project launches on time and budget.",
      image: "/api/placeholder/300/300",
      skills: ["DevOps", "Project Management", "AI Deployment"],
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Lisa Wang",
      role: "Business Intelligence Analyst",
      bio: "Data scientist turned business strategist. Specializes in measuring AI ROI and optimizing business outcomes through intelligent automation.",
      image: "/api/placeholder/300/300",
      skills: ["Data Science", "Business Analytics", "ROI Optimization"],
      social: {
        linkedin: "#",
        github: "#"
      }
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A unique blend of AI engineers, product strategists, and designers 
            united by one mission: turning complex AI into simple business solutions.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              {/* Photo */}
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <div className="text-primary font-medium mb-3">
                  {member.role}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                {/* Social links */}
                <div className="flex gap-3">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-muted/50 hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors group/social"
                    >
                      <Linkedin className="w-4 h-4 text-muted-foreground group-hover/social:text-primary" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter}
                      className="w-8 h-8 bg-muted/50 hover:bg-accent/10 rounded-full flex items-center justify-center transition-colors group/social"
                    >
                      <Twitter className="w-4 h-4 text-muted-foreground group-hover/social:text-accent" />
                    </a>
                  )}
                  {member.social.github && (
                    <a 
                      href={member.social.github}
                      className="w-8 h-8 bg-muted/50 hover:bg-foreground/10 rounded-full flex items-center justify-center transition-colors group/social"
                    >
                      <Github className="w-4 h-4 text-muted-foreground group-hover/social:text-foreground" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Team stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">45+</div>
              <div className="text-sm text-muted-foreground">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">12</div>
              <div className="text-sm text-muted-foreground">AI Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};