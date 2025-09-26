import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Mail, MessageSquare, TrendingUp } from 'lucide-react';

export const WhatsAppAdvantage = () => {
  const stats = [
    { icon: MessageCircle, label: "Daily Business Messages", value: "175M+", color: "text-green-500" },
    { icon: TrendingUp, label: "Hours Saved Daily", value: "2.6B", color: "text-primary" },
  ];

  const comparison = [
    { channel: "WhatsApp", openRate: "98%", ctr: "60%", roi: "450%", responseTime: "< 1 min" },
    { channel: "Email", openRate: "22%", ctr: "3%", roi: "42%", responseTime: "24 hours" },
    { channel: "SMS", openRate: "85%", ctr: "8%", roi: "35%", responseTime: "2 hours" },
  ];

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
              The Strategic Advantage: Why Smart Businesses Choose WhatsApp
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Every WhatsApp message is worth 20 emails. Here's the reality check your competitors don't want you to see.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Reality Check Stats */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-primary-foreground mb-6">Reality Check</h3>
              {stats.map((stat) => (
                <Card key={stat.label} className="bg-primary-foreground/10 border-primary-foreground/20">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-foreground">{stat.value}</div>
                      <div className="text-primary-foreground/80">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary-foreground mb-6">Channel Performance Comparison</h3>
              <div className="bg-primary-foreground/10 rounded-lg overflow-hidden border border-primary-foreground/20">
                <div className="grid grid-cols-5 gap-4 p-4 bg-primary-foreground/20 font-semibold text-primary-foreground text-sm">
                  <div>Channel</div>
                  <div>Open Rate</div>
                  <div>CTR</div>
                  <div>ROI</div>
                  <div>Response</div>
                </div>
                {comparison.map((item, index) => (
                  <div 
                    key={item.channel} 
                    className={`grid grid-cols-5 gap-4 p-4 text-sm ${
                      index === 0 ? 'bg-green-500/20 text-primary-foreground font-semibold' : 'text-primary-foreground/80'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      {item.channel === 'WhatsApp' && <MessageCircle className="w-4 h-4 text-green-500" />}
                      {item.channel === 'Email' && <Mail className="w-4 h-4" />}
                      {item.channel === 'SMS' && <MessageSquare className="w-4 h-4" />}
                      <span>{item.channel}</span>
                    </div>
                    <div>{item.openRate}</div>
                    <div>{item.ctr}</div>
                    <div>{item.roi}</div>
                    <div>{item.responseTime}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlight Statement */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-green-500/20 to-primary/20 rounded-2xl p-8 max-w-2xl mx-auto border border-primary-foreground/20">
              <p className="text-2xl font-bold text-primary-foreground">
                "Every WhatsApp message is worth 20 emails."
              </p>
              <p className="text-primary-foreground/80 mt-4">
                Stop playing catch-up. Start leading with the platform that actually converts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};