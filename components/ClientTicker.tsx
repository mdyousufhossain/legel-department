import { ShieldCheck } from "lucide-react";

const ClientTicker = () => {
  // Infinite scroll ticker for client logos
  return (
    <div className="bg-slate-900 border-y border-white/5 py-8 overflow-hidden">
      <div className="container mx-auto px-6 mb-4">
        <p className="text-center text-slate-500 text-xs uppercase tracking-widest">Trusted by Industry Leaders</p>
      </div>
      <div className="flex gap-12 animate-scroll whitespace-nowrap min-w-full justify-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        {/* Mock Logos - repeated for infinite effect */}
        {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-2 text-white font-serif text-xl font-bold mx-8">
               <ShieldCheck className="text-amber-600" /> CORP<span className="text-slate-500">INC.</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ClientTicker;