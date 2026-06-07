import * as React from "react";

/**
 * contame badge — a status pill (dot + label) or a solid severity tag.
 */
export interface BadgeProps {
  children?: React.ReactNode;
  /** "pill" = dot + outline; "tag" = solid fill. @default "pill" */
  variant?: "pill" | "tag";
  /** Pill status (sets dot color). @default "online" */
  status?: "online" | "offline" | "live";
  /** Tag severity (sets fill). @default "alta" */
  tone?: "alta" | "media" | "baja" | "soft";
}
export function Badge(props: BadgeProps): JSX.Element;
