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
// Tres secciones opcionales llevan el theme más allá de la paleta:
//   - `root`       — variables --bs-* que se emiten tal cual en el bloque raíz;
//   - `components` — un bloque por selector, con sus variables de componente;
//   - `zones`      — subárboles [data-bs-theme="<zona>"] con su propia paleta.
// Se emiten en ese orden, que es el que necesita la cascada: la zona pisa al
// componente y el componente al root.
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
  ALLOWED_DECLARATIONS,
  FONT_SIZE_STEPS,
  GRAY_BACKED_ROLES,
  GRAY_STEPS,
  KNOWN_TOKENS,
  KNOWN_TOKENS_VERSION,
  RADIUS_FACTORS,
  RAMPED_ROLES,
  RAMP_STEPS,
  RFS_MEDIA_STEPS,
  ROLES,
  THEME_SELECTOR,
  ZONE_NAME_RE,
  deriveRamp,
  formatRem,
  normalizeCssValue,
  parseColor,
  parseRem,
  rfsPair,
  toCssRgb,
  toTriplet,
  varRefs,
  zoneSelector,
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

  // -- Secciones extendidas -------------------------------------------------
  //
  // `root`, `components` y `zones` no derivan nada: son variables y
  // declaraciones que el autor del theme escribe y que se emiten tal cual. Lo
  // único que se comprueba aquí es la forma — que las claves sean --bs-*, que
  // las propiedades estén permitidas y que las referencias apunten a algo que
  // existe — porque un `var()` mal escrito no falla, simplemente no pinta.

  const isPlainObject = (value) => (
    typeof value === 'object' && value !== null && !Array.isArray(value)
  );

  /** Toda clave de estas secciones es una custom property del prefijo de Bootstrap. */
  const readVars = (raw, where) => {
    const out = [];
    if (!isPlainObject(raw)) {
      push(`\`${where}\` debe ser un objeto { "--bs-…": "valor" }.`);
      return out;
    }
    for (const [name, value] of Object.entries(raw)) {
      if (!name.startsWith('--bs-')) {
        push(
          `\`${where}.${name}\`: toda variable de un theme empieza por --bs-. `
          + 'Dynamic hereda el prefijo de Bootstrap y sus componentes sólo leen ese espacio '
          + `de nombres, así que "${name}" no lo consumiría nada.`,
        );
        continue;
      }
      if (typeof value !== 'string' && typeof value !== 'number') {
        push(`\`${where}.${name}\`: se esperaba un string con el valor CSS, se recibió ${typeof value}.`);
        continue;
      }
      out.push({ name, value: String(value).trim() });
    }
    return out;
  };

  const root = theme.root === undefined ? [] : readVars(theme.root, 'root');

  const components = [];
  if (theme.components !== undefined) {
    if (!Array.isArray(theme.components)) {
      push('`components` debe ser una lista de { selector, vars?, declarations? }.');
    } else {
      theme.components.forEach((entry, index) => {
        const where = `components[${index}]`;
        if (!isPlainObject(entry)) {
          push(`\`${where}\` debe ser un objeto { selector, vars?, declarations? }.`);
          return;
        }
        const selector = typeof entry.selector === 'string' ? entry.selector.trim() : '';
        if (selector === '') {
          push(`\`${where}.selector\` es obligatorio: el selector CSS del bloque (por ejemplo ".btn").`);
          return;
        }
        const vars = entry.vars === undefined ? [] : readVars(entry.vars, `${where}.vars`);

        const declarations = [];
        if (entry.declarations !== undefined) {
          if (!isPlainObject(entry.declarations)) {
            push(`\`${where}.declarations\` debe ser un objeto { propiedad: valor }.`);
          } else {
            for (const [property, value] of Object.entries(entry.declarations)) {
              if (!ALLOWED_DECLARATIONS.includes(property)) {
                push(
                  `\`${where}.declarations.${property}\`: la propiedad "${property}" no está `
                  + `permitida en un theme. Sólo se admiten ${ALLOWED_DECLARATIONS.join(', ')}; `
                  + 'lo demás pertenece al CSS de la aplicación o a una variable --bs-* del '
                  + `componente (selector "${selector}").`,
                );
                continue;
              }
              if (typeof value !== 'string' && typeof value !== 'number') {
                push(`\`${where}.declarations.${property}\`: se esperaba un string, se recibió ${typeof value}.`);
                continue;
              }
              declarations.push({ property, value: String(value).trim() });
            }
          }
        }

        if (vars.length === 0 && declarations.length === 0) {
          push(`\`${where}\` ("${selector}") no declara nada: usa \`vars\`, \`declarations\` o ambos.`);
          return;
        }
        components.push({ selector, vars, declarations });
      });
    }
  }

  const zones = [];
  if (theme.zones !== undefined) {
    if (!isPlainObject(theme.zones)) {
      push('`zones` debe ser un objeto { "<nombre>": { vars, nav? } }.');
    } else {
      for (const [name, zone] of Object.entries(theme.zones)) {
        const where = `zones.${name}`;
        if (!ZONE_NAME_RE.test(name)) {
          push(
            `\`${where}\`: "${name}" no sirve como nombre de zona. Viaja dentro de `
            + '[data-bs-theme="…"], así que empieza por letra y sigue con letras, dígitos, '
            + 'guiones o guiones bajos.',
          );
          continue;
        }
        if (name === 'dynamic') {
          push('`zones.dynamic`: "dynamic" es el nombre del tema raíz. Una zona necesita otro nombre.');
          continue;
        }
        if (!isPlainObject(zone)) {
          push(`\`${where}\` debe ser un objeto { vars, nav? }.`);
          continue;
        }
        const vars = readVars(zone.vars ?? {}, `${where}.vars`);
        if (vars.length === 0) {
          push(`\`${where}.vars\` está vacío: una zona existe para cambiar variables.`);
          continue;
        }
        let nav = null;
        if (zone.nav !== undefined) {
          const navVars = readVars(zone.nav, `${where}.nav`);
          for (const { name: varName } of navVars) {
            if (varName.startsWith('--bs-nav-')) continue;
            push(
              `\`${where}.nav.${varName}\`: en \`nav\` sólo van variables --bs-nav-*, que son `
              + 'las que leen .nav y .nav-pills. El resto de la zona va en `vars`.',
            );
          }
          const link = navVars.filter((v) => !v.name.startsWith('--bs-nav-pills-'));
          const pills = navVars.filter((v) => v.name.startsWith('--bs-nav-pills-'));
          if (link.length > 0 || pills.length > 0) nav = { link, pills };
        }
        zones.push({ name, vars, nav });
      }
    }
  }

  // Referencias. Un `var(--bs-x)` sólo pinta si `--bs-x` existe: o lo genera
  // este mismo theme, o viene del CSS de Dynamic. Cuando no es ninguno de los
  // dos el navegador se queda con el valor inicial y el fallo es invisible.
  const generated = generatedTokens({ roles, gray, root });
  const checkRefs = (value, where) => {
    for (const ref of varRefs(value)) {
      if (generated.has(ref) || KNOWN_TOKENS.has(ref)) continue;
      push(
        `\`${where}\` referencia ${ref}, que no existe: ni lo genera este theme ni está `
        + `en el CSS de Dynamic UI ${KNOWN_TOKENS_VERSION}. Un var() a un token inexistente `
        + 'no da error, deja la propiedad en su valor inicial.',
      );
    }
  };
  for (const { name, value } of root) checkRefs(value, `root.${name}`);
  for (const { selector, vars, declarations } of components) {
    for (const { name, value } of vars) checkRefs(value, `components["${selector}"].${name}`);
    for (const { property, value } of declarations) {
      checkRefs(value, `components["${selector}"].${property}`);
    }
  }
  for (const zone of zones) {
    for (const { name, value } of zone.vars) checkRefs(value, `zones.${zone.name}.${name}`);
    for (const { name, value } of [...(zone.nav?.link ?? []), ...(zone.nav?.pills ?? [])]) {
      checkRefs(value, `zones.${zone.name}.nav.${name}`);
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
    root,
    components,
    zones,
  };
}

/**
 * Nombres de custom property que este theme va a emitir en el bloque raíz.
 * Se calcula antes de generar para poder comprobar las referencias `var()` de
 * las secciones extendidas contra lo que el propio theme define.
 */
function generatedTokens({ roles, gray, root }) {
  const names = new Set([
    '--bs-body-bg-rgb',
    '--bs-body-color-rgb',
    '--bs-border-color',
    '--bs-secondary-bg-rgb',
    '--bs-tertiary-bg-rgb',
    '--bs-body-font-family',
    '--bs-border-radius-2xl',
  ]);
  for (const suffix of Object.keys(RADIUS_FACTORS)) {
    names.add(suffix ? `--bs-border-radius-${suffix}` : '--bs-border-radius');
  }
  for (const step of FONT_SIZE_STEPS) names.add(`--bs-rfs-fs-${step}`);

  const touched = new Set(Object.keys(roles));
  if (gray) {
    names.add('--bs-gray-rgb');
    for (const step of GRAY_STEPS) names.add(`--bs-gray-${step}-rgb`);
    for (const role of Object.keys(GRAY_BACKED_ROLES)) touched.add(role);
  }
  for (const role of touched) {
    names.add(`--bs-${role}-rgb`);
    if (!RAMPED_ROLES.includes(role)) continue;
    names.add(`--bs-${role}-500-rgb`);
    for (const step of RAMP_STEPS) names.add(`--bs-${role}-${step}-rgb`);
  }
  for (const { name } of root) names.add(name);
  return names;
}

// -- Salida -----------------------------------------------------------------

const section = (title) => `\n  /* ${title} */`;
const decl = (name, value) => `  --bs-${name}: ${value};`;

/** Construye el CSS completo a partir de un theme ya normalizado. */
export function expandTheme(input) {
  const theme = readTheme(input);
  let lines = [];
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
    const rem = theme.typography.scale[step];
    const pair = rfsPair(rem);
    lines.push(decl(`rfs-fs-${step}`, pair.base));
    // Los pasos 1..4 se repiten en el breakpoint aunque el valor no sea fluido:
    // la librería los redeclara allí con su propio tamaño y, sin este bloque, en
    // desktop gana el suyo. Sólo los pasos 5 y 6 se libran, porque no los toca.
    if (pair.wide) {
      wide.push(decl(`rfs-fs-${step}`, pair.wide));
    } else if (RFS_MEDIA_STEPS.includes(step)) {
      wide.push(decl(`rfs-fs-${step}`, formatRem(rem)));
    }
  }

  // Radios, derivados del base con los múltiplos de 2.8.0.
  lines.push(section('Radios — derivados del radio base'));
  for (const [suffix, factor] of Object.entries(RADIUS_FACTORS)) {
    const name = suffix ? `border-radius-${suffix}` : 'border-radius';
    lines.push(decl(name, formatRem(theme.radius * factor)));
  }
  lines.push(decl('border-radius-2xl', 'var(--bs-border-radius-xxl)'));

  // Sección `root`. Una variable que repita alguna de las derivadas sustituye a
  // aquélla en su sitio en vez de volver a declararse al final: el resultado en
  // la cascada es el mismo, pero sin una declaración duplicada en el bloque.
  // Las que no chocan con nada van juntas al final.
  if (theme.root.length > 0) {
    const pending = new Map(theme.root.map((entry) => [entry.name, entry]));
    const overridden = [];

    lines = lines.map((line) => {
      const name = line.match(/^ {2}(--[\w-]+):/)?.[1];
      const entry = name && pending.get(name);
      if (!entry) return line;
      pending.delete(name);
      overridden.push(name);
      return `  ${name}: ${normalizeCssValue(entry.value)}; /* del theme, en vez de la derivada */`;
    });

    if (overridden.length > 0) {
      notes.push(
        `La sección \`root\` reemplaza ${overridden.length === 1 ? 'una variable derivada' : `${overridden.length} variables derivadas`}: ${overridden.join(', ')}.`,
      );
    }
    if (pending.size > 0) {
      lines.push(section('Variables propias del theme'));
      for (const { name, value } of pending.values()) {
        lines.push(`  ${name}: ${normalizeCssValue(value)};`);
      }
    }
  }

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

  // Componentes. Un bloque por selector, después del raíz y antes de las zonas:
  // así una zona puede pisar lo que el componente fija sin subir especificidad.
  const componentBlocks = theme.components.map(({ selector, vars, declarations }) => {
    // Las declaraciones se ordenan como las espera el stylelint del repo, y los
    // selectores de una lista van uno por línea por la misma razón.
    const ordered = [...declarations].sort(
      (a, b) => ALLOWED_DECLARATIONS.indexOf(a.property) - ALLOWED_DECLARATIONS.indexOf(b.property),
    );
    const body = [
      ...vars.map(({ name, value }) => `  ${name}: ${normalizeCssValue(value)};`),
      ...ordered.map(({ property, value }) => `  ${property}: ${normalizeCssValue(value)};`),
    ];
    const prelude = selector.split(',').map((part) => part.trim()).filter(Boolean).join(',\n');
    return `${prelude} {\n${body.join('\n')}\n}`;
  });

  // Zonas. Cada una es un subárbol con su propia paleta; `nav` se reparte en
  // dos bloques porque .nav y .nav-pills leen variables distintas y montar las
  // de pills sobre .nav no las alcanza.
  const zoneBlocks = theme.zones.flatMap(({ name, vars, nav }) => {
    const selector = zoneSelector(name);
    const emit = (entries) => entries
      .map((v) => `  ${v.name}: ${normalizeCssValue(v.value)};`)
      .join('\n');
    const blocks = [`${selector} {\n${emit(vars)}\n}`];
    if (nav?.link.length) blocks.push(`${selector} .nav {\n${emit(nav.link)}\n}`);
    if (nav?.pills.length) blocks.push(`${selector} .nav-pills {\n${emit(nav.pills)}\n}`);
    return blocks;
  });

  const extra = [
    componentBlocks.length > 0
      ? `\n/* Componentes — ${componentBlocks.length} selector(es). */\n${componentBlocks.join('\n\n')}`
      : '',
    zoneBlocks.length > 0
      ? `\n/* Zonas — subárboles con su propia paleta, montados con data-bs-theme. */\n${zoneBlocks.join('\n\n')}`
      : '',
  ].filter(Boolean).join('\n');

  return `${header}\n\n${root}\n${media}${extra ? `\n${extra}\n` : '\n'}`;
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
