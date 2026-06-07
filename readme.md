# contame — Design System

**contame** turns raw feedback into something people actually read. It's a feedback /
survey-analytics product with two faces: a public **survey app** where people leave
honest, unfiltered feedback after an event or experience, and an internal **analytics
dashboard** where the owner reads it — pulse, weak spots, verbatim quotes, edition-over-edition
trends. The name is Argentine voseo for *"tell me"* (*contame, contanos*), and the whole brand
leans into that invitation: warm, direct, a little hot. The mascot and motif is a **chili
pepper** — *picante* — feedback with heat.

> The product line ("BootCamp Emprendedores · Trama ITBA", "Picanthon", restaurant-review
> dashboards) is **dark premium + naranja**: a near-black roasted-ember canvas, a single hot
> orange accent, editorial poster typography, and film-grain texture. This system distills that
> look so any new contame surface — app, dashboard, deck, or marketing page — feels of-a-piece.

---

## Source material

This system was reverse-engineered from these repositories (private to the owner — you may not
have access, but they are the source of truth; explore them for deeper fidelity):

- **github.com/Benja301205/bootcamp-trama-dashboard** — the canonical dark-premium + orange
  dashboard (globals.css, the type system, sticky edition nav, metric/team/pain cards).
- **github.com/Benja301205/dashboard-gastro-pipe** — same aesthetic applied to restaurant
  review analytics (pulse tables, problem severity cards).
- **github.com/Benja301205/Encuesta-Picanthon-2-** — the public survey app (poster landing,
  the chili mark, the 1–5 heat-meter, open-text questions, results page).
- **github.com/Benja301205/Dashboard_metricas_picanthon** — the v0-built metrics dashboard.

Original work by **Benja Bertone**. Fonts are loaded from Google Fonts (see *Caveats*).

---

## Content fundamentals — how contame writes

**Language & register.** Spanish, **Argentine voseo** — always *vos*, never *tú*. The product
speaks to the reader directly and informally: *"Contanos cómo la viviste"*, *"¿Qué cambiarías?"*,
*"Ya nos contaste."* It addresses *you* (second person) and speaks as *we* (the team) — never a
faceless "the platform".

**Tone.** Confident, warm, a touch irreverent. It invites honesty and explicitly welcomes harsh
feedback: *"Sin filtro — bienvenido el feedback duro."* It values judgment over vanity metrics:
*"conteos con criterio — no solo promedios"*, *"Feedback que se lee, no que se archiva."*

**Casing.** Sentence case for body and questions. **UPPERCASE** (mono, wide tracking) for
eyebrows, labels, nav, and meta — never for long-form copy. Headlines are condensed UPPERCASE
(Bebas Neue) with one **italic-serif accent word** in orange (e.g. Boot**Camp**, Métricas
*generales*, Feedback que *se lee*). That accent is the single most recognizable typographic move.

**Numbers.** Spelled with decimals and shown big: `9.98`, `8.60`. Stats are stated plainly with
a human verdict beneath (*"100 de 102 pusieron 10"*). Question labels are numbered `01`, `02`…

**Voice examples (verbatim from the product):**
- Hero: *"Cómo fue tu Picanthon."* / *"Feedback que se lee, no que se archiva."*
- CTA: *"Empezar encuesta"*, *"Ver resultados"*, *"Enviar"*
- Placeholders: *"Eso que no podía faltar…"*, *"Una idea, un detalle, un experimento…"*
- Confirmation: *"Ya nos contaste. Gracias. Si te acordaste de algo, podés empezar de nuevo."*
- Heat-meter labels: *nada · poco · medio · alto · picante*
- Sign-off: *"Hecho con picante"* / *"Feedback que se lee"*

**Emoji.** Used sparingly in informal/internal copy (🔥 for "picante", 📈 trend) but **not** in
the core UI — the chili PNG and the orange dot carry the heat instead. Prefer the mark over emoji
in any polished surface.

---

## Visual foundations

**Color & mood.** A warm, near-black **ember** palette — backgrounds are deep roasted reds
(`#1a0908` → `#381916`), never neutral grey. Text is a warm cream (`#f5ede1`). A **single** hot
orange (`--hot #ff4500`, with flame `#ff7a3c`, deep `#c43201`, amber `#ffb86b`) carries every
accent — fills, bars, dots, accent words. Status uses green (promoters), ember (passives), hot
(detractors). Restraint is the rule: one accent, used confidently. The imagery vibe is **warm and
glossy** (the chili is saturated red with a green stem); washes are orange, never cool.

**Type.** Four families, four jobs (all genuine Google Fonts):
- **Instrument Serif** (italic) — *display*: accent words, big numbers, pull-quotes. The soul of the brand.
- **Bebas Neue** — *condensed poster* headlines, UPPERCASE, fluid-sized.
- **Space Grotesk** — *body + UI*, 300–700.
- **JetBrains Mono** — *eyebrows, labels, nav, numeric meta*, UPPERCASE, wide tracking (0.14–0.28em).

**Backgrounds.** Every full surface gets the **atmosphere**: a fixed radial orange wash (top-center
+ bottom-right) plus a fine **film-grain noise** overlay at ~18% opacity, `mix-blend-mode: overlay`.
This is the signature — a dark room lit by embers. (Class `.contame-atmosphere`, or `--wash-hero` +
`--noise-url`.) No photographic hero backgrounds; the chili PNG is the only standing image.

**Layout.** Editorial and roomy. Hairline (`1px`, cream @ 10–22%) dividers everywhere; sections
breathe at 56–88px. Grids are often **hairline-separated** (1px gaps over a `--line` background so
cells look inset). Generous max-width (`1320px`) with `clamp()` gutters. Vertical mono "rails" run
down the page edges on the poster.

**Borders, radii & cards.** **Hard edges are on-brand** — cards are square (`border-radius: 0`) with
a 1px hairline border; many carry a **2px hot accent bar** along the top edge. The one rounded
exception is the fully-rounded **pill** (`999px`) used for CTAs, status, and the segmented nav. Card
fills are either transparent, solid `--bg-2`, or the `--gradient-card` (160° bg-2→bg) with an ember
glow in one corner.

**Shadows & depth.** Almost no drop-shadows. Depth comes from **glow** — orange `box-shadow` on
active bars, dots, and pills (`0 0 8–18px`). The only true shadow is on the floating toast.

**Motion.** Calm and short. `0.18s` ease transitions; bars fill over `0.3–0.4s` with
`cubic-bezier(.4,0,.2,1)`. Two signature loops: the chili **bobs** gently (6s) and an **arched mono
label** rotates slowly around it (38s). No bounces, no spring. All loops respect
`prefers-reduced-motion`.

**Interaction states.**
- *Hover* — primary buttons invert (hot→cream) and lift `-2px`; ghost buttons turn their border and
  text hot; nav items brighten cream; heat cells get a hot border + faint hot wash.
- *Press/active* — the selected heat cell stays lit with the flame gradient; the active nav segment
  gets a hot fill + glow.
- *Focus* — inputs heat their bottom hairline to orange; the focus ring is `--hot`.
- *Disabled* — 40% opacity, no transform.

**Transparency & blur.** Sticky bars use a translucent `rgba(26,9,8,.5)` backing with `blur(10px)`
that **masks out downward** (so it dissolves, not a hard rectangle). Cards may be translucent
(`--surface-card`, bg-2 @ 40%) over the wash.

---

## Iconography

contame is **deliberately icon-light** — it leans on typography, the chili mark, and the orange dot
rather than an icon set.

- **Brand mark:** `assets/chili.png` — a glossy red chili pepper (1024², transparent). The standing
  logo. Rotated `-12°` next to the wordmark, `-6°` and bobbing on the poster, scaled up as a slide
  cover element. This is the one piece of imagery in the system; **always use the PNG**, never redraw it.
- **Unicode glyphs as icons:** the brand uses a tiny set of typographic glyphs instead of an icon
  font — `→` (arrow, often inside a round chip on CTAs), `◆` (lock/gated nav), `↗` (external link),
  `●` / `◆` (status/eyebrow dots), `“` (oversized quote mark), `📈` (trend, internal only). Render
  these as text, not SVG.
- **The orange dot:** a 6–7px hot circle with a glow is the universal "live / active / status"
  indicator (status pills, eyebrows, sticky-nav brand).
- **No icon library** is shipped or required. If a future surface genuinely needs UI icons (settings,
  nav, etc.), use **Lucide** (`https://unpkg.com/lucide-static`) at a 1.75–2px stroke to match the
  thin-line, restrained feel — and **flag the addition**, since it's a departure from the icon-light norm.

---

## Index / manifest

**Foundations**
- `styles.css` — the entry point consumers link. `@import`s only.
- `tokens/` — `fonts.css` (Google Fonts), `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `base.css` — reset + page defaults + helper classes (`.eyebrow`, `.mono-label`, `.accent-em`).
- `guidelines/*.card.html` — 15 foundation specimen cards (Colors, Type, Spacing, Brand).

**Components** (`components/<group>/`, namespace `window.ContameDesignSystem_8cf950`)
- `actions/` — **Button** (primary · stamp · ghost · arrow · sizes)
- `forms/` — **HeatMeter** (1–5 spice scale), **TextField** (underline input/textarea)
- `data/` — **StatCard** (hero stat), **MetricBar** (comparison row), **Quote** (verbatim pull-quote)
- `core/` — **Eyebrow**, **Badge** (status pill / severity tag), **Card** (hairline + accent), **SegmentNav**

**UI kits** (`ui_kits/<product>/index.html`)
- `survey-app/` — public feedback product: landing poster → heat-meter form → results.
- `dashboard/` — internal analytics dashboard with an edition switcher.

**Slides** (`slides/*.slide.html`) — Title, Big-stat, Quote, Section divider (1280×720).

**Assets** (`assets/`) — `chili.png` (brand mark), `sample-lardito.jpg` / `sample-parrilla.png`
(example client imagery from the gastro dashboard).

**Other** — `SKILL.md` (Agent-Skills-compatible entry point).

> Tip for designers/agents: link `styles.css`, build on the warm-dark atmosphere, use **one** hot
> accent and the italic-serif accent word, keep edges hard except for pills, and write in Argentine
> voseo. When in doubt, make it read like an editorial poster — not a web app.

---

## Caveats

- **Fonts load via Google Fonts `@import`** (all four are genuine Google families). They render
  everywhere `styles.css` is linked, but the compiler's font index shows "none" because there are no
  self-hosted `@font-face` `src` files. If you need fully offline / self-hosted webfonts, send the
  `.woff2` files and I'll add real `@font-face` rules.
- The product copy in the kits is **sample data** in contame's voice, not real survey results.
