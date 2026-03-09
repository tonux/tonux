"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function DropcolisPageContent() {
  const t = useTranslations("dropcolis_page");

  const techItems = t.raw("tech_items") as string[];
  const responsibilities = t.raw("responsibilities") as string[];

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-primary-900 dark:text-white sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-xl text-accent">{t("subtitle")}</p>
        </motion.div>

        {/* Story */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-primary-900 dark:text-white">
              {t("story_title")}
            </h2>
            <p className="mt-4 text-lg text-primary-600 dark:text-primary-300">
              {t("story")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-primary-900 dark:text-white">
              {t("tech_title")}
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {techItems.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-primary-900 dark:text-white">
            {t("role_title")}
          </h2>
          <ul className="mt-6 space-y-4">
            {responsibilities.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <span className="text-primary-600 dark:text-primary-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="mt-12 text-center">
          <Button
            href="https://dropcolis.ca"
            variant="secondary"
            size="lg"
            external
          >
            {t("cta")} <ExternalLink size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
