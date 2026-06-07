/* contame dashboard — single navigable analytics view */

function Dashboard() {
  const { SegmentNav, StatCard, MetricBar, Card, Quote, Eyebrow, Badge } = window.ContameDesignSystem_8cf950;
  const DD = window.DashData;
  const [ed, setEd] = React.useState("2026");
  const D = DD.data[ed];
  const maxMention = Math.max(...D.mentions.map((m) => m.count));

  return (
    <div className="dash dash-bg">
      <div className="dash-page">
        <nav className="edition-nav">
          <span className="edition-brand">
            <img src="../../assets/chili.png" alt="" aria-hidden />
            <span>contame</span>
          </span>
          <SegmentNav items={DD.editions} value={ed} onChange={setEd} />
        </nav>

        <header className="dash-hero">
          <div>
            <Eyebrow dot>Feedback · {D.period} · {D.total} respuestas</Eyebrow>
            <h1 className="dash-title">Boot<br /><em>Camp</em></h1>
            <p className="dash-sub">Leído en serio, no archivado.</p>
          </div>
          <StatCard label="Lo recomendarían" value={D.recommend} verdict={D.verdict} breakdown={D.breakdown} />
        </header>

        <section>
          <div className="section-head">
            <h2>Métricas <em>generales</em></h2>
            <span className="num">{D.total} respuestas · escala 1–10</span>
          </div>
          <div className="metric-list">
            {D.metrics.map((m) => (
              <MetricBar key={m.label} label={m.label} caption={m.caption} value={m.value} tone={m.tone} />
            ))}
          </div>
        </section>

        <section>
          <div className="section-head">
            <h2>Equipo <em>organizador</em></h2>
            <span className="num">Lo que destacaron</span>
          </div>
          <div className="count-grid">
            {D.teams.map((t) => (
              <Card key={t.cat} accent padding={28}>
                <div className="count-num">~{t.count}<small>menciones</small></div>
                <p className="count-cat">{t.cat}</p>
                <p className="count-quote">{t.quote}</p>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="section-head">
            <h2>Áreas de <em>mejora</em></h2>
            <span className="num">Conteo por categoría</span>
          </div>
          <div className="pain-grid">
            {D.pains.map((p, i) => (
              <div className="pain-cell" key={p.cat}>
                <div className="count-num" style={{ fontSize: 56 }}>{p.count}<small>menciones</small></div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <p className="count-cat" style={{ margin: 0 }}>{p.cat}</p>
                  {i === 0 && <Badge variant="tag" tone="alta">Top</Badge>}
                </div>
                <p className="count-quote">{p.quote}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="section-head">
            <h2>Menciones <em>de color</em></h2>
            <span className="num">Lo más nombrado</span>
          </div>
          <div className="dist-list">
            {D.mentions.map((m) => (
              <div className="dist-row" key={m.label}>
                <span className="dist-label">{m.label}</span>
                <div className="dist-track"><div className="dist-bar" style={{ width: `${(m.count / maxMention) * 100}%` }} /></div>
                <span className="dist-count">{m.count}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="section-head">
            <h2>Citas <em>destacadas</em></h2>
            <span className="num">Verbatim · sin corrección</span>
          </div>
          <div className="quotes">
            {D.quotes.map((q) => (
              <Quote key={q.cat} category={q.cat} meta="Verbatim">{q.text}</Quote>
            ))}
          </div>
        </section>

        <footer className="dash-footer">
          <span>contame · análisis de feedback · {D.period}</span>
          <span>Feedback que <b>se lee</b></span>
        </footer>
      </div>
    </div>
  );
}

window.Dashboard = Dashboard;
