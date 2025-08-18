import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
const Message = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();
    return (_jsxs("section", { id: "message", className: "w-full max-w-5xl mx-auto px-6 py-16 text-center", children: [_jsx("button", { className: "px-6 py-4 bg-[#2B6CB0] text-white font-bold rounded \r\n             hover:bg-[#234E89] transition", onClick: () => setIsOpen(!isOpen), children: t("message.button", "代表メッセージ") }), _jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { duration: 0.4 }, className: "mt-6 overflow-hidden bg-white p-6 rounded-lg shadow", children: _jsxs("div", { className: "flex flex-col md:flex-row items-center gap-8", children: [_jsx("div", { className: "w-full md:w-1/3 flex justify-center", children: _jsx("img", { src: "/img/ceo.png", alt: "\u4EE3\u8868\u5199\u771F", className: "rounded-2xl shadow-lg w-48 h-48 object-cover md:w-64 md:h-64" }) }), _jsxs("div", { className: "w-full md:w-2/3 text-left", children: [_jsx("h2", { className: "text-2xl font-bold mb-6", children: t("message.title", "代表挨拶") }), _jsx("p", { className: "text-lg text-gray-700 leading-relaxed whitespace-pre-line", children: t("message.body", "ここに代表の言葉が入ります。") }), _jsx("div", { className: "mt-6 text-right", children: _jsx("p", { className: "font-semibold", children: t("message.ceo", "代表取締役 吉田 利也") }) })] })] }) })) })] }));
};
export default Message;
