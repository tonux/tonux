"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/ndongo-tonux-samb/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/tonux", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/tonux_samb", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/tonuxsamb/", label: "Instagram" },
];

const quickLinks = [
  { key: "services", href: "/services" },
  { key: "portfolio", href: "/portfolio" },
  { key: "about", href: "/a-propos" },
  { key: "contact", href: "/contact" },
];

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="section-dark">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top row: nav links + email */}
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="flex flex-wrap items-center gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.key}
                href={`/${locale}${link.href}`}
                className="text-sm text-dark-muted transition-colors duration-300 hover:text-dark-text"
              >
                {t(`nav.${link.key}`)}
              </Link>
            ))}
          </div>

          <a
            href="mailto:sambndongo@gmail.com"
            className="font-display text-2xl font-light text-dark-text transition-opacity duration-300 hover:opacity-70 lg:text-3xl"
          >
            sambndongo@gmail.com
          </a>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Bottom row: social + copyright */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="rounded-full p-2 text-dark-muted transition-colors duration-300 hover:text-dark-text"
              >
                <link.icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          <p className="text-xs text-dark-muted">
            &copy; {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
