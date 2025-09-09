import { CopilotKit } from "@copilotkit/react-core";
import { BriefStateProvider } from "@/lib/copilot/global-state";
import { BriefCollectionChat } from "@/components/copilot/BriefCollectionChat";
import { ProgressIndicator } from "@/components/copilot/ProgressIndicator";

export default function BriefCollectionPage() {
  // Using CopilotKit Cloud for immediate functionality
  const copilotKitApiKey = import.meta.env.VITE_COPILOTKIT_PUBLIC_API_KEY;
  
  // Fallback to self-hosted if no API key
  const runtimeUrl = !copilotKitApiKey 
    ? "http://localhost:8001/api/copilotkit" 
    : undefined;

  return (
    <CopilotKit 
      publicApiKey={copilotKitApiKey}
      runtimeUrl={runtimeUrl}
    >
      <BriefStateProvider>
        <div className="min-h-screen bg-gray-50">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  AI-Powered Project Brief Collection
                </h1>
                <p className="text-gray-600">
                  Let our AI consultant help you create a comprehensive project brief
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <ProgressIndicator />
                <div className="h-[600px]">
                  <BriefCollectionChat className="h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BriefStateProvider>
    </CopilotKit>
  );
}
