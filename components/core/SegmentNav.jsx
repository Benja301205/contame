import React from "react";

/* contame · SegmentNav — the rounded segmented control used to switch between
   editions / locales / views. One item is active (hot fill + glow). */

const CSS = `
.seg { display: inline-flex; align-items: center; gap: 4px; padding: 4px;
  border: 1px solid var(--line); border-radius: var(--radius-pill);
  background: rgba(245,237,225,0.025); }
.seg__item {
  color: var(--ink-dim); font-family: var(--font-mono); font-size: 10px;
  letter-spacing: 0.14em; line-height: 1; padding: 9px 16px;
  border-radius: var(--radius-pill); text-transform: uppercase; white-space: nowrap;
  transition: color var(--dur-fast), background var(--dur-fast); cursor: pointer;
  background: none; border: none;
}
.seg__item:hover { background: rgba(255,69,0,0.10); color: var(--ink); }
.seg__item.is-active { background: var(--hot); color: var(--bg); box-shadow: var(--glow-lg); pointer-events: none; }
`;
let injected = false;
function ensureStyle() {
  if (typeof document !== "undefined" && !injected) {
    injected = true;
    const el = document.createElement("style");
    el.setAttribute("data-contame", "segmentnav");
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}

export function SegmentNav({ items = [], value, onChange }) {
  ensureStyle();
  return (
    <div className="seg" role="tablist">
      {items.map((it) => {
        const id = typeof it === "string" ? it : it.value;
        const label = typeof it === "string" ? it : it.label;
        const active = id === value;
        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={active}
            className={`seg__item${active ? " is-active" : ""}`}
            onClick={() => onChange && onChange(id)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
