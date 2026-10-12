"use client";

import { useState } from "react";

function getDomain(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return "";
  }
}

export function ProjectIcon({
  url,
  title,
  logo,
}: {
  url: string;
  title: string;
  logo?: string;
}) {
  const [errored, setErrored] = useState(false);
  const domain = getDomain(url);

  if (errored || (!logo && !domain)) {
    return (
      <span className="font-display text-5xl font-light text-content-muted">
        {title.charAt(0)}
      </span>
    );
  }

  if (logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logo}
        alt={title}
        onError={() => setErrored(true)}
        className="h-20 w-auto max-w-[160px] rounded-[12px] object-contain"
      />
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
