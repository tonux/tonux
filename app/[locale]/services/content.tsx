"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Settings, Code, Users, GraduationCap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
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
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-primary-900 dark:text-white sm:text-5xl">
            {t("services_page.title")}
          </h1>
          <p className="mt-4 text-xl text-primary-600 dark:text-primary-300">
            {t("services_page.subtitle")}
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-primary-200 bg-white p-8 shadow-sm dark:border-primary-700 dark:bg-primary-900"
              >
                <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3 text-accent">
                  <Icon size={28} />
                </div>
                <h2 className="text-xl font-semibold text-primary-900 dark:text-white">
                  {service.title}
                </h2>
                <p className="mt-3 text-primary-600 dark:text-primary-300">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Process */}
        <div className="mt-24">
          <h2 className="text-center text-3xl font-bold text-primary-900 dark:text-white">
            {t("services_page.process_title")}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-primary-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-primary-500 dark:text-primary-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-24">
          <h2 className="text-center text-3xl font-bold text-primary-900 dark:text-white">
            {t("services_page.faq_title")}
          </h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Button href={`/${locale}/contact`} variant="primary" size="lg">
            {t("nav.cta")}
          </Button>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg border border-primary-200 dark:border-primary-700">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-5 text-left"
      >
        <span className="font-medium text-primary-900 dark:text-white">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`text-primary-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="border-t border-primary-200 px-5 pb-5 pt-3 text-primary-600 dark:border-primary-700 dark:text-primary-300">
          {answer}
        </div>
      )}
    </div>
  );
}
