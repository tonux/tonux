"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PortfolioPreview() {
  const t = useTranslations("portfolio");
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const items = t.raw("items") as Array<{
    title: string;
    description: string;
    type: string;
    techs: string[];
    url: string;
  }>;

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
          <p className="mt-4 text-lg text-primary-600 dark:text-primary-300">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 6).map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-primary-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-primary-700 dark:bg-primary-900"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-primary-900 dark:text-white">
                  {item.title}
                </h3>
                <ExternalLink
                  size={16}
                  className="text-primary-400 transition-colors group-hover:text-accent"
                />
              </div>
              <p className="mt-2 text-sm text-primary-500 dark:text-primary-400">
                {item.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href={`/${locale}/portfolio`} variant="outline" size="md">
            {t("cta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
