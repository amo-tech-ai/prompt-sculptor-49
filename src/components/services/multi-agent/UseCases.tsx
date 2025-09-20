import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shirt, MapPin, Car } from 'lucide-react';

export const UseCases = () => {
  const useCases = [
    {
      icon: Shirt,
      title: "Fashion & Events",
      description: "Ticketing, sponsor management, designer scheduling, guest check-in.",
      result: "80% less manual work, real-time audience insights, smoother event operations.",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: MapPin,
      title: "Tourism & Travel", 
      description: "Bookings, multilingual WhatsApp concierge, guide scheduling, payments.",
      result: "Bookings processed in seconds, 3× tour capacity, 95% fewer missed inquiries.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Car,
      title: "Auto Marketplace",
      description: "Lead qualification, dealer matching, financing, inventory synchronization.",
      result: "10× faster buyer-to-dealer matching, 50% higher close rate, automated after-sales.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Real-World Applications
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Transform Workflows{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Across Industries
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-card/50 overflow-hidden relative"
              >
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${useCase.gradient} opacity-10 rounded-full blur-2xl`} />
                
                <CardContent className="p-8 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${useCase.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm font-medium text-primary">
                      <span className="font-bold">Result:</span> {useCase.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};