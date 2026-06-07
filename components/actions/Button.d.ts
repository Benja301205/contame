import * as React from "react";

/**
 * contame pill button — the brand's primary call to action.
 * Three variants: `primary` (hot fill), `stamp` (cream fill that heats to
 * orange on hover), `ghost` (outline). Optionally trailing arrow chip.
 *
 * @startingPoint section="Actions" subtitle="Pill CTA in three brand variants" viewport="700x200"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style. @default "primary" */
  variant?: "primary" | "stamp" | "ghost";
  /** Padding/size step. @default "lg" */
  size?: "sm" | "md" | "lg";
  /** Show the trailing circular arrow chip. @default false */
  arrow?: boolean;
  /** Element/tag to render as (e.g. "a" for links). @default "button" */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
