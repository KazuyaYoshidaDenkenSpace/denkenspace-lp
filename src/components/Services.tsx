import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const Services: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const { t } = useTranslation();

  // i18n から配列を安全に取得
  const services =
    (t("services.items", { returnObjects: true }) as
      | { title: string; desc: string; img: string; url?: string; urlLabel?: string }[]
      | undefined) || [];

  return (
    <section className="relative w-full max-w-6xl px-6 py-16 flex flex-col items-center bg-gradient-to-b from-slate-900 to-slate-800 rounded-3xl my-12 shadow-2xl">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-3xl" />
      
      {/* 背景の切り替え */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            key={selectedImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 -z-10 bg-cover bg-center rounded-3xl"
            style={{ backgroundImage: `url(${selectedImg})` }}
          />
        )}
      </AnimatePresence>

      {/* 背景オーバーレイ */}
      {selectedImg && <div className="absolute inset-0 -z-10 bg-black/60 rounded-3xl" />}

      {/* サービス一覧 */}
      <div className="w-full mt-6 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {services.map((s, i) => (
            <a
              key={i}
              href={s.url || "#"}
              className="relative p-6 rounded-xl text-center mx-auto h-48 flex flex-col justify-center items-center
                         bg-gradient-to-br from-cyan-500/20 to-purple-600/20 hover:from-cyan-500/40 hover:to-purple-600/40 transition-all duration-300 cursor-pointer border border-white/20 shadow-xl hover:shadow-2xl block"
              onMouseEnter={() => setSelectedImg(s.img)}
              onMouseLeave={() => setSelectedImg(null)}
            >
              <div className="relative z-10 pointer-events-none">
                <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">
                  {s.title}
                </h3>
                <p className="text-slate-200 font-medium drop-shadow">{s.desc}</p>
                {s.url && (
                  <p className="text-cyan-300 text-sm mt-3 font-semibold">
                    {s.urlLabel || s.url}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
