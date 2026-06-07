/* contame survey app — Form screen (heat meters + open text) */

function FormScreen({ go, onSubmit }) {
  const { Button, HeatMeter, TextField, Badge } = window.ContameDesignSystem_8cf950;
  const D = window.SurveyData;
  const empty = {};
  [...D.scaleQuestions, ...D.openQuestions].forEach((q) => (empty[q.key] = ""));
  const [data, setData] = React.useState(empty);
  const [toast, setToast] = React.useState(null);

  const total = D.scaleQuestions.length + D.openQuestions.length;
  const filled = Object.values(data).filter((v) => String(v).trim() !== "").length;
  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const submit = () => {
    if (filled < total) {
      setToast({ msg: `Faltan ${total - filled} respuestas`, err: true });
      setTimeout(() => setToast(null), 2400);
      return;
    }
    onSubmit();
    go("results");
  };

  return (
    <div className="page">
      <header className="form-header">
        <h1 className="form-title"><em>Contanos.</em></h1>
        <Badge status="online">En línea</Badge>
      </header>

      <div className="progress-strip">
        <div className="progress-row">
          <span className="mono-label">{total} preguntas · ≈ 2 min</span>
          <span className="count"><b>{filled}</b> / {total}</span>
        </div>
        <div className="progress-bar"><div className="fill" style={{ width: `${(filled / total) * 100}%` }} /></div>
      </div>

      {D.scaleQuestions.map((q) => (
        <div className="question" key={q.key}>
          <div className="q-num">{String(q.n).padStart(2, "0")}<small>Escala · 1–5</small></div>
          <div className="q-body">
            <p className="q-text">{q.q}</p>
            <HeatMeter value={data[q.key]} onChange={(v) => set(q.key, v)} name={q.key} />
          </div>
        </div>
      ))}

      {D.openQuestions.map((q) => (
        <div className="question" key={q.key}>
          <div className="q-num">{String(q.n).padStart(2, "0")}<small>Abierta</small></div>
          <div className="q-body">
            <p className="q-text">{q.q}</p>
            <TextField multiline value={data[q.key]} onChange={(v) => set(q.key, v)} placeholder={q.placeholder} />
          </div>
        </div>
      ))}

      <div className="submit-row">
        <span className="note">{filled === total ? "Listo — enviá" : `Faltan ${total - filled}`}</span>
        <Button variant="primary" arrow onClick={submit} disabled={filled < total}>Enviar</Button>
      </div>

      {toast && <div className={`toast${toast.err ? " err" : ""}`}>{toast.msg}</div>}
    </div>
  );
}

window.FormScreen = FormScreen;
