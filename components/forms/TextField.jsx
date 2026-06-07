import React from "react";

/* contame · TextField — minimal underline input/textarea.
   Italic serif text on a single bottom hairline that heats on focus. */

const CSS = `
.tf { display: flex; flex-direction: column; gap: 6px; width: 100%; }
.tf__label {
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.16em;
  text-transform: uppercase; color: var(--ink-dim);
}
.tf__control {
  width: 100%; background: transparent; border: none;
  border-bottom: 1px solid var(--line-strong); color: var(--ink);
  font-family: var(--font-display); font-style: italic; font-size: 24px;
  line-height: 1.4; padding: 12px 0 16px; resize: none;
  transition: border-color var(--dur-fast);
}
.tf__control:focus { outline: none; border-bottom-color: var(--hot); }
.tf__control::placeholder { color: var(--ink-faint); font-style: italic; }
.tf__meta {
  display: flex; justify-content: space-between;
  font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--ink-faint);
}
`;

let injected = false;
function ensureStyle() {
  if (typeof document !== "undefined" && !injected) {
    injected = true;
    const el = document.createElement("style");
    el.setAttribute("data-contame", "textfield");
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}

export function TextField({
  label,
  multiline = false,
  value = "",
  onChange,
  placeholder,
  rows = 3,
  meta,
  ...rest
}) {
  ensureStyle();
  const Control = multiline ? "textarea" : "input";
  const charCount = typeof value === "string" && value.length > 0 ? `${value.length} caracteres` : "";
  return (
    <label className="tf">
      {label && <span className="tf__label">{label}</span>}
      <Control
        className="tf__control"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
        {...(multiline ? { rows } : {})}
        {...rest}
      />
      {(meta || multiline) && (
        <span className="tf__meta">
          <span>{meta}</span>
          <span>{charCount}</span>
        </span>
      )}
    </label>
  );
}
