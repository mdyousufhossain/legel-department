"use client";
import { useParams, notFound } from "next/navigation";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { practiceAreasLarge } from "@/const";

export default function PracticeAreaDetail() {
  const { slug } = useParams();
  const area = practiceAreasLarge.find((a) => a.slug === slug);
  if (!area) return notFound();

  return (
    <main className="bg-white min-h-screen">
      {/* Detail Hero */}
      <section className="bg-slate-900 pt-32 pb-20 text-white">
        <div className="container mx-auto px-6">
          <Link href="/practice-areas" className="inline-flex items-center gap-2 text-amber-500 mb-8 hover:text-amber-400 transition-colors">
            <ArrowLeft size={16} /> Back to Expertise
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            {area.title}
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            {area.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Overview</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {area.detailedContent}
              </p>
              
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold mb-6">Key Areas of Focus</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {area.capabilities.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                      <CheckCircle2 className="text-amber-600" size={18} />
                      <span className="text-slate-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 p-8 bg-slate-900 rounded-2xl text-white">
                <h3 className="text-2xl font-serif mb-4">Request Consultation</h3>
                <p className="text-slate-400 mb-6 text-sm">
                  Speak with our {area.title} specialists regarding your legal requirements.
                </p>
                <Link href="/contact" className="w-full bg-amber-600 py-4 font-bold uppercase tracking-widest text-xs hover:bg-amber-700 transition-all">
                  Contact an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}