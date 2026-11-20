#!/usr/bin/env node
//
// theme-validate — valida un theme.css de Dynamic UI contra las reglas
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
  FONT_SIZE_STEPS,
  GRAY_STEPS,
  RAMPED_ROLES,
  RAMP_STEPS,
  ROLES,
  bakedRolePairs,
  buildContexts,
  cascadeSet,
  contrast,
  inheritsParent,
  isRootPrelude,
  LIBRARY_ELEMENT_VARS,
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
  if (inheritsParent(raw)) return true;
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
  // reglas fundidas y cada componente dentro de una zona, alternativa por
  // alternativa del selector. El componente necesita el wrapper sobre sí
  // mismo: cuenta el de cualquier regla con su selector, dentro de la zona o
  // global, pero no el que hereda de la zona, que se calcula con el triplete
  // de la zona. Un triplete con formato inválido
  // en la zona ya lo rechaza R1, y uno que vuelve al valor del padre
  // (`inherit`, `unset`…) no cambia nada que el wrapper tenga que seguir.
  const checkWrappers = (decls, where, { skipInvalid, declared = decls }) => {
    for (const [name, { value, line }] of decls) {
      if (!name.endsWith('-rgb')) continue;
      const wrapper = name.slice(0, -'-rgb'.length);
      const expected = libraryWrapper(wrapper);
      if (!expected || declared.has(wrapper)) continue;
      if (inheritsParent(value)) continue;
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
  const zoneComponents = new Map();
  const globalNames = new Map();
  // Un bloque raíz con más alternativas (`:root, .card`) también declara sobre
  // el componente: se recorre alternativa por alternativa, como los demás.
  for (const block of blocks) {
    if (block.zone) continue;
    for (const alt of alternatives(block)) {
      const bare = normalizeSelector(alt.bare);
      if (!alt.zone) {
        const names = globalNames.get(bare) ?? new Set();
        for (const name of block.decls.keys()) names.add(name);
        globalNames.set(bare, names);
        continue;
      }
      const key = `${alt.zone} ${bare}`;
      const rule = zoneComponents.get(key) ?? {
        label: `${zoneSelector(alt.zone)}${alt.sameElement ? '' : ' '}${alt.bare}`,
        bare,
        decls: new Map(),
      };
      for (const [name, entry] of block.decls) cascadeSet(rule.decls, name, entry);
      zoneComponents.set(key, rule);
    }
  }
  for (const { label, bare, decls } of zoneComponents.values()) {
    const declared = new Set([...decls.keys(), ...(globalNames.get(bare) ?? [])]);
    checkWrappers(decls, ` en "${label}"`, { skipInvalid: false, declared });
  }

  // R2 — no declarar el wrapper de color.
  for (const [name, { value, line }] of root) {
    if (!wrapperName(name)) continue;
    fail(
      'wrapper',
      `${name}: no overridees el wrapper de color. La librería lo define como `
      + `rgb(var(${name}-rgb)) en _root.scss, así que un rebrand se hace sobre `
      + `${name}-rgb con un triplete "R, G, B". Escribir "${value}" aquí gana sobre `
      + 'la indirección y las variantes con opacidad (RGBA) dejan de seguir el color.',
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

  // Las variables genéricas cuya presencia en un bloque de botón dispara R10.
  // R13 las consulta para no medir dos veces el mismo botón con contorno.
  const R10_BUTTON_VARS = [
    '--bs-btn-color', '--bs-btn-bg',
    '--bs-btn-hover-color', '--bs-btn-hover-bg',
    '--bs-btn-active-color', '--bs-btn-active-bg',
  ];

  // R10 — botones que el theme redefine por selector. Bootstrap resuelve el
  // color de texto de `.btn-<role>` con color-contrast() en Sass, así que el
  // par real es el que quede después de estos overrides, no el que la librería
  // calculó. `.btn-outline-<role>` se mide en reposo, en hover y en active, cada
  // uno con su texto y sobre el fondo que de verdad se pinta.
  const BUTTON_SELECTOR = new RegExp(`^\\.btn-(outline-)?(${ROLES.join('|')})$`);
  for (const block of blocks) {
    const fgDecl = block.decls.get('--bs-btn-color');
    const hoverDecl = block.decls.get('--bs-btn-hover-color');
    const bgDecl = block.decls.get('--bs-btn-bg');
    const hoverBgDecl = block.decls.get('--bs-btn-hover-bg');
    const activeDecl = block.decls.get('--bs-btn-active-color');
    const activeBgDecl = block.decls.get('--bs-btn-active-bg');
    if (!fgDecl && !hoverDecl && !bgDecl && !hoverBgDecl && !activeDecl && !activeBgDecl) continue;

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
         * Uno con contorno enseña tres, uno por estado. El relleno de hover y
         * de active sale de `--bs-btn-outline-<role>-{hover,active}-bg`, que la
         * librería cablea en `.btn-outline-<role>` y deja transparentes: si
         * nadie los declara, lo que se ve detrás es la superficie del contexto
         * y contra eso mide measureSide. Un theme que los declare, en el raíz,
         * en la zona o sobre el botón, pinta ese relleno y se mide contra él.
         * El texto de cada estado es el que declara la librería en el botón
         * (`--bs-btn-outline-<role>-hover-color`…), salvo que el theme lo pise.
         */
        const surface = () => measureSide(ctx, element, '--bs-body-bg-rgb', { background: true });
        // El relleno sale del token que cablea la librería en el botón, o de lo
        // que declare un ancestro: la zona o el raíz, que llega a la zona ya
        // calculado. Si vale `transparent`, measureSide cae a la superficie.
        const fill = (variable) => (element.has(variable) || ctx.own.has(variable) || root.has(variable)
          ? measureSide(ctx, element, variable, { background: true })
          : surface());
        // ¿El texto que gana sobre el botón lo pone el theme, en este bloque o
        // en otro con el mismo selector, o es el de la librería?
        const fromTheme = (variable) => element.has(variable)
          && element.get(variable).source !== 'defecto';
        const cases = outline
          ? [
            {
              estado: 'en reposo',
              decl: fgDecl ?? bgDecl,
              fg: measureSide(ctx, element, '--bs-btn-color'),
              bg: surface(),
              themeFg: fromTheme('--bs-btn-color'),
            },
            {
              estado: 'en hover',
              decl: hoverDecl ?? hoverBgDecl ?? fgDecl,
              fg: measureSide(ctx, element, '--bs-btn-hover-color'),
              bg: fill('--bs-btn-hover-bg'),
              themeFg: fromTheme('--bs-btn-hover-color'),
            },
            {
              estado: 'en active',
              decl: activeDecl ?? activeBgDecl ?? fgDecl,
              fg: measureSide(ctx, element, '--bs-btn-active-color'),
              bg: fill('--bs-btn-active-bg'),
              themeFg: fromTheme('--bs-btn-active-color'),
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

  // -- R11: cómo se lee un selector de pastilla -------------------------------

  /** Dónde cierra el `[` o el `(` que abre en `start`. */
  const closing = (text, start) => {
    let depth = 0;
    let quote = null;
    for (let i = start; i < text.length; i += 1) {
      const char = text[i];
      if (char === '\\') i += 1;
      else if (quote) quote = char === quote ? null : quote;
      else if (char === '"' || char === "'") quote = char;
      else if (char === '[' || char === '(') depth += 1;
      else if (char === ']' || char === ')') {
        depth -= 1;
        if (depth === 0) return i;
      }
    }
    return text.length - 1;
  };

  /** Los estados que un selector puede pedir; las demás pseudoclases no lo son. */
  const STATE_PSEUDOS = ['hover', 'focus', 'focus-visible', 'focus-within', 'active', 'visited', 'disabled', 'target'];
  /** Pseudoelementos: no son el elemento, sino algo que se pinta aparte. */
  const PSEUDO_ELEMENTS = ['before', 'after', 'first-line', 'first-letter', 'selection', 'marker', 'placeholder', 'backdrop', 'file-selector-button'];

  /**
   * Las partes de primer nivel de un compuesto: sus clases, sus atributos, los
   * estados que pide, los argumentos de sus `:not()`, los pseudoelementos y las
   * demás pseudoclases (`:first-child`, `:has(…)`), que no se modelan pero
   * tampoco valen siempre. `identity` es el compuesto sin nada de eso último:
   * lo que queda es el elemento, no cuándo se le aplica la regla.
   *
   * Lo que va dentro de un argumento o de un atributo no selecciona por sí
   * mismo, y lo escapado no es selector: por eso se recorre a mano y no con una
   * expresión regular.
   */
  const parseCompound = (compound) => {
    const parts = {
      classes: [], ids: [], attributes: [], states: [], negations: [], elements: [], pseudos: [], identity: '',
    };
    for (let i = 0; i < compound.length; i += 1) {
      const char = compound[i];
      if (char === '\\') {
        parts.identity += compound.slice(i, i + 2);
        i += 1;
        continue;
      }
      if (char === '[') {
        const end = closing(compound, i);
        parts.attributes.push(compound.slice(i, end + 1));
        parts.identity += compound.slice(i, end + 1);
        i = end;
        continue;
      }
      if (char === '#') {
        const name = /^[\w-]+/.exec(compound.slice(i + 1))?.[0];
        if (name) {
          parts.ids.push(name);
          parts.identity += compound.slice(i, i + name.length + 1);
          i += name.length;
          continue;
        }
      }
      if (char !== '.' && char !== ':') {
        parts.identity += char;
        continue;
      }
      const doubled = char === ':' && compound[i + 1] === ':';
      const start = i + (doubled ? 2 : 1);
      const name = /^[\w-]+/.exec(compound.slice(start))?.[0];
      if (!name) {
        parts.identity += char;
        continue;
      }
      let end = start + name.length - 1;
      let argument = null;
      if (compound[end + 1] === '(') {
        const close = closing(compound, end + 1);
        argument = compound.slice(end + 2, close);
        end = close;
      }
      const text = compound.slice(i, end + 1);
      if (char === '.') {
        parts.classes.push(name);
        parts.identity += text;
      } else if (doubled || PSEUDO_ELEMENTS.includes(name)) {
        parts.elements.push(name);
        parts.identity += text;
      } else if (name === 'not') parts.negations.push(argument ?? '');
      else if (STATE_PSEUDOS.includes(name)) parts.states.push(name);
      else parts.pseudos.push(text);
      i = end;
    }
    return parts;
  };

  /**
   * ¿Lleva el compuesto la clase `.nav-pills` en su primer nivel? No cuentan la
   * que va dentro de un argumento (`:not(.nav-pills)`), la de un atributo ni
   * una clase más larga (`.nav-pills-extra`).
   */
  const hasPillsClass = (compound) => parseCompound(compound).classes.includes('nav-pills');

  /**
   * Las clases que el elemento lleva siempre, así que nombrarlas no es pedir
   * nada: la pastilla es `.nav-link.active` dentro de `.nav-pills`. En el ítem,
   * en cambio, `.active` sí es una condición: lo normal es que no la lleve.
   */
  const GUARANTEED = { contenedor: ['nav-pills'], 'ítem': ['nav-item'], enlace: ['nav-link', 'active'] };

  /**
   * Las condiciones que un compuesto pone sobre su elemento: estado, clases y
   * atributos de más, un id, y las pseudoclases que no se modelan. Las clases
   * que el elemento lleva siempre no cuentan. `identity` dice si las clases y
   * el id describen al elemento —un contenedor es otra barra, no otra
   * situación— o son condiciones suyas.
   */
  const atomsOf = (parts, role, { identity = false } = {}) => [
    ...parts.states.map((name) => ({ role, kind: 'estado', text: name })),
    ...(identity ? [] : parts.classes.filter((name) => !(GUARANTEED[role] ?? []).includes(name))
      .map((name) => ({ role, kind: 'clase', text: `.${name}` }))),
    ...(identity ? [] : parts.ids.map((name) => ({ role, kind: 'id', text: `#${name}` }))),
    ...(identity ? [] : parts.attributes.map((text) => ({ role, kind: 'atributo', text }))),
    ...parts.pseudos.map((text) => ({ role, kind: 'pseudo', text })),
  ];

  /**
   * Lo que un `:not()` deja como condición, con el mismo vocabulario que una
   * condición positiva: así `:not(:hover)` y `:hover` hablan de lo mismo y sus
   * situaciones encajan. `:not(a, b)` son dos condiciones, una por alternativa,
   * y un argumento compuesto (`:not(.foo.bar)`) es una sola que sólo se
   * incumple cuando se dan todas sus partes a la vez. Si de una alternativa no
   * queda nada —niega lo que el elemento lleva siempre—, la regla no casa nunca
   * con ese elemento y se descarta entera (null).
   */
  const negationsOf = (parts, role, options) => {
    const atoms = [];
    for (const argument of parts.negations) {
      for (const piece of splitSelectorList(argument)) {
        const inner = atomsOf(parseCompound(piece), role, options);
        if (inner.length === 0) return null;
        atoms.push(inner.length === 1
          ? { ...inner[0], negated: true }
          : {
            role, kind: 'negación', text: piece, atoms: inner, negated: true,
          });
      }
    }
    return atoms;
  };

  /**
   * Las condiciones de un compuesto de contenedor, con el elemento del que
   * salen: `.sidebar:hover .nav-pills` y `.sidebar .nav-pills:hover` no son la
   * misma situación. Sus clases, su id y sus atributos no son condiciones:
   * dicen qué barra es.
   */
  const containerAtoms = (parts, identity) => {
    const role = `contenedor(${identity})`;
    const negated = negationsOf(parts, role, { identity: false });
    return negated === null ? null : [...atomsOf(parts, role, { identity: true }), ...negated];
  };

  /**
   * Un selector, partido: sus compuestos, los combinadores de en medio, qué
   * posiciones son contenedores `.nav-pills` y los elementos que forman, del
   * exterior al interior. La identidad de un contenedor es su selector sin lo
   * que sólo dice cuándo se aplica (`:hover`, `:first-child`, `:not(…)`): eso
   * no hace de él otra barra, es una situación de la misma.
   */
  const pillParts = (selector) => {
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
    const identity = (i) => pieces.slice(0, 2 * i + 1)
      .map((piece, k) => (k % 2 === 0 ? parseCompound(piece).identity : piece)).join('');
    const conditions = (i) => {
      const atoms = compounds.slice(0, i + 1)
        .map((compound, k) => containerAtoms(parseCompound(compound), identity(k)));
      return atoms.some((group) => group === null) ? null : atoms.flat();
    };
    const groups = containers.length === 0
      ? [[...new Set(['.nav-pills', selector])]]
      : containers.map((i) => [...new Set(['.nav-pills', identity(i)])]);
    if (containers.length > 0 && containers.at(-1) !== last) groups.push([selector]);
    return {
      pieces, compounds, containers, groups, conditions,
    };
  };

  const pillElements = (selector) => pillParts(selector).groups;

  /**
   * ¿Apunta el compuesto al enlace o al ítem que lo envuelve? `.nav-item.active`
   * sigue siendo el ítem: el `.active` no lo convierte en el enlace.
   */
  const roleOf = (compound) => {
    const { classes } = parseCompound(compound);
    if (classes.includes('nav-link')) return 'enlace';
    return classes.includes('nav-item') ? 'ítem' : 'enlace';
  };

  /**
   * Entre el contenedor y la pastilla sólo están el ítem y el propio enlace
   * (`.nav-pills > .nav-item > .nav-link.active`), y las custom properties
   * bajan por esa cadena. Un compuesto que nombre uno de los dos alcanza a la
   * pastilla, lleve además las clases, atributos o estados que lleve: eso son
   * condiciones, no motivo para descartarlo. No la alcanza el que apunte a otro
   * descendiente (`.nav-pills .dropdown-menu`, `.nav-pills .nav-link .badge`).
   */
  const identifiesPill = (compound) => {
    const { classes } = parseCompound(compound);
    return classes.includes('nav-link') || classes.includes('nav-item')
      || (classes.length === 1 && classes[0] === 'active');
  };

  /**
   * Las condiciones del camino que va del contenedor a la pastilla, leído
   * entero y no sólo en el último compuesto: en
   * `.nav-pills .nav-item:hover .nav-link.active` el `:hover` es del ítem, pero
   * la regla sigue valiendo sólo con el puntero encima. Devuelve null si el
   * camino no llega a la pastilla: otro descendiente, un pseudoelemento
   * (`.nav-link.active::before` es otra caja) o un `:not()` que la excluye.
   */
  const pathAtoms = (path, combinators) => {
    if (!identifiesPill(path.at(-1))) return null;
    const atoms = [];
    for (const compound of path) {
      const parts = parseCompound(compound);
      if (parts.elements.length > 0) return null;
      const role = roleOf(compound);
      const negated = negationsOf(parts, role);
      if (negated === null) return null;
      atoms.push(...atomsOf(parts, role), ...negated);
    }
    // La barra se escribe con ítems o sin ellos, y son dos árboles distintos:
    // lo que declara `.nav-item` no le llega a un enlace que cuelga del
    // contenedor, y al revés. Quien nombra el ítem pide que lo haya; quien
    // apunta al enlace como hijo directo, que no; un descendiente a secas vale
    // en los dos.
    const item = path.some((compound) => roleOf(compound) === 'ítem');
    const structure = { role: 'enlace', kind: 'estructura', text: 'ítem' };
    if (item) atoms.push(structure);
    else if (path.length === 1 && /^\s*>\s*$/.test(combinators[0] ?? '')) {
      atoms.push({ ...structure, negated: true });
    }
    // Un combinador de hermano (`+`, `~`) ata la pastilla a un sitio concreto
    // de la barra: no se modela, pero tampoco vale en todas.
    if (combinators.some((piece) => /[+~]/.test(piece))) {
      atoms.push({ role: 'enlace', kind: 'estructura', text: path.join(' … ') });
    }
    return atoms;
  };

  const PILL_VARS = ['--bs-nav-pills-link-active-color', '--bs-nav-pills-link-active-bg'];

  /**
   * Los nombres de los que depende el par de la pastilla: las dos variables y,
   * detrás de ellas, todo lo que sus valores referencian, en el theme o en la
   * librería. Una regla que declare cualquiera de ellos mueve el par aunque no
   * toque las dos variables: un `--bs-white-rgb: 0, 0, 0` dentro de un `:hover`
   * cambia lo que la pastilla pinta.
   */
  const pairTokens = new Set(PILL_VARS);
  const frontier = [...PILL_VARS];
  while (frontier.length > 0) {
    const name = frontier.pop();
    const values = [libraryWrapper(name), LIBRARY_ELEMENT_VARS.get('.nav-pills')?.get(name)];
    for (const block of blocks) {
      if (block.decls.has(name)) values.push(block.decls.get(name).value);
    }
    for (const value of values) {
      for (const ref of varRefs(value ?? '')) {
        if (pairTokens.has(ref)) continue;
        pairTokens.add(ref);
        frontier.push(ref);
      }
    }
  }

  /** La primera declaración del bloque que puede mover el par, si la hay. */
  const pairDecl = (block) => PILL_VARS.map((name) => block.decls.get(name)).find(Boolean)
    ?? [...block.decls].filter(([name]) => pairTokens.has(name)).map(([, entry]) => entry)[0];

  /**
   * La regla de pastilla que es un selector: sobre qué elemento declara
   * (contenedor, ítem o enlace), de qué contenedor habla, qué exige para
   * aplicarse y si puede mover el par. Devuelve null si el selector apunta a un
   * descendiente que no pinta ninguna pastilla.
   */
  const pillRule = (bare, block, zone = null) => {
    const {
      pieces, compounds, containers, groups, conditions,
    } = pillParts(bare);
    const last = compounds.length - 1;
    const inside = containers.length > 0 && containers.at(-1) !== last;
    const own = containers.length === 0 ? [] : conditions(containers.at(-1));
    // Un `:not()` del contenedor que lo excluye del todo: la regla no pinta
    // ninguna pastilla.
    if (own === null) return null;
    const common = {
      selector: bare,
      zone,
      withinPills: containers.length > 0,
      identity: groups.at(inside ? -2 : -1),
      containerGroups: inside ? groups.slice(0, -1) : groups,
      movesPair: Boolean(pairDecl(block)),
      line: pairDecl(block)?.line ?? block.line,
    };
    if (!inside) return { ...common, element: 'contenedor', requirements: own };
    const index = containers.at(-1);
    const path = compounds.slice(index + 1);
    const atoms = pathAtoms(path, pieces.slice(2 * index + 1).filter((_, i) => i % 2 === 0));
    if (!atoms) return null;
    return { ...common, element: roleOf(path.at(-1)), requirements: [...own, ...atoms] };
  };

  const pillRules = [];
  for (const block of blocks) {
    for (const { zone, bare } of alternatives(block)) {
      if (isRootPrelude(bare)) continue;
      // Los bloques de zona entran por su selector sin prefijo, pero con su
      // zona: fuera de ella no declaran nada y sus condiciones no son de esta
      // pastilla.
      const rule = pillRule(bare, block, zone);
      if (rule) pillRules.push(rule);
    }
  }

  // -- R11: qué reglas se miden juntas ----------------------------------------

  const atomKey = (atom) => `${atom.role}|${atom.kind}|${atom.text}`;
  const setKey = (requirements) => requirements.map(atomKey).sort().join(' ');
  const includesAtom = (requirements, atom) => requirements.some((other) => atomKey(other) === atomKey(atom));

  /** Un atributo, leído: su nombre, su operador y su valor. */
  const parseAttribute = (text) => {
    const match = /^\[\s*([\w-]+)\s*(?:([~^|$*]?=)\s*(?:"([^"]*)"|'([^']*)'|([^\]\s]*)))?/.exec(text);
    if (!match) return null;
    return { name: match[1], operator: match[2] ?? null, value: match[3] ?? match[4] ?? match[5] ?? null };
  };

  /** ¿Cumple un valor exacto la condición del otro atributo? */
  const satisfies = (value, { operator, value: wanted }) => {
    if (wanted === null) return true;
    if (operator === '=') return value === wanted;
    if (operator === '~=') return value.split(/\s+/).includes(wanted);
    if (operator === '|=') return value === wanted || value.startsWith(`${wanted}-`);
    if (operator === '^=') return value.startsWith(wanted);
    if (operator === '$=') return value.endsWith(wanted);
    if (operator === '*=') return value.includes(wanted);
    return true;
  };

  /**
   * ¿Está el elemento de `role` dentro del de `other`, o es el mismo? El enlace
   * cuelga del ítem y los dos del contenedor; entre contenedores manda el
   * camino, que uno es prefijo del otro.
   */
  const within = (role, other) => {
    if (role === other) return true;
    if (other === 'enlace') return false;
    if (other === 'ítem') return role === 'enlace';
    if (!other.startsWith('contenedor(')) return false;
    if (!role.startsWith('contenedor(')) return true;
    return role.slice('contenedor('.length).startsWith(other.slice('contenedor('.length, -1));
  };

  /**
   * Estados que arrastran a otros: el puntero sobre el enlace lo está también
   * sobre el ítem y sobre la barra; `:focus-visible` es un `:focus`, y un
   * `:focus` deja `:focus-within` en todo lo que hay por encima.
   */
  const impliedState = (a, b) => {
    if (a.kind !== 'estado' || b.kind !== 'estado') return false;
    const above = within(a.role, b.role);
    if (a.text === b.text) return above && (a.text === 'hover' || a.text === 'focus-within');
    if (a.text === 'focus-visible' && b.text === 'focus') return a.role === b.role;
    if ((a.text === 'focus' || a.text === 'focus-visible') && b.text === 'focus-within') return above;
    return false;
  };

  /**
   * ¿Arrastra una condición a la otra? Un enlace con `[data-label="a"]` lleva
   * también `[data-label]`, así que una situación con la primera tiene que
   * traer la segunda: si no, se mediría una pastilla que no existe.
   */
  const implies = (a, b) => {
    if (atomKey(a) === atomKey(b)) return true;
    if (impliedState(a, b)) return true;
    if (a.role !== b.role || a.kind !== 'atributo' || b.kind !== 'atributo') return false;
    const one = parseAttribute(a.text);
    const other = parseAttribute(b.text);
    if (!one || !other || one.name !== other.name) return false;
    if (!other.operator) return true;
    return one.operator === '=' ? satisfies(one.value, other) : false;
  };

  /**
   * ¿Se excluyen dos condiciones? Un elemento puede estar en `:hover` y en
   * `:focus` a la vez y llevar dos clases; y `[data-flags~="a"]` y
   * `[data-flags~="b"]` los cumple `data-flags="a b"`. Lo que no puede es tener
   * el mismo atributo con dos valores exactos distintos, ni uno exacto que no
   * cumpla lo que el otro pide.
   */
  const conflict = (a, b) => {
    if (a.role !== b.role) return false;
    // Un elemento tiene un id, no dos.
    if (a.kind === 'id' && b.kind === 'id') return a.text !== b.text;
    if (a.kind !== 'atributo' || b.kind !== 'atributo') return false;
    const one = parseAttribute(a.text);
    const other = parseAttribute(b.text);
    if (!one || !other || one.name !== other.name) return false;
    if (!one.operator || !other.operator) return false;
    if (one.operator === '=') return !satisfies(one.value, other);
    if (other.operator === '=') return !satisfies(other.value, one);
    if (one.operator !== other.operator) return false;
    if (one.operator === '^=') return !(one.value.startsWith(other.value) || other.value.startsWith(one.value));
    if (one.operator === '$=') return !(one.value.endsWith(other.value) || other.value.endsWith(one.value));
    return false;
  };

  /**
   * ¿Se cumple una condición en esta situación? Una compuesta
   * (`:not(.foo.bar)`) sólo se cumple cuando se dan todas sus partes: negarla
   * no es negar cada una por su cuenta.
   */
  const satisfied = (atom, requirements) => (atom.atoms
    ? atom.atoms.every((inner) => includesAtom(requirements, inner))
    : includesAtom(requirements, atom));

  /** ¿Se aplica la regla cuando se dan justo estas condiciones y ninguna más? */
  const appliesWith = (rule, requirements) => rule.requirements
    .every((atom) => satisfied(atom, requirements) !== Boolean(atom.negated));

  /** ¿Alcanza la regla a esta barra? Comparando identidades, no situaciones. */
  const reaches = (rule, identity) => {
    const matches = new Set(identity.map(normalizeSelector));
    return rule.identity.every((selector) => matches.has(normalizeSelector(selector)));
  };

  /**
   * Las situaciones en las que hay que medir una pastilla: en reposo, sin
   * ninguna condición, y además cada combinación de las que piden —o niegan—
   * las reglas que pueden mover el par, siempre que puedan darse a la vez. Cada
   * una se cierra con lo que arrastra, para no medir pastillas imposibles. Se
   * recorren de menos condiciones a más, así que si hay que cortar por el tope
   * se cortan las combinaciones grandes y nunca las sueltas.
   */
  const REQUIREMENT_LIMIT = 64;
  const situations = (rules) => {
    const pool = [];
    for (const rule of rules) {
      if (!rule.movesPair) continue;
      for (const atom of rule.requirements) {
        // De una condición compuesta entran sus partes: la situación que la
        // incumple es justo la que las da todas.
        for (const part of atom.atoms ?? [atom]) {
          const positive = { role: part.role, kind: part.kind, text: part.text };
          if (!includesAtom(pool, positive)) pool.push(positive);
        }
      }
    }
    const close = (set) => {
      const result = [...set];
      for (const atom of pool) {
        if (includesAtom(result, atom)) continue;
        if (result.some((other) => implies(other, atom))) result.push(atom);
      }
      return result;
    };
    const sets = [[]];
    const seen = new Set(['']);
    let level = [[]];
    let truncated = false;
    while (level.length > 0 && !truncated) {
      const next = [];
      for (const base of level) {
        for (const atom of pool) {
          if (includesAtom(base, atom)) continue;
          const union = close([...base, atom]);
          if (union.some((one) => union.some((other) => conflict(one, other)))) continue;
          if (seen.has(setKey(union))) continue;
          if (sets.length >= REQUIREMENT_LIMIT) {
            truncated = true;
            break;
          }
          seen.add(setKey(union));
          sets.push(union);
          next.push(union);
        }
        if (truncated) break;
      }
      level = next;
    }
    return { sets, truncated };
  };

  /** Quién reporta una pastilla entre los bloques que hablan de ella. */
  const PAINTS = { enlace: 2, 'ítem': 1, contenedor: 0 };
  const rankOf = (own, requirements, ownKey) => {
    if (ownKey === setKey(requirements)) return 10 + PAINTS[own.element];
    return appliesWith(own, requirements) ? 5 + PAINTS[own.element] : -1;
  };

  /** Cómo se nombra una situación en el mensaje. */
  const describeSituation = (requirements) => {
    const states = [...new Set(requirements.filter((atom) => atom.kind === 'estado').map((atom) => atom.text))];
    const extras = [...new Set(requirements.filter((atom) => atom.kind !== 'estado').map((atom) => atom.text))];
    return (states.length > 0 ? `, en ${states.join(' y ')}` : '')
      + (extras.length > 0 ? `, con ${extras.join(' y ')}` : '');
  };

  /**
   * Las mediciones que pide una regla: una por situación de la pastilla de su
   * barra. Cada una lleva los elementos que hay que medir —el contenedor, el
   * ítem y el enlace, cada uno con sus reglas—, porque lo que declara el ítem
   * lo hereda el enlace y no compite con lo que el enlace declara sobre sí
   * mismo. Una regla que no se aplique en la situación queda fuera de la capa:
   * en reposo no entra lo que pide `:hover`.
   */
  const pillMeasurements = (own, zone) => {
    // Una regla de otra zona no declara nada aquí: ni entra en la capa ni sus
    // condiciones son situaciones de esta pastilla.
    const rules = pillRules.filter((rule) => (!rule.zone || rule.zone === zone)
      && reaches(rule, own.identity));
    const key = JSON.stringify([...new Set(own.identity.map(normalizeSelector))].sort());
    const ownKey = setKey(own.requirements.filter((atom) => !atom.negated));
    const { sets, truncated } = situations(rules);
    return sets.map((requirements) => {
      const selectorsFor = (element) => rules
        .filter((rule) => rule.element === element && appliesWith(rule, requirements))
        .map((rule) => rule.selector);
      const container = [...new Set([...own.containerGroups.at(-1), ...selectorsFor('contenedor')])];
      const items = [...new Set(selectorsFor('ítem'))];
      const links = [...new Set(selectorsFor('enlace'))];
      return {
        key: `${key}|${setKey(requirements)}`,
        container: key,
        depth: requirements.length,
        truncated,
        groups: [
          ...own.containerGroups.slice(0, -1),
          container,
          ...(items.length > 0 ? [items] : []),
          ...(links.length > 0 ? [links] : []),
        ],
        rank: rankOf(own, requirements, ownKey),
        situation: describeSituation(requirements),
      };
    });
  };

  // R11 — pastilla activa de .nav-pills, en cada contexto y situación donde se
  // vea. Sin fondo propio, la pastilla activa usa el de la librería en
  // `.nav-pills`: var(--bs-gray-50).
  //
  // Se mide en el elemento que la pinta, el enlace activo dentro del
  // contenedor, y no en el bloque que declara la variable: un theme que rompe
  // el par en `.nav-pills` y lo corrige en `.nav-pills .nav-link.active` no
  // enseña ninguna pastilla rota. Cada pastilla se mide una vez por contexto y
  // estado, aunque varios bloques declaren sobre ella, y la reporta el bloque
  // del enlace si lo hay: es quien la pinta.
  const pending = [];
  for (const block of blocks) {
    const declared = PILL_VARS.map((name) => block.decls.get(name)).find(Boolean);
    // Cada selector de la lista es una alternativa, con su propio prefijo de
    // zona: se mide por separado, con lo que se declara sobre él y no sobre las
    // otras.
    for (const { zone: altZone, bare: part, sameElement } of alternatives(block)) {
      // `:root` no es una pastilla: lo que declara ahí lo pisa la librería en
      // `.nav-pills`.
      if (isRootPrelude(part)) continue;
      // Un descendiente que no pinta ninguna pastilla no se mide, aunque
      // declare el par: lo que `.nav-pills .dropdown-menu` ponga ahí no lo lee
      // ningún enlace activo.
      const rule = pillRule(part, block);
      if (!rule) continue;
      // Un bloque que sólo declara el fondo, o sólo un token del que el par
      // cuelga, también enseña una pastilla: el texto lo pone el contenedor o
      // la librería. Sin él, un `.sidebar .nav-pills .nav-link.active` que
      // cambia el fondo no se mediría en ningún sitio.
      // Un bloque que sólo mueve un token y ni siquiera nombra `.nav-pills`
      // (`.dropdown-menu { --bs-gray-50: … }`) no habla de ninguna barra.
      if (!declared && !(rule.movesPair && rule.withinPills)) continue;
      const selector = altZone ? `${zoneSelector(altZone)}${sameElement ? '' : ' '}${part}` : part;
      for (const ctx of contextsFor(altZone, part, '--bs-nav-pills-link-active-color')) {
        for (const measurement of pillMeasurements(rule, ctx.zone)) {
          pending.push({
            ...measurement,
            ctx,
            line: declared?.line ?? rule.line,
            key: `${ctx.zone ?? ''}|${measurement.key}`,
            where: `${selector}${block.zone ? '' : inContext(ctx)}${measurement.situation}`,
          });
        }
      }
    }
  }

  // Si una pastilla pide más combinaciones de las que se miden, se dice: un
  // resultado limpio no puede dar a entender que se miraron todas.
  const warnedContainers = new Set();
  for (const { ctx, container, truncated } of pending) {
    if (!truncated || warnedContainers.has(`${ctx.zone ?? ''}|${container}`)) continue;
    warnedContainers.add(`${ctx.zone ?? ''}|${container}`);
    warn(
      'situaciones-pastilla',
      `La pastilla de ${JSON.parse(container).join(', ')}${inContext(ctx)} depende de más estados, `
      + `clases y atributos de los que se pueden combinar: se midieron las primeras ${REQUIREMENT_LIMIT} `
      + 'situaciones, de menos condiciones a más. Las que falten hay que mirarlas en la preview.',
    );
  }

  const claims = new Map();
  for (const { key, rank } of pending) claims.set(key, Math.max(claims.get(key) ?? 0, rank));
  const measured = new Set();
  const reported = new Set();
  // De menos condiciones a más: la pastilla en reposo es la que se ve casi
  // siempre, así que es la que da el mensaje cuando el mismo par se repite en
  // varias situaciones.
  for (const {
    ctx, groups, key, rank, where, line, container,
  } of [...pending].sort((a, b) => a.depth - b.depth)) {
    // La pastilla, no el bloque: varios bloques declaran sobre la misma y la
    // medición es una sola.
    if (rank < claims.get(key) || measured.has(key)) continue;
    measured.add(key);
    const element = ctx.element(...groups);
    const fg = measureSide(ctx, element, '--bs-nav-pills-link-active-color');
    const bg = measureSide(ctx, element, '--bs-nav-pills-link-active-bg', { background: true });
    // El mismo par en la misma barra ya se dijo: cambiar de situación no lo
    // convierte en otro hallazgo, y el arreglo es el mismo.
    const pair = `${ctx.zone ?? ''}|${container}|${JSON.stringify([fg.rgb ?? fg.reason, bg.rgb ?? bg.reason])}`;
    if (reported.has(pair)) continue;
    reported.add(pair);
    noteLiteral(element, fg, `${where} --bs-nav-pills-link-active-color`);
    noteLiteral(element, bg, `${where} --bs-nav-pills-link-active-bg`);
    if (!fg.rgb || !bg.rgb) {
      if (explainedByR1(ctx, element, fg, bg)) continue;
      warn(
        'contraste-irresoluble',
        `No se pudo medir la pastilla activa de "${where}": ${fg.reason ?? bg.reason}.`,
        line,
      );
      continue;
    }
    const ratio = contrast(fg.rgb, bg.rgb);
    if (ratio < minContrast) {
      fail(
        'contraste-nav-pills',
        `Pastilla activa en "${where}": ${ratio.toFixed(2)}:1 entre ${fg.name} y ${bg.name}, `
        + `por debajo del ${minContrast}:1 de WCAG 2.x AA. La pastilla activa `
        + 'es el único elemento de la barra que lleva fondo sólido: si su par no contrasta, '
        + 'la opción seleccionada es la menos legible de todas.',
        line,
      );
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
  // Los pares de `.btn-outline-<role>` se generan para todos los roles; qué
  // estado se mide y en qué contexto lo decide el bucle, que mira si el relleno
  // está declarado donde se está midiendo.
  const bakedPairs = [
    ...BAKED_PAIRS,
    ...pairRoles.flatMap((role) => bakedRolePairs(role)
      .filter((pair) => !isTextBg(pair) && !pair.outline)),
    ...ROLES.flatMap((role) => bakedRolePairs(role).filter(isTextBg)),
    ...ROLES.flatMap((role) => bakedRolePairs(role).filter((pair) => pair.outline)),
  ];

  // El mismo par con la paleta por defecto, sin nada del theme: la referencia
  // para saber si un par por debajo del umbral ya lo estaba sin el theme.
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
      // seguiría apareciendo por debajo del umbral.
      const element = ctx.element(...pair.owners);
      if (pair.outline) {
        /*
         * Un estado del botón con contorno sólo se mide si su relleno está
         * declarado aquí: sobre el propio botón, en la zona que se está
         * midiendo o en el raíz, que llega a la zona. Sin el token la variante
         * lo deja transparente y se ve la superficie, que es lo que ya miden
         * las demás reglas; declararlo en una zona no convierte en medible el
         * botón intacto del raíz. Y se mira estado por estado, así que el
         * relleno de hover no arrastra al active.
         */
        const fillDeclared = element.has(pair.fill) || ctx.own.has(pair.fill) || root.has(pair.fill);
        if (!fillDeclared) continue;
        /*
         * Si el theme declara una variable genérica sobre el botón, lo mide
         * R10, que conoce el bloque y el estado. La capa que se consulta es la
         * del selector de la variante y no la del elemento, que funde también
         * lo declarado sobre `.btn`: R10 sólo procesa `.btn-<role>` y
         * `.btn-outline-<role>`, así que un bloque `.btn` compartido no mide
         * este botón y no puede apagar el par. Vale por contexto, porque un
         * bloque que sólo existe dentro de una zona no cubre el raíz.
         */
        const variantLayer = ctx.element([pair.component]);
        if (R10_BUTTON_VARS.some(
          (name) => variantLayer.has(name) && variantLayer.get(name).source !== 'defecto',
        )) continue;
      }
      const fg = measureSide(ctx, element, pair.fg.variable);
      const bg = measureSide(ctx, element, pair.bg.variable, { background: true });
      const where = `${pair.component}${inContext(ctx)}${pair.estado ? `, ${pair.estado}` : ''}`;

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
        // Si el theme no declara el texto, la línea útil es la del relleno que
        // sí declara: es lo que trajo el par por debajo del umbral.
        ?? (pair.fill && (element.get(pair.fill)?.line
          ?? ctx.own.get(pair.fill)?.line ?? root.get(pair.fill)?.line))
        ?? null;

      // Si el par ya está por debajo del umbral con la paleta por defecto y aquí
      // no empeora de forma apreciable, no lo introduce el theme. La tolerancia
      // es relativa porque estos pares se mueven unas décimas al cambiar el
      // color y esa diferencia no es información para nadie. Los pares no
      // corregibles se saltan esto: su aviso explica mejor qué hacer.
      if (!pair.noCorregible && baseline !== null && baseline < minContrast
        && ratio >= baseline * 0.9) {
        warn(
          'contraste-preexistente',
          `"${where}": ${ratio.toFixed(2)}:1 entre ${fg.name} y ${bg.name}, bajo el `
          + `${minContrast}:1 de WCAG 2.x AA, pero con la paleta por defecto de Dynamic este `
          + `par ya da ${baseline.toFixed(2)}:1; no lo introduce el theme.`,
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
