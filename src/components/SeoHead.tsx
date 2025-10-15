import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function SeoHead() {
  const { t } = useTranslation();

  return (
    <Helmet>
      <title>{t("meta.title")}</title>
      <meta name="description" content={t("meta.description")} />
      <meta name="keywords" content={t("meta.keywords")} />

      {/* SNS / OGP */}
      <meta property="og:title" content={t("meta.ogTitle")} />
      <meta property="og:description" content={t("meta.ogDescription")} />
      <meta property="og:image" content={t("meta.ogImage")} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
