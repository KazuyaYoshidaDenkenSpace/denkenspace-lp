import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const Services: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const { t } = useTranslation();

  // 配列を JSON から取得
  const services = t("services.items", { returnObjects: true }) as {
    title: string;
    desc: string;
    img: string;
  }[];

  return (
    <section className="relative w-full max-w-6xl px-6 py-12 flex flex-col items-center">
      {/* 背景（hoverで切り替わる） */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            key={selectedImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{
              backgroundImage: `url(${selectedImg})`,
            }}
          />
        )}
      </AnimatePresence>

      {/* 背景の暗めオーバーレイ（選択中のみ） */}
      {selectedImg && <div className="absolute inset-0 -z-10 bg-black/40" />}

      {/* サービス一覧（常に表示） */}
      <div className="w-full mt-6">
        <div className="grid md:grid-cols-3 gap-8 w-full">
          {services.map((s, i) => (
            <div
              key={i}
              className="relative p-6 rounded shadow text-center mx-auto h-48 flex flex-col justify-center items-center 
                         bg-white/80 hover:bg-white/60 transition cursor-pointer"
              onMouseEnter={() => setSelectedImg(s.img)}
              onMouseLeave={() => setSelectedImg(null)}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  {s.title}
                </h3>
                <p className="text-gray-700">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
