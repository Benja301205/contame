`TextField` is contame's open-text input — a single bottom hairline with italic-serif text that heats orange on focus. Use for open-ended survey answers, search, or any free text.

```jsx
<TextField label="Q9 · Abierta" multiline placeholder="Eso que no podía faltar…" value={v} onChange={setV} />
<TextField placeholder="Tu nombre" value={name} onChange={setName} />
```

Set `multiline` for a textarea (shows a live character count). `meta` adds left-aligned mono caption text below.
