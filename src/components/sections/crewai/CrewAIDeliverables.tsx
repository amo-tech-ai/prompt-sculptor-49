import { 
  Users, 
  Network, 
  Link, 
  Shield, 
  BarChart, 
  BookOpen 
} from 'lucide-react';

const CrewAIDeliverables = () => {
  const deliverables = [
    {
      icon: Users,
      title: "Custom AI Crews (5–10+ agents)",
      description: "Specialized agents trained for your specific workflows and business processes"
    },
    {
      icon: Network,
      title: "Orchestration + Memory Infrastructure",
      description: "Robust system for agent coordination, shared context, and seamless collaboration"
    },
    {
      icon: Link,
      title: "Integrations with CRM, ERP, APIs, Communication Tools",
      description: "Connect your AI crews to existing systems for end-to-end automation"
    },
    {
      icon: Shield,
      title: "Human-in-Loop Approvals & Compliance",
      description: "Safety controls and approval workflows to ensure quality and compliance"
    },
    {
      icon: BarChart,
      title: "Performance Dashboards",
      description: "Real-time analytics, KPI tracking, and ROI measurement tools"
    },
    {
      icon: BookOpen,
      title: "Documentation & Training",
      description: "Complete guides, best practices, and team training for ongoing success"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What You Get
            </h2>
            <p className="text-xl text-muted-foreground">
              A complete AI workforce solution, not just technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliverables.map((deliverable, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:border-primary/20"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                    <deliverable.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {deliverable.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {deliverable.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-xl p-8 border border-primary/10">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Everything You Need to Succeed
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                  We don't just build AI crews — we ensure your team knows how to maximize their potential 
                  and achieve sustainable growth.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-primary">90%</span>
                    </div>
                    <p className="font-semibold text-foreground">Automation Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-primary">60</span>
                    </div>
                    <p className="font-semibold text-foreground">Days to ROI</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-primary">24/7</span>
                    </div>
                    <p className="font-semibold text-foreground">AI Operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrewAIDeliverables;