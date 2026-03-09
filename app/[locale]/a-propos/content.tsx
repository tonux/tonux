"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Download, Briefcase, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";

const experiences = [
  { org: "Dropcolis/Canada", role: "CTO", type: "Co-founder", period: "2024 - Present", location: "Montreal, Canada" },
  { org: "WADA/Canada", role: "Senior Software Engineer", type: "Full-time", period: "2022 - Present", location: "Montreal, Canada" },
  { org: "Desjardins/Canada", role: "IT Consultant", type: "Full-time", period: "2021 - 2022", location: "Montreal, Canada" },
  { org: "Astek Canada", role: "IT Consultant", type: "Full-time", period: "2021", location: "Montreal, Canada" },
  { org: "Norma", role: "Tech Lead", type: "Consultant", period: "2021", location: "Rouen, France" },
  { org: "Sonatel", role: "Full Stack Developer", type: "Full-time", period: "2014 - 2021", location: "Dakar, Senegal" },
  { org: "TonuxCorp", role: "CEO", type: "Founder", period: "2010 - Present", location: "Dakar / Montreal" },
];

const skills = {
  Languages: ["Python", "JavaScript", "Java", "Ruby", "TypeScript", "Kotlin", "Dart", "SQL"],
  Frontend: ["React", "Next.js", "Redux", "Tailwind CSS", "Bootstrap"],
  Backend: ["Node.js", "Express", "Spring", "Ruby on Rails", "Laravel"],
  Mobile: ["Flutter", "React Native", "Android", "Ionic"],
  "Database & Cloud": ["PostgreSQL", "MongoDB", "MySQL", "AWS", "Firebase", "Google Cloud", "Azure"],
  DevOps: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "GitLab CI", "SonarQube"],
};

export function AboutPageContent() {
  const t = useTranslations("about_page");

  const values = t.raw("values") as Array<{
    title: string;
    description: string;
  }>;

  return (
    <div className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header with photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid items-center gap-12 lg:grid-cols-3"
        >
          <div className="flex justify-center lg:col-span-1">
            <div className="relative h-64 w-64 overflow-hidden rounded-[8px] border border-surface-border">
              <Image
                src="/tonux.jpg"
                alt="Ndongo Tonux SAMB"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface/80 to-transparent" />
            </div>
          </div>
          <div className="lg:col-span-2">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              A propos
            </p>
            <h1 className="mt-4 text-4xl font-bold text-content sm:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-6 leading-relaxed text-content-secondary">
              {t("bio")}
            </p>
            <div className="mt-6">
              <Button href="/cv_en.pdf" variant="secondary" size="md" external>
                <Download size={14} strokeWidth={1.5} className="mr-2" /> {t("download_cv")}
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <div className="mt-24">
          <h2 className="text-center text-3xl font-bold text-content">
            {t("values_title")}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <h3 className="text-base font-semibold text-content">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-content-secondary">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience timeline */}
        <div className="mt-24">
          <h2 className="text-center text-3xl font-bold text-content">
            {t("experience_title")}
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card flex gap-4 p-5"
              >
                <div className="mt-1 shrink-0">
                  <Briefcase size={18} strokeWidth={1.5} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-content">
                    {exp.org}
                  </h3>
                  <p className="text-sm font-medium text-accent">{exp.role}</p>
                  <div className="mt-1.5 flex flex-wrap gap-3 text-xs text-content-muted">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} strokeWidth={1.5} /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} strokeWidth={1.5} /> {exp.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-24">
          <h2 className="text-center text-3xl font-bold text-content">
            {t("skills_title")}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="glass-card p-5"
              >
                <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-[8px] border border-surface-border bg-surface-elevated px-3 py-1 text-xs text-content-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
