`SegmentNav` is the rounded segmented control for switching views/editions/locales.

```jsx
const [view, setView] = React.useState("2026");
<SegmentNav
  value={view}
  onChange={setView}
  items={[
    { value: "2026", label: "Edición 2026" },
    { value: "comp", label: "Comparativa" },
    { value: "2025", label: "Edición 2025" },
  ]}
/>
```

The active item gets a hot fill + glow. Items may be plain strings if value === label.
