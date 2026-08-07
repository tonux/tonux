"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NetworkVisual } from "@/components/ui/NetworkVisual";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  const visual = t.raw("visual") as { center: string; nodes: string[] };

  const stats = [
    { value: "12+", label: t("stats_years") },
    { value: "30+", label: t("stats_projects") },
    { value: "500+", label: t("stats_students") },
    { value: "3", label: t("stats_countries") },
  ];

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Watermark background text */}
      <div className="watermark absolute inset-0 flex items-center justify-center text-[15vw] leading-none opacity-[0.03]">
        TONUXCORP
      </div>

      {/* Vertical text — left edge */}
      <div className="absolute bottom-24 left-6 hidden origin-bottom-left -rotate-90 font-display text-xs uppercase tracking-[0.3em] text-content-muted lg:block">
        {t("subtitle")}
      </div>

      {/* Year — left side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute left-6 top-32 hidden font-display text-sm text-content-muted lg:block"
      >
        2026
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: positioning statement */}
          <div className="relative z-10">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-surface-border-strong bg-surface px-3 py-1.5"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-strong opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-strong" />
              </span>
              <span className="text-xs font-medium text-content">
                {t("availability")}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl font-display text-display-md text-content"
            >
              {t("headline_lead")}{" "}
              <span className="text-accent-strong">{t("headline_accent")}</span>
            </motion.h1>

            {/* Intro */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-xl text-lg text-content-secondary"
            >
              {t("intro")}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 max-w-xl text-sm leading-relaxed text-content-muted"
            >
              {t("description")}
            </motion.p>

            {/* Calls to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button href={`/${locale}/contact`} variant="primary" size="lg">
                {t("cta_primary")}
                <ArrowUpRight size={16} strokeWidth={1.5} className="ml-1" />
              </Button>
              <Button href={`/${locale}/services`} variant="secondary" size="lg">
                {t("cta_secondary")}
              </Button>
            </motion.div>
          </div>

          {/* Right: expertise constellation (replaces the founder portrait) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 px-6 sm:px-10 lg:px-0"
          >
            <NetworkVisual center={visual.center} nodes={visual.nodes} />
          </motion.div>
        </div>

        {/* Key figures band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative z-10 mt-16 grid grid-cols-2 gap-y-8 border-t border-surface-border pt-10 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-4xl font-light text-content sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-content-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative z-10 mt-12 flex items-center gap-2 text-sm text-content-muted"
        >
          {t("scroll_down")} <ArrowDown size={14} strokeWidth={1.5} />
        </motion.div>
      </div>
    </section>
  );
}
