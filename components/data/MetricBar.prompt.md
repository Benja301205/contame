`MetricBar` is contame's comparison row — a label, a glowing track, and an italic value. Stack inside a `border-top:1px solid var(--line)` list to rank metrics.

```jsx
<div style={{ borderTop: "1px solid var(--line)" }}>
  <MetricBar label="Calificación general" value={9.76} />
  <MetricBar label="Organización" caption="Q3" value={9.53} />
  <MetricBar label="Mentores" value={8.6} tone="low" />
</div>
```

`tone="low"` flags the weakest row in ember. `value` is out of `max` (default 10).
