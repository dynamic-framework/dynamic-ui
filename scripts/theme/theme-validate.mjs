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

import {
  AA_NORMAL_TEXT,
  BAKED_PAIRS,
  BUTTON_DEFAULT_FG,
  DEFAULT_BLACK,
  DEFAULT_BODY_BG,
  DEFAULT_BODY_COLOR,
  DEFAULT_GRAYS,
  DEFAULT_ROLE_BASES,
  DEFAULT_ROLE_RAMPS,
  DEFAULT_WHITE,
  FONT_SIZE_STEPS,
  GRAY_STEPS,
  RAMPED_ROLES,
  RAMP_STEPS,
  RFS_MEDIA_STEPS,
  ROLES,
  bakedRolePairs,
  contrast,
  isRootPrelude,
  luminance,
  parseTriplet,
  resolveColorValue,
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
    const entry = { value: match[2], line: endLine };

    if (inWideMedia()) {
      wide.set(match[1], entry);
      return;
    }
    if (inAnyMedia()) return;

    const block = currentBlock();
    if (block) block.decls.set(match[1], entry);
    if (block && block.isRoot) root.set(match[1], entry);
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

const DEFAULT_TRIPLETS = (() => {
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

/**
 * Resuelve una custom property a un triplete, siguiendo cadenas de `var()`
 * dentro del archivo y cayendo al valor por defecto de 2.8.0 cuando el theme
 * no la toca. Devuelve `{ rgb, source }`, o `{ rgb: null, reason }`.
 */
export function resolve(name, decls, seen = new Set()) {
  if (seen.has(name)) {
    return { rgb: null, reason: `ciclo de var() en ${name}` };
  }
  seen.add(name);

  const declared = decls.get(name);
  const raw = declared ? declared.value : DEFAULT_TRIPLETS.get(name);
  if (raw === undefined) {
    return { rgb: null, reason: `${name} no está en el theme ni en los valores por defecto` };
  }

  const triplet = parseTriplet(raw);
  if (triplet) return { rgb: triplet, source: declared ? 'theme' : 'defecto' };

  const ref = String(raw).trim().match(/^var\(\s*(--[\w-]+)\s*(?:,[\s\S]*)?\)$/);
  if (ref) return resolve(ref[1], decls, seen);

  return { rgb: null, reason: `${name} vale "${raw}", que no es un triplete ni un var()` };
}

// -- Reglas -----------------------------------------------------------------

const TRIPLET_OR_VAR = /^(?:\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}|var\(\s*--[\w-]+\s*(?:,[\s\S]*)?\))$/;

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

  /** Nombre del token que un par horneado usa para su texto o su fondo. */
  const pick = (spec, role) => {
    if (spec.kind === 'white') return '--bs-white-rgb';
    if (spec.kind === 'gray') return `--bs-gray-${spec.step}-rgb`;
    return `--bs-${role}-${spec.step}-rgb`;
  };

  // R1 — formato de triplete.
  for (const [name, { value, line }] of root) {
    if (!name.endsWith('-rgb')) continue;
    if (TRIPLET_OR_VAR.test(value.trim())) continue;
    fail(
      'triplete',
      `${name}: "${value}" no es un triplete. Los colores de Dynamic viajan como `
      + '"R, G, B" sobre la variable -rgb (o como var(--bs-…-rgb)); ni hex, ni rgb(), '
      + 'ni hsl(), porque la librería los consume dentro de rgb()/RGBA().',
      line,
    );
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

  // R4 — superficies obligatorias.
  for (const [name, why] of [
    ['--bs-body-bg-rgb', 'el fondo del documento'],
    ['--bs-body-color-rgb', 'el color de texto base'],
    ['--bs-border-color', 'el color de borde que comparten inputs, tarjetas y tablas'],
  ]) {
    if (root.has(name)) continue;
    fail(
      'superficie-faltante',
      `Falta ${name}. Un theme de Dynamic fija siempre ${why}: sin esta variable el `
      + 'tema hereda el valor por defecto de la librería y el rebrand queda a medias.',
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

  // R5 — el fix de secondary-bg / tertiary-bg.
  for (const [name, expected] of [
    ['--bs-secondary-bg-rgb', 'var(--bs-gray-200-rgb)'],
    ['--bs-tertiary-bg-rgb', 'var(--bs-gray-100-rgb)'],
  ]) {
    const decl = root.get(name);
    const wrapper = expected.replace('-rgb)', ')');
    if (!decl) {
      fail(
        'fix-bg',
        `Falta ${name}: ${expected}. En dist/css/dynamic-ui.css la librería la define `
        + `como ${wrapper} — el wrapper, no el triplete — así que cualquier RGBA() que la `
        + 'consuma recibe "rgb(...)" donde espera "R, G, B". Todo theme debe corregirla.',
      );
      continue;
    }
    // Lo que se exige es que la variable acabe en un triplete, que es lo que la
    // librería rompe al apuntarla al wrapper. Un theme puede darle su propio
    // color — un literal "R, G, B" o cualquier otra -rgb — y sigue estando bien;
    // lo único inaceptable es volver a un valor que no sea triplete.
    const value = decl.value.trim();
    const isTriplet = parseTriplet(value) !== null;
    const isRgbRef = /^var\(\s*--bs-[\w-]+-rgb\s*(?:,[\s\S]*)?\)$/.test(value);
    if (!isTriplet && !isRgbRef) {
      fail(
        'fix-bg',
        `${name}: "${decl.value}" no corrige el bug de la librería. Tiene que acabar en un `
        + `triplete: ${expected}, otra variable -rgb o un literal "R, G, B". `
        + `${wrapper} es precisamente el valor roto.`,
        decl.line,
      );
    }
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
  for (const step of RFS_MEDIA_STEPS) {
    if (!root.has(`--bs-rfs-fs-${step}`)) continue;
    if (wide.has(`--bs-rfs-fs-${step}`)) continue;
    fail(
      'tipografia-breakpoint',
      `--bs-rfs-fs-${step} se declara sólo en el contexto raíz. La librería la redefine `
      + 'dentro de `@media (min-width: 1200px)`, que gana en desktop: el override necesita '
      + 'su bloque equivalente en ese breakpoint o sólo se verá en móvil.',
      root.get(`--bs-rfs-fs-${step}`).line,
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
      .flatMap((block) => block.prelude.split(','))
      .map((part) => part.trim().replace(/^\[data-bs-theme=["']?[\w-]+["']?\]\s*/, ''))
      .map((sel) => sel.match(new RegExp(`^\\.btn-(?:outline-)?(${ROLES.join('|')})$`))?.[1])
      .filter(Boolean),
  );

  // Contextos en los que se mide un componente y también los pares horneados:
  // el bloque raíz y, además, cada zona declarada en el archivo. Un
  // `.btn-primary` escrito una sola vez se ve distinto dentro de
  // `[data-bs-theme="oscura"]` si la zona mueve alguna de las variables de las
  // que depende — y ese caso es justo el que se escapa al leer el CSS de arriba
  // abajo.
  const zoneBlocks = blocks.filter((block) => block.zone);
  const contexts = [
    { zone: null, decls: root },
    ...zoneBlocks.map((block) => ({
      zone: block.zone,
      decls: new Map([...root, ...block.decls]),
    })),
  ];

  /** Zona a la que pertenece un bloque por su selector, y el selector sin ella. */
  const splitZone = (prelude) => {
    const match = prelude.match(/^\[data-bs-theme=["']?([\w-]+)["']?\]\s*(.*)$/);
    if (!match) return { zone: null, bare: prelude.trim() };
    return { zone: match[1], bare: match[2].trim() };
  };

  /**
   * Contextos que hay que medir para un bloque. Uno escrito dentro de una zona
   * se mide sólo en ella. Uno global se mide en el raíz y en cada zona, salvo
   * en las que ya tienen un bloque propio para el mismo selector que redefine
   * la variable en cuestión: ahí manda el específico y medir el global sería
   * reportar algo que nunca se ve.
   */
  const contextsFor = (block, variable) => {
    const { zone, bare } = splitZone(block.prelude);
    if (zone) return contexts.filter((ctx) => ctx.zone === zone);
    return contexts.filter((ctx) => {
      if (!ctx.zone) return true;
      const overridden = blocks.some((other) => {
        const split = splitZone(other.prelude);
        return split.zone === ctx.zone && split.bare === bare && other.decls.has(variable);
      });
      return !overridden;
    });
  };

  const inContext = (ctx) => (ctx.zone ? ` dentro de [data-bs-theme="${ctx.zone}"]` : '');

  /**
   * Mide un lado de un par declarado en un bloque. Si el bloque no lo declara,
   * se cae al token que la librería usaría. Un color escrito literal se acepta
   * y se anota: se mide tal cual, pero queda fuera del theme.
   */
  const scopeOf = (block) => new Map([...root, ...block.decls]);

  const measure = (declared, fallbackName, scope, label) => {
    const lookup = (name) => resolve(name, scope);
    if (!declared) return { ...lookup(fallbackName), name: fallbackName };
    const resolved = resolveColorValue(declared.value, lookup);
    if (resolved.source === 'literal') {
      note(
        'literal',
        `${label}: "${declared.value}" es un color literal. Se mide tal cual, pero queda `
        + 'fuera del theme: cambiar el token no lo mueve.',
        declared.line,
      );
    }
    return { ...resolved, name: resolved.via ?? declared.value };
  };

  // R10 — botones que el theme redefine por selector. Bootstrap resuelve el
  // color de texto de `.btn-<role>` con color-contrast() en Sass, así que el
  // par real es el que quede después de estos overrides, no el que la librería
  // calculó. En `.btn-outline-<role>` el fondo del role es el del estado
  // relleno (hover/active), que es donde el par puede romperse.
  const BUTTON_SELECTOR = new RegExp(`^\\.btn-(outline-)?(${ROLES.join('|')})$`);
  for (const block of blocks) {
    if (block.isRoot) continue;
    const fgDecl = block.decls.get('--bs-btn-color');
    const hoverDecl = block.decls.get('--bs-btn-hover-color');
    const bgDecl = block.decls.get('--bs-btn-bg');
    if (!fgDecl && !hoverDecl && !bgDecl) continue;

    for (const part of splitZone(block.prelude).bare.split(',')) {
      const match = part.trim().match(BUTTON_SELECTOR);
      if (!match) continue;
      const outline = Boolean(match[1]);
      const role = match[2];

      for (const ctx of contextsFor(block, fgDecl ? '--bs-btn-color' : '--bs-btn-bg')) {
        const scope = new Map([...ctx.decls, ...block.decls]);
        const label = `${part.trim()}${inContext(ctx)}`;

        /*
         * Un botón sólido enseña un único par: su texto sobre el fondo del role.
         * Uno con contorno enseña dos, y son distintos: en reposo el fondo es
         * transparente y lo que hay detrás es la superficie del contexto; sólo
         * al rellenarse (hover/active) el texto cae sobre el color del role, y
         * ahí el color que manda es --bs-btn-hover-color. Medir el par de
         * reposo contra el fondo del role daría por roto un botón que se ve
         * perfectamente.
         */
        const cases = outline
          ? [
            { estado: 'en reposo', fg: fgDecl, fgFallback: `--bs-${role}-rgb`, bgFallback: '--bs-body-bg-rgb' },
            { estado: 'relleno (hover/active)', fg: hoverDecl ?? fgDecl, fgFallback: pick(BUTTON_DEFAULT_FG[role], role), bgFallback: `--bs-${role}-rgb` },
          ]
          : [
            { estado: null, fg: fgDecl, fgFallback: pick(BUTTON_DEFAULT_FG[role], role), bgFallback: `--bs-${role}-rgb` },
          ];

        for (const caso of cases) {
          const where = caso.estado ? `${label}, ${caso.estado}` : label;
          const fg = measure(caso.fg, caso.fgFallback, scope, `${where} color de texto`);
          const bg = measure(
            caso.bgFallback === `--bs-${role}-rgb` ? bgDecl : undefined,
            caso.bgFallback,
            scope,
            `${where} fondo`,
          );
          if (!fg.rgb || !bg.rgb) {
            warn(
              'contraste-irresoluble',
              `No se pudo medir "${where}": ${fg.reason ?? bg.reason}.`,
              (caso.fg ?? bgDecl)?.line ?? null,
            );
            continue;
          }
          const ratio = contrast(fg.rgb, bg.rgb);
          if (ratio >= minContrast) continue;
          fail(
            'contraste-boton',
            `"${where}": ${ratio.toFixed(2)}:1 entre el texto (${fg.name}) y el fondo (${bg.name}), `
            + `por debajo del ${minContrast}:1 que pide WCAG 2.x AA para texto normal. `
            + (ctx.zone && !block.zone
              ? `El botón se declara una sola vez, pero dentro de la zona "${ctx.zone}" alguna de `
                + 'las variables de las que depende vale otra cosa. Dale a la zona su propio '
                + `bloque \`${zoneSelector(ctx.zone)} ${part.trim()}\`.`
              : (caso.fg
                ? 'El theme fija ese color de texto: o se aclara el fondo, o se oscurece el texto.'
                : `El theme no lo fija, así que el botón conserva el que Bootstrap horneó `
                  + `para "${role}".`)),
            (caso.fg ?? bgDecl)?.line ?? null,
          );
        }
      }
    }
  }

  // R11 — pastilla activa de .nav-pills, en cada contexto donde se vea.
  for (const block of blocks) {
    const fgDecl = block.decls.get('--bs-nav-pills-link-active-color');
    if (!fgDecl) continue;
    const bgDecl = block.decls.get('--bs-nav-pills-link-active-bg');

    for (const ctx of contextsFor(block, '--bs-nav-pills-link-active-color')) {
      const scope = new Map([...ctx.decls, ...block.decls]);
      const where = `${block.prelude.replace(/\s+/g, ' ')}${block.zone ? '' : inContext(ctx)}`;
      const fg = measure(fgDecl, '--bs-white-rgb', scope, `${where} --bs-nav-pills-link-active-color`);
      // Sin fondo propio, la pastilla activa usa el de Bootstrap: var(--bs-primary).
      const bg = measure(bgDecl, '--bs-primary-rgb', scope, `${where} --bs-nav-pills-link-active-bg`);
      if (!fg.rgb || !bg.rgb) {
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
        `Pastilla activa en "${where}": ${ratio.toFixed(2)}:1 entre `
        + `--bs-nav-pills-link-active-color (${fg.name}) y --bs-nav-pills-link-active-bg `
        + `(${bg.name}), por debajo del ${minContrast}:1 de WCAG 2.x AA. La pastilla activa `
        + 'es el único elemento de la barra que lleva fondo sólido: si su par no contrasta, '
        + 'la opción seleccionada es la menos legible de todas.',
        fgDecl.line,
      );
    }
  }

  // R12 — zonas. Una zona reescribe la paleta de su subárbol, así que su par
  // cuerpo/fondo hay que medirlo entero otra vez: nada de lo validado en el
  // bloque raíz aplica dentro de ella.
  for (const block of blocks) {
    if (!block.zone) continue;
    const scope = scopeOf(block);
    const bg = resolve('--bs-body-bg-rgb', scope);
    const fg = resolve('--bs-body-color-rgb', scope);
    const where = `[data-bs-theme="${block.zone}"]`;

    if (!fg.rgb || !bg.rgb) {
      warn(
        'contraste-irresoluble',
        `No se pudo medir el cuerpo de la zona "${block.zone}": ${fg.reason ?? bg.reason}.`,
        block.line,
      );
    } else {
      const ratio = contrast(fg.rgb, bg.rgb);
      if (ratio < minContrast) {
        fail(
          'contraste-zona',
          `Zona "${block.zone}": ${ratio.toFixed(2)}:1 entre --bs-body-color-rgb y `
          + `--bs-body-bg-rgb, por debajo del ${minContrast}:1 de WCAG 2.x AA. Todo el texto `
          + `de ${where} hereda este par, así que la zona entera queda ilegible, no un componente.`,
          block.decls.get('--bs-body-color-rgb')?.line ?? block.line,
        );
      }
    }

    const linkDecl = block.decls.get('--bs-link-color-rgb');
    if (!linkDecl || !bg.rgb) continue;
    const link = resolve('--bs-link-color-rgb', scope);
    if (!link.rgb) {
      warn(
        'contraste-irresoluble',
        `No se pudo medir el enlace de la zona "${block.zone}": ${link.reason}.`,
        linkDecl.line,
      );
      continue;
    }
    const ratio = contrast(link.rgb, bg.rgb);
    if (ratio >= minContrast) continue;
    const detail = `Zona "${block.zone}": el enlace da ${ratio.toFixed(2)}:1 entre `
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
  const bakedPairs = [
    ...BAKED_PAIRS,
    ...touchedRoles.flatMap((role) => bakedRolePairs(role)),
  ];

  /** Token al que cae un lado del par cuando el theme no declara su variable. */
  const fallbackToken = (spec, role) => {
    if (spec.kind === 'white') return '--bs-white-rgb';
    if (spec.kind === 'gray') return `--bs-gray-${spec.step}-rgb`;
    if (spec.kind === 'roleBase') return `--bs-${spec.role}-rgb`;
    if (spec.kind === 'surface') return '--bs-body-bg-rgb';
    return `--bs-${role}-${spec.step}-rgb`;
  };

  /**
   * Resuelve un lado del par. Si el theme declara la variable, manda ella; si
   * no, se usa el valor por defecto de la librería. Un fondo `transparent`
   * —el de `.list-group`, por ejemplo— no es un color: lo que se ve detrás es
   * la superficie del contexto, y contra eso hay que medir.
   */
  const resolveSide = (side, role, scope) => {
    const declared = side.variable ? scope.get(side.variable) : undefined;
    if (declared && !/^\s*transparent\s*$/i.test(declared.value)) {
      const resolved = resolveColorValue(declared.value, (name) => resolve(name, scope));
      return { ...resolved, name: resolved.via ?? side.variable, declared: true };
    }
    const token = fallbackToken(side.fallback, role);
    return { ...resolve(token, scope), name: token, declared: false };
  };

  for (const pair of bakedPairs) {
    for (const ctx of contexts) {
      // Un botón con override propio no es un par horneado: lo mide R10, que
      // conoce el bloque concreto y el contexto en el que se ve.
      if (pair.onlyWithoutOverride && overriddenButtons.has(pair.role)) continue;

      // Al contexto se le superponen los bloques que pueden declarar las
      // variables de este par (`.list-group` para una lista, `.alert-<role>`
      // para una alerta…), sean globales o propios de la zona. Sin esto, un
      // theme que arregla el par en un bloque de componente seguiría
      // apareciendo como roto.
      const owners = pair.owners ?? [];
      const scope = new Map(ctx.decls);
      for (const block of blocks) {
        if (block.isRoot) continue;
        const split = splitZone(block.prelude);
        if (split.zone && split.zone !== ctx.zone) continue;
        const applies = split.bare
          .split(',')
          .some((part) => owners.includes(part.trim()));
        if (!applies) continue;
        for (const [name, entry] of block.decls) scope.set(name, entry);
      }

      const fg = resolveSide(pair.fg, pair.role, scope);
      const bg = resolveSide(pair.bg, pair.role, scope);
      const where = `${pair.component}${inContext(ctx)}`;

      if (!fg.rgb || !bg.rgb) {
        warn(
          'contraste-irresoluble',
          `No se pudo medir "${where}": ${fg.reason ?? bg.reason}.`,
        );
        continue;
      }

      const ratio = contrast(fg.rgb, bg.rgb);
      if (ratio >= minContrast) continue;

      // El mismo par con la paleta por defecto. Si allí ya falla y aquí no
      // empeora, el defecto es de la librería y no de este theme.
      const baseFg = resolveSide(pair.fg, pair.role, new Map());
      const baseBg = resolveSide(pair.bg, pair.role, new Map());
      const baseline = baseFg.rgb && baseBg.rgb ? contrast(baseFg.rgb, baseBg.rgb) : null;
      const line = scope.get(pair.fg.variable)?.line ?? null;

      // Si el par ya falla con la paleta por defecto y aquí no empeora de forma
      // apreciable, el defecto es de la librería y no del theme. La tolerancia
      // es relativa porque estos pares rotos se mueven unas décimas al cambiar
      // el color y esa diferencia no es información para nadie.
      if (baseline !== null && baseline < minContrast && ratio >= baseline * 0.9) {
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

      const arreglo = pair.fg.important
        ? 'Bootstrap fija ese color con !important en la propia clase, así que no hay '
          + 'variable que lo mueva: o cambia el color del role, o esa clase no se usa con él.'
        : (pair.fg.variable
          ? `Declara ${pair.fg.variable}${ctx.zone ? ` dentro de la zona "${ctx.zone}"` : ''} `
            + 'para que el componente deje de heredar el valor de la librería.'
          : 'El color va horneado en la clase y no se puede mover desde el theme.');

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

if (import.meta.url === `file://${process.argv[1]}`) {
  process.exit(main(process.argv));
}

export { main };
