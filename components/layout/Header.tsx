"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

const navItems = [
  { key: "about", href: "/a-propos" },
  { key: "portfolio", href: "/portfolio" },
  { key: "services", href: "/services" },
  { key: "formation", href: "/formation" },
];

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-surface/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="font-display text-lg font-semibold text-content"
        >
          TonuxCorp
        </Link>

        {/* Desktop nav — centered */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}${item.href}`}
              className="px-3 py-2 text-sm text-content-secondary transition-colors duration-300 hover:text-content"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden items-center gap-2 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
          <Link
            href={`/${locale}/contact`}
            className="link-arrow ml-2"
          >
            {t("cta")} <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="rounded-[12px] p-2 text-content-secondary transition-all duration-300 hover:bg-surface-alt"
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
              className="block px-3 py-3 text-base text-content-secondary transition-colors duration-300 hover:text-content"
            >
              {t(item.key)}
            </Link>
          ))}
          <Link
            href={`/${locale}/contact`}
            onClick={() => setMobileOpen(false)}
            className="mt-3 block px-3 py-3 text-base font-medium text-content"
          >
            {t("cta")} ↗
          </Link>
        </nav>
      )}
    </header>
  );
}
