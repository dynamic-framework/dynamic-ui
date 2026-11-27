/**
 * Tests de theme-expand / theme-validate.
 *
 * La disciplina de cada caso es la misma: se parte de un CSS que el validador
 * acepta, se reintroduce un error conocido y se comprueba que ahora falla con
 * la regla concreta. Si un caso pasara con el error reintroducido, la regla no
 * existiría.
 *
 * Los scripts son ESM (.mjs) y se ejercitan por CLI a propósito: así se valida
 * también el código de salida y el texto del mensaje, que es el contrato real.
 */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const ROOT = path.resolve(__dirname, '../..');
const EXPAND = path.join(ROOT, 'scripts/theme/theme-expand.mjs');
const VALIDATE = path.join(ROOT, 'scripts/theme/theme-validate.mjs');

let workdir: string;

beforeAll(() => {
  workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'dynamic-theme-'));
});

afterAll(() => {
  fs.rmSync(workdir, { recursive: true, force: true });
});

type Run = { status: number; stdout: string; stderr: string };

function run(script: string, args: string[]): Run {
  // spawnSync y no execFileSync: éste último sólo devuelve stdout cuando el
  // proceso sale con 0, y el validador escribe sus avisos en stderr sin fallar.
  // Con execFileSync un aviso era indistinguible de no haber dicho nada.
  const spawned = spawnSync('node', [script, ...args], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  return {
    status: spawned.status ?? 0,
    stdout: spawned.stdout ?? '',
    stderr: spawned.stderr ?? '',
  };
}

let fixtureCount = 0;

function write(contents: string, extension: string): string {
  fixtureCount += 1;
  const file = path.join(workdir, `fixture-${fixtureCount}${extension}`);
  fs.writeFileSync(file, contents, 'utf8');
  return file;
}

function expand(theme: unknown): Run {
  const input = write(JSON.stringify(theme), '.json');
  const output = input.replace(/\.json$/, '.css');
  return { ...run(EXPAND, [input, '-o', output]), stdout: output };
}

function expandCss(theme: unknown): string {
  const result = expand(theme);
  // El generador escribe las notas en stderr, así que un stderr no vacío sólo
  // es un fallo si trae algo que no sea el bloque de notas.
  if (result.stderr !== '') expect(result.stderr).toMatch(/^Notas de generación\n/);
  expect(result.status).toBe(0);
  return fs.readFileSync(result.stdout, 'utf8');
}

function validate(css: string): Run {
  return run(VALIDATE, [write(css, '.css')]);
}

/** Theme reducido mínimo cuyo CSS expandido el validador acepta. */
const MINIMAL_THEME = {
  roles: { primary: '#0b6b53' },
  body: { bg: '#f7f8fa', color: '#101828', borderColor: '#e4e7ec' },
  typography: { fontFamily: 'Inter, sans-serif', scale: { 1: '2.75rem' } },
  radius: '0.75rem',
};

describe('theme-expand', () => {
  it('expande un role a las 11 variables: el base y las 10 hojas', () => {
    const css = expandCss(MINIMAL_THEME);
    expect(css).toContain('--bs-primary-rgb: 11, 107, 83;');
    for (const step of [25, 50, 100, 200, 300, 400, 600, 700, 800, 900]) {
      expect(css).toMatch(new RegExp(`--bs-primary-${step}-rgb: \\d+, \\d+, \\d+;`));
    }
    expect(css).toContain('--bs-primary-500-rgb: var(--bs-primary-rgb);');
  });

  it('emite el selector de Dynamic y no usa :where()', () => {
    const css = expandCss(MINIMAL_THEME);
    expect(css).toContain(':root,\n[data-bs-theme="dynamic"] {');
    expect(css).not.toContain(':where(');
  });

  it('acompaña cada --bs-rfs-fs-N fluida con su override en 1200px', () => {
    const css = expandCss(MINIMAL_THEME);
    expect(css).toContain('--bs-rfs-fs-1: calc(1.4rem + 1.8vw);');
    expect(css).toMatch(/@media \(min-width: 1200px\) \{[\s\S]*--bs-rfs-fs-1: 2\.75rem;/);
    expect(css).not.toMatch(/--bs-fs-\d:/);
  });

  it('emite secondary-bg y tertiary-bg apuntando al triplete', () => {
    const css = expandCss(MINIMAL_THEME);
    expect(css).toContain('--bs-secondary-bg-rgb: var(--bs-gray-200-rgb);');
    expect(css).toContain('--bs-tertiary-bg-rgb: var(--bs-gray-100-rgb);');
  });

  it('reproduce la receta de tinte de Sass para la familia blue de 2.8.0', () => {
    // Valores tomados de dist/css/dynamic-ui.css para --bs-primary-*-rgb.
    const css = expandCss({ ...MINIMAL_THEME, roles: { primary: '#2068d5' } });
    for (const [step, triplet] of Object.entries({
      25: '244, 247, 253',
      50: '233, 240, 251',
      100: '210, 225, 247',
      200: '166, 195, 238',
      300: '121, 164, 230',
      400: '77, 134, 221',
      600: '26, 83, 170',
      700: '19, 62, 128',
      800: '13, 42, 85',
      900: '6, 21, 43',
    })) {
      expect(css).toContain(`--bs-primary-${step}-rgb: ${triplet};`);
    }
  });

  it.each([
    ['hsl()', 'hsl(174 100% 40%)', '0, 204, 184'],
    ['hsla()', 'hsla(174, 100%, 40%, 0.5)', '0, 204, 184'],
    ['oklch()', 'oklch(0.6 0.15 180)', '0, 156, 132'],
    ['lab()', 'lab(50% 40 30)', '187, 88, 70'],
  ])('convierte un role escrito en %s a su triplete sRGB', (_, color, triplet) => {
    const css = expandCss({ ...MINIMAL_THEME, roles: { primary: color } });
    expect(css).toContain(`--bs-primary-rgb: ${triplet};`);
    expect(css).not.toContain('NaN');
  });

  it.each([
    ['un role claro', '#ffe066', 'var(--bs-gray-700)'],
    ['un role oscuro', '#0b6b53', 'var(--bs-white)'],
    // Ni el blanco (4.24:1) ni gray-700 llegan a 4.5:1: gana el negro.
    ['un azul medio', '#0b74ff', 'var(--bs-black)'],
    // El ejemplo de DesignTokens.mdx: más oscuro, el blanco ya llega a 4.5:1.
    ['el azul del ejemplo de DesignTokens', '#0a6ae8', 'var(--bs-white)'],
  ])('resuelve el texto de .text-bg-<role> para %s', (_, color, expected) => {
    const css = expandCss({ ...MINIMAL_THEME, roles: { primary: color } });
    expect(css).toContain(`--bs-primary-text-bg-color: ${expected};`);
  });

  it('mide .text-bg-light y .text-bg-dark contra el role declarado, no contra su gris', () => {
    const css = expandCss({ ...MINIMAL_THEME, roles: { light: '#000000', dark: '#ffffff' } });
    const result = validate(css);
    expect(result.stderr).not.toContain('.text-bg-light');
    expect(result.stderr).not.toContain('.text-bg-dark');
  });

  it('no emite la variable de texto para secondary, que lee su rampa', () => {
    const css = expandCss({ ...MINIMAL_THEME, roles: { secondary: '#5b6670' } });
    expect(css).not.toContain('--bs-secondary-text-bg-color');
  });

  it('rechaza un theme sin familia tipográfica ni radio, diciendo qué falta', () => {
    const result = expand({ roles: { primary: '#0b6b53' }, body: { bg: '#fff', color: '#000' } });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('typography.fontFamily');
    expect(result.stderr).toContain('radius');
  });
});

describe('theme-validate acepta lo que theme-expand produce', () => {
  it('no encuentra errores en el CSS expandido', () => {
    const result = validate(expandCss(MINIMAL_THEME));
    expect(result.stderr).toBe('');
    expect(result.status).toBe(0);
  });

  it('no encuentra errores en la paleta por defecto de Dynamic 2.8.0', () => {
    // Guarda contra falsos positivos: el tema que la librería ya envía debe pasar.
    const css = expandCss({
      roles: {
        primary: '32, 104, 213',
        secondary: '43, 43, 52',
        success: '25, 135, 84',
        info: '32, 104, 213',
        warning: '255, 179, 0',
        danger: '220, 53, 69',
        light: '251, 251, 252',
        dark: '21, 21, 26',
      },
      body: { bg: '245, 246, 250', color: '21, 21, 26' },
      typography: {
        fontFamily: 'system-ui, sans-serif',
        scale: { 1: '3rem', 2: '2.5rem', 3: '2rem', 4: '1.5rem', 5: '1.25rem', 6: '1rem' },
      },
      radius: '0.5rem',
    });
    const result = validate(css);
    expect(result.status).toBe(0);
    // Ni errores ni avisos: desde #1190 ningún par por defecto queda bajo AA,
    // así que tampoco hay `contraste-preexistente` que atribuir a la librería.
    expect(result.stderr).toBe('');
  });

  it('usa como fallback los pares subtle que define la librería para light y dark', () => {
    // Los roles respaldados en gris no tienen rampa: su par subtle apunta a
    // pasos de gris en _colors.scss. Si SUBTLE_PAIRS se desfasa de ahí, el
    // validador mide un par que la librería ya no emite.
    const scss = fs.readFileSync(path.join(ROOT, 'src/style/abstracts/variables/_colors.scss'), 'utf8');
    const grayStep = (name: string) => {
      const match = scss.match(new RegExp(`^\\$${name}: var\\(--#\\{\\$prefix\\}gray-(\\d+)\\) !default;`, 'm'));
      expect(match).not.toBeNull();
      return Number(match?.[1]);
    };
    const loaded = spawnSync('node', [
      '--input-type=module',
      '-e',
      `import('${path.join(ROOT, 'scripts/theme/theme-tokens.mjs')}').then((m) => console.log(JSON.stringify(m.SUBTLE_PAIRS)))`,
    ], { encoding: 'utf8' });
    expect(loaded.status).toBe(0);
    const subtlePairs = JSON.parse(loaded.stdout);
    for (const role of ['light', 'dark']) {
      expect(subtlePairs[role]).toEqual({
        fg: { kind: 'gray', step: grayStep(`${role}-text-emphasis`) },
        bg: { kind: 'gray', step: grayStep(`${role}-bg-subtle`) },
      });
    }
  });

  it('valida el ejemplo canónico del repo', () => {
    const example = path.join(ROOT, 'examples/themes/theme-ejemplo.css');
    const result = run(VALIDATE, [example]);
    expect(result.stderr).not.toContain('error ');
    expect(result.status).toBe(0);
  });
});

describe('theme-validate rechaza los errores conocidos', () => {
  it('un hex sobre el wrapper --bs-primary', () => {
    const valid = expandCss(MINIMAL_THEME);
    expect(validate(valid).status).toBe(0);

    const broken = valid.replace(
      '--bs-primary-rgb: 11, 107, 83;',
      '--bs-primary-rgb: 11, 107, 83;\n  --bs-primary: #0b6b53;',
    );
    const result = validate(broken);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('[wrapper]');
    expect(result.stderr).toContain('--bs-primary-rgb con un triplete');
  });

  it('un hex sobre la propia variable -rgb', () => {
    const valid = expandCss(MINIMAL_THEME);
    const broken = valid.replace('--bs-primary-rgb: 11, 107, 83;', '--bs-primary-rgb: #0b6b53;');
    const result = validate(broken);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('[triplete]');
    expect(result.stderr).toContain('"R, G, B"');
  });

  it('un role con sólo el base, sin las 10 hojas', () => {
    const valid = expandCss(MINIMAL_THEME);
    expect(validate(valid).status).toBe(0);

    const broken = valid.replace(/\n\s*--bs-primary-(?!rgb)[\w-]+-rgb: [^;]+;/g, '');
    expect(broken).toContain('--bs-primary-rgb: 11, 107, 83;');
    const result = validate(broken);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('[rampa-incompleta]');
    expect(result.stderr).toContain('son 11 variables');
    expect(result.stderr).toContain('Faltan 10');
  });

  it('un theme sin --bs-body-bg-rgb', () => {
    const valid = expandCss(MINIMAL_THEME);
    expect(validate(valid).status).toBe(0);

    const broken = valid.replace(/\n\s*--bs-body-bg-rgb: [^;]+;/, '');
    const result = validate(broken);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('[superficie-faltante]');
    expect(result.stderr).toContain('--bs-body-bg-rgb');
  });

  it('una rampa cuya luminancia no es monótona', () => {
    const valid = expandCss(MINIMAL_THEME);
    expect(validate(valid).status).toBe(0);

    // El 300 pasa a ser más claro que el 200: la rampa deja de ir de claro a oscuro.
    const broken = valid.replace(/--bs-primary-300-rgb: [^;]+;/, '--bs-primary-300-rgb: 240, 250, 245;');
    const result = validate(broken);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('[monotonia]');
    expect(result.stderr).toContain('no es más oscuro');
  });

  it('secondary-bg apuntando al wrapper, que no es un triplete', () => {
    const valid = expandCss(MINIMAL_THEME);
    const broken = valid.replace(
      '--bs-secondary-bg-rgb: var(--bs-gray-200-rgb);',
      '--bs-secondary-bg-rgb: var(--bs-gray-200);',
    );
    const result = validate(broken);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('[triplete]');
    expect(result.stderr).toContain('--bs-secondary-bg-rgb');
  });

  it('un override envuelto en :where()', () => {
    const valid = expandCss(MINIMAL_THEME);
    const broken = valid.replace(
      ':root,\n[data-bs-theme="dynamic"] {',
      ':where(:root),\n:where([data-bs-theme="dynamic"]) {',
    );
    const result = validate(broken);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('[where]');
    expect(result.stderr).toContain('especificidad cero');
  });

  it('tipografía overrideada sobre --bs-fs-N en vez de --bs-rfs-fs-N', () => {
    const valid = expandCss(MINIMAL_THEME);
    const broken = valid.replace(
      '--bs-rfs-fs-1: calc(1.4rem + 1.8vw);',
      '--bs-fs-1: 2.75rem;',
    ).replace(/\n\s*--bs-rfs-fs-1: 2\.75rem;/, '');
    const result = validate(broken);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('[tipografia]');
    expect(result.stderr).toContain('--bs-rfs-fs-1');
  });

  it('una escala tipográfica sin su bloque de 1200px', () => {
    const valid = expandCss(MINIMAL_THEME);
    const broken = valid.replace(/@media \(min-width: 1200px\) \{[\s\S]*?\n\}/, '');
    const result = validate(broken);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('[tipografia-breakpoint]');
    expect(result.stderr).toContain('min-width: 1200px');
  });

  it.each([
    ['dvw', 'calc(1.4rem + 1.8dvw)'],
    ['mayúsculas', 'calc(1.4rem + 1.8VW)'],
    ['notación científica', 'calc(1.4rem + 1.8e0vw)'],
  ])(
    'una escala fluida con %s sin su bloque de 1200px',
    (_, fluid) => {
      const valid = expandCss(MINIMAL_THEME);
      const broken = valid
        .replace('--bs-rfs-fs-1: calc(1.4rem + 1.8vw);', `--bs-rfs-fs-1: ${fluid};`)
        .replace(/@media \(min-width: 1200px\) \{[\s\S]*?\n\}/, '');
      expect(broken).toContain(`--bs-rfs-fs-1: ${fluid};`);
      expect(validate(broken).stderr).toContain('[tipografia-breakpoint]');
    },
  );

  it('un paso 5 fluido sin su bloque de 1200px', () => {
    const valid = expandCss({
      ...MINIMAL_THEME,
      typography: { fontFamily: 'Inter, sans-serif', scale: { 5: '2rem' } },
    });
    const broken = valid.replace(/@media \(min-width: 1200px\) \{[\s\S]*?\n\}/, '');
    expect(broken).toMatch(/--bs-rfs-fs-5: calc\([^)]*vw\);/);
    const result = validate(broken);
    expect(result.stderr).toContain('[tipografia-breakpoint]');
    expect(result.stderr).toContain('--bs-rfs-fs-5');
  });

  it.each([
    ['una variable con nombre de unidad', 'var(--font-size-1vw)'],
    ['un fijo', '2.75rem'],
  ])('no confunde %s con un valor fluido', (_, value) => {
    const valid = expandCss(MINIMAL_THEME);
    const fixed = valid
      .replace('--bs-rfs-fs-1: calc(1.4rem + 1.8vw);', `--bs-rfs-fs-1: ${value};`)
      .replace(/@media \(min-width: 1200px\) \{[\s\S]*?\n\}/, '');
    expect(fixed).toContain(`--bs-rfs-fs-1: ${value};`);
    expect(validate(fixed).stderr).not.toContain('[tipografia-breakpoint]');
  });

  it('un tamaño fijo sin bloque de 1200px no exige el breakpoint', () => {
    const valid = expandCss({
      ...MINIMAL_THEME,
      typography: { fontFamily: 'Inter, sans-serif', scale: { 3: '1.25rem' } },
    });
    const fixed = valid.replace(/@media \(min-width: 1200px\) \{[\s\S]*?\n\}/, '');
    expect(fixed).toContain('--bs-rfs-fs-3: 1.25rem;');
    expect(fixed).not.toContain('min-width: 1200px');
    expect(validate(fixed).stderr).not.toContain('[tipografia-breakpoint]');
  });

  it('un role claro que no declara el texto de .text-bg-<role>', () => {
    const valid = expandCss({ ...MINIMAL_THEME, roles: { primary: '#ffe066' } });
    const broken = valid.replace(/\n\s*--bs-primary-text-bg-color: [^;]+;/, '');
    const result = validate(broken);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('".text-bg-primary"');
    expect(result.stderr).toContain('Declara --bs-primary-text-bg-color');
  });

  it('un role claro bajo el texto blanco que la librería hornea', () => {
    // El .btn-primary de Dynamic lleva color: var(--bs-white) resuelto en Sass;
    // un primary claro no lo recalcula, sólo baja el contraste.
    const css = expandCss({ ...MINIMAL_THEME, roles: { primary: '#ffe066' } });
    const result = validate(css);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('[contraste-horneado]');
    expect(result.stderr).toContain('.btn-primary');
    expect(result.stderr).toContain('--bs-white-rgb');
    expect(result.stderr).toContain('WCAG 2.x AA');
  });
});

/**
 * Theme mínimo con las tres secciones extendidas. Cada valor está elegido para
 * que el CSS resultante pase el validador: los casos de abajo lo rompen de una
 * forma cada vez y comprueban que la regla correspondiente lo atrapa.
 */
const SECTIONED_THEME = {
  ...MINIMAL_THEME,
  root: {
    '--bs-body-font-size': '.875rem',
    '--bs-heading-color': 'rgb(var(--bs-primary-rgb))',
  },
  components: [
    { selector: '.btn', vars: { '--bs-btn-font-weight': '700' } },
    { selector: '.font-numeric', declarations: { 'font-variant-numeric': 'tabular-nums' } },
  ],
  zones: {
    oscura: {
      vars: {
        '--bs-body-bg-rgb': '16, 24, 40',
        '--bs-body-color-rgb': 'var(--bs-white-rgb)',
        // Una zona oscura redefine también las superficies secundarias: las del
        // raíz son claras y el texto blanco de la zona no se lee sobre ellas.
        '--bs-secondary-bg-rgb': 'var(--bs-gray-800-rgb)',
        '--bs-tertiary-bg-rgb': 'var(--bs-gray-900-rgb)',
        '--bs-secondary-color-rgb': 'var(--bs-white-rgb)',
        '--bs-label-color': 'rgb(var(--bs-gray-100-rgb))',
        '--bs-link-color-rgb': 'var(--bs-primary-200-rgb)',
        '--bs-link-hover-color-rgb': 'var(--bs-primary-100-rgb)',
        '--bs-btn-outline-primary-color': 'rgb(var(--bs-primary-200-rgb))',
        '--bs-btn-outline-secondary-color': 'rgb(var(--bs-secondary-200-rgb))',
        '--bs-btn-outline-success-color': 'rgb(var(--bs-success-200-rgb))',
        '--bs-btn-outline-info-color': 'rgb(var(--bs-info-200-rgb))',
        '--bs-btn-outline-warning-color': 'rgb(var(--bs-warning-200-rgb))',
        '--bs-btn-outline-danger-color': 'rgb(var(--bs-danger-200-rgb))',
      },
      nav: {
        '--bs-nav-link-color': 'rgb(var(--bs-white-rgb))',
        '--bs-nav-pills-link-active-bg': 'rgb(var(--bs-primary-rgb))',
        '--bs-nav-pills-link-active-color': 'rgb(var(--bs-white-rgb))',
      },
      // Sin esto la lista se queda con el texto que la librería hornea, que
      // sobre el fondo de la zona no se lee. Es lo que comprueba el caso
      // «atrapa una lista que hereda el texto horneado…».
      components: [{
        selector: '.list-group',
        vars: {
          '--bs-list-group-color': 'rgb(var(--bs-body-color-rgb))',
          '--bs-list-group-action-color': 'rgb(var(--bs-body-color-rgb))',
          '--bs-list-group-bg': 'transparent',
        },
      }, {
        // La tarjeta pinta su propio fondo blanco: hay que bajarlo o el texto
        // claro de la zona cae encima.
        selector: '.card',
        vars: { '--bs-card-bg': 'rgb(var(--bs-body-bg-rgb))' },
      }, {
        // El campo conserva el blanco de la librería, así que aquí el texto
        // vuelve a ser oscuro.
        selector: '.form-control, .form-select',
        vars: { '--bs-body-color': 'rgb(var(--bs-gray-900-rgb))' },
      }, {
        selector: '.form-text',
        vars: { '--bs-gray-500': 'rgb(var(--bs-gray-300-rgb))' },
      }],
    },
  },
};

describe('theme-expand — sección root', () => {
  it('emite las variables tal cual, dentro del bloque raíz', () => {
    const css = expandCss(SECTIONED_THEME);
    const root = css.slice(css.indexOf(':root,'), css.indexOf('\n}'));
    expect(root).toContain('--bs-body-font-size: .875rem;');
    expect(root).toContain('--bs-heading-color: rgb(var(--bs-primary-rgb));');
  });

  it('sustituye la variable derivada en vez de declararla dos veces', () => {
    const css = expandCss({
      ...SECTIONED_THEME,
      root: { '--bs-border-radius': '0rem' },
    });
    // El valor del autor ocupa el sitio de la derivada, que desaparece: repetir
    // la declaración daría el mismo resultado en la cascada, pero el bloque
    // quedaría con una custom property duplicada.
    expect(css).toContain('--bs-border-radius: 0rem;');
    expect(css).not.toContain('--bs-border-radius: .75rem;');
    expect(css.match(/^ {2}--bs-border-radius:/gm)).toHaveLength(1);
  });

  it('avisa por la terminal de la variable derivada que reemplaza, no en el CSS', () => {
    const result = expand({
      ...SECTIONED_THEME,
      root: { '--bs-border-radius': '0rem' },
    });
    expect(result.status).toBe(0);
    expect(result.stderr).toContain('Notas de generación');
    expect(result.stderr).toContain('reemplaza una variable derivada');
    expect(result.stderr).toContain('--bs-border-radius');
    // El CSS entregado no dice nada de esto.
    expect(fs.readFileSync(result.stdout, 'utf8')).not.toContain('reemplaza');
  });

  it('normaliza los hex a minúscula, como pide el linter del repo', () => {
    const css = expandCss({
      ...SECTIONED_THEME,
      root: { '--bs-danger-text-emphasis': '#2B6CB0' },
    });
    expect(css).toContain('--bs-danger-text-emphasis: #2b6cb0;');
  });

  it('rechaza una clave que no empieza por --bs-', () => {
    const result = expand({ ...SECTIONED_THEME, root: { '--brand-shadow': '0 0 0 red' } });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('--brand-shadow');
    expect(result.stderr).toContain('empieza por --bs-');
  });

  it('rechaza una referencia a un token que no existe', () => {
    const result = expand({
      ...SECTIONED_THEME,
      root: { '--bs-heading-color': 'rgb(var(--bs-primary-1000-rgb))' },
    });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('--bs-primary-1000-rgb');
    expect(result.stderr).toContain('no existe');
  });

  it('acepta una referencia a un token que sólo existe en el CSS de Dynamic', () => {
    // --bs-gray-300-rgb no lo genera este theme, pero la librería sí lo define.
    const css = expandCss({
      ...SECTIONED_THEME,
      root: { '--bs-heading-color': 'rgb(var(--bs-gray-300-rgb))' },
    });
    expect(css).toContain('--bs-heading-color: rgb(var(--bs-gray-300-rgb));');
  });
});

describe('theme-expand — sección components', () => {
  it('emite un bloque por selector, con sus vars y sus declaraciones', () => {
    const css = expandCss(SECTIONED_THEME);
    expect(css).toContain('.btn {\n  --bs-btn-font-weight: 700;\n}');
    expect(css).toContain('.font-numeric {\n  font-variant-numeric: tabular-nums;\n}');
  });

  it('escribe una lista de selectores con uno por línea y ordena las propiedades', () => {
    // Las dos cosas las pide el stylelint del repo, que también pasa por este
    // CSS: selector-list-comma-newline-after y order/properties-order.
    const css = expandCss({
      ...SECTIONED_THEME,
      components: [{
        selector: '.form-control, .form-select',
        declarations: { 'border-radius': '.125rem', padding: '1rem', 'border-color': 'rgb(var(--bs-info-rgb))' },
      }],
    });
    expect(css).toContain('.form-control,\n.form-select {');
    expect(css).toContain('  padding: 1rem;\n  border-color: rgb(var(--bs-info-rgb));\n  border-radius: .125rem;');
  });

  it('los coloca después del bloque raíz y antes de las zonas', () => {
    const css = expandCss(SECTIONED_THEME);
    expect(css.indexOf('[data-bs-theme="dynamic"] {'))
      .toBeLessThan(css.indexOf('.btn {'));
    expect(css.indexOf('.btn {'))
      .toBeLessThan(css.indexOf('[data-bs-theme="oscura"]'));
  });

  it('rechaza una declaración que no está en la lista permitida, nombrándola', () => {
    const result = expand({
      ...SECTIONED_THEME,
      components: [{ selector: '.card', declarations: { 'box-shadow': '0 0 0 red' } }],
    });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('box-shadow');
    expect(result.stderr).toContain('no está permitida');
    expect(result.stderr).toContain('padding, font-family, font-variant-numeric, border-color, border-radius');
  });

  it('rechaza un bloque sin selector', () => {
    const result = expand({
      ...SECTIONED_THEME,
      components: [{ vars: { '--bs-btn-color': 'red' } }],
    });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('components[0].selector');
  });
});

describe('theme-expand — sección zones', () => {
  it('emite el bloque de la zona con sus variables', () => {
    const css = expandCss(SECTIONED_THEME);
    expect(css).toContain('[data-bs-theme="oscura"] {');
    expect(css).toContain('  --bs-body-bg-rgb: 16, 24, 40;');
    expect(css).toContain('  --bs-body-color-rgb: var(--bs-white-rgb);');
  });

  it('reparte `nav` entre .nav y .nav-pills según las claves presentes', () => {
    const css = expandCss(SECTIONED_THEME);
    expect(css).toContain('[data-bs-theme="oscura"] .nav {\n  --bs-nav-link-color: rgb(var(--bs-white-rgb));\n}');
    expect(css).toMatch(/\[data-bs-theme="oscura"\] \.nav-pills \{[^}]*--bs-nav-pills-link-active-bg/);
    // Sin variables de pill no se emite el bloque .nav-pills vacío.
    const navOnly = expandCss({
      ...SECTIONED_THEME,
      zones: {
        oscura: {
          ...SECTIONED_THEME.zones.oscura,
          nav: { '--bs-nav-link-color': 'rgb(var(--bs-white-rgb))' },
        },
      },
    });
    expect(navOnly).not.toContain('.nav-pills');
  });

  it('rechaza una variable de `nav` que no sea --bs-nav-*', () => {
    const result = expand({
      ...SECTIONED_THEME,
      zones: {
        oscura: {
          ...SECTIONED_THEME.zones.oscura,
          nav: { '--bs-body-bg-rgb': '0, 0, 0' },
        },
      },
    });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('sólo van variables --bs-nav-*');
  });
});

describe('theme-validate — un theme que sólo toca un role', () => {
  // El bloque de un role escrito a mano: el base, su texto de .text-bg-<role> y
  // las 10 hojas. Las superficies, la tipografía y los radios se quedan como
  // los define Dynamic.
  const ROLE_ONLY_CSS = [
    ':root,',
    '[data-bs-theme="dynamic"] {',
    '  --bs-primary-rgb: 22, 110, 98;',
    '  --bs-primary-text-bg-color: var(--bs-white);',
    '  --bs-primary-25-rgb: 243, 248, 247;',
    '  --bs-primary-50-rgb: 232, 241, 239;',
    '  --bs-primary-100-rgb: 208, 226, 224;',
    '  --bs-primary-200-rgb: 162, 197, 192;',
    '  --bs-primary-300-rgb: 115, 168, 161;',
    '  --bs-primary-400-rgb: 69, 139, 129;',
    '  --bs-primary-500-rgb: var(--bs-primary-rgb);',
    '  --bs-primary-600-rgb: 18, 88, 78;',
    '  --bs-primary-700-rgb: 13, 66, 59;',
    '  --bs-primary-800-rgb: 9, 44, 39;',
    '  --bs-primary-900-rgb: 4, 22, 20;',
    '}',
    '',
  ].join('\n');

  it('pasa sin errores aunque no declare secondary-bg ni tertiary-bg', () => {
    const result = validate(ROLE_ONLY_CSS);
    expect(result.stderr).not.toContain('error ');
    expect(result.stderr).not.toContain('[fix-bg]');
    expect(result.status).toBe(0);
  });

  it('anota una sola vez, sin avisar, que hereda las superficies de Dynamic', () => {
    const result = validate(ROLE_ONLY_CSS);
    expect(result.stderr).toBe('');
    const notes = result.stdout.match(/^nota .*\[superficie-heredada\]\n {2}(.*)$/gm);
    expect(result.stdout).not.toContain('[superficie-faltante]');
    expect(notes).toHaveLength(1);
    expect(result.stdout).toContain('El theme no declara superficies: se heredan de Dynamic');
    expect(result.status).toBe(0);
  });

  it('pasa también con --strict, que no cuenta las notas', () => {
    const result = run(VALIDATE, [write(ROLE_ONLY_CSS, '.css'), '--strict']);
    expect(result.stderr).toBe('');
    expect(result.status).toBe(0);
  });

  it('sigue exigiendo las superficies a un theme que toca --bs-body-*', () => {
    const broken = ROLE_ONLY_CSS.replace(
      '  --bs-primary-rgb',
      '  --bs-body-bg-rgb: 255, 255, 255;\n  --bs-primary-rgb',
    );
    const result = validate(broken);
    expect(result.status).toBe(1);
    expect(result.stderr).toMatch(/error .*\[superficie-faltante\]\n {2}Falta --bs-body-color-rgb/);
  });
});

describe('la familia tipográfica', () => {
  it('theme-expand la escribe en --bs-font-sans-serif, que leen también tooltips y popovers', () => {
    const css = expandCss({
      ...MINIMAL_THEME,
      typography: { fontFamily: '"Inter", sans-serif' },
    });
    expect(css).toContain('--bs-font-sans-serif: "Inter", sans-serif;');
    // --bs-body-font-family ya es un alias de --bs-font-sans-serif en el CSS de Dynamic.
    expect(css).not.toContain('--bs-body-font-family');
  });

  it('theme-validate avisa de un theme que sólo declara --bs-body-font-family', () => {
    const result = validate([
      ':root,',
      '[data-bs-theme="dynamic"] {',
      '  --bs-body-font-family: "Inter", sans-serif;',
      '}',
      '',
    ].join('\n'));
    expect(result.stderr).toMatch(/aviso .*\[tipografia-familia\]/);
    expect(result.stderr).toContain('tooltips y popovers');
    expect(result.status).toBe(0);
  });

  it('theme-validate calla cuando el theme declara también --bs-font-sans-serif', () => {
    const result = validate([
      ':root,',
      '[data-bs-theme="dynamic"] {',
      '  --bs-font-sans-serif: "Inter", sans-serif;',
      '  --bs-body-font-family: var(--bs-font-sans-serif);',
      '}',
      '',
    ].join('\n'));
    expect(result.stderr).not.toContain('[tipografia-familia]');
  });
});

describe('la familia tipográfica que referencia su propia variable', () => {
  it('no emite la familia cuando el theme pide conservar la de Dynamic', () => {
    for (const fontFamily of ['var(--bs-font-sans-serif)', 'var(--bs-body-font-family)']) {
      const css = expandCss({ ...MINIMAL_THEME, typography: { fontFamily } });
      expect(css).not.toMatch(/--bs-(?:font-sans-serif|body-font-family):/);
      expect(css).not.toContain('/* Tipografía */');
      const result = run(VALIDATE, [write(css, '.css'), '--strict']);
      expect(result.stderr).toBe('');
      expect(result.status).toBe(0);
    }
  });

  it('rechaza una familia compuesta que referencia --bs-font-sans-serif', () => {
    const result = expand({ ...MINIMAL_THEME, typography: { fontFamily: '"Inter", var(--bs-font-sans-serif)' } });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('`typography.fontFamily`');
    expect(result.stderr).toContain('se referenciaría a sí misma');
  });

  it('theme-validate da error de ciclo en el CSS que generaba el caso exacto', () => {
    // Lo que producía develop con #1288 para "fontFamily": "var(--bs-font-sans-serif)".
    const css = expandCss(MINIMAL_THEME).replace(
      '--bs-font-sans-serif: Inter, sans-serif;',
      '--bs-font-sans-serif: var(--bs-font-sans-serif);',
    );
    expect(css).toContain('--bs-font-sans-serif: var(--bs-font-sans-serif);');
    const result = run(VALIDATE, [write(css, '.css'), '--strict']);
    expect(result.stderr).toMatch(/error .*\[ciclo\]\n {2}--bs-font-sans-serif: "var\(--bs-font-sans-serif\)" se referencia a sí misma/);
    expect(result.status).toBe(1);
  });

  it('theme-validate da error de ciclo también dentro de una zona', () => {
    const css = `${expandCss(MINIMAL_THEME)}\n[data-bs-theme="oscura"] {\n  --bs-link-color-rgb: var(--bs-link-color-rgb);\n}\n`;
    const result = validate(css);
    expect(result.stderr).toContain('--bs-link-color-rgb dentro de [data-bs-theme="oscura"]');
    expect(result.stderr).toContain('[ciclo]');
    expect(result.status).toBe(1);
  });
});

describe('theme-validate — contraste de las superficies secundarias', () => {
  it('avisa cuando secondary-bg no contrasta con el texto del cuerpo', () => {
    const valid = expandCss(MINIMAL_THEME);
    // El mismo triplete que body.color: un triplete válido, ilegible debajo del texto.
    const broken = valid.replace(
      '--bs-secondary-bg-rgb: var(--bs-gray-200-rgb);',
      '--bs-secondary-bg-rgb: 16, 24, 40;',
    );
    const result = validate(broken);
    expect(result.stderr).toContain('[contraste-superficie]');
    expect(result.stderr).toContain('--bs-secondary-bg-rgb');
    expect(result.stderr).not.toContain('error ');
    expect(result.status).toBe(0);
  });

  it('mide contra el color de cuerpo de Dynamic cuando el theme no lo declara', () => {
    // gray-900 de Dynamic sobre sí mismo: 1:1, sin --bs-body-color-rgb en el theme.
    const result = validate([
      ':root,',
      '[data-bs-theme="dynamic"] {',
      '  --bs-secondary-bg-rgb: var(--bs-gray-900-rgb);',
      '}',
      '',
    ].join('\n'));
    expect(result.stderr).toMatch(/aviso .*\[contraste-superficie\]/);
    expect(result.stderr).toContain('el de Dynamic, porque el theme no lo declara');
    expect(result.status).toBe(0);
  });

  it('calla con los valores que emite theme-expand', () => {
    const result = validate(expandCss(MINIMAL_THEME));
    expect(result.stderr).not.toContain('[contraste-superficie]');
  });

  it('mide una zona que sólo redefine secondary-bg, y --strict lo cuenta', () => {
    // El raíz está bien; la zona pone el fondo del mismo color que el texto del cuerpo.
    const css = `${expandCss(MINIMAL_THEME)}\n[data-bs-theme="oscura"] {\n  --bs-secondary-bg-rgb: 16, 24, 40;\n}\n`;
    const result = validate(css);
    expect(result.stderr).toMatch(
      /aviso .*\[contraste-superficie\]\n {2}--bs-secondary-bg-rgb dentro de \[data-bs-theme="oscura"\]: 1\.00:1/,
    );
    expect(result.stderr).not.toContain('error ');
    expect(result.status).toBe(0);

    const strict = run(VALIDATE, [write(css, '.css'), '--strict']);
    expect(strict.stderr).toContain('[contraste-superficie]');
    expect(strict.status).toBe(1);
  });

  it('mide una zona que sólo cambia el texto del cuerpo sobre el fondo del raíz', () => {
    const css = `${expandCss(MINIMAL_THEME)}\n[data-bs-theme="oscura"] {\n  --bs-body-bg-rgb: 16, 24, 40;\n  --bs-body-color-rgb: 240, 242, 245;\n}\n`;
    const result = validate(css);
    expect(result.stderr).toContain('--bs-secondary-bg-rgb dentro de [data-bs-theme="oscura"]');
    expect(result.stderr).toContain('--bs-tertiary-bg-rgb dentro de [data-bs-theme="oscura"]');
  });

  it('mide en la zona el alias que hereda del raíz, no el que resolvería con la zona', () => {
    // El raíz declara secondary-bg como alias de su fondo blanco. En la zona el
    // alias llega ya calculado (blanco), y la zona pone texto blanco: 1:1.
    const valid = expandCss(MINIMAL_THEME)
      .replace('--bs-body-bg-rgb: 247, 248, 250;', '--bs-body-bg-rgb: 255, 255, 255;')
      .replace('--bs-secondary-bg-rgb: var(--bs-gray-200-rgb);', '--bs-secondary-bg-rgb: var(--bs-body-bg-rgb);');
    const css = `${valid}\n[data-bs-theme="oscura"] {\n  --bs-body-bg-rgb: 0, 0, 0;\n  --bs-body-color-rgb: 255, 255, 255;\n}\n`;
    const result = run(VALIDATE, [write(css, '.css'), '--strict']);
    expect(result.stderr).toMatch(
      /\[contraste-superficie\]\n {2}--bs-secondary-bg-rgb dentro de \[data-bs-theme="oscura"\]: 1\.00:1/,
    );
    expect(result.status).toBe(1);
  });

  it('no avisa por un texto del raíz que la zona sólo cambiaría a través de un token', () => {
    // El texto del raíz apunta a gray-900. La zona cambia gray-900, pero el
    // texto ya llegó calculado: sigue oscuro sobre el fondo claro de la zona.
    // Las demás reglas de zona lo resuelven igual: sólo quedan los avisos de
    // los wrappers que la zona omite a propósito.
    const valid = expandCss(MINIMAL_THEME)
      .replace('--bs-body-color-rgb: 16, 24, 40;', '--bs-body-color-rgb: var(--bs-gray-900-rgb);');
    const css = `${valid}\n[data-bs-theme="clara"] {\n  --bs-gray-900-rgb: 250, 250, 250;\n  --bs-secondary-bg-rgb: 235, 235, 235;\n}\n`;
    const result = run(VALIDATE, [write(css, '.css'), '--strict']);
    expect(result.stderr).not.toContain('[contraste-superficie]');
    expect(findings(result)).toEqual([]);
    expect(missingWrappers(result)).toEqual(['--bs-gray-900-rgb', '--bs-secondary-bg-rgb']);
  });

  it('funde las reglas repetidas de una misma zona antes de medir', () => {
    // Por separado, cada regla de la zona contrasta con el otro valor del raíz;
    // juntas, que es como las aplica el navegador, el par es 1:1.
    const valid = expandCss(MINIMAL_THEME)
      .replace('--bs-body-color-rgb: 16, 24, 40;', '--bs-body-color-rgb: 0, 0, 0;')
      .replace('--bs-secondary-bg-rgb: var(--bs-gray-200-rgb);', '--bs-secondary-bg-rgb: 255, 255, 255;');
    const css = `${valid}\n[data-bs-theme="oscura"] {\n  --bs-secondary-bg-rgb: 118, 118, 118;\n}\n`
      + '\n[data-bs-theme="oscura"] {\n  --bs-body-color-rgb: 118, 118, 118;\n}\n';
    expect(validate(css).stderr).toMatch(
      /\[contraste-superficie\]\n {2}--bs-secondary-bg-rgb dentro de \[data-bs-theme="oscura"\]: 1\.00:1/,
    );
  });

  it('avisa como irresoluble la superficie que no sabe resolver, en vez de saltarla', () => {
    // var() a una variable que no existe y sin respaldo: el navegador no pinta nada.
    const css = `${expandCss(MINIMAL_THEME)}\n[data-bs-theme="oscura"] {\n  --bs-secondary-bg-rgb: var(--bs-optional-rgb);\n}\n`;
    const result = validate(css);
    expect(result.stderr).toMatch(/aviso .*\[contraste-irresoluble\]\n {2}No se pudo medir --bs-secondary-bg-rgb dentro de \[data-bs-theme="oscura"\]/);
    expect(result.stderr).toContain('--bs-optional-rgb');
    expect(result.status).toBe(0);
  });

  it('mide la superficie con el respaldo de var() cuando la variable no existe', () => {
    // El navegador usa el respaldo: el mismo color que el texto del cuerpo, 1:1.
    const css = `${expandCss(MINIMAL_THEME)}\n[data-bs-theme="oscura"] {\n  --bs-secondary-bg-rgb: var(--bs-optional-rgb, 16, 24, 40);\n}\n`;
    const result = validate(css);
    expect(result.stderr).toMatch(
      /aviso .*\[contraste-superficie\]\n {2}--bs-secondary-bg-rgb dentro de \[data-bs-theme="oscura"\]: 1\.00:1/,
    );
    expect(result.stderr).not.toContain('[contraste-irresoluble]');
    expect(result.status).toBe(0);
  });

  it('rechaza una superficie de zona que no es triplete, también con --strict', () => {
    const css = `${expandCss(MINIMAL_THEME)}\n[data-bs-theme="oscura"] {\n  --bs-secondary-bg-rgb: var(--bs-gray-200);\n}\n`;
    const result = run(VALIDATE, [write(css, '.css'), '--strict']);
    expect(result.stderr).toMatch(
      /error .*\[triplete\]\n {2}--bs-secondary-bg-rgb dentro de \[data-bs-theme="oscura"\]: "var\(--bs-gray-200\)"/,
    );
    // Una sola vez: la reporta R1 en la zona y contraste-superficie no la repite.
    expect(result.stderr.match(/\[triplete\]/g)).toHaveLength(1);
    expect(result.status).toBe(1);
  });

  it('no repite en una zona que no toca el fondo ni el texto el aviso del raíz', () => {
    const valid = expandCss(MINIMAL_THEME).replace(
      '--bs-secondary-bg-rgb: var(--bs-gray-200-rgb);',
      '--bs-secondary-bg-rgb: 16, 24, 40;',
    );
    const css = `${valid}\n[data-bs-theme="oscura"] {\n  --bs-link-color-rgb: 11, 107, 83;\n}\n`;
    const warnings = validate(css).stderr.match(/\[contraste-superficie\]/g);
    expect(warnings).toHaveLength(1);
  });
});

describe('theme-validate — reglas de las secciones extendidas', () => {
  it('acepta el CSS de un theme con las tres secciones', () => {
    const result = validate(expandCss(SECTIONED_THEME));
    expect(result.stderr).toBe('');
    expect(result.status).toBe(0);
  });

  it('atrapa un botón cuyo texto no contrasta con el fondo de su role', () => {
    const css = expandCss({
      ...SECTIONED_THEME,
      components: [
        { selector: '.btn-primary', vars: { '--bs-btn-color': 'rgb(var(--bs-primary-600-rgb))' } },
      ],
    });
    const result = validate(css);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('[contraste-boton]');
    expect(result.stderr).toContain('.btn-primary');
    expect(result.stderr).toContain('WCAG 2.x AA');
  });

  it('atrapa un pill activo ilegible sobre su propio fondo', () => {
    const css = expandCss({
      ...SECTIONED_THEME,
      components: [
        {
          selector: '.nav-pills',
          vars: {
            '--bs-nav-pills-link-active-bg': 'rgb(var(--bs-primary-rgb))',
            '--bs-nav-pills-link-active-color': 'rgb(var(--bs-primary-400-rgb))',
          },
        },
      ],
    });
    const result = validate(css);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('[contraste-nav-pills]');
  });

  it('atrapa una zona cuyo texto es ilegible sobre su fondo', () => {
    const css = expandCss({
      ...SECTIONED_THEME,
      zones: {
        oscura: {
          vars: { '--bs-body-bg-rgb': '16, 24, 40', '--bs-body-color-rgb': '40, 44, 52' },
        },
      },
    });
    const result = validate(css);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('[contraste-zona]');
    expect(result.stderr).toContain('oscura');
  });

  it('avisa, sin fallar, de un enlace de zona entre 3:1 y 4.5:1', () => {
    const css = expandCss({
      ...SECTIONED_THEME,
      zones: {
        oscura: {
          ...SECTIONED_THEME.zones.oscura,
          vars: {
            // El resto de la zona se conserva: lo que este caso mueve es sólo
            // el enlace, hasta dejarlo en la franja de 3:1 a 4.5:1.
            ...SECTIONED_THEME.zones.oscura.vars,
            '--bs-body-bg-rgb': '16, 24, 40',
            '--bs-body-color-rgb': 'var(--bs-white-rgb)',
            '--bs-link-color-rgb': '74, 111, 165',
          },
        },
      },
    });
    const result = validate(css);
    expect(result.status).toBe(0);
    expect(result.stderr).toContain('[contraste-enlace-zona]');
    expect(result.stderr).toContain('3:1');
    expect(result.stderr).not.toContain('error ');
  });

  it('mide cada zona contra su propio fondo, no contra el del bloque raíz', () => {
    // El texto blanco de la zona sería ilegible sobre el fondo claro del raíz;
    // si el validador mezclara los dos contextos, esto fallaría.
    const result = validate(expandCss(SECTIONED_THEME));
    expect(result.status).toBe(0);
  });

  it('mide un componente global también dentro de cada zona', () => {
    // El botón se declara una sola vez y su texto sigue a --bs-body-color-rgb.
    // En la zona ese token vale blanco, así que el mismo bloque produce un par
    // legible fuera y uno ilegible dentro: el caso que se escapa leyendo el CSS
    // de arriba abajo.
    const css = expandCss({
      ...SECTIONED_THEME,
      roles: { primary: '#7fd4d0' },
      components: [
        // El hover del botón sólido lo pinta la librería (primary-600 con
        // texto blanco): con este primary claro no llega a AA, así que el
        // bloque fija también ese estado y deja en pie sólo el par de reposo,
        // que es lo que mide este caso.
        {
          selector: '.btn-primary',
          vars: {
            '--bs-btn-color': 'rgb(var(--bs-body-color-rgb))',
            '--bs-btn-hover-color': 'rgb(var(--bs-dark-rgb))',
          },
        },
      ],
      zones: {
        oscura: {
          vars: {
            '--bs-body-bg-rgb': '32, 44, 62',
            '--bs-body-color-rgb': 'var(--bs-white-rgb)',
          },
        },
      },
    });
    const result = validate(css);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('[contraste-boton]');
    expect(result.stderr).toContain('dentro de [data-bs-theme="oscura"]');
    // Y el mismo botón fuera de la zona no se reporta: ahí el par sí contrasta.
    expect(result.stderr).not.toMatch(/"\.btn-primary":/);
  });

  it('no mide el bloque global en una zona que ya tiene el suyo propio', () => {
    const css = expandCss({
      ...SECTIONED_THEME,
      roles: { primary: '#7fd4d0' },
      components: [
        // El hover del botón sólido lo pinta la librería (primary-600 con
        // texto blanco): con este primary claro no llega a AA, así que el
        // bloque fija también ese estado y deja en pie sólo el par de reposo,
        // que es lo que mide este caso.
        {
          selector: '.btn-primary',
          vars: {
            '--bs-btn-color': 'rgb(var(--bs-body-color-rgb))',
            '--bs-btn-hover-color': 'rgb(var(--bs-dark-rgb))',
          },
        },
      ],
      zones: {
        oscura: {
          vars: {
            '--bs-body-bg-rgb': '32, 44, 62',
            '--bs-body-color-rgb': 'var(--bs-white-rgb)',
          },
        },
      },
    });
    expect(validate(css).status).toBe(1);

    // Con un bloque propio para la zona, que fija un texto legible, calla.
    const patched = css.replace(
      /$/,
      '\n[data-bs-theme="oscura"] .btn-primary {\n  --bs-btn-color: rgb(var(--bs-dark-rgb));\n}\n',
    );
    const result = validate(patched);
    expect(result.stderr).not.toContain('[contraste-boton]');
  });

  it('anota como literal un color escrito a mano en un componente', () => {
    const css = expandCss({
      ...SECTIONED_THEME,
      components: [{ selector: '.btn-primary', vars: { '--bs-btn-color': '#ffffff' } }],
    });
    const result = validate(css);
    expect(result.stdout).toContain('[literal]');
    expect(result.stdout).toContain('#ffffff');
  });
});

describe('theme-expand — el wrapper de cada triplete fuera del raíz', () => {
  /** El bloque `[data-bs-theme="oscura"]` de un theme con esa zona, sin la llave. */
  const zoneBlock = (vars: Record<string, string>) => {
    const css = expandCss({ ...MINIMAL_THEME, zones: { oscura: { vars } } });
    const start = css.indexOf('[data-bs-theme="oscura"] {\n') + '[data-bs-theme="oscura"] {\n'.length;
    return css.slice(start, css.indexOf('\n}', start)).split('\n');
  };

  it('emite --bs-secondary-bg justo después de --bs-secondary-bg-rgb', () => {
    expect(zoneBlock({
      '--bs-secondary-bg-rgb': 'var(--bs-gray-800-rgb)',
      '--bs-heading-color': 'rgb(var(--bs-white-rgb))',
    })).toEqual([
      '  --bs-secondary-bg-rgb: var(--bs-gray-800-rgb);',
      '  --bs-secondary-bg: rgb(var(--bs-secondary-bg-rgb));',
      '  --bs-heading-color: rgb(var(--bs-white-rgb));',
    ]);
  });

  it('emite --bs-link-color cuando la zona redefine --bs-link-color-rgb', () => {
    expect(zoneBlock({ '--bs-link-color-rgb': 'var(--bs-primary-300-rgb)' })).toEqual([
      '  --bs-link-color-rgb: var(--bs-primary-300-rgb);',
      '  --bs-link-color: rgb(var(--bs-link-color-rgb));',
    ]);
  });

  it('emite con su alfa los wrappers que la librería define con rgba()', () => {
    expect(zoneBlock({ '--bs-secondary-color-rgb': 'var(--bs-white-rgb)' })).toEqual([
      '  --bs-secondary-color-rgb: var(--bs-white-rgb);',
      '  --bs-secondary-color: rgba(var(--bs-secondary-color-rgb), .75);',
    ]);
  });

  it('no añade nada a una zona que no redefine ningún triplete con wrapper', () => {
    // Ni `--bs-heading-color` ni `--bs-border-color` tienen triplete en la
    // librería: no hay wrapper que emitir.
    const vars = {
      '--bs-heading-color': 'rgb(var(--bs-white-rgb))',
      '--bs-border-color': 'rgba(var(--bs-white-rgb), .15)',
    };
    expect(zoneBlock(vars)).toEqual([
      '  --bs-heading-color: rgb(var(--bs-white-rgb));',
      '  --bs-border-color: rgba(var(--bs-white-rgb), .15);',
    ]);
  });

  it('respeta el wrapper que la zona ya declara, esté donde esté', () => {
    expect(zoneBlock({
      '--bs-secondary-bg': 'rgb(var(--bs-gray-700-rgb))',
      '--bs-secondary-bg-rgb': 'var(--bs-gray-800-rgb)',
    })).toEqual([
      '  --bs-secondary-bg: rgb(var(--bs-gray-700-rgb));',
      '  --bs-secondary-bg-rgb: var(--bs-gray-800-rgb);',
    ]);
  });

  it('no emite wrapper para un triplete que vuelve al del padre', () => {
    // El wrapper heredado ya es el que corresponde; uno nuevo pisaría el que la
    // zona declara con su propio alfa.
    const css = expandCss({
      ...MINIMAL_THEME,
      zones: {
        oscura: {
          vars: {
            '--bs-secondary-color': 'rgba(var(--bs-white-rgb), .2)',
            '--bs-tertiary-bg-rgb': 'unset',
          },
          components: [{ selector: '.card', vars: { '--bs-secondary-color-rgb': 'inherit' } }],
        },
      },
    });
    expect(css).toContain('[data-bs-theme="oscura"] .card {\n  --bs-secondary-color-rgb: inherit;\n}');
    expect(css).not.toContain('--bs-tertiary-bg:');
  });

  it('emite el wrapper también en los bloques de componente, de la zona y globales', () => {
    const css = expandCss({
      ...MINIMAL_THEME,
      components: [{ selector: '.card', vars: { '--bs-body-color-rgb': 'var(--bs-gray-700-rgb)' } }],
      zones: {
        oscura: {
          vars: { '--bs-body-bg-rgb': '16, 24, 40' },
          components: [{ selector: '.form-control', vars: { '--bs-body-color-rgb': 'var(--bs-dark-rgb)' } }],
        },
      },
    });
    expect(css).toContain(
      '.card {\n  --bs-body-color-rgb: var(--bs-gray-700-rgb);\n  --bs-body-color: rgb(var(--bs-body-color-rgb));\n}',
    );
    expect(css).toContain(
      '[data-bs-theme="oscura"] .form-control {\n  --bs-body-color-rgb: var(--bs-dark-rgb);\n'
      + '  --bs-body-color: rgb(var(--bs-body-color-rgb));\n}',
    );
  });
});

describe('theme-validate — wrapper-faltante-zona', () => {
  const base = () => expandCss(MINIMAL_THEME);
  const zoneRule = (body: string, selector = '[data-bs-theme="oscura"]') => `\n${selector} {\n${body}\n}\n`;
  const noticeCount = (css: string) => validate(css).stderr.match(/\[wrapper-faltante-zona\]/g)?.length ?? 0;

  it('avisa de un triplete de zona sin su wrapper, y --strict lo cuenta', () => {
    const css = base() + zoneRule([
      '  --bs-secondary-bg-rgb: var(--bs-gray-100-rgb);',
      '  --bs-link-color-rgb: var(--bs-primary-700-rgb);',
    ].join('\n'));
    const result = validate(css);
    expect(result.status).toBe(0);
    expect(noticeCount(css)).toBe(2);
    expect(result.stderr).toContain(
      '--bs-secondary-bg-rgb dentro de [data-bs-theme="oscura"]: se redefine sin --bs-secondary-bg.',
    );
    expect(result.stderr).toContain('los componentes que leen var(--bs-link-color) conservan aquí el valor del raíz');
    expect(run(VALIDATE, [write(css, '.css'), '--strict']).status).toBe(1);
  });

  it('calla con la misma zona generada por theme-expand', () => {
    const css = expandCss({
      ...MINIMAL_THEME,
      zones: {
        oscura: {
          vars: {
            '--bs-secondary-bg-rgb': 'var(--bs-gray-100-rgb)',
            '--bs-link-color-rgb': 'var(--bs-primary-700-rgb)',
          },
        },
      },
    });
    expect(noticeCount(css)).toBe(0);
  });

  it('reconoce el wrapper declarado en otra regla de la misma zona', () => {
    const css = base()
      + zoneRule('  --bs-secondary-bg-rgb: var(--bs-gray-800-rgb);')
      + zoneRule('  --bs-secondary-bg: rgb(var(--bs-secondary-bg-rgb));');
    expect(noticeCount(css)).toBe(0);
  });

  it('no repite lo que R1 ya rechaza ni avisa de un triplete que vuelve al del padre', () => {
    const css = base() + zoneRule([
      '  --bs-secondary-bg-rgb: #333;',
      '  --bs-tertiary-bg-rgb: inherit;',
    ].join('\n'));
    const result = validate(css);
    expect(result.stderr).toContain('[triplete]');
    expect(noticeCount(css)).toBe(0);
  });

  it('funde las reglas de componente con el mismo selector', () => {
    const css = base()
      + zoneRule('  --bs-body-color-rgb: var(--bs-gray-700-rgb);', '[data-bs-theme="oscura"] .card')
      + zoneRule('  --bs-body-color: rgb(var(--bs-body-color-rgb));', '[data-bs-theme="oscura"]  .card');
    expect(noticeCount(css)).toBe(0);
  });

  it('revisa cada alternativa de una lista de selectores por separado', () => {
    const css = base()
      + zoneRule('  --bs-secondary-bg-rgb: 10, 20, 30;', '[data-bs-theme="oscura"] .card,\n[data-bs-theme="oscura"] .modal')
      + zoneRule('  --bs-secondary-bg: rgb(var(--bs-secondary-bg-rgb));', '[data-bs-theme="oscura"] .card')
      + zoneRule('  --bs-secondary-bg: rgb(var(--bs-secondary-bg-rgb));', '[data-bs-theme="oscura"] .modal');
    expect(noticeCount(css)).toBe(0);
    // Sin el de .modal, sólo falta el suyo.
    const withoutModal = base()
      + zoneRule('  --bs-secondary-bg-rgb: 10, 20, 30;', '[data-bs-theme="oscura"] .card,\n[data-bs-theme="oscura"] .modal')
      + zoneRule('  --bs-secondary-bg: rgb(var(--bs-secondary-bg-rgb));', '[data-bs-theme="oscura"] .card');
    expect(noticeCount(withoutModal)).toBe(1);
    expect(validate(withoutModal).stderr).toContain('en "[data-bs-theme="oscura"] .modal": se redefine sin --bs-secondary-bg.');
  });

  it('cuenta el wrapper de un bloque raíz con más alternativas', () => {
    const css = base()
      + zoneRule('  --bs-secondary-bg: rgb(var(--bs-secondary-bg-rgb));', ':root,\n.card')
      + zoneRule('  --bs-secondary-bg-rgb: 10, 20, 30;', '[data-bs-theme="oscura"] .card');
    expect(noticeCount(css)).toBe(0);
  });

  it('cuenta el wrapper de una regla global sobre el mismo componente', () => {
    // Las dos reglas caen sobre la propia .card: el wrapper global se calcula
    // allí con el triplete de la zona.
    const css = base()
      + zoneRule('  --bs-secondary-bg: rgb(var(--bs-secondary-bg-rgb));', '.card')
      + zoneRule('  --bs-secondary-bg-rgb: 10, 20, 30;', '[data-bs-theme="oscura"] .card');
    expect(noticeCount(css)).toBe(0);
  });

  it('exige el wrapper en el propio bloque de componente de la zona', () => {
    // El wrapper de la zona se calcula con el triplete de la zona, no con el
    // que el componente redefine debajo.
    const css = base()
      + zoneRule('  --bs-body-color-rgb: var(--bs-white-rgb);\n  --bs-body-color: rgb(var(--bs-body-color-rgb));')
      + zoneRule('  --bs-body-color-rgb: var(--bs-dark-rgb);', '[data-bs-theme="oscura"] .form-control');
    const result = validate(css);
    expect(noticeCount(css)).toBe(1);
    expect(result.stderr).toContain(
      '--bs-body-color-rgb en "[data-bs-theme="oscura"] .form-control": se redefine sin --bs-body-color.',
    );
  });
});

describe('componentes propios de una zona', () => {
  it('emite el bloque con el selector de la zona por delante', () => {
    const css = expandCss({
      ...SECTIONED_THEME,
      zones: {
        oscura: {
          ...SECTIONED_THEME.zones.oscura,
          components: [
            ...SECTIONED_THEME.zones.oscura.components,
            { selector: '.btn-primary', vars: { '--bs-btn-color': 'rgb(var(--bs-dark-rgb))' } },
            { selector: '.form-control, .form-select', declarations: { padding: '1rem' } },
          ],
        },
      },
    });
    expect(css).toContain('[data-bs-theme="oscura"] .btn-primary {\n  --bs-btn-color: rgb(var(--bs-dark-rgb));\n}');
    // Una lista de selectores se prefija entera, no sólo el primero.
    expect(css).toContain('[data-bs-theme="oscura"] .form-control,\n[data-bs-theme="oscura"] .form-select {');
  });

  it('pinta la zona cuando ésta se da su propio cuerpo', () => {
    // Las variables solas no bastan: `--bs-body-bg` y `--bs-body-color` las
    // aplica la librería sobre `body`, y un subárbol a media página nunca pasa
    // por esa regla.
    const css = expandCss({
      ...SECTIONED_THEME,
      zones: {
        oscura: {
          ...SECTIONED_THEME.zones.oscura,
          vars: {
            '--bs-body-bg-rgb': '32, 44, 62',
            '--bs-body-color-rgb': 'var(--bs-white-rgb)',
            '--bs-body-bg': 'rgb(var(--bs-dark-rgb))',
            '--bs-body-color': 'rgb(var(--bs-white-rgb))',
          },
        },
      },
    });
    expect(css).toContain('  color: var(--bs-body-color);\n  background-color: var(--bs-body-bg);\n}');
  });

  it('pinta la zona cuando sólo redefine los tripletes del cuerpo', () => {
    // El generador emite los wrappers del cuerpo junto a sus tripletes, y con
    // ellos la zona ya tiene colores que aplicar.
    const css = expandCss(SECTIONED_THEME);
    const zoneBlockText = css.slice(css.indexOf('[data-bs-theme="oscura"] {'));
    expect(zoneBlockText.slice(0, zoneBlockText.indexOf('}')))
      .toContain('  color: var(--bs-body-color);\n  background-color: var(--bs-body-bg);\n');
  });

  it('no pinta nada si la zona no toca el cuerpo', () => {
    const css = expandCss({
      ...SECTIONED_THEME,
      zones: { oscura: { vars: { '--bs-secondary-bg-rgb': 'var(--bs-gray-800-rgb)' } } },
    });
    const zoneBlockText = css.slice(css.indexOf('[data-bs-theme="oscura"] {'));
    expect(zoneBlockText.slice(0, zoneBlockText.indexOf('}'))).not.toMatch(/^\s*(?:background-)?color:/m);
  });

  it('los emite después de las variables y del nav de la zona', () => {
    const css = expandCss({
      ...SECTIONED_THEME,
      zones: {
        oscura: {
          ...SECTIONED_THEME.zones.oscura,
          components: [{ selector: '.card', vars: { '--bs-card-bg': 'transparent' } }],
        },
      },
    });
    expect(css.indexOf('[data-bs-theme="oscura"] {'))
      .toBeLessThan(css.indexOf('[data-bs-theme="oscura"] .nav {'));
    expect(css.indexOf('[data-bs-theme="oscura"] .nav {'))
      .toBeLessThan(css.indexOf('[data-bs-theme="oscura"] .card {'));
  });

  it('los mide en el contexto de su zona y atrapa un contraste insuficiente', () => {
    // El texto se resuelve contra --bs-body-color-rgb de la zona, que es
    // blanco: sobre el turquesa del role no llega a AA.
    const css = expandCss({
      ...SECTIONED_THEME,
      roles: { primary: '#7fd4d0' },
      zones: {
        oscura: {
          ...SECTIONED_THEME.zones.oscura,
          vars: {
            '--bs-body-bg-rgb': '32, 44, 62',
            '--bs-body-color-rgb': 'var(--bs-white-rgb)',
          },
          components: [
            ...SECTIONED_THEME.zones.oscura.components,
            { selector: '.btn-primary', vars: { '--bs-btn-color': 'rgb(var(--bs-body-color-rgb))' } },
          ],
        },
      },
    });
    const result = validate(css);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('[contraste-boton]');
    expect(result.stderr).toContain('.btn-primary dentro de [data-bs-theme="oscura"]');
  });

  it('un bloque de zona resuelve el par que el mismo selector deja roto fuera', () => {
    const base = {
      ...SECTIONED_THEME,
      roles: { primary: '#7fd4d0' },
      components: [
        // El hover del botón sólido lo pinta la librería (primary-600 con
        // texto blanco): con este primary claro no llega a AA, así que el
        // bloque fija también ese estado y deja en pie sólo el par de reposo,
        // que es lo que mide este caso.
        {
          selector: '.btn-primary',
          vars: {
            '--bs-btn-color': 'rgb(var(--bs-body-color-rgb))',
            '--bs-btn-hover-color': 'rgb(var(--bs-dark-rgb))',
          },
        },
      ],
      zones: {
        oscura: {
          ...SECTIONED_THEME.zones.oscura,
          vars: {
            '--bs-body-bg-rgb': '32, 44, 62',
            '--bs-body-color-rgb': 'var(--bs-white-rgb)',
          },
        },
      },
    };
    expect(validate(expandCss(base)).status).toBe(1);

    const withFix = expandCss({
      ...base,
      zones: {
        oscura: {
          ...base.zones.oscura,
          components: [
            ...SECTIONED_THEME.zones.oscura.components,
            { selector: '.btn-primary', vars: { '--bs-btn-color': 'rgb(var(--bs-dark-rgb))' } },
          ],
        },
      },
    });
    expect(validate(withFix).stderr).not.toContain('[contraste-boton]');
  });
});

describe('theme-validate — pares horneados', () => {
  it('atrapa una lista que hereda el texto horneado dentro de una zona oscura', () => {
    // `.list-group` fija --bs-list-group-action-color a gray-900 y deja el
    // fondo transparente. Una zona que oscurece la superficie no toca ninguna
    // de las dos, así que la lista queda negro sobre negro sin que el theme
    // declare nada raro.
    const css = expandCss({
      ...SECTIONED_THEME,
      zones: {
        oscura: {
          vars: {
            '--bs-body-bg-rgb': '32, 44, 62',
            '--bs-body-color-rgb': 'var(--bs-white-rgb)',
          },
        },
      },
    });
    const result = validate(css);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('[contraste-horneado]');
    expect(result.stderr).toContain('.list-group-item-action dentro de [data-bs-theme="oscura"]');
    expect(result.stderr).toContain('--bs-list-group-action-color');
  });

  it('calla cuando la zona declara esas variables en su propio bloque', () => {
    // SECTIONED_THEME ya trae el arreglo; sin él, el caso anterior falla.
    const result = validate(expandCss(SECTIONED_THEME));
    expect(result.stderr).not.toContain('.list-group-item');
    expect(result.status).toBe(0);
  });

  it('mide la alerta sobre la variable -text-emphasis, no sobre el paso de la rampa', () => {
    // Con un primary claro el emphasis derivado no contrasta; declarando la
    // variable en `root` el par se arregla sin tocar la rampa.
    const brokenCss = expandCss({ ...SECTIONED_THEME, roles: { primary: '#7fd4d0' } });
    expect(validate(brokenCss).stderr).toContain('.alert-primary');

    const patched = expandCss({
      ...SECTIONED_THEME,
      roles: { primary: '#7fd4d0' },
      root: {
        ...SECTIONED_THEME.root,
        '--bs-primary-text-emphasis': 'rgb(var(--bs-primary-800-rgb))',
      },
    });
    expect(validate(patched).stderr).not.toContain('.alert-primary');
  });

  it('resuelve .text-bg-<role> con la variable que emite theme-expand', () => {
    // Con un primary claro, el blanco por defecto no contrasta; theme-expand
    // declara --bs-primary-text-bg-color con el texto oscuro y el par pasa.
    const css = expandCss({
      ...SECTIONED_THEME,
      roles: { primary: '#7fd4d0' },
      root: {
        ...SECTIONED_THEME.root,
        '--bs-primary-text-emphasis': 'rgb(var(--bs-primary-800-rgb))',
        // Un primary claro tampoco se lee como contorno sobre el fondo del
        // raíz: el botón no pinta relleno y se queda con el paso 500.
        '--bs-btn-outline-primary-color': 'rgb(var(--bs-primary-800-rgb))',
      },
      components: [
        {
          selector: '.btn-primary',
          vars: {
            '--bs-btn-color': 'rgb(var(--bs-dark-rgb))',
            '--bs-btn-hover-color': 'rgb(var(--bs-dark-rgb))',
          },
        },
      ],
      zones: {
        oscura: {
          ...SECTIONED_THEME.zones.oscura,
          nav: {
            ...SECTIONED_THEME.zones.oscura.nav,
            '--bs-nav-pills-link-active-color': 'rgb(var(--bs-dark-rgb))',
          },
        },
      },
    });
    const result = validate(css);

    expect(result.status).toBe(0);
    expect(result.stderr).not.toContain('.text-bg-primary');
    expect(result.stderr).not.toContain('error ');
  });

  it('los demás pares horneados siguen siendo error', () => {
    // Misma paleta, pero sin el arreglo del emphasis: la alerta sí se puede
    // corregir declarando la variable, así que ahí el error se mantiene.
    const css = expandCss({
      ...SECTIONED_THEME,
      roles: { primary: '#7fd4d0' },
      components: [
        {
          selector: '.btn-primary',
          vars: {
            '--bs-btn-color': 'rgb(var(--bs-dark-rgb))',
            '--bs-btn-hover-color': 'rgb(var(--bs-dark-rgb))',
          },
        },
      ],
      zones: {
        oscura: {
          ...SECTIONED_THEME.zones.oscura,
          nav: {
            ...SECTIONED_THEME.zones.oscura.nav,
            '--bs-nav-pills-link-active-color': 'rgb(var(--bs-dark-rgb))',
          },
        },
      },
    });
    const result = validate(css);

    expect(result.status).toBe(1);
    expect(result.stderr).toContain('.alert-primary');
    expect(result.stderr).toContain('Declara --bs-primary-text-emphasis');
    // .text-bg-primary ya no aparece: theme-expand declaró su variable.
    expect(result.stderr).not.toContain('.text-bg-primary');
  });

  it('mide .text-bg-<role> de un role que sólo cambia dentro de una zona', () => {
    const base = {
      ...SECTIONED_THEME,
      zones: {
        oscura: {
          ...SECTIONED_THEME.zones.oscura,
          vars: { ...SECTIONED_THEME.zones.oscura.vars, '--bs-danger-rgb': '255, 214, 214' },
        },
      },
    };
    const brokenCss = validate(expandCss(base));
    expect(brokenCss.status).toBe(1);
    expect(brokenCss.stderr).toContain('.text-bg-danger dentro de [data-bs-theme="oscura"]');
    expect(brokenCss.stderr).toContain('Declara --bs-danger-text-bg-color');

    const patched = validate(expandCss({
      ...base,
      zones: {
        oscura: {
          ...base.zones.oscura,
          vars: { ...base.zones.oscura.vars, '--bs-danger-text-bg-color': 'var(--bs-gray-900)' },
        },
      },
    }));
    expect(patched.stderr).not.toContain('.text-bg-danger');
  });

  it('mide .text-bg-<role> cuando el theme sólo redefine su variable de texto', () => {
    // Negro sobre el primary por defecto da 4.00:1.
    const rootRun = validate(expandCss({
      ...MINIMAL_THEME,
      root: { '--bs-primary-text-bg-color': 'var(--bs-black)' },
    }));
    expect(rootRun.status).toBe(1);
    expect(rootRun.stderr).toContain('".text-bg-primary"');

    const zoneRule = validate(expandCss({
      ...SECTIONED_THEME,
      zones: {
        oscura: {
          ...SECTIONED_THEME.zones.oscura,
          vars: { ...SECTIONED_THEME.zones.oscura.vars, '--bs-info-text-bg-color': 'var(--bs-black)' },
        },
      },
    }));
    expect(zoneRule.status).toBe(1);
    expect(zoneRule.stderr).toContain('.text-bg-info dentro de [data-bs-theme="oscura"]');
  });

  it('no culpa a una zona que sólo cambia el token del texto por defecto', () => {
    // --bs-warning-text-bg-color: var(--bs-gray-700) se resuelve en :root y se
    // hereda ya calculada: el navegador sigue pintando gray-700 en la zona.
    const result = validate(expandCss({
      ...SECTIONED_THEME,
      zones: {
        oscura: {
          ...SECTIONED_THEME.zones.oscura,
          vars: { ...SECTIONED_THEME.zones.oscura.vars, '--bs-gray-700-rgb': '255, 255, 255' },
        },
      },
    }));
    expect(result.stderr).not.toContain('.text-bg-warning');
  });

  it('mide .text-bg-<role> cuando el raíz cambia el token de su texto por defecto', () => {
    // En :root el cambio sí llega: gray-700 en blanco deja 1.79:1 en warning.
    const result = validate(expandCss({
      ...MINIMAL_THEME,
      root: { '--bs-gray-700-rgb': '255, 255, 255' },
    }));
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('".text-bg-warning"');
  });

  describe('una zona que sólo cambia la rampa de secondary', () => {
    const css = () => expandCss({
      ...SECTIONED_THEME,
      zones: {
        oscura: {
          ...SECTIONED_THEME.zones.oscura,
          vars: { ...SECTIONED_THEME.zones.oscura.vars, '--bs-secondary-700-rgb': '240, 240, 242' },
        },
      },
    });

    it('no se culpa si la zona no declara el wrapper', () => {
      // .text-bg-secondary lee los wrappers --bs-secondary-700/-50, que se
      // resuelven en :root y se heredan: el navegador sigue pintando el raíz.
      const withoutWrapper = css().replace('  --bs-secondary-700: rgb(var(--bs-secondary-700-rgb));\n', '');
      expect(withoutWrapper).not.toContain('--bs-secondary-700:');
      expect(validate(withoutWrapper).stderr).not.toContain('.text-bg-secondary');
    });

    it('se mide con el wrapper que emite theme-expand, que sí la mueve', () => {
      // Con el wrapper en la zona, Chromium pinta 240, 240, 242 sobre el
      // --bs-secondary-50 del raíz: 1.00:1.
      expect(validate(css()).stderr)
        .toContain('".text-bg-secondary dentro de [data-bs-theme="oscura"]": 1.00:1');
    });
  });

  it('da prioridad al bloque de zona sobre el global aunque venga antes en el CSS', () => {
    const base = expandCss(MINIMAL_THEME);
    const zoneRule = '[data-bs-theme="oscura"] {\n  --bs-body-bg-rgb: 247, 248, 250;\n}\n\n';
    const inOrder = `${base}\n${zoneRule}[data-bs-theme="oscura"] .text-bg-info {\n  --bs-info-text-bg-color: var(--bs-white);\n}\n\n.text-bg-info {\n  --bs-info-text-bg-color: var(--bs-black);\n}\n`;
    const result = validate(inOrder);
    // El global (negro, 4.00:1) falla en el raíz; en la zona gana el blanco.
    expect(result.stderr).toContain('".text-bg-info"');
    expect(result.stderr).not.toContain('.text-bg-info dentro de [data-bs-theme="oscura"]');
  });

  it('mide los bloques de componente sobre .text-bg-<role>', () => {
    const brokenCss = validate(expandCss({
      ...MINIMAL_THEME,
      components: [{ selector: '.text-bg-info', vars: { '--bs-info-text-bg-color': 'var(--bs-black)' } }],
    }));
    expect(brokenCss.status).toBe(1);
    expect(brokenCss.stderr).toContain('".text-bg-info"');

    const patched = validate(expandCss({
      ...MINIMAL_THEME,
      root: { '--bs-info-text-bg-color': 'var(--bs-black)' },
      components: [{ selector: '.text-bg-info', vars: { '--bs-info-text-bg-color': 'var(--bs-white)' } }],
    }));
    expect(patched.stderr).not.toContain('.text-bg-info');
  });

  it('mide .text-bg-<role> también dentro de cada zona', () => {
    const css = expandCss({
      ...SECTIONED_THEME,
      roles: { primary: '#7fd4d0' },
      root: {
        ...SECTIONED_THEME.root,
        '--bs-primary-text-emphasis': 'rgb(var(--bs-primary-800-rgb))',
      },
      components: [
        {
          selector: '.btn-primary',
          vars: {
            '--bs-btn-color': 'rgb(var(--bs-dark-rgb))',
            '--bs-btn-hover-color': 'rgb(var(--bs-dark-rgb))',
          },
        },
      ],
      zones: {
        oscura: {
          ...SECTIONED_THEME.zones.oscura,
          nav: {
            ...SECTIONED_THEME.zones.oscura.nav,
            '--bs-nav-pills-link-active-color': 'rgb(var(--bs-dark-rgb))',
          },
        },
      },
    });
    // Sin la variable el par falla, pero esta zona no toca el triplete del role:
    // resuelve lo mismo que el raíz, así que sale una vez y sin sufijo de zona.
    // Repetirlo por zona sería la duplicación de #1387.
    const broken = css.replace(/\n\s*--bs-primary-text-bg-color: [^;]+;/, '');
    const result = validate(broken);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('".text-bg-primary"');
    expect(result.stderr).not.toContain('.text-bg-primary dentro de [data-bs-theme="oscura"]');
    expect(validate(css).stderr).not.toContain('.text-bg-primary');
  });

  /*
   * El fondo de `.text-bg-<role>` es la excepción de los pares horneados: la
   * clase lee `--bs-<role>-rgb` en el propio elemento, así que una zona que
   * mueva el triplete sí cambia el par y tiene que reportarlo por su cuenta.
   */
  it('mide .text-bg-<role> en la zona que mueve el triplete del role', () => {
    const css = expandCss({
      ...MINIMAL_THEME,
      root: { '--bs-primary-text-bg-color': 'var(--bs-white)' },
      zones: { clara: { vars: { '--bs-primary-rgb': '190, 230, 215' } } },
    });
    const result = validate(css);
    // El raíz contrasta; el blanco heredado sobre el primary claro de la zona, no.
    expect(result.stderr).toContain('.text-bg-primary dentro de [data-bs-theme="clara"]');
    expect(result.stderr).not.toContain('".text-bg-primary":');
    expect(result.status).toBe(1);
  });

  it('no culpa al theme de un par que ya viene roto en la librería', () => {
    const result = validate(expandCss(SECTIONED_THEME));
    expect(result.stderr).not.toContain('error ');
  });
});

describe('contraste-boton — .btn-outline-* en reposo, hover y active (#1296)', () => {
  const EJEMPLO = JSON.parse(fs.readFileSync(
    path.join(ROOT, 'scripts/theme/themes/theme-ejemplo-zonas.json'),
    'utf8',
  ));

  /**
   * El ejemplo con un primary claro, sus tres pares reales corregidos (el
   * sólido .btn-primary incluido: el blanco horneado da 1.72:1) y un
   * .btn-outline-primary legible en los tres estados: primary-900 en el raíz y
   * blanco en la zona oscura. Ninguno declara fondo de hover ni de active, así
   * que el botón no se rellena. Chromium: 13.91:1 en el raíz y 14.69:1 en la
   * zona, en los tres estados.
   */
  const outlineTheme = (
    zoneOutline: Record<string, string>,
    rootOutline: string[] = ['color', 'border-color', 'hover-color', 'hover-border-color', 'active-color', 'active-border-color'],
  ) => ({
    ...EJEMPLO,
    roles: { ...EJEMPLO.roles, primary: '#7fd4d0' },
    root: {
      ...EJEMPLO.root,
      '--bs-primary-text-emphasis': 'rgb(var(--bs-primary-900-rgb))',
      '--bs-btn-primary-color': 'var(--bs-primary-900)',
    },
    components: [
      ...EJEMPLO.components.map((c: { selector: string; vars?: Record<string, string> }) => (
        c.selector === '.nav-pills'
          ? { ...c, vars: { ...c.vars, '--bs-nav-pills-link-active-color': 'rgb(var(--bs-dark-rgb))' } }
          : c)),
      {
        selector: '.btn-outline-primary',
        vars: Object.fromEntries(rootOutline.map((v) => [`--bs-btn-${v}`, 'rgb(var(--bs-primary-900-rgb))'])),
      },
    ],
    zones: {
      oscura: {
        ...EJEMPLO.zones.oscura,
        components: [
          ...EJEMPLO.zones.oscura.components
            .filter((c: { selector: string }) => c.selector !== '.btn-outline-primary'),
          { selector: '.btn-outline-primary', vars: zoneOutline },
        ],
      },
    },
  });
  const allWhite = Object.fromEntries(['color', 'border-color', 'hover-color', 'hover-border-color', 'active-color', 'active-border-color']
    .map((v) => [`--bs-btn-${v}`, 'rgb(var(--bs-white-rgb))']));

  it('pasa --strict con un outline que no se rellena, medido contra la superficie', () => {
    // Antes, el hover se medía contra --bs-primary, que el botón no pinta nunca:
    // 1.72:1 entre el blanco y el primary claro.
    const result = validateStrict(expandCss(outlineTheme(allWhite)));
    expect(result.stderr).toBe('');
    expect(result.status).toBe(0);
  });

  it('mide contra el relleno que fija el theme, y da error si no contrasta', () => {
    const css = expandCss(outlineTheme({
      ...allWhite,
      '--bs-btn-hover-bg': 'rgb(var(--bs-primary-rgb))',
    }));
    const result = validateStrict(css);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain(
      '".btn-outline-primary dentro de [data-bs-theme="oscura"], en hover": 1.72:1 entre el texto '
      + '--bs-btn-hover-color (--bs-white-rgb) y el fondo --bs-btn-hover-bg',
    );
    expect(result.stderr).not.toContain('en active');
  });

  it('mide el texto que la librería pone en cada estado si el theme no lo fija', () => {
    // Sin --bs-btn-active-color, el botón pulsado del raíz lleva el
    // --bs-primary-700 de la librería sobre la superficie clara. Chromium: 4.22:1.
    const css = expandCss(outlineTheme(allWhite, ['color', 'border-color', 'hover-color', 'hover-border-color']));
    const result = validateStrict(css);
    expect(result.stderr).toContain(
      '".btn-outline-primary, en active": 4.22:1 entre el texto --bs-btn-active-color '
      + '(--bs-primary-700-rgb) y el fondo --bs-body-bg-rgb',
    );
    expect(result.stderr).toContain('así que el botón conserva el que Bootstrap horneó para "primary"');
    expect(result.status).toBe(1);
  });

  it('atribuye al theme el texto que hereda de un bloque global', () => {
    // La zona no fija el active, pero el bloque global sí (primary-900): es lo
    // que pinta el botón pulsado en la zona, y es el theme quien lo pone.
    const { '--bs-btn-active-color': dropped, ...withoutActive } = allWhite;
    expect(dropped).toBeDefined();
    const result = validateStrict(expandCss(outlineTheme(withoutActive)));
    expect(result.stderr).toContain(
      '".btn-outline-primary dentro de [data-bs-theme="oscura"], en active": 1.02:1',
    );
    expect(result.stderr).toContain('El theme fija ese color de texto');
  });

  it('mide el relleno que la zona hereda del raíz', () => {
    // --bs-btn-outline-primary-hover-bg negro en :root llega a la zona ya
    // calculado, y el botón lo lee en los dos contextos: el texto negro del
    // hover cae sobre él, 1:1, aunque la superficie de la zona sea clara.
    const theme = outlineTheme({ ...allWhite, '--bs-btn-hover-color': 'rgb(var(--bs-black-rgb))' });
    const css = expandCss({
      ...theme,
      root: { ...theme.root, '--bs-btn-outline-primary-hover-bg': 'rgb(var(--bs-black-rgb))' },
    });
    expect(validateStrict(css).stderr).toContain(
      '".btn-outline-primary dentro de [data-bs-theme="oscura"], en hover": 1.00:1 entre el texto '
      + '--bs-btn-hover-color (--bs-black-rgb) y el fondo --bs-btn-hover-bg',
    );
  });

  it('cuenta --bs-btn-outline-<role>-active-bg, que el botón lee en --bs-btn-active-bg', () => {
    // El active pinta var(--bs-btn-active-bg), y `.btn-outline-primary` lo
    // cablea a este token: en la zona, el blanco del texto cae sobre el primary
    // claro, 1.72:1. Antes del cableado el token no lo leía ningún selector.
    const theme = outlineTheme(allWhite);
    const css = expandCss({
      ...theme,
      root: { ...theme.root, '--bs-btn-outline-primary-active-bg': 'rgb(var(--bs-primary-rgb))' },
    });
    const result = validateStrict(css);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain(
      '".btn-outline-primary dentro de [data-bs-theme="oscura"], en active": 1.72:1 entre el texto '
      + '--bs-btn-active-color (--bs-white-rgb) y el fondo --bs-btn-active-bg (--bs-primary-rgb)',
    );
  });
});

describe('contraste-horneado — el relleno de .btn-outline-* declarado sólo por token', () => {
  const EJEMPLO = path.join(ROOT, 'scripts/theme/themes/theme-ejemplo-zonas.json');
  /**
   * El ejemplo con el relleno de un estado apuntando al color de texto de ese
   * mismo estado: el botón se pinta del color de su propia letra, 1:1, y deja
   * de leerse. Ninguno de estos casos declara una variable genérica del botón
   * (`--bs-btn-hover-bg`…), que es lo que dispara la regla de botones: el único
   * rastro es el token por-role, y es lo que aquí se mide.
   */
  const tokenOnly = (
    where: 'root' | 'zone' | 'component',
    token = '--bs-btn-outline-primary-hover-bg',
    value = 'var(--bs-btn-outline-primary-hover-color)',
  ) => {
    const theme = JSON.parse(fs.readFileSync(EJEMPLO, 'utf8'));
    if (where === 'root') theme.root = { ...theme.root, [token]: value };
    if (where === 'zone') {
      // La zona del ejemplo pisa --bs-btn-hover-bg sobre el propio botón, y esa
      // declaración gana al token: sin quitarla el relleno no llega a pintarse.
      theme.zones.oscura.components = theme.zones.oscura.components
        .filter((c: { selector: string }) => !c.selector.includes('btn-outline'));
      theme.zones.oscura.vars = { ...theme.zones.oscura.vars, [token]: value };
    }
    if (where === 'component') {
      theme.components = [...theme.components, { selector: '.btn-outline-primary', vars: { [token]: value } }];
    }
    return theme;
  };

  it('el ejemplo sin el token sigue pasando --strict', () => {
    const result = validateStrict(expandCss(JSON.parse(fs.readFileSync(EJEMPLO, 'utf8'))));
    expect(result.stderr).toBe('');
    expect(result.status).toBe(0);
  });

  it.each(['root', 'component'] as const)('mide el relleno declarado en el %s', (where) => {
    const result = validateStrict(expandCss(tokenOnly(where)));
    expect(result.status).toBe(1);
    expect(result.stderr).toContain(
      '".btn-outline-primary, en hover": 1.00:1 entre --bs-btn-hover-color '
      + '(--bs-primary-600-rgb) y --bs-btn-hover-bg (--bs-primary-600-rgb)',
    );
  });

  it('mide el relleno declarado en una zona', () => {
    const result = validateStrict(expandCss(tokenOnly('zone')));
    expect(result.status).toBe(1);
    expect(result.stderr).toContain(
      '".btn-outline-primary dentro de [data-bs-theme="oscura"], en hover": 1.00:1 entre '
      + '--bs-btn-hover-color (--bs-primary-600-rgb) y --bs-btn-hover-bg (--bs-primary-600-rgb)',
    );
  });

  it('apunta a la línea del token, que es lo único que declara el theme', () => {
    const { stderr } = validateStrict(expandCss(tokenOnly('root')));
    expect(stderr).toMatch(/\.css:\d+ {2}\[contraste-horneado\]/);
  });

  it('mide sólo el estado cuyo relleno declara el theme', () => {
    // Con el relleno de active sin declarar, el botón pulsado sigue dejando ver
    // la superficie: es el caso que ya cubren las demás reglas.
    const { stderr } = validateStrict(expandCss(tokenOnly('root')));
    expect(stderr).toContain('en hover');
    expect(stderr).not.toContain('en active');
  });

  it('mide el relleno de active por su propio token', () => {
    const result = validateStrict(expandCss(tokenOnly(
      'root',
      '--bs-btn-outline-primary-active-bg',
      'var(--bs-btn-outline-primary-active-color)',
    )));
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('".btn-outline-primary, en active": 1.00:1');
    expect(result.stderr).not.toContain('en hover');
  });

  it('no lo apaga un bloque .btn compartido, que la regla de botones no mide', () => {
    // `.btn { --bs-btn-bg }` declara una genérica, pero sobre el selector
    // común: la regla de botones sólo procesa `.btn-<role>` y
    // `.btn-outline-<role>`, así que nadie mediría este hover si el par se
    // apartara por él.
    const theme = tokenOnly('root');
    theme.components = theme.components.map((c: { selector: string; vars?: Record<string, string> }) => (
      c.selector === '.btn' ? { ...c, vars: { ...c.vars, '--bs-btn-bg': 'transparent' } } : c));
    const result = validateStrict(expandCss(theme));
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('".btn-outline-primary, en hover": 1.00:1');
  });

  it('no mide el contexto donde el relleno no está declarado', () => {
    // El relleno sólo existe dentro de la zona, y ahí contrasta. El botón del
    // raíz sigue transparente sobre la superficie: no es un par que el theme
    // haya movido, y medirlo rompía --strict con un aviso que no toca nada.
    const theme = JSON.parse(fs.readFileSync(EJEMPLO, 'utf8'));
    theme.zones.oscura.vars = {
      ...theme.zones.oscura.vars,
      '--bs-btn-outline-light-hover-bg': 'rgb(var(--bs-black-rgb))',
    };
    const result = validateStrict(expandCss(theme));
    expect(result.stderr).toBe('');
    expect(result.status).toBe(0);
  });

  it('mide el relleno de la zona cuando es la zona la que lo declara', () => {
    const theme = JSON.parse(fs.readFileSync(EJEMPLO, 'utf8'));
    theme.zones.oscura.vars = {
      ...theme.zones.oscura.vars,
      '--bs-btn-outline-light-hover-bg': 'var(--bs-btn-outline-light-hover-color)',
    };
    const { stderr } = validateStrict(expandCss(theme));
    expect(stderr).toContain(
      '".btn-outline-light dentro de [data-bs-theme="oscura"], en hover": 1.00:1',
    );
    // Y sólo ahí: el botón del raíz no lo declara.
    expect(stderr).not.toContain('".btn-outline-light, en hover"');
  });

  it('no mide dos veces el botón que la regla de botones ya cubre', () => {
    // Con una genérica sobre el mismo botón manda la regla de botones, que
    // conoce el bloque y el estado. El par horneado se aparta.
    const theme = tokenOnly('root');
    theme.components = [...theme.components, {
      selector: '.btn-outline-primary',
      vars: { '--bs-btn-hover-color': 'rgb(var(--bs-primary-600-rgb))' },
    }];
    const { stderr } = validateStrict(expandCss(theme));
    expect(stderr).toContain('[contraste-boton]');
    expect(stderr).not.toContain('[contraste-horneado]');
    expect(stderr.match(/en hover/g)).toHaveLength(1);
  });
});

describe('theme-expand — el breakpoint de RFS', () => {
  it('repite los pasos 1..4 en 1200px aunque el tamaño no sea fluido', () => {
    // Un override menor que la base de RFS no genera valor fluido. El bloque es
    // redundante (el theme gana por cascada), pero la salida lo mantiene.
    const css = expandCss({
      ...MINIMAL_THEME,
      typography: { fontFamily: 'Inter, sans-serif', scale: { 3: '1.25rem', 6: '.875rem' } },
    });
    expect(css).toContain('--bs-rfs-fs-3: 1.25rem;');
    expect(css).toMatch(/@media \(min-width: 1200px\) \{[\s\S]*--bs-rfs-fs-3: 1\.25rem;/);
    // El paso 6 no lo toca la librería en ese breakpoint: no necesita bloque.
    expect(css).not.toMatch(/@media \(min-width: 1200px\) \{[\s\S]*--bs-rfs-fs-6/);
    expect(validate(css).status).toBe(0);
  });
});

describe('contraste-boton — un bloque de zona no duplica el hallazgo del global', () => {
  // Los dos bloques leen la misma capa fundida del elemento, así que miden el
  // mismo par. Si los dos se miden dentro de la zona, el hallazgo sale dos
  // veces palabra por palabra.
  const BASE = [
    ':root,',
    '[data-bs-theme="dynamic"] {',
    '  --bs-body-bg-rgb: 255, 255, 255;',
    '  --bs-body-color-rgb: 16, 24, 40;',
    '  --bs-border-color: rgb(228, 231, 236);',
    '}',
    '',
    '[data-bs-theme="oscura"] {',
    '  --bs-body-bg-rgb: 16, 24, 40;',
    '  --bs-body-color-rgb: 255, 255, 255;',
    '}',
    '',
  ].join('\n');

  /** Los hallazgos de botón, tal cual, para poder contar repeticiones. */
  const buttonFindings = (css: string) => findings(validateStrict(css))
    .filter((f) => f.startsWith('error contraste-boton'));

  it('el bloque global que sólo declara hover deja de medirse en la zona', () => {
    // La selección de contextos miraba --bs-btn-color o --bs-btn-bg para
    // decidir si la zona ya había reemplazado al global. Un bloque que sólo
    // declara hover no toca ninguna de las dos, así que se medía igual.
    const css = `${BASE}${[
      '.btn-primary { --bs-btn-hover-color: rgb(0, 0, 0); }',
      '',
      '[data-bs-theme="oscura"] .btn-primary {',
      '  --bs-btn-hover-color: rgb(255, 255, 255);',
      '  --bs-btn-hover-bg: rgb(255, 255, 255);',
      '}',
    ].join('\n')}`;
    const inZone = buttonFindings(css).filter((f) => f.includes('dentro de [data-bs-theme="oscura"]'));

    expect(inZone).toHaveLength(1);
    expect(inZone[0]).toMatch(/en hover": 1\.00:1/);
  });

  it('con solapamiento parcial no se pierde el estado que la zona no toca', () => {
    // El global rompe hover y active; la zona sólo pisa hover. Dentro de la
    // zona tiene que salir un hallazgo por estado, ni duplicado ni de menos.
    const css = `${BASE}${[
      '.btn-primary {',
      '  --bs-btn-hover-color: rgb(120, 120, 120);',
      '  --bs-btn-hover-bg: rgb(130, 130, 130);',
      '  --bs-btn-active-color: rgb(120, 120, 120);',
      '  --bs-btn-active-bg: rgb(130, 130, 130);',
      '}',
      '',
      '[data-bs-theme="oscura"] .btn-primary {',
      '  --bs-btn-hover-color: rgb(255, 255, 255);',
      '  --bs-btn-hover-bg: rgb(255, 255, 255);',
      '}',
    ].join('\n')}`;
    const inZone = buttonFindings(css).filter((f) => f.includes('dentro de [data-bs-theme="oscura"]'));

    expect(inZone).toHaveLength(2);
    expect(inZone).toEqual([
      expect.stringMatching(/en hover": 1\.00:1/),
      expect.stringMatching(/en active": 1\.15:1/),
    ]);
  });
});

describe('contraste-boton — .btn-<role> sólido en hover y active', () => {
  const themePath = path.join(ROOT, 'scripts/theme/themes/theme-ejemplo-zonas.json');
  type Block = { selector: string; vars: Record<string, string> };
  type ExampleTheme = { zones: { oscura: { components: Block[] } } };
  const readExample = (): ExampleTheme => JSON.parse(fs.readFileSync(themePath, 'utf8'));

  /** El bloque `.btn-primary` de la zona oscura del ejemplo. */
  const zoneButton = (theme: ExampleTheme) => {
    const block = theme.zones.oscura.components.find((c) => c.selector === '.btn-primary');
    if (!block) throw new Error('el ejemplo ya no trae un .btn-primary de zona');
    return block;
  };

  /**
   * El ejemplo tal como estaba antes de #1372: el bloque de zona aclara el
   * fondo de reposo y oscurece el texto de los tres estados, pero no declara
   * los fondos de hover ni de active. La librería los deja en los pasos 600 y
   * 700 del role, oscuros, y el texto oscuro queda encima.
   */
  const withoutStateBgs = () => {
    const theme = readExample();
    const button = zoneButton(theme);
    button.vars = Object.fromEntries(Object.entries(button.vars)
      .filter(([name]) => !/^--bs-btn-(hover|active)-(bg|border-color)$/.test(name)));
    return theme;
  };

  it('el ejemplo versionado pasa --strict con sus fondos declarados', () => {
    const result = validateStrict(expandCss(readExample()));
    expect(result.stderr).toBe('');
    expect(result.status).toBe(0);
  });

  it('sin los fondos, mide hover y active contra los pasos 600 y 700 de la librería', () => {
    // Los mismos ratios que Chromium saca del botón renderizado: 1.66:1 en
    // hover y 1.25:1 en active, con el texto oscuro que fija el bloque.
    const result = validateStrict(expandCss(withoutStateBgs()));
    expect(result.status).toBe(1);
    expect(result.stderr).toContain(
      '".btn-primary dentro de [data-bs-theme="oscura"], en hover": 1.66:1 entre el texto '
      + '--bs-btn-hover-color (--bs-dark-rgb) y el fondo --bs-btn-hover-bg (--bs-primary-600-rgb)',
    );
    expect(result.stderr).toContain(
      '".btn-primary dentro de [data-bs-theme="oscura"], en active": 1.25:1 entre el texto '
      + '--bs-btn-active-color (--bs-dark-rgb) y el fondo --bs-btn-active-bg (--bs-primary-700-rgb)',
    );
    // El reposo sí contrasta: 7.86:1 sobre primary-200.
    expect(result.stderr).not.toContain('".btn-primary dentro de [data-bs-theme="oscura"]":');
  });

  it('cada estado se reporta por separado: arreglar el hover no calla el active', () => {
    const theme = withoutStateBgs();
    zoneButton(theme).vars['--bs-btn-hover-bg'] = 'rgb(var(--bs-primary-100-rgb))';
    const { stderr } = validateStrict(expandCss(theme));
    expect(stderr).not.toContain('en hover');
    expect(stderr).toContain('".btn-primary dentro de [data-bs-theme="oscura"], en active": 1.25:1');
  });

  it('mide contra el fondo que declara el theme, no contra el de la librería', () => {
    const theme = withoutStateBgs();
    // Un fondo propio igual de oscuro que el de la librería: el par sigue roto,
    // pero el mensaje apunta a lo que declara el theme.
    zoneButton(theme).vars['--bs-btn-hover-bg'] = 'rgb(var(--bs-dark-rgb))';
    const { stderr } = validateStrict(expandCss(theme));
    expect(stderr).toContain(
      '".btn-primary dentro de [data-bs-theme="oscura"], en hover": 1.00:1 entre el texto '
      + '--bs-btn-hover-color (--bs-dark-rgb) y el fondo --bs-btn-hover-bg (--bs-dark-rgb)',
    );
  });

  it('un bloque que sólo cambia el fondo de reposo arrastra los dos estados', () => {
    // Sin tocar ningún texto: el reposo se aclara y hover y active se quedan
    // con el blanco que la librería horneó sobre un primary claro.
    const css = expandCss({
      ...SECTIONED_THEME,
      roles: { primary: '#7fd4d0' },
      components: [
        { selector: '.btn-primary', vars: { '--bs-btn-bg': 'rgb(var(--bs-primary-100-rgb))' } },
      ],
    });
    const { stderr } = validate(css);
    expect(stderr).toContain('".btn-primary, en hover": 2.67:1');
    expect(stderr).toContain(
      'El theme no lo fija, así que el botón conserva el que Bootstrap horneó para "primary"',
    );
  });

  it('el par de reposo sigue sin etiqueta de estado en el mensaje', () => {
    const css = expandCss({
      ...MINIMAL_THEME,
      components: [
        { selector: '.btn-primary', vars: { '--bs-btn-color': 'rgb(var(--bs-primary-rgb))' } },
      ],
    });
    expect(validate(css).stderr).toContain('".btn-primary": 1.00:1');
  });

  it('un botón que la librería deja legible no se reporta en ningún estado', () => {
    // primary oscuro: el blanco horneado contrasta en los pasos 500, 600 y 700.
    const css = expandCss({
      ...MINIMAL_THEME,
      components: [
        { selector: '.btn-primary', vars: { '--bs-btn-bg': 'rgb(var(--bs-primary-rgb))' } },
      ],
    });
    expect(validate(css).stderr).not.toContain('[contraste-boton]');
  });

  it('un bloque que sólo cambia el texto reporta únicamente el estado que no llega a AA', () => {
    // Caso del comentario de #1298: gray-900 sobre primary #5fbfae da 8.28:1
    // en reposo y 5.40:1 en hover, pero 3.32:1 sobre el paso 700 de active.
    const gray900 = 'var(--bs-gray-900)';
    const css = expandCss({
      ...MINIMAL_THEME,
      roles: { primary: '#5fbfae' },
      components: [{
        selector: '.btn-primary',
        vars: {
          '--bs-btn-color': gray900,
          '--bs-btn-hover-color': gray900,
          '--bs-btn-active-color': gray900,
          '--bs-btn-disabled-color': gray900,
        },
      }],
    });
    const buttonFindings = findings(validateStrict(css)).filter((f) => f.startsWith('error contraste-boton'));
    expect(buttonFindings).toEqual([expect.stringContaining(
      '".btn-primary, en active": 3.32:1 entre el texto --bs-btn-active-color (--bs-gray-900-rgb) '
      + 'y el fondo --bs-btn-active-bg (--bs-primary-700-rgb)',
    )]);
  });

  describe('el reposo de un bloque que sólo toca hover o active no se mide dos veces', () => {
    // Con primary #b5ece3 el blanco horneado da 1.31:1 en reposo. Un bloque que
    // sólo declara el fondo de hover lleva el botón a R10, que mide también el
    // reposo; el par horneado de .btn-primary no debe salir además.
    const theme = (extra: object) => ({ ...SECTIONED_THEME, roles: { primary: '#b5ece3' }, ...extra });
    const hoverBg = { '--bs-btn-hover-bg': 'rgb(var(--bs-primary-100-rgb))' };
    // Sólo el par de reposo: sin etiqueta de estado y en el contexto pedido.
    const restFindings = (list: string[], zone = '') => list.filter((f) => f.includes(`".btn-primary${zone}": `));

    it('un bloque global lo mide sólo contraste-boton', () => {
      const list = findings(validate(expandCss(theme({
        components: [{ selector: '.btn-primary', vars: hoverBg }],
      }))));
      expect(restFindings(list)).toEqual([expect.stringMatching(/^error contraste-boton: "\.btn-primary": 1\.31:1/)]);
    });

    it('un bloque de zona no apaga el par horneado del raíz', () => {
      const list = findings(validate(expandCss(theme({
        zones: {
          oscura: {
            ...SECTIONED_THEME.zones.oscura,
            components: [{ selector: '.btn-primary', vars: hoverBg }],
          },
        },
      }))));
      // En el raíz no hay bloque: lo mide contraste-horneado.
      expect(restFindings(list)).toEqual([expect.stringMatching(/^error contraste-horneado: "\.btn-primary": 1\.31:1/)]);
      // En la zona lo mide R10, una sola vez.
      expect(restFindings(list, ' dentro de [data-bs-theme="oscura"]'))
        .toEqual([expect.stringMatching(/^error contraste-boton: /)]);
    });

    it('un .btn-outline-<role> no apaga el par horneado del sólido', () => {
      const list = findings(validate(expandCss(theme({
        components: [{ selector: '.btn-outline-primary', vars: { '--bs-btn-color': 'var(--bs-primary-700)' } }],
      }))));
      expect(restFindings(list)).toEqual([expect.stringMatching(/^error contraste-horneado: "\.btn-primary": 1\.31:1/)]);
    });
  });
});

describe('theme-expand — nota de .btn-<role> sólido sin fondo de estado', () => {
  const notesFor = (theme: unknown) => {
    const result = expand(theme);
    expect(result.status).toBe(0);
    return result.stderr.split('\n').filter((line) => line.includes(' fija el texto de '));
  };

  it('avisa del texto de hover y active sin fondo, con el paso que pinta la librería', () => {
    expect(notesFor({
      ...MINIMAL_THEME,
      components: [{
        selector: '.btn-primary',
        vars: { '--bs-btn-hover-color': 'var(--bs-black)', '--bs-btn-active-color': 'var(--bs-black)' },
      }],
    })).toEqual([
      '.btn-primary fija el texto de hover y active sin su fondo: debajo queda el relleno de la '
      + 'librería, --bs-primary-600 en hover y --bs-primary-700 en active. Declara '
      + '--bs-btn-hover-bg y --bs-btn-active-bg, o confirma el contraste con theme-validate.',
    ]);
  });

  it('sólo nombra el estado que se queda sin fondo, con los pasos propios del role', () => {
    // secondary rellena hover con su paso 100, no con el 600.
    expect(notesFor({
      ...MINIMAL_THEME,
      components: [{
        selector: '.btn-secondary',
        vars: {
          '--bs-btn-hover-color': 'var(--bs-black)',
          '--bs-btn-active-color': 'var(--bs-black)',
          '--bs-btn-active-bg': 'var(--bs-gray-100)',
        },
      }],
    })).toEqual([expect.stringMatching(
      /^\.btn-secondary fija el texto de hover sin su fondo: .*--bs-secondary-100 en hover\. Declara --bs-btn-hover-bg,/,
    )]);
  });

  it('no avisa en un botón con contorno ni cuando el fondo está declarado', () => {
    expect(notesFor({
      ...MINIMAL_THEME,
      components: [
        { selector: '.btn-outline-primary', vars: { '--bs-btn-hover-color': 'var(--bs-black)' } },
        {
          selector: '.btn-danger',
          vars: { '--bs-btn-hover-color': 'var(--bs-black)', '--bs-btn-hover-bg': 'var(--bs-danger-100)' },
        },
      ],
    })).toEqual([]);
  });

  it('en una zona cuenta el fondo que declara el bloque global del mismo selector', () => {
    expect(notesFor({
      ...SECTIONED_THEME,
      components: [{ selector: '.btn-dark', vars: { '--bs-btn-hover-bg': 'var(--bs-gray-700)' } }],
      zones: {
        oscura: {
          ...SECTIONED_THEME.zones.oscura,
          components: [{
            selector: '.btn-dark',
            vars: { '--bs-btn-hover-color': 'var(--bs-white)', '--bs-btn-active-color': 'var(--bs-white)' },
          }],
        },
      },
    })).toEqual([expect.stringMatching(
      /^\[data-bs-theme="oscura"\] \.btn-dark fija el texto de active sin su fondo: .*--bs-gray-700 en active\./,
    )]);
  });

  it('cuenta el token del role declarado en el raíz, que es lo que lee el mapper', () => {
    // `df-button-variant-mapper` redeclara --bs-btn-hover-bg en .btn-<role>
    // leyendo --bs-btn-<role>-hover-bg: fijarlo en el raíz pinta el relleno, y
    // la nota diría que debajo queda el de la librería cuando ya no lo está.
    expect(notesFor({
      ...MINIMAL_THEME,
      root: { '--bs-btn-primary-hover-bg': 'var(--bs-primary-100)' },
      components: [{
        selector: '.btn-primary',
        vars: { '--bs-btn-hover-color': 'var(--bs-black)', '--bs-btn-active-color': 'var(--bs-black)' },
      }],
    })).toEqual([expect.stringMatching(/^\.btn-primary fija el texto de active sin su fondo/)]);
  });

  it('no cuenta la variable genérica en el raíz: el mapper la pisa en el botón', () => {
    // --bs-btn-hover-bg en :root no llega: .btn-<role> la redeclara sobre el
    // propio elemento, así que el relleno sigue siendo el de la librería.
    expect(notesFor({
      ...MINIMAL_THEME,
      root: { '--bs-btn-hover-bg': 'var(--bs-primary-100)' },
      components: [{
        selector: '.btn-primary',
        vars: { '--bs-btn-hover-color': 'var(--bs-black)' },
      }],
    })).toEqual([expect.stringMatching(/^\.btn-primary fija el texto de hover sin su fondo/)]);
  });

  it('el token del role en las variables de una zona sólo calla la nota de esa zona', () => {
    const button = {
      selector: '.btn-primary',
      vars: { '--bs-btn-hover-color': 'var(--bs-black)' },
    };
    expect(notesFor({
      ...SECTIONED_THEME,
      components: [button],
      zones: {
        oscura: {
          ...SECTIONED_THEME.zones.oscura,
          vars: {
            ...SECTIONED_THEME.zones.oscura.vars,
            '--bs-btn-primary-hover-bg': 'var(--bs-primary-100)',
          },
          components: [button],
        },
      },
    // El botón del raíz sigue con el relleno de la librería: la zona no lo alcanza.
    })).toEqual([expect.stringMatching(/^\.btn-primary fija el texto de hover sin su fondo/)]);
  });

  it('el token del role en el propio bloque del botón también es fondo declarado', () => {
    expect(notesFor({
      ...MINIMAL_THEME,
      components: [{
        selector: '.btn-primary',
        vars: {
          '--bs-btn-hover-color': 'var(--bs-black)',
          '--bs-btn-primary-hover-bg': 'var(--bs-primary-100)',
        },
      }],
    })).toEqual([]);
  });

  it('el ejemplo versionado sin sus fondos de estado da la nota; con ellos, no', () => {
    const themePath = path.join(ROOT, 'scripts/theme/themes/theme-ejemplo-zonas.json');
    const theme = JSON.parse(fs.readFileSync(themePath, 'utf8'));
    expect(notesFor(theme)).toEqual([]);

    const button = theme.zones.oscura.components.find((c: { selector: string }) => c.selector === '.btn-primary');
    button.vars = Object.fromEntries(Object.entries(button.vars)
      .filter(([name]) => !/^--bs-btn-(hover|active)-(bg|border-color)$/.test(name)));
    expect(notesFor(theme)).toEqual([expect.stringMatching(
      /^\[data-bs-theme="oscura"\] \.btn-primary fija el texto de hover y active sin su fondo/,
    )]);
  });
});

describe('el ejemplo con zonas que vive en el repo', () => {
  const themePath = path.join(ROOT, 'scripts/theme/themes/theme-ejemplo-zonas.json');

  it('cumple el esquema y genera su CSS', () => {
    const output = path.join(workdir, 'ejemplo-zonas.css');
    const result = run(EXPAND, [themePath, '-o', output]);
    expect(result.stderr).toBe('');
    expect(result.status).toBe(0);

    const css = fs.readFileSync(output, 'utf8');
    expect(css).toContain('[data-bs-theme="oscura"] {');
    expect(css).toContain('[data-bs-theme="oscura"] .list-group {');
    expect(css).toContain('.font-numeric {');
  });

  it('pasa el validador con --strict, sin errores ni avisos', () => {
    // Este ejemplo es el banco de pruebas de la herramienta: ejercita las tres
    // secciones, los componentes de zona y los pares horneados. Si deja de
    // validar, alguna regla cambió de criterio sin querer.
    const output = path.join(workdir, 'ejemplo-zonas-2.css');
    run(EXPAND, [themePath, '-o', output]);
    const result = run(VALIDATE, [output, '--strict']);
    expect(result.stderr).toBe('');
    expect(result.status).toBe(0);
  });

  it('el CSS versionado está al día con su JSON', () => {
    // El CSS se commitea para que la preview funcione recién clonado el repo;
    // si alguien toca el JSON y no regenera, esto lo dice. La versión de la
    // librería en la cabecera se ignora: release-please la sube en
    // package.json sin regenerar el CSS.
    const stripVersion = (css: string) => css.replace(
      /^( \* Para @dynamic-framework\/ui-react ).+\.$/m,
      '$1<version>.',
    );
    const output = path.join(workdir, 'ejemplo-zonas-3.css');
    run(EXPAND, [themePath, '-o', output]);
    const freshlyGenerated = fs.readFileSync(output, 'utf8');
    const committedCss = fs.readFileSync(
      path.join(ROOT, 'scripts/theme/out/theme-ejemplo-zonas.css'),
      'utf8',
    );
    expect(stripVersion(freshlyGenerated)).toBe(stripVersion(committedCss));
  });
});

describe('la receta de tinte contra el CSS compilado', () => {
  const compiled = path.join(ROOT, 'dist/css/dynamic-ui.css');
  const itIfBuilt = fs.existsSync(compiled) ? it : it.skip;

  // dist/ es build output y está gitignoreado: en CI este caso se salta.
  itIfBuilt('deriva las mismas hojas que Sass para las familias de 2.8.0', () => {
    const css = fs.readFileSync(compiled, 'utf8');
    const families: Record<string, string> = {
      indigo: '#6610f2',
      purple: '#4848b7',
      pink: '#d81b60',
      red: '#dc3545',
      orange: '#fd7e14',
      yellow: '#ffb300',
      green: '#198754',
      teal: '#20c997',
      cyan: '#0dcaf0',
    };
    for (const [family, hex] of Object.entries(families)) {
      const expanded = expandCss({ ...MINIMAL_THEME, roles: { primary: hex } });
      for (const step of [25, 50, 100, 200, 300, 400, 600, 700, 800, 900]) {
        const fromLibrary = css.match(new RegExp(`--bs-${family}-${step}-rgb:\\s*([^;]+);`));
        const fromTool = expanded.match(new RegExp(`--bs-primary-${step}-rgb:\\s*([^;]+);`));
        expect(fromLibrary).not.toBeNull();
        expect(fromTool?.[1]).toBe(fromLibrary?.[1]);
      }
    }
  });
});

describe('theme-expand — la cabecera del CSS', () => {
  const PKG_VERSION = JSON.parse(
    fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'),
  ).version as string;

  const header = (themeLine: string | null) => [
    '/*',
    ...(themeLine ? [` * Theme: ${themeLine}`] : []),
    ` * Para @dynamic-framework/ui-react ${PKG_VERSION}.`,
    ' * Se carga después del CSS de Dynamic UI.',
    ' */',
  ];

  it('emite el nombre y la versión del theme, y nada más', () => {
    const css = expandCss({ ...MINIMAL_THEME, name: 'Banco Ejemplo', version: '1.0.0' });
    // Las líneas exactas, y el bloque cerrado: cualquier línea de más aquí es
    // información interna viajando dentro del entregable.
    const expected = header('Banco Ejemplo 1.0.0');
    expect(css.split('\n').slice(0, expected.length)).toEqual(expected);
    expect(css.split('\n')[expected.length]).toBe('');
  });

  it('omite la versión cuando el theme no la trae', () => {
    const css = expandCss({ ...MINIMAL_THEME, name: 'Banco Ejemplo' });
    const expected = header('Banco Ejemplo');
    expect(css.split('\n').slice(0, expected.length)).toEqual(expected);
  });

  it('omite la línea del theme cuando no hay nombre', () => {
    const css = expandCss(MINIMAL_THEME);
    const expected = header(null);
    expect(css.split('\n').slice(0, expected.length)).toEqual(expected);
    expect(css).not.toContain('Theme:');
  });

  it('no filtra al CSS cómo se generó, ni con todas las secciones en juego', () => {
    // El theme más completo que hay en este spec, más el gris, que es lo que
    // más notas produce: si algo se escapa al archivo, sale por aquí.
    const css = expandCss({ ...SECTIONED_THEME, name: 'Banco Ejemplo', gray: '#5b6472' });
    for (const leak of ['Generado por', 'no editar a mano', 'derivad']) {
      expect(css).not.toContain(leak);
    }
  });
});

describe('theme-expand — un theme con solo roles', () => {
  const PKG_VERSION = JSON.parse(
    fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'),
  ).version as string;

  it('emite sólo el bloque raíz con la rampa del role, y el validador lo acepta', () => {
    const css = expandCss({ roles: { primary: '#166e62' } });
    expect(css).toContain(':root,\n[data-bs-theme="dynamic"] {');
    expect(css).toContain('--bs-primary-rgb: 22, 110, 98;');
    expect(css).toContain('--bs-primary-text-bg-color: var(--bs-white);');
    expect(css).toContain('--bs-primary-500-rgb: var(--bs-primary-rgb);');
    for (const step of [25, 50, 100, 200, 300, 400, 600, 700, 800, 900]) {
      expect(css).toMatch(new RegExp(`--bs-primary-${step}-rgb: \\d+, \\d+, \\d+;`));
    }
    for (const absent of ['--bs-body-', '--bs-border-', '--bs-font-sans-serif', '--bs-secondary-bg-rgb', '@media']) {
      expect(css).not.toContain(absent);
    }
    // Un único bloque, el raíz.
    expect(css.match(/\{/g)).toHaveLength(1);

    const result = validate(css);
    expect(result.stderr).not.toContain('error ');
    expect(result.stderr).not.toContain('[tipografia');
    expect(result.stderr).not.toContain('[border-color]');
    expect(result.status).toBe(0);
  });

  it('emite un bloque por cada role indicado', () => {
    const css = expandCss({ roles: { primary: '#166e62', success: '#2e7d32' } });
    expect(css).toContain('/* Role primary */');
    expect(css).toContain('/* Role success */');
    expect(css).toContain('--bs-success-rgb: 46, 125, 50;');
    expect(css).toContain('--bs-success-900-rgb:');
    expect(css).not.toContain('--bs-body-');
    expect(validate(css).status).toBe(0);
  });

  it('lleva la cabecera neutra más la línea de bloque parcial', () => {
    const css = expandCss({ name: 'Banco Ejemplo', version: '1.0.0', roles: { primary: '#166e62' } });
    const expected = [
      '/*',
      ' * Theme: Banco Ejemplo 1.0.0',
      ` * Para @dynamic-framework/ui-react ${PKG_VERSION}.`,
      ' * Bloque parcial para incorporar a una hoja de theme existente.',
      ' * Se carga después del CSS de Dynamic UI.',
      ' */',
      '',
    ];
    expect(css.split('\n').slice(0, expected.length)).toEqual(expected);
  });

  it('con `gray` emite lo mismo que en un theme completo', () => {
    const partial = expandCss({ gray: '#5b6472' });
    const full = expandCss({ ...MINIMAL_THEME, roles: {}, gray: '#5b6472' });
    const grays = (css: string) => css.match(
      / {2}--bs-(?:gray|secondary|light|dark)(?:-\d+)?-(?:rgb|text-bg-color):[^\n]+/g,
    );
    expect(grays(partial)).toEqual(grays(full));
    expect(partial).not.toContain('--bs-body-');
  });

  it('un theme completo al que le falta `radius` sigue fallando igual que antes', () => {
    const { radius, ...withoutRadius } = MINIMAL_THEME;
    expect(radius).toBeDefined();
    const result = expand(withoutRadius);
    expect(result.status).toBe(1);
    expect(result.stderr).toBe('Theme inválido:\n  - Falta `radius` (radio base, por ejemplo "0.5rem").\n');
  });

  it('rechaza `components` sin `body`, nombrando la clave', () => {
    const result = expand({
      roles: { primary: '#166e62' },
      components: [{ selector: '.btn', vars: { '--bs-btn-padding-x': '1rem' } }],
    });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain(
      '`components`: un theme con solo roles admite únicamente `roles`, `gray`, `name` y `version`',
    );
  });

  it('rechaza también una clave desconocida', () => {
    const result = expand({ roles: { primary: '#166e62' }, colores: {} });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('`colores`: un theme con solo roles admite únicamente');
  });
});

describe('theme-expand — root gana en todos los anchos', () => {
  it('quita del @media la variable que root reemplaza, en vez de duplicarla', () => {
    const result = expand({ ...MINIMAL_THEME, root: { '--bs-rfs-fs-1': '1rem' } });
    expect(result.status).toBe(0);
    const css = fs.readFileSync(result.stdout, 'utf8');

    // Una sola declaración, fuera del breakpoint y con el valor del theme: si
    // el @media conservara la suya, en desktop volvería a ganar la derivada.
    const allDeclarations = (css.match(/^\s*--bs-rfs-fs-1:.*$/gm) ?? []).map((l) => l.trim());
    expect(allDeclarations).toEqual(['--bs-rfs-fs-1: 1rem;']);

    const media = css.slice(css.indexOf('@media (min-width: 1200px)'));
    expect(media).not.toContain('--bs-rfs-fs-1');

    // Y la nota sigue diciendo lo que pasó.
    expect(result.stderr).toContain('reemplaza una variable derivada');
    expect(result.stderr).toContain('--bs-rfs-fs-1');
  });

  it('deja intactos los pasos del @media que root no toca', () => {
    const css = expandCss({
      ...MINIMAL_THEME,
      typography: { fontFamily: 'Inter, sans-serif', scale: { 1: '2.75rem', 2: '2rem' } },
      root: { '--bs-rfs-fs-1': '1rem' },
    });
    const media = css.slice(css.indexOf('@media (min-width: 1200px)'));
    expect(media).not.toContain('--bs-rfs-fs-1');
    expect(media).toContain('--bs-rfs-fs-2');
  });
});

describe('theme-expand — rem negativos', () => {
  it('rechaza un radio negativo nombrando la clave y el valor', () => {
    const result = expand({ ...MINIMAL_THEME, radius: '-0.5rem' });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('radius');
    expect(result.stderr).toContain('-0.5rem');
    expect(result.stderr).toContain('no sea negativo');
  });

  it('rechaza un paso de escala negativo nombrando la clave y el valor', () => {
    const result = expand({
      ...MINIMAL_THEME,
      typography: { fontFamily: 'Inter, sans-serif', scale: { 1: '-2rem' } },
    });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('typography.scale.1');
    expect(result.stderr).toContain('-2rem');
    expect(result.stderr).toContain('no sea negativo');
  });
});

describe('theme-validate — el triplete está acotado', () => {
  /** CSS mínimo que el validador acepta, con `--bs-primary-rgb` puesto a mano. */
  const withPrimary = (value: string) => expandCss(MINIMAL_THEME)
    .replace(/--bs-primary-rgb: [^;]+;/, `--bs-primary-rgb: ${value};`);

  it.each(['999, 0, 0', '300, 300, 300'])('rechaza el canal fuera de rango %s', (value) => {
    const result = validate(withPrimary(value));
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('[triplete]');
  });

  it('rechaza una referencia al wrapper, que no es un triplete', () => {
    const result = validate(withPrimary('var(--bs-primary)'));
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('[triplete]');
  });

  it.each(['0, 0, 0', '255, 255, 255', 'var(--bs-primary-rgb)'])('acepta %s', (value) => {
    const result = validate(withPrimary(value));
    expect(result.stderr).not.toContain('[triplete]');
  });
});

describe('triplete sin envolver en una variable de color (#1299)', () => {
  /** El CSS mínimo que el validador acepta, más un bloque propio. */
  const withBlock = (selector: string, decls: Record<string, string>) => {
    const body = Object.entries(decls).map(([name, value]) => `  ${name}: ${value};`).join('\n');
    return `${expandCss(MINIMAL_THEME)}\n${selector} {\n${body}\n}\n`;
  };
  const contrastFindings = (result: Run) => findings(result).filter((f) => / contraste-/.test(f));

  it('rechaza el caso grave de la issue y no mide el par: el navegador no lo pinta', () => {
    const result = validateStrict(withBlock('.btn-primary', {
      '--bs-btn-color': 'var(--bs-white-rgb)',
      '--bs-btn-bg': 'rgb(var(--bs-black-rgb))',
    }));
    expect(result.status).toBe(1);
    expect(findings(result)).toContainEqual(expect.stringMatching(
      /^error triplete-sin-envolver: --bs-btn-color en "\.btn-primary": "var\(--bs-white-rgb\)"/,
    ));
    expect(contrastFindings(result)).toEqual([]);
  });

  it('no mide con el triplete un par que nunca se pinta', () => {
    const result = validateStrict(withBlock('.btn-primary', {
      '--bs-btn-color': 'var(--bs-gray-25-rgb)',
      '--bs-btn-bg': 'rgb(var(--bs-gray-50-rgb))',
    }));
    expect(result.status).toBe(1);
    expect(findings(result)).toContainEqual(expect.stringMatching(
      /^error triplete-sin-envolver: --bs-btn-color en "\.btn-primary"/,
    ));
    expect(contrastFindings(result)).toEqual([]);
  });

  it.each([
    '255, 255, 255',
    'var(--bs-nope, var(--bs-white-rgb))',
    'var(--bs-nope, 255, 255, 255)',
    'var(--bs-white, var(--bs-white-rgb))',
  ])('rechaza %s, directo o por el respaldo de var()', (value) => {
    const result = validateStrict(withBlock('.btn-primary', {
      '--bs-btn-color': value,
      '--bs-btn-bg': 'rgb(var(--bs-black-rgb))',
    }));
    expect(result.status).toBe(1);
    expect(findings(result)).toContainEqual(expect.stringMatching(/^error triplete-sin-envolver: --bs-btn-color /));
  });

  it.each([
    'rgb(var(--bs-white-rgb))',
    'var(--bs-white)',
    'rgb(var(--bs-white-rgb, 0, 0, 0))',
    'rgba(var(--bs-white-rgb), .9)',
  ])('acepta %s', (value) => {
    const result = validateStrict(withBlock('.btn-primary', {
      '--bs-btn-color': value,
      '--bs-btn-bg': 'rgb(var(--bs-black-rgb))',
    }));
    expect(result.stderr).not.toContain('[triplete-sin-envolver]');
  });

  it('acepta un triplete en una variable -rgb', () => {
    const result = validateStrict(withBlock('.btn-primary', {
      '--bs-btn-focus-shadow-rgb': 'var(--bs-white-rgb)',
    }));
    expect(result.stderr).not.toContain('[triplete-sin-envolver]');
  });

  it('rechaza el triplete en un componente dentro de una zona y nombra el selector', () => {
    const result = validateStrict(withBlock('[data-bs-theme="oscura"] .btn-primary', {
      '--bs-btn-color': 'var(--bs-white-rgb)',
    }));
    expect(findings(result)).toContainEqual(expect.stringMatching(
      /^error triplete-sin-envolver: --bs-btn-color en "\[data-bs-theme="oscura"\] \.btn-primary"/,
    ));
  });

  it('rechaza un wrapper con triplete dentro de una zona', () => {
    const result = validateStrict(withBlock('[data-bs-theme="oscura"]', {
      '--bs-primary-rgb': '168, 68, 63',
      '--bs-primary': '168, 68, 63',
    }));
    expect(findings(result)).toContainEqual(expect.stringMatching(
      /^error triplete-sin-envolver: --bs-primary en "\[data-bs-theme="oscura"\]"/,
    ));
  });

  it('un wrapper con triplete en el raíz lo explica la regla wrapper, sin repetirlo', () => {
    const css = expandCss(MINIMAL_THEME)
      .replace('--bs-primary-rgb: 11, 107, 83;', '--bs-primary-rgb: 11, 107, 83;\n  --bs-primary: 11, 107, 83;');
    const result = validateStrict(css);
    expect(result.stderr).toContain('[wrapper]');
    expect(result.stderr).not.toContain('[triplete-sin-envolver]');
  });

  it('un token del raíz con triplete tampoco se mide en el par horneado que lo lee', () => {
    const css = expandCss(MINIMAL_THEME)
      .replace('--bs-primary-rgb: 11, 107, 83;', '--bs-primary-rgb: 11, 107, 83;\n  --bs-btn-primary-color: var(--bs-white-rgb);');
    const result = validateStrict(css);
    expect(findings(result)).toContainEqual(expect.stringMatching(
      /^error triplete-sin-envolver: --bs-btn-primary-color: "var\(--bs-white-rgb\)"/,
    ));
    expect(contrastFindings(result)).toEqual([]);
  });

  it.each([
    '@media (min-width: 1200px)',
    '@media (prefers-color-scheme: dark)',
  ])('rechaza el triplete dentro de %s', (media) => {
    const css = `${expandCss(MINIMAL_THEME)}\n${media} {\n  .btn-primary { --bs-btn-color: var(--bs-white-rgb); }\n}\n`;
    const result = validateStrict(css);
    expect(result.status).toBe(1);
    expect(findings(result)).toContainEqual(expect.stringMatching(
      /^error triplete-sin-envolver: --bs-btn-color en "\.btn-primary"/,
    ));
  });

  it('rechaza un wrapper con triplete del raíz dentro de @media', () => {
    const css = `${expandCss(MINIMAL_THEME)}\n@media (min-width: 1200px) {\n  :root { --bs-primary: 11, 107, 83; }\n}\n`;
    expect(findings(validateStrict(css))).toContainEqual(expect.stringMatching(
      /^error triplete-sin-envolver: --bs-primary: "11, 107, 83"/,
    ));
  });

  describe('theme-expand lo rechaza al generar', () => {
    it.each([
      ['components', { components: [{ selector: '.btn-primary', vars: { '--bs-btn-color': 'var(--bs-white-rgb)' } }] }, 'components[".btn-primary"].--bs-btn-color'],
      ['root', { root: { '--bs-heading-color': 'var(--bs-gray-300-rgb)' } }, 'root.--bs-heading-color'],
      ['zones', { zones: { oscura: { vars: { '--bs-body-bg-rgb': 'var(--bs-dark-rgb)', '--bs-primary': '11, 107, 83' } } } }, 'zones.oscura.--bs-primary'],
      ['components con !important', { components: [{ selector: '.btn-primary', vars: { '--bs-btn-color': 'var(--bs-white-rgb) !important' } }] }, 'components[".btn-primary"].--bs-btn-color'],
      ['components con comentario', { components: [{ selector: '.btn-primary', vars: { '--bs-btn-color': 'var(/**/--bs-white-rgb) /* x */' } }] }, 'components[".btn-primary"].--bs-btn-color'],
    ])('en %s', (_section, section, where) => {
      const result = expand({ ...MINIMAL_THEME, ...section });
      expect(result.status).toBe(1);
      expect(result.stderr).toContain(`\`${where}\``);
      expect(result.stderr).toContain('deja un triplete en una variable de color');
    });
  });
});

describe('theme-expand — body.borderColor conserva el alfa', () => {
  const withBorder = (borderColor: unknown) => (
    { ...MINIMAL_THEME, body: { ...MINIMAL_THEME.body, borderColor } }
  );

  // `--bs-border-color` es una variable de color directa, no un triplete
  // `-rgb`: parsearla a r/g/b deja el borde opaco y cambia el aspecto. El alfa
  // llega por cuatro vías y ninguna puede perderse.
  it.each([
    'rgba(0, 0, 0, .1)',
    'hsla(0, 0%, 0%, .1)',
    '#0000001a',
    'rgb(0 0 0 / 10%)',
  ])('emite %s tal como viene', (borderColor) => {
    expect(expandCss(withBorder(borderColor))).toContain(`--bs-border-color: ${borderColor};`);
  });

  it.each([
    ['#e4e7ec', 'rgb(228, 231, 236)'],
    ['228, 231, 236', 'rgb(228, 231, 236)'],
    ['rgb(228, 231, 236)', 'rgb(228, 231, 236)'],
  ])('sigue normalizando %s, que es opaco', (borderColor, esperado) => {
    expect(expandCss(withBorder(borderColor))).toContain(`--bs-border-color: ${esperado};`);
  });

  it('rechaza un valor que no sea string, igual que body.bg', () => {
    // parseColor es quien comprueba el tipo; envolver el valor en String()
    // antes de llamarlo dejaría pasar un array como "0,0,0".
    const result = expand(withBorder(['0', '0', '0']));
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('body.borderColor');
    expect(result.stderr).toContain('se esperaba un string con un color');
  });
});

/**
 * Los fixtures de la issue #1295: themes con zonas que el validador medía con
 * las declaraciones del raíz y de la zona mezcladas, cuando el navegador
 * resuelve cada variable donde se declara y hereda el valor ya calculado.
 */
const ZONE_FIXTURES = {
  zoneWrapper: [
    ':root,',
    '[data-bs-theme="dynamic"] {',
    '  --bs-body-bg-rgb: 255, 255, 255;',
    '  --bs-body-color-rgb: 16, 24, 40;',
    '  --bs-border-color: rgb(228, 231, 236);',
    '}',
    '',
    '[data-bs-theme="oscura"] {',
    '  --bs-link-color-rgb: var(--bs-primary);',
    '}',
    '',
  ].join('\n'),
  aliasFromLibrary: [
    ':root,',
    '[data-bs-theme="dynamic"] {',
    '  --bs-gray-rgb: 140, 140, 140;',
    '  --bs-gray-25-rgb: 250, 250, 250;',
    '  --bs-gray-50-rgb: 245, 245, 245;',
    '  --bs-gray-100-rgb: 235, 235, 235;',
    '  --bs-gray-200-rgb: 220, 220, 220;',
    '  --bs-gray-300-rgb: 200, 200, 200;',
    '  --bs-gray-400-rgb: 170, 170, 170;',
    '  --bs-gray-500-rgb: 140, 140, 140;',
    '  --bs-gray-600-rgb: 110, 110, 110;',
    '  --bs-gray-700-rgb: 85, 85, 85;',
    '  --bs-gray-800-rgb: 64, 64, 64;',
    '  --bs-gray-900-rgb: 48, 48, 48;',
    '  --bs-secondary-bg-rgb: 128, 128, 128;',
    '}',
    '',
  ].join('\n'),
  aliasNotFollowed: [
    ':root,',
    '[data-bs-theme="dynamic"] {',
    '  --bs-body-bg-rgb: 255, 255, 255;',
    '  --bs-body-color-rgb: var(--bs-gray-900-rgb);',
    '  --bs-border-color: rgb(228, 231, 236);',
    '  --bs-secondary-bg-rgb: 240, 240, 240;',
    '}',
    '',
    '[data-bs-theme="clara"] {',
    '  --bs-gray-900-rgb: 250, 250, 250;',
    '  --bs-secondary-bg-rgb: 235, 235, 235;',
    '}',
    '',
  ].join('\n'),
  aliasUnresolved: [
    ':root,',
    '[data-bs-theme="dynamic"] {',
    '  --bs-body-bg-rgb: 255, 255, 255;',
    '  --bs-body-color-rgb: 16, 24, 40;',
    '  --bs-border-color: rgb(228, 231, 236);',
    '  --bs-secondary-bg-rgb: var(--bs-body-bg-rgb);',
    '}',
    '',
    '[data-bs-theme="oscura"] {',
    '  --bs-body-bg-rgb: 0, 0, 0;',
    '  --bs-body-color-rgb: 255, 255, 255;',
    '}',
    '',
  ].join('\n'),
  varFallback: [
    ':root,',
    '[data-bs-theme="dynamic"] {',
    '  --bs-body-bg-rgb: 255, 255, 255;',
    '  --bs-body-color-rgb: 16, 24, 40;',
    '  --bs-border-color: rgb(228, 231, 236);',
    '}',
    '',
    '[data-bs-theme="oscura"] {',
    '  --bs-body-bg-rgb: 16, 24, 40;',
    '  --bs-body-color-rgb: var(--bs-optional-rgb, 255, 255, 255);',
    '}',
    '',
  ].join('\n'),
  zoneSplitInTwo: [
    ':root,',
    '[data-bs-theme="dynamic"] {',
    '  --bs-body-bg-rgb: 255, 255, 255;',
    '  --bs-body-color-rgb: 16, 24, 40;',
    '  --bs-border-color: rgb(228, 231, 236);',
    '}',
    '',
    '[data-bs-theme="oscura"] {',
    '  --bs-body-bg-rgb: 16, 24, 40;',
    '}',
    '',
    '[data-bs-theme="oscura"] {',
    '  --bs-body-color-rgb: 255, 255, 255;',
    '}',
    '',
  ].join('\n'),
};

/**
 * Cada error y aviso de una salida, como `<tipo> <regla>: <primera línea>`,
 * salvo `wrapper-faltante-zona`. Estos fixtures
 * redefinen tripletes en la zona sin su wrapper a propósito, porque miden lo
 * que el navegador hace en ese caso; ese aviso tiene sus propios casos.
 */
function findings(result: Run, rule?: string): string[] {
  return [...result.stderr.matchAll(/^(error|aviso)\s+\S+\s+\[([\w-]+)\]\n {2}(.*)$/gm)]
    .filter((m) => m[2] !== 'wrapper-faltante-zona')
    // Un caso que mide una regla concreta se queda con la suya: una zona oscura
    // arrastra siempre los pares horneados de sus componentes, y listarlos en
    // cada expectativa taparía lo que el caso comprueba. Quien filtre tiene que
    // fijar además el reparto completo con `rules`: si no, una regla ajena que
    // empiece a disparar se cuela por el filtro y el caso sigue en verde.
    .filter((m) => !rule || m[2] === rule)
    .map((m) => `${m[1]} ${m[2]}: ${m[3]}`);
}

/**
 * Qué reglas disparan en una salida y cuántas veces cada una, como
 * `<regla> x<n>`, en orden alfabético. Es el contrapeso del filtro de
 * `findings`: fija lo que el caso no lista hallazgo por hallazgo, de modo que
 * una regla que aparece, desaparece o cambia de cuenta rompe el caso.
 */
function rules(result: Run): string[] {
  const count = new Map<string, number>();
  for (const m of result.stderr.matchAll(/^(?:error|aviso)\s+\S+\s+\[([\w-]+)\]$/gm)) {
    if (m[1] === 'wrapper-faltante-zona') continue;
    count.set(m[1], (count.get(m[1]) ?? 0) + 1);
  }
  return [...count].map(([rule, n]) => `${rule} x${n}`).sort();
}

/**
 * Los tripletes que nombra `wrapper-faltante-zona`, en orden. Con ellos, --strict
 * sale con 1 aunque `findings` esté vacío.
 */
function missingWrappers(result: Run): string[] {
  return [...result.stderr.matchAll(/\[wrapper-faltante-zona\]\n {2}(--bs-[\w-]+-rgb)/g)].map((m) => m[1]);
}

function validateStrict(css: string): Run {
  return run(VALIDATE, [write(css, '.css'), '--strict']);
}

describe('theme-validate — las zonas se resuelven como en el navegador (#1295)', () => {
  it('alias-falso: el texto del raíz no sigue al token que sólo cambia la zona', () => {
    // --bs-body-color-rgb, --bs-list-group-action-color y --bs-dark-rgb se
    // calculan en :root con el gray-900 del raíz; la zona no los mueve.
    const result = validateStrict(ZONE_FIXTURES.aliasNotFollowed);
    expect(findings(result)).toEqual([]);
    // --strict sale con 1 sólo por los wrappers que la zona omite a propósito.
    expect(missingWrappers(result)).toEqual(['--bs-gray-900-rgb', '--bs-secondary-bg-rgb']);
    expect(result.stderr).toContain('0 errores, 2 aviso(s)');
    expect(result.status).toBe(1);
  });

  it('alias-perdido: sigue detectando los pares rotos de la zona', () => {
    const result = validateStrict(ZONE_FIXTURES.aliasUnresolved);
    expect(findings(result)).toEqual([
      expect.stringMatching(/^aviso contraste-superficie: --bs-secondary-bg-rgb dentro de \[data-bs-theme="oscura"\]: 1\.00:1/),
      expect.stringMatching(/^aviso contraste-enlace-zona: Zona "oscura": el enlace da 4\.00:1/),
      expect.stringMatching(/^error contraste-horneado: "\.list-group-item dentro de \[data-bs-theme="oscura"\]": 1\.15:1 entre --bs-list-group-color \(--bs-gray-900-rgb\)/),
      expect.stringMatching(/^error contraste-horneado: "\.list-group-item-action dentro de \[data-bs-theme="oscura"\]": 1\.15:1 entre --bs-list-group-action-color \(--bs-gray-900-rgb\)/),
    ]);
    expect(result.status).toBe(1);
  });

  it('i1-respaldo: mide el cuerpo de la zona con el respaldo de var()', () => {
    const result = validateStrict(ZONE_FIXTURES.varFallback);
    expect(findings(result)).toEqual([
      expect.stringMatching(/^aviso contraste-enlace-zona: Zona "oscura": el enlace da 3\.38:1/),
      expect.stringMatching(/^error contraste-horneado: "\.list-group-item dentro de \[data-bs-theme="oscura"\]": 1\.03:1/),
      expect.stringMatching(/^error contraste-horneado: "\.list-group-item-action dentro de \[data-bs-theme="oscura"\]": 1\.03:1/),
    ]);
    expect(missingWrappers(result)).toEqual(['--bs-body-bg-rgb', '--bs-body-color-rgb']);
    expect(result.stderr).toContain('2 error(es), 3 aviso(s)');
    expect(result.status).toBe(1);
  });

  it('i2-zona-repartida: funde los bloques de la zona antes de medir el cuerpo', () => {
    const result = validateStrict(ZONE_FIXTURES.zoneSplitInTwo);
    expect(findings(result)).toEqual([
      expect.stringMatching(/^aviso contraste-enlace-zona: Zona "oscura": el enlace da 3\.38:1/),
      expect.stringMatching(/^error contraste-horneado: "\.list-group-item dentro de \[data-bs-theme="oscura"\]": 1\.03:1/),
      expect.stringMatching(/^error contraste-horneado: "\.list-group-item-action dentro de \[data-bs-theme="oscura"\]": 1\.03:1/),
    ]);
    expect(missingWrappers(result)).toEqual(['--bs-body-bg-rgb', '--bs-body-color-rgb']);
    expect(result.stderr).toContain('2 error(es), 3 aviso(s)');
    expect(result.status).toBe(1);
  });

  it('i3-alias-libreria: el texto del cuerpo por defecto sigue a la rampa de grises del theme', () => {
    // En la librería --bs-body-color-rgb es var(--bs-gray-900-rgb): con el
    // gray-900 del theme (48, 48, 48) sobre secondary-bg (128, 128, 128), 3.34:1.
    const result = validateStrict(ZONE_FIXTURES.aliasFromLibrary);
    expect(findings(result)).toEqual([
      expect.stringMatching(/^aviso contraste-superficie: --bs-secondary-bg-rgb: 3\.34:1 entre --bs-body-color-rgb \(el de Dynamic, porque el theme no lo declara\)/),
      expect.stringMatching(/^error contraste-horneado: "\.form-text": 3\.11:1/),
      expect.stringMatching(/^error contraste-horneado: "\.text-bg-warning": 4\.15:1 entre --bs-warning-text-bg-color \(--bs-gray-700-rgb\)/),
    ]);
    expect(result.stdout).toContain('[superficie-heredada]');
    expect(result.status).toBe(1);
  });

  it('i4-zona-wrapper: da triplete en la variable -rgb de la zona, una sola vez, y no el síntoma', () => {
    const result = validateStrict(ZONE_FIXTURES.zoneWrapper);
    expect(findings(result)).toEqual([
      expect.stringMatching(/^error triplete: --bs-link-color-rgb dentro de \[data-bs-theme="oscura"\]: "var\(--bs-primary\)" no es un triplete/),
    ]);
    expect(result.stderr).toContain('1 error(es), 0 aviso(s)');
    expect(result.status).toBe(1);
  });

  it.each(['inherit', 'unset', 'revert'])('acepta %s en una variable -rgb de una zona, y mide el valor heredado', (keyword) => {
    // Theme generado por theme-expand: la zona vuelve al texto del raíz.
    // Chromium: el mismo par que el raíz, 17.75:1.
    const okRun = validateStrict(expandCss({
      ...MINIMAL_THEME,
      zones: { clara: { vars: { '--bs-body-color-rgb': keyword } } },
    }));
    expect(findings(okRun)).toEqual([]);
    expect(okRun.status).toBe(0);

    // Una superficie que vuelve al valor del raíz se mide contra el texto de la
    // zona, en vez de saltarse: aquí el texto casi blanco sobre gray-200.
    const measuredRun = validateStrict(expandCss({
      ...MINIMAL_THEME,
      zones: { clara: { vars: { '--bs-body-color-rgb': '240, 240, 240', '--bs-secondary-bg-rgb': keyword } } },
    }));
    expect(findings(measuredRun)).toEqual(expect.arrayContaining([
      expect.stringMatching(/^aviso contraste-superficie: --bs-secondary-bg-rgb dentro de \[data-bs-theme="clara"\]: /),
    ]));
    expect(findings(measuredRun).filter((f) => f.includes('[triplete]') || f.startsWith('error triplete'))).toEqual([]);
  });

  it('revisa una vez la variable de una zona repartida en dos reglas, con el valor que gana', () => {
    // La primera regla la declara mal y la segunda bien: el navegador usa la
    // segunda, así que no hay nada que reportar. Al revés, un solo error.
    const zoneRule = (rootValue: string, zoneValue: string) => `${ZONE_FIXTURES.zoneWrapper.replace(
      '  --bs-link-color-rgb: var(--bs-primary);\n',
      `  --bs-link-color-rgb: ${rootValue};\n`,
    )}\n[data-bs-theme="oscura"] {\n  --bs-link-color-rgb: ${zoneValue};\n}\n`;
    expect(findings(validateStrict(zoneRule('var(--bs-primary)', '11, 107, 83')))).toEqual([]);
    const result = validateStrict(zoneRule('11, 107, 83', '#0b6b53'));
    expect(findings(result)).toEqual([
      expect.stringMatching(/^error triplete: --bs-link-color-rgb dentro de \[data-bs-theme="oscura"\]: "#0b6b53"/),
    ]);
    expect(result.status).toBe(1);
  });

  it('un theme con zonas escrito a mano según el README pasa --strict', () => {
    const file = path.join(ROOT, 'scripts/theme/fixtures/theme-zona-a-mano.css');
    const result = run(VALIDATE, [file, '--strict']);
    expect(findings(result)).toEqual([]);
    expect(result.stderr).toBe('');
    expect(result.stdout).toContain('sin errores (0 aviso(s))');
    expect(result.status).toBe(0);
  });

  it('no acepta un color completo dentro de rgb(): rgb(var(--bs-white)) no se pinta', () => {
    const css = `${expandCss(MINIMAL_THEME)}\n.btn-primary {\n  --bs-btn-color: rgb(var(--bs-white));\n}\n`;
    const result = validateStrict(css);
    expect(findings(result)).toEqual([
      expect.stringMatching(/^aviso contraste-irresoluble: No se pudo medir "\.btn-primary": --bs-btn-color envuelve en rgb\(\) a --bs-white, que ya vale un color completo/),
    ]);
    expect(result.status).toBe(1);
  });

  it('avisa del enlace irresoluble cuando R1 no rechazó la declaración', () => {
    // El formato es válido (un var() a una -rgb), pero el respaldo no es un
    // triplete: R1 no dice nada, así que el aviso no se puede callar.
    const css = ZONE_FIXTURES.zoneWrapper.replace('var(--bs-primary)', 'var(--bs-optional-rgb, #fff)');
    const result = validateStrict(css);
    expect(findings(result)).toEqual([
      expect.stringMatching(/^aviso contraste-irresoluble: No se pudo medir el enlace de la zona "oscura": --bs-link-color-rgb vale "#fff"/),
    ]);
    expect(result.status).toBe(1);
  });

  it('un texto transparente no se mide contra la superficie: no se ve', () => {
    const css = `${expandCss(MINIMAL_THEME)}\n.btn-primary {\n  --bs-btn-color: transparent;\n  --bs-btn-bg: rgb(var(--bs-black-rgb));\n}\n`;
    const result = validateStrict(css);
    expect(findings(result)).toEqual([
      expect.stringMatching(/^aviso contraste-irresoluble: No se pudo medir "\.btn-primary": --bs-btn-color es transparente: el texto no se ve/),
    ]);
    expect(result.status).toBe(1);
  });

  it('mide cada alternativa de una lista de selectores por separado', () => {
    // `.other` cambia después su fondo a negro; eso no llega a `.nav-pills`,
    // que sigue con texto blanco sobre fondo blanco.
    const css = `${expandCss(MINIMAL_THEME)}\n.nav-pills,\n.other {\n`
      + '  --bs-nav-pills-link-active-color: rgb(var(--bs-white-rgb));\n'
      + '  --bs-nav-pills-link-active-bg: rgb(var(--bs-white-rgb));\n}\n'
      + '\n.other {\n  --bs-nav-pills-link-active-bg: rgb(var(--bs-black-rgb));\n}\n';
    const result = validateStrict(css);
    expect(findings(result)).toEqual([
      expect.stringMatching(/^error contraste-nav-pills: Pill activo en "\.nav-pills": 1\.00:1/),
    ]);
    expect(result.status).toBe(1);
  });

  it('lo que declara el ítem no cambia lo que .list-group ya resolvió', () => {
    // --bs-list-group-color y --bs-list-group-action-color se calculan en
    // .list-group con sus wrappers: redefinir --bs-gray-900 o --bs-dark en el
    // ítem no los mueve. Comprobado en Chromium: el texto sigue en 21, 21, 26.
    const css = `${expandCss(MINIMAL_THEME)}\n.list-group-item {\n`
      + '  --bs-gray-900: rgb(var(--bs-white-rgb));\n  --bs-dark: rgb(var(--bs-white-rgb));\n}\n';
    const result = validateStrict(css);
    expect(findings(result)).toEqual([]);
    expect(result.status).toBe(0);
  });

  it('lo que declara el ítem sobre su propia variable sí cuenta', () => {
    const css = `${expandCss(MINIMAL_THEME)}\n.list-group-item {\n`
      + '  --bs-list-group-color: rgb(var(--bs-white-rgb));\n}\n';
    const result = validateStrict(css);
    expect(findings(result)).toEqual([
      expect.stringMatching(/^error contraste-horneado: "\.list-group-item": 1\.\d\d:1 entre --bs-list-group-color \(--bs-white-rgb\)/),
    ]);
    expect(result.status).toBe(1);
  });

  it.each(['inherit', 'unset', 'revert'])('una variable que el componente pone a %s toma el valor del padre', (keyword) => {
    // Chromium pinta el --bs-white heredado, blanco, sobre negro.
    const css = expandCss({
      ...MINIMAL_THEME,
      components: [{
        selector: '.btn-primary',
        vars: {
          '--bs-white': keyword,
          '--bs-btn-color': 'var(--bs-white)',
          '--bs-btn-bg': 'rgb(var(--bs-black-rgb))',
        },
      }],
    });
    const result = validateStrict(css);
    expect(findings(result)).toEqual([]);
    expect(result.status).toBe(0);
  });

  it('usa el respaldo de quien lee una variable que el componente pone a initial', () => {
    // Chromium pinta negro sobre gray-50: el respaldo de var() entra.
    const css = expandCss({
      ...MINIMAL_THEME,
      components: [{
        selector: '.btn-primary',
        vars: {
          '--bs-white-rgb': 'initial',
          '--bs-btn-color': 'rgb(var(--bs-white-rgb, 0, 0, 0))',
          '--bs-btn-bg': 'rgb(var(--bs-gray-50-rgb))',
        },
      }],
    });
    const result = validateStrict(css);
    expect(findings(result)).toEqual([]);
    expect(result.status).toBe(0);
  });

  it('usa el respaldo de quien lee una variable en ciclo, como el navegador', () => {
    // Chromium pinta blanco sobre negro: --bs-optional-rgb queda inválida por el
    // ciclo y --bs-btn-color usa su respaldo.
    const css = `${expandCss(MINIMAL_THEME)}\n.btn-primary {\n`
      + '  --bs-optional-rgb: var(--bs-optional-rgb);\n'
      + '  --bs-btn-color: rgb(var(--bs-optional-rgb, 255, 255, 255));\n'
      + '  --bs-btn-bg: rgb(var(--bs-black-rgb));\n}\n';
    const result = validateStrict(css);
    expect(findings(result)).toEqual([]);
    expect(result.status).toBe(0);
  });

  it('un botón global no cambia dentro de una zona que sólo cambia los tripletes de su role', () => {
    // --bs-btn-primary-bg es var(--bs-primary-500), un wrapper calculado en
    // :root: el triplete de la zona no llega al botón. Comprobado en Chromium.
    const css = `${expandCss(MINIMAL_THEME)}\n[data-bs-theme="oscura"] {\n`
      + '  --bs-body-bg-rgb: 16, 24, 40;\n  --bs-body-color-rgb: 255, 255, 255;\n'
      + '  --bs-secondary-bg-rgb: var(--bs-gray-800-rgb);\n  --bs-tertiary-bg-rgb: var(--bs-gray-900-rgb);\n'
      + '  --bs-primary-500-rgb: 250, 250, 250;\n  --bs-white-rgb: 250, 250, 250;\n}\n'
      + '\n[data-bs-theme="oscura"] .list-group {\n  --bs-list-group-color: rgb(var(--bs-body-color-rgb));\n'
      + '  --bs-list-group-action-color: rgb(var(--bs-body-color-rgb));\n}\n';
    const result = validateStrict(css);
    expect(findings(result, 'contraste-boton')).toEqual([]);
    expect(rules(result)).toEqual(['contraste-enlace-zona x1']);
    // --strict sale con 1 sólo por los wrappers que la zona omite a propósito.
    expect(missingWrappers(result)).toEqual([
      '--bs-body-bg-rgb', '--bs-body-color-rgb', '--bs-secondary-bg-rgb',
      '--bs-tertiary-bg-rgb', '--bs-primary-500-rgb', '--bs-white-rgb',
    ]);
    expect(result.status).toBe(1);
  });

  it('no usa el respaldo de un token que la librería define: --bs-link-color-rgb es el primary', () => {
    // En la librería --bs-link-color-rgb es var(--bs-primary-rgb): el texto del
    // botón es el mismo primary que su fondo. Chromium lo pinta así, 1:1.
    const css = `${expandCss(MINIMAL_THEME)}\n.btn-primary {\n`
      + '  --bs-btn-color: rgb(var(--bs-link-color-rgb, var(--bs-white-rgb)));\n}\n';
    const result = validateStrict(css);
    expect(findings(result)).toEqual([
      expect.stringMatching(/^error contraste-boton: "\.btn-primary": 1\.00:1 entre el texto --bs-btn-color \(--bs-primary-rgb\)/),
    ]);
    expect(result.status).toBe(1);
  });

  it('un .btn-secondary con fondo propio lleva el texto de la librería, --bs-secondary-700', () => {
    // La librería pone var(--bs-btn-secondary-color) = var(--bs-secondary-700)
    // en .btn-secondary. Sobre gray-800, el blanco contrastaría; el 700, no.
    const css = `${expandCss(MINIMAL_THEME)}\n.btn-secondary {\n  --bs-btn-bg: rgb(var(--bs-gray-800-rgb));\n}\n`;
    const result = validateStrict(css);
    expect(findings(result)).toEqual([
      expect.stringMatching(/^error contraste-boton: "\.btn-secondary": 1\.\d\d:1 entre el texto --bs-btn-color \(--bs-secondary-700-rgb\) y el fondo --bs-btn-bg \(--bs-gray-800-rgb\)/),
    ]);
    expect(result.status).toBe(1);
  });

  it('un pill activo sin fondo propio se mide sobre el de la librería, --bs-gray-50', () => {
    // .nav-pills pone --bs-nav-pills-link-active-bg: var(--bs-gray-50). Un texto
    // casi blanco contrastaría con --bs-primary; con gray-50, no.
    const css = `${expandCss(MINIMAL_THEME)}\n.nav-pills {\n  --bs-nav-pills-link-active-color: rgb(var(--bs-gray-25-rgb));\n}\n`;
    const result = validateStrict(css);
    expect(findings(result)).toEqual([
      expect.stringMatching(/^error contraste-nav-pills: Pill activo en "\.nav-pills": 1\.\d\d:1 entre --bs-nav-pills-link-active-color \(--bs-gray-25-rgb\) y --bs-nav-pills-link-active-bg \(--bs-gray-50-rgb\)/),
    ]);
    expect(result.status).toBe(1);
  });

  it('lo que declara el enlace activo no cambia lo que .nav-pills ya resolvió', () => {
    // El contenedor calcula el fondo como negro y el enlace lo hereda así,
    // aunque redefina --bs-black. Chromium: negro sobre negro, y blanco sobre
    // negro si el enlace pone el texto blanco.
    const pills = `${expandCss(MINIMAL_THEME)}\n.nav-pills {\n`
      + '  --bs-nav-pills-link-active-color: var(--bs-white);\n'
      + '  --bs-nav-pills-link-active-bg: var(--bs-black);\n}\n';
    const link = (color: string) => `${pills}\n.nav-pills .nav-link.active {\n`
      + `  --bs-black: rgb(var(--bs-white-rgb));\n  --bs-nav-pills-link-active-color: ${color};\n}\n`;

    const brokenCss = validateStrict(link('rgb(var(--bs-black-rgb))'));
    expect(findings(brokenCss)).toEqual([
      expect.stringMatching(/^error contraste-nav-pills: Pill activo en "\.nav-pills \.nav-link\.active": 1\.00:1/),
    ]);
    expect(brokenCss.status).toBe(1);

    const okRun = validateStrict(link('rgb(var(--bs-white-rgb))'));
    expect(findings(okRun)).toEqual([]);
    expect(okRun.status).toBe(0);
  });

  it('en la capa de un elemento gana la declaración más específica, no la última', () => {
    // `.sidebar .nav-pills` gana a un `.nav-pills` posterior. Chromium: blanco
    // sobre blanco en el primer caso, y blanco sobre negro en el segundo.
    const W = 'rgb(var(--bs-white-rgb))';
    const B = 'rgb(var(--bs-black-rgb))';
    const pill = (sel: string, color: string, bg: string) => `${sel} {\n`
      + `  --bs-nav-pills-link-active-color: ${color};\n  --bs-nav-pills-link-active-bg: ${bg};\n}\n`;

    const shadowedRun = validateStrict(`${expandCss(MINIMAL_THEME)}\n${pill('.sidebar .nav-pills', W, W)}\n${pill('.nav-pills', B, W)}`);
    expect(findings(shadowedRun)).toEqual([
      expect.stringMatching(/^error contraste-nav-pills: Pill activo en "\.sidebar \.nav-pills": 1\.00:1/),
    ]);
    expect(shadowedRun.status).toBe(1);

    // Aquí el único par roto es el de `.nav-pills` fuera de `.sidebar`.
    const unrelatedRun = validateStrict(`${expandCss(MINIMAL_THEME)}\n${pill('.sidebar .nav-pills', W, B)}\n${pill('.nav-pills', W, W)}`);
    expect(findings(unrelatedRun)).toEqual([
      expect.stringMatching(/^error contraste-nav-pills: Pill activo en "\.nav-pills": 1\.00:1/),
    ]);
    expect(unrelatedRun.status).toBe(1);
  });

  it('conserva el combinador del ancestro de un pill descendiente', () => {
    // El contenedor es `.sidebar > .nav-pills`: el enlace hereda su fondo negro
    // y pone el texto negro. Chromium: negro sobre negro, 1:1.
    const css = `${expandCss(MINIMAL_THEME)}\n.sidebar > .nav-pills {\n`
      + '  --bs-nav-pills-link-active-color: rgb(var(--bs-white-rgb));\n'
      + '  --bs-nav-pills-link-active-bg: rgb(var(--bs-black-rgb));\n}\n'
      + '\n.sidebar > .nav-pills .nav-link.active {\n'
      + '  --bs-nav-pills-link-active-color: rgb(var(--bs-black-rgb));\n}\n';
    const result = validateStrict(css);
    expect(findings(result)).toEqual([
      expect.stringMatching(/^error contraste-nav-pills: Pill activo en "\.sidebar > \.nav-pills \.nav-link\.active": 1\.00:1/),
    ]);
    expect(result.status).toBe(1);
  });

  describe('el pill se mide en el enlace que lo pinta', () => {
    const W = 'rgb(var(--bs-white-rgb))';
    const B = 'rgb(var(--bs-black-rgb))';
    const color = '--bs-nav-pills-link-active-color';
    const bg = '--bs-nav-pills-link-active-bg';

    it('el enlace corrige el fondo que el contenedor deja roto', () => {
      // Theme generado por theme-expand. Todo pill activo
      // pinta blanco sobre negro: el bloque del enlace gana al del contenedor.
      const css = expandCss({
        ...MINIMAL_THEME,
        components: [
          { selector: '.nav-pills', vars: { [color]: W, [bg]: W } },
          { selector: '.nav-pills .nav-link.active', vars: { [bg]: B } },
        ],
      });
      const result = validateStrict(css);
      expect(findings(result)).toEqual([]);
      expect(result.status).toBe(0);
    });

    it('el enlace corrige también con la zona pegada al contenedor', () => {
      // El mismo par, esta vez dentro de `[data-bs-theme="oscura"].nav-pills`:
      // la zona en el propio contenedor no cambia quién pinta el pill.
      const css = expandCss({
        ...MINIMAL_THEME,
        components: [
          { selector: '[data-bs-theme="oscura"].nav-pills', vars: { [color]: W, [bg]: W } },
          { selector: '[data-bs-theme="oscura"].nav-pills .nav-link.active', vars: { [bg]: B } },
        ],
        zones: { oscura: { vars: { '--bs-heading-color': B } } },
      });
      const result = validateStrict(css);
      // Antes aquí salían dos avisos `zona-pegada`, que eran el validador
      // diciendo que no sabía modelar una zona en el propio elemento. Desde
      // #1388 la mide como el navegador, así que el caso queda limpio: el
      // enlace corrige el par y no hay nada que revisar a mano.
      expect(findings(result)).toEqual([]);
      expect(result.status).toBe(0);
    });

    it('lo reporta el bloque pegado a la zona cuando es el que gana la cascada', () => {
      // `[z] .nav-pills` y `[z].nav-pills` pesan igual y el segundo va después:
      // el par roto es el suyo y el hallazgo tiene que apuntar a su línea.
      const css = expandCss({
        ...MINIMAL_THEME,
        components: [
          { selector: '[data-bs-theme="oscura"] .nav-pills', vars: { [color]: B, [bg]: W } },
          { selector: '[data-bs-theme="oscura"].nav-pills', vars: { [color]: W, [bg]: W } },
        ],
        zones: { oscura: { vars: { '--bs-heading-color': B } } },
      });
      const lines = css.split('\n');
      const attached = lines.findIndex((l) => l.startsWith('[data-bs-theme="oscura"].nav-pills {')) + 2;
      const result = validateStrict(css);
      expect(findings(result, 'contraste-nav-pills')).toEqual([
        expect.stringMatching(/^error contraste-nav-pills: Pill activo en "\[data-bs-theme="oscura"\]\.nav-pills( dentro de \[data-bs-theme="oscura"\])?": 1\.00:1/),
      ]);
      expect(result.stderr).toMatch(new RegExp(`\\.css:${attached} {2}\\[contraste-nav-pills\\]`));
      expect(result.status).toBe(1);
    });

    it('un par que sigue roto en el enlace se detecta una sola vez', () => {
      // El enlace repite el blanco del contenedor sobre fondo blanco: 1:1 en
      // Chromium. Lo reporta el enlace, que es quien pinta el pill.
      const css = expandCss({
        ...MINIMAL_THEME,
        components: [
          { selector: '.nav-pills', vars: { [color]: W, [bg]: W } },
          { selector: '.nav-pills .nav-link.active', vars: { [color]: W } },
        ],
      });
      const result = validateStrict(css);
      expect(findings(result)).toEqual([
        expect.stringMatching(/^error contraste-nav-pills: Pill activo en "\.nav-pills \.nav-link\.active": 1\.00:1/),
      ]);
      expect(result.status).toBe(1);
    });

    it('un bloque sobre .nav-link sin .active también pinta el pill', () => {
      // `.nav-link.active` es un `.nav-link`: el texto negro que pone este
      // bloque gana sobre el blanco del contenedor. Chromium: negro sobre
      // negro, 1:1.
      const css = `${expandCss(MINIMAL_THEME)}\n.nav-pills {\n`
        + `  ${color}: ${W};\n  ${bg}: ${B};\n}\n`
        + `\n.nav-pills .nav-link {\n  ${color}: ${B};\n}\n`;
      const result = validateStrict(css);
      expect(findings(result)).toEqual([
        expect.stringMatching(/^error contraste-nav-pills: Pill activo en "\.nav-pills \.nav-link": 1\.00:1/),
      ]);
      expect(result.status).toBe(1);
    });

    it('una regla genérica del enlace alcanza a un contenedor cualificado', () => {
      // `.nav-pills .nav-link.active` casa también con los pills de
      // `.sidebar .nav-pills`. Chromium: blanco sobre negro, 21:1, dentro y
      // fuera de la barra.
      const css = `${expandCss(MINIMAL_THEME)}\n.nav-pills {\n  ${color}: ${W};\n}\n`
        + `\n.sidebar .nav-pills {\n  ${color}: ${W};\n  ${bg}: ${W};\n}\n`
        + `\n.nav-pills .nav-link.active {\n  ${bg}: ${B};\n}\n`;
      const result = validateStrict(css);
      expect(findings(result)).toEqual([]);
      expect(result.status).toBe(0);
    });

    it('el enlace de otro contenedor no corrige el pill genérico', () => {
      // `.sidebar .nav-pills .nav-link.active` sólo arregla los pills de
      // la barra lateral; las de fuera siguen rotas.
      const css = expandCss({
        ...MINIMAL_THEME,
        components: [
          { selector: '.nav-pills', vars: { [color]: W, [bg]: W } },
          { selector: '.sidebar .nav-pills .nav-link.active', vars: { [bg]: B } },
        ],
      });
      const result = validateStrict(css);
      expect(findings(result)).toEqual([
        expect.stringMatching(/^error contraste-nav-pills: Pill activo en "\.nav-pills": 1\.00:1/),
      ]);
      expect(result.status).toBe(1);
    });

    it('conserva el combinador del ancestro de un pill descendiente', () => {
      // El contenedor es `.sidebar > .nav-pills`: el enlace hereda su fondo
      // negro y pone el texto negro. Chromium: negro sobre negro, 1:1.
      const css = `${expandCss(MINIMAL_THEME)}\n.sidebar > .nav-pills {\n`
        + `  ${color}: ${W};\n  ${bg}: ${B};\n}\n`
        + `\n.sidebar > .nav-pills .nav-link.active {\n  ${color}: ${B};\n}\n`;
      const result = validateStrict(css);
      expect(findings(result)).toEqual([
        expect.stringMatching(/^error contraste-nav-pills: Pill activo en "\.sidebar > \.nav-pills \.nav-link\.active": 1\.00:1/),
      ]);
      expect(result.status).toBe(1);
    });
  });

  describe('lo que no cuenta como enlace activo', () => {
    const W = 'rgb(var(--bs-white-rgb))';
    const B = 'rgb(var(--bs-black-rgb))';
    const color = '--bs-nav-pills-link-active-color';
    const bg = '--bs-nav-pills-link-active-bg';

    // Sólo cuenta el enlace activo escrito dentro de su contenedor. Con un
    // estado, un atributo o un descendiente cualquiera de por medio, a qué
    // enlaces llega el bloque depende del HTML, que el validador no ve: no
    // corrige el par, y el error del contenedor se sigue dando.
    it.each([
      ['un estado', '.nav-pills .nav-link.active:hover'],
      ['un estado del ítem', '.nav-pills .nav-item:hover .nav-link.active'],
      ['una clase de más', '.nav-pills .nav-link.active.featured'],
      ['un id', '.nav-pills .nav-link.active#destacado'],
      ['un atributo', '.nav-pills .nav-link.active[data-label="a"]'],
      ['una negación', '.nav-pills .nav-link.active:not(.featured)'],
      ['otra pseudoclase', '.nav-pills .nav-item:first-child .nav-link.active'],
      ['un combinador de hermano', '.nav-pills .nav-item + .nav-item .nav-link.active'],
      ['un pseudoelemento', '.nav-pills .nav-link.active::before'],
      ['un tipo', '.nav-pills a.nav-link.active'],
      ['una clase escapada', '.nav-pills .nav-link\\+featured.active'],
      ['el ítem, que no es el enlace', '.nav-pills .nav-item'],
      ['otro descendiente', '.nav-pills .dropdown-menu'],
      ['un .nav-pills dentro de :not()', '.nav-pills .nav-link.active:not(.nav-pills)'],
      ['un .nav-pills dentro de un atributo', '.nav-pills .nav-link.active[data-label="].nav-pills"]'],
    ])('%s no corrige el par del contenedor', (_, selector) => {
      const css = `${expandCss(MINIMAL_THEME)}\n.nav-pills {\n`
        + `  ${color}: ${W};\n  ${bg}: ${W};\n}\n`
        + `\n${selector} {\n  ${bg}: ${B};\n}\n`;
      const result = validateStrict(css);
      expect(findings(result)).toEqual([
        expect.stringMatching(/^error contraste-nav-pills: Pill activo en "\.nav-pills": 1\.00:1/),
      ]);
      expect(result.status).toBe(1);
    });

    it('un descendiente que no es el enlace no se mide como si lo fuera', () => {
      // `.nav-pills .dropdown-menu` no lo lee ningún enlace activo: medirlo
      // daría un 1:1 que no se ve en ningún pill.
      const css = `${expandCss(MINIMAL_THEME)}\n.nav-pills {\n`
        + `  ${color}: ${W};\n  ${bg}: ${B};\n}\n`
        + `\n.nav-pills .dropdown-menu {\n  ${color}: ${W};\n  ${bg}: ${W};\n}\n`;
      const result = validateStrict(css);
      expect(findings(result)).toEqual([]);
      expect(result.status).toBe(0);
    });
  });

  describe('la cascada dentro de la capa de un elemento', () => {
    const W = 'rgb(var(--bs-white-rgb))';
    const B = 'rgb(var(--bs-black-rgb))';
    const ZONE_BLOCK = '[data-bs-theme="oscura"] {\n  --bs-body-bg-rgb: 16, 24, 40;\n  --bs-body-color-rgb: 255, 255, 255;\n'
      + '  --bs-secondary-bg-rgb: var(--bs-gray-800-rgb);\n  --bs-tertiary-bg-rgb: var(--bs-gray-900-rgb);\n}\n'
      + '\n[data-bs-theme="oscura"] .list-group {\n  --bs-list-group-color: rgb(var(--bs-body-color-rgb));\n'
      + '  --bs-list-group-action-color: rgb(var(--bs-body-color-rgb));\n}\n';
    const rule = (sel: string, decls: Record<string, string>) => `${sel} {\n${Object.entries(decls)
      .map(([k, v]) => `  ${k}: ${v};\n`).join('')}}\n`;
    const color = '--bs-nav-pills-link-active-color';
    const bg = '--bs-nav-pills-link-active-bg';

    it('una declaración normal posterior no reemplaza a una !important', () => {
      // Chromium conserva el fondo blanco importante: blanco sobre blanco.
      const css = `${expandCss(MINIMAL_THEME)}\n${rule('.nav-pills', { [color]: W, [bg]: `${W} !important` })}`
        + `\n${rule('.nav-pills', { [bg]: B })}`;
      const result = validateStrict(css);
      expect(findings(result)).toEqual([
        expect.stringMatching(/^error contraste-nav-pills: Pill activo en "\.nav-pills": 1\.00:1/),
      ]);
      expect(result.status).toBe(1);
    });

    it('un triplete con !important sigue siendo un triplete', () => {
      const css = `${expandCss(MINIMAL_THEME)}\n:root,\n[data-bs-theme="dynamic"] {\n  --bs-primary-rgb: 11, 107, 83 !important;\n}\n`;
      const result = validateStrict(css);
      expect(findings(result)).toEqual([]);
      expect(result.status).toBe(0);
    });

    it(':not() vale lo que su argumento más específico', () => {
      // `.nav-pills:not(.disabled.foo)` (3 clases) gana a
      // `[data-bs-theme="oscura"] .nav-pills` (2). Chromium: blanco sobre negro.
      const validCss = `${expandCss(MINIMAL_THEME)}\n${ZONE_BLOCK}\n${rule('.nav-pills:not(.disabled.foo)', { [color]: W, [bg]: B })}`
        + `\n${rule('[data-bs-theme="oscura"] .nav-pills', { [color]: B })}`;
      const okRun = validateStrict(validCss);
      expect(findings(okRun, 'contraste-nav-pills')).toEqual([]);
      expect(rules(okRun)).toEqual(['contraste-enlace-zona x1']);
      // --strict sale con 1 sólo por los wrappers que ZONA omite a propósito.
      expect(missingWrappers(okRun)).toEqual([
        '--bs-body-bg-rgb', '--bs-body-color-rgb', '--bs-secondary-bg-rgb', '--bs-tertiary-bg-rgb',
      ]);
      expect(okRun.status).toBe(1);

      // Y al revés: blanco sobre blanco gana dentro de la zona, aunque el
      // bloque de zona venga después con texto negro.
      const brokenCss = `${expandCss(MINIMAL_THEME)}\n${ZONE_BLOCK}\n${rule('.nav-pills:not(.disabled.foo)', { [color]: W, [bg]: W })}`
        + `\n${rule('[data-bs-theme="oscura"] .nav-pills', { [color]: B })}`;
      const badRun = validateStrict(brokenCss);
      expect(findings(badRun, 'contraste-nav-pills')).toEqual([
        expect.stringMatching(/^error contraste-nav-pills: Pill activo en "\.nav-pills:not\(\.disabled\.foo\)": 1\.00:1/),
        expect.stringMatching(/^error contraste-nav-pills: Pill activo en "\.nav-pills:not\(\.disabled\.foo\) dentro de \[data-bs-theme="oscura"\]": 1\.00:1/),
      ]);
      expect(rules(badRun)).toEqual(['contraste-enlace-zona x1', 'contraste-nav-pills x2']);
      expect(badRun.status).toBe(1);
    });

    it('cada alternativa de la lista lleva su propio prefijo de zona', () => {
      // Dentro de `.sidebar` gana el bloque más específico: blanco sobre blanco.
      const css = `${expandCss(MINIMAL_THEME)}\n${ZONE_BLOCK}\n`
        + rule('[data-bs-theme="oscura"] .nav-pills, [data-bs-theme="oscura"] .sidebar .nav-pills', { [color]: W, [bg]: W })
        + `\n${rule('[data-bs-theme="oscura"] .nav-pills', { [color]: B })}`;
      const result = validateStrict(css);
      expect(findings(result, 'contraste-nav-pills')).toEqual([
        expect.stringMatching(/^error contraste-nav-pills: Pill activo en "\[data-bs-theme="oscura"\] \.sidebar \.nav-pills dentro de \[data-bs-theme="oscura"\]": 1\.00:1/),
      ]);
      expect(rules(result)).toEqual(['contraste-enlace-zona x1', 'contraste-nav-pills x1']);
      expect(result.status).toBe(1);
    });

    it('el contenido de un atributo no suma a la especificidad', () => {
      // `.nav-pills[data-target="#panel"]` empata con el bloque de zona, que va
      // después y gana: negro sobre negro en Chromium.
      const css = `${expandCss(MINIMAL_THEME)}\n${ZONE_BLOCK}\n${rule('.nav-pills[data-target="#panel"]', { [color]: W, [bg]: B })}`
        + `\n${rule('[data-bs-theme="oscura"] .nav-pills', { [color]: B })}`;
      const result = validateStrict(css);
      expect(findings(result, 'contraste-nav-pills')).toEqual([
        expect.stringMatching(/^error contraste-nav-pills: Pill activo en "\.nav-pills\[data-target="#panel"\] dentro de \[data-bs-theme="oscura"\]": 1\.00:1/),
      ]);
      expect(rules(result)).toEqual(['contraste-enlace-zona x1', 'contraste-nav-pills x1']);
      expect(result.status).toBe(1);
    });

    it('una regla compartida por :root y un componente declara sobre el componente', () => {
      const css = `${expandCss(MINIMAL_THEME)}\n${rule(':root,\n.nav-pills', { [color]: W, [bg]: W })}`;
      const result = validateStrict(css);
      expect(findings(result)).toEqual([
        expect.stringMatching(/^error contraste-nav-pills: Pill activo en "\.nav-pills": 1\.00:1/),
      ]);
      expect(result.status).toBe(1);
    });

    it('una lista dentro de :not() no parte el selector', () => {
      // Blanco sobre blanco gana también dentro de la zona: :not() pesa más.
      const css = `${expandCss(MINIMAL_THEME)}\n${ZONE_BLOCK}\n${rule('.nav-pills:not(.disabled, .foo.bar)', { [color]: W, [bg]: W })}`
        + `\n${rule('[data-bs-theme="oscura"] .nav-pills', { [color]: B })}`;
      const result = validateStrict(css);
      expect(findings(result, 'contraste-nav-pills')).toEqual([
        expect.stringMatching(/^error contraste-nav-pills: Pill activo en "\.nav-pills:not\(\.disabled, \.foo\.bar\)": 1\.00:1/),
        expect.stringMatching(/^error contraste-nav-pills: Pill activo en "\.nav-pills:not\(\.disabled, \.foo\.bar\) dentro de \[data-bs-theme="oscura"\]": 1\.00:1/),
      ]);
      expect(rules(result)).toEqual(['contraste-enlace-zona x1', 'contraste-nav-pills x2']);
      expect(result.status).toBe(1);
    });

    it('un espacio dentro de :has() no es un combinador', () => {
      // Un solo elemento: el gray-50 que redefine es el que pinta el pill.
      const css = `${expandCss(MINIMAL_THEME)}\n${rule('.nav-pills:has(.icon .label)', { '--bs-gray-50': B, [color]: B })}`;
      const result = validateStrict(css);
      expect(findings(result)).toEqual([
        expect.stringMatching(/^error contraste-nav-pills: Pill activo en "\.nav-pills:has\(\.icon \.label\)": 1\.00:1/),
      ]);
      expect(result.status).toBe(1);
    });

    it('un .nav-pills dentro de :not() no hace del enlace el contenedor', () => {
      // Theme generado por theme-expand. El `.nav-pills` del `:not()` no es el
      // contenedor: si lo fuera, el enlace se mediría como una barra con su
      // propio --bs-black y saldría un 1:1 que no existe.
      const css = expandCss({
        ...MINIMAL_THEME,
        components: [
          { selector: '.nav-pills', vars: { [color]: 'var(--bs-white)', [bg]: 'var(--bs-black)' } },
          {
            selector: '.nav-pills .nav-link.active:not(.nav-pills)',
            vars: { '--bs-black': W, [color]: W },
          },
        ],
      });
      const result = validateStrict(css);
      expect(findings(result)).toEqual([]);
      expect(result.status).toBe(0);
    });

    it('un combinador tras el prefijo de zona no desplaza el contenedor del pill', () => {
      // Theme generado por theme-expand. El enlace hereda el fondo negro que
      // calcula `.nav-pills`, aunque redefina --bs-black. Chromium: 21:1.
      const css = expandCss({
        ...MINIMAL_THEME,
        components: [
          { selector: '.nav-pills', vars: { [color]: W, [bg]: 'var(--bs-black)' } },
          { selector: '[data-bs-theme="oscura"] > .nav-pills .nav-link.active', vars: { '--bs-black': W, [color]: W } },
        ],
        zones: { oscura: { vars: { '--bs-heading-color': 'rgb(var(--bs-black-rgb))' } } },
      });
      const result = validateStrict(css);
      expect(findings(result)).toEqual([]);
      expect(result.status).toBe(0);
    });

    it('los pares horneados cuentan los bloques con la zona pegada al componente', () => {
      // Theme generado por theme-expand: `[data-bs-theme="clara"].list-group`
      // pone texto y fondo blancos. Chromium, con la zona en la propia lista
      // (`<ul class="list-group" data-bs-theme="clara">`): 1:1 en los dos
      // tipos de ítem.
      const css = expandCss({
        ...MINIMAL_THEME,
        components: [{
          selector: '[data-bs-theme="clara"].list-group',
          vars: { '--bs-list-group-color': W, '--bs-list-group-action-color': W, '--bs-list-group-bg': W },
        }],
        zones: { clara: { vars: { '--bs-heading-color': 'rgb(var(--bs-black-rgb))' } } },
      });
      const result = validateStrict(css);
      expect(findings(result)).toEqual([
        expect.stringMatching(/^error contraste-horneado: "\.list-group-item dentro de \[data-bs-theme="clara"\]": 1\.00:1/),
        expect.stringMatching(/^error contraste-horneado: "\.list-group-item-action dentro de \[data-bs-theme="clara"\]": 1\.00:1/),
      ]);
      expect(result.status).toBe(1);
    });

    it('una comilla escapada en un atributo no esconde el combinador que sigue', () => {
      // Theme generado por theme-expand. El enlace hereda el fondo negro que
      // calcula `.nav-pills`, aunque redefina --bs-black. Chromium: 21:1.
      const css = expandCss({
        ...MINIMAL_THEME,
        components: [
          { selector: '.nav-pills', vars: { [color]: W, [bg]: 'var(--bs-black)' } },
          { selector: '.nav-pills[data-label="a\\"b"] .nav-link.active', vars: { '--bs-black': W, [color]: W } },
        ],
      });
      const result = validateStrict(css);
      expect(findings(result)).toEqual([]);
      expect(result.status).toBe(0);
    });

    it('la zona pegada al selector pone sus variables en el propio componente', () => {
      // `[data-bs-theme="oscura"].btn-primary` pone la zona en el botón, así
      // que el `--bs-btn-bg` de la zona cae sobre él y gana al de la librería,
      // que tiene la misma especificidad y va antes. Texto negro sobre blanco.
      // Chromium, con `<button class="btn btn-primary" data-bs-theme="oscura">`:
      // 21:1. Medido como ancestro daba un falso 3.24:1 (#1301).
      const css = expandCss({
        ...MINIMAL_THEME,
        components: [{ selector: '[data-bs-theme="oscura"].btn-primary', vars: { '--bs-btn-color': 'var(--bs-black)' } }],
        zones: { oscura: { vars: { '--bs-btn-bg': 'var(--bs-white)' } } },
      });
      const result = validateStrict(css);
      expect(findings(result)).toEqual([]);
      expect(result.status).toBe(0);
    });

    it('un corchete entre comillas no hace del enlace el contenedor', () => {
      // Theme generado por theme-expand. El `.nav-pills` del atributo no es una
      // clase, así que el enlace no es una barra con su propio --bs-black.
      const css = expandCss({
        ...MINIMAL_THEME,
        components: [
          { selector: '.nav-pills', vars: { [color]: W, [bg]: 'var(--bs-black)' } },
          { selector: '.nav-pills .nav-link.active[data-label="].nav-pills"]', vars: { '--bs-black': W, [color]: W } },
        ],
      });
      const result = validateStrict(css);
      expect(findings(result)).toEqual([]);
      expect(result.status).toBe(0);
    });

    it('un contenedor anidado hereda lo que el exterior ya resolvió', () => {
      // Theme generado por theme-expand. El `.nav-pills` interior hereda el
      // --bs-gray-50 negro del exterior, y su fondo activo de la librería
      // (var(--bs-gray-50)) es negro. Chromium: 21:1 en los dos.
      const css = expandCss({
        ...MINIMAL_THEME,
        components: [
          { selector: '.nav-pills.outer', vars: { '--bs-gray-50': B, [bg]: B, [color]: W } },
          { selector: '.nav-pills.outer .nav-pills', vars: { [color]: W } },
        ],
      });
      const result = validateStrict(css);
      expect(findings(result)).toEqual([]);
      expect(result.status).toBe(0);
    });

    it.each(['+', '~'])('un .nav-pills hermano (%s) no es el contenedor padre', (combinator) => {
      // Theme generado por theme-expand. La segunda pill no hereda nada de
      // su hermana: negro sobre el gris claro de la librería. Chromium: 18.45:1.
      const css = expandCss({
        ...MINIMAL_THEME,
        components: [
          { selector: '.nav-pills.outer', vars: { '--bs-gray-50': B, [bg]: B, [color]: W } },
          { selector: `.nav-pills.outer ${combinator} .nav-pills`, vars: { [color]: B } },
        ],
      });
      const result = validateStrict(css);
      expect(findings(result)).toEqual([]);
      expect(result.status).toBe(0);
    });

    it('dos atributos con valores distintos son selectores distintos, aunque difieran en espacios', () => {
      // Theme generado por theme-expand. En Chromium las dos pills se ven
      // bien: blanco sobre negro y negro sobre gray-50. Tratar `a+b` y `a + b`
      // como el mismo selector mezclaba sus declaraciones y daba dos errores
      // falsos de 1:1.
      const pills = (first: Record<string, string>, second: Record<string, string>) => expandCss({
        ...MINIMAL_THEME,
        components: [
          { selector: '.nav-pills[data-label="a+b"]', vars: first },
          { selector: '.nav-pills[data-label="a + b"]', vars: second },
        ],
      });
      const validRun = validateStrict(pills({ [color]: W, [bg]: B }, { [color]: B }));
      expect(findings(validRun)).toEqual([]);
      expect(validRun.status).toBe(0);

      // Y el fallo real de uno de los dos no se esconde detrás del otro.
      const brokenCss = validateStrict(pills({ [color]: W, [bg]: W }, { [color]: B, [bg]: W }));
      expect(findings(brokenCss)).toEqual([
        expect.stringMatching(/^error contraste-nav-pills: Pill activo en "\.nav-pills\[data-label="a\+b"\]": 1\.00:1/),
      ]);
      expect(brokenCss.status).toBe(1);
    });
  });
});

describe('theme-validate — la zona pegada al selector (#1301)', () => {
  // `[data-bs-theme="z"].x` pone la zona en el mismo elemento que el
  // componente: lo que la zona declara cae ahí y compite en la cascada con lo
  // que la librería y el theme ponen sobre él, en vez de heredarse resuelto
  // desde un ancestro. Y el padre del componente queda fuera de la zona.
  //
  // Los casos son los de #1301. Cada número está medido en Chromium sobre el
  // marcado que el selector apunta de verdad —el que lleva data-bs-theme en el
  // componente, no en un ancestro—, que es el que cada caso deja escrito.
  const WHITE = 'rgb(var(--bs-white-rgb))';
  const BLACK = 'rgb(var(--bs-black-rgb))';
  const ACTIVE_COLOR = '--bs-nav-pills-link-active-color';
  const ACTIVE_BG = '--bs-nav-pills-link-active-bg';

  it('caso 2: `--bs-white: inherit` en el botón toma el blanco de fuera de la zona', () => {
    // El botón ES la zona, así que su `inherit` mira al padre, que está fuera:
    // le llega el blanco de la librería, no el negro que la zona llama blanco.
    // Chromium, con `<button class="btn btn-primary" data-bs-theme="oscura">`: 21:1.
    const result = validateStrict(expandCss({
      ...MINIMAL_THEME,
      components: [{
        selector: '[data-bs-theme="oscura"].btn-primary',
        vars: { '--bs-white': 'inherit', '--bs-btn-color': BLACK },
      }],
      zones: { oscura: { vars: { '--bs-white': 'rgb(0, 0, 0)', '--bs-btn-bg': 'var(--bs-white)' } } },
    }));

    expect(findings(result, 'contraste-nav-pills')).toEqual([]);
    expect(rules(result)).toEqual(['contraste-horneado x3']);
    // El estado global ya no es 0: la zona, al no declararlos, arrastra los
    // pares horneados de sus componentes. Lo que mide este caso es la pastilla.
    expect(result.status).toBe(1);
  });

  it('caso 3: la pastilla activa de la zona pegada pisa el color del bloque global', () => {
    // `.nav-pills` global pone blanco sobre negro; la zona, pegada al mismo
    // `.nav-pills`, baja el texto a negro. Chromium: 1:1, ilegible.
    const result = validateStrict(expandCss({
      ...MINIMAL_THEME,
      components: [
        { selector: '.nav-pills', vars: { [ACTIVE_COLOR]: WHITE, [ACTIVE_BG]: BLACK } },
        { selector: '[data-bs-theme="oscura"].nav-pills .nav-link.active', vars: { [ACTIVE_COLOR]: BLACK } },
      ],
    }));

    expect(findings(result)).toEqual([
      expect.stringMatching(/^error contraste-nav-pills: .*1\.00:1/),
    ]);
    expect(result.status).toBe(1);
  });

  it('caso 4: la zona pegada a un ancestro del componente no lo rompe', () => {
    // `[data-bs-theme="oscura"].sidebar .nav-pills`: la zona va en la barra,
    // no en las pastillas. Chromium, bajo `.sidebar[data-bs-theme="oscura"]`: 21:1.
    const result = validateStrict(expandCss({
      ...MINIMAL_THEME,
      components: [
        { selector: '[data-bs-theme="oscura"] .nav-pills', vars: { [ACTIVE_COLOR]: WHITE, [ACTIVE_BG]: BLACK } },
        { selector: '[data-bs-theme="oscura"].sidebar .nav-pills', vars: { [ACTIVE_COLOR]: WHITE, [ACTIVE_BG]: BLACK } },
      ],
    }));

    expect(findings(result)).toEqual([]);
    expect(result.status).toBe(0);
  });

  it('caso 5: las dos formas sobre el mismo componente coinciden', () => {
    // Pegada y ancestro declarando lo mismo. Chromium: 21:1 en los dos
    // marcados, así que la medición única vale para ambos.
    const result = validateStrict(expandCss({
      ...MINIMAL_THEME,
      components: [
        { selector: '[data-bs-theme="oscura"].nav-pills .nav-link.active', vars: { [ACTIVE_COLOR]: WHITE, [ACTIVE_BG]: BLACK } },
        { selector: '[data-bs-theme="oscura"] .nav-pills .nav-link.active', vars: { [ACTIVE_COLOR]: WHITE, [ACTIVE_BG]: BLACK } },
      ],
    }));

    expect(findings(result)).toEqual([]);
    expect(result.status).toBe(0);
  });

  it('la zona pegada a un ANCESTRO no se mide como si estuviera en el componente', () => {
    // `[data-bs-theme="oscura"].sidebar .nav-pills` pone la zona en la barra,
    // no en la pastilla. Lo que la zona declara tiene que llegarle heredado, y
    // perder contra el `--bs-nav-pills-link-active-bg` que la librería declara
    // sobre `.nav-pills`. Fundirlo en la capa de la pastilla daba por bueno un
    // fondo negro que el navegador no pinta.
    // Chromium, bajo `<div class="sidebar" data-bs-theme="oscura">`: 1.14:1,
    // blanco sobre el gris claro de la librería.
    const result = validateStrict(expandCss({
      ...MINIMAL_THEME,
      components: [{
        selector: '[data-bs-theme="oscura"].sidebar .nav-pills',
        vars: { [ACTIVE_COLOR]: WHITE },
      }],
      zones: { oscura: { vars: { [ACTIVE_BG]: BLACK } } },
    }));

    expect(findings(result)).toEqual([
      expect.stringMatching(/^error contraste-nav-pills: .*1\.14:1/),
    ]);
    expect(result.status).toBe(1);
  });

  it('y la pegada al propio componente se sigue midiendo como pegada', () => {
    // El contrapunto del caso anterior: un solo compuesto, así que la zona sí
    // está en el botón. Si esto dejara de medirse como pegada, volvería el
    // falso 3.24:1 de #1301.
    const result = validateStrict(expandCss({
      ...MINIMAL_THEME,
      components: [{ selector: '[data-bs-theme="oscura"].btn-primary', vars: { '--bs-btn-color': BLACK } }],
      zones: { oscura: { vars: { '--bs-btn-bg': WHITE } } },
    }));

    expect(findings(result)).toEqual([]);
    expect(result.status).toBe(0);
  });

  it('la zona pegada al contenedor de un selector descendiente también cuenta', () => {
    // `[data-bs-theme="oscura"].nav-pills .nav-link.active` pone la zona en el
    // contenedor, no en el enlace. La capa del contenedor tiene que saberlo:
    // su padre está fuera de la zona, así que un `inherit` sobre él toma el
    // valor de fuera. El bloque `.nav-pills` va después del de la zona, así
    // que gana sobre el mismo elemento y el `inherit` es el que manda.
    // Chromium, con `<ul class="nav nav-pills" data-bs-theme="oscura">`:
    // blanco sobre negro, 21:1. Mirando sólo si el selector tiene un único
    // compuesto, la capa no se marcaba y el `inherit` caía al negro de la
    // zona: un falso 1.00:1.
    const css = [
      ':root,',
      '[data-bs-theme="dynamic"] {',
      '  --bs-body-bg-rgb: 255, 255, 255;',
      '  --bs-body-color-rgb: 16, 24, 40;',
      '  --bs-border-color: rgb(228, 231, 236);',
      '}',
      '',
      '[data-bs-theme="oscura"] { --bs-white: rgb(0, 0, 0); }',
      '',
      '.nav-pills { --bs-white: inherit; }',
      '',
      '[data-bs-theme="oscura"].nav-pills .nav-link.active {',
      `  ${ACTIVE_BG}: rgb(0, 0, 0);`,
      `  ${ACTIVE_COLOR}: var(--bs-white);`,
      '}',
    ].join('\n');
    const result = validateStrict(css);

    expect(findings(result, 'contraste-nav-pills')).toEqual([]);
    expect(rules(result)).toEqual(['contraste-horneado x3']);
    // El estado global ya no es 0: la zona, al no declararlos, arrastra los
    // pares horneados de sus componentes. Lo que mide este caso es la pastilla.
    expect(result.status).toBe(1);
  });

  it('la zona pegada a un HERMANO del contenedor no le pasa nada', () => {
    // En `[data-bs-theme="oscura"].nav-pills + .nav-pills .nav-link.active` la
    // zona está en la primera lista; la que se mide es la segunda, detrás de
    // un `+`. Entre hermanos no se heredan las custom properties, así que el
    // fondo negro de la zona nunca llega: la pastilla se queda con el gris que
    // la librería pone en `.nav-pills`.
    // Chromium: blanco sobre gris claro, 1.14:1.
    // Mirando sólo si el primer compuesto está en la capa, el `.nav-pills` de
    // la izquierda casaba con el alias de la capa y el fondo negro se daba por
    // bueno: 21:1 y ningún hallazgo sobre una pastilla ilegible.
    const css = [
      ':root,',
      '[data-bs-theme="dynamic"] {',
      '  --bs-body-bg-rgb: 255, 255, 255;',
      '  --bs-body-color-rgb: 16, 24, 40;',
      '  --bs-border-color: rgb(228, 231, 236);',
      '}',
      '',
      `[data-bs-theme="oscura"] { ${ACTIVE_BG}: rgb(0, 0, 0); }`,
      '',
      '[data-bs-theme="oscura"].nav-pills + .nav-pills .nav-link.active {',
      `  ${ACTIVE_COLOR}: rgb(255, 255, 255);`,
      '}',
    ].join('\n');
    const result = validateStrict(css);

    expect(findings(result)).toEqual([
      expect.stringMatching(/^error contraste-nav-pills: .*1\.14:1/),
    ]);
    expect(result.status).toBe(1);
  });

  it('lo que el hermano hereda viene de fuera de la zona, no de ella', () => {
    // Complemento del caso anterior. Allí el fondo lo declaraba la librería
    // sobre el componente, así que la cadena no llegaba a consultarse; aquí el
    // texto depende de un `--bs-white: inherit` del enlace.
    //
    // El enlace cuelga del segundo `.nav-pills`, que es hermano de la zona y
    // por tanto está FUERA de ella: ese `inherit` toma el blanco del raíz, no
    // el negro que la zona llama blanco. Chromium: blanco sobre negro, 21:1.
    // Arrancando la cadena en el contexto de la zona salía un falso 1.00:1.
    const css = [
      ':root,',
      '[data-bs-theme="dynamic"] {',
      '  --bs-body-bg-rgb: 255, 255, 255;',
      '  --bs-body-color-rgb: 16, 24, 40;',
      '  --bs-border-color: rgb(228, 231, 236);',
      '}',
      '',
      '[data-bs-theme="oscura"] { --bs-white: rgb(0, 0, 0); }',
      '',
      '[data-bs-theme="oscura"].nav-pills + .nav-pills .nav-link.active {',
      '  --bs-white: inherit;',
      `  ${ACTIVE_BG}: rgb(0, 0, 0);`,
      `  ${ACTIVE_COLOR}: var(--bs-white);`,
      '}',
    ].join('\n');
    const result = validateStrict(css);

    expect(findings(result, 'contraste-nav-pills')).toEqual([]);
    expect(rules(result)).toEqual(['contraste-horneado x3']);
    // El estado global ya no es 0: la zona, al no declararlos, arrastra los
    // pares horneados de sus componentes. Lo que mide este caso es la pastilla.
    expect(result.status).toBe(1);
  });

  it.each([
    ['+', '[data-bs-theme="oscura"].sidebar .item + .nav-pills .nav-link.active'],
    ['~', '[data-bs-theme="oscura"].sidebar .item ~ .x .nav-pills .nav-link.active'],
  ])('un `%s` dentro de la zona no saca al componente de ella', (_, selector) => {
    // El hermano relaciona dos hijos de `.sidebar`: la pastilla sigue dentro de
    // la zona y su `inherit` toma el negro que la zona llama blanco.
    // Chromium, bajo `<div class="sidebar" data-bs-theme="oscura">`: 1.00:1.
    const css = [
      ':root,',
      '[data-bs-theme="dynamic"] {',
      '  --bs-body-bg-rgb: 255, 255, 255;',
      '  --bs-body-color-rgb: 16, 24, 40;',
      '  --bs-border-color: rgb(228, 231, 236);',
      '}',
      '',
      '[data-bs-theme="oscura"] { --bs-white: rgb(0, 0, 0); }',
      '',
      `${selector} {`,
      '  --bs-white: inherit;',
      `  ${ACTIVE_BG}: rgb(0, 0, 0);`,
      `  ${ACTIVE_COLOR}: var(--bs-white);`,
      '}',
    ].join('\n');
    const result = validateStrict(css);

    expect(findings(result, 'contraste-nav-pills')).toEqual([
      expect.stringMatching(/^error contraste-nav-pills: .*1\.00:1/),
    ]);
    expect(rules(result)).toEqual(['contraste-horneado x3', 'contraste-nav-pills x1']);
    expect(result.status).toBe(1);
  });

  it('ya no avisa `zona-pegada`', () => {
    // El aviso existía porque la forma pegada se medía como si la zona fuera
    // un ancestro. Ahora se modela, así que no hay nada que revisar a mano.
    const result = validateStrict(expandCss({
      ...MINIMAL_THEME,
      components: [{ selector: '[data-bs-theme="oscura"].btn-primary', vars: { '--bs-btn-color': BLACK } }],
      zones: { oscura: { vars: { '--bs-btn-bg': WHITE } } },
    }));

    expect(result.stderr).not.toContain('zona-pegada');
  });
});

describe('theme-validate — una hoja de sólo zonas', () => {
  // Quien mantiene un theme puede querer añadir una zona en un archivo aparte,
  // sin repetir el bloque raíz. Antes eso daba `vacio` y salida 1, y la única
  // forma de validarlo era añadirle un :root de relleno.
  const ZONE_BLOCK = [
    '[data-bs-theme="oscura"] {',
    '  --bs-body-bg-rgb: 33, 41, 51;',
    '  --bs-body-color-rgb: 255, 255, 255;',
    '}',
  ].join('\n');

  it('no es `vacio`: se mide contra los valores por defecto de la librería', () => {
    const result = validateStrict(ZONE_BLOCK);

    expect(result.stderr).not.toContain('[vacio]');
    // Los hallazgos son los de la zona, no los de un archivo que no se pudo
    // leer: un fondo casi negro bajo el texto gray-900 que la lista hereda.
    expect(findings(result)).toEqual([
      expect.stringMatching(/^error contraste-enlace-zona: Zona "oscura": el enlace da 2\.80:1/),
      expect.stringMatching(/^error contraste-horneado: "\.list-group-item dentro de \[data-bs-theme="oscura"\]": 1\.24:1/),
      expect.stringMatching(/^error contraste-horneado: "\.list-group-item-action dentro de \[data-bs-theme="oscura"\]": 1\.24:1/),
    ]);
    expect(missingWrappers(result)).toEqual(['--bs-body-bg-rgb', '--bs-body-color-rgb']);
  });

  it('mide igual que la misma zona dentro de un theme con raíz', () => {
    // El raíz declara algo que no toca ninguna de las variables de la zona, así
    // que las dos hojas tienen que medirse contra los mismos valores por
    // defecto. Si la hoja suelta midiera otra cosa, el arreglo sería un atajo.
    const sheetWithRoot = [
      ':root,',
      '[data-bs-theme="dynamic"] {',
      '  --bs-ref-spacer-1: .25rem;',
      '}',
      '',
      ZONE_BLOCK,
    ].join('\n');

    const zoneOnlyRun = validateStrict(ZONE_BLOCK);
    const fullSheetRun = validateStrict(sheetWithRoot);

    expect(findings(zoneOnlyRun)).toEqual(findings(fullSheetRun));
    expect(missingWrappers(zoneOnlyRun)).toEqual(missingWrappers(fullSheetRun));
    expect(zoneOnlyRun.status).toBe(fullSheetRun.status);
  });

  it('pasa --strict con salida 0 cuando la zona está bien escrita', () => {
    const result = validateStrict([
      '[data-bs-theme="oscura"] {',
      '  --bs-body-bg-rgb: 33, 41, 51;',
      '  --bs-body-bg: rgb(33, 41, 51);',
      '  --bs-body-color-rgb: 255, 255, 255;',
      '  --bs-body-color: rgb(255, 255, 255);',
      '  --bs-secondary-color-rgb: 255, 255, 255;',
      '  --bs-secondary-color: rgba(255, 255, 255, .75);',
      '  --bs-link-color-rgb: var(--bs-primary-200-rgb);',
      '  --bs-link-color: rgb(var(--bs-link-color-rgb));',
      '  --bs-label-color: rgb(var(--bs-gray-100-rgb));',
      // El contorno no pinta fondo: su texto va contra la superficie de la zona.
      ...['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map(
        (role) => `  --bs-btn-outline-${role}-color: rgb(var(--bs-${role}-200-rgb));`,
      ),
      '  color: var(--bs-body-color);',
      '  background-color: var(--bs-body-bg);',
      '}',
      '',
      '[data-bs-theme="oscura"] .list-group {',
      '  --bs-list-group-color: rgb(var(--bs-body-color-rgb));',
      '  --bs-list-group-action-color: rgb(var(--bs-body-color-rgb));',
      '}',
      '',
      // Componentes con fondo propio: el suyo lo pinta la librería y sigue
      // siendo claro, así que o baja el fondo o vuelve a oscurecer el texto.
      '[data-bs-theme="oscura"] .card {',
      '  --bs-card-bg: rgb(var(--bs-body-bg-rgb));',
      '}',
      '',
      '[data-bs-theme="oscura"] .form-control,',
      '[data-bs-theme="oscura"] .form-select {',
      '  --bs-body-color: rgb(33, 41, 51);',
      '}',
      '',
      '[data-bs-theme="oscura"] .form-text {',
      '  --bs-gray-500: rgb(var(--bs-gray-300-rgb));',
      '}',
      '',
      // La librería fija --bs-nav-link-color en `.nav`, así que el bloque de la
      // zona no lo alcanza: lo del elemento gana sobre lo heredado.
      '[data-bs-theme="oscura"] .nav {',
      '  --bs-nav-link-color: rgb(var(--bs-white-rgb));',
      '}',
    ].join('\n'));

    expect(findings(result)).toEqual([]);
    expect(missingWrappers(result)).toEqual([]);
    expect(result.status).toBe(0);
  });

  describe('`vacio` sigue siendo el CSS que no declara ninguna --bs-*', () => {
    it.each([
      ['un archivo vacío', ''],
      ['un CSS sin custom properties', '.card { color: red; }'],
      ['una zona sin custom properties', '[data-bs-theme="oscura"] { color: red; }'],
      ['sólo custom properties que no son --bs-*', ':root { --mi-marca: #0b6b53; }'],
    ])('%s', (_, css) => {
      const result = validateStrict(css);

      expect(result.stderr).toContain('[vacio]');
      expect(result.status).toBe(1);
    });
  });
});

describe('theme-validate — una zona sin bloque propio', () => {
  // Una zona existe en cuanto un selector la nombra. Antes el contexto sólo se
  // creaba desde un bloque de zona pelado, así que una hoja con únicamente
  // bloques de componente dentro de la zona no se medía en ninguna parte: cero
  // hallazgos sobre un CSS roto, que es peor que un falso positivo.
  const WHITE = 'rgb(var(--bs-white-rgb))';
  const WHITE_ON_WHITE = {
    '--bs-list-group-color': WHITE,
    '--bs-list-group-action-color': WHITE,
    '--bs-list-group-bg': WHITE,
  };

  it('mide el componente aunque la zona no tenga bloque propio', () => {
    const css = expandCss({
      ...MINIMAL_THEME,
      components: [{ selector: '[data-bs-theme="clara"] .list-group', vars: WHITE_ON_WHITE }],
    });
    const result = validateStrict(css);

    expect(findings(result)).toEqual([
      expect.stringMatching(/^error contraste-horneado: "\.list-group-item dentro de \[data-bs-theme="clara"\]": 1\.00:1/),
      expect.stringMatching(/^error contraste-horneado: "\.list-group-item-action dentro de \[data-bs-theme="clara"\]": 1\.00:1/),
    ]);
    expect(result.status).toBe(1);
  });

  it('mide igual si la zona sí tiene bloque propio', () => {
    // El bloque de zona no toca nada de la lista, así que el veredicto sobre el
    // componente tiene que ser el mismo con él y sin él.
    const withZoneBlock = validateStrict(expandCss({
      ...MINIMAL_THEME,
      components: [{ selector: '[data-bs-theme="clara"] .list-group', vars: WHITE_ON_WHITE }],
      zones: { clara: { vars: { '--bs-heading-color': 'rgb(var(--bs-black-rgb))' } } },
    }));
    const withoutZoneBlock = validateStrict(expandCss({
      ...MINIMAL_THEME,
      components: [{ selector: '[data-bs-theme="clara"] .list-group', vars: WHITE_ON_WHITE }],
    }));

    expect(findings(withoutZoneBlock)).toEqual(findings(withZoneBlock));
    expect(withoutZoneBlock.status).toBe(withZoneBlock.status);
  });

  it('mide el componente aunque la lista lleve `:root` delante', () => {
    // La excepción del alias del raíz no puede llevarse por delante la
    // alternativa de componente que va en la misma lista.
    const css = `${expandCss(MINIMAL_THEME)}\n:root,\n[data-bs-theme="clara"] .list-group {\n`
      + `  --bs-list-group-color: ${WHITE};\n`
      + `  --bs-list-group-action-color: ${WHITE};\n`
      + `  --bs-list-group-bg: ${WHITE};\n}\n`;
    const result = validateStrict(css);

    expect(findings(result)).toEqual([
      expect.stringMatching(/^error contraste-horneado: "\.list-group-item dentro de \[data-bs-theme="clara"\]": 1\.00:1/),
      expect.stringMatching(/^error contraste-horneado: "\.list-group-item-action dentro de \[data-bs-theme="clara"\]": 1\.00:1/),
    ]);
    expect(result.status).toBe(1);
  });

  it('`:root, [data-bs-theme="light"]` no es una zona, es el alias del raíz', () => {
    // La forma con la que Bootstrap emite el modo claro en el CSS compilado.
    // Tomarla por zona duplica cada hallazgo del raíz dentro de ella, así que
    // el theme tiene que traer uno: con un theme limpio la confusión no se
    // nota y el caso no mordería.
    const css = `${expandCss({
      ...MINIMAL_THEME,
      components: [{ selector: '.list-group', vars: WHITE_ON_WHITE }],
    })}\n:root,\n[data-bs-theme="light"] {\n  --bs-heading-color: rgb(var(--bs-black-rgb));\n}\n`;
    const result = validateStrict(css);

    expect(findings(result)).toEqual([
      expect.stringMatching(/^error contraste-horneado: "\.list-group-item": 1\.00:1/),
      expect.stringMatching(/^error contraste-horneado: "\.list-group-item-action": 1\.00:1/),
    ]);
    expect(result.stderr).not.toContain('[data-bs-theme="light"]');
  });
});

/*
 * Los componentes que la zona no arrastra. Cada caso parte del theme corregido
 * y le quita justo un arreglo: así el error que aparece es el del par que el
 * caso nombra, y no el ruido de una zona entera sin tocar.
 */
describe('theme-validate — los componentes que una zona no arrastra (#1375)', () => {
  type Zone = typeof SECTIONED_THEME.zones.oscura;

  /** El theme de las secciones con una de las correcciones de la zona fuera. */
  function withoutFix(
    remove: { block?: string; variable?: string; navVariable?: string },
    extraBlocks: Array<{ selector: string; vars: Record<string, string> }> = [],
  ): string {
    const zone: Zone = SECTIONED_THEME.zones.oscura;
    const vars = { ...zone.vars } as Record<string, string>;
    if (remove.variable) delete vars[remove.variable];
    const nav = { ...zone.nav } as Record<string, string>;
    if (remove.navVariable) delete nav[remove.navVariable];
    return expandCss({
      ...SECTIONED_THEME,
      zones: {
        oscura: {
          ...zone,
          vars,
          nav,
          components: [
            ...zone.components.filter((c) => c.selector !== remove.block),
            ...extraBlocks,
          ],
        },
      },
    });
  }

  it('con todos sus arreglos la zona no reporta ningún par', () => {
    const result = validateStrict(expandCss(SECTIONED_THEME));
    expect(findings(result)).toEqual([]);
    expect(result.status).toBe(0);
  });

  it('sin el bloque .card, el texto de la zona cae sobre el fondo propio de la tarjeta', () => {
    const result = validateStrict(withoutFix({ block: '.card' }));
    expect(findings(result)).toEqual([
      expect.stringMatching(
        /^error contraste-horneado: "\.card dentro de \[data-bs-theme="oscura"\]": 1\.00:1 entre --bs-body-color .* y --bs-card-bg /,
      ),
    ]);
    // El arreglo no es el genérico: la librería fija --bs-card-bg en `.card`.
    expect(result.stderr).toContain('Declara --bs-card-bg sobre `.card` dentro de la zona');
    expect(result.status).toBe(1);
  });

  it('sin el bloque de los campos, el texto claro cae sobre el blanco de la librería', () => {
    const result = validateStrict(withoutFix({ block: '.form-control, .form-select' }));
    expect(findings(result)).toEqual([
      expect.stringMatching(
        /^error contraste-horneado: "\.form-control dentro de \[data-bs-theme="oscura"\]": 1\.00:1 entre --bs-body-color .* y --bs-white /,
      ),
      expect.stringMatching(
        /^error contraste-horneado: "\.form-select dentro de \[data-bs-theme="oscura"\]": 1\.00:1 entre --bs-body-color .* y --bs-white /,
      ),
    ]);
    expect(result.status).toBe(1);
  });

  it('sin el bloque .form-text, el texto de ayuda se queda en el gris global', () => {
    const result = validateStrict(withoutFix({ block: '.form-text' }));
    expect(findings(result)).toEqual([
      expect.stringMatching(
        /^error contraste-horneado: "\.form-text dentro de \[data-bs-theme="oscura"\]": \d\.\d\d:1 entre --bs-gray-500 /,
      ),
    ]);
    expect(result.status).toBe(1);
  });

  it('sin --bs-label-color, las dos etiquetas se quedan en el gris del raíz', () => {
    const result = validateStrict(withoutFix({ variable: '--bs-label-color' }));
    expect(findings(result)).toEqual([
      expect.stringMatching(
        /^error contraste-horneado: "\.form-label dentro de \[data-bs-theme="oscura"\]": \d\.\d\d:1 entre --bs-label-color \(--bs-gray-700-rgb\)/,
      ),
      expect.stringMatching(
        /^error contraste-horneado: "\.form-check-label dentro de \[data-bs-theme="oscura"\]": \d\.\d\d:1 entre --bs-label-color \(--bs-gray-700-rgb\)/,
      ),
    ]);
    expect(result.status).toBe(1);
  });

  /*
   * `_label.scss` pinta --bs-label-color sobre `label`, no sobre una clase de
   * formulario. Un bloque que sólo cubre `.form-label` arregla la etiqueta del
   * campo y deja la de la casilla igual: el par de la casilla tiene que seguir
   * reportándose, o el theme pasa el validador con media zona ilegible.
   */
  it('un arreglo sólo en .form-label deja reportada la etiqueta de la casilla', () => {
    const result = validateStrict(withoutFix(
      { variable: '--bs-label-color' },
      [{ selector: '.form-label', vars: { '--bs-label-color': 'rgb(var(--bs-gray-100-rgb))' } }],
    ));
    expect(findings(result)).toEqual([
      expect.stringMatching(
        /^error contraste-horneado: "\.form-check-label dentro de \[data-bs-theme="oscura"\]": \d\.\d\d:1 entre --bs-label-color /,
      ),
    ]);
    expect(result.status).toBe(1);
  });

  it('un arreglo sobre `label` cubre las dos etiquetas de una vez', () => {
    const result = validateStrict(withoutFix(
      { variable: '--bs-label-color' },
      [{ selector: 'label', vars: { '--bs-label-color': 'rgb(var(--bs-gray-100-rgb))' } }],
    ));
    expect(findings(result)).toEqual([]);
    expect(result.status).toBe(0);
  });

  it('sin --bs-nav-link-color, el enlace de navegación se queda en el gris de `.nav`', () => {
    const result = validateStrict(withoutFix({ navVariable: '--bs-nav-link-color' }));
    expect(findings(result)).toEqual([
      expect.stringMatching(
        /^error contraste-horneado: "\.nav-link dentro de \[data-bs-theme="oscura"\]": \d\.\d\d:1 entre --bs-nav-link-color \(--bs-gray-900-rgb\)/,
      ),
    ]);
    // El arreglo va en `.nav`, no en el bloque de la zona: lo del elemento gana.
    expect(result.stderr).toContain('Declara --bs-nav-link-color sobre `.nav` dentro de la zona');
    expect(result.status).toBe(1);
  });

  it('sin --bs-secondary-color-rgb, el texto secundario se queda con el alias del raíz', () => {
    const result = validateStrict(withoutFix({ variable: '--bs-secondary-color-rgb' }));
    expect(findings(result)).toEqual([
      expect.stringMatching(
        /^error contraste-horneado: "\.text-body-secondary dentro de \[data-bs-theme="oscura"\]": \d\.\d\d:1 entre --bs-secondary-color /,
      ),
    ]);
    expect(result.status).toBe(1);
  });


  /*
   * El botón con contorno en reposo. No pinta fondo, así que detrás se ve la
   * superficie del contexto: una zona que la oscurece deja el texto —resuelto
   * arriba con la rampa clara— encima de ella. Es la fila de botones de
   * contorno que #1375 nombra y que ninguna regla medía sin bloque propio.
   */
  it('sin bloque propio, el contorno en reposo se mide contra el fondo de la zona', () => {
    const result = validateStrict(withoutFix({ variable: '--bs-btn-outline-primary-color' }));
    expect(findings(result)).toEqual([
      expect.stringMatching(
        /^error contraste-horneado: "\.btn-outline-primary dentro de \[data-bs-theme="oscura"\], en reposo": \d\.\d\d:1 entre --bs-btn-color .* y --bs-body-bg/,
      ),
    ]);
    // El arreglo genérico no sirve: la variante redeclara --bs-btn-color en el
    // propio botón, así que el bloque de la zona no le llega.
    expect(result.stderr).toContain('Declara --bs-btn-outline-primary-color dentro de la zona');
    expect(result.status).toBe(1);
  });

  /*
   * La supresión se cuenta por variante, no por role. Un bloque sobre el botón
   * sólido no lleva el contorno a R10, así que no puede apagar su par: si la
   * clave fuera el role, este caso saldría mudo con la zona rota.
   */
  it('un bloque del botón sólido no calla el par del contorno', () => {
    const result = validateStrict(withoutFix(
      { variable: '--bs-btn-outline-primary-color' },
      [{
        selector: '.btn-primary',
        vars: {
          '--bs-btn-color': 'rgb(var(--bs-dark-rgb))',
          '--bs-btn-bg': 'rgb(var(--bs-primary-200-rgb))',
        },
      }],
    ));
    expect(findings(result, 'contraste-horneado')).toEqual([
      expect.stringMatching(
        /^error contraste-horneado: "\.btn-outline-primary dentro de \[data-bs-theme="oscura"\], en reposo":/,
      ),
    ]);
    expect(result.status).toBe(1);
  });

  /*
   * Y al revés: con bloque propio lo mide R10, que conoce el bloque y los tres
   * estados. El par horneado tiene que callarse o el mismo botón se reportaría
   * dos veces.
   */
  it('un bloque del propio contorno lo lleva a R10 y no se reporta dos veces', () => {
    const result = validateStrict(withoutFix(
      { variable: '--bs-btn-outline-primary-color' },
      [{ selector: '.btn-outline-primary', vars: { '--bs-btn-color': 'rgb(var(--bs-primary-200-rgb))' } }],
    ));
    expect(findings(result, 'contraste-horneado')).toEqual([]);
    // El botón no queda sin medir: pasa a R10, que al tener bloque propio le
    // revisa los tres estados y sigue viendo hover y active contra la zona.
    expect(findings(result, 'contraste-boton')).toEqual([
      expect.stringMatching(/^error contraste-boton: "\.btn-outline-primary dentro de \[data-bs-theme="oscura"\], en hover":/),
      expect.stringMatching(/^error contraste-boton: "\.btn-outline-primary dentro de \[data-bs-theme="oscura"\], en active":/),
    ]);
    expect(rules(result)).toEqual(['contraste-boton x2']);
  });

  /*
   * El theme sólo rebrandea primary. El contorno de los demás roles no depende
   * de eso: la zona les oscurece la superficie igual.
   */
  it('mide el contorno de un role que el theme no toca', () => {
    const result = validateStrict(withoutFix({ variable: '--bs-btn-outline-secondary-color' }));
    expect(findings(result)).toEqual([
      expect.stringMatching(
        /^error contraste-horneado: "\.btn-outline-secondary dentro de \[data-bs-theme="oscura"\], en reposo": 1\.\d\d:1 /,
      ),
    ]);
    expect(result.status).toBe(1);
  });

  /*
   * success roza el umbral sobre el fondo claro de la librería (4.20:1). En la
   * zona oscura da un número parecido, pero contra otra superficie: no es el par
   * de la librería, así que no se calla como preexistente.
   */
  it('no calla como preexistente un contorno cuya superficie movió la zona', () => {
    const result = validateStrict(withoutFix({ variable: '--bs-btn-outline-success-color' }));
    expect(findings(result)).toEqual([
      expect.stringMatching(
        /^error contraste-horneado: "\.btn-outline-success dentro de \[data-bs-theme="oscura"\], en reposo": 3\.\d\d:1 .*\(con la paleta por defecto este par da 4\.\d\d:1\)/,
      ),
    ]);
    expect(result.status).toBe(1);
  });

  /*
   * `light` y `dark` no son roles semánticos sino de superficie: cada uno
   * existe para el fondo contrario. Medirlos contra el cuerpo del contexto
   * delataría siempre al que se está usando donde debe.
   */
  it('no mide el contorno de los roles de superficie', () => {
    const result = validateStrict(withoutFix({ variable: '--bs-btn-outline-primary-color' }));
    expect(result.stderr).not.toContain('.btn-outline-light');
    expect(result.stderr).not.toContain('.btn-outline-dark');
  });

  /*
   * El caso del issue: una zona que sólo oscurece el cuerpo y no declara nada
   * más. Antes salía sin un solo error; ahora cae el grupo entero de pares.
   */
  it('una zona que sólo oscurece el cuerpo reporta todos sus componentes', () => {
    const result = validateStrict(expandCss({
      ...MINIMAL_THEME,
      zones: {
        oscura: {
          vars: {
            '--bs-body-bg-rgb': '16, 24, 40',
            '--bs-body-color-rgb': 'var(--bs-white-rgb)',
          },
        },
      },
    }));
    const bakedComponents = findings(result, 'contraste-horneado')
      .map((f) => f.replace(/^error contraste-horneado: "([^"]+) dentro de .*/, '$1'));
    expect(bakedComponents).toEqual(expect.arrayContaining([
      '.card',
      '.form-control',
      '.form-select',
      '.form-label',
      '.form-check-label',
      '.form-text',
      '.nav-link',
      '.text-body-secondary',
      '.btn-outline-primary',
      '.btn-outline-secondary',
      '.btn-outline-success',
      '.btn-outline-info',
      '.btn-outline-warning',
      '.btn-outline-danger',
    ]));
    expect(result.status).toBe(1);
  });

  /*
   * El theme literal de la reproducción de #1375: superficies y lista ya
   * corregidas, nada más. Cada fila de la tabla del issue tiene que salir.
   */
  it('el theme de la reproducción recibe un hallazgo por cada fila de la tabla', () => {
    const result = validateStrict(expandCss({
      name: 'Ejemplo',
      roles: { primary: '#0b6b53' },
      body: { bg: '#f7f8fa', color: '#101828' },
      typography: { fontFamily: 'system-ui, sans-serif' },
      radius: '.5rem',
      zones: {
        oscura: {
          vars: {
            '--bs-body-bg-rgb': 'var(--bs-dark-rgb)',
            '--bs-body-color-rgb': 'var(--bs-white-rgb)',
            '--bs-secondary-bg-rgb': 'var(--bs-gray-800-rgb)',
            '--bs-tertiary-bg-rgb': 'var(--bs-gray-800-rgb)',
          },
          components: [{
            selector: '.list-group',
            vars: {
              '--bs-list-group-color': 'rgb(var(--bs-white-rgb))',
              '--bs-list-group-action-color': 'rgb(var(--bs-white-rgb))',
            },
          }],
        },
      },
    }));
    const zone = '\\[data-bs-theme="oscura"\\]';
    const baked = (component: string) => new RegExp(
      `^error contraste-horneado: "${component.replace(/\./g, '\\.')} dentro de ${zone}(, en reposo)?": `,
    );
    expect(findings(result)).toEqual([
      expect.stringMatching(/^error contraste-enlace-zona: Zona "oscura": el enlace da 2\.81:1/),
      ...[
        '.card', '.form-control', '.form-select', '.form-label', '.form-check-label',
        '.form-text', '.nav-link', '.text-body-secondary',
        '.btn-outline-primary', '.btn-outline-secondary', '.btn-outline-success',
        '.btn-outline-info', '.btn-outline-warning', '.btn-outline-danger',
      ].map((component) => expect.stringMatching(baked(component))),
    ]);
    expect(result.status).toBe(1);
  });
});

/*
 * Una zona que no mueve ningún par no añade problemas: repetir en ella los
 * hallazgos del raíz multiplica la cuenta y manda el arreglo al sitio
 * equivocado. Desde #1380 basta con que un selector de componente nombre la
 * zona para que exista, así que cualquier `[data-bs-theme="x"] .card` la creaba
 * y duplicaba el raíz entero.
 */
describe('theme-validate — una zona que no cambia nada no repite el raíz (#1387)', () => {
  /** Raíz con el cuerpo ilegible y las zonas que se le pidan, sin tocar color. */
  const withZones = (...zones: string[]) => [
    ':root,',
    '[data-bs-theme="dynamic"] {',
    '  --bs-body-bg-rgb: 255, 255, 255;',
    '  --bs-body-bg: rgb(var(--bs-body-bg-rgb));',
    '  --bs-body-color-rgb: 230, 230, 230;',
    '  --bs-body-color: rgb(var(--bs-body-color-rgb));',
    '  --bs-border-color: rgb(var(--bs-gray-100-rgb));',
    '}',
    ...zones.map((zone) => `\n[data-bs-theme="${zone}"] .card {\n  --bs-card-border-color: rgb(0, 0, 255);\n}`),
  ].join('\n');

  it('el raíz reporta lo mismo haya una zona, tres o ninguna', () => {
    const counts = [
      withZones(),
      withZones('azul'),
      withZones('azul', 'verde', 'roja'),
    ].map((css) => findings(validateStrict(css)).length);
    expect(counts[0]).toBeGreaterThan(0);
    expect(counts).toEqual([counts[0], counts[0], counts[0]]);
  });

  it('ningún hallazgo lleva el sufijo de una zona que no cambia nada', () => {
    const result = validateStrict(withZones('azul', 'verde'));
    expect(result.stderr).not.toContain('[data-bs-theme="azul"]');
    expect(result.stderr).not.toContain('[data-bs-theme="verde"]');
  });

  /*
   * La comparación es por lo que la zona RESUELVE, no por lo que declara: una
   * zona puede reescribir el triplete y llegar al mismo color, y eso tampoco es
   * un hallazgo nuevo.
   */
  it('una zona que redeclara el mismo color tampoco repite', () => {
    const css = `${withZones()}\n[data-bs-theme="igual"] {\n`
      + '  --bs-body-color-rgb: 230, 230, 230;\n'
      + '  --bs-body-color: rgb(var(--bs-body-color-rgb));\n}';
    const result = validateStrict(css);
    expect(result.stderr).not.toContain('[data-bs-theme="igual"]');
  });

  it('una zona que sí cambia el par conserva sus hallazgos', () => {
    const css = `${withZones('quieta')}\n[data-bs-theme="oscura"] {\n`
      + '  --bs-body-bg-rgb: 17, 24, 39;\n'
      + '  --bs-body-bg: rgb(var(--bs-body-bg-rgb));\n'
      + '  --bs-body-color-rgb: var(--bs-white-rgb);\n'
      + '  --bs-body-color: rgb(var(--bs-body-color-rgb));\n'
      + '  color: var(--bs-body-color);\n  background-color: var(--bs-body-bg);\n}';
    const result = validateStrict(css);
    expect(result.stderr).toContain('[data-bs-theme="oscura"]');
    expect(result.stderr).not.toContain('[data-bs-theme="quieta"]');
  });

  /*
   * Antes el par cuerpo/fondo sólo se medía dentro de las zonas, así que un
   * raíz ilegible no se reportaba por sí mismo: lo delataba cada zona que lo
   * heredaba, repetido y señalando el sitio equivocado. Ahora sale una vez,
   * donde está el arreglo.
   */
  it('el par cuerpo/fondo del raíz se reporta aunque no haya ninguna zona', () => {
    const result = validateStrict(withZones());
    expect(findings(result)).toContainEqual(
      expect.stringMatching(/^error contraste-cuerpo: El cuerpo del documento: 1\.\d\d:1 entre --bs-body-color-rgb y --bs-body-bg-rgb/),
    );
    expect(result.status).toBe(1);
  });
});

describe('known-tokens.json al día con el CSS compilado (#1311)', () => {
  const THEME_DIR = path.join(ROOT, 'scripts/theme');
  const INVENTORY = path.join(THEME_DIR, 'known-tokens.json');
  const BUILD = path.join(THEME_DIR, 'build-known-tokens.mjs');
  const SKELETON = [
    '--bs-skeleton-animation', '--bs-skeleton-bg', '--bs-skeleton-border-radius',
    '--bs-skeleton-gap', '--bs-skeleton-line-gap', '--bs-skeleton-mask-image',
  ];

  // Los scripts leen el inventario desde su propio directorio, resuelven sus
  // dependencias desde node_modules y theme-expand lee ../../package.json: la
  // copia vive dos niveles por debajo de la raíz, dentro de scripts/. Se borra
  // en afterAll, que corre aunque falle algún caso.
  let oldDir: string;
  beforeAll(() => {
    oldDir = fs.mkdtempSync(path.join(ROOT, 'scripts', '.known-tokens-'));
    for (const file of ['theme-expand.mjs', 'theme-validate.mjs', 'theme-tokens.mjs']) {
      fs.copyFileSync(path.join(THEME_DIR, file), path.join(oldDir, file));
    }
    const current = JSON.parse(fs.readFileSync(INVENTORY, 'utf8'));
    const tokens = current.tokens.filter((token: string) => !SKELETON.includes(token));
    fs.writeFileSync(
      path.join(oldDir, 'known-tokens.json'),
      `${JSON.stringify({ dynamicUi: '2.10.0', count: tokens.length, tokens }, null, 2)}\n`,
    );
  });
  afterAll(() => {
    fs.rmSync(oldDir, { recursive: true, force: true });
  });

  const EJEMPLO = path.join(THEME_DIR, 'themes/theme-ejemplo-zonas.json');
  const skeletonTheme = () => {
    const theme = JSON.parse(fs.readFileSync(EJEMPLO, 'utf8'));
    theme.components.push({ selector: '.card', vars: { '--bs-card-cap-bg': 'var(--bs-skeleton-bg)' } });
    return write(JSON.stringify(theme), '.json');
  };
  // El navegador pinta --bs-skeleton-bg; el respaldo sólo se usaría si el token
  // no existiera.
  const skeletonCss = () => write(
    `${fs.readFileSync(path.join(THEME_DIR, 'out/theme-ejemplo-zonas.css'), 'utf8')}\n`
    + '.btn-primary {\n  --bs-btn-color: var(--bs-skeleton-bg, rgb(var(--bs-primary-rgb)));\n}\n',
    '.css',
  );

  it('el inventario anterior rechaza en theme-expand un token de skeleton que existe', () => {
    const input = skeletonTheme();
    const result = run(path.join(oldDir, 'theme-expand.mjs'), [input, '-o', `${input}.css`]);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain(
      'referencia --bs-skeleton-bg, que no existe: ni lo genera este theme ni está en el CSS de Dynamic UI 2.10.0.',
    );
  });

  it('el inventario versionado lo acepta', () => {
    const input = skeletonTheme();
    const result = run(EXPAND, [input, '-o', `${input}.css`]);
    expect(result.status).toBe(0);
  });

  it('el inventario anterior mide en theme-validate el respaldo de un token que existe', () => {
    const result = run(path.join(oldDir, 'theme-validate.mjs'), [skeletonCss()]);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('[contraste-boton]');
    expect(result.stderr).toContain('".btn-primary": 1.00:1');
  });

  it('el inventario versionado no lo da por roto: no conoce su valor y lo avisa', () => {
    const result = run(VALIDATE, [skeletonCss()]);
    expect(result.status).toBe(0);
    expect(result.stderr).not.toContain('[contraste-boton]');
    expect(result.stderr).toContain('--bs-skeleton-bg es de la librería, pero el validador no conoce su valor');
  });

  describe('build-known-tokens --check', () => {
    const versioned = () => JSON.parse(fs.readFileSync(INVENTORY, 'utf8')).tokens as string[];
    /** Un CSS con la cabecera de versión y una declaración por token. */
    const cssWith = (tokens: string[], version = '9.9.9') => write(
      `/*!\n * dynamic-framework ${version}\n */\n:root {\n${tokens.map((t) => `  ${t}: 0;`).join('\n')}\n}\n`,
      '.css',
    );

    it('sale con 0 si los tokens coinciden, aunque la versión no', () => {
      const result = run(BUILD, ['--check', cssWith(versioned())]);
      expect(result.status).toBe(0);
      expect(result.stdout).toContain('known-tokens.json coincide con el CSS');
    });

    it('sale con 1 y lista lo que entra y lo que sale', () => {
      const [first, ...rest] = versioned();
      const result = run(BUILD, ['--check', cssWith([...rest, '--bs-token-nuevo'])]);
      expect(result.status).toBe(1);
      expect(result.stderr).toContain('  + --bs-token-nuevo\n');
      expect(result.stderr).toContain(`  - ${first}\n`);
    });

    it('no escribe el inventario', () => {
      const before = fs.readFileSync(INVENTORY, 'utf8');
      run(BUILD, ['--check', cssWith(['--bs-solo-uno'])]);
      expect(fs.readFileSync(INVENTORY, 'utf8')).toBe(before);
    });

    const compiled = path.join(ROOT, 'dist/css/dynamic-ui.css');
    // dist/ es build output: aquí se salta si no está compilado; en CI lo
    // comprueba el paso «Check known-tokens.json» después del build.
    (fs.existsSync(compiled) ? it : it.skip)('el inventario versionado coincide con dist/css/dynamic-ui.css', () => {
      expect(run(BUILD, ['--check', compiled]).status).toBe(0);
    });
  });
});
