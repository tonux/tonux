"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PortfolioPreview() {
  const t = useTranslations("portfolio");
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const items = t.raw("items") as Array<{
    title: string;
    description: string;
    type: string;
    techs: string[];
    url: string;
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

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 6).map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card block p-6 transition-all duration-300 hover:border-accent/20 hover:bg-surface-elevated"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-base font-semibold text-content">
                  {item.title}
                </h3>
                <ExternalLink
                  size={16}
                  strokeWidth={1.5}
                  className="text-content-muted transition-colors duration-300 group-hover:text-accent"
                />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-content-secondary">
                {item.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-[8px] bg-accent-dim px-2.5 py-0.5 font-mono text-xs text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href={`/${locale}/portfolio`} variant="ghost" size="md">
            {t("cta")} &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
