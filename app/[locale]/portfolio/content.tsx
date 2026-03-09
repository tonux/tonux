"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ProjectIcon } from "@/components/ui/ProjectIcon";

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
          <div className="section-label mx-auto w-fit">Portfolio</div>
          <h1 className="mt-4 font-display text-display-lg text-content">
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
                "rounded-full px-4 py-2 text-xs font-medium transition-all duration-300",
                filter === f.key
                  ? "bg-content text-surface"
                  : "border border-surface-border-strong bg-surface text-content-secondary hover:text-content"
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
              className="group card block overflow-hidden transition-all duration-300 hover:shadow-sm"
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
      </div>
    </div>
  );
}
