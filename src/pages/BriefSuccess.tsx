import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CheckCircle, Download, Mail, Home } from "lucide-react";
import { BreezeButton } from "@/components/wizard/BreezeButton";
import { BreezeCard } from "@/components/wizard/BreezeCard";

export default function BriefSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const briefId = searchParams.get("id");

  useEffect(() => {
    // Clear wizard state from localStorage on success
    localStorage.removeItem("brief-wizard-state");
  }, []);

  const handleDownloadPDF = () => {
    // TODO: Implement PDF generation
    console.log("Download PDF for brief:", briefId);
  };

  const handleEmailCopy = () => {
    // TODO: Implement email functionality
    console.log("Send email for brief:", briefId);
  };

  return (
    <div className="min-h-screen bg-breeze-bg flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-breeze-orange/10 mb-6 animate-in zoom-in duration-500">
            <CheckCircle className="w-12 h-12 text-breeze-orange" />
          </div>
          
          <h1 className="text-4xl font-bold text-breeze-text mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Brief Submitted Successfully!
          </h1>
          
          <p className="text-lg text-breeze-text-muted animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Thank you for taking the time to share your project vision with us.
          </p>
        </div>

        <BreezeCard className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <div className="space-y-6">
            <div className="text-center pb-6 border-b border-breeze-border">
              <h2 className="text-xl font-semibold text-breeze-text mb-2">
                What Happens Next?
              </h2>
              <p className="text-breeze-text-muted">
                Our team will review your brief and get back to you within 24-48 hours
                with a detailed proposal tailored to your needs.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-breeze-bg-alt">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-breeze-orange/10 flex items-center justify-center">
                  <span className="text-breeze-orange font-semibold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-breeze-text mb-1">Review & Analysis</h3>
                  <p className="text-sm text-breeze-text-muted">
                    We'll carefully review your requirements and project goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-breeze-bg-alt">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-breeze-orange/10 flex items-center justify-center">
                  <span className="text-breeze-orange font-semibold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-breeze-text mb-1">Custom Proposal</h3>
                  <p className="text-sm text-breeze-text-muted">
                    We'll create a tailored proposal with timeline and pricing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-breeze-bg-alt">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-breeze-orange/10 flex items-center justify-center">
                  <span className="text-breeze-orange font-semibold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-breeze-text mb-1">Discovery Call</h3>
                  <p className="text-sm text-breeze-text-muted">
                    We'll schedule a call to discuss your project in detail.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-breeze-border">
              <h3 className="font-semibold text-breeze-text mb-4 text-center">
                Keep a Copy for Your Records
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <BreezeButton
                  variant="outline"
                  onClick={handleDownloadPDF}
                  className="w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </BreezeButton>
                <BreezeButton
                  variant="outline"
                  onClick={handleEmailCopy}
                  className="w-full"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Copy
                </BreezeButton>
              </div>
            </div>

            <div className="pt-6">
              <BreezeButton
                onClick={() => navigate("/")}
                className="w-full"
              >
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </BreezeButton>
            </div>
          </div>
        </BreezeCard>

        <div className="mt-8 text-center text-sm text-breeze-text-muted">
          <p>
            Questions? Email us at{" "}
            <a
              href="mailto:hello@amoai.agency"
              className="text-breeze-orange hover:underline"
            >
              hello@amoai.agency
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}