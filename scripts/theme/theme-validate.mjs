#!/usr/bin/env node
//
// theme-validate — valida un theme.css de Dynamic UI 2.8.0 contra las reglas
// que el CSS compilado impone y que ningún linter del repo comprueba.
//
//   node scripts/theme/theme-validate.mjs <theme.css> [--min-contrast 4.5] [--strict]
//
// Sale con 1 si hay errores. Cada mensaje enseña la regla, no sólo el síntoma.

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';

import {
  AA_NORMAL_TEXT,
  BAKED_PAIRS,
  BUTTON_DEFAULT_FG,
  FONT_SIZE_STEPS,
  GRAY_STEPS,
  RAMPED_ROLES,
  RAMP_STEPS,
  ROLES,
  bakedRolePairs,
  buildContexts,
  cascadeSet,
  contrast,
  isRootPrelude,
  libraryWrapper,
  luminance,
  normalizeSelector,
  parseTriplet,
  resolve,
  splitCompounds,
  splitSelectorList,
  splitZone,
  varRefs,
  zoneFromPrelude,
  zoneSelector,
} from './theme-tokens.mjs';

// -- Lectura del CSS --------------------------------------------------------

/**
 * Lector mínimo: sólo necesita ver declaraciones de custom properties, en qué
 * bloque caen y en qué `@media`. Devuelve las declaraciones del bloque raíz
 * (`root`), las del breakpoint 1200px (`wide`) y la lista de bloques con su
 * selector (`blocks`), con el número de línea de cada declaración.
 *
 * Separar por bloque es lo que permite que un theme con componentes y zonas se
 * valide: sin eso, `[data-bs-theme="oscura"] { --bs-body-bg-rgb: … }` pisaría
 * en el análisis al valor del bloque raíz y las reglas medirían una mezcla de
 * los dos que no existe en ningún contexto real.
 */
export function readCss(css) {
  const stripped = css.replace(/\/\*[\s\S]*?\*\//g, (match) => match.replace(/[^\n]/g, ' '));
  const root = new Map();
  const wide = new Map();
  const blocks = [];
  const stack = [];
  const blockStack = [];
  let buffer = '';
  let line = 1;

  const inWideMedia = () => stack.some(
    (prelude) => /^@media\b/.test(prelude) && /min-width\s*:\s*1200px/.test(prelude),
  );
  const inAnyMedia = () => stack.some((prelude) => /^@media\b/.test(prelude));
  const currentBlock = () => [...blockStack].reverse().find(Boolean) ?? null;

  const commit = (text, endLine) => {
    const match = text.match(/^\s*(--[\w-]+)\s*:\s*([\s\S]+?)\s*$/);
    if (!match || stack.length === 0) return;
    // `!important` no es parte del valor: cambia quién gana en la cascada.
    const important = /\s*!\s*important$/i.test(match[2]);
    const value = important ? match[2].replace(/\s*!\s*important$/i, '') : match[2];
    const entry = { value, line: endLine, ...(important && { important }) };

    if (inWideMedia()) {
      cascadeSet(wide, match[1], entry);
      return;
    }
    if (inAnyMedia()) return;

    const block = currentBlock();
    if (block) cascadeSet(block.decls, match[1], entry);
    if (block && block.isRoot) cascadeSet(root, match[1], entry);
  };

  for (let i = 0; i < stripped.length; i += 1) {
    const char = stripped[i];
    if (char === '\n') line += 1;
    if (char === '{') {
      const prelude = buffer.trim();
      stack.push(prelude);
      if (prelude.startsWith('@')) {
        blockStack.push(null);
      } else {
        const block = {
          prelude,
          isRoot: isRootPrelude(prelude),
          zone: zoneFromPrelude(prelude),
          decls: new Map(),
          line,
        };
        blocks.push(block);
        blockStack.push(block);
      }
      buffer = '';
    } else if (char === '}') {
      commit(buffer, line);
      buffer = '';
      stack.pop();
      blockStack.pop();
    } else if (char === ';') {
      commit(buffer, line);
      buffer = '';
    } else {
      buffer += char;
    }
  }

  return {
    root, wide, blocks, usesWhere: /:where\s*\(/.test(stripped),
  };
}

// -- Resolución de tripletes ------------------------------------------------

// `resolve` vive en theme-tokens.mjs junto con los valores por defecto y los
// contextos por zona; se reexporta para quien lo importaba desde aquí.
export { resolve };

// -- Reglas -----------------------------------------------------------------

/**
 * Lo que puede valer una variable `-rgb`: tres canales de 0 a 255, una
 * referencia a otra variable que también sea `-rgb`, o `inherit`, `unset` o
 * `revert`, que la dejan con el valor del padre.
 *
 * Un `var(--bs-primary)` no sirve aunque exista: el wrapper vale `rgb(...)`,
 * y dentro de `rgb(var(--bs-primary))` queda `rgb(rgb(...))`, que no computa.
 * Los canales se acotan porque `999, 0, 0` tampoco lo consume nadie.
 */
const isTripletOrRgbVar = (value) => {
  const raw = String(value).trim();
  // Volver al valor heredado es válido: la variable vale lo que en el padre.
  if (/^(?:inherit|unset|revert|revert-layer)$/i.test(raw)) return true;
  const ref = raw.match(/^var\(\s*(--[\w-]+)\s*(?:,[\s\S]*)?\)$/);
  if (ref) return ref[1].endsWith('-rgb');
  const channels = raw.match(/^(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})$/);
  return Boolean(channels) && channels.slice(1).every((c) => Number(c) <= 255);
};

/** Nombres de wrapper de color que un theme nunca debe declarar. */
function wrapperName(name) {
  const stepGroup = [...RAMP_STEPS, 500, ...GRAY_STEPS].join('|');
  const rolesGroup = ROLES.join('|');
  const patterns = [
    new RegExp(`^--bs-(${rolesGroup})$`),
    new RegExp(`^--bs-(${rolesGroup})-(${stepGroup})$`),
    new RegExp('^--bs-gray$'),
    new RegExp(`^--bs-gray-(${stepGroup})$`),
    new RegExp('^--bs-(white|black)$'),
    new RegExp('^--bs-body-(bg|color)$'),
  ];
  return patterns.some((re) => re.test(name));
}

/** Roles y familias que el theme toca, deducidos de las variables presentes. */
function touched(decls) {
  const roles = new Set();
  let gray = false;
  for (const name of decls.keys()) {
    for (const role of ROLES) {
      if (name === `--bs-${role}-rgb` || new RegExp(`^--bs-${role}-\\d+-rgb$`).test(name)) {
        roles.add(role);
      }
    }
    if (name === '--bs-gray-rgb' || /^--bs-gray-\d+-rgb$/.test(name)) gray = true;
  }
  return { roles: [...roles], gray };
}

/**
 * Corre todas las reglas sobre un CSS ya leído.
 * Devuelve `{ errors, warnings, notes }`; cada entrada es `{ rule, line, message }`.
 * Las notas no son hallazgos: dejan constancia de lo que la medición dio por
 * supuesto, como un color escrito literal en vez de referenciar un token.
 */
export function validate(css, { minContrast = AA_NORMAL_TEXT } = {}) {
  const {
    root, wide, blocks, usesWhere,
  } = readCss(css);
  const errors = [];
  const warnings = [];
  const notes = [];
  const fail = (rule, message, line = null) => errors.push({ rule, message, line });
  const warn = (rule, message, line = null) => warnings.push({ rule, message, line });
  const note = (rule, message, line = null) => notes.push({ rule, message, line });

  if (root.size === 0 && wide.size === 0) {
    fail('vacio', 'El archivo no declara ninguna custom property --bs-*.');
    return { errors, warnings, notes };
  }

  /**
   * Wrapper de la librería para un lado de un par. Se nombra el wrapper y no su
   * triplete porque se calcula en el raíz: es lo que ve un componente dentro de
   * una zona que sólo cambia el triplete.
   */
  const pick = (spec, role) => {
    if (spec.kind === 'white') return '--bs-white';
    if (spec.kind === 'gray') return `--bs-gray-${spec.step}`;
    return `--bs-${role}-${spec.step}`;
  };

  // Contextos en los que se mide el theme: el bloque raíz y cada zona, con
  // todas sus reglas fundidas (buildContexts). Las reglas de formato y las de
  // contraste leen de aquí.
  const contexts = buildContexts(blocks, root);
  const zoneContexts = contexts.filter((ctx) => ctx.zone);
  const inContext = (ctx) => (ctx.zone ? ` dentro de [data-bs-theme="${ctx.zone}"]` : '');

  /** Cada alternativa del selector de un bloque, con su propio prefijo de zona. */
  const alternatives = (block) => splitSelectorList(block.prelude)
    .map((alt) => splitZone(alt))
    .filter((alt) => alt.bare);

  // R1 — formato de triplete, en el raíz y en cada zona. Una variable -rgb que
  // la zona declara mal deja de pintarse en todo lo que la consume dentro de
  // ella; lo que la zona no declara ya se revisó en el raíz. Una zona repartida
  // en varias reglas se revisa una sola vez por variable, con el valor que gana.
  for (const ctx of contexts) {
    for (const [name, { value, line }] of ctx.own) {
      if (!name.endsWith('-rgb')) continue;
      if (isTripletOrRgbVar(value)) continue;
      fail(
        'triplete',
        `${name}${inContext(ctx)}: "${value}" no es un triplete. Los colores de Dynamic viajan como `
        + '"R, G, B" sobre la variable -rgb (o como var(--bs-…-rgb)); ni hex, ni rgb(), '
        + 'ni hsl(), porque la librería los consume dentro de rgb()/RGBA().',
        line,
      );
    }
  }

  /**
   * ¿Ya explicó R1 por qué no se puede medir este par? Es así cuando lo que
   * falla es una variable -rgb mal escrita en el raíz o en la zona: avisar
   * además de que el contraste es irresoluble repetiría el síntoma sin la causa.
   * Una declarada en el bloque de un componente no la revisa R1, y se avisa.
   */
  const explainedByR1 = (ctx, element, ...sides) => sides.some((side) => {
    const name = side.invalidFormat;
    if (!name || element?.has(name)) return false;
    // La declaración que ve el contexto: la de la zona o, si no la tiene, la
    // del raíz. Sólo cuenta si R1 la rechazó; un valor con formato válido que
    // falla al resolverse (un respaldo que no es triplete) se sigue avisando.
    const decl = ctx.own.get(name) ?? root.get(name);
    return Boolean(decl) && !isTripletOrRgbVar(decl.value);
  });

  // R1b — una declaración que se referencia a sí misma. `--x: var(--x)` es un
  // ciclo: el navegador descarta la variable y todo lo que la lea cae a su
  // valor inicial, sin ningún error visible. Se comprueba en el raíz y en cada
  // zona; es formato, no depende de cómo se resuelva el resto del theme.
  for (const block of blocks) {
    if (!block.isRoot && !block.zone) continue;
    const where = block.zone ? ` dentro de [data-bs-theme="${block.zone}"]` : '';
    for (const [name, { value, line }] of block.decls) {
      if (!varRefs(value).includes(name)) continue;
      fail(
        'ciclo',
        `${name}${where}: "${value}" se referencia a sí misma. Una custom property que se usa `
        + 'en su propio valor forma un ciclo y el navegador la descarta: lo que la lee cae a su '
        + 'valor inicial.',
        line,
      );
    }
  }

  // R1c — el wrapper de cada triplete que redefine una zona. La librería
  // declara `--bs-X: rgb(var(--bs-X-rgb))` en `:root`, donde se calcula con el
  // triplete del raíz y se hereda ya resuelto: dentro de la zona, lo que lee
  // `var(--bs-X)` no ve el triplete nuevo. Se revisa cada zona con todas sus
  // reglas fundidas y cada bloque de componente dentro de una zona, que
  // necesita el wrapper en el propio bloque. Un triplete con formato inválido
  // en la zona ya lo rechaza R1, y uno que vuelve al valor del padre
  // (`inherit`, `unset`…) no cambia nada que el wrapper tenga que seguir.
  const checkWrappers = (decls, where, { skipInvalid }) => {
    for (const [name, { value, line }] of decls) {
      if (!name.endsWith('-rgb')) continue;
      const wrapper = name.slice(0, -'-rgb'.length);
      const expected = libraryWrapper(wrapper);
      if (!expected || decls.has(wrapper)) continue;
      if (/^(?:inherit|unset|revert|revert-layer)$/i.test(String(value).trim())) continue;
      if (skipInvalid && !isTripletOrRgbVar(value)) continue;
      warn(
        'wrapper-faltante-zona',
        `${name}${where}: se redefine sin ${wrapper}. La librería declara ${wrapper}: ${expected} `
        + 'en :root, donde se calcula con el triplete del raíz y se hereda ya resuelto, así que '
        + `los componentes que leen var(${wrapper}) conservan aquí el valor del raíz. Declara el `
        + 'wrapper junto al triplete, con ese mismo valor (theme-expand lo emite por ti).',
        line,
      );
    }
  };
  for (const ctx of zoneContexts) checkWrappers(ctx.own, inContext(ctx), { skipInvalid: true });
  for (const block of blocks) {
    if (block.zone || !alternatives(block).some((alt) => alt.zone)) continue;
    checkWrappers(block.decls, ` en "${block.prelude}"`, { skipInvalid: false });
  }

  // R2 — no declarar el wrapper de color.
  for (const [name, { value, line }] of root) {
    if (!wrapperName(name)) continue;
    fail(
      'wrapper',
      `${name}: no overridees el wrapper de color. La librería lo define como `
      + `rgb(var(${name}-rgb)) en _root.scss, así que un rebrand se hace sobre `
      + `${name}-rgb con un triplete "R, G, B". Escribir "${value}" aquí gana sobre `
      + 'la indirección y deja las variantes con opacidad (RGBA) rotas.',
      line,
    );
  }

  // R3 — un role con rampa se rebrandea con 11 variables.
  const { roles: touchedRoles, gray: touchedGray } = touched(root);
  for (const role of touchedRoles) {
    if (!RAMPED_ROLES.includes(role)) {
      const leaves = RAMP_STEPS.filter((step) => root.has(`--bs-${role}-${step}-rgb`));
      if (leaves.length > 0) {
        warn(
          'rampa-inexistente',
          `--bs-${role}-${leaves[0]}-rgb: la librería no expone rampa para "${role}" `
          + `(sólo --bs-${role}-rgb). Estas variables no las lee nada.`,
          root.get(`--bs-${role}-${leaves[0]}-rgb`).line,
        );
      }
      continue;
    }
    const missing = [];
    if (!root.has(`--bs-${role}-rgb`)) missing.push(`--bs-${role}-rgb`);
    for (const step of RAMP_STEPS) {
      if (!root.has(`--bs-${role}-${step}-rgb`)) missing.push(`--bs-${role}-${step}-rgb`);
    }
    if (missing.length > 0) {
      fail(
        'rampa-incompleta',
        `Role "${role}" incompleto: rebrandear un role son 11 variables — el base `
        + `--bs-${role}-rgb más las 10 hojas (25, 50, 100, 200, 300, 400, 600, 700, 800, 900). `
        + `El 500 no se declara: sigue al base. Faltan ${missing.length}: ${missing.join(', ')}.`,
        root.get(`--bs-${role}-rgb`)?.line ?? null,
      );
    }
    const five = root.get(`--bs-${role}-500-rgb`);
    if (five && five.value.trim() !== `var(--bs-${role}-rgb)`) {
      fail(
        'paso-500',
        `--bs-${role}-500-rgb: el 500 debe seguir al base, es decir `
        + `var(--bs-${role}-rgb). Duplicar el valor deja los dos desincronizados `
        + 'en cuanto alguien cambie el base.',
        five.line,
      );
    }
  }

  if (touchedGray) {
    const missing = GRAY_STEPS
      .map((step) => `--bs-gray-${step}-rgb`)
      .filter((name) => !root.has(name));
    if (!root.has('--bs-gray-rgb')) missing.unshift('--bs-gray-rgb');
    if (missing.length > 0) {
      fail(
        'rampa-incompleta',
        'La rampa de grises se toca completa o no se toca: --bs-gray-rgb más los 11 '
        + `pasos 25..900 (aquí el 500 sí es un literal). Faltan: ${missing.join(', ')}.`,
        root.get('--bs-gray-rgb')?.line ?? null,
      );
    }
  }

  // R4 — superficies. Un theme que toca el cuerpo tiene que fijarlas todas: si
  // cambia el fondo y no el borde, el rebrand queda a medias. Uno que no toca
  // --bs-body-* (el bloque de un role, por ejemplo) se queda con las de Dynamic,
  // y eso no es un hallazgo: se anota.
  const touchesBody = root.has('--bs-body-bg-rgb') || root.has('--bs-body-color-rgb');
  if (!touchesBody) {
    note('superficie-heredada', 'El theme no declara superficies: se heredan de Dynamic');
  }
  for (const [name, why] of [
    ['--bs-body-bg-rgb', 'el fondo del documento'],
    ['--bs-body-color-rgb', 'el color de texto base'],
    ['--bs-border-color', 'el color de borde que comparten inputs, tarjetas y tablas'],
  ]) {
    if (!touchesBody || root.has(name)) continue;
    fail(
      'superficie-faltante',
      `Falta ${name}. Un theme que toca --bs-body-* fija también ${why}: sin esta `
      + 'variable el tema hereda el valor por defecto de la librería y el rebrand queda a medias.',
    );
  }
  const border = root.get('--bs-border-color');
  if (border && parseTriplet(border.value)) {
    fail(
      'border-color',
      `--bs-border-color: "${border.value}" es un triplete, pero esta variable no `
      + 'tiene pareja -rgb en la librería: se consume como color. Usa '
      + 'rgb(var(--bs-gray-100-rgb)) o rgb(R, G, B).',
      border.line,
    );
  }

  // R6 — sin :where().
  if (usesWhere) {
    fail(
      'where',
      'El theme usa :where(). Un override de Dynamic va en `:root, [data-bs-theme="dynamic"]`: '
      + ':where() tiene especificidad cero, así que las reglas de la librería le ganan.',
    );
  }

  // R7 — tipografía.
  for (const step of FONT_SIZE_STEPS) {
    const decl = root.get(`--bs-fs-${step}`);
    if (!decl) continue;
    fail(
      'tipografia',
      `--bs-fs-${step}: overridea --bs-rfs-fs-${step} en su lugar. --bs-fs-${step} es sólo el `
      + `alias público (apunta a var(--bs-rfs-fs-${step})); pisarlo desactiva el escalado `
      + 'responsive de RFS.',
      decl.line,
    );
  }
  for (const step of FONT_SIZE_STEPS) {
    if (!root.has(`--bs-rfs-fs-${step}`)) continue;
    if (wide.has(`--bs-rfs-fs-${step}`)) continue;
    if (!/(?<![\w-])[+-]?(?:\d*\.)?\d+(?:e[+-]?\d+)?[sdl]?v(?:w|h|i|b|min|max)\b/i.test(root.get(`--bs-rfs-fs-${step}`).value)) continue;
    fail(
      'tipografia-breakpoint',
      `--bs-rfs-fs-${step} es fluida (depende del viewport) y se declara sólo en el contexto `
      + 'raíz. Sin su valor fijo en `@media (min-width: 1200px)` no tiene tope y sigue '
      + 'creciendo en desktop.',
      root.get(`--bs-rfs-fs-${step}`).line,
    );
  }

  // R7b — familia tipográfica. --bs-body-font-family es un alias de
  // --bs-font-sans-serif en el CSS de Dynamic, y .tooltip y .popover leen la
  // segunda: cambiar sólo el alias deja esos componentes en la fuente anterior.
  const bodyFont = root.get('--bs-body-font-family');
  if (bodyFont && !root.has('--bs-font-sans-serif')) {
    warn(
      'tipografia-familia',
      '--bs-body-font-family se declara sin --bs-font-sans-serif: tooltips y popovers leen '
      + '--bs-font-sans-serif y no siguen al cambio de fuente. Declara la familia en '
      + '--bs-font-sans-serif; --bs-body-font-family ya apunta a ella.',
      bodyFont.line,
    );
  }

  // R8 — monotonía de luminancia de cada rampa tocada.
  const ramps = [
    ...touchedRoles
      .filter((role) => RAMPED_ROLES.includes(role))
      .map((role) => ({ label: `role "${role}"`, name: (s) => `--bs-${role}-${s}-rgb` })),
    ...(touchedGray ? [{ label: 'la rampa de grises', name: (s) => `--bs-gray-${s}-rgb` }] : []),
  ];
  for (const ramp of ramps) {
    // El 500 queda fuera a propósito: apunta al base, que en los roles
    // respaldados por grises no ocupa su posición en la rampa.
    const steps = [];
    for (const step of RAMP_STEPS) {
      const { rgb, reason } = resolve(ramp.name(step), root);
      if (!rgb) {
        warn('rampa-irresoluble', `No se pudo evaluar la luminancia de ${ramp.label}: ${reason}.`);
        steps.length = 0;
        break;
      }
      steps.push({ step, line: root.get(ramp.name(step))?.line ?? null, lum: luminance(rgb) });
    }
    for (let i = 1; i < steps.length; i += 1) {
      const prev = steps[i - 1];
      const curr = steps[i];
      if (curr.lum < prev.lum) continue;
      fail(
        'monotonia',
        `${ramp.label}: el paso ${curr.step} (luminancia ${curr.lum.toFixed(4)}) no es más `
        + `oscuro que el ${prev.step} (${prev.lum.toFixed(4)}). Una rampa de Dynamic va de `
        + 'claro a oscuro sin excepciones — los componentes usan los pasos bajos como fondo '
        + 'y los altos como texto, y al invertirse el orden el par deja de contrastar.',
        curr.line,
      );
    }
  }

  // Un theme puede corregir el par de un botón redefiniendo su color de texto en
  // un bloque propio (`.btn-<role> { --bs-btn-color: … }`). Cuando lo hace, el
  // par horneado ya no es el que se ve y lo mide la regla de botones.
  const overriddenButtons = new Set(
    blocks
      .filter((block) => !block.isRoot && block.decls.has('--bs-btn-color'))
      .flatMap((block) => splitSelectorList(block.prelude))
      .map((part) => part.trim().replace(/^\[data-bs-theme=["']?[\w-]+["']?\]\s*/, ''))
      .map((sel) => sel.match(new RegExp(`^\\.btn-(?:outline-)?(${ROLES.join('|')})$`))?.[1])
      .filter(Boolean),
  );

  // Contextos en los que se mide un componente y también los pares horneados:
  // el bloque raíz y, además, cada zona declarada en el archivo. Un
  // `.btn-primary` escrito una sola vez se ve distinto dentro de
  // `[data-bs-theme="oscura"]` si la zona mueve alguna de las variables de las
  // que depende — y ese caso es justo el que se escapa al leer el CSS de arriba
  // abajo. Varias reglas de la misma zona se funden, y cada variable se
  // resuelve donde se declara, como en el navegador.

  /**
   * Contextos que hay que medir para un bloque. Uno escrito dentro de una zona
   * se mide sólo en ella. Uno global se mide en el raíz y en cada zona, salvo
   * en las que ya tienen un bloque propio para el mismo selector que redefine
   * la variable en cuestión: ahí manda el específico y medir el global sería
   * reportar algo que nunca se ve.
   */
  const contextsFor = (zone, bare, variable) => {
    if (zone) return contexts.filter((ctx) => ctx.zone === zone);
    return contexts.filter((ctx) => {
      if (!ctx.zone) return true;
      const overridden = blocks.some((other) => other.decls.has(variable)
        && alternatives(other).some((alt) => alt.zone === ctx.zone
          && normalizeSelector(alt.bare) === normalizeSelector(bare)));
      return !overridden;
    });
  };

  /** Nombre con el que un lado aparece en el mensaje: la variable y su token. */
  const describe = (variable, resolved) => (
    resolved.token && resolved.token !== variable ? `${variable} (${resolved.token})` : variable
  );

  /**
   * Mide un lado de un par sobre un componente: la variable que lee, resuelta
   * en la capa del elemento y, por debajo, en la zona y el raíz. Si nadie la
   * declara, ni la librería ni el theme, se mide `fallback`. Un fondo
   * (`background`) `transparent` —el de `.list-group`, por ejemplo— no es un
   * color: lo que se ve detrás es la superficie del contexto, y contra eso hay
   * que medir. Un texto `transparent` no se puede medir: no se ve.
   */
  const measureSide = (ctx, element, variable, { fallback = null, background = false } = {}) => {
    const name = element.has(variable) || !fallback ? variable : fallback;
    const resolved = ctx.lookup(name, element);
    if (resolved.transparent) {
      // Un texto transparente no se ve, sea cual sea el fondo.
      if (!background) return { rgb: null, reason: `${name} es transparente: el texto no se ve`, variable: name };
      return { ...ctx.lookup('--bs-body-bg-rgb'), name: '--bs-body-bg-rgb', variable: name };
    }
    return { ...resolved, name: describe(name, resolved), variable: name };
  };

  /**
   * Un color escrito literal en el bloque del theme se acepta y se anota: se
   * mide tal cual, pero queda fuera del theme.
   */
  const noteLiteral = (element, side, label) => {
    const entry = element.get(side.variable);
    if (!entry || entry.source === 'defecto' || side.source !== 'literal') return;
    if (side.token !== side.variable) return;
    note(
      'literal',
      `${label}: "${entry.value}" es un color literal. Se mide tal cual, pero queda `
      + 'fuera del theme: cambiar el token no lo mueve.',
      entry.line,
    );
  };

  // R5 — contraste de las superficies secundarias. `.bg-body-secondary` y
  // `.bg-body-tertiary` pintan estos fondos y dejan encima el texto del cuerpo,
  // así que un theme que los redefine tiene que medirlos contra él: el
  // --bs-body-color-rgb del contexto o, si nadie lo declara, el de Dynamic.
  // Se mide en el raíz y en cada zona, porque una zona puede cambiar el fondo o
  // el texto por separado. Una zona que no declara ninguno de los dos ve el
  // mismo par que el raíz y no se vuelve a medir.
  for (const ctx of contexts) {
    const { lookup } = ctx;
    const bodyColor = lookup('--bs-body-color-rgb');
    for (const [name, utility] of [
      ['--bs-secondary-bg-rgb', '.bg-body-secondary'],
      ['--bs-tertiary-bg-rgb', '.bg-body-tertiary'],
    ]) {
      const decl = ctx.own.get(name) ?? root.get(name);
      if (!decl) continue;
      if (ctx.zone && !ctx.own.has(name) && !ctx.own.has('--bs-body-color-rgb')) continue;
      // Un valor que no es triplete, en el raíz o en la zona, lo rechaza R1.
      // Cualquier otro par que no se pueda resolver se avisa: saltarlo en
      // silencio daría por buena una superficie que nadie midió.
      if (!isTripletOrRgbVar(decl.value)) continue;
      const bg = lookup(name);
      const line = ctx.own.get(name)?.line ?? ctx.own.get('--bs-body-color-rgb')?.line ?? decl.line;
      if (!bodyColor.rgb || !bg.rgb) {
        if (explainedByR1(ctx, null, bodyColor, bg)) continue;
        warn(
          'contraste-irresoluble',
          `No se pudo medir ${name}${inContext(ctx)} contra el texto del cuerpo: `
          + `${bodyColor.reason ?? bg.reason}.`,
          line,
        );
        continue;
      }
      const ratio = contrast(bodyColor.rgb, bg.rgb);
      if (ratio >= minContrast) continue;
      warn(
        'contraste-superficie',
        `${name}${inContext(ctx)}: ${ratio.toFixed(2)}:1 entre --bs-body-color-rgb`
        + (ctx.own.has('--bs-body-color-rgb') || root.has('--bs-body-color-rgb')
          ? '' : ' (el de Dynamic, porque el theme no lo declara)')
        + ` y este fondo, por debajo del ${minContrast}:1 de WCAG 2.x AA. ${utility} pinta esta `
        + 'superficie con el texto del cuerpo encima.',
        line,
      );
    }
  }

  // R9 — zona pegada al selector. `[data-bs-theme="x"].btn-primary` pone la
  // zona en el mismo elemento que el componente, y entonces lo que declara la
  // zona compite en la cascada con lo que se declara sobre él. El validador no
  // modela ese caso: lo mide como si la zona fuera un ancestro
  // (`[data-bs-theme="x"] .btn-primary`) y lo avisa para que se revise.
  for (const block of blocks) {
    for (const alt of alternatives(block)) {
      if (!alt.sameElement) continue;
      warn(
        'zona-pegada',
        `${zoneSelector(alt.zone)}${alt.bare}: el prefijo de zona va pegado al selector, así que `
        + 'la zona está en el mismo elemento que el componente. El validador lo mide como si la '
        + `zona fuera un ancestro (${zoneSelector(alt.zone)} ${alt.bare}); revisa este caso en la preview.`,
        block.line,
      );
    }
  }

  // R10 — botones que el theme redefine por selector. Bootstrap resuelve el
  // color de texto de `.btn-<role>` con color-contrast() en Sass, así que el
  // par real es el que quede después de estos overrides, no el que la librería
  // calculó. En `.btn-outline-<role>` el fondo del role es el del estado
  // relleno (hover/active), que es donde el par puede romperse.
  const BUTTON_SELECTOR = new RegExp(`^\\.btn-(outline-)?(${ROLES.join('|')})$`);
  for (const block of blocks) {
    const fgDecl = block.decls.get('--bs-btn-color');
    const hoverDecl = block.decls.get('--bs-btn-hover-color');
    const bgDecl = block.decls.get('--bs-btn-bg');
    const hoverBgDecl = block.decls.get('--bs-btn-hover-bg');
    if (!fgDecl && !hoverDecl && !bgDecl && !hoverBgDecl) continue;

    for (const { zone: altZone, bare: part } of alternatives(block)) {
      const match = part.trim().match(BUTTON_SELECTOR);
      if (!match) continue;
      const outline = Boolean(match[1]);
      const role = match[2];

      for (const ctx of contextsFor(altZone, part, fgDecl ? '--bs-btn-color' : '--bs-btn-bg')) {
        // Lo que se declara sobre el botón dentro de este contexto: lo que pone
        // la librería en `.btn-<role>` y los bloques del theme, globales y de
        // la zona, para el mismo selector.
        const element = ctx.element(['.btn', part.trim()]);
        const label = `${part.trim()}${inContext(ctx)}`;

        /*
         * Un botón sólido enseña un único par: su texto sobre el fondo del role.
         * Uno con contorno enseña dos, y son distintos: en reposo el fondo es
         * transparente y lo que hay detrás es la superficie del contexto; sólo
         * al rellenarse (hover/active) el texto cae sobre el color del role, y
         * ahí el color que manda es --bs-btn-hover-color. Medir el par de
         * reposo contra el fondo del role daría por roto un botón que se ve
         * perfectamente. Sin declaración, el sólido lee lo que la librería pone
         * en `.btn-<role>`; el de contorno cae a los wrappers del role, que se
         * calculan en el raíz.
         */
        const cases = outline
          ? [
            {
              estado: 'en reposo',
              decl: fgDecl ?? bgDecl,
              fg: measureSide(ctx, element, '--bs-btn-color', { fallback: `--bs-${role}` }),
              bg: measureSide(ctx, element, '--bs-body-bg-rgb', { background: true }),
              themeFg: Boolean(fgDecl),
            },
            {
              // Al rellenarse, el fondo lo pone --bs-btn-hover-bg, que en
              // Bootstrap vale var(--bs-<role>); --bs-btn-bg se queda en
              // transparent y no llega a verse nunca.
              estado: 'relleno (hover/active)',
              decl: hoverDecl ?? fgDecl ?? hoverBgDecl,
              fg: element.has('--bs-btn-hover-color')
                ? measureSide(ctx, element, '--bs-btn-hover-color')
                : measureSide(ctx, element, '--bs-btn-color', { fallback: pick(BUTTON_DEFAULT_FG[role], role) }),
              bg: measureSide(ctx, element, '--bs-btn-hover-bg', { fallback: `--bs-${role}`, background: true }),
              themeFg: Boolean(hoverDecl ?? fgDecl),
            },
          ]
          : [
            {
              estado: null,
              decl: fgDecl ?? bgDecl,
              fg: measureSide(ctx, element, '--bs-btn-color'),
              bg: measureSide(ctx, element, '--bs-btn-bg', { background: true }),
              themeFg: Boolean(fgDecl),
            },
          ];

        for (const caso of cases) {
          const where = caso.estado ? `${label}, ${caso.estado}` : label;
          const { fg, bg } = caso;
          noteLiteral(element, fg, `${where} color de texto`);
          noteLiteral(element, bg, `${where} fondo`);
          if (!fg.rgb || !bg.rgb) {
            if (explainedByR1(ctx, element, fg, bg)) continue;
            warn(
              'contraste-irresoluble',
              `No se pudo medir "${where}": ${fg.reason ?? bg.reason}.`,
              caso.decl?.line ?? null,
            );
            continue;
          }
          const ratio = contrast(fg.rgb, bg.rgb);
          if (ratio >= minContrast) continue;
          fail(
            'contraste-boton',
            `"${where}": ${ratio.toFixed(2)}:1 entre el texto ${fg.name} y el fondo ${bg.name}, `
            + `por debajo del ${minContrast}:1 que pide WCAG 2.x AA para texto normal. `
            + (ctx.zone && !altZone
              ? `El botón se declara una sola vez, pero dentro de la zona "${ctx.zone}" alguna de `
                + 'las variables de las que depende vale otra cosa. Dale a la zona su propio '
                + `bloque \`${zoneSelector(ctx.zone)} ${part.trim()}\`.`
              : (caso.themeFg
                ? 'El theme fija ese color de texto: o se aclara el fondo, o se oscurece el texto.'
                : `El theme no lo fija, así que el botón conserva el que Bootstrap horneó `
                  + `para "${role}".`)),
            caso.decl?.line ?? null,
          );
        }
      }
    }
  }

  /**
   * ¿Lleva el compuesto la clase `.nav-pills` en su primer nivel? No cuentan la
   * que va dentro de un argumento (`:not(.nav-pills)`), la de un atributo ni
   * una clase más larga (`.nav-pills-extra`).
   */
  const hasPillsClass = (compound) => {
    let depth = 0;
    let quote = null;
    let outer = '';
    for (let i = 0; i < compound.length; i += 1) {
      const char = compound[i];
      // Lo escapado y lo que va entre comillas (`[data-label="].nav-pills"]`)
      // no es selector.
      if (char === '\\') i += 1;
      else if (quote) quote = char === quote ? null : quote;
      else if (char === '"' || char === "'") quote = char;
      else if (char === '(' || char === '[') depth += 1;
      else if (char === ')' || char === ']') depth -= 1;
      else if (depth === 0) outer += char;
    }
    return /\.nav-pills(?![\w-])/.test(outer);
  };

  /**
   * Elementos de una pastilla activa para un selector, del contenedor al
   * enlace. Si el selector apunta al propio `.nav-pills` (o a uno cualificado,
   * como `.sidebar .nav-pills`), es el mismo elemento. Si apunta a un
   * descendiente (`.nav-pills .nav-link.active`), el enlace es una capa aparte
   * que hereda del contenedor: lo que declara no cambia lo que `.nav-pills` ya
   * resolvió.
   */
  const pillElements = (selector) => {
    // Compuestos en las posiciones pares y combinadores en las impares, para
    // poder recortar el ancestro sin perder un `>` o un `+`.
    const pieces = splitCompounds(normalizeSelector(selector));
    const compounds = pieces.filter((_, i) => i % 2 === 0);
    const last = compounds.length - 1;
    // Cada `.nav-pills` del selector es un contenedor, del exterior al interior
    // (`.nav-pills.outer .nav-pills`): el interior hereda lo que el exterior
    // ya resolvió. Sólo es ancestro si lo sigue un espacio o `>`; detrás de `+`
    // o `~` es un hermano y no le pasa nada.
    const isAncestor = (i) => i === last || /^\s*>?\s*$/.test(pieces[2 * i + 1]);
    const containers = compounds.flatMap((compound, i) => (hasPillsClass(compound) && isAncestor(i) ? [i] : []));
    if (containers.length === 0) return [[...new Set(['.nav-pills', selector])]];
    const groups = containers.map((i) => [...new Set(['.nav-pills', i === last ? selector : pieces.slice(0, 2 * i + 1).join('')])]);
    if (containers.at(-1) !== last) groups.push([selector]);
    return groups;
  };

  // R11 — pastilla activa de .nav-pills, en cada contexto donde se vea. Sin
  // fondo propio, la pastilla activa usa el de la librería en `.nav-pills`:
  // var(--bs-gray-50).
  for (const block of blocks) {
    const fgDecl = block.decls.get('--bs-nav-pills-link-active-color');
    if (!fgDecl) continue;
    // Cada selector de la lista es una alternativa, con su propio prefijo de
    // zona: se mide por separado, con lo que se declara sobre él y no sobre las
    // otras.
    for (const { zone: altZone, bare: part, sameElement } of alternatives(block)) {
      // `:root` no es una pastilla: lo que declara ahí lo pisa la librería en
      // `.nav-pills`.
      if (isRootPrelude(part)) continue;
      const groups = pillElements(part);
      for (const ctx of contextsFor(altZone, part, '--bs-nav-pills-link-active-color')) {
        const element = ctx.element(...groups);
        const selector = altZone ? `${zoneSelector(altZone)}${sameElement ? '' : ' '}${part}` : part;
        const where = `${selector}${block.zone ? '' : inContext(ctx)}`;
        const fg = measureSide(ctx, element, '--bs-nav-pills-link-active-color');
        const bg = measureSide(ctx, element, '--bs-nav-pills-link-active-bg', { background: true });
        noteLiteral(element, fg, `${where} --bs-nav-pills-link-active-color`);
        noteLiteral(element, bg, `${where} --bs-nav-pills-link-active-bg`);
        if (!fg.rgb || !bg.rgb) {
          if (explainedByR1(ctx, element, fg, bg)) continue;
          warn(
            'contraste-irresoluble',
            `No se pudo medir la pastilla activa de "${where}": ${fg.reason ?? bg.reason}.`,
            fgDecl.line,
          );
          continue;
        }
        const ratio = contrast(fg.rgb, bg.rgb);
        if (ratio >= minContrast) continue;
        fail(
          'contraste-nav-pills',
          `Pastilla activa en "${where}": ${ratio.toFixed(2)}:1 entre ${fg.name} y ${bg.name}, `
          + `por debajo del ${minContrast}:1 de WCAG 2.x AA. La pastilla activa `
          + 'es el único elemento de la barra que lleva fondo sólido: si su par no contrasta, '
          + 'la opción seleccionada es la menos legible de todas.',
          fgDecl.line,
        );
      }
    }
  }

  // R12 — zonas. Una zona reescribe la paleta de su subárbol, así que su par
  // cuerpo/fondo hay que medirlo otra vez dentro de ella. Lo que la zona no
  // declara vale lo que valía en el raíz, ya calculado: un texto del raíz que
  // apunta a un token no cambia porque la zona cambie el token.
  for (const ctx of zoneContexts) {
    const bg = ctx.lookup('--bs-body-bg-rgb');
    const fg = ctx.lookup('--bs-body-color-rgb');
    const where = zoneSelector(ctx.zone);

    if (!fg.rgb || !bg.rgb) {
      if (!explainedByR1(ctx, null, fg, bg)) {
        warn(
          'contraste-irresoluble',
            `No se pudo medir el cuerpo de la zona "${ctx.zone}": ${fg.reason ?? bg.reason}.`,
          ctx.line,
        );
      }
    } else {
      const ratio = contrast(fg.rgb, bg.rgb);
      if (ratio < minContrast) {
        fail(
          'contraste-zona',
          `Zona "${ctx.zone}": ${ratio.toFixed(2)}:1 entre --bs-body-color-rgb y `
          + `--bs-body-bg-rgb, por debajo del ${minContrast}:1 de WCAG 2.x AA. Todo el texto `
          + `de ${where} hereda este par, así que la zona entera queda ilegible, no un componente.`,
          ctx.own.get('--bs-body-color-rgb')?.line ?? ctx.line,
        );
      }
    }

    const linkDecl = ctx.own.get('--bs-link-color-rgb');
    if (!linkDecl || !bg.rgb) continue;
    const link = ctx.lookup('--bs-link-color-rgb');
    if (!link.rgb) {
      if (explainedByR1(ctx, null, link)) continue;
      warn(
        'contraste-irresoluble',
        `No se pudo medir el enlace de la zona "${ctx.zone}": ${link.reason}.`,
        linkDecl.line,
      );
      continue;
    }
    const ratio = contrast(link.rgb, bg.rgb);
    if (ratio >= minContrast) continue;
    const detail = `Zona "${ctx.zone}": el enlace da ${ratio.toFixed(2)}:1 entre `
      + `--bs-link-color-rgb y el fondo de la zona, bajo el ${minContrast}:1 de WCAG 2.x AA.`;
    if (ratio >= 3) {
      warn(
        'contraste-enlace-zona',
        `${detail} Pasa el 3:1 de componente gráfico, así que el enlace se distingue del `
        + 'fondo, pero su texto no llega a AA. Revísalo con diseño antes de darlo por bueno.',
        linkDecl.line,
      );
      continue;
    }
    fail(
      'contraste-enlace-zona',
      `${detail} Ni siquiera llega al 3:1 mínimo para distinguirse del fondo.`,
      linkDecl.line,
    );
  }

  // R13 — pares horneados. Son los que la librería resuelve por su cuenta y el
  // theme no declara: siguen igual después del rebrand, y por eso hay que
  // medirlos explícitamente. Se comprueban en el raíz y dentro de cada zona,
  // porque una zona que mueve la superficie los cambia sin tocar ninguno.
  // Un role que sólo cambia dentro de una zona también arrastra sus pares: la
  // zona mueve `--bs-<role>-rgb` y el texto horneado se queda como estaba. Y un
  // theme que sólo redefine `--bs-<role>-text-bg-color`, en el raíz o en una
  // zona, cambia el texto de `.text-bg-<role>` sin tocar el role: también se
  // mide.
  const textBgRoles = (decls) => ROLES.filter((role) => decls.has(`--bs-${role}-text-bg-color`));
  const pairRoles = [...new Set([
    ...touchedRoles,
    ...textBgRoles(root),
    ...zoneContexts.flatMap((ctx) => [...touched(ctx.own).roles, ...textBgRoles(ctx.own)]),
  ])];
  // `.text-bg-<role>` se mide para todos los roles, toque el theme el role o
  // no: su texto por defecto apunta a otros tokens (`--bs-white`,
  // `--bs-gray-700`, `--bs-black`), y un theme o una zona que sólo cambia uno
  // de ellos lo mueve sin declarar nada del role.
  const isTextBg = (pair) => pair.component === `.text-bg-${pair.role}`;
  const bakedPairs = [
    ...BAKED_PAIRS,
    ...pairRoles.flatMap((role) => bakedRolePairs(role).filter((pair) => !isTextBg(pair))),
    ...ROLES.flatMap((role) => bakedRolePairs(role).filter(isTextBg)),
  ];

  // El mismo par con la paleta por defecto, sin nada del theme: la referencia
  // para saber si un par roto ya venía roto en la librería.
  const [libraryContext] = buildContexts([], new Map());

  for (const pair of bakedPairs) {
    for (const ctx of contexts) {
      // Un botón con override propio no es un par horneado: lo mide R10, que
      // conoce el bloque concreto y el contexto en el que se ve.
      if (pair.onlyWithoutOverride && overriddenButtons.has(pair.role)) continue;

      // La capa del elemento reúne lo que se declara sobre los selectores del
      // componente (`.list-group` para una lista, `.alert-<role>` para una
      // alerta…), en la librería y en el theme, globales o propios de la zona.
      // Sin esto, un theme que arregla el par en un bloque de componente
      // seguiría apareciendo como roto.
      const element = ctx.element(...pair.owners);
      const fg = measureSide(ctx, element, pair.fg.variable);
      const bg = measureSide(ctx, element, pair.bg.variable, { background: true });
      const where = `${pair.component}${inContext(ctx)}`;

      if (!fg.rgb || !bg.rgb) {
        if (explainedByR1(ctx, element, fg, bg)) continue;
        warn(
          'contraste-irresoluble',
          `No se pudo medir "${where}": ${fg.reason ?? bg.reason}.`,
        );
        continue;
      }

      const ratio = contrast(fg.rgb, bg.rgb);
      if (ratio >= minContrast) continue;

      const libraryElement = libraryContext.element(...pair.owners);
      const baseFg = measureSide(libraryContext, libraryElement, pair.fg.variable);
      const baseBg = measureSide(libraryContext, libraryElement, pair.bg.variable, { background: true });
      const baseline = baseFg.rgb && baseBg.rgb ? contrast(baseFg.rgb, baseBg.rgb) : null;
      const fgEntry = element.get(pair.fg.variable);
      const line = (fgEntry?.source === 'defecto' ? null : fgEntry?.line)
        ?? ctx.own.get(pair.fg.variable)?.line
        ?? root.get(pair.fg.variable)?.line
        ?? null;

      // Si el par ya falla con la paleta por defecto y aquí no empeora de forma
      // apreciable, el defecto es de la librería y no del theme. La tolerancia
      // es relativa porque estos pares rotos se mueven unas décimas al cambiar
      // el color y esa diferencia no es información para nadie. Los pares no
      // corregibles se saltan esto: su aviso explica mejor qué hacer.
      if (!pair.noCorregible && baseline !== null && baseline < minContrast
        && ratio >= baseline * 0.9) {
        warn(
          'contraste-preexistente',
          `"${where}": ${ratio.toFixed(2)}:1 entre ${fg.name} y ${bg.name}, bajo el `
          + `${minContrast}:1 de WCAG 2.x AA — pero el tema por defecto de Dynamic ya da `
          + `${baseline.toFixed(2)}:1 en este mismo par, así que el defecto es de la librería `
          + 'y no de tu theme.',
          line,
        );
        continue;
      }

      /*
       * Un par que ninguna declaración del theme puede cambiar no es un error:
       * sería pedir un arreglo que no existe. Se avisa, se dice por qué, y la
       * salida del proceso no se tiñe por él.
       */
      if (pair.noCorregible) {
        warn(
          'contraste-horneado',
          `"${where}": ${ratio.toFixed(2)}:1 entre ${fg.name} y ${bg.name}, por debajo del `
          + `${minContrast}:1 que pide WCAG 2.x AA para texto normal`
          + (baseline !== null ? ` (con la paleta por defecto este par da ${baseline.toFixed(2)}:1)` : '')
          + `. Aquí ${pair.why}`
          + ': **no corregible desde el theme; evitar la clase** con este role, o cambiar el '
          + 'color del role hasta que el par contraste.',
          line,
        );
        continue;
      }

      const arreglo = `Declara ${pair.fg.variable}${ctx.zone ? ` dentro de la zona "${ctx.zone}"` : ''} `
        + 'para que el componente deje de heredar el valor de la librería.';

      fail(
        'contraste-horneado',
        `"${where}": ${ratio.toFixed(2)}:1 entre ${fg.name} y ${bg.name}, por debajo del `
        + `${minContrast}:1 que pide WCAG 2.x AA para texto normal`
        + (baseline !== null ? ` (con la paleta por defecto este par da ${baseline.toFixed(2)}:1)` : '')
        + `. Aquí ${pair.why}: es un par que la librería resuelve por su cuenta y que el `
        + `rebrand no toca. ${arreglo}`,
        line,
      );
    }
  }

  return { errors, warnings, notes };
}

// -- CLI --------------------------------------------------------------------

function main(argv) {
  const args = argv.slice(2);
  const positional = [];
  let minContrast = AA_NORMAL_TEXT;
  let strict = false;
  for (let i = 0; i < args.length; i += 1) {
    if (args[i] === '--min-contrast') {
      minContrast = Number(args[i + 1]);
      i += 1;
    } else if (args[i] === '--strict') {
      strict = true;
    } else if (args[i] === '-h' || args[i] === '--help') {
      process.stdout.write('uso: theme-validate.mjs <theme.css> [--min-contrast 4.5] [--strict]\n');
      return 0;
    } else {
      positional.push(args[i]);
    }
  }
  if (positional.length !== 1 || !Number.isFinite(minContrast)) {
    process.stderr.write('uso: theme-validate.mjs <theme.css> [--min-contrast 4.5] [--strict]\n');
    return 2;
  }

  const file = path.resolve(positional[0]);
  let css;
  try {
    css = fs.readFileSync(file, 'utf8');
  } catch (error) {
    process.stderr.write(`No se pudo leer ${file}: ${error.message}\n`);
    return 2;
  }

  const { errors, warnings, notes } = validate(css, { minContrast });
  const rel = path.relative(process.cwd(), file);
  const render = (entry, kind) => {
    const where = entry.line ? `${rel}:${entry.line}` : rel;
    return `${kind} ${where}  [${entry.rule}]\n  ${entry.message}\n`;
  };

  // Las notas van a stdout: no son hallazgos, y mezclarlas con los avisos haría
  // que un CSS correcto pareciera tener algo que arreglar.
  for (const entry of notes) process.stdout.write(render(entry, 'nota  '));
  for (const warning of warnings) process.stderr.write(render(warning, 'aviso '));
  for (const error of errors) process.stderr.write(render(error, 'error '));

  if (errors.length > 0) {
    process.stderr.write(`\n${errors.length} error(es), ${warnings.length} aviso(s) en ${rel}.\n`);
    return 1;
  }
  if (strict && warnings.length > 0) {
    process.stderr.write(`\n0 errores, ${warnings.length} aviso(s) en ${rel} (--strict).\n`);
    return 1;
  }
  process.stdout.write(`${rel}: sin errores (${warnings.length} aviso(s)).\n`);
  return 0;
}

// realpath: instalado como `bin` del paquete, argv[1] es el enlace simbólico de node_modules/.bin.
if (process.argv[1] && import.meta.url === pathToFileURL(fs.realpathSync(process.argv[1])).href) {
  process.exit(main(process.argv));
}

export { main };
