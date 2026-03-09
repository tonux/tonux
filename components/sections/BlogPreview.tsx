"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function BlogPreview() {
  const t = useTranslations("blog");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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

          <div className="mx-auto mt-12 max-w-md">
            <div className="glass-card p-8 text-center">
              <BookOpen
                size={32}
                strokeWidth={1.5}
                className="mx-auto text-accent/40"
              />
              <p className="mt-4 text-sm leading-relaxed text-content-secondary">
                {t("subtitle")}
              </p>
              <div className="mt-6">
                <Button href={t("url")} variant="secondary" size="md" external>
                  {t("cta")} <ExternalLink size={14} strokeWidth={1.5} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
