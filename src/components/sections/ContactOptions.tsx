import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactOptions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Handle form submission logic here
    console.log('Form submitted:', formData);
    
    setIsSubmitted(true);
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you shortly."
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in learning more about AMO AI's services.";
    const whatsappUrl = `https://wa.me/14168003103?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get in touch through any of these channels. We're here to help bring your AI vision to life.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a 
                      href="mailto:info@amoai.co" 
                      className="text-primary hover:underline"
                    >
                      info@amoai.co
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a 
                      href="tel:+14168003103" 
                      className="text-primary hover:underline"
                    >
                      +1 416-800-3103
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">WhatsApp Chat</h3>
                    <Button 
                      onClick={handleWhatsAppClick}
                      variant="outline"
                      className="mt-2 bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
                    >
                      Chat with us on WhatsApp
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <Card className="p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Thanks for reaching out!
                  </h3>
                  <p className="text-muted-foreground">
                    We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Send us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@company.com"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-sm font-medium text-foreground">
                        Company
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your company name (optional)"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project or how we can help..."
                        required
                        className="mt-2 min-h-[120px]"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full"
                      size="lg"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};