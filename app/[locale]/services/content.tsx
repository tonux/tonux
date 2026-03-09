"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Settings, Code, Users, GraduationCap, ChevronDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const icons = [Settings, Code, Users, GraduationCap];

export function ServicesPageContent() {
  const t = useTranslations();
  const locale = useLocale();

  const services = t.raw("services.items") as Array<{
    title: string;
    description: string;
  }>;

  const steps = t.raw("services_page.process_steps") as Array<{
    title: string;
    description: string;
  }>;

  const faqs = t.raw("services_page.faq") as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <div className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="section-label mx-auto w-fit">Services</div>
          <h1 className="mt-4 font-display text-display-lg text-content">
            {t("services_page.title")}
          </h1>
          <p className="mt-4 text-lg text-content-secondary">
            {t("services_page.subtitle")}
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="card p-8"
              >
                <div className="mb-4 inline-flex rounded-[12px] bg-surface-alt p-3">
                  <Icon size={24} strokeWidth={1.5} className="text-content" />
                </div>
                <h2 className="text-xl font-semibold text-content">
                  {service.title}
                </h2>
                <p className="mt-3 leading-relaxed text-content-secondary">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Process */}
        <div className="mt-24">
          <h2 className="text-center font-display text-display-md text-content">
            {t("services_page.process_title")}
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[12px] bg-content font-mono text-lg font-bold text-surface">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-base font-semibold text-content">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-content-muted">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-24">
          <h2 className="text-center font-display text-display-md text-content">
            {t("services_page.faq_title")}
          </h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            href={`/${locale}/contact`}
            className="link-arrow inline-flex"
          >
            {t("nav.cta")} <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-5 text-left transition-colors duration-300 hover:bg-surface-elevated"
      >
        <span className="text-sm font-medium text-content">
          {question}
        </span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={`shrink-0 text-content-muted transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="border-t border-surface-border px-5 pb-5 pt-3 text-sm leading-relaxed text-content-secondary">
          {answer}
        </div>
      )}
    </div>
  );
}
