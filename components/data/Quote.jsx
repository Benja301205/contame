import React from "react";

/* contame · Quote — a verbatim pull-quote. A 2px hot top border, a mono
   category, big italic-serif text, and an optional oversized quote mark. */

const CSS = `
.qt { border-top: 2px solid var(--hot); padding-top: 22px; position: relative; }
.qt__mark {
  font-family: var(--font-display); font-style: italic; font-size: 96px;
  line-height: 0.5; color: var(--hot); position: absolute; top: 6px; right: 0; pointer-events: none;
}
.qt__cat {
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--ink-dim); margin-bottom: 14px;
}
.qt__text {
  font-family: var(--font-display); font-style: italic; font-size: 28px;
  line-height: 1.25; color: var(--ink); max-width: 30ch;
}
.qt__meta {
  font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--ink-faint); margin-top: 14px;
}
`;

let injected = false;
function ensureStyle() {
  if (typeof document !== "undefined" && !injected) {
    injected = true;
    const el = document.createElement("style");
    el.setAttribute("data-contame", "quote");
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}

export function Quote({ category, children, meta, mark = true }) {
  ensureStyle();
  return (
    <figure className="qt">
      {mark && <span className="qt__mark" aria-hidden="true">&#8220;</span>}
      {category && <figcaption className="qt__cat">{category}</figcaption>}
      <blockquote className="qt__text">{children}</blockquote>
      {meta && <div className="qt__meta">{meta}</div>}
    </figure>
  );
}
