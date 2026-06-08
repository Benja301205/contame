# CONTAME — Estado del proyecto

> **🔄 Rebrand (jun 2026):** el proyecto antes se llamaba *Alertly*. Ahora se llama **Contame**. El nombre nuevo refuerza el corazón del producto — *"contame qué dicen tus clientes"* / *"escuchá a tus clientes"* — y pega con la identidad visual (el chef que aguza el oído para escuchar). Producto, target, evidencia y modelo de negocio **no cambian**; es solo el nombre. *(Nota: en algunos lugares todavía puede aparecer "Alertly" — dashboards viejos, links de Vercel, mensajes ya enviados.)*

## TL;DR (3 líneas)

> Contame es un dashboard que analiza las reviews de Google de cadenas gastronómicas con varias sucursales, detecta cuando varios clientes empiezan a mencionar lo mismo en un local específico, y le manda al dueño un resumen accionable por WhatsApp. Es como tener el equipo de operaciones de Lucciano's, pero en software, para cadenas chicas que no pueden pagar uno. Nicho de partida: **heladerías premium argentinas con 2-15 sucursales**.

---

## 1. La idea — qué es Contame

**Producto**: análisis de feedback multi-fuente + comparativo entre sucursales + alertas evolutivas por WhatsApp.

**Frase ganchera (la que descubrió Cristian sin querer)**:
> *"Contame es el equipo de operaciones que las cadenas chicas no pueden pagar."*

**Pivot clave del sprint** (analysis-centric, no QR-centric):
- ❌ Versión vieja: poner QR en ticket + esperar 3 semanas para datos
- ✅ Versión final: **scrapear reviews públicas existentes** (Google + más) → time-to-value = HOY

---

## 2. El problema (3 líneas, versión final)

1. El dueño de una cadena gastronómica de 2-15 locales **quiere mejorar la experiencia de sus clientes** pero no puede ver los problemas reales que están pasando.
2. El feedback existe (Google Reviews, comentarios al mozo, redes) pero llega **disperso, sin patrón, sin priorización**. No distingue qué es ruido, qué es real, ni qué sucursal lo sufre.
3. Sin esa visibilidad, **no puede accionar sobre las causas**. Apaga quejas individuales mientras los mismos problemas se repiten en silencio.

**Insight central — el sesgo J-curve**:
> *"Google Reviews te da los aplausos y los gritos. Los problemas reales están en el medio."*

---

## 3. Cliente target (refinado)

**Dueño-operador de cadena gastronómica de 2-15 locales en LATAM.**

- Sweet spot: **2 a 8 locales** (donde el dolor es estructural pero todavía no contratan equipo de ops).
- Punto de quiebre: el dolor arranca en el **segundo local** (no en el cuarto).
- **Nicho de partida elegido: heladerías premium** (porque ya tenés Cristian + dashboard funcionando + red de referentes claros).

**Motivación real del cliente** (descubierta en el sprint):
- Quiere que **cada local funcione bien**, no solo la marca en agregado.
- Una sucursal mala contamina la marca entera.
- Costo operativo real (empleado mal entrenado / producto mal hecho = pérdida directa).

---

## 4. Validación con datos (data 2024-2026)

| Dato | Fuente | Implicancia |
|---|---|---|
| **71%** de clientes insatisfechos no se quejan, solo no vuelven | Qualtrics XM 2024 | Validación del "silent churn" |
| **90%** de los que no se quejan, simplemente no vuelven | Toast 2025 | Refuerza lo anterior |
| **53%** de comensales nunca dejan review | 2024 | Mercado actual no captura el cliente medio |
| **65%** sí deja review si la empresa la pide | 2024 | Justifica solicitud activa |
| **5-9%** de revenue por cada estrella en Google | Luca, HBS | Anchor económico |
| **Sesgo J-curve** | MIS Quarterly + HBS | El feedback medio está fuera de Google |

> **Caveat Luca**: dijo que el rating no afecta cadenas grandes establecidas (tipo McDonald's). Pero tu target (2-15 locales LATAM) no entra ahí — el cliente sí compara ratings al descubrir.

---

## 5. Mercado

| Layer | Tamaño |
|---|---|
| **TAM Argentina** (cadenas gastro 2-15 locales) | ~3.000-4.000 |
| **TAM revisado por competencia** | **5.000-7.500 sucursales** |
| **TAM LATAM (Arg + Mx + Co + Ch + Pe + Uy)** | ~25.000-30.000 cadenas |
| **Nicho heladerías premium Argentina** | ~15-25 cadenas serias (chico pero focal) |

**Vientos de cola**:
- LLMs (Claude/GPT) hacen viable el análisis sin equipo de data
- WhatsApp Business API barata desde 2022
- Cadenas chicas = segmento de mayor crecimiento post-pandemia

---

## 6. Competencia y diferenciación

### Competidores directos internacionales (validan que el mercado paga)

| Player | Tamaño | LATAM | WhatsApp |
|---|---|---|---|
| **Birdeye** | 80k clientes, $146M ARR | Indirecto | Sí |
| **Podium** | 90k clientes, $3B valuación | Indirecto | Sí |
| **Ovation** | 3k restos, $12M funding | No | Sí (SMS) |
| **Medallia/Qualtrics** | Enterprise | Sí (Alsea/Arcos) | Limitado |

### Competencia LATAM
- Casi inexistente. **Sweet spot 2-15 locales LATAM con WhatsApp-first no lo cubre nadie.**

### Sustitutos reales (los que tenés que destronar)
1. Excel + leer Google manualmente
2. Community manager freelance
3. Mystery shopper
4. "Le pregunto al encargado"
5. WhatsApp del local

### Diferenciación — 4 ángulos
1. **WhatsApp-first** (no dashboard)
2. **LATAM-native** (idioma, precio, integraciones)
3. **Patrones accionables** (no métricas vacías)
4. **Sweet spot 2-15** (Medallia muy caro, Birdeye no llega)

---

## 7. Datasets analizados (la evidencia real)

| Caso | N reviews | Sucursales | Estado | Uso |
|---|---|---|---|---|
| **Lucciano's** | 360 → 1.547 (re-scrap) | 1 → 4 | Dashboard armado (Vercel) | Pitch a Cristian Otero |
| **Quotidiano Alto Palermo** | 1.000 | 1 | Procesado | Pitch a familia Waisman |
| **Hoteles Bariloche** (Angie) | 283 | 3 | Procesado | Pitch a Angie |
| **Grupo Pipe Colloca** | 355 | 3 (Lardito + Parrilla + Patriotas) | Listo para procesar | Pitch a Pipe |

---

## 8. Outreach status — discovery con founders

### Respondieron

| Founder | Marca | Estado | Aprendizaje clave |
|---|---|---|---|
| **Cristian Otero** | Lucciano's | 2 audios | Tienen equipo de ops + detectan patrones cuando ven "2-3 comentarios sobre lo mismo". Validó el concepto |
| Próximos: Angie, Pipe, Natasha, Seijo | varios | En camino | — |

### Lista de outreach (25 founders del Gemini research)

Top 10 priorizados:
- Lattente (Zehan Nurhadzar, Daniel Cifuentes)
- Carne (Mauro Colagreco)
- Obrador Florida (Mercedes Román)
- Mudrá (Marcelo Boer)
- Ti Amo (Santoro)
- Mil y Pico (Danilo Ferraz)
- Togni's (Máximo Togni)
- Desarmadero (Harry Salvarrey)
- Kiddo / Big Pons (Seijo)
- Orno (Guadalupe García Mosqueda)

### Contactos cálidos (referidos / pariente / amistad)
- **Cristian Otero** (Lucciano's) — ya respondió 2x
- **Angie** (hoteles Bariloche, prima de Sofi)
- **Natasha** (cafetería x2, profesora ecommerce UCEMA)
- **Pipe Colloca** (3 restos, vía Martu)
- **Agie** (administración Cuervo Café, puerta a puerta)
- **Orno Pizzería** (mail puerta a puerta)
- **Quotidiano** (puerta a puerta)

---

## 9. Las preguntas de discovery (versión final, 4 quirúrgicas)

1. Cuando en una sucursal específica empieza a repetirse un tema, ¿hay alguien o sistema que te avise, o lo detectás cuando ya hay 5+ reseñas malas?
2. Cuando lo detectás, ¿lográs cortar la raíz o vuelve el mes siguiente?
3. ¿Cuánto tiempo/semana le dedica alguien a leer y procesar el feedback?
4. ¿Tenés forma de mirar para atrás y comparar cómo venía hace 6 meses o un año, o cada semana es desde cero?

---

## 10. Modelo de negocio (al hueso, en ARS)

### Producto

| Modalidad | Precio ARS | USD aprox |
|---|---|---|
| **Reporte único** (auditoría inicial) | $60.000-80.000 | $50-60 |
| **Suscripción Starter** (2-3 locales) | $40.000-60.000/mes | $30-45 |
| **Suscripción Growth** (4-7 locales) | $80.000-120.000/mes | $60-90 |
| **Suscripción Scale** (8-15 locales) | $150.000-250.000/mes | $115-190 |

### Costos reales
- Tu tiempo (lo invertís vos)
- Claude Pro $25.000/mes (ya lo pagás)
- Apify ~$3.000-6.000/mes
- Vercel free hosting
- **Total fijo: ~$30.000-50.000 ARS/mes**

### Margen
- **97%** por reporte / suscripción

### Break-even
- Cubrís costos: **1 cliente**
- $500.000 ARS ingreso: 6 reportes o 6 Starter
- $1.500.000 ARS (sueldo decente): 15-20 clientes

### Hitos 30/60/90 días

| Hito | Plazo | Meta | Ingreso |
|---|---|---|---|
| **1** | 30 días | 2 reportes únicos pagos | $120.000 ARS |
| **2** | 60 días | 5 reportes + 1 suscripción | $350.000 ARS |
| **3** | 90 días | 3 suscripciones + 2 reportes/mes | $300-500k ARS recurrente |

---

## 11. Riesgos (del Pre-Mortem)

Los 5 críticos:

1. **Volumen de feedback insuficiente** → mitigado con multi-fuente (Google + scrapeo + WhatsApp post-visita)
2. **Insights LLM genéricos** → mitigado con framework de severidad fijo + validación humana
3. **Dueño no lee WhatsApp** → mitigado con discovery primero
4. **Google bloquea scraping** → mitigado con API oficial + diversificar fuentes
5. **Ovation/Birdeye entran a LATAM** → ventana de 18-24 meses

Lo más importante que reveló el Pre-Mortem: **el competidor real no es Birdeye, es el Excel + lectura manual + intuición del dueño**.

---

## 12. Stack lean para validación (etapa actual)

| Tool | Función | Costo |
|---|---|---|
| Google Forms / Tally | Captura feedback (opcional) | $0 |
| Apify (Google Maps Reviews Scraper) | Scraping | ~$0.60 / 1000 reviews |
| Claude Pro | Procesamiento LLM | $20/mes (ya pagado) |
| Google Sheets | DB temporal | $0 |
| Vercel | Hosting dashboard | $0 (free tier) |
| WhatsApp personal | Distribución resúmenes | $0 |
| **Total nuevo** | | **~$15/mes** |

---

## 13. Lo que está hecho hasta ahora

- [x] Problema validado con datos modernos + casos reales
- [x] Cliente target afinado (cadenas 2-15, nicho heladerías premium)
- [x] Diferenciación clara vs competencia
- [x] Pivot del producto (analysis-centric, no QR-centric)
- [x] 4 datasets analizados (Lucciano's, Quotidiano, hoteles, Pipe)
- [x] Dashboard real funcionando (Lucciano's en Vercel)
- [x] Pricing realista en ARS
- [x] Pre-mortem completo + competencia mapeada
- [x] Templates de outreach pulidos (4 preguntas, breve, sin chupa medias)
- [x] Discovery iniciado con Cristian Otero (validación inicial)
- [x] Lista de 25 founders priorizada
- [x] 7 contactos cálidos (Cristian, Angie, Natasha, Pipe, Agie, Quotidiano, Orno)

---

## 14. Próximos pasos (esta semana)

| # | Acción | Plazo |
|---|---|---|
| 1 | **Procesar Pipe Colloca** (CSV 3 restos) y armar dashboard | Hoy / mañana |
| 2 | Mandar mensaje a Pipe con dashboard | Cuando esté listo |
| 3 | Procesar hoteles Bariloche → dashboard para Angie | Próximos 2 días |
| 4 | Mandar mensaje a Angie con dashboard | Cuando esté listo |
| 5 | Re-scrapear Lucciano's sin filtro fecha para tener histórico real | Próximos días |
| 6 | Mandar outreach a top 10 del Gemini doc (Lattente, Carne, Mudrá, etc.) | Esta semana |
| 7 | Llegar a **1er cobro real** (reporte único pagado $30-60k ARS) | 30 días |
| 8 | Tracking en Sheets: outreach / respuestas / propuestas / cobros | Permanente |

---

## 15. Las preguntas-trampa que NUNCA hacés (Mom Test)

Para evitar validación de cortesía:

- ❌ "¿Te parece útil?"
- ❌ "¿Lo pagarías?"
- ❌ "¿Qué pensás de la idea?"
- ❌ "¿Lo usarías?"

En su lugar:

- ✅ "¿Qué le falta o qué cambiarías?"
- ✅ "¿Cómo lo hacés HOY?"
- ✅ "¿Cuánto tiempo/plata le dedicás?"
- ✅ "Si en X situación, ¿qué hiciste?"

---

## 16. Frase de cierre para el pitch (defendible y real)

> *"Vendo análisis comparativos de feedback para heladerías premium con 2-8 sucursales en Argentina. Reporte único $60.000 ARS, suscripción $50.000-120.000/mes. Ya hice el caso de Lucciano's como prueba — 4 sucursales, 1.500 reviews, dashboard funcionando."*

3 frases. Sin proyecciones de fantasía. Real.

---

## Anexo: prompts clave

### Prompt master para análisis de reviews (Claude Pro)

Ver versión completa con ventanas temporales (14d / 60d / 240d), reglas de peso (local guides, likes), severidad por rubro, formato de output estricto y comparativo cross-marca.

### Template de outreach (4 preguntas, sin chupamedias)

```
Hola [Nombre]! Soy Benjamín, alumno de UCEMA. [REFERENCIA SI HAY]
Vengo armando un proyecto sobre cómo las cadenas gastronómicas con varias 
sucursales procesan el feedback de sus clientes.

4 preguntas cortas:

1. Cuando en una sucursal específica empieza a repetirse un tema 
   (tipo "este mes en [X] varios mencionan [tema A]"), ¿hay alguien 
   o sistema que te avise, o lo detectás cuando hay 5+ reseñas malas?

2. Cuando lo detectás, ¿lográs cortar la raíz o vuelve el mes siguiente?

3. ¿Cuánto tiempo por semana le dedica alguien al feedback? 
   ¿Sos vos o hay alguien dedicado?

4. ¿Tenés forma de mirar para atrás y comparar cómo venía hace 6 meses, 
   o cada semana es desde cero?

Bonus: si conocés founders con 2-7 locales, te re agradezco la intro.

Gracias!
```

### Template para mostrar dashboard real

```
[REFERENCIA AL CONTACTO/AUDIO PREVIO]

Te cuento qué venía armando: un dashboard para analizar el feedback 
de tus clientes y detectar tendencias por sucursal.

Hice un prototipo con datos reales de tus [N] sucursales. Lo más interesante 
es el comparativo entre sucursales:

[LINK DEL DASHBOARD]

Si te tomás 2 min: ¿qué le falta o qué cambiarías? Mejor opinión cruda, 
el feedback amable no me sirve para iterar.

Bonus: si conocés founders con 2-7 locales que les serviría hablar de esto, 
te re agradezco la intro.

Gracias!
```
