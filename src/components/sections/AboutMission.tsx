import { Card } from "@/components/ui/card";
import { Lightbulb, Target, Heart, Sparkles } from "lucide-react";

export const AboutMission = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our Mission & Vision
            </h2>
            
            <div className="space-y-8">
              <Card className="p-6 border-l-4 border-l-primary bg-card/50">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To democratize AI technology by making it accessible, practical, and profitable 
                      for businesses of all sizes. We believe every company should have the power to 
                      leverage AI for growth and efficiency.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-accent bg-card/50">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Lightbulb className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A world where AI enhances human potential rather than replaces it. We envision 
                      businesses using AI to focus on creativity, strategy, and meaningful customer 
                      relationships while automation handles routine tasks.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-orange bg-card/50">
                <div className="flex items-start gap-4">
                  <div className="bg-orange/10 p-3 rounded-lg">
                    <Heart className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Values</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Speed without compromise, innovation with purpose, and results that matter. 
                      We value transparency, continuous learning, and building lasting partnerships 
                      with our clients.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/20 to-orange/20 rounded-3xl p-8 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AI</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Speed + Innovation
                  </h3>
                  <p className="text-muted-foreground">
                    Delivering cutting-edge AI solutions in record time
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">90%</div>
                    <div className="text-xs text-muted-foreground">Automation</div>
                  </div>
                  <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-accent">8</div>
                    <div className="text-xs text-muted-foreground">Weeks Max</div>
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