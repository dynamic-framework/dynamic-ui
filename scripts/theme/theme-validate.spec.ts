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
  expect(result.stderr).toBe('');
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

  it('incluye el fix de secondary-bg y tertiary-bg apuntando al triplete', () => {
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
    // El único hallazgo es un par que ya viene roto en la librería, no del theme.
    expect(result.stderr).not.toContain('error ');
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

  it('el fix de secondary-bg apuntando al wrapper roto', () => {
    const valid = expandCss(MINIMAL_THEME);
    const broken = valid.replace(
      '--bs-secondary-bg-rgb: var(--bs-gray-200-rgb);',
      '--bs-secondary-bg-rgb: var(--bs-gray-200);',
    );
    const result = validate(broken);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('[fix-bg]');
    expect(result.stderr).toContain('es precisamente el valor roto');
  });

  it('el fix de tertiary-bg ausente', () => {
    const valid = expandCss(MINIMAL_THEME);
    const broken = valid.replace(/\n\s*--bs-tertiary-bg-rgb: [^;]+;/, '');
    const result = validate(broken);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('[fix-bg]');
    expect(result.stderr).toContain('--bs-tertiary-bg-rgb');
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
    expect(css).toContain('reemplaza una variable derivada');
  });

  it('normaliza los hex a minúscula, como pide el linter del repo', () => {
    const css = expandCss({
      ...SECTIONED_THEME,
      root: { '--bs-danger-text-emphasis': '#A41313' },
    });
    expect(css).toContain('--bs-danger-text-emphasis: #a41313;');
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
    // Sin variables de pastilla no se emite el bloque .nav-pills vacío.
    const soloNav = expandCss({
      ...SECTIONED_THEME,
      zones: {
        oscura: {
          ...SECTIONED_THEME.zones.oscura,
          nav: { '--bs-nav-link-color': 'rgb(var(--bs-white-rgb))' },
        },
      },
    });
    expect(soloNav).not.toContain('.nav-pills');
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

  it('atrapa una pastilla activa ilegible sobre su propio fondo', () => {
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
        { selector: '.btn-primary', vars: { '--bs-btn-color': 'rgb(var(--bs-body-color-rgb))' } },
      ],
      zones: {
        oscura: {
          vars: {
            '--bs-body-bg-rgb': '0, 40, 86',
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
        { selector: '.btn-primary', vars: { '--bs-btn-color': 'rgb(var(--bs-body-color-rgb))' } },
      ],
      zones: {
        oscura: {
          vars: {
            '--bs-body-bg-rgb': '0, 40, 86',
            '--bs-body-color-rgb': 'var(--bs-white-rgb)',
          },
        },
      },
    });
    expect(validate(css).status).toBe(1);

    // Con un bloque propio para la zona, que fija un texto legible, calla.
    const arreglado = css.replace(
      /$/,
      '\n[data-bs-theme="oscura"] .btn-primary {\n  --bs-btn-color: rgb(var(--bs-dark-rgb));\n}\n',
    );
    const result = validate(arreglado);
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
            '--bs-body-bg-rgb': '0, 40, 86',
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
        { selector: '.btn-primary', vars: { '--bs-btn-color': 'rgb(var(--bs-body-color-rgb))' } },
      ],
      zones: {
        oscura: {
          ...SECTIONED_THEME.zones.oscura,
          vars: {
            '--bs-body-bg-rgb': '0, 40, 86',
            '--bs-body-color-rgb': 'var(--bs-white-rgb)',
          },
        },
      },
    };
    expect(validate(expandCss(base)).status).toBe(1);

    const conArreglo = expandCss({
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
    expect(validate(conArreglo).stderr).not.toContain('[contraste-boton]');
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
            '--bs-body-bg-rgb': '0, 40, 86',
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
    const roto = expandCss({ ...SECTIONED_THEME, roles: { primary: '#7fd4d0' } });
    expect(validate(roto).stderr).toContain('.alert-primary');

    const arreglado = expandCss({
      ...SECTIONED_THEME,
      roles: { primary: '#7fd4d0' },
      root: {
        ...SECTIONED_THEME.root,
        '--bs-primary-text-emphasis': 'rgb(var(--bs-primary-800-rgb))',
      },
    });
    expect(validate(arreglado).stderr).not.toContain('.alert-primary');
  });

  it('no culpa al theme de un par que ya viene roto en la librería', () => {
    const result = validate(expandCss(SECTIONED_THEME));
    expect(result.stderr).not.toContain('error ');
  });

  it('distingue el botón con contorno en reposo del relleno', () => {
    // En reposo el texto va sobre la superficie; sólo al rellenarse cae sobre
    // el color del role, y ahí manda --bs-btn-hover-color. Este theme pone
    // blanco en reposo sobre fondo oscuro y oscuro al rellenar: los dos pares
    // contrastan, aunque medir el de reposo contra el role diría lo contrario.
    const css = expandCss({
      ...SECTIONED_THEME,
      roles: { primary: '#7fd4d0' },
      zones: {
        oscura: {
          ...SECTIONED_THEME.zones.oscura,
          vars: {
            '--bs-body-bg-rgb': '0, 40, 86',
            '--bs-body-color-rgb': 'var(--bs-white-rgb)',
          },
          components: [
            ...SECTIONED_THEME.zones.oscura.components,
            {
              selector: '.btn-outline-primary',
              vars: {
                '--bs-btn-color': 'rgb(var(--bs-white-rgb))',
                '--bs-btn-hover-color': 'rgb(var(--bs-dark-rgb))',
              },
            },
          ],
        },
      },
    });
    expect(validate(css).stderr).not.toContain('[contraste-boton]');

    // Y si el relleno se deja en blanco, sí se reporta, nombrando el estado.
    const roto = expandCss({
      ...SECTIONED_THEME,
      roles: { primary: '#7fd4d0' },
      zones: {
        oscura: {
          ...SECTIONED_THEME.zones.oscura,
          vars: {
            '--bs-body-bg-rgb': '0, 40, 86',
            '--bs-body-color-rgb': 'var(--bs-white-rgb)',
          },
          components: [
            ...SECTIONED_THEME.zones.oscura.components,
            {
              selector: '.btn-outline-primary',
              vars: {
                '--bs-btn-color': 'rgb(var(--bs-white-rgb))',
                '--bs-btn-hover-color': 'rgb(var(--bs-white-rgb))',
              },
            },
          ],
        },
      },
    });
    const result = validate(roto);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('relleno (hover/active)');
  });
});

describe('theme-expand — el breakpoint de RFS', () => {
  it('repite los pasos 1..4 en 1200px aunque el tamaño no sea fluido', () => {
    // La librería redeclara --bs-rfs-fs-1..4 dentro de @media (min-width: 1200px)
    // con 3rem/2.5rem/2rem/1.5rem. Un override menor que la base de RFS no genera
    // valor fluido, pero sigue necesitando su bloque o en desktop gana el suyo.
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

describe('el theme de Ejemplo que vive en el repo', () => {
  const themePath = path.join(ROOT, 'scripts/theme/themes/theme-ejemplo-zonas.json');

  it('cumple el esquema y genera su CSS', () => {
    const output = path.join(workdir, 'theme-ejemplo-zonas.css');
    const result = run(EXPAND, [themePath, '-o', output]);
    expect(result.stderr).toBe('');
    expect(result.status).toBe(0);

    const css = fs.readFileSync(output, 'utf8');
    expect(css).toContain('--bs-primary-rgb: 0, 204, 197;');
    expect(css).toContain('[data-bs-theme="oscura"] {');
    expect(css).toContain('.font-numeric {');
    // Los componentes propios de la zona, que son lo que v0.2.1 añade.
    expect(css).toContain('[data-bs-theme="oscura"] .btn-primary {');
    expect(css).toContain('[data-bs-theme="oscura"] .list-group {');
  });

  it('sólo deja sin resolver el par que va horneado con !important', () => {
    const output = path.join(workdir, 'theme-ejemplo-2.css');
    run(EXPAND, [themePath, '-o', output]);
    const result = run(VALIDATE, [output]);

    // Todo lo que el theme puede mover está resuelto: botones y listas dentro
    // de la zona oscura, y el par de las alertas de primary.
    expect(result.stderr).not.toContain('[contraste-boton]');
    expect(result.stderr).not.toContain('[contraste-nav-pills]');
    expect(result.stderr).not.toContain('[contraste-zona]');
    expect(result.stderr).not.toContain('.list-group-item');
    expect(result.stderr).not.toContain('.alert-primary');

    // Lo único que queda es `.text-bg-primary`, en el raíz y en la zona:
    // Bootstrap escribe ese color con !important en la propia clase, así que
    // ninguna variable del theme puede moverlo. Es un límite de la librería.
    expect(result.stderr).toContain('.text-bg-primary');
    const errores = result.stderr.match(/^error /gm) ?? [];
    expect(errores).toHaveLength(2);
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
