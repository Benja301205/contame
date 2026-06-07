`Button` is contame's pill-shaped call to action — use it for any primary action, form submit, or navigational CTA.

```jsx
<Button variant="primary" size="lg" arrow onClick={start}>Empezar encuesta</Button>
<Button variant="stamp" arrow as="a" href="/resultados">Ver resultados</Button>
<Button variant="ghost" size="md">Empezar de nuevo</Button>
```

Variants: `primary` (hot-orange fill, inverts to cream on hover), `stamp` (cream fill, heats to orange on hover — the marketing CTA), `ghost` (outline that turns hot). Set `arrow` to add the trailing circular → chip. Use `as="a"` with `href` for links. Always UPPERCASE mono — pass normal-case text; the component transforms it.
