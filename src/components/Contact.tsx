import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, ChevronDown } from "lucide-react";

const Contact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const formUrls: Record<string, string> = {
    ja: "https://forms.gle/ufZnNjB824YsAasb9?embedded=true",
    en: "https://forms.gle/Ebivc1YeiqT97Qvh7?embedded=true",
  };

  const currentFormUrl = formUrls[i18n.language] || formUrls.ja;

  return (
    <section className="w-full bg-gradient-to-b from-white to-sky-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.3em] text-sky-600 mb-3">
            CONTACT
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {t("contact.title", "お問い合わせ")}
          </h2>
          <div className="mt-6 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
          <p className="mt-6 text-slate-600">
            お気軽にご相談ください。通常2営業日以内にご返信いたします。
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 px-8 py-4 text-base font-bold text-white shadow-[0_10px_30px_-5px_rgba(14,165,233,0.5)] transition-all hover:shadow-[0_20px_50px_-5px_rgba(14,165,233,0.7)] hover:-translate-y-0.5"
          >
            <Mail className="h-5 w-5" />
            <span>{isOpen ? "フォームを閉じる" : "フォームを開く"}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full mt-8 overflow-hidden"
            >
              <div className="rounded-3xl border border-slate-200 bg-white shadow-lg p-2">
                <iframe
                  src={currentFormUrl}
                  width="100%"
                  height={800}
                  title={t("contact.title", "お問い合わせフォーム")}
                  className="rounded-2xl"
                >
                  読み込んでいます…
                </iframe>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
