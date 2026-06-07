import * as React from "react";

/**
 * contame hero stat block (the "NPS card"). A gradient panel with an ember
 * glow corner, an oversized italic-serif number, a condensed verdict line,
 * and an optional breakdown strip of smaller tone-colored stats.
 *
 * @startingPoint section="Data" subtitle="Hero stat / NPS card" viewport="520x360"
 */
export interface StatCardBreakdownCell {
  value: string | number;
  label: string;
  /** Color of the value. @default "positive" */
  tone?: "positive" | "warning" | "negative";
}
export interface StatCardProps {
  /** Mono eyebrow label above the number. */
  label?: string;
  /** The big italic-serif headline number (string or number). */
  value: string | number;
  /** Condensed uppercase verdict line under the number. */
  verdict?: string;
  /** Optional row of smaller stats shown as a hairline strip. */
  breakdown?: StatCardBreakdownCell[];
}

export function StatCard(props: StatCardProps): JSX.Element;
