import React from "react";

/* contame · HeatMeter — the signature 1–5 "spice" rating selector.
   Each cell fills with a flame gradient; the chosen cell stays lit. */

const CSS = `
.hm { display: flex; gap: 8px; align-items: stretch; flex-wrap: wrap; }
.hm__cell {
  position: relative; flex: 1 1 90px; min-height: 78px;
  background: transparent; border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm); padding: 10px 12px;
  display: flex; flex-direction: column; justify-content: space-between;
  text-align: left; transition: 0.18s; overflow: hidden; cursor: pointer;
}
.hm__cell:hover { border-color: var(--hot); background: rgba(255, 69, 0, 0.05); }
.hm__cell.is-selected { border-color: var(--hot); }
.hm__fill {
  position: absolute; inset: auto 0 0 0;
  background: var(--gradient-flame); transition: height 0.3s ease; z-index: 0; opacity: 0;
}
.hm__cell.is-selected .hm__fill { opacity: 1; }
.hm__cell[data-level="1"] .hm__fill { height: 18%; }
.hm__cell[data-level="2"] .hm__fill { height: 36%; }
.hm__cell[data-level="3"] .hm__fill { height: 56%; }
.hm__cell[data-level="4"] .hm__fill { height: 78%; }
.hm__cell[data-level="5"] .hm__fill { height: 100%; }
.hm__num {
  position: relative; z-index: 1;
  font-family: var(--font-display); font-style: italic; font-size: 32px; line-height: 1; color: var(--ink);
}
.hm__label {
  position: relative; z-index: 1;
  font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ink-dim);
}
`;

let injected = false;
function ensureStyle() {
  if (typeof document !== "undefined" && !injected) {
    injected = true;
    const el = document.createElement("style");
    el.setAttribute("data-contame", "heatmeter");
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}

const DEFAULT_LABELS = ["nada", "poco", "medio", "alto", "picante"];

export function HeatMeter({ value, onChange, labels = DEFAULT_LABELS, name = "heat" }) {
  ensureStyle();
  return (
    <div className="hm" role="radiogroup" aria-label={name}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          type="button"
          key={n}
          className={`hm__cell${String(value) === String(n) ? " is-selected" : ""}`}
          data-level={n}
          onClick={() => onChange && onChange(n)}
          role="radio"
          aria-checked={String(value) === String(n)}
        >
          <span className="hm__fill" />
          <span className="hm__num">{n}</span>
          <span className="hm__label">{labels[n - 1]}</span>
        </button>
      ))}
    </div>
  );
}
