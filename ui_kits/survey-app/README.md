# contame · Survey app (UI kit)

The public-facing feedback product. A respondent lands on an editorial poster,
fills a short survey built around the **HeatMeter** (1–5 spice scale) and
open-text **TextField**s, and unlocks a **results** page with the headline
**StatCard**, ranked **MetricBar**s and verbatim **Quote**s.

## Files
- `index.html` — interactive click-through (landing → form → results). Open this.
- `app.css` — screen layout (topbar, poster, form, results). Colors/type/effects come from the design-system tokens.
- `Topbar.jsx` — brand topbar + rotating `ArchedLabel` + footer.
- `LandingScreen.jsx` — poster hero with the bobbing chili.
- `FormScreen.jsx` — progress strip + heat-meter / open questions + submit.
- `ResultsScreen.jsx` — done-state, then full results.
- `data.js` — sample survey + results data.

## Components used
`Button`, `HeatMeter`, `TextField`, `Badge`, `StatCard`, `MetricBar`, `Quote`, `Eyebrow`
— all from `window.ContameDesignSystem_8cf950`.

Recreated from the contame source dashboards (see root `readme.md` for repo links).
