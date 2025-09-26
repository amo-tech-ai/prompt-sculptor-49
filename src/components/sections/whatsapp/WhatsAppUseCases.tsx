import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingBag, CreditCard, GraduationCap, Building } from 'lucide-react';

export const WhatsAppUseCases = () => {
  const industries = [
    {
      id: "ecommerce",
      title: "E-commerce & Retail",
      icon: ShoppingBag,
      description: "Cart recovery and customer loyalty that actually converts",
      features: [
        "67% cart recovery rate (vs 8% email)",
        "Personalized product recommendations",
        "One-click reorder functionality", 
        "VIP customer exclusive deals"
      ],
      caseStudy: {
        client: "Fashion Brand",
        result: "Generated $1.2M additional revenue in 6 months",
        metrics: "450% ROI, 67% cart recovery rate"
      }
    },
    {
      id: "financial",
      title: "Financial Services", 
      icon: CreditCard,
      description: "Same-day onboarding with 40% cost reduction",
      features: [
        "Automated loan applications",
        "24-hour approval process",
        "Secure document collection",
        "Compliance-ready workflows"
      ],
      caseStudy: {
        client: "Mortgage Lender",
        result: "Reduced approval time from 7 days to 24 hours",
        metrics: "300% faster processing, 85% completion rate"
      }
    },
    {
      id: "education",
      title: "Education & Training",
      icon: GraduationCap,
      description: "60% course completion boost with 3x engagement",
      features: [
        "Automated course reminders",
        "Interactive learning modules",
        "Progress tracking",
        "Instant certification delivery"
      ],
      caseStudy: {
        client: "Online University",
        result: "Increased course completion by 60%",
        metrics: "3x engagement, 90% satisfaction rate"
      }
    },
    {
      id: "enterprise",
      title: "Enterprise & B2B",
      icon: Building,
      description: "Streamlined operations and customer success",
      features: [
        "Lead qualification automation",
        "Meeting scheduling flows",
        "Customer onboarding",
        "Support ticket routing"
      ],
      caseStudy: {
        client: "SaaS Company",
        result: "340% increase in trial-to-paid conversion",
        metrics: "50% faster onboarding, 95% user adoption"
      }
    }
  ];

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
              Industry Solutions That Drive Results
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Proven automation frameworks tailored for your industry's unique challenges and opportunities.
            </p>
          </div>

          <Tabs defaultValue="ecommerce" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-primary-foreground/10 rounded-lg p-1">
              {industries.map((industry) => (
                <TabsTrigger 
                  key={industry.id} 
                  value={industry.id}
                  className="flex flex-col items-center space-y-2 py-4 data-[state=active]:bg-primary-foreground data-[state=active]:text-primary rounded-md"
                >
                  <industry.icon className="w-5 h-5" />
                  <span className="text-sm font-medium hidden md:block">{industry.title}</span>
                  <span className="text-xs md:hidden">{industry.title.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {industries.map((industry) => (
              <TabsContent key={industry.id} value={industry.id} className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Features */}
                  <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3 text-primary-foreground">
                        <industry.icon className="w-6 h-6 text-green-500" />
                        <span>{industry.title}</span>
                      </CardTitle>
                      <p className="text-primary-foreground/80">
                        {industry.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {industry.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-primary-foreground/90">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Case Study */}
                  <Card className="bg-gradient-to-br from-green-500/20 to-primary/20 border-primary-foreground/20">
                    <CardHeader>
                      <CardTitle className="text-primary-foreground">Success Story</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm text-primary-foreground/80 mb-2">Client:</p>
                        <p className="font-semibold text-primary-foreground">{industry.caseStudy.client}</p>
                      </div>
                      <div>
                        <p className="text-sm text-primary-foreground/80 mb-2">Result:</p>
                        <p className="font-semibold text-primary-foreground">{industry.caseStudy.result}</p>
                      </div>
                      <div className="bg-primary-foreground/10 rounded-lg p-4">
                        <p className="text-sm text-primary-foreground/80 mb-1">Key Metrics:</p>
                        <p className="font-bold text-green-400">{industry.caseStudy.metrics}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};