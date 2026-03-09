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
    <div className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Formation
          </p>
          <h1 className="mt-4 text-4xl font-bold text-content sm:text-5xl">
            {t("formation_page.title")}
          </h1>
          <p className="mt-4 text-lg text-content-secondary">
            {t("formation_page.subtitle")}
          </p>
        </motion.div>

        {/* Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-16 max-w-3xl glass-card p-8"
        >
          <h2 className="text-xl font-bold text-content">
            {t("formation_page.approach_title")}
          </h2>
          <p className="mt-4 leading-relaxed text-content-secondary">
            {t("formation_page.approach")}
          </p>
        </motion.div>

        {/* Experience */}
        <div className="mt-20">
          <h2 className="text-center font-mono text-xs uppercase tracking-widest text-accent">
            {t("training.title")}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trainingItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="glass-card p-6 transition-all duration-300 hover:border-accent/20"
              >
                <h3 className="text-base font-semibold text-content">
                  {item.organization}
                </h3>
                <p className="mt-2 text-sm font-medium text-accent">
                  {item.role}
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-content-muted">
                  <MapPin size={14} strokeWidth={1.5} /> {item.location}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-content">
            {t("formation_page.programs_title")}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {programs.map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-semibold text-content">
                  {program.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-content-secondary">
                  {program.description}
                </p>
                <p className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-accent">
                  <Clock size={14} strokeWidth={1.5} /> {program.duration}
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
