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
    <section ref={ref} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              {t("role")}
            </span>
            <h2 className="mt-4 text-3xl font-bold text-primary-900 dark:text-white sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-primary-600 dark:text-primary-300">
              {t("description")}
            </p>
            <p className="mt-3 text-primary-500 dark:text-primary-400">
              {t("highlight")}
            </p>

            <div className="mt-8">
              <Button
                href={t("url")}
                variant="secondary"
                size="md"
                external
              >
                {t("cta")} <ExternalLink size={16} className="ml-2" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <div
                  key={i}
                  className="rounded-xl border border-primary-200 bg-white p-5 shadow-sm dark:border-primary-700 dark:bg-primary-900"
                >
                  <div className="mb-3 inline-flex rounded-lg bg-accent/10 p-2 text-accent">
                    <Icon size={20} />
                  </div>
                  <p className="text-sm font-medium text-primary-700 dark:text-primary-200">
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
