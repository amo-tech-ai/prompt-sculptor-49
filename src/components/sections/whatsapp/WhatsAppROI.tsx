import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, DollarSign, Calendar, BarChart3 } from 'lucide-react';

export const WhatsAppROI = () => {
  const pricingTiers = [
    { type: "Marketing", cost: "$0.033", volume: "1K-10K msgs", usage: "Promotions, broadcasts" },
    { type: "Utility", cost: "$0.021", volume: "10K-100K msgs", usage: "Notifications, updates" },
    { type: "Service", cost: "$0.016", volume: "100K+ msgs", usage: "Support, conversations" },
  ];

  const roiBreakdown = [
    { metric: "Initial Investment", value: "$1,000", description: "Monthly WhatsApp automation setup" },
    { metric: "Messages Sent", value: "50,000", description: "Average monthly volume" },
    { metric: "WhatsApp Costs", value: "$1,050", description: "Platform messaging fees" },
    { metric: "Conversions", value: "2,500", description: "At 5% conversion rate" },
    { metric: "Revenue Generated", value: "$25,000", description: "At $10 average order value" },
    { metric: "Net Profit", value: "$22,950", description: "After all costs" },
    { metric: "ROI", value: "450%", description: "Return on investment" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              The ROI Mathematics <span className="text-muted-foreground">(With Real Data)</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See exactly how WhatsApp automation pays for itself. Every number below is from real client implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* WhatsApp Pricing Breakdown */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <DollarSign className="w-6 h-6 text-green-500" />
                    <span>WhatsApp Business Pricing</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Transparent, volume-based pricing with no hidden fees
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pricingTiers.map((tier, index) => (
                      <div key={index} className="bg-muted/50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-foreground">{tier.type}</span>
                          <span className="text-green-500 font-bold">{tier.cost}/msg</span>
                        </div>
                        <div className="text-sm text-muted-foreground mb-1">{tier.volume}</div>
                        <div className="text-xs text-muted-foreground">{tier.usage}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Payback Timeline */}
              <Card className="bg-gradient-to-r from-primary/10 to-green-500/10">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-primary" />
                    <span>Payback Timeline</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Break-even Point:</span>
                      <span className="font-bold text-primary">30-90 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Full ROI Realization:</span>
                      <span className="font-bold text-primary">6 months</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Ongoing Monthly Profit:</span>
                      <span className="font-bold text-green-500">$20,000+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* ROI Calculation */}
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <BarChart3 className="w-6 h-6 text-primary" />
                    <span>ROI Calculation Example</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Real numbers from a mid-size e-commerce client
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {roiBreakdown.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-muted last:border-0">
                        <div>
                          <div className="font-medium text-foreground">{item.metric}</div>
                          <div className="text-xs text-muted-foreground">{item.description}</div>
                        </div>
                        <div className={`font-bold text-lg ${
                          item.metric === 'ROI' ? 'text-green-500' :
                          item.metric === 'Net Profit' ? 'text-primary' :
                          'text-foreground'
                        }`}>
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom Highlight */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/20 to-green-500/20 rounded-2xl p-8 max-w-4xl mx-auto border">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <TrendingUp className="w-8 h-8 text-green-500" />
                <h3 className="text-2xl font-bold text-foreground">For Every $1,000 Invested</h3>
              </div>
              <p className="text-3xl font-bold text-green-500 mb-2">You Get $5,500 Back</p>
              <p className="text-muted-foreground">
                That's a 450% ROI with payback in 30–90 days, guaranteed by our track record with 500+ implementations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};