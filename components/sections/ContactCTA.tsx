"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ContactCTA() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-dark py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-display-md text-dark-text">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-dark-muted">
            {t("subtitle")}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="mt-8 inline-flex items-center gap-1 text-sm text-dark-text underline underline-offset-4 decoration-white/30 transition-all duration-300 hover:decoration-white"
          >
            {t("form.submit")} <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
