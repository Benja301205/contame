import React from "react";

/* contame · Badge — two flavors:
   · status pill (dot + label): online / offline / live
   · severity tag (solid): alta / media / baja  */

const CSS = `
.bdg { display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em;
  text-transform: uppercase; line-height: 1; }
.bdg--pill { padding: 8px 12px; border: 1px solid var(--line); border-radius: var(--radius-pill); color: var(--ink-dim); }
.bdg__dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
.bdg--online .bdg__dot { background: var(--positive); box-shadow: 0 0 12px var(--positive); }
.bdg--live .bdg__dot { background: var(--hot); box-shadow: var(--glow-dot); }
.bdg--offline .bdg__dot { background: var(--hot-deep); }

.bdg--tag { padding: 5px 10px; border-radius: var(--radius-sm); color: var(--bg); font-weight: 500; }
.bdg--alta { background: var(--hot); }
.bdg--media { background: var(--ember); }
.bdg--baja { background: var(--ink-faint); color: var(--ink); }
.bdg--soft { background: rgba(255,69,0,0.12); color: var(--hot); }
`;
let injected = false;
function ensureStyle() {
  if (typeof document !== "undefined" && !injected) {
    injected = true;
    const el = document.createElement("style");
    el.setAttribute("data-contame", "badge");
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}

export function Badge({ children, variant = "pill", status = "online", tone = "alta" }) {
  ensureStyle();
  if (variant === "tag") {
    return <span className={`bdg bdg--tag bdg--${tone}`}>{children}</span>;
  }
  return (
    <span className={`bdg bdg--pill bdg--${status}`}>
      <span className="bdg__dot" aria-hidden="true" />
      {children}
    </span>
  );
}
