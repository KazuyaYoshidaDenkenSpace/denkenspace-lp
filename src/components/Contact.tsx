import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

type FormConfig = {
  action: string;
  entry: {
    name: string;
    phone: string;
    email: string;
    message: string;
  };
};

const FORMS: Record<string, FormConfig> = {
  ja: {
    action:
      "https://docs.google.com/forms/d/e/1FAIpQLSfsGamtECjxKoT7jXvldlZwcyM6ad_u0uvIOzQZSrnOYbT5aQ/formResponse",
    entry: {
      name: "entry.1283626922",
      phone: "entry.548507707",
      email: "entry.469967646",
      message: "entry.1104024526",
    },
  },
  en: {
    action:
      "https://docs.google.com/forms/d/e/1FAIpQLSe2dbxOXAbnRDIwLw5SG5IWFebYRjKGL_Sx9zPuMMaPnJnvig/formResponse",
    entry: {
      name: "entry.1283626922",
      phone: "entry.548507707",
      email: "entry.1951784645",
      message: "entry.1104024526",
    },
  },
};

type Status = "idle" | "sending" | "success" | "error";

const Contact: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const form = FORMS[i18n.language] || FORMS.ja;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !message.trim()
    ) {
      return;
    }

    setStatus("sending");
    const body = new FormData();
    body.append(form.entry.name, name);
    body.append(form.entry.email, email);
    body.append(form.entry.phone, phone);
    body.append(form.entry.message, message);

    try {
      await fetch(form.action, { method: "POST", mode: "no-cors", body });
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  const disabled = status === "sending";

  return (
    <section className="w-full bg-gradient-to-b from-white to-sky-50 py-24">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.3em] text-sky-600 mb-3">
            CONTACT
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {t("contact.title", "お問い合わせ")}
          </h2>
          <div className="mt-6 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
          <p className="mt-6 text-slate-600">
            {t(
              "contact.subtitle",
              "お気軽にご相談ください。通常2営業日以内にご返信いたします。",
            )}
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="relative rounded-3xl border border-slate-200 bg-white shadow-lg p-6 md:p-10 space-y-6"
        >
          <div
            style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
            aria-hidden="true"
          >
            <label>
              Leave this field empty
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label
              htmlFor="contact-name"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              {t("contact.name", "お名前")}{" "}
              <span className="text-rose-500">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              required
              disabled={disabled}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("contact.namePlaceholder", "山田 太郎")}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/15 disabled:bg-slate-50 transition"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                {t("contact.email", "メールアドレス")}{" "}
                <span className="text-rose-500">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                required
                disabled={disabled}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t(
                  "contact.emailPlaceholder",
                  "example@email.com",
                )}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/15 disabled:bg-slate-50 transition"
              />
            </div>

            <div>
              <label
                htmlFor="contact-phone"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                {t("contact.phone", "電話番号")}{" "}
                <span className="text-rose-500">*</span>
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                disabled={disabled}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t("contact.phonePlaceholder", "090-1234-5678")}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/15 disabled:bg-slate-50 transition"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              {t("contact.message", "お問い合わせ内容")}{" "}
              <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="contact-message"
              required
              disabled={disabled}
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t(
                "contact.messagePlaceholder",
                "ご相談内容をご記入ください",
              )}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/15 disabled:bg-slate-50 transition resize-y"
            />
          </div>

          <div className="flex flex-col items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={disabled || status === "success"}
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 px-8 py-4 text-base font-bold text-white shadow-[0_10px_30px_-5px_rgba(14,165,233,0.5)] transition-all hover:shadow-[0_20px_50px_-5px_rgba(14,165,233,0.7)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_10px_30px_-5px_rgba(14,165,233,0.5)]"
            >
              {status === "sending" ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  <span>{t("contact.submitting", "送信中...")}</span>
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span>{t("contact.submit", "送信する")}</span>
                </>
              )}
            </button>

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {t(
                    "contact.success",
                    "送信しました。お返事までしばらくお待ちください。",
                  )}
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700"
                >
                  <AlertCircle className="h-4 w-4" />
                  {t(
                    "contact.error",
                    "送信に失敗しました。少し時間を置いて再度お試しください。",
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
