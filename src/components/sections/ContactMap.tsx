import React from 'react';
import { MapPin } from 'lucide-react';

export const ContactMap = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visit Our Office
          </h2>
          <p className="text-muted-foreground text-lg">
            We'd love to meet you in person. Drop by our office for a consultation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            {/* Map Placeholder - Replace with actual map integration */}
            <div className="relative h-96 bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  AMO AI Agency
                </h3>
                <p className="text-muted-foreground">
                  Toronto, Ontario, Canada
                </p>
                <p className="text-sm text-muted-foreground mt-4 max-w-md">
                  Interactive map integration available upon request. 
                  Contact us for our exact office location and meeting arrangements.
                </p>
              </div>
            </div>
            
            <div className="p-6 bg-card">
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Visit us at our office for personalized consultations and project discussions.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};