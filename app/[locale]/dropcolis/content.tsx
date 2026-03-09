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
    <div className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Dropcolis
          </p>
          <h1 className="mt-4 text-4xl font-bold text-content sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-accent">{t("subtitle")}</p>
        </motion.div>

        {/* Story + Tech */}
        <div className="mt-16 grid gap-4 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8"
          >
            <h2 className="text-xl font-bold text-content">
              {t("story_title")}
            </h2>
            <p className="mt-4 leading-relaxed text-content-secondary">
              {t("story")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8"
          >
            <h2 className="text-xl font-bold text-content">
              {t("tech_title")}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {techItems.map((tech) => (
                <span
                  key={tech}
                  className="rounded-[8px] bg-accent-dim px-3 py-1.5 font-mono text-xs text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 glass-card p-8"
        >
          <h2 className="text-xl font-bold text-content">
            {t("role_title")}
          </h2>
          <ul className="mt-6 space-y-4">
            {responsibilities.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <span className="text-sm leading-relaxed text-content-secondary">
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
            {t("cta")} <ExternalLink size={14} strokeWidth={1.5} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
