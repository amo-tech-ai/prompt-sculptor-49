import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Workflow, ShoppingCart, Building2 } from 'lucide-react';

export const WhatsAppFeatures = () => {
  const features = [
    {
      icon: Bot,
      title: "AI Chatbots That Think Like Humans",
      description: "GPT-powered, multilingual, 94% cheaper than human agents. Handle complex queries, bookings, and sales automatically.",
      example: "Insurance company reduced support costs by $2.3M annually while improving response time from 4 hours to 30 seconds.",
      stats: "94% cost reduction, 24/7 availability"
    },
    {
      icon: Workflow,
      title: "WhatsApp Business Flows",
      description: "Lead capture, appointment bookings, payment processing, and catalog sales. All automated, all profitable.",
      example: "Mortgage lender automated loan applications via WhatsApp, reducing approval time from 7 days to 24 hours.",
      stats: "300% faster processing, 85% completion rate"
    },
    {
      icon: ShoppingCart,
      title: "Abandoned Cart Recovery",
      description: "Personalized reminders, dynamic discounts, and one-click checkout recovery that actually works.",
      example: "Fashion retailer recovered 67% of abandoned carts, generating $1.2M additional revenue in 6 months.",
      stats: "67% cart recovery, 450% ROI"
    },
    {
      icon: Building2,
      title: "Enterprise Integrations",
      description: "Seamless connection to Shopify, Salesforce, Stripe, HubSpot, and 200+ business tools via API.",
      example: "SaaS company integrated WhatsApp with their CRM, increasing trial-to-paid conversion by 340%.",
      stats: "200+ integrations, real-time sync"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              What We Build: Solutions That Drive Revenue
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four core automation systems that transform WhatsApp from a chat app into your most profitable sales channel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {feature.title}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-foreground font-medium mb-2">Real-World Example:</p>
                    <p className="text-sm text-muted-foreground">
                      {feature.example}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-primary/10 to-green-500/10 rounded-lg p-3">
                    <p className="text-sm font-semibold text-primary">
                      {feature.stats}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-4">
              Ready to see which solution fits your business?
            </p>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/20 to-green-500/20 rounded-full px-6 py-3">
              <span className="text-foreground font-semibold">Book a free strategy call</span>
              <span className="text-muted-foreground">→</span>
              <span className="text-green-500 font-semibold">Get custom ROI projection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};