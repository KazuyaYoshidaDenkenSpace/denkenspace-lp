import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();
    // 言語ごとのフォームURL
    const formUrls = {
        ja: "https://forms.gle/ufZnNjB824YsAasb9?embedded=true", // 日本語版
        en: "https://forms.gle/Ebivc1YeiqT97Qvh7?embedded=true", // 英語版
    };
    const currentFormUrl = formUrls[i18n.language] || formUrls.ja;
    return (_jsxs("section", { className: "w-full max-w-6xl px-6 py-12 flex flex-col items-center", children: [_jsx("button", { className: "px-6 py-4 bg-[#2B6CB0] text-white font-bold rounded \r\n             hover:bg-[#234E89] transition", onClick: () => setIsOpen(!isOpen), children: t("contact.title", "お問い合わせ") }), _jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { duration: 0.4 }, className: "w-full mt-6 overflow-hidden", children: _jsx("div", { className: "max-w-3xl mx-auto px-6", children: _jsx("iframe", { src: currentFormUrl, width: "100%", height: 800, title: t("contact.title", "お問い合わせフォーム"), children: "\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026" }) }) })) })] }));
};
export default Contact;
