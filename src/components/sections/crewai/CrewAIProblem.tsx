import { AlertTriangle, Clock, TrendingDown, Users, HeadphonesIcon } from 'lucide-react';

const CrewAIProblem = () => {
  const problems = [
    {
      icon: TrendingDown,
      text: "Complex workflows demand entire teams of specialists → costs spiral"
    },
    {
      icon: Clock,
      text: "Coordination between teams wastes 30% of productivity"
    },
    {
      icon: AlertTriangle,
      text: "Content pipelines bottleneck → campaigns delayed"
    },
    {
      icon: Users,
      text: "Manual research & analysis take days, not minutes"
    },
    {
      icon: HeadphonesIcon,
      text: "Customer service eats budgets without improving satisfaction"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            The Problem
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Traditional business operations are hitting scalability walls
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <problem.icon className="h-12 w-12 text-destructive mx-auto mb-4" />
                <p className="text-foreground font-medium">{problem.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-destructive/10 rounded-xl border border-destructive/20">
            <p className="text-lg font-semibold text-destructive">
              Result: Businesses struggle with inefficient processes, rising costs, and missed opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrewAIProblem;