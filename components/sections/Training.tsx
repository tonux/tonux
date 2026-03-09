"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Training() {
  const t = useTranslations("training");
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const items = t.raw("items") as Array<{
    organization: string;
    role: string;
    location: string;
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-primary-200 bg-white p-6 shadow-sm dark:border-primary-700 dark:bg-primary-900"
            >
              <h3 className="text-lg font-semibold text-primary-900 dark:text-white">
                {item.organization}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {item.role}
              </p>
              <p className="mt-2 inline-flex items-center gap-1 text-sm text-primary-500 dark:text-primary-400">
                <MapPin size={14} /> {item.location}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href={`/${locale}/contact`} variant="primary" size="md">
            {t("cta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
