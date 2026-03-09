"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Package, Truck, MapPin, Smartphone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

const featureIcons = [Truck, Package, MapPin, Smartphone];

export function DropcolisShowcase() {
  const t = useTranslations("dropcolis");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const features = t.raw("features") as string[];

  return (
    <section ref={ref} className="border-t border-surface-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              {t("role")}
            </span>
            <h2 className="mt-4 text-3xl font-bold text-content sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-content-secondary">
              {t("description")}
            </p>
            <p className="mt-3 text-content-muted">
              {t("highlight")}
            </p>

            <div className="mt-8">
              <Button href={t("url")} variant="secondary" size="md" external>
                {t("cta")} <ExternalLink size={14} strokeWidth={1.5} className="ml-2" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-3"
          >
            {features.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <div key={i} className="glass-card p-5 transition-all duration-300 hover:border-accent/20">
                  <Icon size={20} strokeWidth={1.5} className="text-accent" />
                  <p className="mt-3 text-sm font-medium text-content">
                    {feature}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
