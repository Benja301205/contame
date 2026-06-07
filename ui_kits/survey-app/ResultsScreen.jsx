/* contame survey app — Results screen */

function ResultsScreen({ go, justSubmitted, onSeeFull, onReset }) {
  const { Button, StatCard, MetricBar, Quote, Eyebrow } = window.ContameDesignSystem_8cf950;
  const D = window.SurveyData;
  const R = D.results;

  if (justSubmitted) {
    return (
      <div className="page">
        <div className="done-state">
          <Eyebrow dot tone="hot">Estado · enviado</Eyebrow>
          <h1 className="big" style={{ marginTop: 24 }}>Ya nos<br /><em>contaste</em>.</h1>
          <p className="copy">Gracias. Si te acordaste de algo, podés empezar de nuevo.</p>
          <div className="done-actions">
            <Button variant="stamp" arrow onClick={onSeeFull}>Ver resultados</Button>
            <Button variant="ghost" size="md" onClick={onReset}>Empezar de nuevo</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="results-hero">
        <div>
          <Eyebrow>contame · Edición {D.edition} · {D.city}</Eyebrow>
          <h1 className="results-title">Resul<br /><em>tados</em></h1>
          <p className="results-sub"><b style={{ color: "var(--ink)", fontStyle: "normal" }}>{R.total}</b> respuestas · escala 1–10</p>
        </div>
        <StatCard
          label="Lo recomendarían"
          value={R.recommend}
          verdict={R.verdict}
          breakdown={[
            { value: "9.76", label: "General", tone: "positive" },
            { value: "9.53", label: "Organización", tone: "warning" },
            { value: "8.60", label: "Mentores", tone: "negative" },
          ]}
        />
      </div>

      <section>
        <div className="section-head">
          <h2>Métricas <em>generales</em></h2>
          <span className="num">{R.total} respuestas · escala 1–10</span>
        </div>
        <div className="metric-list">
          {R.metrics.map((m) => (
            <MetricBar key={m.label} label={m.label} caption={m.caption} value={m.value} tone={m.tone} />
          ))}
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2>Citas <em>destacadas</em></h2>
          <span className="num">Verbatim · sin corrección</span>
        </div>
        <div className="quotes">
          {R.quotes.map((q) => (
            <Quote key={q.cat} category={q.cat} meta="Verbatim">{q.text}</Quote>
          ))}
        </div>
      </section>
    </div>
  );
}

window.ResultsScreen = ResultsScreen;
