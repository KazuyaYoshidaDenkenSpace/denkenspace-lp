import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Quote } from "lucide-react";

const Message: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.3em] text-sky-600 mb-3">
            MESSAGE
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {t("message.title", "代表メッセージ")}
          </h2>
          <div className="mt-6 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 via-white to-emerald-50 border border-slate-200 shadow-[0_10px_40px_-15px_rgba(14,165,233,0.25)]"
        >
          {/* 装飾オーブ */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-emerald-200/40 blur-3xl" />

          <div className="relative grid md:grid-cols-[260px_1fr] gap-8 p-8 md:p-12 items-center">
            {/* 写真 */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-sky-400 to-emerald-400 opacity-30 blur" />
                <img
                  src="/img/hp/ceo.jpg"
                  alt="代表写真"
                  width={224}
                  height={224}
                  loading="lazy"
                  decoding="async"
                  className="relative w-44 h-44 md:w-56 md:h-56 rounded-full object-cover ring-4 ring-white shadow-lg"
                />
              </div>
            </div>

            {/* テキスト */}
            <div>
              <Quote className="h-8 w-8 text-sky-300 mb-3" />
              <p className="text-base md:text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                {t("message.body")}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-200" />
                <p className="font-bold text-slate-900">
                  {t("message.ceo", "代表取締役 吉田 利也")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Message;
