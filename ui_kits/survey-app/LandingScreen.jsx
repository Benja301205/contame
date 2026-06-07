/* contame survey app — Landing (poster) screen */

function LandingScreen({ go }) {
  const { Button } = window.ContameDesignSystem_8cf950;
  const D = window.SurveyData;
  return (
    <div className="landing">
      <div className="rail rail-left">{D.city} · Argentina · 2026</div>
      <div className="rail rail-right">Edición {D.edition} · Post-evento · Feedback</div>

      <section className="poster">
        <div className="poster-no">
          <span className="poster-no-lbl">Edición</span>
          <span className="poster-no-num">{D.edition}</span>
          <span className="poster-no-lbl">{D.city}</span>
        </div>

        <div className="poster-stage">
          <ArchedLabel
            text="·  CONTAME  ·  TU OPINIÓN ENCIENDE LA PRÓXIMA EDICIÓN  ·  CONTAME  ·  CONTANOS CÓMO LA VIVISTE  "
            size={620}
          />
          <img src="../../assets/chili.png" alt="" aria-hidden className="chili" draggable={false} />
        </div>

        <h1 className="poster-head">
          <span className="line">Cómo fue</span>
          <em className="line">tu experiencia.</em>
        </h1>

        <Button variant="stamp" arrow onClick={() => go("form")}>Empezar encuesta</Button>
      </section>
    </div>
  );
}

window.LandingScreen = LandingScreen;
