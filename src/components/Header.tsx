import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#services", label: t("header.services", "サービス紹介") },
    { href: "#about", label: t("header.about", "会社情報") },
    { href: "#message", label: t("header.message", "代表メッセージ") },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/70 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-20 px-6">
        {/* ロゴ */}
        <a href="#" className="flex items-center gap-2">
          <img
            src={t("header.logoImg", "/img/common/logo.png")}
            alt={t("header.logo", "会社ロゴ")}
            width={38}
            height={40}
            fetchPriority="high"
            className="h-10 w-auto"
          />
        </a>

        {/* ナビゲーション + 言語切替 */}
        <div className="hidden md:flex items-center gap-3">
          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-3 py-1.5 text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* 言語切替 */}
          <div className="flex items-center rounded-full border border-slate-200 bg-white/80 p-1 backdrop-blur-md shadow-sm">
            <button
              onClick={() => i18n.changeLanguage("ja")}
              className={`px-3 py-1 text-xs rounded-full transition-all font-bold ${
                i18n.language === "ja"
                  ? "bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              JA
            </button>
            <button
              onClick={() => i18n.changeLanguage("en")}
              className={`px-3 py-1 text-xs rounded-full transition-all font-bold ${
                i18n.language === "en"
                  ? "bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              EN
            </button>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="ml-1 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 px-4 py-2 text-xs font-bold text-white shadow-sm hover:shadow-md transition-shadow"
          >
            お問い合わせ
          </a>
        </div>

        {/* モバイル：言語切替のみ */}
        <div className="md:hidden flex items-center rounded-full border border-slate-200 bg-white/80 p-1 backdrop-blur-md shadow-sm">
          <button
            onClick={() => i18n.changeLanguage("ja")}
            className={`px-2.5 py-1 text-xs rounded-full font-bold ${
              i18n.language === "ja"
                ? "bg-gradient-to-r from-sky-500 to-emerald-500 text-white"
                : "text-slate-500"
            }`}
          >
            JA
          </button>
          <button
            onClick={() => i18n.changeLanguage("en")}
            className={`px-2.5 py-1 text-xs rounded-full font-bold ${
              i18n.language === "en"
                ? "bg-gradient-to-r from-sky-500 to-emerald-500 text-white"
                : "text-slate-500"
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
