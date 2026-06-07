import React from "react";

/* contame · Eyebrow — the small mono kicker that sits above headings.
   Optional leading glow dot. */

const CSS = `
.eb-c { display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.18em;
  text-transform: uppercase; color: var(--ink-dim); }
.eb-c__dot { width: 6px; height: 6px; border-radius: 50%; background: var(--hot); box-shadow: var(--glow-dot); flex-shrink: 0; }
.eb-c--hot { color: var(--hot); }
`;
let injected = false;
function ensureStyle() {
  if (typeof document !== "undefined" && !injected) {
    injected = true;
    const el = document.createElement("style");
    el.setAttribute("data-contame", "eyebrow");
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}

export function Eyebrow({ children, dot = false, tone, className = "" }) {
  ensureStyle();
  return (
    <span className={`eb-c ${tone === "hot" ? "eb-c--hot" : ""} ${className}`}>
      {dot && <span className="eb-c__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
