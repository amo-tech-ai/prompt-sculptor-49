import { services } from '@/data/services';
import { ServiceCard } from '@/components/ui/ServiceCard';

export const Services = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gel bubbles */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-background to-background" />
      
      {/* Decorative gel bubbles */}
      <div 
        className="absolute top-0 left-0 w-80 h-80 bg-orange/20 rounded-full blur-3xl opacity-30"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our AI-Powered{' '}
            <span className="text-orange">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivered in weeks, not months — using proven tools and frameworks
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};