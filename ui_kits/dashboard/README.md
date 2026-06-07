# contame · Analytics dashboard (UI kit)

The internal-facing product: a navigable feedback analytics view. The owner
switches between editions with a **SegmentNav**; every section re-reads the
selected dataset. Built from the design-system primitives — no bespoke widgets.

## Files
- `index.html` — the dashboard. Open this.
- `dash.css` — layout (sticky edition bar, hero, count/pain grids, mention bars). Tokens come from the design system.
- `Dashboard.jsx` — the whole view, driven by `data.js`.
- `data.js` — two sample editions (2026 / 2025).

## Sections
Hero (`StatCard`) · Métricas generales (`MetricBar` list) · Equipo organizador
(`Card` accent + big italic counts) · Áreas de mejora (hairline pain grid +
`Badge`) · Menciones (distribution bars) · Citas destacadas (`Quote`).

## Components used
`SegmentNav`, `StatCard`, `MetricBar`, `Card`, `Quote`, `Eyebrow`, `Badge`
from `window.ContameDesignSystem_8cf950`.

Recreated from the contame source dashboards (see root `readme.md` for repo links).
