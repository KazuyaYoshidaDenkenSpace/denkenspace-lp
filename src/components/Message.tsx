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
        className="px-6 py-4 bg-[#2B6CB0] text-white font-bold rounded 
             hover:bg-[#234E89] transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {t("message.button", "代表メッセージ")}
      </button>

      {/* アニメーション付きで開閉 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 overflow-hidden bg-white p-6 rounded-lg shadow"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* 写真 */}
              <div className="w-full md:w-1/3 flex justify-center">
                <img
                  src="/img/ceo.png"
                  alt="代表写真"
                  className="rounded-2xl shadow-lg w-48 h-48 object-cover md:w-64 md:h-64"
                />
              </div>

              {/* テキスト */}
              <div className="w-full md:w-2/3 text-left">
                <h2 className="text-2xl font-bold mb-6">
                  {t("message.title", "代表挨拶")}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {t("message.body", "ここに代表の言葉が入ります。")}
                </p>
                <div className="mt-6 text-right">
                  <p className="font-semibold">
                    {t("message.ceo", "代表取締役 吉田 利也")}
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
