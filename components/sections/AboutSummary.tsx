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
    <section ref={ref} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-primary-900 dark:text-white sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-600 dark:text-primary-300">
            {t("description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-accent sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-primary-500 dark:text-primary-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Button href={`/${locale}/a-propos`} variant="outline" size="md">
            {t("link")}
          </Button>
        </div>
      </div>
    </section>
  );
}
