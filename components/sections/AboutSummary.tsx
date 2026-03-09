"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";

export function AboutSummary() {
  const t = useTranslations("about_summary");
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: t("stats.years"), label: t("stats.years_label") },
    { value: t("stats.projects"), label: t("stats.projects_label") },
    { value: t("stats.students"), label: t("stats.students_label") },
    { value: t("stats.countries"), label: t("stats.countries_label") },
  ];

  return (
    <section ref={ref} className="border-t border-surface-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            {t("title")}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-content-secondary">
            {t("description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[8px] border border-surface-border bg-surface-border md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-surface-card p-8 text-center">
              <div className="font-mono text-4xl font-bold text-accent sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-content-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button href={`/${locale}/a-propos`} variant="ghost" size="md">
            {t("link")} &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
