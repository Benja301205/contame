import React from "react";

/* contame · MetricBar — a labelled horizontal metric row.
   Label (+ optional caption) · glowing hot track · italic-serif value.
   `tone="low"` recolors to ember to flag a weak score. */

const CSS = `
.mb {
  display: grid; grid-template-columns: 1fr 180px 68px;
  align-items: center; gap: 20px; padding: 14px 0;
  border-bottom: 1px solid var(--line);
}
.mb__label { font-family: var(--font-sans); font-size: 15px; color: var(--ink); line-height: 1.3; }
.mb__label small {
  color: var(--ink-faint); display: block; font-family: var(--font-mono);
  font-size: 10px; letter-spacing: 0.1em; margin-top: 4px; text-transform: uppercase;
}
.mb__track { height: 4px; background: var(--line); position: relative; overflow: hidden; border-radius: var(--radius-xs); }
.mb__bar { position: absolute; inset: 0 auto 0 0; background: var(--hot); border-radius: var(--radius-xs); box-shadow: var(--glow-sm); }
.mb__val {
  font-family: var(--font-display); font-style: italic; font-size: 28px;
  line-height: 1; color: var(--ink); text-align: right; white-space: nowrap;
}
.mb.tone-low .mb__val { color: var(--ember); }
.mb.tone-low .mb__bar { background: var(--ember); box-shadow: 0 0 8px var(--ember); }
@media (max-width: 600px) { .mb { grid-template-columns: 1fr 80px 52px; gap: 12px; } }
`;

let injected = false;
function ensureStyle() {
  if (typeof document !== "undefined" && !injected) {
    injected = true;
    const el = document.createElement("style");
    el.setAttribute("data-contame", "metricbar");
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}

export function MetricBar({ label, caption, value, max = 10, tone }) {
  ensureStyle();
  const pct = Math.max(0, Math.min(100, (Number(value) / max) * 100));
  return (
    <div className={`mb${tone === "low" ? " tone-low" : ""}`}>
      <span className="mb__label">
        {label}
        {caption && <small>{caption}</small>}
      </span>
      <div className="mb__track">
        <div className="mb__bar" style={{ width: `${pct}%` }} />
      </div>
      <span className="mb__val">{typeof value === "number" ? value.toFixed(2) : value}</span>
    </div>
  );
}
