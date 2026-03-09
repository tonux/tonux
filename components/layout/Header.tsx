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
    <header className="glass-nav sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className="text-lg font-bold tracking-tight text-content"
        >
          Tonux<span className="text-accent">Corp</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}${item.href}`}
              className="rounded-[8px] px-3 py-2 text-sm font-medium text-content-secondary transition-all duration-300 hover:bg-surface-card hover:text-content"
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
            className="rounded-[8px] p-2 text-content-secondary transition-all duration-300 hover:bg-surface-card"
          >
            {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-surface-border bg-surface px-4 pb-4 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}${item.href}`}
              onClick={() => setMobileOpen(false)}
              className="block rounded-[8px] px-3 py-3 text-base font-medium text-content-secondary transition-all duration-300 hover:bg-surface-card hover:text-content"
            >
              {t(item.key)}
            </Link>
          ))}
          <div className="mt-3">
            <Button href={`/${locale}/contact`} variant="primary" size="md" className="w-full">
              {t("cta")}
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
