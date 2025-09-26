import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const WhatsAppFAQ = () => {
  const faqs = [
    {
      question: "How fast can we go live with WhatsApp automation?",
      answer: "Basic automation can be live within 48 hours. Full implementation with advanced AI, cart recovery, and custom flows takes 2 weeks maximum. We guarantee this timeline or work for free until complete."
    },
    {
      question: "What's the real ROI we can expect?",
      answer: "Our clients see 200-2,100% ROI depending on industry and implementation scope. E-commerce averages 450% ROI, financial services see 600%+, and SaaS platforms often exceed 800%. We provide guaranteed minimum ROI projections during our strategy call."
    },
    {
      question: "Can we keep our existing phone number?",
      answer: "Yes, we can migrate your existing business number to WhatsApp Business API within 24 hours. There's no downtime and your customers won't notice the transition. We handle all technical requirements with Meta."
    },
    {
      question: "Will Meta ban our account for automation?",
      answer: "No, when done correctly. We follow all WhatsApp Business Policy guidelines and have helped 500+ businesses achieve compliance. Our automations are built within Meta's approved frameworks and we maintain green tick verification for all clients."
    },
    {
      question: "How does pricing work for WhatsApp messages?",
      answer: "WhatsApp charges per message: Marketing ($0.033), Utility ($0.021), and Service ($0.016). We don't mark up these costs - you pay Meta directly. Our service fee covers automation development, AI training, and ongoing optimization."
    },
    {
      question: "What integrations are supported?",
      answer: "We integrate with 200+ platforms including Shopify, WooCommerce, Salesforce, HubSpot, Stripe, PayPal, Google Analytics, Facebook Ads, and most CRMs. Custom integrations via API are included in Enterprise packages."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to the most common questions about WhatsApp automation implementation.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-muted rounded-lg px-6 data-[state=open]:bg-muted/20"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Additional Support */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary/10 to-green-500/10 rounded-2xl p-8 border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Book a free 30-minute strategy call to get personalized answers and see if WhatsApp automation is right for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Email us</div>
                  <div className="font-semibold text-foreground">info@amoai.co</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Call us</div>
                  <div className="font-semibold text-foreground">+1 416-800-3103</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Response time</div>
                  <div className="font-semibold text-green-500">&lt; 2 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};