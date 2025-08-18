import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./i18n"; // 多言語化設定（i18nextの初期化）
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Message from "./components/Message";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function App() {
    const { t, i18n } = useTranslation();
    // 言語切替のたびにタイトルと <html lang="..."> を更新
    useEffect(() => {
        document.title = t("meta.title"); // 翻訳ファイルで管理しているタイトルを使用
        document.documentElement.lang = i18n.language; // HTMLタグのlang属性を切替
    }, [i18n.language, t]);
    return (_jsxs("div", { className: "min-h-screen flex flex-col", children: [_jsx(Header, {}), _jsxs("main", { className: "pt-12 flex flex-col items-center w-full", children: [_jsx(Hero, {}), _jsx("section", { id: "services", className: "w-full max-w-6xl px-6 py-20 text-center", children: _jsx(Services, {}) }), _jsx("section", { id: "about", className: "w-full max-w-6xl px-6 py-20 text-center", children: _jsx(About, {}) }), _jsx("section", { id: "message", className: "w-full max-w-6xl px-6 py-20 text-center", children: _jsx(Message, {}) }), _jsx("section", { id: "contact", className: "w-full max-w-6xl px-6 py-20 text-center", children: _jsx(Contact, {}) })] }), _jsx(Footer, {})] }));
}
