import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight, Phone } from 'lucide-react';

export const WhatsAppHero = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in learning more about WhatsApp Automation Services.";
    const whatsappUrl = `https://wa.me/14168003103?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-green-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-500/20 to-primary/20 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground">
              WhatsApp{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500">
                Automation Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Turn 3 Billion Users Into Your Customers with AI-Powered Automation
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">98%</div>
                <div className="text-muted-foreground">Open Rates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">60%</div>
                <div className="text-muted-foreground">Click-Through Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">450%</div>
                <div className="text-muted-foreground">Average ROI</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                <Phone className="w-5 h-5 mr-2" />
                Start Free Strategy Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto bg-green-500 hover:bg-green-600 text-white border-green-500"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat With Us on WhatsApp
              </Button>
            </div>
          </div>

          {/* WhatsApp Chat Mockup */}
          <div className="relative max-w-md mx-auto">
            <div className="bg-card border rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center space-x-3 mb-4 pb-4 border-b">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">AI Assistant</div>
                  <div className="text-xs text-green-500">Online</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-muted rounded-2xl rounded-bl-md p-3 max-w-[80%]">
                  <p className="text-sm text-foreground">Hi! How can I help you with your order today? 🛍️</p>
                </div>
                <div className="bg-green-500 text-white rounded-2xl rounded-br-md p-3 max-w-[80%] ml-auto">
                  <p className="text-sm">Track my order #12345</p>
                </div>
                <div className="bg-muted rounded-2xl rounded-bl-md p-3 max-w-[80%]">
                  <p className="text-sm text-foreground">Your order is on its way! Delivery: Today 3-5 PM 📦</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};