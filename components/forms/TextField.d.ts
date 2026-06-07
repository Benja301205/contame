import * as React from "react";

/**
 * contame text input — a minimal underline field (single line or multiline)
 * with italic-serif text that heats its baseline on focus. Used for open-ended
 * survey answers and any free text.
 */
export interface TextFieldProps {
  /** Mono uppercase label above the field. */
  label?: string;
  /** Render a <textarea> instead of <input>. @default false */
  multiline?: boolean;
  /** Current value (controlled). */
  value?: string;
  /** Called with the new string value. */
  onChange?: (value: string) => void;
  placeholder?: string;
  /** Rows when multiline. @default 3 */
  rows?: number;
  /** Left-aligned mono meta text under the field (e.g. "Abierta"). */
  meta?: string;
}

export function TextField(props: TextFieldProps): JSX.Element;
