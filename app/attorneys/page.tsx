/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  Scale, 
  Plane, 
  ShieldCheck,
  CheckCircle2,
  Gavel,
  Briefcase,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
  }
};

// --- Data ---
const attorneys = [
  {
    name: "Adv. Golam Zakaria Shakil",
    role: "Senior Partner & Tax Advisor",
    specialty: "Aviation & Maritime Law",
    credentials: [
      "LL.M in Intl. Air & Space Law (AAUB)",
      "LL.M in Maritime Law",
      "LL.M, LL.B (Hon's)",
      "Registered Tax Advisor"
    ],
    icon: Plane,
    accent: "border-amber-500",
    bg: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  {
    name: "Adv. Abu Taher Rony",
    role: "Head of Criminal Law",
    specialty: "Supreme Court of Bangladesh",
    credentials: [
      "Advocate, Bangladesh Supreme Court",
      "LL.M, LL.B (Hon's)",
      "Criminal Law Specialist"
    ],
    icon: Gavel,
    accent: "border-slate-800",
    bg: "bg-slate-50",
    iconColor: "text-slate-800"
  },
  {
    name: "Adv. Alamgir Hossain",
    role: "Head of Banking Law",
    specialty: "Supreme Court of Bangladesh",
    credentials: [
      "Advocate, Bangladesh Supreme Court",
      "LL.M, LL.B (Hon's)",
      "Banking & Financial Specialist"
    ],
    icon: Scale,
    accent: "border-slate-600",
    bg: "bg-slate-50",
    iconColor: "text-slate-700"
  },
  {
    name: "Md Sabbir Ahammed",
    role: "Chief Executive Officer",
    specialty: "Technical Operations",
    credentials: [
      "Aircraft Maintenance Engineer",
      "CEO, Sky Space Aviation",
      "Aviation Technical Expert"
    ],
    icon: ShieldCheck,
    accent: "border-blue-900",
    bg: "bg-blue-50",
    iconColor: "text-blue-900"
  }
];

export default function AttorneyPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* --- Hero Section --- */}
      <section className="relative py-28 lg:py-32 bg-slate-900 overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-800 to-transparent opacity-50" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500 rounded-full blur-[150px] opacity-10" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="max-w-4xl"
          > 
           {/* @ts-ignore */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-amber-500"></span>
              <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-xs">
                Leadership & Counsel
              </span>
            </motion.div>
              {/* @ts-ignore */}
            <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]">
              Expertise Driven by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                Law & Technical Precision
              </span>
            </motion.h1>
            {/* @ts-ignore */}
            <motion.p variants={fadeInUp} className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed border-l-2 border-slate-700 pl-6">
              Combining Supreme Court advocacy with specialized Aviation and Maritime expertise to provide comprehensive legal solutions in Bangladesh.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- Trust Indicators --- */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-6 md:gap-12 justify-start md:justify-center text-slate-500 text-sm font-semibold uppercase tracking-wider">
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-600"/> Supreme Court Enlisted</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-600"/> Tax Consultants</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-600"/> Aviation Specialists</span>
          </div>
        </div>
      </div>

      {/* --- Attorney Grid --- */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 lg:gap-10"
          >
            {attorneys.map((member, idx) => (
              <motion.div 
                key={idx}
                // @ts-ignore
                variants={fadeInUp}
                className="group relative bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-amber-200 transition-all duration-500 flex flex-col overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className={`h-1.5 w-full bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200 group-hover:via-amber-500 transition-all duration-500`} />

                <div className="p-8 md:p-10 flex flex-col h-full">
                  
                  {/* Header: Icon & Name */}
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-2">
                        {member.role}
                      </p>
                    </div>
                    {/* Icon Badge */}
                    <div className={`w-14 h-14 rounded-full ${member.bg} ${member.iconColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                       <member.icon size={28} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Specialty Badge */}
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-50 border border-slate-100 text-slate-600 text-xs font-semibold tracking-wide">
                      <Award size={14} className="text-amber-600" />
                      {member.specialty}
                    </span>
                  </div>

                  {/* Credentials List */}
                  <div className="mt-auto">
                    <p className="text-[10px] uppercase text-slate-400 font-bold tracking-widest mb-4">
                      Qualifications
                    </p>
                    <ul className="space-y-3">
                      {member.credentials.map((cred, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700 text-sm group-hover:text-slate-900 transition-colors">
                          <CheckCircle2 size={16} className="mt-0.5 text-slate-300 group-hover:text-amber-500 transition-colors shrink-0" />
                          <span className="leading-snug">{cred}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
                
                {/* Interactive Footer visual */}
                <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 flex justify-between items-center group-hover:bg-amber-50/50 transition-colors">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-amber-700">View Profile</span>
                    <ArrowRight size={16} className="text-slate-300 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-500 rounded-2xl mb-8 shadow-lg shadow-amber-500/20 rotate-3 hover:rotate-6 transition-transform">
                  <Briefcase className="text-white" size={32} />
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ready to discuss your case?</h2>
              <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                  Visit our corporate office in Mirpur or schedule a preliminary consultation with our partners.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-amber-500 text-slate-900 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors rounded-sm"
                >
                    Schedule Consultation
                </Link>
                <Link 
                  href="/about" 
                  className="border border-slate-700 text-white px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-colors rounded-sm"
                >
                    More About Firm
                </Link>
              </div>
            </motion.div>
        </div>
      </section>
    </main>
  );
}