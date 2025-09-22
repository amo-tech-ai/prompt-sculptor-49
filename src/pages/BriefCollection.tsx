import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function BriefCollectionPage() {
  return (
    <>
      <Helmet>
        <title>Create Your Project Brief - AMO AI</title>
        <meta name="description" content="Get started with our AI-powered project brief creation tool" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <div className="bg-card border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Est. 15-20 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>AI-Guided Process</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-4 py-2 rounded-full text-sm font-medium mb-4">
                <CheckCircle className="h-4 w-4" />
                <span>AI-Powered Discovery Process</span>
              </div>
              <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-foreground to-orange bg-clip-text text-transparent">
                Create Your Project Brief
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our AI consultant will guide you through a comprehensive discovery process
                to understand your needs and deliver a tailored solution
              </p>
            </div>
            
            {/* Coming Soon Message */}
            <div className="bg-card rounded-2xl shadow-xl overflow-hidden border p-12 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">AI Brief Tool Coming Soon</h2>
              <p className="text-muted-foreground mb-6">
                Our AI-powered project brief creation tool is currently in development. 
                In the meantime, please contact us directly to discuss your project.
              </p>
              <Link to="/">
                <Button className="bg-orange hover:bg-orange/90 text-white">
                  Contact Us Today
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-card rounded-lg p-4 shadow-sm border">
                <div className="text-2xl font-bold text-orange">293%</div>
                <div className="text-sm text-muted-foreground">Average ROI</div>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-sm border">
                <div className="text-2xl font-bold text-foreground">2-8 weeks</div>
                <div className="text-sm text-muted-foreground">Delivery Time</div>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-sm border">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}