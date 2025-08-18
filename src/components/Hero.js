import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const Hero = () => {
    const { t } = useTranslation();
    return (_jsxs("section", { className: "relative w-screen h-[600px] overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-no-repeat bg-center bg-cover", style: { backgroundImage: `url(/img/washi-texture.png)` } }), _jsx("div", { className: "absolute inset-0 bg-white/40" }), _jsxs("div", { className: "relative z-10 flex flex-col items-center justify-center h-full text-center", children: [_jsx(motion.h1, { className: "text-5xl md:text-6xl font-extrabold text-gray-900 drop-shadow-sm", children: t("hero.title")
                            .split("\n")
                            .map((line, i) => (_jsxs(React.Fragment, { children: [line, i !== t("hero.title").split("\n").length - 1 && (_jsx("br", { className: "block md:hidden" })), i !== t("hero.title").split("\n").length - 1 && (_jsx("span", { className: "hidden md:inline", children: "\u00A0" }))] }, i))) }), _jsx(motion.p, { className: "mt-6 text-xl md:text-2xl text-gray-800", initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay: 0.3 }, children: t("hero.subtitle") })] })] }));
};
export default Hero;
