import jsPDF from "jspdf";
import { WizardStateData } from "@/types/wizard";

export function generateBriefPDF(data: WizardStateData, briefId?: string) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const maxWidth = pageWidth - 2 * margin;
  let yPosition = 20;

  // Helper function to add text with wrapping
  const addText = (text: string, fontSize = 10, isBold = false) => {
    doc.setFontSize(fontSize);
    doc.setFont("helvetica", isBold ? "bold" : "normal");
    const lines = doc.splitTextToSize(text, maxWidth);
    
    lines.forEach((line: string) => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }
      doc.text(line, margin, yPosition);
      yPosition += fontSize * 0.5;
    });
    yPosition += 3;
  };

  const addSection = (title: string) => {
    yPosition += 5;
    doc.setFillColor(255, 122, 0);
    doc.rect(margin, yPosition - 5, maxWidth, 8, "F");
    doc.setTextColor(255, 255, 255);
    addText(title, 12, true);
    doc.setTextColor(0, 0, 0);
    yPosition += 2;
  };

  // Header
  doc.setFillColor(255, 122, 0);
  doc.rect(0, 0, pageWidth, 40, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.text("Project Brief", margin, 25);
  doc.setFontSize(10);
  doc.text(new Date().toLocaleDateString(), pageWidth - margin, 25, { align: "right" });
  if (briefId) {
    doc.setFontSize(8);
    doc.text(`Brief ID: ${briefId}`, pageWidth - margin, 32, { align: "right" });
  }
  doc.setTextColor(0, 0, 0);
  yPosition = 50;

  // Project Vision
  addSection("PROJECT VISION");
  addText(`Project Name: ${data.projectVision.projectName}`, 11, true);
  addText("Description:");
  addText(data.projectVision.projectDescription);
  addText("Problem Statement:");
  addText(data.projectVision.problemStatement);
  addText("Goals:", 10, true);
  data.projectVision.goals.forEach(goal => addText(`• ${goal}`));

  // Target Audience
  addSection("TARGET AUDIENCE");
  addText(`Primary Audience: ${data.targetAudience.primaryAudience}`, 10, true);
  if (data.targetAudience.audienceAge) {
    addText(`Age Range: ${data.targetAudience.audienceAge}`);
  }
  if (data.targetAudience.audienceLocation) {
    addText(`Location: ${data.targetAudience.audienceLocation}`);
  }
  addText("Pain Points:", 10, true);
  data.targetAudience.painPoints.forEach(point => addText(`• ${point}`));
  addText("Desired Outcomes:", 10, true);
  data.targetAudience.desiredOutcomes.forEach(outcome => addText(`• ${outcome}`));

  // Features
  addSection("FEATURES");
  addText("Must-Have Features:", 10, true);
  data.features.mustHaveFeatures.forEach(feature => addText(`• ${feature}`));
  if (data.features.niceToHaveFeatures.length > 0) {
    addText("Nice-to-Have Features:", 10, true);
    data.features.niceToHaveFeatures.forEach(feature => addText(`• ${feature}`));
  }
  if (data.features.integrations.length > 0) {
    addText("Integrations:", 10, true);
    data.features.integrations.forEach(integration => addText(`• ${integration}`));
  }
  if (data.features.specialRequirements) {
    addText("Special Requirements:", 10, true);
    addText(data.features.specialRequirements);
  }

  // Design & Timeline
  addSection("DESIGN & TIMELINE");
  addText(`Design Style: ${data.designPreferences.style}`, 10, true);
  if (data.designPreferences.colorPreferences) {
    addText(`Color Preferences: ${data.designPreferences.colorPreferences}`);
  }
  if (data.designPreferences.inspirationUrls.length > 0) {
    addText("Inspiration URLs:", 10, true);
    data.designPreferences.inspirationUrls.forEach(url => addText(`• ${url}`));
  }
  if (data.designPreferences.brandGuidelines) {
    addText("Brand Guidelines:", 10, true);
    addText(data.designPreferences.brandGuidelines);
  }
  addText(`Budget: ${data.timeline.budget}`, 10, true);
  addText(`Priority: ${data.timeline.priority}`, 10, true);
  if (data.timeline.desiredLaunchDate) {
    addText(`Desired Launch Date: ${data.timeline.desiredLaunchDate}`);
  }

  // Footer
  doc.setFontSize(8);
  doc.setTextColor(128, 128, 128);
  const footerY = doc.internal.pageSize.getHeight() - 10;
  doc.text("AMO AI Agency | hello@amoai.agency", pageWidth / 2, footerY, { align: "center" });

  // Save
  const fileName = `${data.projectVision.projectName.replace(/\s+/g, "-")}-brief.pdf`;
  doc.save(fileName);
}
