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
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-primary-900 dark:text-white sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-xl text-primary-600 dark:text-primary-300">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mt-10 flex justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                filter === f.key
                  ? "bg-accent text-white"
                  : "bg-primary-100 text-primary-600 hover:bg-primary-200 dark:bg-primary-800 dark:text-primary-300 dark:hover:bg-primary-700"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-xl border border-primary-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-primary-700 dark:bg-primary-900"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-primary-900 dark:text-white">
                  {item.title}
                </h3>
                <ExternalLink
                  size={16}
                  className="text-primary-400 transition-colors group-hover:text-accent"
                />
              </div>
              <p className="mt-2 text-sm text-primary-500 dark:text-primary-400">
                {item.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
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
