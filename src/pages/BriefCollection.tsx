import { CopilotKit } from "@copilotkit/react-core";
import { BriefStateProvider } from "@/lib/copilot/global-state";
import { BriefCollectionChat } from "@/components/copilot/BriefCollectionChat";
import { ProgressIndicator } from "@/components/copilot/ProgressIndicator";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function BriefCollectionPage() {
  // Simple CopilotKit configuration
  const copilotKitConfig = {
    publicApiKey: import.meta.env.VITE_COPILOTKIT_PUBLIC_API_KEY,
    runtimeUrl: "http://localhost:8001/api/copilotkit",
  };

  return (
    <CopilotKit 
      publicApiKey={copilotKitConfig.publicApiKey}
      runtimeUrl={copilotKitConfig.runtimeUrl}
    >
      <BriefStateProvider>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
          {/* Header Section */}
          <div className="bg-white border-b shadow-sm">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <Link to="/">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                  </Button>
                </Link>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Est. 15-20 min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    <span>AI-Guided Process</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-5xl mx-auto">
              {/* Hero Section */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <CheckCircle className="h-4 w-4" />
                  <span>AI-Powered Discovery Process</span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                  Create Your Project Brief
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Our AI consultant will guide you through a comprehensive discovery process
                  to understand your needs and deliver a tailored solution
                </p>
              </div>
              
              {/* Progress Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <ProgressIndicator />
                
                {/* Chat Interface */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-5"></div>
                  
                  <div className="relative h-[650px] bg-white">
                    <BriefCollectionChat className="h-full" />
                  </div>
                </div>

                {/* Bottom Help Section */}
                <div className="bg-gray-50 border-t px-6 py-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-500">Need help?</span>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">
                        Contact Support
                      </button>
                    </div>
                    <div className="text-gray-500">
                      Your data is secure and confidential
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600">293%</div>
                  <div className="text-sm text-gray-600">Average ROI</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-green-600">2-8 weeks</div>
                  <div className="text-sm text-gray-600">Delivery Time</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-purple-600">90%</div>
                  <div className="text-sm text-gray-600">Automation Level</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BriefStateProvider>
    </CopilotKit>
  );
}