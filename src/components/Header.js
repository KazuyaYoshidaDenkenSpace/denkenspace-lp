import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
const Header = () => {
    // i18n の機能を呼び出し
    // t: 翻訳関数, i18n: 言語情報や切替を扱う
    const { t, i18n } = useTranslation();
    return (
    // ヘッダー全体
    _jsx("header", { className: "fixed top-0 w-full z-50 bg-gradient-to-r from-blue-700 via-blue-900 to-indigo-900 shadow-lg", children: _jsxs("div", { className: "max-w-6xl mx-auto flex items-center justify-between h-20 px-6", children: [_jsx("div", { className: "text-3xl font-extrabold text-white tracking-wide", children: t("header.logo", "会社ロゴ") }), _jsxs("div", { className: "flex items-center space-x-6", children: [_jsxs("nav", { className: "space-x-8", children: [_jsx("a", { href: "#services", className: "text-white hover:text-gray-300 font-medium transition-colors duration-300", children: t("header.services", "サービス紹介") }), _jsx("a", { href: "#about", className: "text-white hover:text-gray-300 font-medium transition-colors duration-300", children: t("header.about", "会社情報") }), _jsx("a", { href: "#message", className: "text-white hover:text-gray-300 font-medium transition-colors duration-300", children: t("nav.message", "代表メッセージ") }), _jsx("a", { href: "#contact", className: "text-white hover:text-gray-300 font-medium transition-colors duration-300", children: t("header.contact", "お問い合わせ") })] }), _jsxs("div", { className: "flex space-x-2", children: [_jsx("button", { onClick: () => i18n.changeLanguage("ja"), className: `px-3 py-1 text-sm rounded transition ${i18n.language === "ja"
                                        ? "bg-yellow-400 text-black font-bold" // 選択中は黄色で強調
                                        : "bg-blue-500 text-white hover:bg-blue-600"}`, children: "\u65E5\u672C\u8A9E" }), _jsx("button", { onClick: () => i18n.changeLanguage("en"), className: `px-3 py-1 text-sm rounded transition ${i18n.language === "en"
                                        ? "bg-yellow-400 text-black font-bold" // 選択中は黄色で強調
                                        : "bg-green-500 text-white hover:bg-green-600"}`, children: "EN" })] })] })] }) }));
};
export default Header;
