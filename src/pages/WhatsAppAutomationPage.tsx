import { WhatsAppHero } from '@/components/sections/whatsapp/WhatsAppHero';
import { WhatsAppAdvantage } from '@/components/sections/whatsapp/WhatsAppAdvantage';
import { WhatsAppFeatures } from '@/components/sections/whatsapp/WhatsAppFeatures';
import { WhatsAppUseCases } from '@/components/sections/whatsapp/WhatsAppUseCases';
import { WhatsAppROI } from '@/components/sections/whatsapp/WhatsAppROI';
import { WhatsAppProcess } from '@/components/sections/whatsapp/WhatsAppProcess';
import { WhatsAppPricing } from '@/components/sections/whatsapp/WhatsAppPricing';
import { WhatsAppWhyUs } from '@/components/sections/whatsapp/WhatsAppWhyUs';
import { WhatsAppFAQ } from '@/components/sections/whatsapp/WhatsAppFAQ';
import { WhatsAppFinalCTA } from '@/components/sections/whatsapp/WhatsAppFinalCTA';
import { WhatsAppFloat } from '@/components/sections/WhatsAppFloat';

export const WhatsAppAutomationPage = () => {
  return (
    <div className="min-h-screen">
      <WhatsAppHero />
      <WhatsAppAdvantage />
      <WhatsAppFeatures />
      <WhatsAppUseCases />
      <WhatsAppROI />
      <WhatsAppProcess />
      <WhatsAppPricing />
      <WhatsAppWhyUs />
      <WhatsAppFAQ />
      <WhatsAppFinalCTA />
      <WhatsAppFloat />
    </div>
  );
};