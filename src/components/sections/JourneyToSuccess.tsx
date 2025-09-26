import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Search, FileText, Wrench, Rocket, Clock, CheckCircle, TrendingUp, ArrowRight } from 'lucide-react';

export const JourneyToSuccess = () => {
  const steps = [
    {
      icon: Search,
      title: "Design Sprint",
      duration: "Week 1-2",
      value: "Discovery & Wireframing",
      description: "Deep discovery sessions, user journey mapping, wireframing and visual design",
      detail: "Complete wireframes & interactive prototype",
      color: "text-orange",
      accentColor: "border-orange bg-orange",
      cardBg: "bg-card/50"
    },
    {
      icon: FileText,
      title: "Rapid Build",
      duration: "Week 3-5",
      value: "Core Development",
      description: "Database design, AI model integration, frontend development in parallel streams",
      detail: "Fully functional core application",
      color: "text-purple-500",
      accentColor: "border-purple-500 bg-purple-500",
      cardBg: "bg-purple-500/5"
    },
    {
      icon: Wrench,
      title: "Integration & Testing",
      duration: "Week 6-7",
      value: "Quality Assurance",
      description: "Third-party integrations, comprehensive testing, performance optimization",
      detail: "Production-ready application",
      color: "text-blue-500",
      accentColor: "border-blue-500 bg-blue-500",
      cardBg: "bg-blue-500/5"
    },
    {
      icon: Rocket,
      title: "Launch & Scale",
      duration: "Week 8",
      value: "Go Live",
      description: "Production deployment, monitoring setup, user training and scaling preparation",
      detail: "Live application with full support",
      color: "text-green-500",
      accentColor: "border-green-500 bg-green-500",
      cardBg: "bg-green-500/5"
    }
  ];

  const results = [
    {
      icon: Clock,
      metric: "8 Weeks",
      comparison: "vs 6+ months",
      label: "Time to Market"
    },
    {
      icon: CheckCircle,
      metric: "100%",
      comparison: "Success Rate",
      label: "Project Delivery"
    },
    {
      icon: TrendingUp,
      metric: "340%",
      comparison: "ROI within 3 months",
      label: "Return on Investment"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 px-6 py-2 border-orange text-orange font-medium">
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange/70">
                8 Weeks.
              </span>{' '}
              Not 8 Months.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              While others take 6+ months to deliver, we launch complete AI applications in just 8 weeks. Our proven process eliminates delays, reduces scope creep, and gets you to market faster than you thought possible.
            </p>
          </div>

          {/* Curved Timeline - Desktop */}
          <div className="hidden lg:block relative mb-20">
            {/* Curved path background */}
            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
              <svg className="w-full h-24" viewBox="0 0 1200 100" preserveAspectRatio="none">
                <path
                  d="M0,50 Q300,20 600,50 T1200,50"
                  stroke="hsl(var(--muted))"
                  strokeWidth="3"
                  fill="none"
                  className="opacity-30"
                />
                <path
                  d="M0,50 Q300,20 600,50 T1200,50"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  fill="none"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--orange))" />
                    <stop offset="100%" stopColor="hsl(var(--orange))" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <div className="grid grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Connection Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden xl:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-8 h-8 text-orange/60 group-hover:text-orange transition-colors" />
                    </div>
                  )}
                  
                  <Card className={`${step.cardBg} p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-3 group border-0 backdrop-blur-sm relative overflow-hidden`}>
                    {/* Background glow */}
                    <div className={`absolute inset-0 ${step.color.replace('text-', 'bg-')}/5 rounded-xl blur-xl transform scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Icon circle */}
                    <div className={`${step.accentColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 relative z-10 shadow-lg`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Step number badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange rounded-full border-4 border-background flex items-center justify-center z-20">
                      <span className="text-xs font-bold text-white">{index + 1}</span>
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      
                      <Badge variant="secondary" className="mb-4 font-semibold">
                        {step.duration}
                      </Badge>
                      
                      <div className="text-lg font-bold text-orange mb-3 flex items-center justify-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        {step.value}
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-2">
                        {step.description}
                      </p>
                      
                      <p className="text-sm text-orange/80 font-medium">
                        {step.detail}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline - Vertical Stacked */}
          <div className="block lg:hidden mb-20">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-orange via-orange/60 to-orange/30 rounded-full" />
              
              <div className="space-y-12">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    <Card className={`${step.cardBg} p-6 ml-16 border-l-4 ${step.accentColor.split(' ')[0]} shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
                      {/* Timeline circle */}
                      <div className={`absolute -left-20 top-8 ${step.accentColor} w-12 h-12 rounded-full border-4 border-background flex items-center justify-center shadow-lg`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Step number */}
                      <div className="absolute -left-14 -top-2 w-6 h-6 bg-orange rounded-full border-2 border-background flex items-center justify-center">
                        <span className="text-xs font-bold text-white">{index + 1}</span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold text-foreground">
                            {step.title}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            {step.duration}
                          </Badge>
                        </div>
                        
                        <div className="text-base font-bold text-orange flex items-center gap-2">
                          <ArrowRight className="w-4 h-4" />
                          {step.value}
                        </div>
                        
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                        
                        <p className="text-sm text-orange/80 font-medium">
                          {step.detail}
                        </p>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results Layer */}
          <div className="bg-gradient-to-r from-muted/20 via-muted/30 to-muted/20 rounded-3xl p-10 border border-border/50 backdrop-blur-sm">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Results You Can Expect
              </h3>
              <p className="text-muted-foreground">
                Proven outcomes from our streamlined process
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {results.map((result, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange/20 to-orange/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <result.icon className="w-8 h-8 text-orange" />
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {result.metric}
                  </div>
                  
                  <div className="text-orange font-semibold mb-2">
                    {result.comparison}
                  </div>
                  
                  <div className="text-muted-foreground font-medium">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};