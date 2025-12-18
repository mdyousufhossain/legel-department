'use client';

import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import Image from "next/image";

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 2.5, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] bg-slate-900 flex items-center justify-center"
    >
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="flex items-center gap-2"
        >
          <Image src="/logo.png" alt="Sky Space Aviation Logo" width={40} height={40} />
          <span className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Sky Space Aviation<span className="text-amber-500">.</span>
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};