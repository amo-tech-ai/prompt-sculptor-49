import { 
  Search, 
  FileText, 
  Phone, 
  Users, 
  Calendar, 
  ShoppingCart, 
  Building 
} from 'lucide-react';

const CrewAIUseCases = () => {
  const useCases = [
    {
      icon: Search,
      title: "Research & Analysis",
      description: "50 reports/day (vs 2), $2M saved annually",
      metrics: ["50x faster research", "99% accuracy", "$2M cost savings"]
    },
    {
      icon: FileText,
      title: "Content Production",
      description: "200% more content, +45% organic traffic",
      metrics: ["200% content increase", "45% traffic boost", "90% time savings"]
    },
    {
      icon: Phone,
      title: "Sales Automation",
      description: "300% more qualified meetings",
      metrics: ["300% more meetings", "85% qualification rate", "60% cost reduction"]
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "90% issue prevention, 50% churn reduction",
      metrics: ["90% issue prevention", "50% churn reduction", "24/7 monitoring"]
    },
    {
      icon: Calendar,
      title: "Fashion & Events",
      description: "3 weeks → 1 week planning, +$2M ROI",
      metrics: ["70% faster planning", "$2M ROI increase", "50% cost reduction"]
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Ops",
      description: "50,000 products launched in 7 hrs, $5M savings",
      metrics: ["99% faster launches", "$5M savings", "Zero errors"]
    },
    {
      icon: Building,
      title: "Real Estate",
      description: "Occupancy +10%, costs down 30%, +$12M portfolio value",
      metrics: ["10% occupancy increase", "30% cost reduction", "$12M value add"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Use Cases & Real-World Examples
            </h2>
            <p className="text-xl text-muted-foreground">
              AI crews delivering measurable results across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <useCase.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {useCase.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-4 font-medium">
                  {useCase.description}
                </p>
                
                <div className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div 
                      key={metricIndex}
                      className="bg-muted rounded-lg px-3 py-2 text-sm font-medium text-foreground"
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Ready to Transform Your Operations?
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These results aren't outliers — they're what happens when you deploy 
                specialized AI crews that work together seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrewAIUseCases;