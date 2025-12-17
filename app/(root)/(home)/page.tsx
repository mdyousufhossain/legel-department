"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, easeInOut } from "framer-motion";

import { 
  Scale, ShieldCheck, Briefcase, Gavel, ArrowRight, Menu, X, 
  Phone, Mail, MapPin, ChevronRight, Quote, Linkedin, CheckCircle2 
} from "lucide-react";
import Image from "next/image";
import { Loader } from "@/components/Loader/MainLoader";
import ClientTicker from "@/components/ClientTicker";
import TeamSection from "@/components/TeamSelections";
import Testimonials from "@/components/Testimonials";
import RecentCases from "@/components/RecentCases";
import AboutSection from "@/components/AboutSectionts";
import WhyChooseUs from "@/components/WhyChooseUs";
import Link from "next/link";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};


const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-slate-900">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30 z-10" />
        <Image 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
          alt="Law Office" 
          fill
          priority
          className="object-cover opacity-60"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center pt-20">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
            <span className="px-4 py-1.5 border border-amber-500/30 text-amber-500 text-[10px] md:text-xs uppercase tracking-[0.2em] bg-amber-500/10 backdrop-blur-sm">
              Established 2019 • Dhaka
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1]">
            Justice Defined <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">
              By Integrity.
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Strategic legal counsel for the modern enterprise, combining traditional excellence with forward-thinking innovation.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button className="bg-amber-600 text-white px-6 py-3 font-bold uppercase tracking-widest text-sm hover:bg-amber-700 transition-colors w-full sm:w-auto rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
              Practice Areas
            </button>
            <button className="border border-amber-500 text-amber-200 px-6 py-3 font-bold uppercase tracking-widest text-sm hover:bg-amber-600/10 hover:text-white transition-all w-full sm:w-auto rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};




const PracticeArea = ({ icon: Icon, title, desc }: { icon: React.ComponentType<{ className?: string , size?: number }>, title: string, desc: string }) => (
  <motion.div 
    variants={fadeInUp}
    className="group p-8 bg-white border border-slate-100 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 relative overflow-hidden"
  >
    <div className="w-12 h-12 bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors duration-300">
      <Icon className="text-slate-900 group-hover:text-white transition-colors" size={24} />
    </div>
    <h3 className="font-serif text-2xl font-semibold mb-3 text-slate-900">{title}</h3>
    <p className="text-slate-500 mb-8 leading-relaxed text-sm">{desc}</p>
    <div className="absolute bottom-8 left-8 flex items-center text-amber-600 font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
      Learn More <ChevronRight size={14} className="ml-1" />
    </div>
  </motion.div>
);

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      <main className="min-h-screen bg-slate-50">
        <Hero />
        <ClientTicker />

        <article>
        {/* <AboutSection /> */}
        <WhyChooseUs />

        {/* Practice Areas */}
        <section id="practice-areas" className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-16 md:flex justify-between items-end"
            >
              <div className="md:w-2/3">
                <h4 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-3">Our Expertise</h4>
                <h2 className="font-serif text-4xl md:text-5xl text-slate-900 leading-tight">
                  Comprehensive legal solutions <br /> for complex challenges.
                </h2>
              </div>
              <div className="mt-6 md:mt-0">
                <Link href="#" className="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-amber-600 hover:border-amber-600 transition-all text-sm uppercase tracking-wide">
                  View All Practices
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { icon: Briefcase, title: "Corporate Law", desc: "Navigating complex mergers, acquisitions, and corporate governance with precision." },
                { icon: Scale, title: "Litigation", desc: "Aggressive representation in federal and state courts for high-stakes disputes." },
                { icon: ShieldCheck, title: "Intellectual Property", desc: "Protecting your innovations and brand identity in a digital-first world." },
                { icon: Gavel, title: "Real Estate", desc: "Comprehensive counsel for commercial development, leasing, and zoning matters." },
              ].map((practice, index) => (
                <PracticeArea key={index} {...practice} />
              ))}
            </motion.div>
          </div>
        </section>
        </article>
        
        <aside>
        {/* <RecentCases /> */}
        <Testimonials />
        <TeamSection />
        </aside>
        {/* CTA Section */}
        <section id="contact" className="py-32 bg-slate-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-slate-800/20 skew-x-12 translate-x-1/4" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left">
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                  Ready to protect your legacy?
                </h2>
                <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto lg:mx-0">
                  Schedule a consultation with our senior partners to discuss your legal needs in strict confidence.
                </p>
                <div className="flex flex-col gap-6 justify-center lg:justify-start">
                  {[
                    { icon: Phone, text: "+8801712218542" },
                    { icon: Mail, text: "aviationskyspace@gmail.com" },
                    { icon: MapPin, text: "89/1,New West Monipur,Mirpur-2, Dhaka-1216" }
                  ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-slate-300 justify-center lg:justify-start">
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-500">
                          <item.icon size={18} />
                        </div>
                        <span className="text-lg">{item.text}</span>
                      </div>
                  ))}
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 md:p-10 shadow-2xl relative rounded-lg"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 rounded-t-md" />
                <h3 className="font-serif text-2xl text-slate-900 mb-6">Request Evaluation</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-slate-400 transition-shadow" />
                    <input type="text" placeholder="Last Name" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-slate-400 transition-shadow" />
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-slate-400 transition-shadow" />
                  <textarea rows={4} placeholder="How can we help?" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-slate-400 transition-shadow resize-y min-h-[96px]"></textarea>
                  <button className="w-full bg-amber-600 text-white font-bold uppercase tracking-widest text-sm py-3 hover:bg-amber-700 transition-colors mt-4 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                    Submit Request
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}