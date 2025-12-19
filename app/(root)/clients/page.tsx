/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import { motion } from "framer-motion";
import { 
  Plane, Globe, ArrowRight, Star, Building2, Briefcase, 
  Truck, HardHat, Code, Newspaper, Activity, ShieldCheck
} from "lucide-react";
import Link from "next/link";

const clientSections = [
  {
    sectionTitle: "Featured Clients",
    description: "Our primary partners and group entities driving innovation in aviation and engineering.",
    icon: Star, 
    clients: [
      "Sky Space Company", 
      "SKY SPCE ENGINEERING",
      "SKY SPEED AVIATION",
      "Sky Speed Engineering",
      "Sky space engineering LTD",
      "SKY SPACE TRANSPORT & CARGO SERVICES"
    ]
  },
  {
    sectionTitle: "Limited Companies",
    description: "Partnering with registered limited liability entities on complex corporate frameworks.",
    icon: Building2,
    clients: [
      "La-jaowness International LTD",
      "QUASAR GLOBAL INTERNATIONAL LTD"
    ]
  },
  {
    sectionTitle: "Our Valued Clients",
    description: "A diverse portfolio of enterprises across healthcare, media, and global trade.",
    icon: Briefcase,
    clients: [
      "DAIYAN & AYAN ENTERPRISE",
      "BEE FLIMS",
      "ENGINEE TRIP",
      "MS RELIABLE INTERNATIONAL",
      "SRITY DENTAL CLINIC",
      "NIBAN Enterprises",
      "ZP ENTERPRISE",
      "GREEN TIMES (NEWSPAPER)",
      "RAIS TEC BD",
      "MEDIBEST PHARMA",
      "AYAT INTERNATIONAL",
      "ROKOMARY DOT COM",
      "R K International",
      "A K International",
      "Ayaaz International",
      "Sheikh Traders",
      "Enia Enterprise",
      "Arna Enterprise",
      "Howlader Enterprise",
      "The Roadrunner International",
      "Primier Health Care",
      "Nur power Engineering",
      "Mahir agro and vegetables",
      "N K INTERNATIONAL infrastructure",
      "RAFA WEB HUB",
      "Raj International",
      "Nahiyan traders"
    ]
  }
];

// Helper to assign icons based on keywords for a better UX
const getClientIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('aviation') || n.includes('sky speed')) return <Plane size={20} />;
  if (n.includes('transport') || n.includes('cargo') || n.includes('roadrunner')) return <Truck size={20} />;
  if (n.includes('engineering') || n.includes('infrastructure')) return <HardHat size={20} />;
  if (n.includes('web') || n.includes('dot com')) return <Code size={20} />;
  if (n.includes('newspaper') || n.includes('films')) return <Newspaper size={20} />;
  if (n.includes('health') || n.includes('dental') || n.includes('pharma')) return <Activity size={20} />;
  return <ShieldCheck size={20} />;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const ClientsHero = () => (
  <section className="relative py-32 bg-[#0a0f1c] overflow-hidden">
    {/* Animated Background Gradients */}
    <div className="absolute inset-0 z-0">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
    </div>
    
    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
        <motion.div variants={fadeInUp} className="inline-block mb-6">
             <span className="py-2 px-5 border border-amber-500/30 rounded-full text-amber-500 text-[10px] font-bold uppercase tracking-[0.2em] bg-amber-500/5 backdrop-blur-sm">
               The Portfolio of Excellence
             </span>
        </motion.div>
        <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl text-white font-medium mb-8 leading-tight">
          Strategic Legal Partners for <span className="text-amber-500 italic">Global Ventures.</span>
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
          We represent a prestigious roster of enterprises, from heavy industry leaders to digital innovators, ensuring their legal interests are protected across borders.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

const FeaturedSection = () => {
  const featuredData = clientSections[0];
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-amber-600 mb-4">
               <Star size={20} fill="currentColor" />
               <span className="text-sm font-bold uppercase tracking-widest">Premium Partnerships</span>
            </div>
            <h2 className="font-serif text-4xl text-slate-900 mb-4">{featuredData.sectionTitle}</h2>
            <p className="text-slate-500 leading-relaxed">{featuredData.description}</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredData.clients.map((clientName, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              className="group relative bg-slate-50 p-10 border border-slate-100 rounded-xl transition-all duration-500 hover:shadow-2xl hover:bg-white overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-amber-500 group-hover:h-full transition-all duration-500" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-amber-600 mb-6 group-hover:rotate-[360deg] transition-transform duration-700">
                   {getClientIcon(clientName)}
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-800 text-center uppercase tracking-wider group-hover:text-amber-600 transition-colors leading-snug">
                    {clientName}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClientList = () => {
  const listData = clientSections.slice(1);
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-24">
          {listData.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
                <div className="p-4 bg-slate-900 shadow-xl rounded-2xl text-amber-500">
                  <category.icon size={32} />
                </div>
                <div>
                    <h3 className="font-serif text-3xl text-slate-900">{category.sectionTitle}</h3>
                    <p className="text-slate-500">{category.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.clients.map((clientName, cIdx) => (
                  <motion.div 
                    key={cIdx} 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 bg-white p-5 rounded-lg border border-slate-100 hover:border-amber-200 hover:shadow-sm transition-all group"
                  >
                    <div className="text-amber-500/40 group-hover:text-amber-500 transition-colors">
                        {getClientIcon(clientName)}
                    </div>
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-widest leading-tight">
                        {clientName}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
    <section className="py-24 bg-[#0a0f1c] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-amber-600/5 rounded-full blur-[100px]" />
        <div className="container mx-auto px-6 relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Ready to scale securely?</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto font-light leading-relaxed">
                Join our elite roster of industry leaders. We offer bespoke legal solutions tailored to your unique corporate requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/contact" className="w-full sm:w-auto bg-amber-600 text-white px-10 py-5 font-bold uppercase tracking-[0.15em] text-xs hover:bg-amber-700 hover:-translate-y-1 transition-all shadow-xl shadow-amber-900/20">
                    Consult our experts
                </Link>
                <Link href="/about" className="w-full sm:w-auto border border-slate-700 text-white px-10 py-5 font-bold uppercase tracking-[0.15em] text-xs hover:bg-white hover:text-slate-900 transition-all">
                    Our Firm Profile
                </Link>
            </div>
        </div>
    </section>
)

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-amber-100 selection:text-amber-900">
      <ClientsHero />
      <FeaturedSection />
      <ClientList />
      <CTA />
      
      {/* Visual UX Footer - Trust Badges */}
      {/* <div className="py-12 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              <span className="text-xs font-black tracking-tighter text-slate-900 italic">SKY SPACE LEGAL</span>
              <span className="text-xs font-black tracking-tighter text-slate-900 italic">EST. CONSULTANCY</span>
              <span className="text-xs font-black tracking-tighter text-slate-900 italic">ISO CERTIFIED 2024</span>
              <span className="text-xs font-black tracking-tighter text-slate-900 italic">GLOBAL COMPLIANCE</span>
          </div>
      </div> */}
    </main>
  );
}