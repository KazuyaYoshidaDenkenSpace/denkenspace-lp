import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900/50 to-slate-900 py-12 text-center border-t border-cyan-500/30 shadow-xl">
      <div className="space-x-4 mb-4">
        <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold transition">
          Twitter
        </a>
        <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold transition">
          Facebook
        </a>
        <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold transition">
          Instagram
        </a>
      </div>
      <p className="text-slate-400 text-sm">
        {t(
          "footer.copy",
          "© 2025 株式会社デンケンスペース. All rights reserved."
        )}
      </p>
    </footer>
  );
};

export default Footer;
