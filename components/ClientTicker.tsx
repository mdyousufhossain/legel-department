"use client";

import React from "react";
import { ShieldCheck, Plane, HardHat, Building2, Activity } from "lucide-react";

const clients = [
  { name: "SKY SPACE ENGINEERING", icon: HardHat },
  { name: "SKY SPEED AVIATION", icon: Plane },
  { name: "MEDIBEST PHARMA", icon: Activity },
  { name: "ROKOMARY.COM", icon: Building2 },
  { name: "QUASAR GLOBAL", icon: ShieldCheck },
  { name: "SRITY DENTAL CLINIC", icon: Activity },
  { name: "AYAT INTERNATIONAL", icon: Plane },
  { name: "NUR POWER ENGINEERING", icon: HardHat },
];

const ClientTicker = () => {
  return (
    <div className="bg-slate-900 border-y border-white/5 py-10 overflow-hidden relative group">
      {/* Optional: Gradient Overlays for smooth fade in/out */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10" />

      <div className="container mx-auto px-6 mb-8">
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-8 bg-amber-500/50" />
          <p className="text-center text-slate-400 text-xs uppercase tracking-[0.2em] font-medium">
            Recognized by Global Enterprises
          </p>
          <div className="h-[1px] w-8 bg-amber-500/50" />
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="flex overflow-hidden select-none">
        <div className="flex gap-16 animate-scroll min-w-full items-center py-2">
          {/* We duplicate the list to ensure seamless looping */}
          {[...clients, ...clients].map((client, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300 grayscale opacity-40 hover:opacity-100 hover:grayscale-0"
            >
              <client.icon className="text-amber-600 w-5 h-5" />
              <span className="font-serif text-lg font-bold tracking-tight whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        /* Pause on hover for better UX */
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ClientTicker;