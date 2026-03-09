"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 py-20 text-white lg:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-primary-200">
            {t("subtitle")}
          </p>
          <div className="mt-8">
            <Button href={`/${locale}/contact`} variant="primary" size="lg">
              {t("form.submit")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
