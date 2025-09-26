import { Card } from "@/components/ui/card";
import { Rocket, Brain, TrendingUp, Shield } from "lucide-react";

export const AboutWhyChooseUs = () => {
  const features = [
    {
      icon: Rocket,
      title: "Lightning Fast Delivery",
      description: "2–8 week delivery timeline from concept to live application",
      highlight: "8x faster than traditional development",
      color: "text-orange",
      bgColor: "bg-orange/10"
    },
    {
      icon: Brain,
      title: "Cutting-Edge Expertise",
      description: "Claude, GPT-4, Supabase, CrewAI, AI Tools, and modern AI stack",
      highlight: "Latest AI technologies",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: TrendingUp,
      title: "Proven ROI",
      description: "293% average return on investment within 3 months of launch",
      highlight: "Guaranteed profitability",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "50+ live applications with enterprise-grade security and compliance",
      highlight: "100% success rate",
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ];

  return (
    <section className="py-24 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-background mb-4">
            Why Choose AMO AI?
          </h2>
          <p className="text-lg text-background/70 max-w-3xl mx-auto">
            We combine speed, expertise, and results to deliver AI solutions that 
            actually move the needle for your business.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group border-0 bg-background/10 backdrop-blur-sm"
            >
              <div className={`${feature.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-background mb-3">
                {feature.title}
              </h3>
              
              <p className="text-background/70 mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <div className={`inline-flex items-center text-sm font-medium ${feature.color} bg-background/20 px-3 py-1 rounded-full`}>
                {feature.highlight}
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-20 bg-background/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-background/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-orange mb-2">50+</div>
              <div className="text-lg font-medium text-background mb-1">Live Applications</div>
              <div className="text-sm text-background/70">Across 12+ industries</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-orange mb-2">90%</div>
              <div className="text-lg font-medium text-background mb-1">Process Automation</div>
              <div className="text-sm text-background/70">Average efficiency gain</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-orange mb-2">3</div>
              <div className="text-lg font-medium text-background mb-1">Month ROI</div>
              <div className="text-sm text-background/70">Average payback period</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};