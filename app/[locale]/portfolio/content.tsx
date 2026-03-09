"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ProjectType = "all" | "web" | "mobile" | "consulting";

export function PortfolioPageContent() {
  const t = useTranslations("portfolio");
  const [filter, setFilter] = useState<ProjectType>("all");

  const items = t.raw("items") as Array<{
    title: string;
    description: string;
    type: string;
    techs: string[];
    url: string;
  }>;

  const filters: { key: ProjectType; label: string }[] = [
    { key: "all", label: t("all") },
    { key: "web", label: t("web") },
    { key: "mobile", label: t("mobile") },
    { key: "consulting", label: t("consulting") },
  ];

  const filtered =
    filter === "all" ? items : items.filter((item) => item.type === filter);

  return (
    <div className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Portfolio
          </p>
          <h1 className="mt-4 text-4xl font-bold text-content sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-content-secondary">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mt-12 flex justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                "rounded-[8px] px-4 py-2 font-mono text-xs transition-all duration-300",
                filter === f.key
                  ? "bg-accent text-surface accent-glow"
                  : "border border-surface-border bg-surface-card text-content-secondary hover:border-accent/30 hover:text-content"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
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
      </div>
    </div>
  );
}
