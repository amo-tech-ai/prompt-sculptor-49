import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CheckCircle, Download, Mail, Home } from "lucide-react";
import { BreezeButton } from "@/components/wizard/BreezeButton";
import { BreezeCard } from "@/components/wizard/BreezeCard";
import { supabase } from "@/integrations/supabase/client";
import { generateBriefPDF } from "@/lib/pdfGenerator";
import { WizardStateData, BriefWizardStage } from "@/types/wizard";
import { toast } from "sonner";

export default function BriefSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const briefId = searchParams.get("id");
  const [briefData, setBriefData] = useState<WizardStateData | null>(null);
  const [userEmail, setUserEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isEmailSending, setIsEmailSending] = useState(false);

  useEffect(() => {
    // Clear wizard state from localStorage on success
    localStorage.removeItem("brief-wizard-state");

    // Fetch brief data
    const fetchBriefData = async () => {
      if (!briefId) {
        setIsLoading(false);
        return;
      }

      try {
        const { data: brief, error } = await supabase
          .from("briefs")
          .select("*")
          .eq("id", briefId)
          .single();

        if (error) throw error;

        if (brief) {
          // Map database fields to WizardStateData structure
          const wizardData: WizardStateData = {
            currentStage: BriefWizardStage.Review,
            projectVision: {
              projectName: brief.project_name,
              projectDescription: brief.project_description,
              problemStatement: brief.problem_statement,
              goals: brief.project_goals,
            },
            targetAudience: {
              primaryAudience: brief.primary_audience,
              audienceAge: brief.audience_age || undefined,
              audienceLocation: brief.audience_location || undefined,
              painPoints: brief.pain_points,
              desiredOutcomes: brief.desired_outcomes,
            },
            features: {
              mustHaveFeatures: brief.must_have_features,
              niceToHaveFeatures: brief.nice_to_have_features || [],
              integrations: brief.integrations || [],
              specialRequirements: brief.special_requirements || undefined,
            },
            designPreferences: {
              style: brief.style as any,
              colorPreferences: brief.color_preferences || undefined,
              inspirationUrls: brief.inspiration_urls || [],
              brandGuidelines: brief.brand_guidelines || undefined,
            },
            timeline: {
              desiredLaunchDate: brief.desired_launch_date || undefined,
              budget: brief.budget as any,
              priority: brief.priority as any,
            },
          };

          setBriefData(wizardData);
          setUserEmail(brief.user_email || "");
        }
      } catch (error) {
        console.error("Error fetching brief:", error);
        toast.error("Failed to load brief data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBriefData();
  }, [briefId]);

  const handleDownloadPDF = () => {
    if (!briefData) {
      toast.error("Brief data not available");
      return;
    }

    try {
      generateBriefPDF(briefData, briefId || undefined);
      toast.success("PDF downloaded successfully!");
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Failed to generate PDF");
    }
  };

  const handleEmailCopy = async () => {
    if (!briefId || !userEmail) {
      toast.error("Brief ID or email not available");
      return;
    }

    setIsEmailSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-brief-email", {
        body: { briefId, recipientEmail: userEmail },
      });

      if (error) throw error;

      toast.success("Brief sent to your email!");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email");
    } finally {
      setIsEmailSending(false);
    }
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
                  disabled={isLoading || !briefData}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </BreezeButton>
                <BreezeButton
                  variant="outline"
                  onClick={handleEmailCopy}
                  className="w-full"
                  disabled={isLoading || !briefData || !userEmail}
                  loading={isEmailSending}
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