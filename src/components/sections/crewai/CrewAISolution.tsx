import { ArrowRight, Zap, Users, Brain, Target } from 'lucide-react';

const CrewAISolution = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Solution: CrewAI Multi-Agent Systems
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AMO AI integrates <strong>CrewAI</strong>, the open-source framework for orchestrating multiple AI agents.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Purpose & Goals
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="h-6 w-6 text-primary mt-1" />
                  <p className="text-foreground">
                    <strong>Replace</strong> slow, fragmented processes with coordinated AI crews
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <p className="text-foreground">
                    <strong>Automate 90%</strong> of workflows, reduce costs by <strong>60%</strong>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="h-6 w-6 text-primary mt-1" />
                  <p className="text-foreground">
                    Deliver results in <strong>hours, not weeks</strong>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <p className="text-foreground">
                    Free humans for <strong>strategy and innovation</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Visual diagram */}
            <div className="bg-muted rounded-xl p-8">
              <h4 className="text-xl font-semibold mb-6 text-center text-foreground">
                How AI Crews Work
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm font-medium">
                    User Request
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  <div className="bg-secondary text-secondary-foreground rounded-lg px-4 py-2 text-sm font-medium">
                    AI Agents
                  </div>
                </div>
                
                <div className="pl-4 space-y-2">
                  <div className="bg-background border border-border rounded-lg px-3 py-2 text-sm">
                    Research Agent
                  </div>
                  <div className="bg-background border border-border rounded-lg px-3 py-2 text-sm">
                    Content Agent
                  </div>
                  <div className="bg-background border border-border rounded-lg px-3 py-2 text-sm">
                    Analysis Agent
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="bg-accent text-accent-foreground rounded-lg px-4 py-2 text-sm font-medium">
                    Collaboration
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  <div className="bg-success text-success-foreground rounded-lg px-4 py-2 text-sm font-medium">
                    Business ROI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrewAISolution;