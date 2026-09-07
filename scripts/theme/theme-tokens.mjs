// Núcleo compartido por theme-expand.mjs y theme-validate.mjs.
//
// Todo lo que hay aquí está verificado contra el CSS compilado de Dynamic UI 2.8.0
// (dist/css/dynamic-ui.css), no contra stories/foundations/*.mdx, que documentan el
// formato incorrecto (`--bs-primary: #hex`).
//
// Referencias en el código fuente:
//   src/style/abstracts/variables/_colors.scss  → rampas, $theme-colors-mapping
//   src/style/root/_root.scss                   → wrappers rgb(var(--bs-<x>-rgb))
//   node_modules/bootstrap/scss/vendor/_rfs.scss → base 1.25rem, factor 10, bp 1200px

import { parse, wcagContrast, wcagLuminance } from 'culori';

export const PREFIX = 'bs';

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
 * Pares texto/fondo sólidos que Dynamic hornea en tiempo de compilación
 * (`.btn-<role>` y `.text-bg-<role>` en dist/css/dynamic-ui.css). `color-contrast()`
 * corre en Sass, así que estos pares NO se recalculan cuando un consumidor
 * cambia `--bs-<role>-rgb` en runtime: de ahí la necesidad de validarlos.
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
  dark: { fg: { kind: 'gray', step: 25 }, bg: { kind: 'gray', step: 400 } },
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
  return {
    r: clamp255(Math.round(parsed.r * 255)),
    g: clamp255(Math.round(parsed.g * 255)),
    b: clamp255(Math.round(parsed.b * 255)),
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
export const toCssRgb = ({ r, g, b }) => `rgb(${r}, ${g}, ${b})`;
export const toHex = ({ r, g, b }) => `#${[r, g, b].map((c) => c.toString(16).padStart(2, '0')).join('')}`;

export const luminance = (rgb) => wcagLuminance(toHex(rgb));
export const contrast = (a, b) => wcagContrast(toHex(a), toHex(b));

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
 * Emitir sólo el base deja ganar el `@media (min-width: 1200px)` de la librería.
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
  return Number(match[1]);
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
