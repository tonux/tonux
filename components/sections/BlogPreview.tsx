"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function BlogPreview() {
  const t = useTranslations("blog");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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

          <div className="mt-10 flex justify-center">
            <div className="rounded-2xl border border-primary-200 bg-white p-8 shadow-sm dark:border-primary-700 dark:bg-primary-900">
              <BookOpen
                size={48}
                className="mx-auto text-accent/50"
              />
              <p className="mt-4 text-primary-600 dark:text-primary-300">
                {t("subtitle")}
              </p>
              <div className="mt-6">
                <Button href={t("url")} variant="secondary" size="md" external>
                  {t("cta")} <ExternalLink size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
