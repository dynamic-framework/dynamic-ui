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

Los themes de marca viven en `themes/` y su CSS generado en `out/`:

```bash
npm run theme:expand -- scripts/theme/themes/theme-ejemplo-zonas.json -o scripts/theme/out/theme-ejemplo-zonas.css
npm run theme:validate -- scripts/theme/out/theme-ejemplo-zonas.css
npm run theme:preview          # sirve scripts/theme/preview en el navegador
```

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
| `root` | no | Mapa `--bs-*` → valor, emitido tal cual al final del bloque raíz |
| `components` | no | Lista de `{ selector, vars?, declarations? }` |
| `zones` | no | Mapa `<nombre>` → `{ vars, nav? }` |

### Las tres secciones extendidas

`roles`, `body`, `typography` y `radius` derivan tokens. Estas tres no: son
variables y declaraciones que escribes y que salen tal cual. Lo único que se
comprueba es la forma.

```json
{
  "root": {
    "--bs-body-font-size": ".875rem",
    "--bs-heading-color": "rgb(var(--bs-dark-rgb))"
  },
  "components": [
    { "selector": ".btn", "vars": { "--bs-btn-font-weight": "700" } },
    { "selector": ".font-numeric", "declarations": { "font-variant-numeric": "tabular-nums" } }
  ],
  "zones": {
    "oscura": {
      "vars": { "--bs-body-bg-rgb": "var(--bs-dark-rgb)" },
      "nav": { "--bs-nav-link-color": "rgb(var(--bs-white-rgb))" }
    }
  }
}
```

- **`root`** — toda clave empieza por `--bs-`. Se emite al final del bloque
  raíz, así que si repite una variable derivada, gana la tuya; la salida lo dice
  en un comentario.
- **`components`** — un bloque por `selector`. En `vars` van variables `--bs-*`
  del componente; en `declarations` sólo se admiten `padding`, `border-radius`,
  `border-color`, `font-family` y `font-variant-numeric`. Cualquier otra
  propiedad es un error que la nombra. Los bloques se emiten después del raíz y
  antes de las zonas, que es el orden que la cascada necesita.
- **`zones`** — cada zona es un `[data-bs-theme="<nombre>"]` con su paleta. Si
  trae `nav`, sus variables se reparten en dos bloques hijos según el prefijo:
  las `--bs-nav-pills-*` van a `.nav-pills` y el resto a `.nav`, porque montar
  las de pastilla sobre `.nav` no las alcanza. Y si trae `components`, con la
  misma forma que la sección global, cada bloque sale como
  `[data-bs-theme="<nombre>"] <selector>`, después de `vars` y de `nav`: dentro
  del subárbol pisa tanto a las variables de la zona como al bloque global del
  mismo selector, que tiene menos especificidad. Es lo que permite que un botón
  o una lista se comporten distinto dentro de la zona sin duplicar el theme.

Toda referencia `var(--bs-algo)` de estas tres secciones se comprueba contra los
tokens que el theme genera y contra `known-tokens.json`, el inventario de lo que
Dynamic define en su CSS. Un `var()` a un token inexistente no da error en el
navegador: deja la propiedad en su valor inicial, y el fallo es invisible.

`known-tokens.json` se regenera con
`node scripts/theme/build-known-tokens.mjs [ruta/al/dynamic-ui.css]` — `dist/`
está gitignoreado, así que el JSON se versiona y el script se corre a mano tras
un build o contra el CSS de un tarball publicado.

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
`monotonia`, `contraste`, `contraste-boton`, `contraste-nav-pills`,
`contraste-zona` y `contraste-enlace-zona`. Sale con 1 si hay errores;
`--strict` hace fallar también con avisos, y `--min-contrast N` cambia el umbral
(4.5 por defecto, WCAG 2.x AA para texto normal).

Cada bloque se mide **en su propio contexto**: sus declaraciones sobre las del
bloque raíz, como lo resuelve el navegador. Sin eso, una zona que redefine
`--bs-body-bg-rgb` se evaluaría contra el fondo del raíz y la medición no
correspondería a ningún contexto real.

- `contraste-boton` — todo bloque `.btn-<role>` o `.btn-outline-<role>` que fije
  `--bs-btn-color` o `--bs-btn-bg`. El texto que falte se toma del que Bootstrap
  hornea (blanco, o gris 700 en `warning` y `light`) y el fondo, de
  `--bs-<role>-rgb`. En `outline` ese fondo es el del estado relleno.
- `contraste-nav-pills` — `--bs-nav-pills-link-active-color` sobre
  `--bs-nav-pills-link-active-bg`, en el bloque donde se declaren.
- `contraste-zona` — `--bs-body-color-rgb` sobre `--bs-body-bg-rgb` de la zona.
- `contraste-horneado` — los pares que la librería resuelve por su cuenta y que
  un theme no declara. Se miden en el raíz y dentro de cada zona, porque una
  zona que mueve la superficie los cambia sin tocar ninguno.
- `contraste-enlace-zona` — `--bs-link-color-rgb` sobre el fondo de la zona.
  Entre 3:1 y 4.5:1 es aviso, no error: el enlace se distingue del fondo pero su
  texto no llega a AA.

### Los pares horneados

Hay pares texto/fondo que la librería resuelve por su cuenta y que un theme no
declara: se quedan como estaban aunque el rebrand cambie todo lo demás. El
validador los lleva en una tabla, con la variable que el componente lee y el
valor al que cae cuando nadie la toca.

| Componente | Texto | Fondo |
| --- | --- | --- |
| `.list-group-item` | `--bs-list-group-color` (→ role `dark`) | `--bs-list-group-bg` (→ transparente: la superficie del contexto) |
| `.list-group-item-action` | `--bs-list-group-action-color` (→ `gray-900`) | `--bs-list-group-bg` |
| `.alert-<role>` | `--bs-<role>-text-emphasis` | `--bs-<role>-bg-subtle` |
| `.text-bg-<role>` | horneado en la clase, casi siempre con `!important` | el paso sólido del role |
| `.btn-<role>` sin override | `--bs-btn-<role>-color` | `--bs-btn-<role>-bg` |

Dos detalles que importan al leer un informe:

- Un fondo `transparent` no es un color: lo que se ve detrás es la superficie
  del contexto, y contra eso se mide. Por eso una lista dentro de una zona
  oscura puede fallar sin que el theme haya declarado nada raro.
- `.text-bg-<role>` lleva el color escrito en la propia clase y con
  `!important`: ninguna variable lo mueve. Si ese par no contrasta, el arreglo
  es cambiar el color del role o no usar la clase con él.

Cuando un theme redefine `--bs-btn-color` en su propio bloque, el par de ese
botón deja de medirse como horneado y pasa a `contraste-boton`, que conoce el
bloque concreto. Queda constancia como nota `par-redefinido`.

Un botón con contorno se mide en sus dos estados, que son pares distintos: en
reposo el fondo es transparente y detrás está la superficie del contexto; sólo
al rellenarse (hover/active) el texto cae sobre el color del role, y ahí el que
manda es `--bs-btn-hover-color`.

Un color escrito literal (`#fff`) donde se esperaba una referencia se acepta y se
anota como `literal`: se mide tal cual, pero queda fuera del theme y cambiar el
token no lo mueve. Las notas van a stdout, no a stderr — no son hallazgos.

Un par que ya falla con la paleta por defecto se reporta como aviso
`contraste-preexistente`, no como error: el defecto es de la librería.
