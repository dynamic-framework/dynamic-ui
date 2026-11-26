# scripts/theme

Herramienta mínima para rebrandear Dynamic UI desde un theme reducido, y un
validador de los errores conocidos al hacerlo a mano.

## Uso desde el paquete instalado

`@dynamic-framework/ui-react` publica las dos herramientas como binarios. El
`known-tokens.json` incluido corresponde al CSS de la versión instalada.

```bash
npm i -D @dynamic-framework/ui-react
npx dynamic-theme-expand theme.json -o theme.css
npx dynamic-theme-validate theme.css --strict
```

Sin instalar el paquete en el proyecto:

```bash
npx -p @dynamic-framework/ui-react@<versión> dynamic-theme-expand theme.json -o theme.css
npx -p @dynamic-framework/ui-react@<versión> dynamic-theme-validate theme.css
```

En CI, `dynamic-theme-validate` sale con `1` si hay errores:

```yaml
- run: npx dynamic-theme-expand theme/theme.json -o theme/theme.css
- run: npx dynamic-theme-validate theme/theme.css --strict
```

## Uso dentro del repositorio

```bash
node scripts/theme/theme-expand.mjs examples/themes/theme-ejemplo.json
node scripts/theme/theme-validate.mjs examples/themes/theme-ejemplo.css
```

o vía npm:

```bash
npm run theme:expand -- examples/themes/theme-ejemplo.json
npm run theme:validate -- examples/themes/theme-ejemplo.css
```

Los tests viven en `theme-validate.spec.ts`, `theme-tokens.spec.ts` y `theme-diff.spec.ts`, y corren con `npm test`.

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

## Diff entre versiones

`theme-diff.mjs` compara el CSS compilado de dos versiones y describe en JSON
lo que cambia para un theme o un UI Kit: las custom properties de todo el CSS
y las clases que aparecen o desaparecen.

```bash
npm run theme:diff -- <prev>/dynamic-ui.css <next>/dynamic-ui.css [--out changes.json]
```

Cada release lo publica en el CDN, comparado contra la mayor versión estable
anterior del índice (en un backport, 2.11.1 se compara contra 2.11.0). Si la
versión es el latest del índice, también se publica en `latest/`:

```
https://cdn.dynamicframework.dev/assets/<semver>/ui-react/tokens/changes.json
https://cdn.dynamicframework.dev/assets/latest/ui-react/tokens/changes.json
```

```json
{
  "from": "2.12.0",
  "to": "2.12.1",
  "customProperties": {
    "added":   [{ "name": "--bs-btn-text-decoration", "selector": ".btn", "media": null, "value": "none" }],
    "removed": [{ "name": "--bs-…", "selector": "…", "media": null, "value": "…" }],
    "changed": [{ "name": "--bs-…", "selector": ":root", "media": null, "from": "…", "to": "…" }],
    "renamed": [{ "from": "--bs-…", "to": "--bs-…", "selector": "…", "media": null, "value": "…" }]
  },
  "classes": { "added": [".d-skeleton"], "removed": [] }
}
```

- Una custom property se identifica por nombre, selector y `media` (la cadena
  de `@media`/`@supports` que la envuelve, o `null`). Entran `:root`,
  componentes (`.btn`, `.alert`…), utilidades, zonas
  (`[data-bs-theme="dark"]`) y cualquier at-rule; quedan fuera las de
  `@keyframes`.
- Las listas de selectores se separan, así que reagrupar reglas en Sass no
  aparece como cambio. `[data-bs-theme=dynamic]` se reporta como `:root`.
- `changed` ignora diferencias de espacios y de mayúsculas en hex; agregar o
  quitar `!important` sí cuenta.
- `renamed` empareja una variable eliminada con una agregada del mismo
  selector y `media` cuando son las únicas de su lado con ese valor y los
  nombres comparten algún segmento (`--bs-gray-25` → `--bs-neutral-25`). El
  par sale de `removed` y `added`. Con más de un candidato no se adivina y
  quedan en `removed` y `added`.
- `classes` lista los nombres de clase que aparecen o desaparecen de los
  selectores, en cualquier regla.
- Las declaraciones normales (`padding`, `color`…) quedan fuera: una release
  puede mover cientos y taparían lo que un theme tiene que revisar.
- La entrada es el CSS y no `known-tokens.json`: el inventario solo tiene
  nombres, sin valores ni selector.

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
| `body.bg`, `body.color` | en un theme completo | Salen como `--bs-body-bg-rgb` / `--bs-body-color-rgb` |
| `body.borderColor` | no | Por defecto `rgb(var(--bs-gray-100-rgb))` |
| `typography.fontFamily` | en un theme completo | Sale como `--bs-font-sans-serif`, que también leen `.tooltip` y `.popover`. `var(--bs-font-sans-serif)` a secas conserva la de Dynamic; dentro de una pila es error |
| `typography.scale.N` | no | Pasos `1`..`6`, en `rem` |
| `radius` | en un theme completo | Radio base en `rem`; el resto se deriva |
| `root` | no | Mapa `--bs-*` → valor, emitido tal cual al final del bloque raíz |
| `components` | no | Lista de `{ selector, vars?, declarations? }` |
| `zones` | no | Mapa `<nombre>` → `{ vars, nav?, components? }` |

### Theme de uno o más roles

Un theme sin `body`, `typography` ni `radius` emite solo las rampas de los
roles indicados, en un bloque para incorporar a una hoja de theme existente.
Admite `roles`, `gray`, `name` y `version`.

```json
{ "roles": { "primary": "#166e62" } }
```

```css
/*
 * Para @dynamic-framework/ui-react X.Y.Z.
 * Bloque parcial para incorporar a una hoja de theme existente.
 * Se carga después del CSS de Dynamic UI.
 */

:root,
[data-bs-theme="dynamic"] {
  /* Role primary */
  --bs-primary-rgb: 22, 110, 98;
  --bs-primary-text-bg-color: var(--bs-white);
  --bs-primary-25-rgb: 243, 248, 247;
  --bs-primary-50-rgb: 232, 241, 239;
  --bs-primary-100-rgb: 208, 226, 224;
  --bs-primary-200-rgb: 162, 197, 192;
  --bs-primary-300-rgb: 115, 168, 161;
  --bs-primary-400-rgb: 69, 139, 129;
  --bs-primary-500-rgb: var(--bs-primary-rgb);
  --bs-primary-600-rgb: 18, 88, 78;
  --bs-primary-700-rgb: 13, 66, 59;
  --bs-primary-800-rgb: 9, 44, 39;
  --bs-primary-900-rgb: 4, 22, 20;
}
```

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
- En las tres secciones, una variable que no termina en `-rgb` lleva un color
  completo: `"--bs-btn-color": "var(--bs-white-rgb)"`, un triplete literal o un
  `var()` cuyo respaldo sea uno de los dos es un error. La librería la consume
  como color (`color: var(--bs-btn-color)`) y un triplete ahí no se pinta; va
  envuelto, `rgb(var(--bs-white-rgb))`, o apunta al wrapper, `var(--bs-white)`.
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

Una zona no es un tema aparte: es un subárbol del mismo documento, y hay tres
cosas que no hereda solas.

**Los wrappers de color se computan donde se declaran.** La librería define
`--bs-body-color: rgb(var(--bs-body-color-rgb))` en `:root`, así que ese valor
queda resuelto **con el triplete del raíz** y se hereda ya calculado. Una zona
que sólo cambie `--bs-body-color-rgb` no lo mueve: todo lo que lea
`var(--bs-body-color)` —`.form-control`, `.modal`, `.text-body-secondary`—
seguirá pintando el color del tema claro. Lo mismo pasa con
`--bs-secondary-bg`, que pinta `.popover-header`, o con `--bs-link-color`, que
lee `.btn-link`.

Por eso una zona emite, por cada triplete que redefine, su wrapper justo
después, con el valor que le da la librería. En `vars` basta con los tripletes:

```json
"vars": {
  "--bs-body-bg-rgb": "var(--bs-dark-rgb)",
  "--bs-body-color-rgb": "var(--bs-white-rgb)",
  "--bs-secondary-bg-rgb": "var(--bs-gray-800-rgb)",
  "--bs-secondary-color-rgb": "var(--bs-white-rgb)"
}
```

```css
[data-bs-theme="oscura"] {
  --bs-body-bg-rgb: var(--bs-dark-rgb);
  --bs-body-bg: rgb(var(--bs-body-bg-rgb));
  --bs-body-color-rgb: var(--bs-white-rgb);
  --bs-body-color: rgb(var(--bs-body-color-rgb));
  --bs-secondary-bg-rgb: var(--bs-gray-800-rgb);
  --bs-secondary-bg: rgb(var(--bs-secondary-bg-rgb));
  --bs-secondary-color-rgb: var(--bs-white-rgb);
  --bs-secondary-color: rgba(var(--bs-secondary-color-rgb), .75);
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
}
```

La lista de wrappers es la del CSS compilado (`known-tokens.json`): cualquier
`--bs-X-rgb` que tenga su `--bs-X` en `:root`, incluidas las rampas de los roles
y de grises. Un wrapper que la zona declara en `vars` se emite con su valor, en
su sitio, y el generador no lo repite. Un triplete que vuelve al del padre
(`inherit`, `unset`, `revert`, `revert-layer`) no lleva wrapper: el heredado ya
es el que corresponde. Los bloques de `components`, globales o de
la zona, siguen la misma regla: un triplete redefinido en `.card` lleva su
wrapper en `.card`.

**Los colores de los iconos monocromos se leen en el componente.** El toggler
del navbar, el chevron del acordeón, los controles del carrusel y el botón de
cierre se pintan con un `background-color` sobre una máscara, y ese color no se
declara en `:root` justamente por lo anterior: ahí quedaría congelado con los
valores del raíz. Cada componente lo lee con su valor por defecto como respaldo,

```css
.accordion-button::after {
  background-color: var(--bs-accordion-btn-icon-color, var(--bs-body-color));
}
```

así que sin theme se resuelve en el propio elemento y sigue a la zona, y un
theme puede fijarlo en `:root` o en una zona y gana sobre el respaldo.

Al no declararlos nadie, estos tokens no están en `known-tokens.json` —salvo
`--bs-navbar-toggler-icon-color`, que `.navbar-dark` sí declara—, así que un
`var()` a uno de ellos desde el theme deja la propiedad en su valor inicial: en
el theme se declaran, no se referencian.

| Token | Respaldo |
| --- | --- |
| `--bs-navbar-toggler-icon-color` | `rgba(var(--bs-body-color-rgb), .75)` |
| `--bs-accordion-btn-icon-color` | `var(--bs-body-color)` |
| `--bs-accordion-btn-active-icon-color` | `var(--bs-primary-600)` |
| `--bs-carousel-control-icon-color` | `var(--bs-white)` |
| `--bs-btn-close-icon-color` | `var(--bs-black)` |

**Y la zona tiene que pintarse.** `--bs-body-bg` y `--bs-body-color` las aplica
la librería sobre `body`; un subárbol a media página nunca pasa por esa regla.
Cuando la zona emite cualquiera de las dos —basta con que redefina su
triplete—, el generador emite también `color` y `background-color` en su
selector.

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
un build o contra el CSS de un tarball publicado. `npm pack` y `npm publish` lo
regeneran solos vía `prepack`, así que el paquete siempre lleva el inventario
del CSS que publica.

Con `--check` el script no escribe nada: compara los tokens del CSS con los del
JSON versionado, lista los que entran (`+`) y los que salen (`-`), y sale con 1
si no coinciden. No compara `dynamicUi`. CI lo corre después del build, así que
un cambio de estilos que añade o quita un token lleva en la misma PR el
inventario regenerado.

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

- `.d-chip`: el icono toma su tamaño de `--bs-chip-font-size` (`_d-chip.scss`).
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
    "--bs-chip-line-height": "1.2"
  }
}
```

Para el texto general, `--bs-body-font-size` y `--bs-body-line-height` van en
`root`; los tamaños de encabezado, sobre `--bs-rfs-fs-N` (ver *Reglas que la
salida respeta*).

## Reglas que la salida respeta

- Los colores viajan como triplete `"R, G, B"` sobre `--bs-<x>-rgb`. Nunca hex ni
  `rgb()` sobre el wrapper: la librería ya define
  `--bs-<x>: rgb(var(--bs-<x>-rgb))` en `src/style/root/_root.scss`.
- Y al revés: una variable sin `-rgb` nunca lleva un triplete. Las variables de
  color de componente (`--bs-btn-color`, `--bs-list-group-color`…) y los
  wrappers se escriben `rgb(var(--bs-<x>-rgb))` o `var(--bs-<x>)`.
- Rebrandear un role con rampa son **11 variables**: el base `-rgb` y las 10
  hojas (25, 50, 100, 200, 300, 400, 600, 700, 800, 900). El 500 no se declara
  con un valor propio: apunta al base.
- Las hojas se derivan con la receta de tinte de Sass — `mix` con blanco o negro
  en sRGB, con los pesos de Bootstrap (`tint-color` 95/90/80/60/40/20 %,
  `shade-color` 20/40/60/80 %) y redondeo al entero más cercano. Verificado canal
  por canal contra `dist/css/dynamic-ui.css`.
- `light` y `dark` **no tienen rampa** en la librería: sólo `--bs-light-rgb` y
  `--bs-dark-rgb`. Sus `-text-emphasis` y `-bg-subtle` apuntan a pasos de gris.
- La familia tipográfica se emite en `--bs-font-sans-serif`. La librería define
  `--bs-body-font-family: var(--bs-font-sans-serif)`, así que el cuerpo la sigue
  sin declararla aparte.
- La tipografía se overridea sobre `--bs-rfs-fs-N`, nunca sobre `--bs-fs-N`, que
  es sólo el alias. Cada paso fluido (con `vw`), y siempre los pasos 1..4, lleva
  además su valor en `@media (min-width: 1200px)`: un valor fluido necesita ahí su
  tope o sigue creciendo en desktop.
- Siempre se emiten `--bs-body-bg-rgb`, `--bs-body-color-rgb` y
  `--bs-border-color`.
- Fuera del bloque raíz (zonas y bloques de componente), cada triplete
  redefinido lleva detrás su wrapper, `--bs-<x>: rgb(var(--bs-<x>-rgb))`, salvo
  que el bloque ya lo declare: el de `:root` se calcula con el triplete del raíz.
- Se emiten `--bs-secondary-bg-rgb: var(--bs-gray-200-rgb)` y
  `--bs-tertiary-bg-rgb: var(--bs-gray-100-rgb)`, el valor que la librería
  define desde 2.11.0. Hasta 2.10.0 apuntaban al wrapper (`var(--bs-gray-200)`),
  que no es un triplete (#1191).
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
`rampa-irresoluble`, `paso-500`, `superficie-faltante`, `superficie-heredada`, `border-color`,
`where`, `vacio`, `ciclo`, `triplete-sin-envolver`, `wrapper-faltante-zona`, `tipografia`, `tipografia-breakpoint`, `tipografia-familia`, `monotonia`,
`contraste-boton`, `contraste-nav-pills`, `contraste-zona`, `contraste-superficie`,
`contraste-enlace-zona`, `contraste-horneado`, `contraste-preexistente` y
`contraste-irresoluble`. Sale con 1 si hay errores;
`--strict` hace fallar también con avisos (no con notas), y `--min-contrast N` cambia el umbral
(4.5 por defecto, WCAG 2.x AA para texto normal).

Cada componente se mide **en su propio contexto**, el raíz o una zona, como lo
resuelve el navegador:

- Varias reglas `[data-bs-theme="<zona>"]` se aplican juntas: sus declaraciones
  se funden en orden de aparición antes de medir.
- Una zona existe en cuanto un selector la nombra, con bloque propio o sin él:
  una hoja que sólo lleva `[data-bs-theme="<zona>"] .list-group` se mide dentro
  de esa zona. Lo que declara un bloque de componente sigue siendo del
  componente, no de la zona. `:root, [data-bs-theme="<nombre>"]` no cuenta: ahí
  el segundo selector es otro nombre para el raíz, que es como Bootstrap emite
  el modo claro, y sus declaraciones ya están en el raíz.
- Una custom property se resuelve donde se declara y se hereda ya calculada. Lo
  que la zona no declara vale dentro de ella lo mismo que en el raíz, aunque la
  zona cambie el token al que apunta. Eso incluye los wrappers de la librería:
  `--bs-primary`, `--bs-white` o `--bs-gray-900` se calculan en `:root`, así que
  un componente que los lee no cambia porque la zona cambie su triplete.
- Lo que se declara sobre el propio componente (en la librería, en un bloque
  global o en uno de la zona) se resuelve en el componente, dentro de la zona.
- `var(--x, respaldo)` usa el respaldo cuando `--x` no existe en ningún sitio o
  forma parte de un ciclo, igual que el navegador. Una variable que la librería
  define cuenta como existente aunque el validador no conozca su valor: el
  respaldo no entra y el par se avisa como `contraste-irresoluble`.
- Entre las declaraciones que caen sobre un mismo componente gana la
  `!important`, luego la de más especificidad (con el prefijo de zona) y, a
  igualdad, la última, como en la cascada.
- Un prefijo de zona pegado al selector (`[data-bs-theme="oscura"].btn-primary`)
  pone la zona en el mismo elemento que el componente, y eso cambia dos cosas.
  Lo que la zona declara cae sobre el componente y **compite en la cascada** con
  lo que la librería y el theme ponen ahí, en vez de heredarse ya resuelto;
  `[data-bs-theme="x"]` es un atributo, así que pesa como una clase y, a igual
  peso, gana el que vaya después (el theme, que carga tras la librería). Y el
  **padre del componente queda fuera de la zona**, así que un `inherit` sobre él
  toma el valor de fuera. Esto vale sólo cuando el prefijo va pegado al
  componente y nada más: en `[data-bs-theme="x"].sidebar .nav-pills` la zona
  está en la barra, que es un ancestro de la pastilla, así que lo que declara
  le llega heredado y pierde contra lo que la librería declara sobre
  `.nav-pills`. Si el theme usa las dos formas sobre el mismo componente
  (`[data-bs-theme="x"] .a` y `[data-bs-theme="x"].a`), son dos elementos
  distintos y el validador mide uno: el de la zona pegada.

El validador no ve el HTML: no sabe qué elementos casan con un selector. Un
bloque se aplica a un componente cuando su selector, sin el prefijo de zona, es
uno de los selectores del componente (`.nav-pills`, `.sidebar .nav-pills`), o el
de su ancestro en un selector descendiente (`.nav-pills .nav-link.active`). Un
selector que alcanzaría al componente por otra vía (`.sidebar :is(.nav-pills)`,
`ul.nav-pills`) no entra en su capa: ese caso hay que mirarlo en la preview.

- `contraste-boton` — todo bloque `.btn-<role>` o `.btn-outline-<role>` que fije
  alguna de sus variables de texto o de fondo. Sólido y con contorno se miden en
  reposo, en hover y en active, cada estado con su propio par. En un botón
  sólido, lo que el bloque no declare se toma de lo que la librería pone en
  `.btn-<role>`: `--bs-btn-<role>-color` sobre `--bs-btn-<role>-bg` en reposo
  (en `secondary`, `--bs-secondary-700` sobre `--bs-secondary-50`) y, en los
  otros dos, `--bs-btn-<role>-hover-color` sobre `--bs-btn-<role>-hover-bg` y
  `--bs-btn-<role>-active-color` sobre `--bs-btn-<role>-active-bg`, que para
  casi todos los roles son los pasos 600 y 700 de la rampa. Por eso un bloque
  que aclara el fondo de reposo y oscurece el texto no basta: hover y active
  siguen pintando el relleno oscuro de la librería bajo ese texto oscuro, y hay
  que declarar también sus fondos. Un botón sólido sin bloque propio no entra
  en esta regla: lo mide `contraste-horneado`, y sólo en reposo.
  El texto de cada estado es el que gana sobre el botón: el del theme o, si
  no lo fija, el que pone la librería (`--bs-btn-outline-<role>-color`,
  `-hover-color` y `-active-color`). El botón con contorno no se rellena: la
  librería no declara `--bs-btn-hover-bg` ni `--bs-btn-active-bg` en él, así que
  los tres estados se miden contra la superficie del contexto. Si el theme
  declara alguna de esas dos variables, sobre el botón o en un ancestro, ese
  estado se mide contra ella. `--bs-btn-outline-<role>-hover-bg` existe en
  `:root`, pero ningún selector lo lee y no cuenta.
- `contraste-nav-pills` — `--bs-nav-pills-link-active-color` sobre
  `--bs-nav-pills-link-active-bg`, en el bloque donde se declaren. Sin fondo
  propio, la pastilla activa usa el de la librería, `--bs-gray-50`.
- `superficie-faltante` — error por cada una de `--bs-body-bg-rgb`,
  `--bs-body-color-rgb` y `--bs-border-color` que falte en un theme que declara
  `--bs-body-bg-rgb` o `--bs-body-color-rgb`.
- `superficie-heredada` — nota en un theme que no declara ninguna de las dos:
  las superficies se heredan de Dynamic.
- `vacio` — error cuando el CSS no declara ninguna custom property `--bs-*`. Una
  hoja de sólo zonas (`[data-bs-theme="<nombre>"]`, sin bloque raíz) no lo es:
  se mide contra los valores por defecto de la librería, igual que una zona de
  un theme completo que no redefine esas variables en `:root`. Así se puede
  mantener una zona en un archivo aparte sin repetir el raíz.
- `contraste-zona` — `--bs-body-color-rgb` sobre `--bs-body-bg-rgb` de la zona.
- `ciclo` — error cuando una declaración del raíz o de una zona se referencia a
  sí misma con `var()`: el navegador descarta la variable.
- `wrapper-faltante-zona` — aviso por cada triplete `--bs-X-rgb` que una zona
  redefine sin declarar `--bs-X`, cuando la librería tiene ese wrapper en
  `:root`: los componentes que leen `var(--bs-X)` conservan dentro de la zona el
  valor del raíz. Una zona repartida en varias reglas se revisa entera; un
  componente dentro de la zona (`[data-bs-theme="x"] .form-control`) necesita el
  wrapper sobre sí mismo. Cada alternativa de una lista de selectores se revisa
  por separado, y cuenta el wrapper de cualquier regla con el mismo selector,
  de la zona o global (`.form-control`); el que el componente hereda de la zona
  no cuenta. Un triplete que rechaza `triplete`, o que vuelve
  al valor del padre (`inherit`, `unset`…), no da este aviso.
- `tipografia-familia` — aviso cuando el theme declara `--bs-body-font-family`
  sin `--bs-font-sans-serif`: tooltips y popovers leen la segunda.
- `contraste-superficie` — `--bs-body-color-rgb` sobre `--bs-secondary-bg-rgb` y
  `--bs-tertiary-bg-rgb`, cuando el theme declara alguna de ellas. Se mide en el
  raíz y en cada zona que redefine el fondo o el texto del cuerpo; dentro de una
  zona, lo que ésta no declara se mide con el valor que hereda del raíz, y varias
  reglas de la misma zona se miden juntas. Si el theme no declara el color del
  cuerpo, se mide contra el de Dynamic, `var(--bs-gray-900-rgb)`: sigue a la
  rampa de grises del theme. Es aviso; una superficie que no se puede
  resolver se avisa como `contraste-irresoluble`.
- `triplete` — error en cada variable `-rgb` que no sea un triplete ni un
  `var()` a otra `-rgb`, en el raíz y en cada zona (una vez por variable, con
  el valor que gana si la zona se reparte en varias reglas). Las reglas de
  contraste que no pueden medir un par por esa causa no añaden
  `contraste-irresoluble`.
- `triplete-sin-envolver` — error en cada variable `--bs-*` que no termina en
  `-rgb` y vale un triplete: literal (`255, 255, 255`), un `var()` a una `-rgb`
  (`var(--bs-white-rgb)`) o un `var()` cuyo respaldo sea uno de esos. Se revisa
  en todos los bloques: raíz, zonas y componentes, también dentro de `@media`
  (ahí sin las excepciones de abajo). La librería consume esas
  variables como color completo, así que el navegador descarta la propiedad y
  el elemento hereda el color del padre. Un wrapper con triplete en el raíz ya
  lo da `wrapper`, y un `--bs-border-color` con triplete literal en el raíz,
  `border-color`: no se repiten. Las reglas de contraste no miden un lado que
  pase por una de estas variables, y tampoco añaden `contraste-irresoluble`.
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
| `.list-group-item` | `--bs-list-group-color` (→ `var(--bs-dark)` en `.list-group`) | `--bs-list-group-bg` (→ transparente: la superficie del contexto) |
| `.list-group-item-action` | `--bs-list-group-action-color` (→ `var(--bs-gray-900)` en `.list-group`) | `--bs-list-group-bg` |
| `.alert-<role>` | `--bs-<role>-text-emphasis` | `--bs-<role>-bg-subtle` |
| `.text-bg-<role>` (todos menos `secondary`) | `--bs-<role>-text-bg-color` (→ blanco, `gray-700` o negro, según el role por defecto) | `--bs-<role>-rgb` |
| `.text-bg-secondary` | `--bs-secondary-700` | `--bs-secondary-50` |
| `.btn-<role>` sin bloque propio, sólo en reposo | `--bs-btn-<role>-color` | `--bs-btn-<role>-bg` |

El valor por defecto de cada variable es el que declara la librería, y se
resuelve donde ella lo declara: en `:root` las variables del role y del botón,
en `.list-group` las de la lista. Casi todos apuntan a un wrapper
(`var(--bs-gray-900)`, `var(--bs-white)`), que se calcula en `:root`; por eso
una zona que sólo cambia `--bs-gray-900-rgb` no mueve el texto de la lista. El
fondo de `.text-bg-<role>` es la excepción: la clase lee `--bs-<role>-rgb` en el
propio elemento, y ahí sí cuenta el triplete de la zona.

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

En un botón sólido los tres rellenos los pinta la librería, pero los tres
estados se miden sólo cuando el theme le da un bloque `.btn-<role>`: es ese
bloque el que lleva el botón a `contraste-boton`. Un bloque que declara sólo
`--bs-btn-color` y `--bs-btn-bg` deja hover y active con el par horneado —el
texto es el `color-contrast()` que Sass calculó para la paleta anterior y el
fondo, el paso 600 o 700 del role nuevo— y los dos se reportan. Si no llegan a
AA, el arreglo es declarar `--bs-btn-hover-bg` y `--bs-btn-active-bg` (y sus
`-border-color`, que la librería deja en el mismo paso) junto a los textos de
cada estado. `theme-expand` lo anticipa en sus notas de generación: un bloque
`.btn-<role>` sólido que fija `--bs-btn-hover-color` o `--bs-btn-active-color`
sin el fondo de ese estado se nombra junto al paso que la librería pinta debajo.
No deriva el fondo, porque elegir el paso es una decisión de diseño. En una
zona, cuenta el fondo que declare el bloque global del mismo selector.

El relleno se puede fijar por dos caminos y la nota cuenta los dos. La variable
genérica `--bs-btn-<estado>-bg` sólo vale declarada sobre el propio botón:
`df-button-variant-mapper` la redeclara en `.btn-<role>`, así que una que venga
del raíz o de la zona se pierde. El token del role,
`--bs-btn-<role>-<estado>-bg`, es justo lo que esa redeclaración lee, y vale
desde donde alcance al botón: el raíz, las variables de la zona o el bloque del
propio botón. Un token declarado sólo en una zona calla la nota de esa zona,
no la del raíz, porque el botón de fuera sigue con el relleno de la librería.

**Sin un bloque `.btn-<role>`, del botón sólido se mide sólo el reposo.** La
fila de la tabla es ese par y nada más: un theme que mueve la rampa del role y
deja que la librería pinte el botón entero puede dejar hover o active por
debajo de AA sin que el validador diga nada, porque el fondo de esos dos
estados sale de los pasos 600 y 700 de la rampa nueva y el texto sigue siendo
el que Sass horneó contra la anterior. Es el único camino del botón sólido que
no se cubre: hay que mirarlo en la preview, o declarar el bloque `.btn-<role>`
—aunque sólo repita lo que ya pinta la librería— para que los tres estados
entren en `contraste-boton`.

Un color escrito literal (`#fff`) donde se esperaba una referencia se acepta y se
anota como `literal`: se mide tal cual, pero queda fuera del theme y cambiar el
token no lo mueve. Las notas van a stdout, no a stderr — no son hallazgos.

Un par que ya está por debajo del umbral con la paleta por defecto de Dynamic se
reporta como aviso `contraste-preexistente`, no como error: no lo introduce el
theme.
