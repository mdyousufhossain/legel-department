/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  MapPin, 
  Plane, 
  Anchor, 
  CheckCircle2, 
  Globe,
  Building2 as BuildingIcon 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// --- Components ---

const AboutHero = () => (
  <section className="relative py-32 bg-slate-900 overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <Image 
        src="https://images.unsplash.com/photo-1521791136364-798a7bc0d262?auto=format&fit=crop&q=80" 
        alt="Consultancy" 
        fill 
        priority
        className="object-cover"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900 to-slate-900" />
    
    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
        {/* @ts-ignore */}
        <motion.span variants={fadeInUp} className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">
          Since 2018
        </motion.span>
        {/* @ts-ignore */}
        <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl text-white font-bold mb-6">
          Global Vision. <br /> <span className="text-amber-500">Local Expertise.</span>
        </motion.h1>
        {/* @ts-ignore */}
        <motion.p variants={fadeInUp} className="text-xl text-slate-300 font-light leading-relaxed">
          Sky Space Aviation & Legal Consultancy Firm is a premier multi-disciplinary firm dedicated to navigating the complexities of modern law, aviation, and international trade.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

const OurMission = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} 
        /* @ts-ignore */
        variants={fadeInUp}>
          <h2 className="font-serif text-4xl text-slate-900 mb-6">A Legacy of Strategic Excellence</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Headquartered in Dhaka, we have built a reputation for solving high-stakes legal challenges across diverse sectors. From the intricacies of <strong>Aviation and Maritime law</strong> to the precision required for <strong>Corporate Taxation and FDI</strong>, our approach is always commercial-first.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-amber-600 shrink-0"><ShieldCheck /></div>
              <div>
                <h4 className="font-bold text-slate-900">Integrity</h4>
                <p className="text-sm text-slate-500">Unwavering ethical standards in every consultation.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-amber-600 shrink-0"><Globe /></div>
              <div>
                <h4 className="font-bold text-slate-900">Global Reach</h4>
                <p className="text-sm text-slate-500">Supporting cross-border investments and trade.</p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl bg-slate-200">
          <Image 
            src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&q=80" 
            alt="Aviation Law" 
            fill 
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 border-[20px] border-white/10 m-6 pointer-events-none" />
        </div>
      </div>
    </div>
  </section>
);

const PresenceSection = () => (
  <section className="py-24 bg-slate-50 border-y border-slate-200">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl text-slate-900 mb-4 font-bold">Our Presence</h2>
        <div className="h-1.5 w-20 bg-amber-500 mx-auto rounded-full" />
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Card 1 */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 shadow-sm border-t-4 border-amber-600 flex flex-col items-start hover:shadow-xl transition-all duration-300 group"
        >
          <div className="bg-amber-50 p-4 rounded-xl mb-6 group-hover:bg-amber-600 transition-colors duration-300">
            <MapPin className="text-amber-600 group-hover:text-white transition-colors duration-300" size={32} />
          </div>
          <h3 className="font-serif text-2xl font-bold mb-4 text-slate-900">Registered Office</h3>
          <p className="text-slate-600 leading-relaxed text-lg">
            89/1, New West Monipur, <br />
            Mirpur 2, Dhaka 1216, Bangladesh
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 shadow-sm border-t-4 border-slate-900 flex flex-col items-start hover:shadow-xl transition-all duration-300 group"
        >
          <div className="bg-slate-100 p-4 rounded-xl mb-6 group-hover:bg-slate-900 transition-colors duration-300">
            <BuildingIcon className="text-slate-900 group-hover:text-white transition-colors duration-300" size={32} />
          </div>
          <h3 className="font-serif text-2xl font-bold mb-4 text-slate-900">Corporate Address</h3>
          <p className="text-slate-600 leading-relaxed text-lg">
            Raisa Tower, 60 Feet Road, <br />
            Mirpur 2, Dhaka 1216, Bangladesh
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const CoreExpertise = () => {
  const practiceFocus = [
    { title: "Specialized Sector Law", items: ["Aviation Law", "Maritime Law", "Telecommunications", "Broadcasting"] },
    { title: "Corporate & Finance", items: ["Foreign Direct Investment", "Business Setup", "Banking Matters", "Taxation & VAT"] },
    { title: "Dispute Resolution", items: ["Litigation", "Alternative Dispute Resolution (ADR)", "Criminal Law", "Family Law"] },
    { title: "Operational Law", items: ["Property Vetting", "Labour & Employment", "Intellectual Property", "Licensing Matters"] }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl text-slate-900 mb-6">Our Diverse Practice</h2>
          <p className="text-slate-600">
            We operate at the intersection of industry-specific regulation and general corporate law, providing a 360-degree shield for our clients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practiceFocus.map((group, i) => (
            <div key={i} className="space-y-4">
              <h4 className="font-bold text-amber-600 uppercase tracking-widest text-xs">{group.title}</h4>
              <ul className="space-y-3">
                {group.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle2 size={14} className="text-slate-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-slate-900 text-white flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
                <div className="flex gap-4 mb-6">
                    <Plane className="text-amber-500" />
                    <Anchor className="text-amber-500" />
                </div>
                <h3 className="font-serif text-3xl mb-4">Global Transport & Cargo</h3>
                <p className="text-slate-400">
                    We specialize in high-stakes resolution for <strong>Airlines and Passenger Disputes</strong> as well as <strong>Transport and Cargo Dispute Resolutions</strong>. Our technical knowledge ensures that commercial flow remains uninterrupted by legal bottlenecks.
                </p>
            </div>
            <div className="w-full md:w-auto">
                <Link href="/contact" className="bg-amber-600 px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-amber-700 transition-colors inline-block whitespace-nowrap">
                    Consult our Specialists
                </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <OurMission />
      <PresenceSection />
      <CoreExpertise />
    </main>
  );
}