`StatCard` is contame's hero stat — the big italic number block used for headline metrics (NPS, "lo recomendarían", overall rating).

```jsx
<StatCard
  label="Lo recomendarían"
  value="9.98"
  verdict="100 de 102 pusieron 10"
  breakdown={[
    { value: "9.76", label: "Calif. general", tone: "positive" },
    { value: "9.53", label: "Organización", tone: "warning" },
    { value: "8.60", label: "Mentores (mín)", tone: "negative" },
  ]}
/>
```

Keep one per view — it's the loudest element. `breakdown` cells size evenly across the strip.
