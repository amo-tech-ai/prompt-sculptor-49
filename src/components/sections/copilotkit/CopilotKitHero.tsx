import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Sparkles, ArrowRight } from "lucide-react";

export const CopilotKitHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
            <Bot className="w-4 h-4 mr-2" />
            AI-Powered Application Enhancement
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
            CopilotKit AI Services
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Embed AI copilots into your applications — automate workflows, cut costs, and delight users.
          </p>

          {/* AI Network Visualization */}
          <div className="mb-12 relative">
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <Bot className="w-8 h-8 text-primary" />
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground animate-pulse" />
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground animate-pulse" />
              <div className="w-16 h-16 rounded-full bg-secondary/40 flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-sm" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">User → AI Copilot → App Actions</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="px-8 py-6 text-lg font-semibold">
              Book Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold">
              See Live Demo
            </Button>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">70%</div>
              <div className="text-sm text-muted-foreground">Time Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Fewer Support Tickets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">60 Days</div>
              <div className="text-sm text-muted-foreground">ROI Timeline</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};