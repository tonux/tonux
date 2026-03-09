"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Settings, Code, Users, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

const icons = [Settings, Code, Users, GraduationCap];

export function Services() {
  const t = useTranslations("services");
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const items = t.raw("items") as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section
      ref={ref}
      className="bg-primary-50 py-20 dark:bg-primary-950 lg:py-28"
    >
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
          <p className="mt-4 text-lg text-primary-600 dark:text-primary-300">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/${locale}/services`}
                  className="group block h-full rounded-xl border border-primary-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-primary-700 dark:bg-primary-900"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3 text-accent dark:bg-accent/20">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-primary-500 dark:text-primary-400">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors group-hover:text-accent-600">
                    {t("cta")} <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
