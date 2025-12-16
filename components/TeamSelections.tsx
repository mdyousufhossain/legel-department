'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";


const TeamSection = () => {
  const team = [
    { name: "Sarah Jenkins", role: "Managing Partner", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" },
    { name: "Michael Ross", role: "Litigation Lead", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" },
    { name: "Elena Rodriguez", role: "IP Specialist", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600" },
  ];

  return (
    <section id="attorneys" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2 block">Our Attorneys</span>
          <h2 className="font-serif text-4xl text-slate-900 mb-4">The Minds Behind the Wins</h2>
          <p className="text-slate-500">Former federal prosecutors and top-tier corporate counsel dedicated to your success.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative h-[450px] w-full overflow-hidden bg-slate-100"
            >
              <Image src={member.img} alt={member.name} fill className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="border-l-2 border-amber-500 pl-4 mb-2">
                  <h3 className="text-2xl font-serif text-white">{member.name}</h3>
                  <p className="text-amber-400 text-xs uppercase tracking-wider">{member.role}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex gap-4 mt-4">
                    <button className="text-white hover:text-amber-500"><Linkedin size={20}/></button>
                    <button className="text-white hover:text-amber-500"><Mail size={20}/></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;