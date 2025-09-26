import { 
  Network, 
  UserCheck, 
  Database, 
  Workflow, 
  Shield, 
  AlertCircle, 
  BarChart 
} from 'lucide-react';

const CrewAIFeatures = () => {
  const features = [
    {
      icon: Network,
      title: "Multi-Agent Orchestration",
      benefit: "End-to-end workflows run automatically"
    },
    {
      icon: UserCheck,
      title: "Role Specialization",
      benefit: "10x faster execution, fewer errors"
    },
    {
      icon: Database,
      title: "Shared Memory & Context",
      benefit: "Seamless collaboration, no context loss"
    },
    {
      icon: Workflow,
      title: "Tool & API Integration",
      benefit: "Agents act on real business systems"
    },
    {
      icon: Shield,
      title: "Human-in-the-Loop",
      benefit: "Safe automation with oversight"
    },
    {
      icon: AlertCircle,
      title: "Error Handling & Recovery",
      benefit: "Reliability and reduced downtime"
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      benefit: "Full visibility and measurable ROI"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Key Features & Business Benefits
            </h2>
            <p className="text-xl text-muted-foreground">
              Enterprise-grade AI automation that delivers measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:border-primary/20"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.benefit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              The Result?
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your business operates like a well-orchestrated symphony, with AI crews handling routine tasks 
              while your team focuses on strategy, innovation, and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrewAIFeatures;