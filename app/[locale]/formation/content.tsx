"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FormationPageContent() {
  const t = useTranslations();
  const locale = useLocale();

  const trainingItems = t.raw("training.items") as Array<{
    organization: string;
    role: string;
    location: string;
  }>;

  const programs = t.raw("formation_page.programs") as Array<{
    title: string;
    description: string;
    duration: string;
  }>;

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-primary-900 dark:text-white sm:text-5xl">
            {t("formation_page.title")}
          </h1>
          <p className="mt-4 text-xl text-primary-600 dark:text-primary-300">
            {t("formation_page.subtitle")}
          </p>
        </motion.div>

        {/* Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-16 max-w-3xl"
        >
          <h2 className="text-2xl font-bold text-primary-900 dark:text-white">
            {t("formation_page.approach_title")}
          </h2>
          <p className="mt-4 text-lg text-primary-600 dark:text-primary-300">
            {t("formation_page.approach")}
          </p>
        </motion.div>

        {/* Experience timeline */}
        <div className="mt-16">
          <h2 className="text-center text-2xl font-bold text-primary-900 dark:text-white">
            {t("training.title")}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trainingItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
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
        </div>

        {/* Programs */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold text-primary-900 dark:text-white">
            {t("formation_page.programs_title")}
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {programs.map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="rounded-xl border border-primary-200 bg-white p-6 shadow-sm dark:border-primary-700 dark:bg-primary-900"
              >
                <h3 className="text-xl font-semibold text-primary-900 dark:text-white">
                  {program.title}
                </h3>
                <p className="mt-3 text-primary-600 dark:text-primary-300">
                  {program.description}
                </p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  <Clock size={14} /> {program.duration}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button href={`/${locale}/contact`} variant="primary" size="lg">
            {t("formation_page.cta")}
          </Button>
        </div>
      </div>
    </div>
  );
}
