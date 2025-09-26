import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-foreground" />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-xl animate-float-slow" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/20 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-orange" />
          <span className="text-sm font-medium text-orange">About AMO AI</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight">
          We Help Businesses Launch{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange/70">
            AI-Powered Applications
          </span>{" "}
          in Weeks, Not Months
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-background/70 mb-8 max-w-3xl mx-auto leading-relaxed">
          Our mission is to democratize AI technology by making it accessible, 
          practical, and profitable for businesses of all sizes. We turn complex 
          AI concepts into simple, powerful solutions.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact">
            <Button size="lg" className="group">
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/projects">
            <Button variant="outline" size="lg">
              See Our Work
            </Button>
          </Link>
        </div>

        {/* Quick stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-orange mb-2">50+</div>
            <div className="text-sm text-background/70">Live Applications</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-orange mb-2">2-8</div>
            <div className="text-sm text-background/70">Week Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-orange mb-2">293%</div>
            <div className="text-sm text-background/70">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-orange mb-2">100%</div>
            <div className="text-sm text-background/70">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background/30 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};