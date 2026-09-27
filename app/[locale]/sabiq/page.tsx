import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SabiqPageContent } from "./content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sabiq_page" });
  return {
    title: t("meta_title"),
    description: t("meta_description"),
    alternates: {
      canonical: `/${locale}/sabiq`,
      languages: { fr: "/fr/sabiq", en: "/en/sabiq" },
    },
    openGraph: {
      title: t("meta_title"),
      description: t("meta_description"),
      url: `https://tonuxcorp.com/${locale}/sabiq`,
      images: [{ url: "/sabiq/icon.png", width: 256, height: 256 }],
    },
  };
}

export default function SabiqPage() {
  return <SabiqPageContent />;
}
