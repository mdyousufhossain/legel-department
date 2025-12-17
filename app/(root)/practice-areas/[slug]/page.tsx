"use client";

import React from "react";
import { useParams, notFound } from "next/navigation"; // Hook to get the URL slug
import { motion } from "framer-motion";
import { 
  Briefcase, Scale, ShieldCheck, Gavel, FileText, 
  Globe, Landmark, Users, ArrowRight, Phone, Mail, 
  CheckCircle2, ChevronRight, Award 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --- 1. THE DATA (Simulating a Database) ---
// In a real app, you would fetch this based on the 'slug'
const practiceData: Record<string, any> = {
  "corporate-securities": {
    title: "Corporate & Securities",
    icon: Briefcase,
    tagline: "Structuring the deals that define the market.",
    description: "Our Corporate practice is the engine room of the firm. We guide clients through the entire business lifecycle, from entity formation and seed funding to IPOs, mergers, and complex exits.",
    stats: [
      { label: "Deal Value (2024)", value: "$12B+" },
      { label: "M&A Transactions", value: "450+" },
    ],
    capabilities: [
      { title: "Mergers & Acquisitions", desc: "Buy-side and sell-side representation for public and private deals." },
      { title: "Capital Markets", desc: "IPOs, SPACs, and debt offerings on major global exchanges." },
      { title: "Corporate Governance", desc: "Advising boards on fiduciary duties and shareholder activism." },
    ],
    caseStudies: [
      { title: "TechGiant Acquisition", result: "Acquired for $4.2B", desc: "Represented the target in a hostile takeover defense turned friendly acquisition." },
      { title: "Energy Sector Merger", result: "Regulatory Approval", desc: "Navigated antitrust clearance in 4 jurisdictions for a cross-border energy merger." }
    ],
    leadAttorney: {
      name: "Eleanor Rigby",
      role: "Chair, Corporate Practice",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      email: "e.rigby@lexicon.law"
    }
  },
  "commercial-litigation": {
    title: "Commercial Litigation",
    icon: Scale,
    tagline: "Unrelenting advocacy in the courtroom.",
    description: "When the stakes are highest, industry leaders turn to Lexicon. We are trial lawyers, not just litigators. We prepare every case for verdict, a strategy that often yields favorable settlements.",
    stats: [
      { label: "Win Rate", value: "94%" },
      { label: "Judgments Secured", value: "$850M" },
    ],
    capabilities: [
      { title: "Class Action Defense", desc: "Defeating certification and securing dismissals in consumer class actions." },
      { title: "Contract Disputes", desc: "Resolving complex breach of contract and partnership disputes." },
      { title: "White Collar Defense", desc: "Representing executives in DOJ and SEC investigations." },
    ],
    caseStudies: [
      { title: "Pharma Patent Defense", result: "Case Dismissed", desc: "Successfully defended a key patent against generic infringement." },
      { title: "Hedge Fund Dispute", result: "$120M Recovery", desc: "Recovered misappropriated assets for investors through arbitration." }
    ],
    leadAttorney: {
      name: "Michael Ross",
      role: "Head of Litigation",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      email: "m.ross@lexicon.law"
    }
  },
  // ... You would add the other practice areas here using their URL slugs
};

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// --- Components ---

const ContactSidebar = ({ attorney }: { attorney: any }) => (
  <div className="sticky top-24 space-y-8">
    
    {/* Attorney Profile Card */}
    <div className="bg-white border border-slate-200 p-6 shadow-sm">
      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Department Chair</h3>
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-16 h-16 bg-slate-100 rounded-full overflow-hidden">
          <Image src={attorney.image} alt={attorney.name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-serif text-lg font-bold text-slate-900">{attorney.name}</h4>
          <p className="text-xs text-amber-600 font-bold uppercase">{attorney.role}</p>
        </div>
      </div>
      <div className="space-y-3 text-sm text-slate-600">
        <div className="flex items-center gap-3">
          <Mail size={16} className="text-amber-500" />
          <a href={`mailto:${attorney.email}`} className="hover:text-slate-900 transition-colors">{attorney.email}</a>
        </div>
        <div className="flex items-center gap-3">
          <Phone size={16} className="text-amber-500" />
          <span>+1 (555) 123-4567</span>
        </div>
      </div>
    </div>

    {/* Quick Inquiry Form */}
    <div className="bg-slate-900 p-8 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/20 rounded-bl-full -mr-4 -mt-4" />
      <h3 className="font-serif text-xl mb-4 relative z-10">Request Consultation</h3>
      <p className="text-slate-400 text-sm mb-6 relative z-10">Discuss your matter with our team. All inquiries are privileged.</p>
      
      <form className="space-y-4 relative z-10">
        <input type="text" placeholder="Full Name" className="w-full bg-white/10 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-500" />
        <input type="email" placeholder="Work Email" className="w-full bg-white/10 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-500" />
        <textarea rows={3} placeholder="Brief details of matter..." className="w-full bg-white/10 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-500 resize-none" />
        <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold uppercase tracking-widest text-xs py-4 transition-colors">
          Submit Request
        </button>
      </form>
    </div>
  </div>
);

export default function ServiceDetailPage() {
  const params = useParams();
  
  // Handle slug being an array (in case of catch-all) or string
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;

  // Fetch data
  const data = practiceData[slug as string];

  // If slug doesn't match data, typically you'd return a 404
  if (!data) {
    return (
        <div className="h-screen flex items-center justify-center bg-slate-50">
            <div className="text-center">
                <h1 className="font-serif text-4xl text-slate-900 mb-4">Practice Area Not Found</h1>
                <Link href="/practice-areas" className="text-amber-600 font-bold hover:underline">Return to Practice Areas</Link>
            </div>
        </div>
    );
  }

  const Icon = data.icon;

  return (
    <main className="bg-slate-50 min-h-screen pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-800/50 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
           {/* Breadcrumbs */}
           <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/practice-areas" className="hover:text-white transition-colors">Practice Areas</Link>
              <ChevronRight size={12} />
              <span className="text-amber-500">{data.title}</span>
           </div>

           <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
              <motion.div 
                initial="hidden" animate="visible" variants={fadeInUp}
                className="max-w-3xl"
              >
                <div className="w-16 h-16 bg-amber-600/20 text-amber-500 flex items-center justify-center rounded-lg mb-6 border border-amber-500/30">
                    <Icon size={32} />
                </div>
                <h1 className="font-serif text-5xl md:text-6xl text-white font-bold mb-6 leading-tight">
                  {data.title}
                </h1>
                <p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
                  {data.tagline}
                </p>
              </motion.div>
              
              {/* Key Stats Row */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
                className="flex flex-col gap-6 md:border-l border-slate-700 md:pl-8"
              >
                  {data.stats.map((stat: any, i: number) => (
                      <div key={i}>
                          <p className="text-3xl font-serif font-bold text-white">{stat.value}</p>
                          <p className="text-xs uppercase tracking-widest text-slate-400">{stat.label}</p>
                      </div>
                  ))}
              </motion.div>
           </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* 2. MAIN CONTENT (Left Column) */}
          <div className="lg:col-span-8">
            <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="prose prose-lg prose-slate max-w-none mb-16"
            >
              <h2 className="font-serif text-3xl text-slate-900 mb-6">Overview</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {data.description}
              </p>
              <p className="text-slate-600 leading-relaxed">
                We combine deep sector expertise with a commercial approach. Our team doesn't just list problems; we architect solutions that allow your business to move forward with confidence.
              </p>
            </motion.div>

            {/* Detailed Capabilities */}
            <div className="mb-16">
                <h3 className="font-serif text-2xl text-slate-900 mb-8 flex items-center gap-3">
                    <CheckCircle2 className="text-amber-600" /> Key Capabilities
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {data.capabilities.map((cap: any, i: number) => (
                        <div key={i} className="bg-white p-6 border-l-2 border-amber-500 shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-slate-900 mb-2">{cap.title}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">{cap.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Case Studies Showcase */}
            <div className="bg-slate-900 text-white p-8 rounded-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Award size={120} />
                </div>
                <h3 className="font-serif text-2xl mb-8 relative z-10">Representative Matters</h3>
                <div className="space-y-6 relative z-10">
                    {data.caseStudies.map((study: any, i: number) => (
                        <div key={i} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                                <h4 className="font-bold text-lg text-white">{study.title}</h4>
                                <span className="bg-amber-600 text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold inline-block w-fit rounded-sm">
                                    {study.result}
                                </span>
                            </div>
                            <p className="text-slate-400 text-sm">
                                {study.desc}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                    <Link href="/results" className="text-amber-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                        View All Firm Results <ArrowRight size={14} />
                    </Link>
                </div>
            </div>

          </div>

          {/* 3. SIDEBAR (Right Column) */}
          <div className="lg:col-span-4">
             <ContactSidebar attorney={data.leadAttorney} />
          </div>

        </div>
      </div>

    </main>
  );
}