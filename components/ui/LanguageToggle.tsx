"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = () => {
    const nextLocale = locale === "fr" ? "en" : "fr";
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={switchLocale}
      aria-label={`Switch to ${locale === "fr" ? "English" : "Francais"}`}
      className="rounded-[8px] px-3 py-1.5 font-mono text-xs font-medium text-content-secondary transition-all duration-300 hover:bg-surface-card hover:text-accent"
    >
      {locale === "fr" ? "EN" : "FR"}
    </button>
  );
}
