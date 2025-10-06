import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - AMO AI</title>
        <meta name="description" content="AMO AI privacy policy and data protection information" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 6, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                AMO AI ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website amoai.agency or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Personal Information</h3>
              <p className="text-muted-foreground mb-4">
                We may collect personal information that you provide to us, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company information and job title</li>
                <li>Project details and requirements submitted through our brief wizard</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-muted-foreground mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>IP address and browser information</li>
                <li>Device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process and fulfill your service requests</li>
                <li>Send you information about our services and updates</li>
                <li>Improve our website and services</li>
                <li>Analyze usage patterns and optimize user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to improve your experience on our website. Cookies are small data files stored on your device. You can control cookie preferences through your browser settings.
              </p>
              <p className="text-muted-foreground mb-4">
                Types of cookies we use:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li><strong>Service Providers:</strong> Third-party companies that help us operate our website and provide services (e.g., email delivery, hosting)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights (GDPR)</h2>
              <p className="text-muted-foreground mb-4">
                If you are in the European Economic Area (EEA), you have the following rights:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Erasure:</strong> Request deletion of your data</li>
                <li><strong>Restriction:</strong> Request limitation of processing</li>
                <li><strong>Data Portability:</strong> Request transfer of your data</li>
                <li><strong>Object:</strong> Object to processing of your data</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                To exercise these rights, contact us at hello@amoai.agency
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Children's Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. International Data Transfers</h2>
              <p className="text-muted-foreground mb-4">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Changes to This Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-foreground mb-2"><strong>AMO AI Digital Agency</strong></p>
                <p className="text-muted-foreground">Email: hello@amoai.agency</p>
                <p className="text-muted-foreground">Phone: +1 (416) 555-0123</p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link 
              to="/" 
              className="text-primary hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
