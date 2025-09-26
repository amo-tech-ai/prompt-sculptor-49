import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Rocket, BarChart, Zap } from 'lucide-react';

export const WhatsAppProcess = () => {
  const phases = [
    {
      weeks: "Week 1–2",
      title: "Foundation",
      icon: CheckCircle,
      description: "Get your WhatsApp Business verified and first chatbot live",
      deliverables: [
        "WhatsApp Business API setup",
        "Green tick verification",
        "Basic chatbot deployment",
        "Initial flow configuration"
      ],
      outcome: "Your first automated conversations start within 48 hours"
    },
    {
      weeks: "Week 3–4", 
      title: "Acceleration",
      icon: Zap,
      description: "AI training and abandoned cart recovery go live",
      deliverables: [
        "Advanced AI training",
        "Cart recovery flows",
        "Product catalog integration",
        "Customer segmentation"
      ],
      outcome: "See 60%+ cart recovery rates and reduced support load"
    },
    {
      weeks: "Week 5–6",
      title: "Optimization", 
      icon: BarChart,
      description: "A/B testing and performance dashboards",
      deliverables: [
        "Conversion optimization",
        "A/B testing setup",
        "Analytics dashboards",
        "Performance monitoring"
      ],
      outcome: "Data-driven improvements show measurable ROI increase"
    },
    {
      weeks: "Week 7–8",
      title: "Scale",
      icon: Rocket,
      description: "Production launch with advanced automations",
      deliverables: [
        "Full production deployment",
        "Advanced automation flows",
        "Team training & handover",
        "Ongoing support setup"
      ],
      outcome: "Complete system running independently with 450%+ ROI"
    }
  ];

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
              Our Implementation Process <span className="text-primary-foreground/80">(Fast & Proven)</span>
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              From API setup to production launch in 8 weeks. Here's exactly what happens and when.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {phases.map((phase, index) => (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-primary rounded-lg flex items-center justify-center">
                      <phase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-green-400 font-semibold">{phase.weeks}</div>
                      <CardTitle className="text-xl text-primary-foreground">{phase.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-primary-foreground/80">
                    {phase.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-primary-foreground mb-3">Key Deliverables:</h4>
                    <div className="space-y-2">
                      {phase.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                          <span className="text-sm text-primary-foreground/90">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500/20 to-primary/20 rounded-lg p-4">
                    <p className="text-sm font-semibold text-green-400 mb-1">Expected Outcome:</p>
                    <p className="text-sm text-primary-foreground/90">{phase.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Timeline Visualization */}
          <div className="mt-16">
            <div className="bg-primary-foreground/10 rounded-2xl p-8 border border-primary-foreground/20">
              <h3 className="text-2xl font-bold text-primary-foreground mb-6 text-center">8-Week Timeline Overview</h3>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                {phases.map((phase, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-primary rounded-full flex items-center justify-center mb-3">
                      <phase.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-green-400">{phase.weeks}</div>
                    <div className="text-primary-foreground font-medium">{phase.title}</div>
                    {index < phases.length - 1 && (
                      <div className="hidden md:block w-8 h-px bg-primary-foreground/30 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-green-500/20 to-primary/20 rounded-2xl p-8 max-w-2xl mx-auto border border-primary-foreground/20">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">2-Week Go-Live Guarantee</h3>
              <p className="text-primary-foreground/80">
                Your WhatsApp automation will be live and generating results within 2 weeks, or we work for free until it is.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};