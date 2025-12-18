/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const AboutSection = () => {
  // Animation variants for cleaner code
  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern for Texture */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- Left Column: Visuals --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            // @ts-ignore
            variants={fadeLeft}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border border-slate-100">
               {/* Aspect Ratio Wrapper */}
               <div className="aspect-[4/5] relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
                    alt="Legal Team Strategy Meeting" 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
               </div>
            </div>

            {/* Floating "Experience" Badge */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-slate-900 text-white p-6 rounded-sm shadow-xl max-w-[200px] hidden md:block">
              <p className="text-4xl font-serif font-bold text-amber-500 mb-1">35+</p>
              <p className="text-xs uppercase tracking-widest leading-relaxed opacity-80">
                Years of Legal Excellence
              </p>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-10 -left-10 w-full h-full border-[3px] border-slate-100 rounded-lg -z-0 transform -translate-x-4 translate-y-4" />
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-amber-50 rounded-full blur-3xl -z-0 opacity-60" />
          </motion.div>

          {/* --- Right Column: Content --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            // @ts-ignore
            variants={fadeRight}
          >
            {/* Header Tag */}
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-8 bg-amber-500" />
              <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs">
                About Our Firm
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-4xl lg:text-5xl text-slate-900 mb-6 leading-[1.15]">
              Bridging traditional rigor with <br className="hidden md:block"/>
              <span className="relative inline-block">
                <span className="relative z-10 italic text-slate-600">modern agility.</span>
                {/* Yellow highlighter effect */}
                <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-200/40 -z-0 -rotate-1"></span>
              </span>
            </h2>

            {/* Main Text */}
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-8">
              <p>
                Founded in 1985 in the heart of Dhaka, Sky Space Aviation & Legal started with a singular mission: to provide uncompromising defense for the regions emerging enterprises.
              </p>
              <p>
                Today, we operate at the intersection of law and technical aviation. We dont just interpret the regulations; we anticipate how they impact your operational bottom line.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-100 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={18} className="text-amber-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Success Rate</span>
                </div>
                <h4 className="text-4xl font-serif font-bold text-slate-900">98%</h4>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={18} className="text-amber-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Value Secured</span>
                </div>
                <h4 className="text-4xl font-serif font-bold text-slate-900">$5B+</h4>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/about" 
                className="group inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-amber-600 transition-colors duration-300 rounded-sm"
              >
                Our History
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;