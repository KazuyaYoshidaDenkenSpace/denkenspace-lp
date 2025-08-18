import React from "react";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  // i18n の機能を呼び出し
  // t: 翻訳関数, i18n: 言語情報や切替を扱う
  const { t, i18n } = useTranslation();

  return (
    // ヘッダー全体
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-700 via-blue-900 to-indigo-900 shadow-lg">
      {/* 横幅を max-w-6xl に制限しつつ中央寄せ。高さ h-20 */}
      <div className="max-w-6xl mx-auto flex items-center justify-between h-20 px-6">
        {/* 左側：ロゴ */}
        <div className="text-3xl font-extrabold text-white tracking-wide">
          {/* 翻訳キー "header.logo" があれば使い、なければ "会社ロゴ" を表示 */}
          {t("header.logo", "会社ロゴ")}
        </div>

        {/* 右側：ナビゲーション + 言語切替ボタン */}
        <div className="flex items-center space-x-6">
          {/* ナビゲーションメニュー */}
          <nav className="space-x-8">
            <a
              href="#services"
              className="text-white hover:text-gray-300 font-medium transition-colors duration-300"
            >
              {t("header.services", "サービス紹介")}
            </a>
            <a
              href="#about"
              className="text-white hover:text-gray-300 font-medium transition-colors duration-300"
            >
              {t("header.about", "会社情報")}
            </a>
            <a
              href="#message"
              className="text-white hover:text-gray-300 font-medium transition-colors duration-300"
            >
              {/* nav.message というキーを使う（header と nav のキーを分ける方針） */}
              {t("nav.message", "代表メッセージ")}
            </a>
            <a
              href="#contact"
              className="text-white hover:text-gray-300 font-medium transition-colors duration-300"
            >
              {t("header.contact", "お問い合わせ")}
            </a>
          </nav>

          {/* 言語切替ボタン */}
          <div className="flex space-x-2">
            {/* 日本語ボタン */}
            <button
              onClick={() => i18n.changeLanguage("ja")}
              className={`px-3 py-1 text-sm rounded transition ${
                i18n.language === "ja"
                  ? "bg-yellow-400 text-black font-bold" // 選択中は黄色で強調
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              日本語
            </button>

            {/* 英語ボタン */}
            <button
              onClick={() => i18n.changeLanguage("en")}
              className={`px-3 py-1 text-sm rounded transition ${
                i18n.language === "en"
                  ? "bg-yellow-400 text-black font-bold" // 選択中は黄色で強調
                  : "bg-green-500 text-white hover:bg-green-600"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
