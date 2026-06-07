import React from "react";

/* contame · StatCard — the hero stat block (a.k.a. the NPS card).
   Gradient fill, ember glow corner, an oversized italic-serif number,
   a condensed verdict line, and an optional breakdown strip. */

const CSS = `
.sc {
  background: var(--gradient-card); border: 1px solid var(--line);
  padding: 32px 32px 28px; position: relative; overflow: hidden; min-width: 0;
}
.sc::before {
  content: ""; position: absolute; top: -40px; right: -40px;
  width: 200px; height: 200px;
  background: radial-gradient(circle, rgba(255,69,0,0.30), transparent 60%);
  pointer-events: none;
}
.sc__k {
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.16em;
  text-transform: uppercase; color: var(--ink-dim); position: relative;
}
.sc__big {
  font-family: var(--font-display); font-style: italic; font-size: 128px;
  line-height: 0.92; color: var(--hot); letter-spacing: -0.03em; margin: 4px 0 0; position: relative;
}
.sc__verdict {
  font-family: var(--font-condensed); font-size: 22px; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--ink); margin-top: -4px; position: relative;
}
.sc__breakdown {
  display: grid; grid-auto-flow: column; grid-auto-columns: minmax(0,1fr);
  gap: 1px; background: var(--line); margin-top: 24px; border-top: 1px solid var(--line);
}
.sc__cell { background: var(--bg-2); padding: 16px 12px; display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.sc__cell .v { font-family: var(--font-display); font-style: italic; font-size: 32px; line-height: 1; }
.sc__cell .lbl { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-dim); }
.sc__cell.tone-positive .v { color: var(--positive); }
.sc__cell.tone-warning .v { color: var(--ember); }
.sc__cell.tone-negative .v { color: var(--hot); }
`;

let injected = false;
function ensureStyle() {
  if (typeof document !== "undefined" && !injected) {
    injected = true;
    const el = document.createElement("style");
    el.setAttribute("data-contame", "statcard");
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}

export function StatCard({ label, value, verdict, breakdown }) {
  ensureStyle();
  return (
    <div className="sc">
      {label && <p className="sc__k">{label}</p>}
      <p className="sc__big">{value}</p>
      {verdict && <p className="sc__verdict">{verdict}</p>}
      {breakdown && breakdown.length > 0 && (
        <div className="sc__breakdown">
          {breakdown.map((c, i) => (
            <div key={i} className={`sc__cell tone-${c.tone || "positive"}`}>
              <span className="v">{c.value}</span>
              <span className="lbl">{c.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
