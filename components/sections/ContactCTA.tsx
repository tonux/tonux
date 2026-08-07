"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ContactCTAProps = {
  /** "dark" = full-width dark banner (end of page). "light" = inline card (mid page). */
  variant?: "dark" | "light";
};

export function ContactCTA({ variant = "dark" }: ContactCTAProps) {
  const t = useTranslations("contact");
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const isDark = variant === "dark";

  return (
    <section
      ref={ref}
      className={cn(isDark ? "section-dark py-24 lg:py-32" : "py-12 lg:py-16")}
    >
      <div
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          isDark ? "max-w-3xl text-center" : "max-w-7xl"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={cn(
            !isDark &&
              "card flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between lg:p-10"
          )}
        >
          <div>
            <h2
              className={cn(
                "font-display",
                isDark
                  ? "text-display-md text-dark-text"
                  : "text-2xl font-medium text-content sm:text-3xl"
              )}
            >
              {isDark ? t("title") : t("mid_title")}
            </h2>
            <p
              className={cn(
                "mt-3",
                isDark ? "text-lg text-dark-muted" : "text-sm text-content-secondary"
              )}
            >
              {isDark ? t("subtitle") : t("mid_subtitle")}
            </p>
          </div>

          <Link
            href={`/${locale}/contact`}
            className={cn(
              "inline-flex shrink-0 items-center justify-center gap-1 rounded-[12px] font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
              isDark
                ? "mt-8 bg-dark-text px-8 py-4 text-base text-dark hover:opacity-80 focus-visible:ring-white/40 focus-visible:ring-offset-dark"
                : "bg-content px-6 py-3 text-sm text-surface hover:opacity-80 focus-visible:ring-content/30 focus-visible:ring-offset-surface"
            )}
          >
            {t("cta_link")} <ArrowUpRight size={16} strokeWidth={1.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
