import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Globe, ShoppingCart, Bot, MessageSquare, CreditCard, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export const UpdatedSpecialServices = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-amo-orange/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-amo-orange/30 rounded-full blur-xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 border-amo-orange text-amo-orange">
              Core AI Services
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
              We Design and Launch{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amo-orange to-amo-orange-light">
                AI-Powered Platforms
              </span>
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto mb-8">
              We design and launch AI-powered platforms with Webflow, Shopify, Claude, OpenAI, CrewAI, 
              AI Tools, WhatsApp, and Stripe. From MVPs to enterprise, we deliver scalable, user-friendly solutions.
            </p>
          </div>

          {/* Service Tags Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <Globe className="h-8 w-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm">Webflow Development</h3>
            </Card>
            <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <ShoppingCart className="h-8 w-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm">Shopify eCommerce</h3>
            </Card>
            <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <Bot className="h-8 w-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm">AI Agents</h3>
            </Card>
            <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <MessageSquare className="h-8 w-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm">WhatsApp Automation</h3>
            </Card>
            <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CreditCard className="h-8 w-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm">Stripe Payments</h3>
            </Card>
            <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <Database className="h-8 w-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm">Supabase Backends</h3>
            </Card>
          </div>

          {/* Real-world proof */}
          <div className="bg-gradient-to-r from-amo-orange/10 via-amo-orange/5 to-amo-orange/10 rounded-3xl p-8 lg:p-12 text-center border border-amo-orange/20">
            <blockquote className="text-xl md:text-2xl font-medium text-primary-foreground mb-4 italic">
              "From a Shopify store with WhatsApp order updates to a Webflow marketplace powered by Claude assistants — 
              we help businesses launch faster and scale smarter."
            </blockquote>
            <Button asChild className="mt-6">
              <Link to="/projects" className="flex items-center space-x-2">
                <span>See Real Examples</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};