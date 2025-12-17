/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Plane, HardHat, Building2, Activity, Globe, 
  ShieldCheck, ArrowRight, CheckCircle2 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --- Data Preparation (From your Client List) ---
const featuredClients = [
  {
    name: "Sky Space Aviation",
    industry: "Aviation Law",
    description: "Providing comprehensive legal frameworks for aviation regulatory compliance and operational licensing.",
    logoIcon: Plane, 
    highlight: true
  },
  {
    name: "Rokomary.com",
    industry: "E-Commerce & Tech",
    description: "Strategic counsel for one of the region's largest digital marketplaces on IP and corporate governance.",
    logoIcon: Building2,
    highlight: true
  }
];

const clientCategories = [
  {
    title: "Aviation & Engineering",
    icon: HardHat,
    clients: [
      "Sky Space Engineering",
      "Sky Speed Aviation",
      "Nur Power Engineering",
      "Sky Speed Engineering",
      "Engineering Trip",
      "Enia Enterprise"
    ]
  },
  {
    title: "Corporate & International Trade",
    icon: Globe,
    clients: [
      "Quasar Global International",
      "The Roadrunner International",
      "Ayat International",
      "MS Reliable International",
      "Ayaaz International",
      "La-jaowness International",
      "Raj International"
    ]
  },
  {
    title: "Healthcare & Pharma",
    icon: Activity,
    clients: [
      "Medibest Pharma",
      "Premier Health Care",
      "Srity Dental Clinic",
      "Daiyan & Ayan Enterprise"
    ]
  },
  {
    title: "Media & General Enterprise",
    icon: ShieldCheck,
    clients: [
      "Bee Films",
      "Green Times (Newspaper)",
      "Howlader Enterprise",
      "Sheikh Traders",
      "Niban Enterprises",
      "Arna Enterprise"
    ]
  }
];

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// --- Components ---

const ClientsHero = () => (
  <section className="relative py-32 bg-slate-900 overflow-hidden">
    {/* Abstract Background Element */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute -right-20 -top-20 w-[600px] h-[600px] bg-amber-600/30 rounded-full blur-[100px]" />
    </div>
    
    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl mx-auto">
        {/* @ts-ignore */}
        <motion.div variants={fadeInUp} className="flex justify-center mb-6">
             <span className="py-2 px-4 border border-amber-500/30 rounded-full text-amber-500 text-xs font-bold uppercase tracking-widest bg-amber-500/10">
                Our Partners
             </span>
        </motion.div>
        {/* @ts-ignore */}
        <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl text-white font-bold mb-6">
          Trusted by the <br /> <span className="text-amber-500">Industry Leaders.</span>
        </motion.h1>
      
      {/* @ts-ignore */}
        <motion.p variants={fadeInUp} className="text-xl text-slate-300 font-light leading-relaxed">
          From aviation giants to emerging tech platforms, we provide the legal foundation for ambitious enterprises to scale securely.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

const FeaturedSection = () => (
  <section className="py-20 bg-white border-b border-slate-200">
    <div className="container mx-auto px-6">
      <div className="mb-12">
        <h2 className="font-serif text-3xl text-slate-900">Featured Engagements</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {featuredClients.map((client, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-slate-50 p-10 border border-slate-200 hover:border-amber-500 transition-colors duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <client.logoIcon size={120} />
            </div>
            
            <div className="relative z-10">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-amber-600 mb-6">
                    <client.logoIcon size={24} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">{client.name}</h3>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-4 block">{client.industry}</span>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    {client.description}
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-slate-900 font-bold text-sm hover:text-amber-600 transition-colors">
                    View Case Study <ArrowRight size={14} />
                </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ClientList = () => (
  <section className="py-24 bg-slate-50">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16">
        
        {clientCategories.map((category, idx) => (
            <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4">
                    <div className="p-3 bg-white shadow-sm rounded-full text-amber-600">
                        <category.icon size={20} />
                    </div>
                    <h3 className="font-serif text-2xl text-slate-900">{category.title}</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                    {category.clients.map((clientName, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-3 bg-white p-4 rounded-sm shadow-sm border border-transparent hover:border-amber-200 transition-colors">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                            <span className="text-sm font-medium text-slate-700 uppercase tracking-wide text-[11px]">{clientName}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        ))}

      </div>
    </div>
  </section>
);

const CTA = () => (
    <section className="py-24 bg-slate-900 text-center">
        <div className="container mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Ready to join our roster?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                We select our clients as carefully as they select us. Lets determine if we are the right partners for your growth.
            </p>
            <Link href="/contact" className="bg-amber-600 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-amber-700 transition-colors inline-block">
              Become a Client
            </Link>
        </div>
    </section>
)

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <ClientsHero />
      <FeaturedSection />
      <ClientList />
      <CTA />
    </main>
  );
}