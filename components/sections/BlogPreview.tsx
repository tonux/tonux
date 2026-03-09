"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export function BlogPreview() {
  const t = useTranslations("blog");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const placeholders = [
    { key: "placeholder_1", category: "category_1" },
    { key: "placeholder_2", category: "category_2" },
    { key: "placeholder_3", category: "category_3" },
  ];

  return (
    <section ref={ref} className="bg-surface-alt py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-end justify-between">
            <div>
              <div className="section-label">{t("title")}</div>
              <h2 className="mt-4 font-display text-display-md text-content">
                {t("subtitle")}
              </h2>
            </div>
            <a
              href={t("url")}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow hidden sm:inline-flex"
            >
              {t("cta")} <ArrowUpRight size={14} strokeWidth={1.5} />
            </a>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-on-alt overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="h-40 bg-surface-elevated" />
              <div className="p-5">
                <span className="pill">{t(p.category)}</span>
                <h3 className="mt-3 text-base font-semibold text-content">
                  {t(p.key)}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <a
            href={t("url")}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow inline-flex"
          >
            {t("cta")} <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
