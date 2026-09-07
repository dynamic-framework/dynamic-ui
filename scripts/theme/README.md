# scripts/theme

Herramienta mínima para rebrandear Dynamic UI desde un theme reducido, y un
validador de los errores conocidos al hacerlo a mano.

```bash
node scripts/theme/theme-expand.mjs examples/themes/theme-ejemplo.json
node scripts/theme/theme-validate.mjs examples/themes/theme-ejemplo.css
```

o vía npm:

```bash
npm run theme:expand -- examples/themes/theme-ejemplo.json
npm run theme:validate -- examples/themes/theme-ejemplo.css
```

Los tests viven en `theme-validate.spec.ts` y corren con `npm test`.

## Entrada

`theme.json` reducido. Los colores aceptan hex, triplete `"R, G, B"` o cualquier
color CSS.

```json
{
  "name": "Banco Ejemplo",
  "roles": { "primary": "#0b6b53" },
  "gray": "#5b6472",
  "body": { "bg": "#f7f8fa", "color": "#101828", "borderColor": "#e4e7ec" },
  "typography": {
    "fontFamily": "\"Inter\", system-ui, sans-serif",
    "scale": { "1": "2.75rem", "6": "1rem" }
  },
  "radius": ".75rem"
}
```

| Campo | Obligatorio | Notas |
| --- | --- | --- |
| `roles.<role>` | al menos uno, o `gray` | `primary secondary success info warning danger light dark` |
| `gray` | no | Deriva la rampa de grises por tinte; ver la advertencia de abajo |
| `body.bg`, `body.color` | sí | Salen como `--bs-body-bg-rgb` / `--bs-body-color-rgb` |
| `body.borderColor` | no | Por defecto `rgb(var(--bs-gray-100-rgb))` |
| `typography.fontFamily` | sí | |
| `typography.scale.N` | no | Pasos `1`..`6`, en `rem` |
| `radius` | sí | Radio base en `rem`; el resto se deriva |

## Reglas que la salida respeta

- Los colores viajan como triplete `"R, G, B"` sobre `--bs-<x>-rgb`. Nunca hex ni
  `rgb()` sobre el wrapper: la librería ya define
  `--bs-<x>: rgb(var(--bs-<x>-rgb))` en `src/style/root/_root.scss`.
- Rebrandear un role con rampa son **11 variables**: el base `-rgb` y las 10
  hojas (25, 50, 100, 200, 300, 400, 600, 700, 800, 900). El 500 no se declara
  con un valor propio: apunta al base.
- Las hojas se derivan con la receta de tinte de Sass — `mix` con blanco o negro
  en sRGB, con los pesos de Bootstrap (`tint-color` 95/90/80/60/40/20 %,
  `shade-color` 20/40/60/80 %) y redondeo al entero más cercano. Verificado canal
  por canal contra `dist/css/dynamic-ui.css`.
- `light` y `dark` **no tienen rampa** en la librería: sólo `--bs-light-rgb` y
  `--bs-dark-rgb`. Sus `-text-emphasis` y `-bg-subtle` apuntan a pasos de gris.
- La tipografía se overridea sobre `--bs-rfs-fs-N`, nunca sobre `--bs-fs-N`, que
  es sólo el alias. Cada paso 1..4 lleva además su valor en
  `@media (min-width: 1200px)`, porque la librería redefine esos cuatro ahí.
- Siempre se emiten `--bs-body-bg-rgb`, `--bs-body-color-rgb` y
  `--bs-border-color`.
- Siempre se emite el fix `--bs-secondary-bg-rgb: var(--bs-gray-200-rgb)` y
  `--bs-tertiary-bg-rgb: var(--bs-gray-100-rgb)`: la librería las define
  apuntando al wrapper (`var(--bs-gray-200)`), que no es un triplete.
- Sin `:where()`: tiene especificidad cero y la librería le gana.

## Advertencias

- **La rampa de grises de Dynamic está escrita a mano** en
  `src/style/abstracts/variables/_colors.scss`; no es tint/shade de `gray-500`.
  Pasar `gray` la deriva por tinte, así que cambia el carácter del neutro, no
  sólo su tono. La salida lo avisa en un comentario.
- **`gray` no se propaga solo a `secondary`, `light` y `dark`.** Esos roles se
  respaldan en pasos de gris (`gray-800`, `gray-25`, `gray-900`), pero sus
  rampas están resueltas a literales en tiempo de compilación. Cuando el theme
  define `gray`, la herramienta reemite esos tres roles.
- **Los pares texto/fondo están horneados.** `color-contrast()` corre en Sass:
  `.btn-primary` lleva `color: var(--bs-white)` resuelto en build, y cambiar
  `--bs-primary-rgb` en runtime no lo recalcula. De ahí la comprobación de
  contraste del validador.

## Qué comprueba el validador

`triplete`, `wrapper`, `rampa-incompleta`, `paso-500`, `superficie-faltante`,
`border-color`, `fix-bg`, `where`, `tipografia`, `tipografia-breakpoint`,
`monotonia`, `contraste`. Sale con 1 si hay errores; `--strict` hace fallar
también con avisos, y `--min-contrast N` cambia el umbral (4.5 por defecto,
WCAG 2.x AA para texto normal).

Un par que ya falla con la paleta por defecto de 2.8.0 se reporta como aviso
`contraste-preexistente`, no como error: el defecto es de la librería.
