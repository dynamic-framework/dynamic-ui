#!/usr/bin/env node
//
// theme-expand — convierte un theme.json reducido en el CSS completo que
// Dynamic UI 2.8.0 necesita para un rebrand.
//
//   node scripts/theme/theme-expand.mjs <theme.json> [-o <theme.css>]
//
// Entrada mínima: un color base por role, fondo y color de texto del body,
// familia tipográfica y radio base. Salida: todas las variables derivadas en
// el selector `:root, [data-bs-theme="dynamic"]`, con comentarios por sección.
//
// Lo que la herramienta resuelve por ti y es fácil equivocar a mano:
//   - las 10 hojas de cada rampa, con la receta de tinte de Sass;
//   - el paso 500, que apunta al base en vez de repetirlo;
//   - el par `--bs-rfs-fs-N` + su override en `@media (min-width: 1200px)`;
//   - el fix de `--bs-secondary-bg-rgb` / `--bs-tertiary-bg-rgb`, que en la
//     librería apuntan al wrapper (`var(--bs-gray-200)`) en vez del triplete.

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

import {
  FONT_SIZE_STEPS,
  GRAY_BACKED_ROLES,
  GRAY_STEPS,
  RADIUS_FACTORS,
  RAMPED_ROLES,
  RAMP_STEPS,
  ROLES,
  THEME_SELECTOR,
  deriveRamp,
  formatRem,
  parseColor,
  parseRem,
  rfsPair,
  toCssRgb,
  toTriplet,
} from './theme-tokens.mjs';

const PKG_VERSION = JSON.parse(
  fs.readFileSync(new URL('../../package.json', import.meta.url), 'utf8'),
).version;

// -- Entrada ----------------------------------------------------------------

/**
 * Valida el theme reducido y normaliza sus valores. Falla con un mensaje que
 * dice qué falta y con qué forma se espera.
 */
export function readTheme(theme) {
  const errors = [];
  const push = (msg) => errors.push(msg);

  if (!theme || typeof theme !== 'object' || Array.isArray(theme)) {
    throw new Error('El theme debe ser un objeto JSON.');
  }

  const roles = {};
  if (theme.roles !== undefined) {
    if (typeof theme.roles !== 'object' || theme.roles === null || Array.isArray(theme.roles)) {
      push('`roles` debe ser un objeto { role: color }.');
    } else {
      for (const [role, value] of Object.entries(theme.roles)) {
        if (!ROLES.includes(role)) {
          push(`\`roles.${role}\` no es un role de Dynamic. Roles válidos: ${ROLES.join(', ')}.`);
          continue;
        }
        try {
          roles[role] = parseColor(value, `roles.${role}`);
        } catch (error) {
          push(error.message);
        }
      }
    }
  }

  let gray = null;
  if (theme.gray !== undefined) {
    try {
      gray = parseColor(theme.gray, 'gray');
    } catch (error) {
      push(error.message);
    }
  }

  if (Object.keys(roles).length === 0 && !gray) {
    push('El theme no toca ningún color: define al menos un role en `roles`, o `gray`.');
  }

  const body = theme.body ?? {};
  const surfaces = {};
  for (const key of ['bg', 'color']) {
    if (body[key] === undefined) {
      push(`Falta \`body.${key}\`. Un theme de Dynamic debe fijar siempre --bs-body-${key === 'bg' ? 'bg' : 'color'}-rgb.`);
      continue;
    }
    try {
      surfaces[key] = parseColor(body[key], `body.${key}`);
    } catch (error) {
      push(error.message);
    }
  }
  let borderColor = null;
  if (body.borderColor !== undefined) {
    try {
      borderColor = parseColor(body.borderColor, 'body.borderColor');
    } catch (error) {
      push(error.message);
    }
  }

  const typography = theme.typography ?? {};
  if (typeof typography.fontFamily !== 'string' || typography.fontFamily.trim() === '') {
    push('Falta `typography.fontFamily` (por ejemplo "Inter, system-ui, sans-serif").');
  }
  const scale = {};
  const rawScale = typography.scale ?? {};
  if (typeof rawScale !== 'object' || rawScale === null || Array.isArray(rawScale)) {
    push('`typography.scale` debe ser un objeto { "1": "3rem", ... }.');
  } else {
    for (const [step, value] of Object.entries(rawScale)) {
      if (!FONT_SIZE_STEPS.includes(step)) {
        push(`\`typography.scale.${step}\` no es un paso válido. Pasos: ${FONT_SIZE_STEPS.join(', ')}.`);
        continue;
      }
      try {
        scale[step] = parseRem(value, `typography.scale.${step}`);
      } catch (error) {
        push(error.message);
      }
    }
  }

  let radius = null;
  if (theme.radius === undefined) {
    push('Falta `radius` (radio base, por ejemplo "0.5rem").');
  } else {
    try {
      radius = parseRem(theme.radius, 'radius');
    } catch (error) {
      push(error.message);
    }
  }

  if (errors.length > 0) {
    throw new Error(`Theme inválido:\n${errors.map((e) => `  - ${e}`).join('\n')}`);
  }

  return {
    name: typeof theme.name === 'string' ? theme.name : null,
    roles,
    gray,
    body: { ...surfaces, borderColor },
    typography: { fontFamily: typography.fontFamily.trim(), scale },
    radius,
  };
}

// -- Salida -----------------------------------------------------------------

const section = (title) => `\n  /* ${title} */`;
const decl = (name, value) => `  --bs-${name}: ${value};`;

/** Construye el CSS completo a partir de un theme ya normalizado. */
export function expandTheme(input) {
  const theme = readTheme(input);
  const lines = [];
  const notes = [];

  // Grises. Si el theme los toca, la rampa se deriva con la misma receta de
  // tinte que las cromáticas. Ojo: la rampa de grises de Dynamic está hecha a
  // mano (no es tint/shade de gray-500), así que un `gray` propio cambia el
  // carácter del neutro, no sólo su tono.
  const grayRamp = theme.gray ? deriveRamp(theme.gray) : null;
  const grayTriplet = (step) => {
    if (!grayRamp) return null;
    if (Number(step) === 500) return toTriplet(theme.gray);
    return toTriplet(grayRamp[step]);
  };

  if (grayRamp) {
    notes.push(
      'La rampa de grises de Dynamic 2.8.0 está escrita a mano en '
      + '_colors.scss; aquí se deriva por tinte desde `gray`, así que los pasos '
      + 'no coinciden con los del tema por defecto.',
    );
    lines.push(section('Grises — base y 11 pasos derivados por tinte'));
    lines.push(decl('gray-rgb', toTriplet(theme.gray)));
    for (const step of GRAY_STEPS) {
      lines.push(decl(`gray-${step}-rgb`, grayTriplet(step)));
    }
  }

  // Roles. Un rebrand es el base -rgb más las 10 hojas; el 500 apunta al base.
  // `light` y `dark` no tienen rampa en la librería: sólo su base.
  const touchedRoles = new Set(Object.keys(theme.roles));
  if (grayRamp) {
    // Un `gray` propio no se propaga a los roles respaldados por grises: sus
    // rampas están resueltas a literales en tiempo de compilación.
    for (const role of Object.keys(GRAY_BACKED_ROLES)) touchedRoles.add(role);
  }

  for (const role of ROLES.filter((r) => touchedRoles.has(r))) {
    const grayStep = GRAY_BACKED_ROLES[role];
    const explicit = theme.roles[role];
    const hasRamp = RAMPED_ROLES.includes(role);

    lines.push(section(
      hasRamp
        ? `Role ${role} — base + 10 hojas (el 500 sigue al base)`
        : `Role ${role} — sólo base: la librería no expone rampa para ${role}`,
    ));

    if (explicit) {
      lines.push(decl(`${role}-rgb`, toTriplet(explicit)));
    } else {
      // Sólo llegamos aquí por un `gray` propio: conservamos la indirección.
      lines.push(decl(`${role}-rgb`, `var(--bs-gray-${grayStep}-rgb)`));
    }

    if (!hasRamp) continue;

    // Con color propio la rampa se deriva de él, incluso en un role que por
    // defecto se respalda en grises. Sin color propio (sólo `gray`), la rampa
    // es la de grises derivada.
    const ramp = Object.fromEntries(RAMP_STEPS.map((step) => [
      step,
      explicit ? toTriplet(deriveRamp(explicit)[step]) : grayTriplet(step),
    ]));

    for (const step of RAMP_STEPS) {
      if (step === 600) lines.push(decl(`${role}-500-rgb`, `var(--bs-${role}-rgb)`));
      lines.push(decl(`${role}-${step}-rgb`, ramp[step]));
    }
  }

  // Superficies. Siempre presentes, incluso si el theme no cambia el gris.
  lines.push(section('Superficies — siempre explícitas'));
  lines.push(decl('body-bg-rgb', toTriplet(theme.body.bg)));
  lines.push(decl('body-color-rgb', toTriplet(theme.body.color)));
  lines.push(decl(
    'border-color',
    theme.body.borderColor ? toCssRgb(theme.body.borderColor) : 'rgb(var(--bs-gray-100-rgb))',
  ));

  lines.push(section(
    'Fix: en la librería estas dos apuntan al wrapper (var(--bs-gray-200)),\n     que no es un triplete y rompe cualquier RGBA() que las consuma',
  ));
  lines.push(decl('secondary-bg-rgb', 'var(--bs-gray-200-rgb)'));
  lines.push(decl('tertiary-bg-rgb', 'var(--bs-gray-100-rgb)'));

  // Tipografía. Se overridea --bs-rfs-fs-N; --bs-fs-N ya apunta ahí.
  lines.push(section('Tipografía — familia y escala vía --bs-rfs-fs-N, nunca --bs-fs-N'));
  lines.push(decl('body-font-family', theme.typography.fontFamily));

  const wide = [];
  const scaleSteps = FONT_SIZE_STEPS.filter((s) => theme.typography.scale[s] !== undefined);
  for (const step of scaleSteps) {
    const pair = rfsPair(theme.typography.scale[step]);
    lines.push(decl(`rfs-fs-${step}`, pair.base));
    if (pair.wide) wide.push(decl(`rfs-fs-${step}`, pair.wide));
  }

  // Radios, derivados del base con los múltiplos de 2.8.0.
  lines.push(section('Radios — derivados del radio base'));
  for (const [suffix, factor] of Object.entries(RADIUS_FACTORS)) {
    const name = suffix ? `border-radius-${suffix}` : 'border-radius';
    lines.push(decl(name, formatRem(theme.radius * factor)));
  }
  lines.push(decl('border-radius-2xl', 'var(--bs-border-radius-xxl)'));

  const header = [
    '/*',
    ` * Theme expandido para @dynamic-framework/ui-react ${PKG_VERSION}.`,
    theme.name ? ` * Theme: ${theme.name}` : null,
    ' *',
    ' * Generado por scripts/theme/theme-expand.mjs — no editar a mano.',
    ' * Cárgalo DESPUÉS de dynamic-ui.css.',
    ...notes.flatMap((note) => [' *', ...wrapNote(note)]),
    ' */',
  ].filter(Boolean).join('\n');

  const root = `${THEME_SELECTOR} {${lines.join('\n')}\n}`;

  // El @media va aparte: sin él, el `@media (min-width: 1200px)` de la
  // librería vuelve a poner la escala por defecto en desktop.
  const media = wide.length > 0
    ? [
      '',
      '/* La librería redefine --bs-rfs-fs-1..4 en este breakpoint; sin este bloque',
      '   la escala de arriba sólo se vería por debajo de 1200px. */',
      '@media (min-width: 1200px) {',
      `  ${THEME_SELECTOR.split('\n').join('\n  ')} {`,
      ...wide.map((line) => `  ${line}`),
      '  }',
      '}',
    ].join('\n')
    : '';

  return `${header}\n\n${root}\n${media}\n`;
}

const wrapNote = (note) => {
  const words = note.split(' ');
  const out = [];
  let line = ' * NOTA:';
  for (const word of words) {
    if (`${line} ${word}`.length > 78) {
      out.push(line);
      line = ' *       ';
    }
    line += ` ${word}`;
  }
  out.push(line);
  return out;
};

// -- CLI --------------------------------------------------------------------

function main(argv) {
  const args = argv.slice(2);
  const positional = [];
  let outPath = null;
  for (let i = 0; i < args.length; i += 1) {
    if (args[i] === '-o' || args[i] === '--out') {
      outPath = args[i + 1];
      i += 1;
    } else if (args[i] === '-h' || args[i] === '--help') {
      process.stdout.write('uso: theme-expand.mjs <theme.json> [-o <theme.css>]\n');
      return 0;
    } else {
      positional.push(args[i]);
    }
  }
  if (positional.length !== 1) {
    process.stderr.write('uso: theme-expand.mjs <theme.json> [-o <theme.css>]\n');
    return 2;
  }

  const inPath = path.resolve(positional[0]);
  let theme;
  try {
    theme = JSON.parse(fs.readFileSync(inPath, 'utf8'));
  } catch (error) {
    process.stderr.write(`No se pudo leer ${inPath}: ${error.message}\n`);
    return 2;
  }

  let css;
  try {
    css = expandTheme(theme);
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
    return 1;
  }

  const target = outPath ? path.resolve(outPath) : inPath.replace(/\.json$/, '.css');
  fs.writeFileSync(target, css, 'utf8');
  process.stdout.write(`${path.relative(process.cwd(), target)} escrito.\n`);
  return 0;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  process.exit(main(process.argv));
}

export { main };
