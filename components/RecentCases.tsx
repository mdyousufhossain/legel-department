import { ArrowUpRight, CheckCircle2 } from "lucide-react"; // Import this
import { motion } from "framer-motion";

const RecentCases = () => {
  const cases = [
    {
      category: "Mergers & Acquisitions",
      title: "TechGiant Acquisition of AI Startup",
      result: "$4.2B Deal Secured",
      desc: "Navigated complex antitrust regulations across three continents to close the decade's largest tech merger."
    },
    {
      category: "Intellectual Property",
      title: "PharmaCorp Patent Defense",
      result: "Case Dismissed",
      desc: "Successfully defended a key pharmaceutical patent against generic infringement, preserving market exclusivity."
    },
    {
      category: "Corporate Litigation",
      title: "Estate Realignment",
      result: "$120M Asset Recovery",
      desc: "Recovered misappropriated assets for a multinational real estate consortium through aggressive litigation."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-2">Recent Case Results</h2>
            <div className="h-1 w-24 bg-amber-500" />
          </div>
          <button className="hidden md:flex items-center gap-2 text-slate-900 font-bold uppercase tracking-wider text-xs border-b border-slate-900 pb-1 hover:text-amber-600 hover:border-amber-600 transition-all">
            View Case Archive
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 border-l-4 border-amber-500 shadow-sm hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{c.category}</span>
                <ArrowUpRight className="text-slate-300 group-hover:text-amber-500 transition-colors" size={20} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                {c.title}
              </h3>
              <p className="text-emerald-700 font-bold text-sm mb-4 flex items-center gap-2">
                <CheckCircle2 size={14} /> {c.result}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentCases;