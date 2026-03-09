"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const trustedCompanies = ["Desjardins", "Sonatel", "WADA", "Astek", "Dropcolis"];

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden py-24 lg:py-36">
      {/* Subtle radial glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm text-accent">
              {t("subtitle")}
            </p>
            <h1 className="mt-4 text-5xl font-bold leading-[1.1] tracking-tight text-content sm:text-6xl lg:text-7xl">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-content-secondary">
              {t("description")}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={`/${locale}/contact`} variant="primary" size="lg">
                {t("cta_primary")}
              </Button>
              <Button href={`/${locale}/services`} variant="secondary" size="lg">
                {t("cta_secondary")}
              </Button>
            </div>

            {/* Trust badges — monochrome */}
            <div className="mt-16 border-t border-surface-border pt-8">
              <p className="font-mono text-xs uppercase tracking-widest text-content-muted">
                Trusted by
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-8">
                {trustedCompanies.map((company) => (
                  <span
                    key={company}
                    className="font-mono text-sm text-content-muted/50 transition-all duration-300 hover:text-content-secondary"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative h-80 w-80 overflow-hidden rounded-[8px] border border-surface-border lg:h-[420px] lg:w-[420px]">
              <Image
                src="/tonux.jpg"
                alt="Ndongo Tonux SAMB"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle cyan glow overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface/80 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
