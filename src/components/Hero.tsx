import React from "react";
import { motion } from "framer-motion";

type HeroProps = {
  title?: string;
  subtitle?: string;
};

const Hero: React.FC<HeroProps> = ({
  title = "株式会社デンケンスペース",
  subtitle = "ソフトウェア開発・イベント企画",
}) => {
  return (
    <section className="relative w-full h-[600px] flex flex-col items-center justify-center text-center">
      {/* さわやか水色グラデ */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-cyan-300 z-0"></div>

      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-md"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.h1>

      <motion.p
        className="mt-6 text-xl md:text-2xl text-gray-100 drop-shadow-sm"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {subtitle}
      </motion.p>
    </section>
  );
};

export default Hero;
