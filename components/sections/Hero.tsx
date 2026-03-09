"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[90vh] overflow-hidden py-24 lg:py-32">
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
        className="absolute bottom-24 left-6 hidden font-display text-sm text-content-muted lg:bottom-auto lg:top-32 lg:block"
      >
        2026
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: text + stats */}
          <div className="relative z-10">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 flex gap-12"
            >
              <div>
                <div className="font-display text-4xl font-light text-content sm:text-5xl">
                  +12
                </div>
                <div className="mt-1 text-xs text-content-muted">
                  {t("stats_years")}
                </div>
              </div>
              <div>
                <div className="font-display text-4xl font-light text-content sm:text-5xl">
                  +30
                </div>
                <div className="mt-1 text-xs text-content-muted">
                  {t("stats_projects")}
                </div>
              </div>
            </motion.div>

            {/* Massive greeting */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-display-hero text-content"
            >
              {t("greeting")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-lg text-content-secondary"
            >
              {t("intro")}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 max-w-md text-sm leading-relaxed text-content-muted"
            >
              {t("description")}
            </motion.p>
          </div>

          {/* Right: B&W photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative h-[400px] w-[320px] overflow-hidden rounded-[12px] lg:h-[520px] lg:w-[420px]">
              <Image
                src="/tonux.jpg"
                alt="Ndongo Tonux SAMB"
                fill
                className="object-cover grayscale"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex items-center gap-2 text-sm text-content-muted"
        >
          {t("scroll_down")} <ArrowDown size={14} strokeWidth={1.5} />
        </motion.div>
      </div>
    </section>
  );
}
