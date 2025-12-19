import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Sky Space Aviation",
  description: "Official terms of service and legal framework for Sky Space Aviation & Legal Consultancy Firm.",
  robots: "noindex, follow", // Legal pages usually don't need to compete in search results
};

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using the services of Sky Space Aviation & Legal Consultancy Firm, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy."
    },
    {
      title: "2. No Attorney-Client Relationship",
      content: "The materials on this website are for informational purposes only and do not constitute legal advice. Use of this website or communication through it does not create an attorney-client relationship. Such a relationship is only established through a written engagement agreement signed by an authorized representative of the firm."
    },
    {
      title: "3. Scope of Aviation Consultancy",
      content: "Our services, including airline registration, regulatory compliance, and personnel sourcing, are provided based on current international aviation standards (ICAO/CAA). Sky Space Aviation does not guarantee specific outcomes from third-party regulatory bodies or government agencies."
    },
    {
      title: "4. Intellectual Property",
      content: "All content, logos, trademarks, and intellectual property displayed on this site are the exclusive property of Sky Space Aviation. Unauthorized use, reproduction, or distribution of these materials is strictly prohibited."
    },
    {
      title: "5. Limitation of Liability",
      content: "Sky Space Aviation shall not be liable for any consequential, indirect, or incidental damages arising out of the use or inability to use our consultancy services or website information."
    },
    {
      title: "6. Governing Law",
      content: "These terms are governed by the laws of the People's Republic of Bangladesh. Any disputes arising from these terms shall be resolved exclusively in the courts of Dhaka."
    }
  ];

  return (
    <article className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <header className="mb-12 border-b border-slate-100 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-slate-500 font-medium">
            Last Updated: October 2023
          </p>
        </header>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <section key={index} className="group">
              <h2 className="text-xl font-bold text-sky-950 mb-4 group-hover:text-sky-600 transition-colors">
                {section.title}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <footer className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-100">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Questions regarding our terms?</h3>
          <p className="text-slate-600 mb-4">
            If you have any questions about these Terms, please contact our legal department.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 text-sm">
            <div>
              <span className="block font-semibold text-slate-900">Email</span>
              <a href="mailto:aviationskyspace@gmail.com" className="text-sky-600 hover:underline">
                aviationskyspace@gmail.com
              </a>
            </div>
            <div>
              <span className="block font-semibold text-slate-900">Registered Office</span>
              <span className="text-slate-500">89/1, New West Monipur, Mirpur-2, Dhaka-1216</span>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}