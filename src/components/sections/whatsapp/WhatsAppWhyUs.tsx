import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Brain, DollarSign, Users, Award } from 'lucide-react';

export const WhatsAppWhyUs = () => {
  const reasons = [
    {
      icon: Users,
      title: "500+ Implementations",
      description: "More WhatsApp automations deployed than any other agency",
      highlight: "Proven track record"
    },
    {
      icon: Clock,
      title: "2-Week Go-Live Guarantee", 
      description: "Your WhatsApp automation will be live within 14 days, guaranteed",
      highlight: "Speed promise"
    },
    {
      icon: Brain,
      title: "AI-First Approach",
      description: "GPT-5, Claude, and custom AI models for superior automation",
      highlight: "Cutting-edge tech"
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No markups on WhatsApp costs, no hidden fees, no surprises",
      highlight: "Honest pricing"
    }
  ];

  const clientLogos = [
    { name: "Fashion Retailer", industry: "E-commerce", result: "$1.2M revenue boost" },
    { name: "Healthcare Group", industry: "Medical", result: "94% cost reduction" },
    { name: "SaaS Platform", industry: "Technology", result: "340% conversion increase" },
    { name: "Hotel Chain", industry: "Hospitality", result: "60% booking automation" }
  ];

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
              Why AMO AI?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              The only WhatsApp automation agency with a proven 8-week delivery guarantee and transparent pricing.
            </p>
          </div>

          {/* Core Reasons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-bold text-primary-foreground">{reason.title}</h3>
                        <Badge variant="outline" className="text-green-400 border-green-400">
                          {reason.highlight}
                        </Badge>
                      </div>
                      <p className="text-primary-foreground/80">{reason.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Client Results Carousel */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary-foreground text-center mb-8">
              Client Results Across Industries
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clientLogos.map((client, index) => (
                <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-primary-foreground mb-1">{client.name}</h4>
                    <p className="text-sm text-primary-foreground/60 mb-3">{client.industry}</p>
                    <div className="bg-gradient-to-r from-green-500/20 to-primary/20 rounded-lg p-3">
                      <p className="text-sm font-semibold text-green-400">{client.result}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Checklist Style Summary */}
          <div className="bg-primary-foreground/10 rounded-2xl p-8 border border-primary-foreground/20">
            <h3 className="text-2xl font-bold text-primary-foreground text-center mb-8">
              What You Get With AMO AI
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-primary-foreground">500+ successful WhatsApp implementations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-primary-foreground">2-week go-live guarantee (or work for free)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-primary-foreground">AI-first approach (GPT-5 + Claude integration)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-primary-foreground">Transparent pricing (no WhatsApp markups)</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-primary-foreground">450% average ROI within 6 months</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-primary-foreground">24/7 monitoring and support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-primary-foreground">Full compliance with WhatsApp policies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-primary-foreground">Custom integrations with your existing tools</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};