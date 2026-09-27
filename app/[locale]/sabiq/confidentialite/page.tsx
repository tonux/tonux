import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

type Section = { title: string; paragraphs?: string[]; items?: string[] };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sabiq_privacy" });
  return {
    title: t("title"),
    description: t("intro"),
    alternates: {
      canonical: `/${locale}/sabiq/confidentialite`,
      languages: {
        fr: "/fr/sabiq/confidentialite",
        en: "/en/sabiq/confidentialite",
      },
    },
  };
}

export default async function SabiqPrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sabiq_privacy" });
  const sections = t.raw("sections") as Section[];

  return (
    <div className="py-24 lg:py-32">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link href={`/${locale}/sabiq`} className="section-label">
          Sabiq
        </Link>
        <h1 className="mt-4 font-display text-display-md text-content">
          {t("title")}
        </h1>
        <p className="mt-4 font-mono text-sm text-content-muted">
          {t("updated")}
        </p>
        <p className="mt-8 text-lg leading-relaxed text-content-secondary">
          {t("intro")}
        </p>

        {sections.map((s, i) => (
          <section key={s.title} className="mt-12">
            <h2 className="text-xl font-semibold text-content">
              {i + 1}. {s.title}
            </h2>
            {s.paragraphs?.map((p) => (
              <p key={p} className="mt-4 leading-relaxed text-content-secondary">
                {p}
              </p>
            ))}
            {s.items && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-content-secondary marker:text-content-muted">
                {s.items.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <div className="mt-16 card p-8">
          <h2 className="text-xl font-semibold text-content">
            {t("contact_title")}
          </h2>
          <p className="mt-3 leading-relaxed text-content-secondary">
            {t("contact_text")}
          </p>
          <a
            href="mailto:sambndongo@gmail.com?subject=Sabiq%20-%20confidentialit%C3%A9"
            className="link-arrow mt-4 inline-flex"
          >
            sambndongo@gmail.com
          </a>
        </div>
      </article>
    </div>
  );
}
