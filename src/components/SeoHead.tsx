import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

type SeoHeadProps = {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
};

export default function SeoHead({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
}: SeoHeadProps) {
  const { t } = useTranslation();

  return (
    <Helmet>
      <title>{title || t("meta.title")}</title>
      <meta name="description" content={description || t("meta.description")} />
      <meta name="keywords" content={keywords || t("meta.keywords")} />

      {/* SNS / OGP */}
      <meta property="og:title" content={ogTitle || t("meta.ogTitle")} />
      <meta
        property="og:description"
        content={ogDescription || t("meta.ogDescription")}
      />
      <meta property="og:image" content={ogImage || t("meta.ogImage")} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
