"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Button } from "@/components/ui/Button";

const navItems = [
  { key: "home", href: "" },
  { key: "services", href: "/services" },
  { key: "dropcolis", href: "/dropcolis" },
  { key: "formation", href: "/formation" },
  { key: "portfolio", href: "/portfolio" },
  { key: "about", href: "/a-propos" },
  { key: "contact", href: "/contact" },
];

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary-200/50 bg-white/80 backdrop-blur-lg dark:border-primary-700/50 dark:bg-primary-900/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className="text-xl font-bold text-primary-900 dark:text-white"
        >
          TonuxCorp
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}${item.href}`}
              className="rounded-lg px-3 py-2 text-sm font-medium text-primary-600 transition-colors hover:bg-primary-100 hover:text-primary-900 dark:text-primary-300 dark:hover:bg-primary-800 dark:hover:text-white"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
          <Button href={`/${locale}/contact`} variant="primary" size="sm">
            {t("cta")}
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-primary-600 hover:bg-primary-100 dark:text-primary-300 dark:hover:bg-primary-800"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-primary-200/50 bg-white px-4 pb-4 dark:border-primary-700/50 dark:bg-primary-900 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}${item.href}`}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-medium text-primary-600 hover:bg-primary-100 dark:text-primary-300 dark:hover:bg-primary-800"
            >
              {t(item.key)}
            </Link>
          ))}
          <div className="mt-3">
            <Button
              href={`/${locale}/contact`}
              variant="primary"
              size="md"
              className="w-full"
            >
              {t("cta")}
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
