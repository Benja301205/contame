import React from "react";

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

export function Button({
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
  return (
    <Tag className={`cta-btn cta-btn--${variant} cta-btn--${size} ${className}`} {...rest}>
      {children}
      {arrow && <span className="cta-btn__arrow" aria-hidden="true">→</span>}
    </Tag>
  );
}
