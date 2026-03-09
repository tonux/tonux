"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectIcon } from "@/components/ui/ProjectIcon";

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
    <section ref={ref} className="bg-surface-alt py-24 lg:py-32">
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
              className="group card-on-alt block overflow-hidden transition-all duration-300 hover:shadow-sm"
            >
              {/* Thumbnail with favicon */}
              <div className="relative flex h-40 items-center justify-center bg-surface-elevated">
                <ProjectIcon url={item.url} title={item.title} />
                <div className="absolute inset-0 flex items-center justify-center bg-content/0 transition-all duration-300 group-hover:bg-content/80">
                  <ArrowUpRight
                    size={24}
                    strokeWidth={1.5}
                    className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold text-content">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-content-secondary">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.techs.map((tech) => (
                    <span key={tech} className="pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/portfolio`}
            className="link-arrow inline-flex"
          >
            {t("cta")} <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
