'use client'

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, PhoneCall } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll handler
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Practice Areas', href: '/practice-areas' },
    { name: 'Solicitor', href: '/attorneys' },
    { name: 'Clients', href: '/clients' },
    { name: 'About', href: '/about' },
  ];

  const phoneNumber = "+8801712218542";

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
          scrolled 
            ? "bg-slate-950/90 backdrop-blur-lg py-3 shadow-2xl border-b border-white/10" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* --- LOGO --- */}
          <Link href="/" className="relative z-50 flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 transition-transform duration-500 group-hover:rotate-[10deg]">
              <Image 
                src="/logo-min.png" 
                alt="Sky Space Aviation" 
                fill
                className="object-contain"
                priority 
              />
            </div>
            {/* Sky space aviation and legal consultancy firm */}
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-bold text-white leading-none tracking-tight">
                SKY SPACE
              </span>
              <span className="text-[9px] md:text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-amber-500">
                Aviation & Legal Consultancy Firm
              </span>
            </div>
          </Link>
          
          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-8 text-slate-200 text-sm font-semibold tracking-wide">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="relative py-2 hover:text-white transition-colors group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* CHANGED: CTA Button to Phone Call */}
            <a 
              href={`tel:${phoneNumber}`}
              className="group flex items-center gap-2 bg-amber-600 hover:bg-white hover:text-slate-900 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 shadow-xl shadow-amber-900/20"
            >
              Call Now
              <PhoneCall size={14} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white relative z-50 p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950 z-40 md:hidden overflow-hidden"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} 
            />

            <div className="flex flex-col h-full pt-32 px-10">
              <div className="flex flex-col space-y-8">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link 
                      onClick={() => setIsOpen(false)} 
                      href={link.href} 
                      className="group flex items-center justify-between text-3xl font-serif text-slate-100"
                    >
                      {link.name}
                      <ArrowRight className="text-amber-500 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                    <div className="h-px w-full bg-slate-800 mt-4" />
                  </motion.div>
                ))}

                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.4 }}
                   className="pt-10"
                >
                  {/* CHANGED: Mobile CTA to Phone Call */}
                  <a 
                    href={`tel:${phoneNumber}`}
                    onClick={() => setIsOpen(false)} 
                    className="flex items-center justify-center gap-3 w-full bg-amber-600 py-5 text-white text-sm font-bold uppercase tracking-widest rounded-sm active:scale-95 transition-transform"
                  >
                    <PhoneCall size={18} />
                    Call Now
                  </a>
                  <p className="text-center text-slate-500 text-[10px] mt-8 uppercase tracking-widest">
                    Available 24/7 for Aviation Emergencies
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;