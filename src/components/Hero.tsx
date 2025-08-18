import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-screen h-[600px] overflow-hidden">
      {/* 背景画像 */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(/img/washi-texture.png)` }}
      />
      <div className="absolute inset-0 bg-white/40" />

      {/* コンテンツ */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <motion.h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 drop-shadow-sm">
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
          className="mt-6 text-xl md:text-2xl text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {t("hero.subtitle")}
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
