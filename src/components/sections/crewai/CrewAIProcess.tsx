import { Search, Rocket, Scale, TrendingUp } from 'lucide-react';

const CrewAIProcess = () => {
  const steps = [
    {
      icon: Search,
      title: "Discovery & Strategy",
      timeframe: "Weeks 1–2",
      description: "Analyze workflows, identify automation opportunities, define ROI targets",
      deliverables: ["Process audit", "ROI projections", "Technical architecture", "Success metrics"]
    },
    {
      icon: Rocket,
      title: "Pilot Development", 
      timeframe: "Weeks 3–4",
      description: "Build and deploy first AI crew, validate approach, measure initial results",
      deliverables: ["First AI crew live", "Initial automations", "Performance baseline", "User training"]
    },
    {
      icon: Scale,
      title: "Full Deployment",
      timeframe: "Weeks 5–8", 
      description: "Scale successful crews, add integrations, implement full workflow automation",
      deliverables: ["Complete AI crews", "System integrations", "Quality assurance", "Performance monitoring"]
    },
    {
      icon: TrendingUp,
      title: "Optimization & Scaling",
      timeframe: "Ongoing",
      description: "Continuous improvement, performance tuning, expansion to new use cases",
      deliverables: ["Performance reports", "ROI tracking", "Optimization updates", "Strategic expansion"]
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              A proven process that gets you from concept to ROI in 8 weeks
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden lg:block"></div>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden lg:block"></div>
                  
                  <div className="lg:ml-20">
                    <div className="bg-background rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="bg-primary/10 rounded-xl p-4 w-fit">
                            <step.icon className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                            <h3 className="text-2xl font-bold text-foreground">
                              {step.title}
                            </h3>
                            <span className="text-lg font-semibold text-primary bg-primary/10 px-4 py-2 rounded-lg w-fit">
                              {step.timeframe}
                            </span>
                          </div>
                          
                          <p className="text-lg text-muted-foreground mb-6">
                            {step.description}
                          </p>
                          
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Key Deliverables:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {step.deliverables.map((deliverable, deliverableIndex) => (
                                <div 
                                  key={deliverableIndex}
                                  className="bg-muted rounded-lg px-3 py-2 text-sm font-medium text-foreground"
                                >
                                  • {deliverable}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Fast Track to Success
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures you see tangible results quickly, with full ROI typically achieved within 60 days of deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrewAIProcess;