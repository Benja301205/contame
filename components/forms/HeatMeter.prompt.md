`HeatMeter` is contame's signature 1–5 rating control — a row of cells that fill with a flame gradient as the score climbs. Use it for any quantitative survey question ("¿Qué tan probable…?").

```jsx
const [score, setScore] = React.useState();
<HeatMeter value={score} onChange={setScore} />
// custom labels:
<HeatMeter value={v} onChange={setV} labels={["1","2","3","4","5"]} />
```

Default labels are `nada / poco / medio / alto / picante`. `value` is 1–5; `onChange` receives the numeric value.
