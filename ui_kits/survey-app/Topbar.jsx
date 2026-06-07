/* contame survey app — Topbar + ArchedLabel */

function ArchedLabel({ text, size = 560 }) {
  const r = size / 2 - 28;
  return (
    <svg className="arched-label" viewBox={`0 0 ${size} ${size}`} width={size} height={size} aria-hidden="true">
      <defs>
        <path id="arch-circle" d={`M ${size / 2}, ${size / 2} m -${r}, 0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`} />
      </defs>
      <text className="arched-text"><textPath href="#arch-circle" startOffset="0">{text}</textPath></text>
    </svg>
  );
}

function Topbar({ route, go, submitted }) {
  const locked = !submitted;
  return (
    <header className="topbar">
      <button className="brand" onClick={() => go("landing")}>
        <img src="../../assets/chili.png" alt="" aria-hidden className="brand-mark" draggable={false} />
        <span className="brand-name">contame<sup>{window.SurveyData.edition}</sup></span>
      </button>
      <span />
      <nav className="nav">
        <button className={route === "landing" ? "active" : ""} onClick={() => go("landing")}>Inicio</button>
        <button className={route === "form" ? "active" : ""} onClick={() => go("form")}>Encuesta</button>
        <button
          className={`${route === "results" ? "active" : ""} ${locked ? "locked" : ""}`}
          onClick={() => go("results")}
          title={locked ? "Completá la encuesta para desbloquear" : ""}
        >
          {locked && <span className="lock-glyph" aria-hidden>◆</span>}
          Resultados
        </button>
      </nav>
    </header>
  );
}

function AppFooter() {
  return (
    <footer className="footer">
      <span>contame · {window.SurveyData.edition} · {window.SurveyData.city} · 2026</span>
      <span className="powered">Feedback que <b>se lee</b></span>
    </footer>
  );
}

Object.assign(window, { ArchedLabel, Topbar, AppFooter });
