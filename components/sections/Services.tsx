"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Settings, Code, Users, GraduationCap, ArrowRight } from "lucide-react";
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

        {/* Bento grid */}
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
                  className="group glass-card block h-full p-6 transition-all duration-300 hover:border-accent/20 hover:bg-surface-elevated"
                >
                  <Icon size={22} strokeWidth={1.5} className="text-accent" />
                  <h3 className="mt-4 text-base font-semibold text-content">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-content-secondary">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-content-muted transition-all duration-300 group-hover:text-accent">
                    {t("cta")} <ArrowRight size={14} strokeWidth={1.5} />
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
