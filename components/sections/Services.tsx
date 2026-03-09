"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Settings, Code, Users, GraduationCap, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const icons = [Settings, Code, Users, GraduationCap];

export function Services() {
  const t = useTranslations("services");
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const items = t.raw("items") as Array<{
    title: string;
    description: string;
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

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/${locale}/services`}
                  className="group card block h-full p-6 hover:shadow-sm"
                >
                  <div className="inline-flex rounded-[12px] bg-surface-alt p-3">
                    <Icon size={22} strokeWidth={1.5} className="text-content" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-content">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-content-secondary">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-content-muted transition-colors duration-300 group-hover:text-content">
                    {t("cta")} <ArrowUpRight size={14} strokeWidth={1.5} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
