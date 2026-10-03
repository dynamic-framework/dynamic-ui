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

Los themes viven en `themes/` y su CSS generado en `out/`. El repo trae
`theme-ejemplo-zonas.json`, que ejercita las tres secciones, los componentes de
zona y los pares horneados, y que el validador acepta sin errores:

```bash
npm run theme:expand -- scripts/theme/themes/theme-ejemplo-zonas.json -o scripts/theme/out/theme-ejemplo-zonas.css
npm run theme:validate -- scripts/theme/out/theme-ejemplo-zonas.css
npm run theme:preview          # sirve scripts/theme/preview en el navegador
```

La preview carga el theme por query string, así que sirve para cualquiera sin
tocar el HTML:

```
/preview/                                      # theme-ejemplo-zonas.css
/preview/?css=../out/mi-theme.css
/preview/?css=../out/mi-theme.css&fonts=<url>  # webfonts, si el theme las pide
/preview/?css=…&zona=nocturna                  # sin este parámetro se deduce del CSS
```

Un theme que no declare ninguna zona se muestra igual, sólo con la columna clara.

## Entrada

`theme.json` reducido. Los colores aceptan hex, triplete `"R, G, B"` o cualquier
color CSS.

```json
{
  "name": "Banco Ejemplo",
  "version": "1.0.0",
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
| `name` | no | Encabeza el CSS generado |
| `version` | no | Cadena; acompaña a `name` en la cabecera del CSS |
| `roles.<role>` | al menos uno, o `gray` | `primary secondary success info warning danger light dark` |
| `gray` | no | Deriva la rampa de grises por tinte; ver la advertencia de abajo |
| `body.bg`, `body.color` | sí | Salen como `--bs-body-bg-rgb` / `--bs-body-color-rgb` |
| `body.borderColor` | no | Por defecto `rgb(var(--bs-gray-100-rgb))` |
| `typography.fontFamily` | sí | |
| `typography.scale.N` | no | Pasos `1`..`6`, en `rem` |
| `radius` | sí | Radio base en `rem`; el resto se deriva |
| `root` | no | Mapa `--bs-*` → valor, emitido tal cual al final del bloque raíz |
| `components` | no | Lista de `{ selector, vars?, declarations? }` |
| `zones` | no | Mapa `<nombre>` → `{ vars, nav?, components? }` |

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
  raíz, así que si repite una variable derivada, gana la tuya; el script lo
  avisa por la terminal.
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

### Hasta dónde llega una zona

Una zona no es un tema aparte: es un subárbol del mismo documento, y hay dos
cosas que no hereda solas.

**Los wrappers de color se computan donde se declaran.** La librería define
`--bs-body-color: rgb(var(--bs-body-color-rgb))` en `:root`, así que ese valor
queda resuelto **con el triplete del raíz** y se hereda ya calculado. Una zona
que sólo cambie `--bs-body-color-rgb` no lo mueve: todo lo que lea
`var(--bs-body-color)` —`.form-control`, `.modal`, `.text-body-secondary`—
seguirá pintando el color del tema claro. Por eso una zona declara el triplete
**y** el wrapper:

```json
"vars": {
  "--bs-body-color-rgb": "var(--bs-white-rgb)",
  "--bs-body-color": "rgb(var(--bs-white-rgb))",
  "--bs-secondary-color-rgb": "var(--bs-white-rgb)",
  "--bs-secondary-color": "rgba(var(--bs-white-rgb), .75)",
  "--bs-tertiary-color-rgb": "var(--bs-white-rgb)",
  "--bs-tertiary-color": "rgba(var(--bs-white-rgb), .5)",
  "--bs-emphasis-color-rgb": "var(--bs-white-rgb)",
  "--bs-emphasis-color": "rgb(var(--bs-white-rgb))"
}
```

**Y la zona tiene que pintarse.** `--bs-body-bg` y `--bs-body-color` las aplica
la librería sobre `body`; un subárbol a media página nunca pasa por esa regla.
Cuando una zona declara cualquiera de las dos, el generador emite `color` y
`background-color` en su selector, para que el consumidor no acabe repitiéndolas
a mano en su CSS.

**Cuidado con el efecto en las superficies claras.** Declarar el wrapper cambia
el color heredado de *todo* el subárbol, incluidos los componentes que llevan su
propio fondo claro: un `.form-control` dentro de una zona oscura pasa a texto
blanco sobre fondo blanco. Esos componentes necesitan su propio bloque en
`zones.<nombre>.components` devolviéndoles un color legible —es exactamente para
lo que está esa sección—. El validador todavía no lo detecta: asume que dentro de
una zona el fondo es el de la zona, así que este caso hay que mirarlo en la
preview.

Toda referencia `var(--bs-algo)` de estas tres secciones se comprueba contra los
tokens que el theme genera y contra `known-tokens.json`, el inventario de lo que
Dynamic define en su CSS. Un `var()` a un token inexistente no da error en el
navegador: deja la propiedad en su valor inicial, y el fallo es invisible.

`known-tokens.json` se regenera con
`node scripts/theme/build-known-tokens.mjs [ruta/al/dynamic-ui.css]` — `dist/`
está gitignoreado, así que el JSON se versiona y el script se corre a mano tras
un build o contra el CSS de un tarball publicado.

### Qué no va en un theme

`declarations` admite `padding`, `border-radius`, `border-color`, `font-family`
y `font-variant-numeric` (`ALLOWED_DECLARATIONS` en `theme-tokens.mjs`). No es
una lista incompleta: **las medidas tipográficas (`font-size`, `line-height`)
se cambian en la variable `--bs-*` del componente, cuando la expone**, no con
una declaración suelta. Si el componente no la expone (`.d-otp-contact` fija
`font-size: .875em` en `_d-otp.scss`), la medida pertenece al CSS de la
aplicación, que es a donde remite el error del validador. `font-family` se
admite porque no es una medida: ningún componente deriva otras de ella.

La regla es la misma para todos los componentes, aunque el riesgo que evita
depende de cada uno. En algunos, otras medidas salen de la variable
tipográfica, y una declaración directa las deja desacompasadas:

- `.d-chip`: el icono toma su tamaño de `--bs-chip-font-size`, y el contenedor
  del icono su ancho y alto de `--bs-chip-line-height` (`_d-chip.scss`).
- `.btn`: el icono sigue a `--bs-btn-font-size` (`_buttons.scss`).

En otros la variable sólo alimenta su propia propiedad (`--bs-btn-line-height`
es sólo el `line-height` del botón) y la declaración daría el mismo resultado.
La regla no distingue esos casos a propósito: con la variable, un theme cambia
la tipografía siempre en el mismo lugar y no depende de cómo esté construido
cada componente por dentro.

`padding` es otra decisión: un theme sí puede ajustar la caja de un componente
con una declaración. En un componente sin variantes de tamaño, como `.d-chip`,
declararlo da el mismo resultado que `--bs-chip-padding-x/y`. En `.btn` no: los
tamaños `.btn-sm` y `.btn-lg` escriben `--bs-btn-padding-x/y` con la misma
especificidad que `.btn`, así que tanto la declaración como esa variable sobre
`.btn`, cargadas después de Dynamic, aplanan los tres tamaños. Para cambiar un
tamaño sin tocar los otros, se usa su variable propia:

| En `.btn` | `sm` | por defecto | `lg` |
| --- | --- | --- | --- |
| nada | 12px | 16px | 20px |
| `padding: .5rem 3rem` | 48px | 48px | 48px |
| `--bs-btn-padding-x: 3rem` | 48px | 48px | 48px |
| `--bs-btn-lg-padding-x: 3rem` | 12px | 16px | 48px |

El efecto, medido en `.d-chip` con CSS aplicado a mano (`theme:expand` rechaza
la fila de `font-size` antes de emitirla):

| CSS aplicado | Texto | Icono |
| --- | --- | --- |
| nada | 14px | 10,7px |
| `.d-chip { font-size: 1.25rem }` (lo que pediría `"declarations": { "font-size": … }`) | 20px | 15,3px |
| `.d-chip { --bs-chip-font-size: 1.25rem }` (lo que emite `"vars"`) | 20px | 20px |

Con la declaración el texto pasa a 20px y el icono se queda en 15,3px, sin
llegar a la medida declarada; con la variable los dos quedan en 20px.

Cuando el componente la expone, el reemplazo es su variable. `known-tokens.json`
es el inventario de las que existen (`--bs-chip-font-size`,
`--bs-chip-line-height`, `--bs-btn-font-size`, `--bs-btn-line-height`, …):

```json
{
  "selector": ".d-chip",
  "vars": {
    "--bs-chip-font-size": ".875rem",
    "--bs-chip-line-height": "1.05rem"
  }
}
```

`--bs-chip-line-height` va con unidad: además del interlineado, es el ancho y
el alto del contenedor del icono (`_d-chip.scss`), donde un número sin unidad
no es una longitud válida. `1.05rem` es el mismo `1.2` sobre `.875rem`.

Para el texto general, `--bs-body-font-size` y `--bs-body-line-height` van en
`root`; los tamaños de encabezado, sobre `--bs-rfs-fs-N` (ver *Reglas que la
salida respeta*).

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
  `@media (min-width: 1200px)`: un valor fluido (con `vw`) necesita ahí su tope o
  sigue creciendo en desktop.
- Siempre se emiten `--bs-body-bg-rgb`, `--bs-body-color-rgb` y
  `--bs-border-color`.
- Siempre se emite el fix `--bs-secondary-bg-rgb: var(--bs-gray-200-rgb)` y
  `--bs-tertiary-bg-rgb: var(--bs-gray-100-rgb)`: hasta 2.10.0 la librería las
  definía apuntando al wrapper (`var(--bs-gray-200)`), que no es un triplete
  (#1191). Se mantiene para que el theme funcione también sobre esas versiones.
- Sin `:where()`: tiene especificidad cero y la librería le gana.
- El CSS es un entregable: la cabecera dice qué theme es y para qué versión de
  la librería, y los comentarios de dentro sólo nombran la sección. Lo que haya
  que contar sobre cómo se generó sale por stderr, bajo «Notas de generación».

## Advertencias

- **La rampa de grises de Dynamic está escrita a mano** en
  `src/style/abstracts/variables/_colors.scss`; no es tint/shade de `gray-500`.
  Pasar `gray` la deriva por tinte, así que cambia el carácter del neutro, no
  sólo su tono. El script lo avisa por la terminal.
- **`gray` no se propaga solo a `secondary`, `light` y `dark`.** Esos roles se
  respaldan en pasos de gris (`gray-800`, `gray-25`, `gray-900`), pero sus
  rampas están resueltas a literales en tiempo de compilación. Cuando el theme
  define `gray`, la herramienta reemite esos tres roles.
- **Los pares texto/fondo están horneados.** `color-contrast()` corre en Sass:
  `.btn-primary` lleva `color: var(--bs-white)` resuelto en build, y cambiar
  `--bs-primary-rgb` en runtime no lo recalcula. De ahí la comprobación de
  contraste del validador.

## Qué comprueba el validador

`triplete`, `wrapper`, `rampa-incompleta`, `rampa-inexistente`,
`rampa-irresoluble`, `paso-500`, `superficie-faltante`, `border-color`,
`fix-bg`, `where`, `vacio`, `tipografia`, `tipografia-breakpoint`, `monotonia`,
`contraste-boton`, `contraste-nav-pills`, `contraste-zona`,
`contraste-enlace-zona`, `contraste-horneado`, `contraste-preexistente` y
`contraste-irresoluble`. Sale con 1 si hay errores;
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
  zona que mueve la superficie los cambia sin tocar ninguno. Son error, salvo
  `.text-bg-secondary`, que es advertencia por no ser corregible desde el theme.
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
| `.text-bg-<role>` (todos menos `secondary`) | `--bs-<role>-text-bg-color` (→ blanco, `gray-700` o negro, según el role por defecto) | `--bs-<role>-rgb` |
| `.text-bg-secondary` | `--bs-secondary-700` | `--bs-secondary-50` |
| `.btn-<role>` sin override | `--bs-btn-<role>-color` | `--bs-btn-<role>-bg` |

Dos detalles que importan al leer un informe:

- Un fondo `transparent` no es un color: lo que se ve detrás es la superficie
  del contexto, y contra eso se mide. Por eso una lista dentro de una zona
  oscura puede fallar sin que el theme haya declarado nada raro.
- **`.text-bg-<role>` lee `--bs-<role>-text-bg-color`.** La librería la
  resuelve en Sass contra el role por defecto (el primero de blanco, `gray-700`,
  blanco o negro que llega a 4.5:1), y `theme-expand` la vuelve a calcular con
  la misma regla para cada role que el theme cambia. Un theme escrito a mano que
  cambia `--bs-<role>-rgb` sin declararla hereda el texto del role anterior, y
  el validador lo reporta como error.
- **`.text-bg-secondary` es la excepción: se reporta como advertencia, no como
  error.** Se pinta con su propia rampa (700 sobre 50), sin una variable de
  texto aparte, así que el aviso dice lo que sí se puede hacer: cambiar el color
  del role hasta que el par contraste. No cuenta para el código de salida.

Cuando un theme redefine `--bs-btn-color` en su propio bloque, el par de ese
botón deja de medirse como horneado y pasa a `contraste-boton`, que conoce el
bloque concreto.

Un botón con contorno se mide en sus dos estados, que son pares distintos: en
reposo el fondo es transparente y detrás está la superficie del contexto; sólo
al rellenarse (hover/active) el texto cae sobre el color del role, y ahí el que
manda es `--bs-btn-hover-color`.

Un color escrito literal (`#fff`) donde se esperaba una referencia se acepta y se
anota como `literal`: se mide tal cual, pero queda fuera del theme y cambiar el
token no lo mueve. Las notas van a stdout, no a stderr — no son hallazgos.

Un par que ya falla con la paleta por defecto se reporta como aviso
`contraste-preexistente`, no como error: el defecto es de la librería.
