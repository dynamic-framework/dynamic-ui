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
  ROLES,
  SOLID_PAIRS,
  SUBTLE_PAIRS,
  contrast,
  luminance,
  parseTriplet,
} from './theme-tokens.mjs';

const RFS_MEDIA_STEPS = ['1', '2', '3', '4'];

// -- Lectura del CSS --------------------------------------------------------

/**
 * Lector mínimo: sólo necesita ver declaraciones de custom properties y en qué
 * `@media` caen. Devuelve las declaraciones del contexto raíz y las del
 * breakpoint 1200px por separado, con el número de línea de cada una.
 */
export function readCss(css) {
  const stripped = css.replace(/\/\*[\s\S]*?\*\//g, (match) => match.replace(/[^\n]/g, ' '));
  const root = new Map();
  const wide = new Map();
  const stack = [];
  let buffer = '';
  let line = 1;

  const inWideMedia = () => stack.some(
    (prelude) => /^@media\b/.test(prelude) && /min-width\s*:\s*1200px/.test(prelude),
  );
  const inAnyMedia = () => stack.some((prelude) => /^@media\b/.test(prelude));

  const commit = (text, endLine) => {
    const match = text.match(/^\s*(--[\w-]+)\s*:\s*([\s\S]+?)\s*$/);
    if (!match || stack.length === 0) return;
    const target = inWideMedia() ? wide : (inAnyMedia() ? null : root);
    if (!target) return;
    target.set(match[1], { value: match[2], line: endLine });
  };

  for (let i = 0; i < stripped.length; i += 1) {
    const char = stripped[i];
    if (char === '\n') line += 1;
    if (char === '{') {
      stack.push(buffer.trim());
      buffer = '';
    } else if (char === '}') {
      commit(buffer, line);
      buffer = '';
      stack.pop();
    } else if (char === ';') {
      commit(buffer, line);
      buffer = '';
    } else {
      buffer += char;
    }
  }

  return { root, wide, usesWhere: /:where\s*\(/.test(stripped) };
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
 * Devuelve `{ errors, warnings }`; cada entrada es `{ rule, line, message }`.
 */
export function validate(css, { minContrast = AA_NORMAL_TEXT } = {}) {
  const { root, wide, usesWhere } = readCss(css);
  const errors = [];
  const warnings = [];
  const fail = (rule, message, line = null) => errors.push({ rule, message, line });
  const warn = (rule, message, line = null) => warnings.push({ rule, message, line });

  if (root.size === 0 && wide.size === 0) {
    fail('vacio', 'El archivo no declara ninguna custom property --bs-*.');
    return { errors, warnings };
  }

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
    if (decl.value.trim() !== expected) {
      fail(
        'fix-bg',
        `${name}: "${decl.value}" no corrige el bug de la librería. Debe valer exactamente `
        + `${expected}; ${wrapper} es precisamente el valor roto.`,
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

  // R9 — contraste AA de los pares texto/fondo que la librería hornea.
  const pick = (spec, role) => {
    if (spec.kind === 'white') return '--bs-white-rgb';
    if (spec.kind === 'gray') return `--bs-gray-${spec.step}-rgb`;
    return `--bs-${role}-${spec.step}-rgb`;
  };
  for (const role of touchedRoles) {
    for (const [surface, table] of [['sólido', SOLID_PAIRS], ['subtle', SUBTLE_PAIRS]]) {
      const pair = table[role];
      if (!pair) continue;
      const fgName = pick(pair.fg, role);
      const bgName = pick(pair.bg, role);
      const fg = resolve(fgName, root);
      const bg = resolve(bgName, root);
      if (!fg.rgb || !bg.rgb) {
        warn(
          'contraste-irresoluble',
          `No se pudo medir el par ${surface} de "${role}": ${fg.reason ?? bg.reason}.`,
        );
        continue;
      }
      const ratio = contrast(fg.rgb, bg.rgb);
      if (ratio >= minContrast) continue;

      // El mismo par medido con la paleta por defecto de 2.8.0. Sirve para no
      // culpar al theme de un par que ya viene roto en la librería.
      const baseFg = resolve(fgName, new Map());
      const baseBg = resolve(bgName, new Map());
      const baseline = baseFg.rgb && baseBg.rgb ? contrast(baseFg.rgb, baseBg.rgb) : null;
      const why = `Dynamic hornea este par en tiempo de compilación (\`.btn-${role}\`, `
        + `\`.text-bg-${role}\`, \`-text-emphasis\` sobre \`-bg-subtle\`): `
        + '`color-contrast()` corre en Sass y no se recalcula al cambiar el triplete en '
        + 'runtime, así que el texto se queda como estaba.';
      const line = root.get(bgName)?.line ?? root.get(`--bs-${role}-rgb`)?.line ?? null;

      if (baseline !== null && baseline < minContrast && ratio >= baseline - 0.005) {
        warn(
          'contraste-preexistente',
          `Par ${surface} de "${role}": ${ratio.toFixed(2)}:1 entre ${fgName} y ${bgName}, `
          + `bajo el ${minContrast}:1 de WCAG 2.x AA — pero el tema por defecto de Dynamic `
          + `2.8.0 ya da ${baseline.toFixed(2)}:1 en este mismo par, así que el defecto es de `
          + `la librería y no de tu theme. ${why}`,
          line,
        );
        continue;
      }

      fail(
        'contraste',
        `Par ${surface} de "${role}": ${ratio.toFixed(2)}:1 entre ${fgName} y ${bgName}, por `
        + `debajo del ${minContrast}:1 que pide WCAG 2.x AA para texto normal`
        + (baseline !== null ? ` (el tema por defecto da ${baseline.toFixed(2)}:1 aquí)` : '')
        + `. ${why}`,
        line,
      );
    }
  }

  return { errors, warnings };
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

  const { errors, warnings } = validate(css, { minContrast });
  const rel = path.relative(process.cwd(), file);
  const render = (entry, kind) => {
    const where = entry.line ? `${rel}:${entry.line}` : rel;
    return `${kind} ${where}  [${entry.rule}]\n  ${entry.message}\n`;
  };

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
