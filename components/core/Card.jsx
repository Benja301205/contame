import React from "react";

/* contame · Card — a hairline-bordered surface. Optional 2px hot accent bar
   along the top edge; optional gradient fill. Hard corners by default. */

const CSS = `
.crd { position: relative; border: 1px solid var(--line); background: transparent; overflow: hidden; }
.crd--fill { background: var(--bg-2); }
.crd--gradient { background: var(--gradient-card); }
.crd--accent::before {
  content: ""; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--hot);
}
`;
let injected = false;
function ensureStyle() {
  if (typeof document !== "undefined" && !injected) {
    injected = true;
    const el = document.createElement("style");
    el.setAttribute("data-contame", "card");
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}

export function Card({ children, accent = false, fill, padding = 28, className = "", style = {}, ...rest }) {
  ensureStyle();
  const fillClass = fill === "gradient" ? "crd--gradient" : fill ? "crd--fill" : "";
  return (
    <div
      className={`crd ${accent ? "crd--accent" : ""} ${fillClass} ${className}`}
      style={{ padding, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
