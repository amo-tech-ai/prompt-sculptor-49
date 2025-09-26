import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

export const ContactCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and explore how AI can transform your business. 
              Book a free consultation call with our team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-3"
                onClick={() => window.open('https://calendly.com/amoai', '_blank')}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book a Consultation
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-3"
                onClick={() => window.location.href = '/brief'}
              >
                Start Your Brief
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              Free 30-minute consultation • No commitment required • Expert AI guidance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};