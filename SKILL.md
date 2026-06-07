---
name: contame-design
description: Use this skill to generate well-branded interfaces and assets for contame, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create
static HTML files for the user to view. If working on production code, you can copy assets and read
the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or
design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_
production code, depending on the need.

## Quick orientation
- **Brand:** contame — a feedback / survey-analytics product. Dark-premium + naranja ("picante").
- **Voice:** Argentine voseo (vos/contanos), warm, direct, welcomes hard feedback.
- **Entry CSS:** `styles.css` (links tokens + base). Build on the warm-dark `.contame-atmosphere`.
- **The move:** condensed UPPERCASE headline + one **italic-serif accent word** in orange.
- **Components:** `window.ContameDesignSystem_8cf950` — Button, HeatMeter, TextField, StatCard,
  MetricBar, Quote, Eyebrow, Badge, Card, SegmentNav. See each component's `.prompt.md`.
- **Kits:** `ui_kits/survey-app/` and `ui_kits/dashboard/` are full, copyable examples.
- **Asset:** `assets/chili.png` is the one brand image — always use it, never redraw.

## Rules of thumb
- One hot accent (`--hot #ff4500`). Hard edges everywhere except pills (`999px`).
- Depth = orange **glow**, not drop-shadows. Backgrounds = ember wash + film-grain noise.
- Four fonts: Instrument Serif (display/italic), Bebas Neue (poster), Space Grotesk (body),
  JetBrains Mono (labels, UPPERCASE, wide tracking).
- Keep it editorial and roomy; hairline dividers; numbers big with a human verdict.
