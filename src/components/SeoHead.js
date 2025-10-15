import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
export default function SeoHead() {
    const { t } = useTranslation();
    return (_jsxs(Helmet, { children: [_jsx("title", { children: t("meta.title") }), _jsx("meta", { name: "description", content: t("meta.description") }), _jsx("meta", { name: "keywords", content: t("meta.keywords") }), _jsx("meta", { property: "og:title", content: t("meta.ogTitle") }), _jsx("meta", { property: "og:description", content: t("meta.ogDescription") }), _jsx("meta", { property: "og:image", content: t("meta.ogImage") }), _jsx("meta", { property: "og:type", content: "website" })] }));
}
