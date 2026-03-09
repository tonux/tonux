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
    <footer className="border-t border-primary-200 bg-primary-50 dark:border-primary-700 dark:bg-primary-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href={`/${locale}`}
              className="text-xl font-bold text-primary-900 dark:text-white"
            >
              TonuxCorp
            </Link>
            <p className="mt-2 text-sm text-primary-500 dark:text-primary-400">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-900 dark:text-white">
              {t("footer.links_title")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm text-primary-500 transition-colors hover:text-accent dark:text-primary-400 dark:hover:text-accent-400"
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-900 dark:text-white">
              {t("footer.social_title")}
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="rounded-lg p-2 text-primary-500 transition-colors hover:bg-primary-200 hover:text-accent dark:text-primary-400 dark:hover:bg-primary-800 dark:hover:text-accent-400"
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-200 pt-8 text-center text-sm text-primary-400 dark:border-primary-700">
          &copy; {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
