import { Clock, Trophy, Target } from "lucide-react"; // Make sure to import these
import { motion } from "framer-motion";


const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Trophy,
      title: "Unmatched Track Record",
      desc: "We don't just participate in the legal process; we define it. Our history of landmark victories speaks for itself."
    },
    {
      icon: Clock,
      title: "24/7 Global Response",
      desc: "Legal crises don't adhere to business hours. Neither do we. Our rapid response teams are always active."
    },
    {
      icon: Target,
      title: "Strategic Foresight",
      desc: "We look beyond the immediate dispute to secure your long-term commercial interests and reputation."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-2 block">The Lexicon Difference</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Why Industry Leaders Trust Us</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors rounded-sm group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <item.icon size={80} />
              </div>
              <div className="w-14 h-14 bg-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="text-white" size={28} />
              </div>
              <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;