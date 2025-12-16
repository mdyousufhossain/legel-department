'use client'

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";


 const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? "bg-slate-900/90 backdrop-blur-md py-3 shadow-lg border-b border-white/5" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="font-serif text-2xl font-bold text-white tracking-wide relative z-50">
          LEXICON<span className="text-amber-500">.</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-slate-300 text-sm font-medium tracking-wide">
          {['Practice Areas', 'Attorneys', 'Clients', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-amber-500 transition-colors">{item}</a>
          ))}
        </div>

        <button className="hidden md:flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 text-sm font-semibold transition-all">
          Free Consultation <ArrowRight size={16} />
        </button>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white relative z-50 p-2">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-slate-900 z-40 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6 text-xl font-serif text-white">
              {['Practice Areas', 'Attorneys', 'Clients', 'Contact'].map((item) => (
                <a key={item} onClick={() => setIsOpen(false)} href={`#${item.toLowerCase().replace(' ', '-')}`} className="block pb-2 border-b border-slate-800">{item}</a>
              ))}
              <button className="w-full mt-4 bg-amber-600 py-4 text-base font-sans font-bold uppercase tracking-widest">
                Get Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar