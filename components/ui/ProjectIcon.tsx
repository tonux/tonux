"use client";

import { useState } from "react";

function getDomain(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return "";
  }
}

export function ProjectIcon({ url, title }: { url: string; title: string }) {
  const [errored, setErrored] = useState(false);
  const domain = getDomain(url);

  if (errored || !domain) {
    return (
      <span className="font-display text-5xl font-light text-content-muted">
        {title.charAt(0)}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
      alt={title}
      onError={() => setErrored(true)}
      className="h-16 w-16 rounded-[12px] object-contain"
    />
  );
}
