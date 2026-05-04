import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // 言語ごとのフォームURL
  const formUrls: Record<string, string> = {
    ja: "https://forms.gle/ufZnNjB824YsAasb9?embedded=true", // 日本語版
    en: "https://forms.gle/Ebivc1YeiqT97Qvh7?embedded=true", // 英語版
  };

  const currentFormUrl = formUrls[i18n.language] || formUrls.ja;

  return (
    <section className="w-full max-w-6xl px-6 py-12 flex flex-col items-center">
      <button
        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {t("contact.title", "お問い合わせ")}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full mt-6 overflow-hidden"
          >
            <div className="max-w-3xl mx-auto px-6">
              <iframe
                src={currentFormUrl}
                width="100%"
                height={800}
                title={t("contact.title", "お問い合わせフォーム")}
              >
                読み込んでいます…
              </iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
