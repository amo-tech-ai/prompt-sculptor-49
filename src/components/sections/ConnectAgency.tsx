import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export const ConnectAgency = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-orange/10 to-transparent rounded-full blur-3xl opacity-50" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl opacity-30" aria-hidden="true" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Play button with decorative circle */}
          <div className="relative inline-flex items-center justify-center mb-8">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-orange/30 w-32 h-32 animate-spin" style={{ animationDuration: '20s' }} />
            <Button 
              size="lg"
              className="rounded-full w-16 h-16 bg-orange hover:bg-orange/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Play introduction video"
            >
              <Play className="w-6 h-6 ml-1" />
            </Button>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Connect With Our{' '}
            <span className="text-orange">Certified Agency</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Ready to transform your business with AI? Let's start your automation journey together.
          </p>

          {/* CTA Button */}
          <Button 
            size="lg"
            className="bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-full text-lg font-semibold group shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Additional visual elements */}
        <div className="mt-16 flex justify-center">
          <div className="relative">
            {/* Decorative 3D element placeholder */}
            <div className="w-24 h-24 bg-gradient-to-br from-orange/20 to-purple/20 rounded-2xl transform rotate-12 backdrop-blur-sm border border-white/20" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue/20 to-cyan/20 rounded-xl transform -rotate-12 backdrop-blur-sm border border-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
};