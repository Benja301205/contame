import * as React from "react";

/**
 * contame card — a hairline-bordered surface with hard corners. Optional 2px
 * hot accent bar on the top edge and optional gradient/solid fill.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Show the 2px hot top-edge accent bar. @default false */
  accent?: boolean;
  /** Background fill. Omit for transparent. */
  fill?: "fill" | "gradient";
  /** Inner padding in px. @default 28 */
  padding?: number;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
