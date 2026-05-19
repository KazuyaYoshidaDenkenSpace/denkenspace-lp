import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

type SeoHeadProps = {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  url?: string;
};

const SITE_URL = "https://denkenspace.com";

export default function SeoHead({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  url,
}: SeoHeadProps) {
  const { t, i18n } = useTranslation();

  const resolvedTitle = title || t("meta.title");
  const resolvedDescription = description || t("meta.description");
  const resolvedKeywords = keywords || t("meta.keywords");
  const resolvedOgTitle = ogTitle || t("meta.ogTitle");
  const resolvedOgDescription = ogDescription || t("meta.ogDescription");
  const resolvedOgImage = ogImage || t("meta.ogImage");
  const resolvedUrl = url || SITE_URL;
  const locale = i18n.language === "en" ? "en_US" : "ja_JP";
  const htmlLang = i18n.language === "en" ? "en" : "ja";

  return (
    <Helmet>
      <html lang={htmlLang} />
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta name="keywords" content={resolvedKeywords} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={resolvedUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="株式会社デンケンスペース" />
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDescription} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:url" content={resolvedUrl} />
      <meta property="og:locale" content={locale} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedOgTitle} />
      <meta name="twitter:description" content={resolvedOgDescription} />
      <meta name="twitter:image" content={resolvedOgImage} />
    </Helmet>
  );
}
