import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight } from "lucide-react";

export const AboutProcess = () => {
  const processSteps = [
    {
      week: "Week 1",
      title: "Discovery & Planning",
      description: "Deep dive into your business, goals, and requirements. Define scope, timeline, and success metrics.",
      deliverables: ["Business analysis", "Technical requirements", "Project roadmap", "Team assignments"],
      color: "bg-orange/10 text-orange border-orange/20"
    },
    {
      week: "Week 2-3",
      title: "AI Architecture & Design",
      description: "Design the AI system architecture, user interfaces, and integration points with your existing systems.",
      deliverables: ["System architecture", "UI/UX designs", "API specifications", "Data flow diagrams"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      week: "Week 4-5",
      title: "Core Development",
      description: "Build the core AI functionality, integrations, and user interfaces. Regular progress reviews and feedback.",
      deliverables: ["AI model integration", "Frontend development", "Backend APIs", "Database setup"],
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      week: "Week 6-7",
      title: "Testing & Optimization",
      description: "Comprehensive testing, performance optimization, and security hardening. User acceptance testing.",
      deliverables: ["Quality assurance", "Performance optimization", "Security audit", "User training"],
      color: "bg-success/10 text-success border-success/20"
    },
    {
      week: "Week 8",
      title: "Launch & Support",
      description: "Production deployment, monitoring setup, and ongoing support. Knowledge transfer and documentation.",
      deliverables: ["Production deployment", "Monitoring setup", "Documentation", "30-day support"],
      color: "bg-purple-500/10 text-purple-600 border-purple-500/20"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our 8-Week Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A proven methodology that takes your AI application from concept to production 
            in just 8 weeks, with clear milestones and deliverables every step of the way.
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange via-primary via-accent via-success to-purple-500 opacity-20" />
          
          <div className="space-y-12 lg:space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div className="w-4 h-4 bg-background border-4 border-primary rounded-full" />
                </div>
                
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:ml-auto'}`}>
                  <Card className="p-6 hover:shadow-lg transition-all duration-300">
                    {/* Week badge */}
                    <Badge className={`${step.color} mb-4 font-medium`}>
                      {step.week}
                    </Badge>
                    
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Deliverables */}
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Key Deliverables:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                  
                  {/* Arrow for mobile */}
                  {index < processSteps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6">
                      <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Your 8-Week Journey?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join 50+ companies that have successfully launched their AI applications 
            using our proven process. No hidden surprises, just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="outline" className="text-sm">
              ✅ Fixed timeline
            </Badge>
            <Badge variant="outline" className="text-sm">
              ✅ Clear deliverables
            </Badge>
            <Badge variant="outline" className="text-sm">
              ✅ Regular checkpoints
            </Badge>
            <Badge variant="outline" className="text-sm">
              ✅ 30-day support included
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};