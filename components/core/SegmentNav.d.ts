import * as React from "react";

/**
 * contame segmented control — a rounded pill group for switching between
 * editions, locales, or dashboard views. The active item gets a hot fill + glow.
 *
 * @startingPoint section="Navigation" subtitle="Rounded segmented control" viewport="520x120"
 */
export interface SegmentItem { value: string; label: string; }
export interface SegmentNavProps {
  /** Items as strings or {value,label} objects. */
  items: (string | SegmentItem)[];
  /** Currently active value. */
  value?: string;
  /** Called with the selected value. */
  onChange?: (value: string) => void;
}
export function SegmentNav(props: SegmentNavProps): JSX.Element;
