import * as React from "react";

/**
 * contame heat meter — a 1–5 "spice" rating selector. Each cell fills with a
 * flame gradient as the score rises; the chosen cell stays lit. The brand's
 * default way to capture any quantitative survey rating.
 *
 * @startingPoint section="Forms" subtitle="1–5 spice rating selector" viewport="700x140"
 */
export interface HeatMeterProps {
  /** Currently selected value, 1–5 (or undefined for none). */
  value?: number | string;
  /** Called with the new numeric value when a cell is clicked. */
  onChange?: (value: number) => void;
  /** Labels under each cell. @default ["nada","poco","medio","alto","picante"] */
  labels?: string[];
  /** Accessible group name. */
  name?: string;
}

export function HeatMeter(props: HeatMeterProps): JSX.Element;
