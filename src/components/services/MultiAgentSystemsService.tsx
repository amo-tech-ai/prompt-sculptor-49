import { ServiceHero } from './multi-agent/ServiceHero';
import { WhatItIs } from './multi-agent/WhatItIs';
import { UseCases } from './multi-agent/UseCases';
import { Journey } from './multi-agent/Journey';
import { Capabilities } from './multi-agent/Capabilities';
import { ROIMetrics } from './multi-agent/ROIMetrics';
import { PricingPackages } from './multi-agent/PricingPackages';
import { TrustProof } from './multi-agent/TrustProof';
import { FinalCTA } from './multi-agent/FinalCTA';

export const MultiAgentSystemsService = () => {
  return (
    <div className="min-h-screen">
      <ServiceHero />
      <WhatItIs />
      <UseCases />
      <Journey />
      <Capabilities />
      <ROIMetrics />
      <PricingPackages />
      <TrustProof />
      <FinalCTA />
    </div>
  );
};