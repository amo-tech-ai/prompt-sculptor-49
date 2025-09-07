import { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SpecialService = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const services = [
    {
      id: "01",
      title: "Web Design",
      description: "Welcome to our website! We are a professional and reliable printing company that offers a wide range of printing services to meet your needs."
    },
    {
      id: "02", 
      title: "UI/UX Design",
      description: "Welcome to our website! We are a professional and reliable printing company that offers a wide range of printing services to meet your needs."
    },
    {
      id: "03",
      title: "Motion Designer", 
      description: "Welcome to our website! We are a professional and reliable printing company that offers a wide range of printing services to meet your needs."
    },
    {
      id: "04",
      title: "Adobe Illustrator",
      description: "Welcome to our website! We are a professional and reliable printing company that offers a wide range of printing services to meet your needs."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-orange/20 to-transparent rounded-full blur-3xl opacity-30" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-accent/20 to-transparent rounded-full blur-3xl opacity-20" aria-hidden="true" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our{' '}
            <span className="text-orange">Special</span>{' '}
            Service
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our services help you create digital products and solve your problems using technology and analytics. Our service sits from a high appeal because it has a beautiful color combination and a minimalist concept.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {services.map((service, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <div 
                key={service.id}
                className="border-b border-border last:border-b-0"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between py-8 text-left group hover:text-orange transition-colors focus:outline-none focus:text-orange"
                  aria-expanded={isOpen}
                  aria-controls={`service-content-${index}`}
                >
                  <div className="flex items-center gap-6 flex-1">
                    <span className="text-2xl md:text-3xl font-light text-muted-foreground">
                      {service.id}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-orange transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <ChevronDown 
                      className={`w-6 h-6 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                <div 
                  id={`service-content-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-40 pb-8' : 'max-h-0'
                  }`}
                >
                  <div className="pl-20 pr-12">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* Service-specific content can be added here */}
                    {index === 3 && (
                      <div className="flex justify-end">
                        <div className="w-20 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-80" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};