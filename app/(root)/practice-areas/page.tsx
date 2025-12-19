"use client";

import { motion, cubicBezier } from "framer-motion";
import { 
  Briefcase, Scale, ShieldCheck, Gavel, FileText, 
  Globe, Landmark, Users, ArrowRight, CheckCircle2 ,Plane , Radio
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { practiceAreasMini } from "@/const";
import PracticeCard from "@/components/PracticeCard";

// Reusing your animation variants for consistency 
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// --- Data ---


// --- Components ---

const PageHero = () => (
  <section className="relative h-[60vh] flex items-center bg-slate-900 overflow-hidden">
    {/* Abstract Background */}
    <div className="absolute inset-0 opacity-20">
       <Image 
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
          alt="Library"
          fill
          className="object-cover"
       />
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40" />

    <div className="container mx-auto px-6 relative z-10 pt-20">
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={staggerContainer}
        className="max-w-4xl"
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
          <div className="h-[1px] w-12 bg-amber-500" />
          <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">Our Expertise</span>
        </motion.div>
        <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl text-white font-bold mb-6 leading-tight">
          Elite counsel for <br /> critical moments.
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-xl text-slate-300 max-w-2xl font-light">
          We bring deep industry knowledge and technical precision to every engagement, serving as trusted partners in your most complex legal challenges.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

const Methodology = () => (
  <section className="py-20 bg-white border-b border-slate-200">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">The Sky Space Aviation Approach</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            We dont believe in template solutions. Every case, transaction, and advisory role begins with a blank slate and a rigorous analysis of your specific commercial objectives.
          </p>
          <ul className="space-y-4">
            {[
              "Partner-led engagement teams",
              "Cross-disciplinary collaboration",
              "Rapid response protocols",
              "Commercial-first strategy"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                  <CheckCircle2 size={14} />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        {/* FIXED IMAGE SECTION BELOW */}
        <div className="relative h-[400px] bg-slate-100 rounded-lg overflow-hidden">
           <Image 
             src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
             alt="Legal Team Meeting"
             fill
             className="object-cover"
           />
        </div>
        
      </div>
    </div>
  </section>
);



export default function PracticeAreasPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Note: In a real app, Navbar would be in layout.tsx. 
         If you aren't using a layout file yet, import Navbar here.
      */}
      
      <PageHero />
      <Methodology />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {practiceAreasMini.map((area, index) => (
              <PracticeCard key={index} area={area} slug={`${area.slug}`} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl text-white mb-6">Need specialized counsel?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
            Our practice groups work collaboratively. If your legal matter intersects multiple disciplines, we build a custom team to handle it.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-amber-600 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-amber-700 transition-colors">
              Get in Touch
            </Link>
            <Link href="/attorneys" className="border border-slate-600 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:border-white transition-colors">
              Find an Attorney
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer would go here (or in layout.tsx) */}
    </main>
  );
}