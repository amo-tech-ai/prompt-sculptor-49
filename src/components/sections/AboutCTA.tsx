import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, Download, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutCTA = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-xl animate-float-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Ready to Build Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              AI-Powered Future?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join 50+ companies that have transformed their businesses with AI. 
            Let's turn your vision into reality in just 8 weeks.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group border-primary/20">
            <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Book a Strategy Call
            </h3>
            <p className="text-muted-foreground mb-6 text-sm">
              30-minute consultation to discuss your AI automation goals and see if we're a good fit.
            </p>
            <Link to="/brief-collection">
              <Button className="w-full group/btn">
                Schedule Free Call
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group border-accent/20">
            <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Download className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Download AI Guide
            </h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Free guide: "How to Implement AI in Your Business Without Breaking the Bank"
            </p>
            <Button variant="outline" className="w-full group/btn border-accent text-accent hover:bg-accent hover:text-white">
              Get Free Guide
              <Download className="ml-2 w-4 h-4 group-hover/btn:translate-y-1 transition-transform" />
            </Button>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group border-orange/20">
            <div className="bg-orange/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8 text-orange" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Start Live Chat
            </h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Get instant answers to your questions from our AI specialists. Available 9-5 EST.
            </p>
            <Button variant="outline" className="w-full group/btn border-orange text-orange hover:bg-orange hover:text-white">
              Chat Now
              <MessageCircle className="ml-2 w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            </Button>
          </Card>
        </div>

        {/* Main CTA */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-orange/10 rounded-3xl p-8 lg:p-12 text-center border border-primary/20">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Let's Start Your 8-Week AI Transformation
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            No lengthy sales cycles. No hidden costs. Just a clear path to AI success 
            with guaranteed results in 8 weeks or less.
          </p>
          
          {/* Key benefits */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 text-sm">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-muted-foreground">Fixed timeline</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-muted-foreground">Transparent pricing</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-muted-foreground">Proven ROI</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span className="text-muted-foreground">30-day support</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/brief-collection">
              <Button size="lg" className="group">
                Start Your Project Today
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg">
                View Success Stories
              </Button>
            </Link>
          </div>
        </div>

        {/* Contact info */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>Questions? Email us at <a href="mailto:hello@amoai.co" className="text-primary hover:underline">hello@amoai.co</a> or call <a href="tel:+1234567890" className="text-primary hover:underline">(123) 456-7890</a></p>
        </div>
      </div>
    </section>
  );
};