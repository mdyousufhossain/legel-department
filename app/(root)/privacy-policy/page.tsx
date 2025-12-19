import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Sky Space Aviation",
  description: "How Sky Space Aviation & Legal Consultancy Firm collects, uses, and protects your personal and business data.",
  robots: "noindex, follow",
};

export default function PrivacyPolicy() {
 // const lastUpdated = "December 20, 2025";

  const sections = [
    {
      id: "collection",
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us when you fill out our contact forms, request a legal consultation, or communicate with us. This may include your name, email address, phone number, company name, and specific aviation project details."
    },
    {
      id: "usage",
      title: "2. How We Use Your Information",
      content: "As a legal consultancy, we use your data strictly to provide professional services, including: processing airline registrations, conducting regulatory audits, personnel sourcing, and responding to your legal inquiries. We do not sell your data to third parties."
    },
    {
      id: "legal-basis",
      title: "3. Legal Basis for Processing",
      content: "We process your information under the legal basis of 'Contractual Necessity' (to perform the services you requested) and 'Legitimate Interest' (to provide you with the most relevant legal updates and security for our website)."
    },
    {
      id: "retention",
      title: "4. Data Retention",
      content: "Due to the nature of legal and aviation consultancy, we retain certain records to comply with international aviation laws and professional liability standards. Documents related to airline certification or litigation may be kept for the duration required by law."
    },
    {
      id: "security",
      title: "5. Security Measures",
      content: "We implement industry-standard encryption (SSL/TLS) and secure data handling protocols to protect your sensitive aviation business data from unauthorized access or disclosure."
    },
    {
      id: "rights",
      title: "6. Your Rights",
      content: "You have the right to access, correct, or request the deletion of your personal data. To exercise these rights, please contact our Data Protection Officer at the email address provided below."
    }
  ];

  return (
    <article className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <header className="mb-12 border-b border-slate-100 pb-8">
          <div className="inline-block py-1 px-3 rounded-full bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-widest mb-4">
            Legal Document
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Privacy Policy
          </h1>
          {/* <p className="text-slate-500 font-medium">
            Effective Date: {lastUpdated}
          </p> */}
        </header>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-xl font-bold text-sky-950 mb-3">
                {section.title}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-16 bg-sky-950 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-2xl font-bold mb-4">Contact Our Privacy Team</h3>
          <p className="text-sky-200 mb-8 max-w-md">
            If you have questions about how we handle your aviation data or wish to file a data request, please reach out.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-1">
              <span className="text-sky-400 text-sm font-bold uppercase">Email</span>
              <p className="text-lg font-medium">aviationskyspace@gmail.com</p>
            </div>
            <div className="space-y-1">
              <span className="text-sky-400 text-sm font-bold uppercase">Address</span>
              <p className="text-lg font-medium">89/1, New West Monipur, Mirpur-2, Dhaka-1216</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}