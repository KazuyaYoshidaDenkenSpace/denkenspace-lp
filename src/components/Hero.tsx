import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-screen h-[600px] overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* グラデーション背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20" />
      {/* テクスチャ背景（オプション） */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-10"
        style={{ backgroundImage: `url(/img/hp/washi-texture.png)` }}
      />

      {/* コンテンツ */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <motion.h1 
          className="text-6xl md:text-7xl font-black text-white drop-shadow-2xl tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("hero.title")
            .split("\n")
            .map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {/* スマホだけ改行、PCでは改行しない */}
                {i !== t("hero.title").split("\n").length - 1 && (
                  <br className="block md:hidden" />
                )}
                {/* PCでは半角スペースを入れてつなげる */}
                {i !== t("hero.title").split("\n").length - 1 && (
                  <span className="hidden md:inline">&nbsp;</span>
                )}
              </React.Fragment>
            ))}
        </motion.h1>

        <motion.p
          className="mt-6 text-xl md:text-2xl text-cyan-200 font-semibold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {t("hero.subtitle")}
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
