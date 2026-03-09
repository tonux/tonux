"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Training() {
  const t = useTranslations("training");
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const items = t.raw("items") as Array<{
    organization: string;
    role: string;
    location: string;
  }>;

  return (
    <section ref={ref} className="border-t border-surface-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            {t("title")}
          </p>
          <h2 className="mt-4 text-3xl font-bold text-content sm:text-4xl">
            {t("subtitle")}
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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

        <div className="mt-12 text-center">
          <Button href={`/${locale}/contact`} variant="primary" size="md">
            {t("cta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
