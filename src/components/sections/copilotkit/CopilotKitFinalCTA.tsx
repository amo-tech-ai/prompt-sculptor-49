import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Phone } from "lucide-react";

export const CopilotKitFinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-4 py-2">
            Ready to Transform Your App?
          </Badge>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
            Turn Your Product Into an AI Companion
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            See how CopilotKit copilots help users, reduce costs, and delight customers from day one.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="px-8 py-6 text-lg font-semibold">
              <Phone className="mr-2 w-5 h-5" />
              Book Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold">
              <Play className="mr-2 w-5 h-5" />
              See AI Demo
            </Button>
          </div>

          {/* Guarantee badge */}
          <div className="inline-flex items-center space-x-3 bg-background/80 backdrop-blur-sm border border-border rounded-full px-6 py-3">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm font-medium text-muted-foreground">
              30-Day ROI Promise – or full refund
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};