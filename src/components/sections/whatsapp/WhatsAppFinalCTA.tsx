import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MessageCircle, Play, Shield } from 'lucide-react';

export const WhatsAppFinalCTA = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm ready to transform WhatsApp into our #1 sales channel. Let's discuss our implementation.";
    const whatsappUrl = `https://wa.me/14168003103?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
              Your Next Step: Transform WhatsApp Into Your{' '}
              <span className="text-green-400">#1 Channel</span>
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Join 500+ businesses already using WhatsApp automation to generate millions in additional revenue. 
              Choose your preferred way to get started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Book Strategy Call */}
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-4">Book Strategy Call</h3>
                <p className="text-primary-foreground/80 mb-6">
                  30-minute free consultation to analyze your business and create a custom WhatsApp automation strategy.
                </p>
                <ul className="text-sm text-primary-foreground/70 space-y-2 mb-6">
                  <li>• Custom ROI projection</li>
                  <li>• Implementation timeline</li>
                  <li>• Technology recommendations</li>
                  <li>• Pricing discussion</li>
                </ul>
                <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule Free Call
                </Button>
              </CardContent>
            </Card>

            {/* Start WhatsApp Chat */}
            <Card className="bg-gradient-to-br from-green-500/20 to-primary/20 border-green-500/30 hover:border-green-500/50 transition-all duration-300 group scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-4">Start WhatsApp Chat</h3>
                <p className="text-primary-foreground/80 mb-6">
                  Get instant answers and see our WhatsApp automation in action. Chat with our AI assistant now.
                </p>
                <ul className="text-sm text-primary-foreground/70 space-y-2 mb-6">
                  <li>• Instant responses 24/7</li>
                  <li>• See automation demo</li>
                  <li>• Get quick quotes</li>
                  <li>• Ask technical questions</li>
                </ul>
                <Button 
                  size="lg" 
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat Now on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Watch Demo Video */}
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-4">Watch Demo Video</h3>
                <p className="text-primary-foreground/80 mb-6">
                  See real WhatsApp automations in action with live client examples and ROI breakdowns.
                </p>
                <ul className="text-sm text-primary-foreground/70 space-y-2 mb-6">
                  <li>• 15-minute overview</li>
                  <li>• Real client results</li>
                  <li>• Implementation process</li>
                  <li>• ROI calculations</li>
                </ul>
                <Button size="lg" variant="outline" className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Guarantee Badge */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center space-x-4 bg-gradient-to-r from-green-500/20 to-primary/20 rounded-2xl p-8 border border-primary-foreground/20 max-w-2xl">
              <Shield className="w-12 h-12 text-green-400" />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                  30-Day ROI Promise
                </h3>
                <p className="text-primary-foreground/80">
                  If you don't see measurable ROI within 30 days of going live, we'll refund your entire investment. No questions asked.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center mt-12">
            <p className="text-primary-foreground/60 mb-4">Prefer to talk first? We're here to help.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a 
                href="mailto:info@amoai.co" 
                className="flex items-center space-x-2 text-primary-foreground hover:text-green-400 transition-colors"
              >
                <span className="font-medium">info@amoai.co</span>
              </a>
              <a 
                href="tel:+14168003103" 
                className="flex items-center space-x-2 text-primary-foreground hover:text-green-400 transition-colors"
              >
                <span className="font-medium">+1 416-800-3103</span>
              </a>
              <span className="text-primary-foreground/60">
                Average response: <span className="text-green-400 font-semibold">&lt; 2 hours</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};