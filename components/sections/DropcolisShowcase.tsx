"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Package, Truck, MapPin, Smartphone, ArrowUpRight } from "lucide-react";

const featureIcons = [Truck, Package, MapPin, Smartphone];

export function DropcolisShowcase() {
  const t = useTranslations("dropcolis");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const features = t.raw("features") as string[];

  return (
    <section ref={ref} className="bg-surface-alt py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">{t("role")}</div>
            <h2 className="mt-4 font-display text-display-md text-content">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-content-secondary">
              {t("description")}
            </p>
            <p className="mt-3 text-sm text-content-muted">
              {t("highlight")}
            </p>

            <a
              href={t("url")}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow mt-8 inline-flex"
            >
              {t("cta")} <ArrowUpRight size={14} strokeWidth={1.5} />
            </a>
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
                <div key={i} className="card-on-alt p-5 transition-all duration-300 hover:shadow-sm">
                  <Icon size={20} strokeWidth={1.5} className="text-content" />
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
