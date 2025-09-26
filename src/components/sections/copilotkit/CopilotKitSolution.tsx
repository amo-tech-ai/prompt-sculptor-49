import { Bot, ArrowRight, Sparkles, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const CopilotKitSolution = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform static applications into intelligent, adaptive systems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Description */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Context-Aware AI Copilots</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    CopilotKit embeds intelligent AI assistants directly into your applications, 
                    understanding user context and application state to provide relevant, actionable guidance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Intelligent Adaptation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our solution transforms static interfaces into dynamic, responsive systems 
                    that adapt to user needs, automate complex workflows, and provide instant support.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Flow diagram */}
            <Card className="p-8 bg-gradient-to-br from-muted/20 to-muted/40 border-0">
              <CardContent className="p-0">
                <h4 className="text-lg font-semibold mb-6 text-center">
                  AI Copilot Integration Flow
                </h4>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">1</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <div className="flex-1">
                      <div className="font-medium">User Input</div>
                      <div className="text-sm text-muted-foreground">Natural language request</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <div className="flex-1">
                      <div className="font-medium">AI Processing</div>
                      <div className="text-sm text-muted-foreground">Context analysis & decision making</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-green-600" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <div className="flex-1">
                      <div className="font-medium">App Actions</div>
                      <div className="text-sm text-muted-foreground">Automated workflow execution</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};