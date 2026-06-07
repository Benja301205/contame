/* @ds-bundle: {"format":3,"namespace":"ContameDesignSystem_8cf950","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"SegmentNav","sourcePath":"components/core/SegmentNav.jsx"},{"name":"MetricBar","sourcePath":"components/data/MetricBar.jsx"},{"name":"Quote","sourcePath":"components/data/Quote.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"HeatMeter","sourcePath":"components/forms/HeatMeter.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"254aea4d036f","components/core/Badge.jsx":"75be46b316c3","components/core/Card.jsx":"e847a308a975","components/core/Eyebrow.jsx":"097e88c473ee","components/core/SegmentNav.jsx":"e2743bb444c5","components/data/MetricBar.jsx":"761f68b8e662","components/data/Quote.jsx":"6e569617ea8e","components/data/StatCard.jsx":"ceaee8541eaa","components/forms/HeatMeter.jsx":"8967c822c8f5","components/forms/TextField.jsx":"bc7d0ff50c1e","ui_kits/dashboard/Dashboard.jsx":"156e1fee8e3e","ui_kits/dashboard/data.js":"79f15f16a5c5","ui_kits/survey-app/FormScreen.jsx":"0ad44f52cecd","ui_kits/survey-app/LandingScreen.jsx":"9941319cedc9","ui_kits/survey-app/ResultsScreen.jsx":"0fc5b1c40191","ui_kits/survey-app/Topbar.jsx":"d93fd428737e","ui_kits/survey-app/data.js":"cf3d6db04c10"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ContameDesignSystem_8cf950 = window.ContameDesignSystem_8cf950 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* contame · Button — pill action in three brand variants.
   Self-contained: injects its own scoped CSS (uses design-system
   tokens) once, so it works anywhere styles.css is linked. */

const CSS = `
.cta-btn {
  display: inline-flex; align-items: center; gap: 14px;
  border-radius: var(--radius-pill);
  font-family: var(--font-mono);
  letter-spacing: 0.16em; text-transform: uppercase; font-weight: 500;
  transition: transform var(--dur-fast) var(--ease), background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease), border-color var(--dur-fast) var(--ease);
  cursor: pointer; white-space: nowrap; border: 1px solid transparent;
  text-decoration: none; line-height: 1;
}
.cta-btn--lg { padding: 20px 32px; font-size: 13px; }
.cta-btn--md { padding: 15px 24px; font-size: 12px; }
.cta-btn--sm { padding: 10px 18px; font-size: 11px; }

/* primary — hot fill, inverts to cream on hover */
.cta-btn--primary { background: var(--hot); color: var(--bg); }
.cta-btn--primary:hover { background: var(--ink); color: var(--bg); transform: translateY(-2px); }

/* stamp — cream fill (dark text), heats up to hot on hover */
.cta-btn--stamp { background: var(--ink); color: var(--bg); }
.cta-btn--stamp:hover { background: var(--hot); color: var(--ink); transform: translateY(-2px); }

/* ghost — outline only */
.cta-btn--ghost { background: none; color: var(--ink); border-color: var(--line-strong); }
.cta-btn--ghost:hover { border-color: var(--hot); color: var(--hot); }

.cta-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none !important; }

.cta-btn__arrow {
  width: 22px; height: 22px; border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 12px; flex-shrink: 0;
  transition: transform var(--dur-fast) var(--ease), background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease);
}
.cta-btn--primary .cta-btn__arrow,
.cta-btn--stamp .cta-btn__arrow { background: var(--bg); color: var(--hot); }
.cta-btn--ghost .cta-btn__arrow { background: var(--hot); color: var(--bg); }
.cta-btn:hover .cta-btn__arrow { transform: translateX(3px); }
`;
let injected = false;
function ensureStyle() {
  if (typeof document !== "undefined" && !injected) {
    injected = true;
    const el = document.createElement("style");
    el.setAttribute("data-contame", "button");
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Button({
  children,
  variant = "primary",
  size = "lg",
  arrow = false,
  as = "button",
  className = "",
  ...rest
}) {
  ensureStyle();
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `cta-btn cta-btn--${variant} cta-btn--${size} ${className}`
  }, rest), children, arrow && /*#__PURE__*/React.createElement("span", {
    className: "cta-btn__arrow",
    "aria-hidden": "true"
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
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
function Badge({
  children,
  variant = "pill",
  status = "online",
  tone = "alta"
}) {
  ensureStyle();
  if (variant === "tag") {
    return /*#__PURE__*/React.createElement("span", {
      className: `bdg bdg--tag bdg--${tone}`
    }, children);
  }
  return /*#__PURE__*/React.createElement("span", {
    className: `bdg bdg--pill bdg--${status}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "bdg__dot",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Card({
  children,
  accent = false,
  fill,
  padding = 28,
  className = "",
  style = {},
  ...rest
}) {
  ensureStyle();
  const fillClass = fill === "gradient" ? "crd--gradient" : fill ? "crd--fill" : "";
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `crd ${accent ? "crd--accent" : ""} ${fillClass} ${className}`,
    style: {
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
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
function Eyebrow({
  children,
  dot = false,
  tone,
  className = ""
}) {
  ensureStyle();
  return /*#__PURE__*/React.createElement("span", {
    className: `eb-c ${tone === "hot" ? "eb-c--hot" : ""} ${className}`
  }, dot && /*#__PURE__*/React.createElement("span", {
    className: "eb-c__dot",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/SegmentNav.jsx
try { (() => {
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
function SegmentNav({
  items = [],
  value,
  onChange
}) {
  ensureStyle();
  return /*#__PURE__*/React.createElement("div", {
    className: "seg",
    role: "tablist"
  }, items.map(it => {
    const id = typeof it === "string" ? it : it.value;
    const label = typeof it === "string" ? it : it.label;
    const active = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      type: "button",
      role: "tab",
      "aria-selected": active,
      className: `seg__item${active ? " is-active" : ""}`,
      onClick: () => onChange && onChange(id)
    }, label);
  }));
}
Object.assign(__ds_scope, { SegmentNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SegmentNav.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricBar.jsx
try { (() => {
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
function MetricBar({
  label,
  caption,
  value,
  max = 10,
  tone
}) {
  ensureStyle();
  const pct = Math.max(0, Math.min(100, Number(value) / max * 100));
  return /*#__PURE__*/React.createElement("div", {
    className: `mb${tone === "low" ? " tone-low" : ""}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "mb__label"
  }, label, caption && /*#__PURE__*/React.createElement("small", null, caption)), /*#__PURE__*/React.createElement("div", {
    className: "mb__track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb__bar",
    style: {
      width: `${pct}%`
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "mb__val"
  }, typeof value === "number" ? value.toFixed(2) : value));
}
Object.assign(__ds_scope, { MetricBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricBar.jsx", error: String((e && e.message) || e) }); }

// components/data/Quote.jsx
try { (() => {
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
function Quote({
  category,
  children,
  meta,
  mark = true
}) {
  ensureStyle();
  return /*#__PURE__*/React.createElement("figure", {
    className: "qt"
  }, mark && /*#__PURE__*/React.createElement("span", {
    className: "qt__mark",
    "aria-hidden": "true"
  }, "\u201C"), category && /*#__PURE__*/React.createElement("figcaption", {
    className: "qt__cat"
  }, category), /*#__PURE__*/React.createElement("blockquote", {
    className: "qt__text"
  }, children), meta && /*#__PURE__*/React.createElement("div", {
    className: "qt__meta"
  }, meta));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Quote.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
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
function StatCard({
  label,
  value,
  verdict,
  breakdown
}) {
  ensureStyle();
  return /*#__PURE__*/React.createElement("div", {
    className: "sc"
  }, label && /*#__PURE__*/React.createElement("p", {
    className: "sc__k"
  }, label), /*#__PURE__*/React.createElement("p", {
    className: "sc__big"
  }, value), verdict && /*#__PURE__*/React.createElement("p", {
    className: "sc__verdict"
  }, verdict), breakdown && breakdown.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "sc__breakdown"
  }, breakdown.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `sc__cell tone-${c.tone || "positive"}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, c.value), /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, c.label)))));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/HeatMeter.jsx
try { (() => {
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
function HeatMeter({
  value,
  onChange,
  labels = DEFAULT_LABELS,
  name = "heat"
}) {
  ensureStyle();
  return /*#__PURE__*/React.createElement("div", {
    className: "hm",
    role: "radiogroup",
    "aria-label": name
  }, [1, 2, 3, 4, 5].map(n => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: n,
    className: `hm__cell${String(value) === String(n) ? " is-selected" : ""}`,
    "data-level": n,
    onClick: () => onChange && onChange(n),
    role: "radio",
    "aria-checked": String(value) === String(n)
  }, /*#__PURE__*/React.createElement("span", {
    className: "hm__fill"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hm__num"
  }, n), /*#__PURE__*/React.createElement("span", {
    className: "hm__label"
  }, labels[n - 1]))));
}
Object.assign(__ds_scope, { HeatMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/HeatMeter.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function TextField({
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
  return /*#__PURE__*/React.createElement("label", {
    className: "tf"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "tf__label"
  }, label), /*#__PURE__*/React.createElement(Control, _extends({
    className: "tf__control",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value)
  }, multiline ? {
    rows
  } : {}, rest)), (meta || multiline) && /*#__PURE__*/React.createElement("span", {
    className: "tf__meta"
  }, /*#__PURE__*/React.createElement("span", null, meta), /*#__PURE__*/React.createElement("span", null, charCount)));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Dashboard.jsx
try { (() => {
/* contame dashboard — single navigable analytics view */

function Dashboard() {
  const {
    SegmentNav,
    StatCard,
    MetricBar,
    Card,
    Quote,
    Eyebrow,
    Badge
  } = window.ContameDesignSystem_8cf950;
  const DD = window.DashData;
  const [ed, setEd] = React.useState("2026");
  const D = DD.data[ed];
  const maxMention = Math.max(...D.mentions.map(m => m.count));
  return /*#__PURE__*/React.createElement("div", {
    className: "dash dash-bg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-page"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "edition-nav"
  }, /*#__PURE__*/React.createElement("span", {
    className: "edition-brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/chili.png",
    alt: "",
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("span", null, "contame")), /*#__PURE__*/React.createElement(SegmentNav, {
    items: DD.editions,
    value: ed,
    onChange: setEd
  })), /*#__PURE__*/React.createElement("header", {
    className: "dash-hero"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    dot: true
  }, "Feedback \xB7 ", D.period, " \xB7 ", D.total, " respuestas"), /*#__PURE__*/React.createElement("h1", {
    className: "dash-title"
  }, "Boot", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "Camp")), /*#__PURE__*/React.createElement("p", {
    className: "dash-sub"
  }, "Le\xEDdo en serio, no archivado.")), /*#__PURE__*/React.createElement(StatCard, {
    label: "Lo recomendar\xEDan",
    value: D.recommend,
    verdict: D.verdict,
    breakdown: D.breakdown
  })), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("h2", null, "M\xE9tricas ", /*#__PURE__*/React.createElement("em", null, "generales")), /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, D.total, " respuestas \xB7 escala 1\u201310")), /*#__PURE__*/React.createElement("div", {
    className: "metric-list"
  }, D.metrics.map(m => /*#__PURE__*/React.createElement(MetricBar, {
    key: m.label,
    label: m.label,
    caption: m.caption,
    value: m.value,
    tone: m.tone
  })))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("h2", null, "Equipo ", /*#__PURE__*/React.createElement("em", null, "organizador")), /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "Lo que destacaron")), /*#__PURE__*/React.createElement("div", {
    className: "count-grid"
  }, D.teams.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.cat,
    accent: true,
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    className: "count-num"
  }, "~", t.count, /*#__PURE__*/React.createElement("small", null, "menciones")), /*#__PURE__*/React.createElement("p", {
    className: "count-cat"
  }, t.cat), /*#__PURE__*/React.createElement("p", {
    className: "count-quote"
  }, t.quote))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("h2", null, "\xC1reas de ", /*#__PURE__*/React.createElement("em", null, "mejora")), /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "Conteo por categor\xEDa")), /*#__PURE__*/React.createElement("div", {
    className: "pain-grid"
  }, D.pains.map((p, i) => /*#__PURE__*/React.createElement("div", {
    className: "pain-cell",
    key: p.cat
  }, /*#__PURE__*/React.createElement("div", {
    className: "count-num",
    style: {
      fontSize: 56
    }
  }, p.count, /*#__PURE__*/React.createElement("small", null, "menciones")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "count-cat",
    style: {
      margin: 0
    }
  }, p.cat), i === 0 && /*#__PURE__*/React.createElement(Badge, {
    variant: "tag",
    tone: "alta"
  }, "Top")), /*#__PURE__*/React.createElement("p", {
    className: "count-quote"
  }, p.quote))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("h2", null, "Menciones ", /*#__PURE__*/React.createElement("em", null, "de color")), /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "Lo m\xE1s nombrado")), /*#__PURE__*/React.createElement("div", {
    className: "dist-list"
  }, D.mentions.map(m => /*#__PURE__*/React.createElement("div", {
    className: "dist-row",
    key: m.label
  }, /*#__PURE__*/React.createElement("span", {
    className: "dist-label"
  }, m.label), /*#__PURE__*/React.createElement("div", {
    className: "dist-track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dist-bar",
    style: {
      width: `${m.count / maxMention * 100}%`
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "dist-count"
  }, m.count))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("h2", null, "Citas ", /*#__PURE__*/React.createElement("em", null, "destacadas")), /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "Verbatim \xB7 sin correcci\xF3n")), /*#__PURE__*/React.createElement("div", {
    className: "quotes"
  }, D.quotes.map(q => /*#__PURE__*/React.createElement(Quote, {
    key: q.cat,
    category: q.cat,
    meta: "Verbatim"
  }, q.text)))), /*#__PURE__*/React.createElement("footer", {
    className: "dash-footer"
  }, /*#__PURE__*/React.createElement("span", null, "contame \xB7 an\xE1lisis de feedback \xB7 ", D.period), /*#__PURE__*/React.createElement("span", null, "Feedback que ", /*#__PURE__*/React.createElement("b", null, "se lee")))));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/data.js
try { (() => {
/* contame dashboard — sample data: two editions of an event-feedback survey. */
window.DashData = {
  editions: [{
    value: "2026",
    label: "Edición 2026"
  }, {
    value: "2025",
    label: "Edición 2025"
  }],
  data: {
    "2026": {
      period: "Jun 2026",
      total: 102,
      recommend: "9.98",
      verdict: "100 de 102 pusieron 10",
      breakdown: [{
        value: "9.76",
        label: "General",
        tone: "positive"
      }, {
        value: "9.53",
        label: "Organización",
        tone: "warning"
      }, {
        value: "8.60",
        label: "Mentores",
        tone: "negative"
      }],
      metrics: [{
        label: "Calificación general",
        caption: "Q1",
        value: 9.76
      }, {
        label: "El lugar",
        caption: "Q2",
        value: 9.41
      }, {
        label: "La comida",
        caption: "Q3",
        value: 9.07
      }, {
        label: "Organización",
        caption: "Q4",
        value: 9.53
      }, {
        label: "Mentores",
        caption: "Q5 · mínimo",
        value: 8.6,
        tone: "low"
      }],
      teams: [{
        count: 42,
        cat: "Organización",
        quote: "Todo fluyó. Se notó el laburo detrás de cada detalle."
      }, {
        count: 28,
        cat: "Mentoría",
        quote: "Los mentores empujaron sin imponer. Justo."
      }],
      pains: [{
        count: 18,
        cat: "Tiempos",
        quote: "La última entrega se sintió corta."
      }, {
        count: 11,
        cat: "Espacio común",
        quote: "Faltó un lugar para cruzarse entre equipos."
      }, {
        count: 7,
        cat: "Logística",
        quote: "El arranque del día 2 se demoró."
      }, {
        count: 5,
        cat: "Comunicación",
        quote: "Algunas consignas llegaron tarde."
      }],
      mentions: [{
        label: "Comida",
        count: 40
      }, {
        label: "Café",
        count: 33
      }, {
        label: "Música",
        count: 21
      }, {
        label: "Premios",
        count: 14
      }],
      quotes: [{
        cat: "Lo que más gustó",
        text: "La energía del cierre fue otra cosa."
      }, {
        cat: "Qué agregaría",
        text: "Un espacio para cruzarse con otros equipos antes de arrancar."
      }]
    },
    "2025": {
      period: "Jun 2025",
      total: 88,
      recommend: "9.71",
      verdict: "78 de 88 pusieron 10",
      breakdown: [{
        value: "9.40",
        label: "General",
        tone: "positive"
      }, {
        value: "9.10",
        label: "Organización",
        tone: "warning"
      }, {
        value: "8.20",
        label: "Mentores",
        tone: "negative"
      }],
      metrics: [{
        label: "Calificación general",
        caption: "Q1",
        value: 9.4
      }, {
        label: "El lugar",
        caption: "Q2",
        value: 9.0
      }, {
        label: "La comida",
        caption: "Q3",
        value: 8.6
      }, {
        label: "Organización",
        caption: "Q4",
        value: 9.1
      }, {
        label: "Mentores",
        caption: "Q5 · mínimo",
        value: 8.2,
        tone: "low"
      }],
      teams: [{
        count: 31,
        cat: "Organización",
        quote: "Buena base, con margen para pulir."
      }, {
        count: 22,
        cat: "Mentoría",
        quote: "Acompañaron, aunque pocos para tantos equipos."
      }],
      pains: [{
        count: 21,
        cat: "Tiempos",
        quote: "Se hizo largo el segundo día."
      }, {
        count: 14,
        cat: "Espacio común",
        quote: "Faltaba dónde sentarse a charlar."
      }, {
        count: 9,
        cat: "Logística",
        quote: "WiFi intermitente a la tarde."
      }, {
        count: 6,
        cat: "Comunicación",
        quote: "Cambios de horario sobre la marcha."
      }],
      mentions: [{
        label: "Comida",
        count: 28
      }, {
        label: "Café",
        count: 24
      }, {
        label: "Música",
        count: 12
      }, {
        label: "Premios",
        count: 9
      }],
      quotes: [{
        cat: "Lo que más gustó",
        text: "Conocer gente con la misma locura."
      }, {
        cat: "Qué agregaría",
        text: "Más tiempo de mentoría uno a uno."
      }]
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/data.js", error: String((e && e.message) || e) }); }

// ui_kits/survey-app/FormScreen.jsx
try { (() => {
/* contame survey app — Form screen (heat meters + open text) */

function FormScreen({
  go,
  onSubmit
}) {
  const {
    Button,
    HeatMeter,
    TextField,
    Badge
  } = window.ContameDesignSystem_8cf950;
  const D = window.SurveyData;
  const empty = {};
  [...D.scaleQuestions, ...D.openQuestions].forEach(q => empty[q.key] = "");
  const [data, setData] = React.useState(empty);
  const [toast, setToast] = React.useState(null);
  const total = D.scaleQuestions.length + D.openQuestions.length;
  const filled = Object.values(data).filter(v => String(v).trim() !== "").length;
  const set = (k, v) => setData(d => ({
    ...d,
    [k]: v
  }));
  const submit = () => {
    if (filled < total) {
      setToast({
        msg: `Faltan ${total - filled} respuestas`,
        err: true
      });
      setTimeout(() => setToast(null), 2400);
      return;
    }
    onSubmit();
    go("results");
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("header", {
    className: "form-header"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "form-title"
  }, /*#__PURE__*/React.createElement("em", null, "Contanos.")), /*#__PURE__*/React.createElement(Badge, {
    status: "online"
  }, "En l\xEDnea")), /*#__PURE__*/React.createElement("div", {
    className: "progress-strip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono-label"
  }, total, " preguntas \xB7 \u2248 2 min"), /*#__PURE__*/React.createElement("span", {
    className: "count"
  }, /*#__PURE__*/React.createElement("b", null, filled), " / ", total)), /*#__PURE__*/React.createElement("div", {
    className: "progress-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fill",
    style: {
      width: `${filled / total * 100}%`
    }
  }))), D.scaleQuestions.map(q => /*#__PURE__*/React.createElement("div", {
    className: "question",
    key: q.key
  }, /*#__PURE__*/React.createElement("div", {
    className: "q-num"
  }, String(q.n).padStart(2, "0"), /*#__PURE__*/React.createElement("small", null, "Escala \xB7 1\u20135")), /*#__PURE__*/React.createElement("div", {
    className: "q-body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "q-text"
  }, q.q), /*#__PURE__*/React.createElement(HeatMeter, {
    value: data[q.key],
    onChange: v => set(q.key, v),
    name: q.key
  })))), D.openQuestions.map(q => /*#__PURE__*/React.createElement("div", {
    className: "question",
    key: q.key
  }, /*#__PURE__*/React.createElement("div", {
    className: "q-num"
  }, String(q.n).padStart(2, "0"), /*#__PURE__*/React.createElement("small", null, "Abierta")), /*#__PURE__*/React.createElement("div", {
    className: "q-body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "q-text"
  }, q.q), /*#__PURE__*/React.createElement(TextField, {
    multiline: true,
    value: data[q.key],
    onChange: v => set(q.key, v),
    placeholder: q.placeholder
  })))), /*#__PURE__*/React.createElement("div", {
    className: "submit-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "note"
  }, filled === total ? "Listo — enviá" : `Faltan ${total - filled}`), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    onClick: submit,
    disabled: filled < total
  }, "Enviar")), toast && /*#__PURE__*/React.createElement("div", {
    className: `toast${toast.err ? " err" : ""}`
  }, toast.msg));
}
window.FormScreen = FormScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/survey-app/FormScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/survey-app/LandingScreen.jsx
try { (() => {
/* contame survey app — Landing (poster) screen */

function LandingScreen({
  go
}) {
  const {
    Button
  } = window.ContameDesignSystem_8cf950;
  const D = window.SurveyData;
  return /*#__PURE__*/React.createElement("div", {
    className: "landing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rail rail-left"
  }, D.city, " \xB7 Argentina \xB7 2026"), /*#__PURE__*/React.createElement("div", {
    className: "rail rail-right"
  }, "Edici\xF3n ", D.edition, " \xB7 Post-evento \xB7 Feedback"), /*#__PURE__*/React.createElement("section", {
    className: "poster"
  }, /*#__PURE__*/React.createElement("div", {
    className: "poster-no"
  }, /*#__PURE__*/React.createElement("span", {
    className: "poster-no-lbl"
  }, "Edici\xF3n"), /*#__PURE__*/React.createElement("span", {
    className: "poster-no-num"
  }, D.edition), /*#__PURE__*/React.createElement("span", {
    className: "poster-no-lbl"
  }, D.city)), /*#__PURE__*/React.createElement("div", {
    className: "poster-stage"
  }, /*#__PURE__*/React.createElement(ArchedLabel, {
    text: "\xB7  CONTAME  \xB7  TU OPINI\xD3N ENCIENDE LA PR\xD3XIMA EDICI\xD3N  \xB7  CONTAME  \xB7  CONTANOS C\xD3MO LA VIVISTE  ",
    size: 620
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/chili.png",
    alt: "",
    "aria-hidden": true,
    className: "chili",
    draggable: false
  })), /*#__PURE__*/React.createElement("h1", {
    className: "poster-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "line"
  }, "C\xF3mo fue"), /*#__PURE__*/React.createElement("em", {
    className: "line"
  }, "tu experiencia.")), /*#__PURE__*/React.createElement(Button, {
    variant: "stamp",
    arrow: true,
    onClick: () => go("form")
  }, "Empezar encuesta")));
}
window.LandingScreen = LandingScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/survey-app/LandingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/survey-app/ResultsScreen.jsx
try { (() => {
/* contame survey app — Results screen */

function ResultsScreen({
  go,
  justSubmitted,
  onSeeFull,
  onReset
}) {
  const {
    Button,
    StatCard,
    MetricBar,
    Quote,
    Eyebrow
  } = window.ContameDesignSystem_8cf950;
  const D = window.SurveyData;
  const R = D.results;
  if (justSubmitted) {
    return /*#__PURE__*/React.createElement("div", {
      className: "page"
    }, /*#__PURE__*/React.createElement("div", {
      className: "done-state"
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      dot: true,
      tone: "hot"
    }, "Estado \xB7 enviado"), /*#__PURE__*/React.createElement("h1", {
      className: "big",
      style: {
        marginTop: 24
      }
    }, "Ya nos", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "contaste"), "."), /*#__PURE__*/React.createElement("p", {
      className: "copy"
    }, "Gracias. Si te acordaste de algo, pod\xE9s empezar de nuevo."), /*#__PURE__*/React.createElement("div", {
      className: "done-actions"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "stamp",
      arrow: true,
      onClick: onSeeFull
    }, "Ver resultados"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "md",
      onClick: onReset
    }, "Empezar de nuevo"))));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "results-hero"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "contame \xB7 Edici\xF3n ", D.edition, " \xB7 ", D.city), /*#__PURE__*/React.createElement("h1", {
    className: "results-title"
  }, "Resul", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "tados")), /*#__PURE__*/React.createElement("p", {
    className: "results-sub"
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ink)",
      fontStyle: "normal"
    }
  }, R.total), " respuestas \xB7 escala 1\u201310")), /*#__PURE__*/React.createElement(StatCard, {
    label: "Lo recomendar\xEDan",
    value: R.recommend,
    verdict: R.verdict,
    breakdown: [{
      value: "9.76",
      label: "General",
      tone: "positive"
    }, {
      value: "9.53",
      label: "Organización",
      tone: "warning"
    }, {
      value: "8.60",
      label: "Mentores",
      tone: "negative"
    }]
  })), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("h2", null, "M\xE9tricas ", /*#__PURE__*/React.createElement("em", null, "generales")), /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, R.total, " respuestas \xB7 escala 1\u201310")), /*#__PURE__*/React.createElement("div", {
    className: "metric-list"
  }, R.metrics.map(m => /*#__PURE__*/React.createElement(MetricBar, {
    key: m.label,
    label: m.label,
    caption: m.caption,
    value: m.value,
    tone: m.tone
  })))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("h2", null, "Citas ", /*#__PURE__*/React.createElement("em", null, "destacadas")), /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "Verbatim \xB7 sin correcci\xF3n")), /*#__PURE__*/React.createElement("div", {
    className: "quotes"
  }, R.quotes.map(q => /*#__PURE__*/React.createElement(Quote, {
    key: q.cat,
    category: q.cat,
    meta: "Verbatim"
  }, q.text)))));
}
window.ResultsScreen = ResultsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/survey-app/ResultsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/survey-app/Topbar.jsx
try { (() => {
/* contame survey app — Topbar + ArchedLabel */

function ArchedLabel({
  text,
  size = 560
}) {
  const r = size / 2 - 28;
  return /*#__PURE__*/React.createElement("svg", {
    className: "arched-label",
    viewBox: `0 0 ${size} ${size}`,
    width: size,
    height: size,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    id: "arch-circle",
    d: `M ${size / 2}, ${size / 2} m -${r}, 0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`
  })), /*#__PURE__*/React.createElement("text", {
    className: "arched-text"
  }, /*#__PURE__*/React.createElement("textPath", {
    href: "#arch-circle",
    startOffset: "0"
  }, text)));
}
function Topbar({
  route,
  go,
  submitted
}) {
  const locked = !submitted;
  return /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("button", {
    className: "brand",
    onClick: () => go("landing")
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/chili.png",
    alt: "",
    "aria-hidden": true,
    className: "brand-mark",
    draggable: false
  }), /*#__PURE__*/React.createElement("span", {
    className: "brand-name"
  }, "contame", /*#__PURE__*/React.createElement("sup", null, window.SurveyData.edition))), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: route === "landing" ? "active" : "",
    onClick: () => go("landing")
  }, "Inicio"), /*#__PURE__*/React.createElement("button", {
    className: route === "form" ? "active" : "",
    onClick: () => go("form")
  }, "Encuesta"), /*#__PURE__*/React.createElement("button", {
    className: `${route === "results" ? "active" : ""} ${locked ? "locked" : ""}`,
    onClick: () => go("results"),
    title: locked ? "Completá la encuesta para desbloquear" : ""
  }, locked && /*#__PURE__*/React.createElement("span", {
    className: "lock-glyph",
    "aria-hidden": true
  }, "\u25C6"), "Resultados")));
}
function AppFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("span", null, "contame \xB7 ", window.SurveyData.edition, " \xB7 ", window.SurveyData.city, " \xB7 2026"), /*#__PURE__*/React.createElement("span", {
    className: "powered"
  }, "Feedback que ", /*#__PURE__*/React.createElement("b", null, "se lee")));
}
Object.assign(window, {
  ArchedLabel,
  Topbar,
  AppFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/survey-app/Topbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/survey-app/data.js
try { (() => {
/* contame survey app — sample data (a generic event-feedback survey). */
window.SurveyData = {
  edition: "03",
  city: "Buenos Aires",
  scaleQuestions: [{
    n: 1,
    key: "q1",
    q: "¿Qué tan probable es que vuelvas a la próxima edición?"
  }, {
    n: 2,
    key: "q2",
    q: "¿Qué te pareció el lugar?"
  }, {
    n: 3,
    key: "q3",
    q: "¿Qué te pareció la comida?"
  }, {
    n: 4,
    key: "q4",
    q: "¿Cómo fue la experiencia con los mentores?"
  }, {
    n: 5,
    key: "q5",
    q: "¿Qué te pareció la consigna y el output esperado?"
  }],
  openQuestions: [{
    n: 6,
    key: "q6",
    q: "¿Qué mantendrías? ¿Qué fue lo que más te gustó?",
    placeholder: "Eso que no podía faltar…"
  }, {
    n: 7,
    key: "q7",
    q: "¿Qué cambiarías? ¿Qué fue lo que menos te gustó?",
    placeholder: "Sin filtro — bienvenido el feedback duro…"
  }, {
    n: 8,
    key: "q8",
    q: "¿Qué le agregarías?",
    placeholder: "Una idea, un detalle, un experimento…"
  }],
  results: {
    total: 102,
    recommend: "9.98",
    verdict: "100 de 102 pusieron 10",
    metrics: [{
      label: "Calificación general",
      caption: "Q1 · escala 1–10",
      value: 9.76
    }, {
      label: "El lugar",
      caption: "Q2",
      value: 9.41
    }, {
      label: "La comida",
      caption: "Q3",
      value: 9.07
    }, {
      label: "Organización",
      caption: "Q4",
      value: 9.53
    }, {
      label: "Mentores",
      caption: "Q5 · mínimo",
      value: 8.6,
      tone: "low"
    }],
    quotes: [{
      cat: "Lo que más gustó",
      text: "La energía del cierre fue otra cosa. Me llevo eso."
    }, {
      cat: "Lo que cambiaría",
      text: "Más tiempo para la última entrega — se sintió corto."
    }, {
      cat: "Qué agregaría",
      text: "Un espacio para cruzarse con otros equipos antes de arrancar."
    }, {
      cat: "El lugar",
      text: "Impecable. Café siempre listo y buena luz."
    }]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/survey-app/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SegmentNav = __ds_scope.SegmentNav;

__ds_ns.MetricBar = __ds_scope.MetricBar;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.HeatMeter = __ds_scope.HeatMeter;

__ds_ns.TextField = __ds_scope.TextField;

})();
