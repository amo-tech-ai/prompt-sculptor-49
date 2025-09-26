import { Helmet } from "react-helmet-async";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactOptions } from "@/components/sections/ContactOptions";
import { ContactMap } from "@/components/sections/ContactMap";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { WhatsAppFloat } from "@/components/sections/WhatsAppFloat";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch | AMO AI Agency</title>
        <meta 
          name="description" 
          content="Contact AMO AI Agency. Reach out via email, phone, or WhatsApp to discuss your AI project. Book a consultation and let's build something extraordinary together." 
        />
        <meta name="keywords" content="contact AMO AI, AI consultation, AI project inquiry, WhatsApp contact, AI agency contact" />
        <link rel="canonical" href="https://amoai.co/contact" />
      </Helmet>
      
      <div className="min-h-screen">
        <ContactHero />
        <ContactOptions />
        <ContactMap />
        <ContactCTA />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default ContactPage;