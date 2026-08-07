"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Target, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";

const pillarIcons = [Target, ShieldCheck, Users];

export function AboutSummary() {
  const t = useTranslations("about_summary");
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = t.raw("pillars") as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section ref={ref} className="bg-surface-alt py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Statement block — spans 2 cols */}
          <div className="card-on-alt flex flex-col justify-between p-8 md:col-span-2">
            <div>
              <div className="section-label">{t("title")}</div>
              <h2 className="mt-4 font-display text-2xl font-medium leading-tight text-content sm:text-3xl">
                {t("headline")}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-content-secondary">
                {t("description")}
              </p>
            </div>
            <Link href={`/${locale}/a-propos`} className="link-arrow mt-8">
              {t("link")} <ArrowUpRight size={14} strokeWidth={1.5} />
            </Link>
          </div>

          {/* Stat card: Years */}
          <div className="card-on-alt flex flex-col justify-center p-8 text-center">
            <div className="font-display text-5xl font-light text-content">
              {t("stats.years")}
            </div>
            <div className="mt-2 text-sm text-content-secondary">
              {t("stats.years_label")}
            </div>
          </div>

          {/* Stat card: Projects */}
          <div className="card-on-alt flex flex-col justify-center p-8 text-center">
            <div className="font-display text-5xl font-light text-content">
              {t("stats.projects")}
            </div>
            <div className="mt-2 text-sm text-content-secondary">
              {t("stats.projects_label")}
            </div>
          </div>

          {/* Three pillars — the Cofomo-style value triad */}
          {pillars.map((pillar, i) => {
            const Icon = pillarIcons[i] ?? Target;
            return (
              <div key={pillar.title} className="card-on-alt p-8">
                <div className="inline-flex rounded-[12px] bg-surface-alt p-3">
                  <Icon size={20} strokeWidth={1.5} className="text-content" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-content">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-content-secondary">
                  {pillar.description}
                </p>
              </div>
            );
          })}

          {/* Reach card: people trained + countries */}
          <div className="card-on-alt flex flex-col justify-center gap-6 p-8">
            <div>
              <div className="font-display text-4xl font-light text-content">
                {t("stats.students")}
              </div>
              <div className="mt-1 text-sm text-content-secondary">
                {t("stats.students_label")}
              </div>
            </div>
            <div className="border-t border-surface-border pt-6">
              <div className="font-display text-4xl font-light text-content">
                {t("stats.countries")}
              </div>
              <div className="mt-1 text-sm text-content-secondary">
                {t("stats.countries_label")}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
