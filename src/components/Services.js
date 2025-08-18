import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
const Services = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const { t } = useTranslation();
    // 配列を JSON から取得
    const services = t("services.items", { returnObjects: true });
    return (_jsxs("section", { className: "relative w-full max-w-6xl px-6 py-12 flex flex-col items-center", children: [_jsx(AnimatePresence, { children: selectedImg && (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.6 }, className: "absolute inset-0 -z-10 bg-cover bg-center", style: {
                        backgroundImage: `url(${selectedImg})`,
                    } }, selectedImg)) }), selectedImg && _jsx("div", { className: "absolute inset-0 -z-10 bg-black/40" }), _jsx("div", { className: "w-full mt-6", children: _jsx("div", { className: "grid md:grid-cols-3 gap-8 w-full", children: services.map((s, i) => (_jsx("div", { className: "relative p-6 rounded shadow text-center mx-auto h-48 flex flex-col justify-center items-center \r\n                         bg-white/80 hover:bg-white/60 transition cursor-pointer", onMouseEnter: () => setSelectedImg(s.img), onMouseLeave: () => setSelectedImg(null), children: _jsxs("div", { className: "relative z-10", children: [_jsx("h3", { className: "text-2xl font-semibold mb-2 text-gray-900", children: s.title }), _jsx("p", { className: "text-gray-700", children: s.desc })] }) }, i))) }) })] }));
};
export default Services;
