'use client'

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? "bg-slate-900/95 backdrop-blur-md py-3 shadow-xl border-b border-white/5" : "bg-gradient-to-b from-slate-900/80 to-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* --- LOGO & TITLE SECTION --- */}
        <div className="relative z-50">
          <Link href={'/'} className="flex items-center gap-3 group">
            {/* Logo Image */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/logo.png" 
                alt="Sky Space Aviation" 
                fill
                className="object-contain" 
              />
            </div>
            
            {/* Title Text */}
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-bold text-white leading-none tracking-tight group-hover:text-amber-500 transition-colors duration-300">
                SKY SPACE
              </span>
              <span className="text-[10px] md:text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-slate-400 group-hover:text-white transition-colors duration-300">
                Aviation & Legal
              </span>
            </div>
          </Link>
        </div>
        
        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8 text-slate-300 text-sm font-medium tracking-wide">
            {['Practice Areas', 'Clients', 'About'].map((item) => (
                <Link 
                key={item} 
                href={`/${item.toLowerCase().replace(' ', '-')}`} 
                className="relative py-1 hover:text-white transition-colors group"
                >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            ))}
            </div>

            <Link href={'/contact'} className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-lg shadow-amber-900/20 hover:shadow-amber-900/40">
                Free Consultation <ArrowRight size={14} />
            </Link>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white relative z-50 p-2 hover:bg-white/10 rounded-full transition-colors">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-slate-900 z-40 flex flex-col pt-28 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {['Practice Areas', 'Clients', 'About'].map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link 
                    onClick={() => setIsOpen(false)} 
                    href={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="block text-2xl font-serif text-white hover:text-amber-500 transition-colors"
                  >
                    {item}
                  </Link>
                  <div className="h-px w-full bg-slate-800 mt-4" />
                </motion.div>
              ))}

              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3 }}
              >
                  <Link href="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 w-full mt-8 bg-amber-600 py-4 text-white text-sm font-bold uppercase tracking-widest rounded-sm">
                    Get Consultation <ArrowRight size={16} />
                  </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;