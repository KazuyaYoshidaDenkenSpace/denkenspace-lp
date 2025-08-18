import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
const Footer = () => {
    const { t } = useTranslation();
    return (_jsxs("footer", { className: "bg-gray-200 py-8 text-center text-gray-700", children: [_jsxs("div", { className: "space-x-4 mb-4", children: [_jsx("a", { href: "#", className: "hover:text-blue-600", children: "Twitter" }), _jsx("a", { href: "#", className: "hover:text-blue-600", children: "Facebook" }), _jsx("a", { href: "#", className: "hover:text-blue-600", children: "Instagram" })] }), _jsx("p", { children: t("footer.copy", "© 2025 株式会社デンケンスペース. All rights reserved.") })] }));
};
export default Footer;
