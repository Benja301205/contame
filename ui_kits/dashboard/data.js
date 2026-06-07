/* contame dashboard — sample data: two editions of an event-feedback survey. */
window.DashData = {
  editions: [
    { value: "2026", label: "Edición 2026" },
    { value: "2025", label: "Edición 2025" },
  ],
  data: {
    "2026": {
      period: "Jun 2026",
      total: 102,
      recommend: "9.98",
      verdict: "100 de 102 pusieron 10",
      breakdown: [
        { value: "9.76", label: "General", tone: "positive" },
        { value: "9.53", label: "Organización", tone: "warning" },
        { value: "8.60", label: "Mentores", tone: "negative" },
      ],
      metrics: [
        { label: "Calificación general", caption: "Q1", value: 9.76 },
        { label: "El lugar", caption: "Q2", value: 9.41 },
        { label: "La comida", caption: "Q3", value: 9.07 },
        { label: "Organización", caption: "Q4", value: 9.53 },
        { label: "Mentores", caption: "Q5 · mínimo", value: 8.6, tone: "low" },
      ],
      teams: [
        { count: 42, cat: "Organización", quote: "Todo fluyó. Se notó el laburo detrás de cada detalle." },
        { count: 28, cat: "Mentoría", quote: "Los mentores empujaron sin imponer. Justo." },
      ],
      pains: [
        { count: 18, cat: "Tiempos", quote: "La última entrega se sintió corta." },
        { count: 11, cat: "Espacio común", quote: "Faltó un lugar para cruzarse entre equipos." },
        { count: 7, cat: "Logística", quote: "El arranque del día 2 se demoró." },
        { count: 5, cat: "Comunicación", quote: "Algunas consignas llegaron tarde." },
      ],
      mentions: [
        { label: "Comida", count: 40 },
        { label: "Café", count: 33 },
        { label: "Música", count: 21 },
        { label: "Premios", count: 14 },
      ],
      quotes: [
        { cat: "Lo que más gustó", text: "La energía del cierre fue otra cosa." },
        { cat: "Qué agregaría", text: "Un espacio para cruzarse con otros equipos antes de arrancar." },
      ],
    },
    "2025": {
      period: "Jun 2025",
      total: 88,
      recommend: "9.71",
      verdict: "78 de 88 pusieron 10",
      breakdown: [
        { value: "9.40", label: "General", tone: "positive" },
        { value: "9.10", label: "Organización", tone: "warning" },
        { value: "8.20", label: "Mentores", tone: "negative" },
      ],
      metrics: [
        { label: "Calificación general", caption: "Q1", value: 9.4 },
        { label: "El lugar", caption: "Q2", value: 9.0 },
        { label: "La comida", caption: "Q3", value: 8.6 },
        { label: "Organización", caption: "Q4", value: 9.1 },
        { label: "Mentores", caption: "Q5 · mínimo", value: 8.2, tone: "low" },
      ],
      teams: [
        { count: 31, cat: "Organización", quote: "Buena base, con margen para pulir." },
        { count: 22, cat: "Mentoría", quote: "Acompañaron, aunque pocos para tantos equipos." },
      ],
      pains: [
        { count: 21, cat: "Tiempos", quote: "Se hizo largo el segundo día." },
        { count: 14, cat: "Espacio común", quote: "Faltaba dónde sentarse a charlar." },
        { count: 9, cat: "Logística", quote: "WiFi intermitente a la tarde." },
        { count: 6, cat: "Comunicación", quote: "Cambios de horario sobre la marcha." },
      ],
      mentions: [
        { label: "Comida", count: 28 },
        { label: "Café", count: 24 },
        { label: "Música", count: 12 },
        { label: "Premios", count: 9 },
      ],
      quotes: [
        { cat: "Lo que más gustó", text: "Conocer gente con la misma locura." },
        { cat: "Qué agregaría", text: "Más tiempo de mentoría uno a uno." },
      ],
    },
  },
};
