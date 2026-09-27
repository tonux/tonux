"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  BookOpen,
  Clock,
  HandHeart,
  Lock,
  Moon,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

// Vert Sabiq : #0B7A52 sur fond clair, #22E39A sur fond sombre.
const green = "text-[#0B7A52] dark:text-[#22E39A]";

type Feature = { title: string; text: string };
const featureIcons: LucideIcon[] = [Clock, BookOpen, Moon, Lock, HandHeart];
const screenshots = [
  "01_priere",
  "02_coran",
  "03_prononciation",
  "04_jeune",
  "05_focus",
  "06_societe",
];

export function SabiqPageContent() {
  const t = useTranslations("sabiq_page");
  const locale = useLocale();
  const features = t.raw("features") as Feature[];
  const privacyPoints = t.raw("privacy_points") as string[];
  const screenshotAlts = t.raw("screenshot_alts") as string[];

  return (
    <div className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center"
        >
          <Image
            src="/sabiq/icon.png"
            alt={t("icon_alt")}
            width={112}
            height={112}
            priority
            className="rounded-[26px] shadow-lg"
          />
          <div className="section-label mx-auto mt-8 w-fit">{t("label")}</div>
          <h1 className="mt-4 font-display text-display-lg text-content">
            Sabiq{" "}
            <span lang="ar" dir="rtl" className={`font-normal ${green}`}>
              سابق
            </span>
          </h1>
          <p className="mt-4 font-display text-2xl text-content">
            {t("tagline")}
          </p>
          <p className="mt-4 max-w-2xl text-lg text-content-secondary">
            {t("subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="pill">{t("badge_ios")}</span>
            <span className="pill">{t("badge_android")}</span>
          </div>
        </motion.div>

        {/* Name meaning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 rounded-[12px] bg-dark p-8 text-center text-dark-text lg:p-12"
        >
          <p
            lang="ar"
            dir="rtl"
            className="font-serif text-3xl leading-relaxed text-[#E8C170] lg:text-4xl"
          >
            فَٱسْتَبِقُوا۟ ٱلْخَيْرَٰتِ
          </p>
          <p className="mt-3 text-dark-muted">{t("verse")}</p>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed">
            {t("meaning")}
          </p>
        </motion.div>

        {/* Features */}
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = featureIcons[i] ?? ShieldCheck;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="card p-8"
              >
                <Icon size={22} strokeWidth={1.5} className={green} />
                <h2 className="mt-4 text-xl font-semibold text-content">
                  {f.title}
                </h2>
                <p className="mt-3 leading-relaxed text-content-secondary">
                  {f.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Screenshots */}
        <div className="mt-20">
          <h2 className="text-center font-display text-display-md text-content">
            {t("screens_title")}
          </h2>
          <div className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-6 lg:overflow-visible lg:px-0">
            {screenshots.map((name, i) => (
              <Image
                key={name}
                src={`/sabiq/${name}.webp`}
                alt={screenshotAlts[i] ?? ""}
                width={660}
                height={1434}
                className="w-56 shrink-0 snap-center rounded-[16px] border border-surface-border lg:w-full"
              />
            ))}
          </div>
        </div>

        {/* Privacy summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 card p-8 lg:p-12"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck size={22} strokeWidth={1.5} className={green} />
            <h2 className="text-xl font-semibold text-content">
              {t("privacy_title")}
            </h2>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {privacyPoints.map((p) => (
              <li key={p} className="text-sm leading-relaxed text-content-secondary">
                — {p}
              </li>
            ))}
          </ul>
          <Link
            href={`/${locale}/sabiq/confidentialite`}
            className="link-arrow mt-8"
          >
            {t("privacy_cta")}
          </Link>
        </motion.div>

        {/* Contact */}
        <div className="mt-12 text-center">
          <p className="text-content-secondary">{t("support")}</p>
          <a
            href="mailto:sambndongo@gmail.com?subject=Sabiq"
            className="link-arrow mt-2 inline-flex"
          >
            sambndongo@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
