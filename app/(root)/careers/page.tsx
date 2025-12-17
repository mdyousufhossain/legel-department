"use client";

import React from "react";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";
import { ArrowUpRight, GraduationCap, Zap, Heart, Briefcase, MapPin, Clock } from "lucide-react";

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// --- Components ---

const CareersHero = () => (
  <section className="relative py-32 bg-slate-900">
    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl mx-auto">
        <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl text-white font-bold mb-6">
          Do your best work. <br />
          <span className="text-amber-500">Define your era.</span>
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-xl text-slate-300 font-light mb-10">
          We are looking for the relentless, the precise, and the visionary. Join a team where excellence is the baseline.
        </motion.p>
        <motion.div variants={fadeInUp}>
            <a href="#open-positions" className="bg-amber-600 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-amber-700 transition-colors inline-block">
            View Open Positions
            </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Benefits = () => {
  const benefits = [
    { icon: Zap, title: "High-Stakes Impact", desc: "Work on headline-making cases that shape industries and regulations." },
    { icon: GraduationCap, title: "Continuous Mentorship", desc: "Direct access to senior partners and a rigorous internal training academy." },
    { icon: Heart, title: "Comprehensive Care", desc: "Top-tier health coverage, wellness stipends, and family leave policies." },
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-6">
                <item.icon size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const JobListing = () => {
  const jobs = [
    { title: "Senior Corporate Associate", dept: "Corporate Law", location: "New York", type: "Full-Time" },
    { title: "Litigation Paralegal", dept: "Litigation", location: "Dhaka", type: "Full-Time" },
    { title: "IP Strategy Counsel", dept: "Intellectual Property", location: "London", type: "Remote Hybrid" },
    { title: "Legal Administrative Assistant", dept: "Operations", location: "Dhaka", type: "Full-Time" },
  ];

  return (
    <section id="open-positions" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900">Current Opportunities</h2>
        </div>

        <div className="space-y-4">
          {jobs.map((job, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-8 border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{job.title}</h3>
                <div className="flex gap-4 mt-2 text-sm text-slate-500">
                  <span className="flex items-center gap-1"><Briefcase size={14}/> {job.dept}</span>
                  <span className="flex items-center gap-1"><MapPin size={14}/> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock size={14}/> {job.type}</span>
                </div>
              </div>
              <div>
                <button className="flex items-center gap-2 text-slate-900 font-bold uppercase tracking-widest text-xs border-b border-transparent group-hover:border-amber-600 transition-all">
                  Apply Now <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 p-8 md:p-12 text-center rounded-sm">
            <h3 className="font-serif text-2xl text-white mb-4">Don&apos;t see your role?</h3>
            <p className="text-slate-400 mb-8">We are always interested in meeting exceptional talent. Send your CV to our talent acquisition team.</p>
            <a href="mailto:careers@skyspaceaviation.law" className="text-amber-500 font-bold hover:text-white transition-colors">
              careers@skyspaceaviation.law
            </a>
        </div>
      </div>
    </section>
  );
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <CareersHero />
      <Benefits />
      <JobListing />
    </main>
  );
}