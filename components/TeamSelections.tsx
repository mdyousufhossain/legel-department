"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Gavel, Scale, Briefcase, ShieldCheck } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};



const attorneys = [
  {
    name: "Md Rubayet Hossain Rakib",
    role: "Chief Legal Officer (CLO)",
    specialty: "Aviation & Commercial Expert",
    icon: Briefcase,
    education: [
      "LL.M in Intl. Air & Space Law (AAUB) - 2 Years",
      "LL.M, LL.B (Hon's)"
    ]
  },
{
     name: "Md Sabbir Ahammed",
    role: "Chief Executive Officer (CEO)",
    specialty: "Technical Operations",
    icon: ShieldCheck,
    education: [
      "LL.M in Maritime Law - 2 Years",
      "LL.M, LL.B (Hon's)",
      "Aviation Technical Expert"
    ],
  },
  {
    name: "Adv. Golam Zakaria Shakil",
    role: "Tax Advisor",
    specialty: "Dhaka Judges Court",
    icon: Scale,
    education: [
      "LL.M in Intl. Air & Space Law (AAUB) - 2 Years",
      "LL.M in Maritime Law - 2 Years",
      "LL.M, LL.B (Hon's)"
    ]
  },
  {
    name: "Adv. Abu Taher Rony",
    role: "Head of Criminal Law",
    specialty: "Supreme Court Practice",
    icon: Gavel,
    affiliation: "Bangladesh Supreme Court",
    education: [
      "LL.M, LL.B (Hon's)",
      "Criminal Defense Specialist"
    ]
  },
  {
    name: "Adv. Alamgir Hossain",
    role: "Head of Banking Law",
    specialty: "Supreme Court Practice",
    icon: Award,
    affiliation: "Bangladesh Supreme Court",
    education: [
      "LL.M, LL.B (Hon's)",
      "Financial Litigation Expert"
    ]
  }
];

const TeamSection = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl text-slate-900 mb-6">
            Meet Our Council
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-500 text-lg">
            Distinguished legal minds bringing decades of specialized academic and practical experience to your defense.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {attorneys.map((attorney, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="bg-slate-50 border border-slate-200 p-8 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
            >
              {/* Decorative Accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />

              <div className="flex flex-col h-full">
                {/* Header Section */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-amber-600 font-bold uppercase tracking-widest text-xs block mb-2">
                      {attorney.role}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      {attorney.name}
                    </h3>
                    {attorney.affiliation && (
                       <span className="inline-block mt-2 px-3 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded-full">
                         {attorney.affiliation}
                       </span>
                    )}
                  </div>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400 group-hover:text-amber-600 transition-colors">
                    <attorney.icon size={24} />
                  </div>
                </div>

                <div className="w-full h-px bg-slate-200 my-2" />

                {/* Education Section */}
                <div className="mt-4">
                   <div className="flex items-center gap-2 mb-3 text-slate-800 font-semibold text-sm">
                     <GraduationCap size={16} className="text-amber-500"/>
                     <span>Qualifications</span>
                   </div>
                   <ul className="space-y-2">
                     {attorney.education.map((edu, i) => (
                       <li key={i} className="text-slate-600 text-sm pl-6 relative">
                         <span className="absolute left-1 top-2 w-1.5 h-1.5 bg-slate-300 rounded-full" />
                         {edu}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;