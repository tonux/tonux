"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { ArrowUpRight } from "lucide-react";

/**
 * Sticky bottom action bar, mobile only.
 * Hidden on the contact page itself, where the form is already the primary action.
 */
export function MobileCTABar() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const pathname = usePathname();

  if (pathname?.includes("/contact")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-surface-border bg-surface/95 px-4 py-3 backdrop-blur-sm lg:hidden">
      <Link
        href={`/${locale}/contact`}
        className="flex w-full items-center justify-center gap-1.5 rounded-[12px] bg-content px-6 py-3.5 text-sm font-medium text-surface transition-all duration-300 hover:opacity-80"
      >
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        {t("sticky")}
        <ArrowUpRight size={15} strokeWidth={1.5} />
      </Link>
    </div>
  );
}
