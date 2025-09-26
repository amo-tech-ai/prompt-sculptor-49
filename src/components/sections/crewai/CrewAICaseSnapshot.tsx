import { ShoppingBag, TrendingUp, Clock, DollarSign } from 'lucide-react';

const CrewAICaseSnapshot = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Case Study: Global Fashion E-Commerce Platform
            </h2>
            <p className="text-xl text-muted-foreground">
              How CrewAI transformed a manual product launch process
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <ShoppingBag className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    The Challenge
                  </h3>
                </div>
                <div className="bg-destructive/10 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-destructive mb-2">Before CrewAI:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 1 month to launch 50,000 products</li>
                    <li>• Manual content creation and optimization</li>
                    <li>• High error rates and inconsistency</li>
                    <li>• Delayed go-to-market timelines</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    The Solution
                  </h3>
                </div>
                <div className="bg-primary/10 rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-2">CrewAI Content Crew:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Product Research Agent</li>
                    <li>• Content Generation Agent</li>
                    <li>• SEO Optimization Agent</li>
                    <li>• Quality Assurance Agent</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
                Incredible Results
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">7 Hours</div>
                  <div className="text-lg font-semibold text-foreground mb-1">New Timeline</div>
                  <div className="text-sm text-muted-foreground">99% faster than before</div>
                </div>

                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">$5M</div>
                  <div className="text-lg font-semibold text-foreground mb-1">Cost Savings</div>
                  <div className="text-sm text-muted-foreground">Annual operational savings</div>
                </div>

                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">+30%</div>
                  <div className="text-lg font-semibold text-foreground mb-1">Conversion Rate</div>
                  <div className="text-sm text-muted-foreground">Higher quality content</div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6">
              <h4 className="text-xl font-bold text-center mb-4 text-foreground">
                "CrewAI didn't just speed up our process — it transformed our entire business model."
              </h4>
              <p className="text-center text-muted-foreground">
                — Head of Operations, Global Fashion E-Commerce Platform
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              This is just one example of how CrewAI multi-agent systems can revolutionize your operations. 
              Every business has workflows that can be dramatically improved with the right AI crew.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrewAICaseSnapshot;