import React from 'react';

export const ContactHero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Get in Touch with Us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We'd love to hear from you. Reach out and let's build something extraordinary together.
          </p>
        </div>
      </div>
    </section>
  );
};