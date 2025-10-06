import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - AMO AI</title>
        <meta name="description" content="AMO AI terms of service and conditions of use" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 6, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing or using the AMO AI website (amoai.agency) and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
              <p className="text-muted-foreground mb-4">
                AMO AI provides AI-powered automation and digital transformation services, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>AI automation consulting and implementation</li>
                <li>Custom software development</li>
                <li>WhatsApp automation solutions</li>
                <li>Multi-agent system development</li>
                <li>Process optimization and digital transformation</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Service details, scope, and deliverables will be specified in individual project agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Use License</h2>
              <p className="text-muted-foreground mb-4">
                Permission is granted to temporarily access the materials on AMO AI's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose without written consent</li>
                <li>Attempt to reverse engineer any software on the website</li>
                <li>Remove any copyright or proprietary notations</li>
                <li>Transfer the materials to another person or mirror on another server</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Project Engagement Terms</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">4.1 Proposals and Quotes</h3>
              <p className="text-muted-foreground mb-4">
                All proposals and quotes are valid for 30 days from the date of issue unless otherwise specified. Prices are subject to change based on project scope modifications.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">4.2 Payment Terms</h3>
              <p className="text-muted-foreground mb-4">
                Payment terms will be specified in individual project agreements. Typically:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>50% upfront deposit required to commence work</li>
                <li>Remaining balance due upon project completion</li>
                <li>Milestone-based payments for larger projects</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">4.3 Project Timeline</h3>
              <p className="text-muted-foreground mb-4">
                Timelines are estimates and may be subject to change based on client feedback, scope changes, or unforeseen circumstances. We will communicate any significant delays promptly.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">4.4 Client Responsibilities</h3>
              <p className="text-muted-foreground mb-4">
                Clients are responsible for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Providing necessary access, credentials, and information</li>
                <li>Timely feedback and approvals</li>
                <li>Ensuring availability of key stakeholders</li>
                <li>Providing accurate project requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Client IP</h3>
              <p className="text-muted-foreground mb-4">
                Upon full payment, clients receive full ownership of custom code and deliverables created specifically for their project, excluding third-party components and our proprietary frameworks.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">5.2 Our IP</h3>
              <p className="text-muted-foreground mb-4">
                We retain ownership of:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Proprietary frameworks, tools, and methodologies</li>
                <li>Pre-existing code and components</li>
                <li>General knowledge and techniques</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">5.3 Portfolio Rights</h3>
              <p className="text-muted-foreground mb-4">
                We reserve the right to showcase completed projects in our portfolio unless explicitly prohibited in the project agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Confidentiality</h2>
              <p className="text-muted-foreground mb-4">
                We will maintain the confidentiality of all client information, trade secrets, and proprietary data shared during the course of our engagement. This obligation survives the termination of services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Warranties and Limitations</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">7.1 Service Warranty</h3>
              <p className="text-muted-foreground mb-4">
                We warrant that services will be performed in a professional and workmanlike manner. We will correct any defects in workmanship for a period of 30 days after project completion at no additional cost.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">7.2 Disclaimer</h3>
              <p className="text-muted-foreground mb-4">
                Services are provided "as is" without any warranty of specific results. We do not guarantee:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Specific business outcomes or ROI</li>
                <li>Compatibility with all third-party services</li>
                <li>Uninterrupted or error-free operation</li>
                <li>Meeting specific performance benchmarks unless contractually agreed</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                In no event shall AMO AI be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to our services. Our total liability shall not exceed the amount paid for services in the specific project giving rise to the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Termination</h2>
              <p className="text-muted-foreground mb-4">
                Either party may terminate a project engagement with written notice. Upon termination:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Client is responsible for payment for all work completed</li>
                <li>We will deliver all work completed to date</li>
                <li>Remaining deposits may be refunded for work not yet commenced</li>
                <li>Confidentiality obligations continue</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Dispute Resolution</h2>
              <p className="text-muted-foreground mb-4">
                Any disputes arising from these terms or our services shall first be attempted to resolve through good-faith negotiation. If unresolved within 30 days, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which AMO AI operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For questions about these Terms of Service, please contact us:
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
