"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/ndongo-tonux-samb/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/tonux", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/tonux_samb", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/tonuxsamb/", label: "Instagram" },
  { icon: Mail, href: "mailto:sambndongo@gmail.com", label: "Email" },
];

const quickLinks = [
  { key: "services", href: "/services" },
  { key: "portfolio", href: "/portfolio" },
  { key: "formation", href: "/formation" },
  { key: "about", href: "/a-propos" },
  { key: "contact", href: "/contact" },
];

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="border-t border-surface-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href={`/${locale}`} className="text-lg font-bold text-content">
              Tonux<span className="text-accent">Corp</span>
            </Link>
            <p className="mt-2 text-sm text-content-secondary">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-content-secondary">
              {t("footer.links_title")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm text-content-muted transition-all duration-300 hover:text-accent"
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-content-secondary">
              {t("footer.social_title")}
            </h3>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="rounded-[8px] p-2 text-content-muted transition-all duration-300 hover:bg-surface-card hover:text-accent"
                >
                  <link.icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-surface-border pt-8 text-center font-mono text-xs text-content-muted">
          &copy; {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
