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

import { execFileSync } from 'node:child_process';
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
  try {
    // stderr se captura en vez de heredarse: los mensajes del validador son
    // parte de lo que se comprueba, no ruido para la salida de Jest.
    const stdout = execFileSync('node', [script, ...args], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    return { status: 0, stdout, stderr: '' };
  } catch (error) {
    const spawned = error as { status: number; stdout: string; stderr: string };
    return { status: spawned.status, stdout: spawned.stdout ?? '', stderr: spawned.stderr ?? '' };
  }
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
    expect(result.stderr).toContain('[contraste]');
    expect(result.stderr).toContain('--bs-white-rgb');
    expect(result.stderr).toContain('WCAG 2.x AA');
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
