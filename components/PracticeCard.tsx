/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import { practiceAreasMini } from "@/const";
// Updated PracticeCard component
import { cubicBezier, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease:  cubicBezier(0.22, 1, 0.36, 1) } }
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 }
//   }
// };

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  // @ts-ignore
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) } }
};

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 }
//   }
// };

const PracticeCard = ({ area, slug }: { area: typeof practiceAreasMini[0], slug: string }) => (
  <motion.div 
    variants={fadeInUp}
    className="group bg-white border border-slate-200 p-8 hover:border-amber-500/30 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
  >
    <div className="mb-6 flex justify-between items-start">
      <div className="w-14 h-14 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
        <area.icon size={28} />
      </div>
    </div>
    
    <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">{area.title}</h3>
    <p className="text-slate-500 mb-8 text-sm leading-relaxed min-h-[60px]">{area.description}</p>
    
    <div className="mt-auto">
      <div className="space-y-3 mb-8">
        {area.capabilities.map((cap, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            {cap}
          </div>
        ))}
      </div>
      
      <Link href={`/practice-areas/${slug}`} className="inline-flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest text-xs group-hover:gap-3 transition-all">
        Case Studies <ArrowRight size={14} />
      </Link>
    </div>
  </motion.div>
);

export default PracticeCard;