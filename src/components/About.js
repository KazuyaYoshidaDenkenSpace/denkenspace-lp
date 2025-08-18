import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Info, Target, Users } from "lucide-react";
const About = () => {
    const { t } = useTranslation();
    const aboutItems = t("about.items", { returnObjects: true });
    const icons = {
        info: _jsx(Info, { className: "w-6 h-6 text-blue-600" }),
        target: _jsx(Target, { className: "w-6 h-6 text-blue-600" }),
        users: _jsx(Users, { className: "w-6 h-6 text-blue-600" }),
    };
    return (_jsxs("section", { className: "w-full max-w-6xl px-6 py-12 mx-auto", children: [_jsx("h2", { className: "text-3xl font-bold text-center mb-10", children: t("about.title") }), _jsx("div", { className: "grid md:grid-cols-2 gap-6", children: aboutItems.map((item, idx) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: idx * 0.1 }, className: "bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex gap-4", children: [_jsx("div", { className: "flex-shrink-0", children: item.icon && icons[item.icon] }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold mb-2", children: item.title }), _jsx("p", { className: "text-gray-700", children: item.content })] })] }, idx))) })] }));
};
export default About;
