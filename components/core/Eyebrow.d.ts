import * as React from "react";

/**
 * contame eyebrow kicker — the small mono uppercase label above headings and
 * section heads. Optional leading glow dot.
 */
export interface EyebrowProps {
  children?: React.ReactNode;
  /** Show a leading hot glow dot. @default false */
  dot?: boolean;
  /** "hot" colors the text orange. */
  tone?: "hot";
  className?: string;
}
export function Eyebrow(props: EyebrowProps): JSX.Element;
