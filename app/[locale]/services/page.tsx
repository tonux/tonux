import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ServicesPageContent } from "./content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services_page" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default function ServicesPage() {
  return <ServicesPageContent />;
}
