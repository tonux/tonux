"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function AboutSummary() {
  const t = useTranslations("about_summary");
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-surface-alt py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Bento grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          {/* Text block — spans 2 cols */}
          <div className="card-on-alt flex flex-col justify-between p-8 md:col-span-2">
            <div>
              <div className="section-label">{t("title")}</div>
              <p className="mt-6 text-base leading-relaxed text-content-secondary">
                {t("description")}
              </p>
            </div>
            <Link
              href={`/${locale}/a-propos`}
              className="link-arrow mt-8"
            >
              {t("link")} <ArrowUpRight size={14} strokeWidth={1.5} />
            </Link>
          </div>

          {/* Stat card: Years */}
          <div className="card-on-alt flex flex-col justify-center p-8 text-center">
            <div className="font-display text-5xl font-light text-content">
              {t("stats.years")}
            </div>
            <div className="mt-2 text-sm text-content-secondary">
              {t("stats.years_label")}
            </div>
          </div>

          {/* Photo tile */}
          <div className="card-on-alt relative overflow-hidden">
            <Image
              src="/tonux.jpg"
              alt="Tonux"
              fill
              className="object-cover grayscale"
            />
            <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-content text-surface">
              <ArrowUpRight size={14} strokeWidth={2} />
            </div>
          </div>

          {/* Photo tile 2 — hidden on mobile */}
          <div className="card-on-alt relative hidden overflow-hidden md:block" style={{ minHeight: "160px" }}>
            <div className="absolute inset-0 bg-surface-elevated" />
          </div>

          {/* Stat card: Projects */}
          <div className="card-on-alt flex flex-col justify-center p-8 text-center">
            <div className="font-display text-5xl font-light text-content">
              {t("stats.projects")}
            </div>
            <div className="mt-2 text-sm text-content-secondary">
              {t("stats.projects_label")}
            </div>
          </div>

          {/* Experience text card — spans 2 cols */}
          <div className="card-on-alt flex items-center gap-4 p-8 md:col-span-2">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-surface-border-strong">
              <span className="text-lg text-content">+</span>
            </div>
            <p className="text-sm leading-relaxed text-content-secondary">
              {t("stats.students")} {t("stats.students_label")} — {t("stats.countries")} {t("stats.countries_label")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
