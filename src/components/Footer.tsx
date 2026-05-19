import React from "react";
import { useTranslation } from "react-i18next";
import { Instagram } from "lucide-react";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/img/common/logo.png" alt="logo" className="h-8" />
          <p className="text-xs text-slate-500">
            {t("footer.copy", "© 2026 株式会社デンケンスペース. All rights reserved.")}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="Instagram"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:text-sky-600 hover:border-sky-300 transition-colors"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
