import { Target, Zap, DollarSign, Clock } from 'lucide-react';

const CrewAIResults = () => {
  const results = [
    {
      icon: Target,
      metric: "95%",
      title: "Task Accuracy",
      description: "AI crews consistently deliver high-quality results with minimal errors"
    },
    {
      icon: Zap,
      metric: "10–50x",
      title: "Faster Processing",
      description: "Complete complex workflows in minutes instead of days"
    },
    {
      icon: DollarSign,
      metric: "90%",
      title: "Cost Savings",
      description: "Dramatic reduction in operational costs through intelligent automation"
    },
    {
      icon: Clock,
      metric: "60 Days",
      title: "ROI Timeline",
      description: "See positive return on investment within the first 60 days"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Results You Can Expect
            </h2>
            <p className="text-xl text-muted-foreground">
              Measurable outcomes that transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div 
                key={index}
                className="bg-background rounded-xl p-6 text-center shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20"
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <result.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {result.metric}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {result.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {result.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Transform Your Business Operations Today
              </h3>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-6">
                These aren't projections or estimates — they're the actual results our clients achieve 
                when they deploy CrewAI multi-agent systems.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold mb-2">500+</div>
                  <div className="text-sm">Successful Implementations</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold mb-2">$50M+</div>
                  <div className="text-sm">Client Cost Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold mb-2">99.9%</div>
                  <div className="text-sm">System Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrewAIResults;