"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  Compass,
  Code2,
  GraduationCap,
  Palette,
  Cloud,
  Handshake,
} from "lucide-react";
import Link from "next/link";

const roleIcons = [Compass, Code2, GraduationCap, Palette, Cloud, Handshake];

export function Team() {
  const t = useTranslations("team");
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const roles = t.raw("roles") as Array<{
    title: string;
    description: string;
    type: "core" | "network";
  }>;

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
          {/* Left: positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="section-label">{t("title")}</div>
            <h2 className="mt-4 font-display text-display-md text-content">
              {t("subtitle")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-content-secondary">
              {t("description")}
            </p>
            <Link href={`/${locale}/contact`} className="link-arrow mt-8">
              {t("cta")} <ArrowUpRight size={14} strokeWidth={1.5} />
            </Link>
          </motion.div>

          {/* Right: capability cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {roles.map((role, i) => {
              const Icon = roleIcons[i] ?? Compass;
              const isCore = role.type === "core";
              return (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card flex h-full flex-col p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="inline-flex rounded-[12px] bg-surface-alt p-3">
                      <Icon
                        size={20}
                        strokeWidth={1.5}
                        className="text-content"
                      />
                    </div>
                    <span
                      className={
                        isCore
                          ? "rounded-full bg-content px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-surface"
                          : "rounded-full border border-surface-border-strong px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-content-secondary"
                      }
                    >
                      {isCore ? t("badge_core") : t("badge_network")}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-content">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-content-secondary">
                    {role.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
