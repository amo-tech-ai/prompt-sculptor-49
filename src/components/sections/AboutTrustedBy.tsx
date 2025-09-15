import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

export const AboutTrustedBy = () => {
  const testimonials = [
    {
      company: "TechFlow Solutions",
      industry: "SaaS",
      logo: "TF",
      testimonial: "AMO AI delivered our customer support automation in just 6 weeks. We've reduced response time by 85% and increased customer satisfaction significantly.",
      author: "Sarah Johnson",
      role: "CTO",
      rating: 5,
      results: "85% faster response time"
    },
    {
      company: "RetailMax",
      industry: "E-commerce",
      logo: "RM",
      testimonial: "The AI-powered inventory management system transformed our operations. We now predict demand with 95% accuracy and reduced waste by 40%.",
      author: "Michael Chen",
      role: "Operations Director",
      rating: 5,
      results: "40% waste reduction"
    },
    {
      company: "HealthFirst Clinic",
      industry: "Healthcare",
      logo: "HF",
      testimonial: "Patient appointment scheduling is now fully automated. Our staff can focus on patient care instead of administrative tasks. Game-changer!",
      author: "Dr. Emily Rodriguez",
      role: "Practice Manager",
      rating: 5,
      results: "90% automated scheduling"
    }
  ];

  const companyLogos = [
    { name: "TechFlow", logo: "TF" },
    { name: "RetailMax", logo: "RM" },
    { name: "HealthFirst", logo: "HF" },
    { name: "FinanceApp", logo: "FA" },
    { name: "EduTech", logo: "ET" },
    { name: "AutoCorp", logo: "AC" },
    { name: "FoodChain", logo: "FC" },
    { name: "LogiMove", logo: "LM" }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Trusted by 50+ Companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From startups to enterprises, companies across industries trust AMO AI 
            to deliver AI solutions that drive real business results.
          </p>
        </div>

        {/* Company logos */}
        <div className="mb-16">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by companies across industries
          </p>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 opacity-60">
            {companyLogos.map((company, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-muted-foreground">
                    {company.logo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              {/* Company header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonial.logo}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.company}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.industry}
                  </Badge>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange text-orange" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-4">
                <Quote className="w-6 h-6 text-primary/20 absolute -top-2 -left-1" />
                <p className="text-muted-foreground leading-relaxed pl-4">
                  {testimonial.testimonial}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
                <Badge className="bg-success/10 text-success border-success/20">
                  {testimonial.results}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-orange/5 rounded-3xl p-8 lg:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                50+
              </div>
              <div className="text-lg font-medium text-foreground mb-1">
                Happy Clients
              </div>
              <div className="text-sm text-muted-foreground">
                Across 12+ industries
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
                4.9/5
              </div>
              <div className="text-lg font-medium text-foreground mb-1">
                Client Satisfaction
              </div>
              <div className="text-sm text-muted-foreground">
                Average rating
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-orange mb-2">
                100%
              </div>
              <div className="text-lg font-medium text-foreground mb-1">
                On-Time Delivery
              </div>
              <div className="text-sm text-muted-foreground">
                Never missed a deadline
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-success mb-2">
                293%
              </div>
              <div className="text-lg font-medium text-foreground mb-1">
                Average ROI
              </div>
              <div className="text-sm text-muted-foreground">
                Within 3 months
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};