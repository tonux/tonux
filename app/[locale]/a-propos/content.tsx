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
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header with photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid items-center gap-12 lg:grid-cols-3"
        >
          <div className="flex justify-center lg:col-span-1">
            <div className="relative h-64 w-64 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/tonux.jpg"
                alt="Ndongo Tonux SAMB"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-primary-900 dark:text-white sm:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-6 text-lg text-primary-600 dark:text-primary-300">
              {t("bio")}
            </p>
            <div className="mt-6">
              <Button href="/cv_en.pdf" variant="outline" size="md" external>
                <Download size={16} className="mr-2" /> {t("download_cv")}
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-primary-900 dark:text-white">
            {t("values_title")}
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-primary-200 bg-white p-6 shadow-sm dark:border-primary-700 dark:bg-primary-900"
              >
                <h3 className="text-lg font-semibold text-primary-900 dark:text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-primary-500 dark:text-primary-400">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience timeline */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-primary-900 dark:text-white">
            {t("experience_title")}
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 rounded-lg border border-primary-200 bg-white p-5 shadow-sm dark:border-primary-700 dark:bg-primary-900"
              >
                <div className="mt-1 shrink-0">
                  <Briefcase size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 dark:text-white">
                    {exp.org}
                  </h3>
                  <p className="text-sm font-medium text-accent">{exp.role}</p>
                  <div className="mt-1 flex flex-wrap gap-3 text-sm text-primary-500 dark:text-primary-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-primary-900 dark:text-white">
            {t("skills_title")}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-xl border border-primary-200 bg-white p-5 shadow-sm dark:border-primary-700 dark:bg-primary-900"
              >
                <h3 className="mb-3 font-semibold text-primary-900 dark:text-white">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-600 dark:bg-primary-800 dark:text-primary-300"
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
