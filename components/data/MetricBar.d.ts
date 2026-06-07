import * as React from "react";

/**
 * contame metric row — a labelled horizontal bar with a glowing hot track and
 * an italic-serif value. Stack several inside a bordered list to compare scores.
 */
export interface MetricBarProps {
  /** Metric name. */
  label: string;
  /** Mono caption under the label. */
  caption?: string;
  /** Numeric value (rendered to 2 decimals) or a preformatted string. */
  value: number | string;
  /** Scale maximum used to compute bar width. @default 10 */
  max?: number;
  /** "low" recolors bar + value to ember to flag a weak score. */
  tone?: "low";
}

export function MetricBar(props: MetricBarProps): JSX.Element;
