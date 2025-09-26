import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export const CopilotKitFAQ = () => {
  const faqs = [
    {
      question: "How fast will we see results?",
      answer: "A working prototype is usually live in 2 weeks. Most clients reach ROI positive within 30–60 days. The initial implementation focuses on high-impact, low-complexity features to demonstrate value quickly."
    },
    {
      question: "Can CopilotKit integrate with our existing systems?",
      answer: "Yes. We connect to CRMs, ERPs, databases, and APIs. If it has an API, CopilotKit copilots can use it. Our team handles all the technical integration work, ensuring seamless connectivity with your current tech stack."
    },
    {
      question: "What's the typical ROI?",
      answer: "On average, clients achieve 293% ROI with 60% fewer support tickets and 70% faster workflows. ROI varies by industry and implementation scope, but most clients see positive returns within the first quarter."
    },
    {
      question: "Do we need technical expertise to manage the copilots?",
      answer: "Not for day-to-day operations. We provide intuitive dashboards and controls for non-technical users. However, we also include comprehensive documentation and training for your technical team to make customizations as needed."
    },
    {
      question: "How do you ensure the AI provides accurate responses?",
      answer: "We implement multiple safety layers including context validation, confidence scoring, and human-in-the-loop controls for critical operations. The system learns from your specific use cases and improves accuracy over time."
    },
    {
      question: "What happens if we want to scale or modify the copilots?",
      answer: "Our architecture is designed for scalability. We can easily add new capabilities, integrate additional systems, or expand to new use cases. All modifications are managed through our streamlined change process with minimal downtime."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Questions & Answers
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions about CopilotKit implementation and results
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground">
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
        </div>
      </div>
    </section>
  );
};