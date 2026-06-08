# contame — material consolidado de proyectos

Recopilación de **todo lo relacionado con análisis de reseñas/feedback** que estaba
disperso en `~` y `~/Downloads`. Los archivos están **copiados** (los originales
siguen en su lugar). Los repos se copiaron **sin** `node_modules` ni `.next` (sí con `.git`).

Generado: 2026-06-07.

## Estructura

### `luccianos/` — Dashboard reseñas Lucciano's
Dashboard dark premium + oro de reseñas Google de 4 sucursales.
- `luccianos-dashboard/` — repo del dashboard (con carpeta `brand/`).
- `luccianos_home.html` + `sitio-web-assets/` (main.css, custom.css, typekit.css, logo-big.svg) — home del sitio Lucciano's guardado.
- `datos/reviews_luccianos-4-sucursales.csv` — scrape principal (Lucciano's, Agüero, Palermo Chico, Palermo Soho).
- `datos/reviews_luccianos-aguero.csv` — scrape inicial sólo Agüero.

### `proyecto-contame/` — Contame (antes "Alertly") · análisis de reseñas
Rol de "analista para Contame": CSV de reseñas Google → dashboard con formato fijo. *(Rebrand jun 2026: el proyecto antes se llamaba **Alertly**.)*
- `contame-bariloche-dashboard/` — repo del dashboard de 3 hoteles de Bariloche.
- `contame_brief.md`, `contame_sprint.html`, `arsenal-prompts-validar.html`, `Contame-costos-worst-case.docx` — briefs y material de trabajo.
- `contame-gastro-pipe-dashboard.md` — nota que cruza Contame ↔ Gastro Pipe.
- `datos/reviews bariloche hoteles.csv` — reseñas de Aguas del Sur, Monte Claro, Patagonia Sur.
- `quotidiano/` — caso Quotidiano (PDF reporte + `quotidiano.csv` + `reviews_quotidiano.csv`).
- `halketon/` — caso Halketon (PDF de feedback + prompt de análisis).

### `gastro-pipe/` — Dashboard Gastro Pipe (estética Trama)
Reseñas Google de restaurantes con la estética de Trama.
- `dashboard-gastro-pipe/` — repo (Lardito, Parrilla Maravilla, Las Patriotas, Lardo & Rosemary).
- `dashboard_grupo_gastronomico.md` — documento de análisis.
- `datos/reviews_lardito-parrillamaravilla-laspatriotas.csv` — scrape de los 3 locales.
- `datos/reviews_lardito.csv` — scrape de Lardo & Rosemary.

### `trama-bootcamp/` — Dashboard BootCamp Trama ITBA
Análisis de feedback del BootCamp de Emprendedores de Trama ITBA (2025 vs 2026).
- `bootcamp-trama-dashboard/` — repo (incluye `docs/` con los análisis 2025, 2026 y comparativa).
- `feedback/` — carpeta de trabajo original (análisis 2025, comparativa, assets `Trama/`).
- `Feedback - 2025 ... .csv` y `Feedback - bootcamp 2026 ... .csv` — respuestas crudas de los formularios.
- `analisis-feedback-bootcamp-2026.md`, `BootCamp Emprendedores · Trama ITBA.pdf`, `trama.module.css`.

### `picanthon/` — Encuesta Picanthon (ITBA)
Encuesta y diapositiva de resultados.
- `encuesta_picanthon.pptx`, `encuesta_picanthon-2.pptx` — presentaciones.
- `Picanthon Survey Responses *.xlsx`, `encuesta picanthon 03*.xlsx` — respuestas.
- `Picanthon Encuesta _ Diapositiva _standalone_.html` — diapositiva standalone.
- `encuesta picanthon-handoff.zip` — handoff empaquetado.

### `_recursos-compartidos/`
- `Google Maps Reviews Scraper.pdf` — doc del scraper de reseñas usado en todos los proyectos.
