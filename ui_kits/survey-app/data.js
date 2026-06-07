/* contame survey app — sample data (a generic event-feedback survey). */
window.SurveyData = {
  edition: "03",
  city: "Buenos Aires",
  scaleQuestions: [
    { n: 1, key: "q1", q: "¿Qué tan probable es que vuelvas a la próxima edición?" },
    { n: 2, key: "q2", q: "¿Qué te pareció el lugar?" },
    { n: 3, key: "q3", q: "¿Qué te pareció la comida?" },
    { n: 4, key: "q4", q: "¿Cómo fue la experiencia con los mentores?" },
    { n: 5, key: "q5", q: "¿Qué te pareció la consigna y el output esperado?" },
  ],
  openQuestions: [
    { n: 6, key: "q6", q: "¿Qué mantendrías? ¿Qué fue lo que más te gustó?", placeholder: "Eso que no podía faltar…" },
    { n: 7, key: "q7", q: "¿Qué cambiarías? ¿Qué fue lo que menos te gustó?", placeholder: "Sin filtro — bienvenido el feedback duro…" },
    { n: 8, key: "q8", q: "¿Qué le agregarías?", placeholder: "Una idea, un detalle, un experimento…" },
  ],
  results: {
    total: 102,
    recommend: "9.98",
    verdict: "100 de 102 pusieron 10",
    metrics: [
      { label: "Calificación general", caption: "Q1 · escala 1–10", value: 9.76 },
      { label: "El lugar", caption: "Q2", value: 9.41 },
      { label: "La comida", caption: "Q3", value: 9.07 },
      { label: "Organización", caption: "Q4", value: 9.53 },
      { label: "Mentores", caption: "Q5 · mínimo", value: 8.6, tone: "low" },
    ],
    quotes: [
      { cat: "Lo que más gustó", text: "La energía del cierre fue otra cosa. Me llevo eso." },
      { cat: "Lo que cambiaría", text: "Más tiempo para la última entrega — se sintió corto." },
      { cat: "Qué agregaría", text: "Un espacio para cruzarse con otros equipos antes de arrancar." },
      { cat: "El lugar", text: "Impecable. Café siempre listo y buena luz." },
    ],
  },
};
