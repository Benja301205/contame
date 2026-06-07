import * as React from "react";

/**
 * contame pull-quote — verbatim survey text with a hot top border, a mono
 * category label, large italic-serif body, and an optional quote mark.
 */
export interface QuoteProps {
  /** Mono uppercase category (e.g. "Lo que más gustó"). */
  category?: string;
  /** The quote body. */
  children?: React.ReactNode;
  /** Mono attribution/meta line below the quote. */
  meta?: string;
  /** Show the oversized decorative quote mark. @default true */
  mark?: boolean;
}

export function Quote(props: QuoteProps): JSX.Element;
