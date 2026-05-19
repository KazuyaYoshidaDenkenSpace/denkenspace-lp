import React from "react";
import { motion } from "framer-motion";

const techs = [
  "PHP 8.4",
  "Laravel 12",
  "Next.js 16",
  "React 19",
  "TypeScript",
  "AWS",
  "Rust",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Stripe",
  "Tailwind CSS",
  "Filament",
  "Claude API",
];

const TechMarquee: React.FC = () => {
  return (
    <section className="relative w-full bg-slate-900 py-6 overflow-hidden border-y border-slate-800">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10" />

      <div className="flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0 gap-12 pr-12 whitespace-nowrap"
        >
          {[...techs, ...techs].map((t, i) => (
            <span
              key={i}
              className="text-lg md:text-xl font-bold tracking-wide text-slate-500 hover:text-cyan-300 transition-colors flex items-center gap-12"
            >
              {t}
              <span className="text-slate-700">◆</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechMarquee;
