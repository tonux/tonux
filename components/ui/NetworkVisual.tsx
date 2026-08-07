"use client";

import { motion } from "framer-motion";

/**
 * Abstract "expertise constellation" used in place of a portrait.
 * A central TonuxCorp node connected to the disciplines the team covers —
 * visually states "collective + network" rather than "one person".
 * Pure SVG/CSS: no image asset, theme-aware through design tokens.
 *
 * Note: every positioning transform lives on a plain wrapper element, because
 * framer-motion writes its own inline `transform` on animated nodes and would
 * otherwise cancel Tailwind's `-translate-*` utilities.
 */

type NetworkVisualProps = {
  center: string;
  nodes: string[];
};

/** Positions in % of the square container (centre = 50/50, orbit radius ≈ 29%). */
const POSITIONS = [
  { x: 50, y: 21.3 },
  { x: 77.4, y: 41.1 },
  { x: 66.9, y: 73.3 },
  { x: 33.1, y: 73.3 },
  { x: 22.6, y: 41.1 },
];

export function NetworkVisual({ center, nodes }: NetworkVisualProps) {
  const points = nodes.slice(0, POSITIONS.length).map((label, i) => ({
    label,
    ...POSITIONS[i],
  }));

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[520px]"
      aria-hidden="true"
    >
      {/* Soft accent glow */}
      <div className="absolute inset-[12%] rounded-full bg-accent-strong/10 blur-3xl" />

      {/* Dot grid + connecting lines */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="tc-dots" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="0.6" cy="0.6" r="0.35" className="fill-content/15" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#tc-dots)" />

        {points.map((p, i) => (
          <motion.line
            key={p.label}
            x1="50"
            y1="50"
            x2={p.x}
            y2={p.y}
            className="stroke-content/25"
            strokeWidth="0.25"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
          />
        ))}
      </svg>

      {/* Rotating dashed orbit */}
      <motion.div
        className="absolute inset-[16%] rounded-full border border-dashed border-surface-border-strong"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-[32%] rounded-full border border-surface-border" />

      {/* Centre node */}
      <div
        className="absolute h-[26%] w-[26%]"
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex h-full w-full items-center justify-center rounded-full bg-content px-2 text-center"
        >
          <span className="font-display text-[11px] font-medium leading-tight tracking-tight text-surface sm:text-sm">
            {center}
          </span>
        </motion.div>
      </div>

      {/* Satellite nodes */}
      {points.map((p, i) => (
        <div
          key={p.label}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-surface-border-strong bg-surface px-2.5 py-1.5 text-[10px] font-medium text-content shadow-sm sm:px-3 sm:text-xs"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-strong" />
            {p.label}
          </motion.span>
        </div>
      ))}
    </div>
  );
}
