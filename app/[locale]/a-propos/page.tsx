import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutPageContent } from "./content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about_page" });
  return {
    title: t("title"),
  };
}

export default function AboutPage() {
  return <AboutPageContent />;
}
