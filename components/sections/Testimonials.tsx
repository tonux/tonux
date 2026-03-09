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
    <section
      ref={ref}
      className="bg-primary-50 py-20 dark:bg-primary-950 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-primary-900 dark:text-white sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-primary-600 dark:text-primary-300">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-xl border border-primary-200 bg-white p-6 shadow-sm dark:border-primary-700 dark:bg-primary-900"
            >
              <Quote size={24} className="text-accent/30" />
              <p className="mt-4 text-primary-600 dark:text-primary-300">
                {item.text}
              </p>
              <div className="mt-6 border-t border-primary-100 pt-4 dark:border-primary-800">
                <p className="font-semibold text-primary-900 dark:text-white">
                  {item.name}
                </p>
                <p className="text-sm text-primary-500 dark:text-primary-400">
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
