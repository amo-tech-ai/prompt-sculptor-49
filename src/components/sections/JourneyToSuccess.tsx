import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Search, FileText, Wrench, Rocket, Clock, CheckCircle, TrendingUp } from 'lucide-react';

export const JourneyToSuccess = () => {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      duration: "2 Days",
      value: "Faster Discovery",
      description: "AI wizard replaces long calls",
      highlight: "30 minutes vs 2.5-hour calls",
      color: "text-orange",
      bgColor: "bg-orange/10",
      borderColor: "border-orange/20"
    },
    {
      icon: FileText,
      title: "Prototype",
      duration: "2 Weeks",
      value: "Real User Feedback",
      description: "Working prototype tested with users",
      highlight: "Validated with real users",
      color: "text-foreground",
      bgColor: "bg-muted/50",
      borderColor: "border-border"
    },
    {
      icon: Wrench,
      title: "Build",
      duration: "3–6 Weeks",
      value: "Agile Development",
      description: "Agile sprints with feedback",
      highlight: "Weekly iterations",
      color: "text-orange",
      bgColor: "bg-orange/10",
      borderColor: "border-orange/20"
    },
    {
      icon: Rocket,
      title: "Launch",
      duration: "Ongoing",
      value: "Continuous Improvement",
      description: "Scaling + continuous improvement",
      highlight: "Post-launch optimization",
      color: "text-foreground",
      bgColor: "bg-muted/50",
      borderColor: "border-border"
    }
  ];

  const results = [
    {
      icon: Clock,
      metric: "2–8 Weeks",
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
      metric: "293%",
      comparison: "ROI within 3 months",
      label: "Return on Investment"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 border-orange text-orange">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Journey to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-orange">
                AI Success
              </span>
            </h2>
          </div>

          {/* Timeline - Desktop Horizontal */}
          <div className="hidden lg:block relative mb-16">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-muted rounded-full transform -translate-y-1/2 z-0" />
            <div className="absolute top-1/2 left-8 h-1 bg-gradient-to-r from-orange to-foreground rounded-full transform -translate-y-1/2 z-10" style={{ width: 'calc(100% - 4rem)' }} />
            
            <div className="grid grid-cols-4 gap-8 relative z-20">
              {steps.map((step, index) => (
                <Card 
                  key={index}
                  className={`p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group ${step.bgColor} ${step.borderColor} border-2 relative overflow-hidden`}
                >
                  {/* Timeline dot */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange rounded-full border-4 border-background flex items-center justify-center z-30">
                    <span className="text-xs font-bold text-white">{index + 1}</span>
                  </div>
                  
                  <div className="mt-4">
                    <div className={`${step.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <step.icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    
                    <div className="mb-3">
                      <Badge variant="secondary" className="text-xs font-semibold">
                        {step.duration}
                      </Badge>
                    </div>
                    
                    <div className="text-sm font-bold text-orange mb-2">
                      → {step.value}
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Timeline - Mobile Vertical */}
          <div className="block lg:hidden mb-16">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Vertical line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-16 bg-muted" />
                  )}
                  
                  <Card className={`p-6 ml-16 ${step.bgColor} ${step.borderColor} border-2 relative`}>
                    {/* Timeline dot */}
                    <div className="absolute -left-20 top-6 w-8 h-8 bg-orange rounded-full border-4 border-background flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{index + 1}</span>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className={`${step.bgColor} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <step.icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          {step.title}
                        </h3>
                        
                        <Badge variant="secondary" className="text-xs mb-2">
                          {step.duration}
                        </Badge>
                        
                        <div className="text-sm font-bold text-orange mb-2">
                          → {step.value}
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Results Track */}
          <div className="bg-muted/30 rounded-2xl p-8 mb-8">
            <h3 className="text-center text-lg font-semibold text-foreground mb-8">
              Results You Can Expect
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange/10 rounded-xl mb-4">
                    <result.icon className="w-6 h-6 text-orange" />
                  </div>
                  
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {result.metric}
                  </div>
                  
                  <div className="text-sm font-medium text-orange mb-1">
                    {result.comparison}
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
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