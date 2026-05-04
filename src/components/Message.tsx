import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const Message: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <section
      id="message"
      className="w-full max-w-5xl mx-auto px-6 py-16 text-center"
    >
      {/* ボタンを押すと代表メッセージが開閉する */}
      <button
        className="px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {t("message.title", "代表メッセージ")}
      </button>

      {/* アニメーション付きで開閉 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-2xl border border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* 写真 */}
              <div className="w-full md:w-1/3 flex justify-center">
                <img
                  src="/img/hp/ceo.png"
                  alt="代表写真"
                  className="rounded-2xl shadow-lg w-48 h-48 object-cover md:w-64 md:h-64"
                />
              </div>

              {/* テキスト */}
              <div className="w-full md:w-2/3 text-left">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  {t("message.title", "代表挨拶")}
                </h2>
                <p className="text-lg text-slate-200 leading-relaxed whitespace-pre-line">
                  {t("message.body", "ここに代表の言葉が入ります。")}
                </p>
                <div className="mt-6 text-right">
                  <p className="font-semibold text-cyan-300">
                    {t("message.ceo", "代表取統逸 吉田 利也")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Message;
