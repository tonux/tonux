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
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 py-20 text-white lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {t("title")}
            </h1>
            <p className="mt-2 text-xl font-medium text-accent-300">
              {t("subtitle")}
            </p>
            <p className="mt-6 max-w-lg text-lg text-primary-200">
              {t("description")}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={`/${locale}/contact`} variant="primary" size="lg">
                {t("cta_primary")}
              </Button>
              <Button
                href={`/${locale}/services`}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                {t("cta_secondary")}
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-12">
              <div className="flex flex-wrap items-center gap-6">
                {trustedCompanies.map((company) => (
                  <span
                    key={company}
                    className="text-sm font-medium text-primary-300/70"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative h-80 w-80 overflow-hidden rounded-2xl border-4 border-white/10 shadow-2xl lg:h-96 lg:w-96">
              <Image
                src="/tonux.jpg"
                alt="Ndongo Tonux SAMB"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
