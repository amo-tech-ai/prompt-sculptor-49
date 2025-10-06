import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { WizardStateData } from "@/types/wizard";
import { validateCompleteWizard } from "@/lib/validation";

export function useSubmitBrief() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitBrief = async (data: WizardStateData, userEmail?: string) => {
    setIsSubmitting(true);
    
    try {
      // Validate complete wizard data
      const validation = validateCompleteWizard(data, userEmail || "");
      if (!validation.isValid) {
        const errorMessages = validation.errors.map(e => e.message).join(", ");
        toast({
          title: "Validation failed",
          description: errorMessages,
          variant: "destructive",
        });
        return { success: false, error: "Validation failed" };
      }
      
      const { data: brief, error } = await supabase
        .from("briefs")
        .insert({
          // Project Vision
          project_name: data.projectVision.projectName,
          project_description: data.projectVision.projectDescription,
          problem_statement: data.projectVision.problemStatement,
          project_goals: data.projectVision.goals,
          
          // Target Audience
          primary_audience: data.targetAudience.primaryAudience,
          audience_age: data.targetAudience.audienceAge || null,
          audience_location: data.targetAudience.audienceLocation || null,
          pain_points: data.targetAudience.painPoints,
          desired_outcomes: data.targetAudience.desiredOutcomes,
          
          // Features
          must_have_features: data.features.mustHaveFeatures,
          nice_to_have_features: data.features.niceToHaveFeatures,
          integrations: data.features.integrations,
          special_requirements: data.features.specialRequirements || null,
          
          // Design Preferences
          style: data.designPreferences.style,
          color_preferences: data.designPreferences.colorPreferences || null,
          inspiration_urls: data.designPreferences.inspirationUrls,
          brand_guidelines: data.designPreferences.brandGuidelines || null,
          
          // Timeline & Budget
          desired_launch_date: data.timeline.desiredLaunchDate || null,
          budget: data.timeline.budget,
          priority: data.timeline.priority,
          
          // Metadata
          user_email: userEmail || null,
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Brief submitted successfully!",
        description: "We've received your project brief and will be in touch soon.",
      });

      return { success: true, briefId: brief.id };
    } catch (error: any) {
      console.error("Error submitting brief:", error);
      
      // Provide more specific error messages
      let errorMessage = "Failed to submit brief. Please try again.";
      
      if (error.message?.includes("duplicate key")) {
        errorMessage = "A brief with this information already exists.";
      } else if (error.message?.includes("network")) {
        errorMessage = "Network error. Please check your connection and try again.";
      } else if (error.code === "PGRST301") {
        errorMessage = "Database error. Please contact support.";
      }
      
      toast({
        title: "Submission failed",
        description: errorMessage,
        variant: "destructive",
      });
      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitBrief,
    isSubmitting,
  };
}