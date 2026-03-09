"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

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
    <section ref={ref} className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="section-label mx-auto w-fit">{t("title")}</div>
          <h2 className="mt-4 font-display text-display-md text-content">
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
              className="card p-6 transition-all duration-300 hover:shadow-sm"
            >
              <h3 className="text-base font-semibold text-content">
                {item.organization}
              </h3>
              <p className="mt-2 text-sm font-medium text-content">
                {item.role}
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-content-muted">
                <MapPin size={14} strokeWidth={1.5} /> {item.location}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/contact`}
            className="link-arrow inline-flex"
          >
            {t("cta")} <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
