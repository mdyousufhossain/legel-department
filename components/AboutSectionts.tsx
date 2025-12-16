'use client';
import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] relative z-10">
              <Image 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
                alt="Boardroom Meeting" 
                fill
                className="object-cover rounded-sm shadow-2xl"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-10 -left-10 w-2/3 h-2/3 bg-slate-100 -z-0" />
            <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-amber-500/20 rounded-full -z-0" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-amber-500" />
              <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Our Firm</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6 leading-tight">
              Bridging traditional rigor with <br />
              <span className="italic text-slate-500">modern agility.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Founded in 1985 in the heart of Dhaka, Lexicon started with a singular mission: to provide uncompromising legal defense for the region's emerging enterprises.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Today, we operate globally, yet our core philosophy remains unchanged. We don't just interpret the law; we anticipate how it impacts your bottom line. Our team of 120+ attorneys specializes in turning regulatory complexity into competitive advantage.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-8">
              <div>
                <h4 className="text-4xl font-serif font-bold text-slate-900">98%</h4>
                <p className="text-xs uppercase tracking-wider text-slate-500 mt-1">Case Success Rate</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif font-bold text-slate-900">$5B+</h4>
                <p className="text-xs uppercase tracking-wider text-slate-500 mt-1">Value Secured</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;