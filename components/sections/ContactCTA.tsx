"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative border-t border-surface-border py-24 lg:py-32">
      {/* Subtle radial glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />

      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold text-content sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-content-secondary">
            {t("subtitle")}
          </p>
          <div className="mt-8">
            <Button href={`/${locale}/contact`} variant="primary" size="lg">
              {t("form.submit")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
