// Núcleo compartido por theme-expand.mjs y theme-validate.mjs.
//
// Todo lo que hay aquí está verificado contra el CSS compilado de Dynamic UI
// (dist/css/dynamic-ui.css), no contra stories/foundations/*.mdx, que documentan el
// formato incorrecto (`--bs-primary: #hex`). Las rampas y los pares horneados se
// comprobaron en 2.8.0 y siguen igual en 2.10.0; el inventario de nombres de
// known-tokens.json sí está tomado del CSS publicado de 2.10.0.
//
// Referencias en el código fuente:
//   src/style/abstracts/variables/_colors.scss  → rampas, $theme-colors-mapping
//   src/style/root/_root.scss                   → wrappers rgb(var(--bs-<x>-rgb))
//   node_modules/bootstrap/scss/vendor/_rfs.scss → base 1.25rem, factor 10, bp 1200px

import fs from 'node:fs';

import {
  converter, parse, wcagContrast, wcagLuminance,
} from 'culori';

export const PREFIX = 'bs';

// culori devuelve cada color en su propio espacio (`hsl()` llega como
// { mode: 'hsl', h, s, l }), así que los canales r/g/b sólo existen tras
// convertirlo a sRGB.
const toRgb = converter('rgb');

/** Selector exacto que emite Dynamic UI en :root (dist/css/dynamic-ui.css:1). */
export const THEME_SELECTOR = ':root,\n[data-bs-theme="dynamic"]';

/** Los ocho roles de $theme-colors-base. */
export const ROLES = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
  'light',
  'dark',
];

/**
 * Roles que tienen rampa en el CSS compilado. `light` y `dark` NO la tienen:
 * sólo exponen `--bs-light-rgb` / `--bs-dark-rgb`, y su emphasis/bg-subtle
 * apuntan a pasos de gris. Verificado en dist/css/dynamic-ui.css.
 */
export const RAMPED_ROLES = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
];

/**
 * Las 10 hojas de una rampa. El 500 no está: sigue al base
 * (`--bs-<role>-500-rgb: var(--bs-<role>-rgb)`), así que rebrandear un role
 * con rampa son 11 variables: el base -rgb más estas 10.
 */
export const RAMP_STEPS = [25, 50, 100, 200, 300, 400, 600, 700, 800, 900];

/** Pasos de la rampa de grises: 11 literales, sin indirección en el 500. */
export const GRAY_STEPS = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

/** tint-color($c, $w) === mix(white, $c, $w) — Bootstrap. */
export const TINT_WEIGHTS = {
  25: 0.95, 50: 0.9, 100: 0.8, 200: 0.6, 300: 0.4, 400: 0.2,
};

/** shade-color($c, $w) === mix(black, $c, $w) — Bootstrap. */
export const SHADE_WEIGHTS = {
  600: 0.2, 700: 0.4, 800: 0.6, 900: 0.8,
};

/**
 * Roles cuyo base apunta a un paso de gris en $theme-colors-mapping, no a una
 * familia cromática. Su rampa es la rampa de grises completa, y su base/500 es
 * el paso indicado (por eso `secondary-500` es `gray-800`, no `gray-500`).
 */
export const GRAY_BACKED_ROLES = { secondary: 800, light: 25, dark: 900 };

/**
 * Pares texto/fondo sólidos que Dynamic resuelve en tiempo de compilación
 * (`.btn-<role>` y `.text-bg-<role>` en dist/css/dynamic-ui.css). `color-contrast()`
 * corre en Sass, así que estos pares NO se recalculan cuando un consumidor
 * cambia `--bs-<role>-rgb` en runtime: de ahí la necesidad de validarlos.
 * `.text-bg-<role>` lee su texto de `--bs-<role>-text-bg-color`, que
 * theme-expand vuelve a calcular; `.btn-<role>` sigue horneado.
 */
export const SOLID_PAIRS = {
  primary: { fg: { kind: 'white' }, bg: { kind: 'role', step: 500 } },
  secondary: { fg: { kind: 'role', step: 700 }, bg: { kind: 'role', step: 50 } },
  success: { fg: { kind: 'white' }, bg: { kind: 'role', step: 500 } },
  info: { fg: { kind: 'white' }, bg: { kind: 'role', step: 500 } },
  warning: { fg: { kind: 'gray', step: 700 }, bg: { kind: 'role', step: 500 } },
  danger: { fg: { kind: 'white' }, bg: { kind: 'role', step: 500 } },
  light: { fg: { kind: 'gray', step: 700 }, bg: { kind: 'gray', step: 25 } },
  dark: { fg: { kind: 'white' }, bg: { kind: 'gray', step: 900 } },
};

/** Pares `--bs-<role>-text-emphasis` sobre `--bs-<role>-bg-subtle`. */
export const SUBTLE_PAIRS = {
  primary: { fg: { kind: 'role', step: 600 }, bg: { kind: 'role', step: 100 } },
  secondary: { fg: { kind: 'role', step: 600 }, bg: { kind: 'role', step: 100 } },
  success: { fg: { kind: 'role', step: 600 }, bg: { kind: 'role', step: 25 } },
  info: { fg: { kind: 'role', step: 600 }, bg: { kind: 'role', step: 25 } },
  warning: { fg: { kind: 'role', step: 800 }, bg: { kind: 'role', step: 25 } },
  danger: { fg: { kind: 'role', step: 600 }, bg: { kind: 'role', step: 25 } },
  light: { fg: { kind: 'gray', step: 600 }, bg: { kind: 'gray', step: 100 } },
  dark: { fg: { kind: 'gray', step: 900 }, bg: { kind: 'gray', step: 300 } },
};

/** Rampa de grises por defecto de 2.8.0 (hecha a mano, NO derivada por tinte). */
export const DEFAULT_GRAYS = {
  25: '251, 251, 252',
  50: '240, 240, 242',
  100: '225, 225, 230',
  200: '196, 196, 205',
  300: '167, 167, 180',
  400: '138, 138, 155',
  500: '109, 109, 130',
  600: '87, 87, 104',
  700: '65, 65, 78',
  800: '43, 43, 52',
  900: '21, 21, 26',
};

/** Bases de role por defecto de 2.8.0, resueltas a triplete. */
export const DEFAULT_ROLE_BASES = {
  primary: '32, 104, 213',
  secondary: DEFAULT_GRAYS[800],
  success: '25, 135, 84',
  info: '32, 104, 213',
  warning: '255, 179, 0',
  danger: '220, 53, 69',
  light: DEFAULT_GRAYS[25],
  dark: DEFAULT_GRAYS[900],
};

/** Blanco y negro de Bootstrap, como triplete. */
export const DEFAULT_WHITE = '255, 255, 255';
export const DEFAULT_BLACK = '0, 0, 0';

/** Superficies por defecto de 2.8.0. */
export const DEFAULT_BODY_BG = '245, 246, 250';
export const DEFAULT_BODY_COLOR = DEFAULT_GRAYS[900];

/** Umbral WCAG 2.x AA para texto de tamaño normal. */
export const AA_NORMAL_TEXT = 4.5;

// -- Color ------------------------------------------------------------------

const clamp255 = (n) => Math.min(255, Math.max(0, n));

/** Un triplete es exactamente tres enteros 0-255 separados por comas. */
const TRIPLET_RE = /^(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})$/;

/**
 * Parsea la entrada de un theme reducido: hex, triplete "R, G, B", o cualquier
 * color CSS que culori entienda. Devuelve canales enteros 0-255.
 */
export function parseColor(input, where = 'color') {
  if (typeof input !== 'string') {
    throw new Error(`${where}: se esperaba un string con un color, se recibió ${typeof input}.`);
  }
  const raw = input.trim();
  const triplet = raw.match(TRIPLET_RE);
  if (triplet) {
    const [r, g, b] = triplet.slice(1).map(Number);
    if ([r, g, b].some((c) => c > 255)) {
      throw new Error(`${where}: "${raw}" tiene canales fuera de 0-255.`);
    }
    return { r, g, b };
  }
  const parsed = parse(raw);
  if (!parsed) {
    throw new Error(
      `${where}: "${raw}" no es un color reconocible. Usa hex (#0b6b53) o triplete ("11, 107, 83").`,
    );
  }
  const rgb = toRgb(parsed);
  return {
    r: clamp255(Math.round(rgb.r * 255)),
    g: clamp255(Math.round(rgb.g * 255)),
    b: clamp255(Math.round(rgb.b * 255)),
  };
}

/** Lee un triplete ya normalizado; devuelve null si no lo es. */
export function parseTriplet(value) {
  const match = String(value).trim().match(TRIPLET_RE);
  if (!match) return null;
  const [r, g, b] = match.slice(1).map(Number);
  if ([r, g, b].some((c) => c > 255)) return null;
  return { r, g, b };
}

export const toTriplet = ({ r, g, b }) => `${r}, ${g}, ${b}`;

/**
 * Alfa de un color CSS, entre 0 y 1; 1 si es opaco o si no se reconoce.
 *
 * Se lee del color ya parseado y no del nombre de la función, porque el alfa
 * llega por varias vías: `rgba()`, `hsla()`, el hex de ocho dígitos y la
 * sintaxis con barra `rgb(0 0 0 / 10%)`. Un triplete "R, G, B" no pasa por
 * culori y cuenta como opaco, que es lo que es.
 */
export const colorAlpha = (value) => parse(String(value).trim())?.alpha ?? 1;

export const toCssRgb = ({ r, g, b }) => `rgb(${r}, ${g}, ${b})`;
export const toHex = ({ r, g, b }) => `#${[r, g, b].map((c) => c.toString(16).padStart(2, '0')).join('')}`;

export const luminance = (rgb) => wcagLuminance(toHex(rgb));
export const contrast = (a, b) => wcagContrast(toHex(a), toHex(b));

const WHITE = { r: 255, g: 255, b: 255 };
const BLACK = { r: 0, g: 0, b: 0 };

/**
 * Text color of `.text-bg-<role>` over a role base, with the rule Sass uses to
 * compile the library default (Bootstrap's `color-contrast()` with
 * `$color-contrast-light: $white` and `$color-contrast-dark: $gray-700`): the
 * first foreground that reaches 4.5:1, in that order, or the one with the most
 * contrast. Returned as the same `var()` reference the library emits.
 */
export function textBgColor(base, gray700) {
  const foregrounds = [
    ['var(--bs-white)', WHITE],
    ['var(--bs-gray-700)', gray700],
    ['var(--bs-white)', WHITE],
    ['var(--bs-black)', BLACK],
  ];
  let best = foregrounds[0];
  let bestRatio = 0;
  for (const candidate of foregrounds) {
    const ratio = contrast(base, candidate[1]);
    if (ratio >= 4.5) return candidate[0];
    if (ratio > bestRatio) {
      bestRatio = ratio;
      best = candidate;
    }
  }
  return best[0];
}

/**
 * Deriva las 10 hojas de una rampa como lo hace Sass: mix con blanco/negro en
 * sRGB con los pesos por step, y redondeo al entero más cercano. Verificado
 * canal por canal contra dist/css/dynamic-ui.css para las 10 familias.
 */
export function deriveRamp(base) {
  const ramp = {};
  const mixWhite = (c, w) => Math.round(w * 255 + (1 - w) * c);
  const mixBlack = (c, w) => Math.round((1 - w) * c);
  for (const [step, w] of Object.entries(TINT_WEIGHTS)) {
    ramp[step] = { r: mixWhite(base.r, w), g: mixWhite(base.g, w), b: mixWhite(base.b, w) };
  }
  for (const [step, w] of Object.entries(SHADE_WEIGHTS)) {
    ramp[step] = { r: mixBlack(base.r, w), g: mixBlack(base.g, w), b: mixBlack(base.b, w) };
  }
  return ramp;
}

// -- Tipografía (RFS) -------------------------------------------------------

export const RFS_BASE_REM = 1.25;
export const RFS_FACTOR = 10;
export const RFS_BREAKPOINT_PX = 1200;
export const ROOT_FONT_SIZE_PX = 16;

/**
 * Formatea un número como lo escribe el repo: sin ceros a la izquierda
 * (`.25rem`, no `0.25rem`), que es lo que exige `number-leading-zero` de
 * stylelint-config-twbs-bootstrap y lo que usa src/style/**.
 */
const fmtNum = (n) => String(Number(n.toFixed(6))).replace(/^(-?)0\./, '$1.');

/**
 * Reproduce `font-size()` de RFS para un tamaño en rem.
 * Devuelve el valor base (fluido) y, si aplica, el valor del breakpoint 1200px.
 * Emitir sólo el base deja el valor fluido sin tope en desktop.
 */
export function rfsPair(rem) {
  if (rem <= RFS_BASE_REM) {
    return { base: `${fmtNum(rem)}rem`, wide: null };
  }
  const min = RFS_BASE_REM + (rem - RFS_BASE_REM) / RFS_FACTOR;
  const vw = ((rem - min) * ROOT_FONT_SIZE_PX * 100) / RFS_BREAKPOINT_PX;
  return { base: `calc(${fmtNum(min)}rem + ${fmtNum(vw)}vw)`, wide: `${fmtNum(rem)}rem` };
}

/** Pasos tipográficos que Dynamic expone como --bs-rfs-fs-N. */
export const FONT_SIZE_STEPS = ['1', '2', '3', '4', '5', '6'];

/**
 * Pasos que la librería vuelve a declarar dentro de `@media (min-width: 1200px)`
 * (dist/css/dynamic-ui.css: 3rem, 2.5rem, 2rem y 1.5rem). Un override fluido de
 * estos cuatro necesita su bloque en ese breakpoint para tener tope en desktop;
 * uno fijo ya gana por cascada.
 */
export const RFS_MEDIA_STEPS = ['1', '2', '3', '4'];

/** Escala tipográfica por defecto de 2.8.0, en rem. */
export const DEFAULT_FONT_SCALE = {
  1: '3rem', 2: '2.5rem', 3: '2rem', 4: '1.5rem', 5: '1.25rem', 6: '1rem',
};

// -- Radios -----------------------------------------------------------------

/** Múltiplos del radio base en 2.8.0: base 0.5rem → sm .25, lg 1, xl 1.5, xxl 2. */
export const RADIUS_FACTORS = { '': 1, sm: 0.5, lg: 2, xl: 3, xxl: 4 };

export function parseRem(value, where) {
  const match = String(value).trim().match(/^(-?\d*\.?\d+)rem$/);
  if (!match) {
    throw new Error(`${where}: se esperaba un valor en rem (por ejemplo "0.5rem"), se recibió "${value}".`);
  }
  const rem = Number(match[1]);
  // Un radio o un tamaño negativo es CSS inválido: el navegador descarta la
  // declaración y el theme parece correcto mientras no se mira en pantalla.
  if (rem < 0) {
    throw new Error(`${where}: se esperaba un valor en rem que no sea negativo, se recibió "${value}".`);
  }
  return rem;
}

export const formatRem = (n) => `${fmtNum(n)}rem`;

// -- Rampas por defecto -----------------------------------------------------

const deriveRampFrom = (triplet) => {
  const ramp = deriveRamp(parseTriplet(triplet));
  return Object.fromEntries(RAMP_STEPS.map((step) => [step, toTriplet(ramp[step])]));
};

/**
 * Rampas por defecto de cada role con rampa, ya resueltas a triplete.
 * Las cromáticas salen de derivar su familia; `secondary` usa la rampa de
 * grises tal cual (su base/500 es gray-800, que no es su propio paso 500).
 */
export const DEFAULT_ROLE_RAMPS = {
  primary: deriveRampFrom('32, 104, 213'),
  success: deriveRampFrom('25, 135, 84'),
  info: deriveRampFrom('32, 104, 213'),
  warning: deriveRampFrom('255, 179, 0'),
  danger: deriveRampFrom('220, 53, 69'),
  secondary: Object.fromEntries(RAMP_STEPS.map((step) => [step, DEFAULT_GRAYS[step]])),
};

// -- Secciones root / components / zones ------------------------------------

/**
 * Nombres de custom property que Dynamic UI define en su CSS compilado.
 * Sirve para responder una sola pregunta: si un theme escribe
 * `var(--bs-algo)`, ¿ese `--bs-algo` existe en algún sitio? Se regenera con
 * `node scripts/theme/build-known-tokens.mjs`.
 */
const knownTokens = JSON.parse(
  fs.readFileSync(new URL('./known-tokens.json', import.meta.url), 'utf8'),
);

export const KNOWN_TOKENS = new Set(knownTokens.tokens);
export const KNOWN_TOKENS_VERSION = knownTokens.dynamicUi;

/**
 * Propiedades CSS que un bloque de `components` puede declarar además de sus
 * variables. La lista es corta a propósito: un theme ajusta la caja y la
 * tipografía de un componente, no lo redibuja. Cualquier otra cosa (color,
 * background, display, position…) pertenece al CSS de la aplicación o a una
 * variable `--bs-*` del propio componente.
 */
export const ALLOWED_DECLARATIONS = [
  'padding',
  'font-family',
  'font-variant-numeric',
  'border-color',
  'border-radius',
];

/**
 * Normaliza un valor CSS a lo que el stylelint del repo acepta: los hex en
 * minúscula (`@stylistic/color-hex-case`). El theme se escribe a mano y ahí
 * `#2B6CB0` es tan legítimo como `#2b6cb0`, pero el CSS generado pasa por el
 * mismo linter que el resto del repo.
 */
export const normalizeCssValue = (value) => String(value)
  .replace(/#[0-9a-fA-F]{3,8}\b/g, (hex) => hex.toLowerCase());

/**
 * Color de texto del estado relleno (hover/active) de `.btn-outline-<role>`
 * cuando el theme no lo declara: el que `color-contrast()` calcula en Sass
 * sobre el role. Los botones sólidos no lo usan: leen lo que la librería pone
 * en `.btn-<role>` (LIBRARY_ELEMENT_VARS).
 */
export const BUTTON_DEFAULT_FG = {
  primary: { kind: 'white' },
  secondary: { kind: 'white' },
  success: { kind: 'white' },
  info: { kind: 'white' },
  danger: { kind: 'white' },
  dark: { kind: 'white' },
  warning: { kind: 'gray', step: 700 },
  light: { kind: 'gray', step: 700 },
};

/** `[data-bs-theme="<zona>"]`, el selector con el que se monta una zona. */
export const zoneSelector = (name) => `[data-bs-theme="${name}"]`;

/** Un nombre de zona viaja en un selector de atributo: sin comillas ni corchetes. */
export const ZONE_NAME_RE = /^[a-zA-Z][\w-]*$/;

/**
 * ¿Este prelude es el bloque raíz del theme? Se compara laxo — quitando
 * `:where(...)` y espacios — para que un CSS que envuelva el selector siga
 * reconociéndose como raíz y la regla que prohíbe `:where()` pueda reportarlo,
 * en vez de que el bloque desaparezca del análisis.
 */
export function isRootPrelude(prelude) {
  const bare = String(prelude).replace(/:where\(([^)]*)\)/g, '$1');
  return splitSelectorList(bare).some((part) => {
    const sel = part.trim();
    return sel === ':root' || /^\[data-bs-theme=["']?dynamic["']?\]$/.test(sel);
  });
}

/** Nombre de la zona si el prelude es exactamente su selector; null si no. */
export function zoneFromPrelude(prelude) {
  const match = String(prelude).trim().match(/^\[data-bs-theme=["']?([\w-]+)["']?\]$/);
  if (!match || match[1] === 'dynamic') return null;
  return match[1];
}

/** Todos los `--bs-*` que un valor referencia dentro de un `var()`. */
export function varRefs(value) {
  return [...String(value).matchAll(/var\(\s*(--[\w-]+)/g)].map((m) => m[1]);
}

/**
 * `var(--x)` o `var(--x, respaldo)` que ocupa todo el valor. Devuelve
 * `{ name, fallback }`, con `fallback` undefined si no hay coma, o null si el
 * valor no es una sola llamada a var(). Se recorren los paréntesis porque el
 * respaldo puede llevar otros var() dentro.
 */
function parseVarCall(raw) {
  const head = raw.match(/^var\(\s*(--[\w-]+)\s*([,)])/);
  if (!head) return null;
  let depth = 0;
  let close = -1;
  for (let i = 3; i < raw.length; i += 1) {
    if (raw[i] === '(') depth += 1;
    if (raw[i] === ')') {
      depth -= 1;
      if (depth === 0) {
        close = i;
        break;
      }
    }
  }
  if (close !== raw.length - 1) return null;
  return {
    name: head[1],
    fallback: head[2] === ',' ? raw.slice(head[0].length, close).trim() : undefined,
  };
}

/**
 * El wrapper `rgb(var(--x))` o `rgba(var(--x), α)`: devuelve la llamada a var()
 * de su primer argumento, o null. El alfa no cuenta para el contraste, igual que
 * en las reglas de contraste.
 */
function parseWrapper(raw) {
  const match = raw.match(/^rgba?\(([\s\S]*)\)$/);
  if (!match) return null;
  const inner = match[1];
  let depth = 0;
  let end = inner.length;
  for (let i = 0; i < inner.length; i += 1) {
    if (inner[i] === '(') depth += 1;
    if (inner[i] === ')') depth -= 1;
    if (depth === 0 && (inner[i] === ',' || inner[i] === '/')) {
      end = i;
      break;
    }
  }
  return parseVarCall(inner.slice(0, end).trim());
}

/**
 * Resuelve una custom property a un color tal como la ve un subárbol (una zona,
 * o un componente dentro de ella) que redefine algunas variables sobre su padre.
 *
 * Una custom property que referencia otra se sustituye en el elemento donde se
 * declara y se hereda ya calculada. Una variable que el subárbol no declara vale
 * lo mismo que en el padre, aunque el subárbol cambie los tokens a los que
 * apunta; una que sí declara sigue sus var() con la misma regla en cada salto.
 *
 * `var(--x, respaldo)` usa el respaldo sólo cuando `--x` no existe en ninguna
 * capa, vale `initial` o forma parte de un ciclo (`inherit`, `unset` y
 * `revert` toman el valor del padre): es lo que hace el navegador con una variable
 * sin valor. Si `--x` existe pero no es un color, el resultado es inválido y el
 * respaldo no entra. El respaldo puede llevar a su vez otro var(), y un ciclo
 * que pase por él se detecta igual que uno directo. Las variables del propio
 * ciclo siguen siendo inválidas aunque tengan respaldo. Un respaldo que no se
 * elige no crea dependencia: Chromium no lo cuenta para los ciclos.
 *
 * Una variable `-rgb` sólo admite un triplete o un var(). Las demás admiten
 * también el wrapper `rgb(var(--x))` y un color literal, que es como la librería
 * y los themes escriben las variables de color.
 *
 * `own` son las declaraciones del subárbol (Map nombre → { value, source? }) y
 * `resolveParent(name)` resuelve en el padre. Devuelve `{ rgb, source }` o
 * `{ rgb: null, reason }`; `undefined: true` marca una variable que no existe,
 * e `invalidFormat` nombra la variable `-rgb` cuyo valor no es un triplete. Un
 * resultado lleva `kind`: 'triplet' si sale de un triplete y 'color' si sale de
 * un wrapper o un literal.
 */
export function resolveInherited(name, own, resolveParent, seen = new Set()) {
  if (!own.has(name)) return resolveParent(name);
  // `inherit`, `unset` y `revert` en una custom property sin registrar toman el
  // valor ya calculado del padre, como si esta capa no la declarara.
  if (/^\s*(?:inherit|unset|revert|revert-layer)\s*$/i.test(own.get(name).value)) return resolveParent(name);
  // `cycle` nombra la variable donde se cierra el ciclo: mientras se vuelve
  // hacia ella, cada variable del camino es parte del ciclo.
  if (seen.has(name)) return { rgb: null, reason: `ciclo de var() en ${name}`, cycle: name };
  const path = new Set(seen).add(name);
  const result = resolveOwn(name, own, resolveParent, path);
  if (result.cycle !== name) return result;
  // Al salir del ciclo, la variable es inválida para quien la lea desde fuera,
  // como una que no existe: su respaldo, si lo tiene, sí entra.
  const { cycle, ...invalid } = result;
  return { ...invalid, guaranteedInvalid: true };
}

function resolveOwn(name, own, resolveParent, path) {
  const entry = own.get(name);
  // `initial` en una custom property la deja sin valor, como si no existiera:
  // quien la lea con var(--x, respaldo) usa el respaldo.
  if (/^\s*initial\s*$/i.test(entry.value)) {
    return { rgb: null, reason: `${name} vale "initial", que la deja sin valor`, guaranteedInvalid: true };
  }
  const source = entry.source ?? 'theme';
  const isTriplet = name.endsWith('-rgb');

  const follow = (call) => {
    const resolved = resolveInherited(call.name, own, resolveParent, path);
    const absent = resolved.undefined || resolved.guaranteedInvalid;
    if (absent && call.fallback !== undefined) return resolveValue(call.fallback);
    // Una variable `-rgb` se consume dentro de rgb()/RGBA(): si lo que referencia
    // vale un color completo (un wrapper o un literal), queda `rgb(rgb(…))` y no
    // se pinta.
    if (isTriplet && resolved.rgb && resolved.kind === 'color') {
      return {
        rgb: null,
        reason: `${name} apunta a ${call.name}, que vale un color y no un triplete`,
        invalidFormat: name,
      };
    }
    return resolved;
  };

  function resolveValue(value) {
    const raw = String(value).trim();
    const triplet = parseTriplet(raw);
    if (triplet) return { rgb: triplet, source, token: name, kind: 'triplet' };

    const call = parseVarCall(raw);
    if (call) return follow(call);

    if (!isTriplet) {
      const wrapped = parseWrapper(raw);
      if (wrapped) {
        const resolved = follow(wrapped);
        if (!resolved.rgb) return resolved;
        // Dentro de rgb()/rgba() sólo cabe un triplete: `rgb(var(--bs-white))`
        // queda `rgb(rgb(…))` y el navegador descarta el color.
        if (resolved.kind === 'color') {
          return {
            rgb: null,
            reason: `${name} envuelve en rgb() a ${wrapped.name}, que ya vale un color completo`,
          };
        }
        return { ...resolved, kind: 'color' };
      }
      // `transparent` no es un color sobre el que medir: lo que se ve es lo que
      // haya detrás, y eso lo decide quien mide.
      if (colorAlpha(raw) === 0) return { rgb: null, transparent: true, reason: `${name} es transparente` };
      try {
        return {
          rgb: parseColor(raw, name), source: 'literal', token: name, kind: 'color',
        };
      } catch {
        return { rgb: null, reason: `${name} vale "${raw}", que no es un color ni un var()` };
      }
    }

    return {
      rgb: null,
      reason: `${name} vale "${raw}", que no es un triplete ni un var()`,
      invalidFormat: name,
    };
  }

  return resolveValue(entry.value);
}

// -- Valores por defecto y contextos -----------------------------------------

/**
 * Valores que la librería declara en `:root` para las variables `-rgb` que miden
 * las reglas de contraste. Un theme que no declara una de ellas se queda con
 * este valor, resuelto en el raíz junto con lo que el theme sí declara.
 */
export const DEFAULT_TRIPLETS = (() => {
  const map = new Map([
    ['--bs-white-rgb', DEFAULT_WHITE],
    ['--bs-black-rgb', DEFAULT_BLACK],
    ['--bs-body-bg-rgb', DEFAULT_BODY_BG],
    ['--bs-body-color-rgb', DEFAULT_BODY_COLOR],
    ['--bs-gray-rgb', DEFAULT_GRAYS[500]],
  ]);
  for (const step of GRAY_STEPS) map.set(`--bs-gray-${step}-rgb`, DEFAULT_GRAYS[step]);
  for (const role of ROLES) map.set(`--bs-${role}-rgb`, DEFAULT_ROLE_BASES[role]);
  for (const role of RAMPED_ROLES) {
    map.set(`--bs-${role}-500-rgb`, DEFAULT_ROLE_BASES[role]);
    for (const step of RAMP_STEPS) {
      map.set(`--bs-${role}-${step}-rgb`, DEFAULT_ROLE_RAMPS[role][step]);
    }
  }
  return map;
})();

/** Una referencia de un par a la variable que lo resuelve: `var(--bs-gray-700)`. */
const specVar = (spec, role) => {
  if (spec.kind === 'white') return 'var(--bs-white)';
  if (spec.kind === 'gray') return `var(--bs-gray-${spec.step})`;
  return `var(--bs-${role}-${spec.step})`;
};

/**
 * Variables de color que la librería declara en `:root` y que leen los pares
 * horneados: el texto y el fondo de `.alert-<role>`, el texto de
 * `.text-bg-<role>` y los de `.btn-<role>`. Todas son alias de un wrapper, y por
 * eso se calculan en el raíz: una zona que sólo cambia el triplete al que
 * apuntan no las mueve.
 */
export const LIBRARY_ROOT_COLORS = (() => {
  const map = new Map();
  for (const role of ROLES) {
    map.set(`--bs-${role}-text-emphasis`, specVar(SUBTLE_PAIRS[role].fg, role));
    map.set(`--bs-${role}-bg-subtle`, specVar(SUBTLE_PAIRS[role].bg, role));
    // `.text-bg-secondary` no tiene variable de texto: lee su rampa.
    if (role !== 'secondary') map.set(`--bs-${role}-text-bg-color`, specVar(SOLID_PAIRS[role].fg, role));
    map.set(`--bs-btn-${role}-color`, specVar(SOLID_PAIRS[role].fg, role));
    map.set(`--bs-btn-${role}-bg`, specVar(SOLID_PAIRS[role].bg, role));
  }
  return map;
})();

/** Wrappers de la librería que llevan alfa en vez de `rgb(var(--bs-X-rgb))`. */
const WRAPPER_ALPHA = { '--bs-secondary-color': '.75', '--bs-tertiary-color': '.5' };

/**
 * El wrapper de color que la librería declara en `:root` para un nombre, o
 * undefined si no hay ninguno. La librería tiene uno por cada variable `-rgb`
 * suya, `--bs-X: rgb(var(--bs-X-rgb))`, y se calcula en el raíz: lo que lea
 * `var(--bs-X)` dentro de una zona ve el triplete del raíz, no el de la zona.
 */
export function libraryWrapper(name) {
  if (name.endsWith('-rgb') || !KNOWN_TOKENS.has(name) || !KNOWN_TOKENS.has(`${name}-rgb`)) {
    return undefined;
  }
  const alpha = WRAPPER_ALPHA[name];
  return alpha ? `rgba(var(${name}-rgb), ${alpha})` : `rgb(var(${name}-rgb))`;
}

/**
 * Lo que la librería declara en el propio selector de un componente, y que se
 * resuelve allí, dentro de la zona donde esté el componente. Es la capa más
 * baja del elemento: un bloque del theme sobre el mismo selector la pisa.
 */
export const LIBRARY_ELEMENT_VARS = new Map([
  ['.list-group', new Map([
    ['--bs-list-group-color', 'var(--bs-dark)'],
    ['--bs-list-group-action-color', 'var(--bs-gray-900)'],
    ['--bs-list-group-bg', 'transparent'],
  ])],
  ['.nav-pills', new Map([
    ['--bs-nav-pills-link-active-color', 'var(--bs-primary-500)'],
    ['--bs-nav-pills-link-active-bg', 'var(--bs-gray-50)'],
  ])],
  ...ROLES.map((role) => [`.btn-${role}`, new Map([
    ['--bs-btn-color', `var(--bs-btn-${role}-color)`],
    ['--bs-btn-bg', `var(--bs-btn-${role}-bg)`],
  ])]),
]);

/** Valor por defecto de la librería en `:root` para un nombre, o undefined. */
const libraryRootValue = (name) => DEFAULT_TRIPLETS.get(name)
  ?? LIBRARY_ROOT_COLORS.get(name)
  ?? libraryWrapper(name);

/**
 * El bloque raíz tal como lo ve el navegador: las declaraciones del theme sobre
 * los valores por defecto de la librería, en el mismo elemento. Un alias de la
 * librería se resuelve con lo que el theme declare en el raíz.
 */
const rootView = (decls) => ({
  has: (name) => decls.has(name) || libraryRootValue(name) !== undefined,
  get: (name) => decls.get(name) ?? { value: libraryRootValue(name), source: 'defecto' },
});

/**
 * Una variable que el theme no declara y que no tiene valor por defecto aquí.
 * Si la librería la define (está en known-tokens.json), existe en el navegador
 * aunque el validador no conozca su valor: no se puede medir, pero un
 * `var(--x, respaldo)` no usaría el respaldo. Sólo una que no existe en ningún
 * sitio es `undefined`.
 */
const undeclared = (name) => (KNOWN_TOKENS.has(name)
  ? { rgb: null, reason: `${name} es de la librería, pero el validador no conoce su valor` }
  : { rgb: null, undefined: true, reason: `${name} no está en el theme ni en los valores por defecto` });

/**
 * Resuelve una custom property en el bloque raíz, siguiendo cadenas de `var()`
 * y cayendo al valor por defecto de la librería cuando el theme no la toca.
 * Devuelve `{ rgb, source }`, o `{ rgb: null, reason }`.
 */
export function resolve(name, decls) {
  return resolveInherited(name, rootView(decls), undeclared);
}

const SPECIFICITY_ID = 1e6;
const SPECIFICITY_CLASS = 1e3;

/**
 * Recorre un selector y devuelve los trozos separados por `isSeparator` en el
 * primer nivel: fuera de paréntesis (`:not(.a, .b)`, `:has(.a .b)`), de
 * corchetes y de comillas.
 */
const splitOutside = (selector, isSeparator) => {
  const text = String(selector);
  const parts = [];
  let depth = 0;
  let quote = null;
  let start = 0;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (char === '\\') {
      // Un carácter escapado (`\"`, `\:`) no abre ni cierra nada.
      i += 1;
    } else if (quote) {
      if (char === quote) quote = null;
    } else if (char === '"' || char === "'") {
      quote = char;
    } else if (char === '(' || char === '[') {
      depth += 1;
    } else if (char === ')' || char === ']') {
      depth -= 1;
    } else if (depth === 0) {
      const length = isSeparator(text, i);
      if (length > 0) {
        parts.push(text.slice(start, i), text.slice(i, i + length));
        start = i + length;
        i += length - 1;
      }
    }
  }
  parts.push(text.slice(start));
  return parts;
};

/** Las alternativas de una lista de selectores, partida por sus comas de primer nivel. */
export const splitSelectorList = (list) => splitOutside(list, (text, i) => (text[i] === ',' ? 1 : 0))
  .filter((_, i) => i % 2 === 0)
  .map((part) => part.trim())
  .filter(Boolean);

/**
 * Los compuestos de un selector y los combinadores que los unen, en primer
 * nivel: `.a > .b:has(.c .d)` da `['.a', ' > ', '.b:has(.c .d)']`. Los
 * compuestos quedan siempre en las posiciones pares: un selector que empieza
 * por un combinador (`> .a`) empieza por un compuesto vacío.
 */
export const splitCompounds = (selector) => splitOutside(
  String(selector).trim(),
  (text, i) => text.slice(i).match(/^\s*[>+~]\s*|^\s+/)?.[0].length ?? 0,
);

/**
 * Especificidad de un selector como un solo número (ids, clases y atributos,
 * tipos), suficiente para los selectores de un theme. `:where()` no suma;
 * `:is()`, `:not()` y `:has()` valen lo que su argumento más específico;
 * `:nth-child(… of S)` suma una clase más lo que valga `S`; el resto de
 * pseudoclases cuenta como una clase.
 */
export function specificity(selector) {
  // El contenido de un atributo (`[data-target="#panel"]`) no es selector: un
  // `#` o un `.` dentro de él no suman.
  let rest = String(selector).replace(/\[[^\]]*\]/g, '[]');
  let nested = 0;
  const functional = /(?<!:):([\w-]+)\(/g;
  let match = functional.exec(rest);
  while (match) {
    let depth = 1;
    let close = match.index + match[0].length;
    for (; close < rest.length && depth > 0; close += 1) {
      if (rest[close] === '(') depth += 1;
      if (rest[close] === ')') depth -= 1;
    }
    const name = match[1].toLowerCase();
    const argument = rest.slice(match.index + match[0].length, close - 1);
    const most = (list) => Math.max(0, ...splitSelectorList(list).map(specificity));
    if (['is', 'not', 'has', 'matches', '-webkit-any'].includes(name)) nested += most(argument);
    else if (name.startsWith('nth-')) {
      const of = argument.match(/\bof\s+([\s\S]+)$/);
      nested += SPECIFICITY_CLASS + (of ? most(of[1]) : 0);
    } else if (name !== 'where') nested += SPECIFICITY_CLASS;
    rest = `${rest.slice(0, match.index)} ${rest.slice(close)}`;
    functional.lastIndex = match.index;
    match = functional.exec(rest);
  }
  const ids = (rest.match(/#[\w-]+/g) ?? []).length;
  const classes = (rest.match(/\.[\w-]+|\[[^\]]*\]|(?<!:):(?!:)[\w-]+/g) ?? []).length;
  const types = (rest.replace(/\[[^\]]*\]/g, '').match(/(?:^|[\s>+~])[a-zA-Z][\w-]*/g) ?? []).length
    + (rest.match(/::[\w-]+/g) ?? []).length;
  return nested + ids * SPECIFICITY_ID + classes * SPECIFICITY_CLASS + types;
}

/**
 * Un selector con los espacios alrededor de sus combinadores de primer nivel
 * normalizados. Lo que va entre comillas, corchetes o paréntesis no se toca:
 * `[data-label="a+b"]` y `[data-label="a + b"]` son selectores distintos.
 */
export const normalizeSelector = (selector) => splitCompounds(selector)
  .map((part, i) => (i % 2 === 0 ? part : ` ${part.trim()} `.replace(/^ {2}$/, ' ')))
  .join('');

/**
 * Guarda una declaración en un Map como lo haría la cascada entre reglas de la
 * misma especificidad: la posterior gana, salvo que la anterior sea
 * `!important` y ésta no.
 */
export function cascadeSet(map, name, entry) {
  if (map.get(name)?.important && !entry.important) return;
  map.set(name, entry);
}

/**
 * Zona a la que pertenece un bloque por su selector, el selector sin ella y si
 * la zona va en el mismo elemento (`sameElement`) o en un ancestro.
 */
export function splitZone(prelude) {
  const match = String(prelude).match(/^\[data-bs-theme=["']?([\w-]+)["']?\]([\s\S]*)$/);
  if (!match) return { zone: null, bare: String(prelude).trim(), sameElement: false };
  // `[data-bs-theme="x"].btn` pega la zona al compuesto: es el mismo elemento.
  // `[data-bs-theme="x"] .btn` (o `> .btn`) es un descendiente de la zona.
  const sameElement = /^[^\s>+~]/.test(match[2]);
  return { zone: match[1], bare: match[2].trim(), sameElement };
}

/**
 * Contextos en los que se mide un theme: el raíz y una entrada por zona. Varias
 * reglas `[data-bs-theme="<zona>"]` se aplican juntas, así que sus
 * declaraciones se funden en orden de aparición. Cada contexto lleva:
 *
 *   - `zone`: el nombre de la zona, o null en el raíz;
 *   - `own`: lo que declara el contexto (en el raíz, el propio bloque raíz);
 *   - `line`: la línea del primer bloque de la zona;
 *   - `element(...groups)`: lo que se declara sobre un componente dentro del
 *     contexto. Cada grupo es un elemento, del ancestro al propio componente
 *     (`['.list-group'], ['.list-group-item']`), y en cada uno, de menos a más
 *     prioridad: lo que pone la librería en el selector, los bloques globales
 *     del theme y los de la zona (`[data-bs-theme="<zona>"] .x`), que tienen más
 *     especificidad;
 *   - `lookup(name, element?)`: resuelve como el navegador. Lo que la zona no
 *     declara llega del raíz ya calculado, y con `element` se añade debajo la
 *     capa del componente.
 *
 * Todas las reglas que miden contraste leen de aquí; ninguna vuelve a recorrer
 * los bloques por su cuenta.
 */
export function buildContexts(blocks, root) {
  const inRoot = (name) => resolve(name, root);
  const zones = new Map();
  for (const block of blocks) {
    if (!block.zone) continue;
    const zone = zones.get(block.zone) ?? { zone: block.zone, own: new Map(), line: block.line };
    for (const [name, entry] of block.decls) cascadeSet(zone.own, name, entry);
    zones.set(block.zone, zone);
  }

  /**
   * Lo que se declara sobre un elemento que casa con alguno de `selectors`. Como
   * en la cascada, una declaración `!important` gana a las normales; entre las
   * del mismo tipo gana la de más especificidad (la de la alternativa que casa,
   * con el prefijo de zona si lo lleva) y, a igualdad, la que aparece después.
   * La librería va antes que el theme en el orden.
   */
  const layerFor = (zone, selectors) => {
    const wanted = new Set(selectors.map(normalizeSelector));
    const candidates = [];
    for (const selector of selectors) {
      for (const [name, value] of LIBRARY_ELEMENT_VARS.get(selector) ?? []) {
        candidates.push({ name, entry: { value, source: 'defecto' }, weight: specificity(selector) });
      }
    }
    for (const block of blocks) {
      if (block.zone) continue;
      // Los bloques raíz también cuentan: una regla `:root, .nav-pills` declara
      // sobre el componente. Es la alternativa que casa la que decide. Una
      // alternativa con la zona pegada (`[data-bs-theme="z"].x`) se trata como
      // si la zona fuera un ancestro; la regla `zona-pegada` lo avisa.
      let weight = -1;
      for (const alternative of splitSelectorList(block.prelude)) {
        const { zone: altZone, bare } = splitZone(alternative);
        if (altZone && altZone !== zone) continue;
        if (!wanted.has(normalizeSelector(bare))) continue;
        // `[data-bs-theme="<zona>"]` suma un atributo a la especificidad.
        weight = Math.max(weight, specificity(bare) + (altZone ? SPECIFICITY_CLASS : 0));
      }
      if (weight < 0) continue;
      for (const [name, entry] of block.decls) candidates.push({ name, entry, weight });
    }
    // sort es estable: a igual peso se conserva el orden de aparición.
    candidates.sort((a, b) => (Number(Boolean(a.entry.important)) - Number(Boolean(b.entry.important)))
      || (a.weight - b.weight));
    return new Map(candidates.map(({ name, entry }) => [name, entry]));
  };

  // Cada grupo de selectores es un elemento: los del mismo grupo se funden, y
  // cada grupo hereda del anterior, que es su ancestro (`.list-group` y luego
  // `.list-group-item`). Una variable se resuelve en el elemento que la declara.
  const elementIn = (zone) => (...groups) => {
    const layers = groups.map((selectors) => layerFor(zone, selectors));
    return {
      layers,
      has: (name) => layers.some((layer) => layer.has(name)),
      get: (name) => [...layers].reverse().find((layer) => layer.has(name))?.get(name),
    };
  };

  const withLookup = (ctx, resolveHere) => ({
    ...ctx,
    element: elementIn(ctx.zone),
    lookup: (name, element) => {
      if (!element) return resolveHere(name);
      const resolveInElement = element.layers.reduce(
        (parent, layer) => (inherited) => resolveInherited(inherited, layer, parent),
        resolveHere,
      );
      return resolveInElement(name);
    },
  });

  return [
    withLookup({ zone: null, own: root, line: null }, inRoot),
    ...[...zones.values()].map((zone) => withLookup(
      zone,
      (name) => resolveInherited(name, zone.own, inRoot),
    )),
  ];
}

// -- Pares horneados ---------------------------------------------------------

/**
 * Pares texto/fondo que la librería resuelve por su cuenta y que un theme no
 * declara: se quedan como estaban aunque el rebrand cambie todo lo demás. Cada
 * lado es la variable que el componente lee. Si el theme no la declara, vale lo
 * que la librería pone en `:root` (LIBRARY_ROOT_COLORS, los wrappers) o en el
 * selector del componente (LIBRARY_ELEMENT_VARS), y se resuelve donde se
 * declara: el mismo par da un resultado en el bloque raíz y otro dentro de una
 * zona sólo si la zona redefine algo que el par lea en ella.
 *
 * `owners` son los elementos del componente, del ancestro al propio
 * componente, y en cada uno los selectores que casan con él: lo que se declara
 * sobre ellos, en la librería o en el theme, forma la capa de ese elemento. Lo
 * que declara el ítem no cambia lo que su ancestro ya resolvió.
 *
 * `noCorregible` marca los pares que ninguna declaración del theme puede
 * cambiar, porque el color no viaja por una variable. Esos se reportan como
 * advertencia: un error pediría un arreglo que no existe.
 */
export const BAKED_PAIRS = [
  {
    component: '.list-group-item',
    why: 'la lista hereda el texto de --bs-list-group-color, que apunta al role dark',
    owners: [['.list-group'], ['.list-group-item']],
    fg: { variable: '--bs-list-group-color' },
    bg: { variable: '--bs-list-group-bg' },
  },
  {
    // El estado normal de un ítem de acción no lee --bs-list-group-color sino
    // su propia variable, fijada a gray-900 en `.list-group`. Es la que rompe
    // una lista de acciones dentro de una zona oscura.
    component: '.list-group-item-action',
    why: 'un ítem de acción lee --bs-list-group-action-color, no --bs-list-group-color',
    owners: [['.list-group'], ['.list-group-item', '.list-group-item-action']],
    fg: { variable: '--bs-list-group-action-color' },
    bg: { variable: '--bs-list-group-bg' },
  },
];

/**
 * Los mismos pares, pero por role. Se generan para los roles que el theme toca.
 * `.alert-<role>` y `.list-group-item-<role>` comparten el par -text-emphasis
 * sobre -bg-subtle; `.text-bg-<role>` y `.btn-<role>` van sobre el base.
 */
export function bakedRolePairs(role) {
  const pairs = [];

  if (SUBTLE_PAIRS[role]) {
    pairs.push({
      component: `.alert-${role}`,
      why: 'la alerta usa --bs-<role>-text-emphasis sobre --bs-<role>-bg-subtle',
      owners: [['.alert', `.alert-${role}`]],
      fg: { variable: `--bs-${role}-text-emphasis` },
      bg: { variable: `--bs-${role}-bg-subtle` },
      role,
    });
  }

  if (SOLID_PAIRS[role]) {
    pairs.push(role === 'secondary'
      ? {
        // `.text-bg-secondary` se pinta con los wrappers de su rampa
        // (`--bs-secondary-700` sobre `--bs-secondary-50`), sin una variable de
        // texto propia. Los wrappers se resuelven en :root y se heredan.
        component: `.text-bg-${role}`,
        why: 'el color sale de la rampa de secondary, no de una variable propia',
        owners: [[`.text-bg-${role}`]],
        fg: { variable: '--bs-secondary-700' },
        bg: { variable: '--bs-secondary-50' },
        role,
        noCorregible: true,
      }
      : {
        // El texto lee --bs-<role>-text-bg-color, que la librería resuelve en
        // Sass contra el role por defecto. Un theme que cambia el role tiene
        // que declararla también; theme-expand lo hace.
        component: `.text-bg-${role}`,
        why: 'la clase lee --bs-<role>-text-bg-color, que por defecto conserva el color resuelto para el role de la librería',
        // Un bloque sobre la propia clase puede redefinir las dos variables.
        owners: [[`.text-bg-${role}`]],
        fg: { variable: `--bs-${role}-text-bg-color` },
        // La clase pinta `RGBA(var(--bs-<role>-rgb))` en el propio elemento:
        // aquí sí cuenta el triplete de la zona.
        bg: { variable: `--bs-${role}-rgb` },
        role,
      });
    pairs.push({
      component: `.btn-${role}`,
      why: 'sin override, el botón conserva el color que color-contrast() calculó en Sass',
      owners: [['.btn', `.btn-${role}`]],
      fg: { variable: `--bs-btn-${role}-color` },
      bg: { variable: `--bs-btn-${role}-bg` },
      role,
      onlyWithoutOverride: true,
    });
  }

  return pairs;
}
