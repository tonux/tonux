import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactPageContent } from "./content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default function ContactPage() {
  return <ContactPageContent />;
}
