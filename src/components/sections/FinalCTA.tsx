import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MessageSquare, Calendar, FolderOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FinalCTA = () => {
  return (
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <Badge variant="outline" className="mb-6 px-4 py-2 border-background/20 text-background">
            Ready to Transform?
          </Badge>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-background">
            Ready to Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange/70">
              Something Extraordinary?
            </span>
          </h2>
          
          <p className="text-lg text-background/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join the companies already transforming their business with AI. 
            From idea to production in just 8 weeks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 font-semibold px-8 py-6 text-lg shadow-lg"
              asChild
            >
              <Link to="/contact" className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Schedule a 30-min Call</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 font-semibold px-8 py-6 text-lg"
              asChild
            >
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Message Us on WhatsApp</span>
              </a>
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              className="hover:bg-accent/10 font-semibold px-8 py-6 text-lg"
              asChild
            >
              <Link to="/projects" className="flex items-center space-x-2">
                <FolderOpen className="h-5 w-5" />
                <span>View Case Studies</span>
              </Link>
            </Button>
          </div>

          {/* Success Stats */}
            <div className="bg-background/10 backdrop-blur-sm border border-background/20 rounded-2xl px-8 py-6 max-w-2xl mx-auto">
              <p className="text-lg font-semibold text-background">
                50+ live apps, $4.3M monthly revenue delivered.
              </p>
              <p className="text-sm text-background/60 mt-2">
                Ready to be our next success story?
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};