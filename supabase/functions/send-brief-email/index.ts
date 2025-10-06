import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailBriefRequest {
  briefId: string;
  recipientEmail: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { briefId, recipientEmail }: EmailBriefRequest = await req.json();

    console.log("Sending brief email:", { briefId, recipientEmail });

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch brief data
    const { data: brief, error: briefError } = await supabase
      .from("briefs")
      .select("*")
      .eq("id", briefId)
      .single();

    if (briefError || !brief) {
      console.error("Error fetching brief:", briefError);
      throw new Error("Brief not found");
    }

    // Generate HTML email content
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #ff7a00; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; font-size: 28px; }
    .content { background: #fff; padding: 30px; border: 1px solid #e5e5e5; border-top: none; }
    .section { margin-bottom: 30px; }
    .section-title { background: #ff7a00; color: white; padding: 10px 15px; margin: 0 0 15px 0; border-radius: 4px; font-size: 16px; font-weight: bold; }
    .field { margin-bottom: 15px; }
    .field-label { font-weight: bold; color: #666; font-size: 13px; margin-bottom: 5px; }
    .field-value { color: #333; }
    ul { margin: 5px 0; padding-left: 20px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Project Brief</h1>
    <p style="margin: 5px 0 0 0; opacity: 0.9;">${brief.project_name}</p>
  </div>
  
  <div class="content">
    <div class="section">
      <h2 class="section-title">PROJECT VISION</h2>
      <div class="field">
        <div class="field-label">Project Name</div>
        <div class="field-value">${brief.project_name}</div>
      </div>
      <div class="field">
        <div class="field-label">Description</div>
        <div class="field-value">${brief.project_description}</div>
      </div>
      <div class="field">
        <div class="field-label">Problem Statement</div>
        <div class="field-value">${brief.problem_statement}</div>
      </div>
      <div class="field">
        <div class="field-label">Goals</div>
        <ul>${brief.project_goals.map((goal: string) => `<li>${goal}</li>`).join("")}</ul>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">TARGET AUDIENCE</h2>
      <div class="field">
        <div class="field-label">Primary Audience</div>
        <div class="field-value">${brief.primary_audience}</div>
      </div>
      ${brief.audience_age ? `
      <div class="field">
        <div class="field-label">Age Range</div>
        <div class="field-value">${brief.audience_age}</div>
      </div>` : ""}
      ${brief.audience_location ? `
      <div class="field">
        <div class="field-label">Location</div>
        <div class="field-value">${brief.audience_location}</div>
      </div>` : ""}
      <div class="field">
        <div class="field-label">Pain Points</div>
        <ul>${brief.pain_points.map((point: string) => `<li>${point}</li>`).join("")}</ul>
      </div>
      <div class="field">
        <div class="field-label">Desired Outcomes</div>
        <ul>${brief.desired_outcomes.map((outcome: string) => `<li>${outcome}</li>`).join("")}</ul>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">FEATURES</h2>
      <div class="field">
        <div class="field-label">Must-Have Features</div>
        <ul>${brief.must_have_features.map((feature: string) => `<li>${feature}</li>`).join("")}</ul>
      </div>
      ${brief.nice_to_have_features?.length > 0 ? `
      <div class="field">
        <div class="field-label">Nice-to-Have Features</div>
        <ul>${brief.nice_to_have_features.map((feature: string) => `<li>${feature}</li>`).join("")}</ul>
      </div>` : ""}
      ${brief.integrations?.length > 0 ? `
      <div class="field">
        <div class="field-label">Integrations</div>
        <ul>${brief.integrations.map((integration: string) => `<li>${integration}</li>`).join("")}</ul>
      </div>` : ""}
      ${brief.special_requirements ? `
      <div class="field">
        <div class="field-label">Special Requirements</div>
        <div class="field-value">${brief.special_requirements}</div>
      </div>` : ""}
    </div>

    <div class="section">
      <h2 class="section-title">DESIGN & TIMELINE</h2>
      <div class="field">
        <div class="field-label">Design Style</div>
        <div class="field-value">${brief.style}</div>
      </div>
      ${brief.color_preferences ? `
      <div class="field">
        <div class="field-label">Color Preferences</div>
        <div class="field-value">${brief.color_preferences}</div>
      </div>` : ""}
      ${brief.inspiration_urls?.length > 0 ? `
      <div class="field">
        <div class="field-label">Inspiration URLs</div>
        <ul>${brief.inspiration_urls.map((url: string) => `<li><a href="${url}">${url}</a></li>`).join("")}</ul>
      </div>` : ""}
      ${brief.brand_guidelines ? `
      <div class="field">
        <div class="field-label">Brand Guidelines</div>
        <div class="field-value">${brief.brand_guidelines}</div>
      </div>` : ""}
      <div class="field">
        <div class="field-label">Budget</div>
        <div class="field-value">${brief.budget}</div>
      </div>
      <div class="field">
        <div class="field-label">Priority</div>
        <div class="field-value">${brief.priority}</div>
      </div>
      ${brief.desired_launch_date ? `
      <div class="field">
        <div class="field-label">Desired Launch Date</div>
        <div class="field-value">${brief.desired_launch_date}</div>
      </div>` : ""}
    </div>
  </div>

  <div class="footer">
    <p><strong>AMO AI Agency</strong></p>
    <p>hello@amoai.agency</p>
    <p style="margin-top: 10px; font-size: 11px; color: #999;">Brief ID: ${briefId}</p>
  </div>
</body>
</html>
    `;

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: "AMO AI Agency <onboarding@resend.dev>",
      to: [recipientEmail],
      subject: `Your Project Brief - ${brief.project_name}`,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, data: emailResponse }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-brief-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
