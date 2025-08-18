import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-200 py-8 text-center text-gray-700">
      <div className="space-x-4 mb-4">
        <a href="#" className="hover:text-blue-600">
          Twitter
        </a>
        <a href="#" className="hover:text-blue-600">
          Facebook
        </a>
        <a href="#" className="hover:text-blue-600">
          Instagram
        </a>
      </div>
      <p>
        {t(
          "footer.copy",
          "© 2025 株式会社デンケンスペース. All rights reserved."
        )}
      </p>
    </footer>
  );
};

export default Footer;
