import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const CrewAIFAQ = () => {
  const faqs = [
    {
      question: "How is CrewAI different from ChatGPT?",
      answer: "While ChatGPT is a single AI assistant for conversations, CrewAI orchestrates multiple specialized AI agents that work together like a team. Each agent has specific roles, tools, and expertise. They share context, coordinate tasks, and can execute complex multi-step workflows automatically. Think of it as having an entire AI workforce instead of just one AI assistant."
    },
    {
      question: "What if an agent fails?",
      answer: "CrewAI includes robust error handling and recovery mechanisms. If an agent encounters an issue, the system can retry the task, route it to a backup agent, or escalate to human oversight. We build redundancy into critical workflows and implement monitoring to catch and resolve issues quickly. Most failures are automatically recovered without impacting the overall process."
    },
    {
      question: "Do we need technical staff?",
      answer: "No technical expertise required from your team. We handle all the technical implementation, integration, and maintenance. Your team focuses on defining business requirements and approving workflows. We provide training on how to monitor performance and make adjustments, but no coding or technical skills are needed to operate your AI crews."
    },
    {
      question: "How quickly do we see ROI?",
      answer: "Most clients achieve positive ROI within 60 days. You'll see initial productivity gains within the first 2 weeks as we deploy pilot crews. Full ROI typically comes from the combination of cost savings (60-90% reduction in manual work) and productivity gains (10-50x faster processing). The exact timeline depends on your specific use cases and scale of implementation."
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about CrewAI implementation
            </p>
          </div>

          <div className="bg-background rounded-xl shadow-sm border border-border">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-semibold text-foreground">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Still Have Questions?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our team is ready to discuss your specific use case and show you exactly 
                how CrewAI can transform your operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrewAIFAQ;