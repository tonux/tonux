"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

export function Testimonials() {
  const t = useTranslations("testimonials");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const items = t.raw("items") as Array<{
    name: string;
    role: string;
    company: string;
    text: string;
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

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card p-6"
            >
              <Quote size={20} strokeWidth={1.5} className="text-content/10" />
              <p className="mt-4 text-sm leading-relaxed text-content-secondary">
                {item.text}
              </p>
              <div className="mt-6 border-t border-surface-border pt-4">
                <p className="text-sm font-semibold text-content">
                  {item.name}
                </p>
                <p className="mt-0.5 text-xs text-content-muted">
                  {item.role} — {item.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
