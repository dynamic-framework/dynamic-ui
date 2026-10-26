/**
 * Tests de check-docs-manifest.
 *
 * El script se ejercita por CLI, como los de scripts/theme/: así se valida
 * también el código de salida y el mensaje. El fixture `develop/` es el
 * DesignTokens.mdx publicado antes de #1292, con el modo oscuro sobre :root;
 * si el script lo aceptara, las reglas no existirían.
 */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const ROOT = path.resolve(__dirname, '..');
const CHECK = path.join(ROOT, 'scripts/check-docs-manifest.mjs');
const FIXTURE_DEVELOP = path.join(ROOT, 'scripts/fixtures/check-docs-manifest/develop');
// Dos entradas del components.json de 2.12.0 publicado en el CDN, sin cambios:
// definedInFile lleva la ruta del runner de CI.
const FIXTURE_COMPONENTS = path.join(ROOT, 'scripts/fixtures/check-docs-manifest/components-2.12.0.json');

let workdir: string;

beforeAll(() => {
  workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'dynamic-docs-'));
});

afterAll(() => {
  fs.rmSync(workdir, { recursive: true, force: true });
});

type Run = { status: number; stdout: string; stderr: string };

function run(args: string[]): Run {
  const spawned = spawnSync('node', [CHECK, ...args], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  return { status: spawned.status ?? -1, stdout: spawned.stdout, stderr: spawned.stderr };
}

// Una página MDX suelta en su propio directorio, con el título que da su id.
function storiesWith(title: string, body: string): string {
  const dir = fs.mkdtempSync(path.join(workdir, 'stories-'));
  fs.writeFileSync(path.join(dir, 'Page.mdx'), `<Meta title="${title}" />\n\n${body}\n`);
  return dir;
}

const DARK_ROOT = '```css\n@media (prefers-color-scheme: dark) {\n  :root {\n    --bs-body-bg-rgb: 14, 17, 22;\n  }\n}\n```';

describe('check-docs-manifest', () => {
  test('los MDX de stories/ pasan', () => {
    const result = run(['--stories', path.join(ROOT, 'stories')]);
    expect(result.stderr).toBe('');
    expect(result.status).toBe(0);
  });

  test('el DesignTokens.mdx de develop falla, por MDX y por docs.json', () => {
    const fromStories = run(['--stories', FIXTURE_DEVELOP]);
    expect(fromStories.status).toBe(1);
    expect(fromStories.stderr).toContain('design-system-foundations-design-tokens--docs:134  [color-scheme-root]');
    expect(fromStories.stderr).toContain('[prefers-color-scheme]');

    const content = fs.readFileSync(path.join(FIXTURE_DEVELOP, 'DesignTokens.mdx'), 'utf8');
    const manifest = path.join(workdir, 'docs.json');
    fs.writeFileSync(manifest, JSON.stringify({
      v: 0,
      docs: { 'design-system-foundations-design-tokens--docs': { content } },
    }));
    const fromManifest = run([manifest]);
    expect(fromManifest.status).toBe(1);
    expect(fromManifest.stderr).toBe(fromStories.stderr);
  });

  test('prefers-color-scheme se admite solo en las páginas de los utilitarios dark:', () => {
    const mention = 'Dark variants follow `prefers-color-scheme: dark`.';
    expect(run(['--stories', storiesWith('Design System/Examples/Dark Utilities', mention)]).status).toBe(0);
    expect(run(['--stories', storiesWith('Design System/Quick Start', mention)]).status).toBe(0);

    const upper = run(['--stories', storiesWith('Design System/Foundations/Colors', 'Dark variants follow `PREFERS-COLOR-SCHEME: dark`.')]);
    expect(upper.stderr).toContain('[prefers-color-scheme]');

    const other = run(['--stories', storiesWith('Design System/Foundations/Colors', mention)]);
    expect(other.status).toBe(1);
    expect(other.stderr).toContain('design-system-foundations-colors--docs:3  [prefers-color-scheme]');
  });

  test('ninguna página, tampoco las de dark:, redefine --bs-* en :root, html o body bajo prefers-color-scheme', () => {
    const allowed = run(['--stories', storiesWith('Design System/Examples/Dark Utilities', DARK_ROOT)]);
    expect(allowed.status).toBe(1);
    expect(allowed.stderr).toContain('[color-scheme-root]');
    expect(allowed.stderr).not.toContain('[prefers-color-scheme]');

    ['html', 'body'].forEach((selector) => {
      const result = run(['--stories', storiesWith('Design System/Examples/Dark Utilities', DARK_ROOT.replace(':root', selector))]);
      expect(result.stderr).toContain('[color-scheme-root]');
    });

    // La regla global no tiene que ser la primera del bloque.
    const commentFirst = DARK_ROOT.replace('  :root {', '  /* global */\n  :root {');
    const componentFirst = DARK_ROOT.replace('  :root {', '  .btn-primary { --bs-btn-bg: var(--bs-primary-600); }\n  :root {');
    const withType = DARK_ROOT.replace('@media (', '@media screen and (');
    const widthFirst = DARK_ROOT.replace('@media (', '@media (min-width: 768px) and (');
    const qualified = ['html.dark', ':root.dark', '.dark:root', '[data-bs-theme="night"]:root', ':is(body)', ':where(html)']
      .map((selector) => DARK_ROOT.replace('  :root {', `  ${selector} {`));
    const nested = DARK_ROOT.replace('    --bs-body-bg-rgb: 14, 17, 22;', '    @media (min-width: 768px) {\n      --bs-body-bg-rgb: 14, 17, 22;\n    }');
    // Anidamiento CSS: la media query dentro de la regla global, y `&`.
    const mediaInside = '```css\n:root {\n  @media (prefers-color-scheme: dark) {\n    --bs-body-bg-rgb: 14, 17, 22;\n  }\n}\n```';
    const ampersand = DARK_ROOT.replace('    --bs-body-bg-rgb: 14, 17, 22;', '    & {\n      --bs-body-bg-rgb: 14, 17, 22;\n    }');
    const fromBody = run(['--stories', storiesWith('Design System/Examples/Dark Utilities', mediaInside.replace(':root', 'body'))]);
    expect(fromBody.stderr).toContain('design-system-examples-dark-utilities--docs:5  [color-scheme-root]');
    [commentFirst, componentFirst, withType, widthFirst, ...qualified, nested, ampersand].forEach((body) => {
      const result = run(['--stories', storiesWith('Design System/Examples/Dark Utilities', body)]);
      expect(result.status).toBe(1);
      expect(result.stderr).toContain('design-system-examples-dark-utilities--docs:4  [color-scheme-root]');
    });

    // Una clase de componente bajo la media query no es un esquema oscuro global.
    const component = DARK_ROOT.replace(':root', '.btn-primary').replace('--bs-body-bg-rgb: 14, 17, 22', '--bs-btn-bg: var(--bs-primary-600)');
    expect(run(['--stories', storiesWith('Design System/Examples/Dark Utilities', component)]).status).toBe(0);

    // Tampoco lo es un componente con `:root`, `html` o `body` como ancestro.
    // Ni una regla de componente anidada en la global.
    const nestedComponent = DARK_ROOT.replace('    --bs-body-bg-rgb: 14, 17, 22;', '    & .btn-primary {\n      --bs-btn-bg: var(--bs-primary-600);\n    }');
    expect(run(['--stories', storiesWith('Design System/Examples/Dark Utilities', nestedComponent)]).status).toBe(0);

    // Ni un pseudoelemento de la raíz: lo declarado es del pseudoelemento.
    ['body::before', 'html::after', ':root::selection', 'body:before'].forEach((selector) => {
      const pseudo = DARK_ROOT.replace('  :root {', `  ${selector} {`);
      expect(run(['--stories', storiesWith('Design System/Examples/Dark Utilities', pseudo)]).status).toBe(0);
    });

    ['body .btn-primary', 'html > body .btn-primary', ':root .card', '.btn-primary:not(:root)', ':is(body) .btn-primary'].forEach((selector) => {
      const ancestor = component.replace('.btn-primary', selector);
      expect(run(['--stories', storiesWith('Design System/Examples/Dark Utilities', ancestor)]).status).toBe(0);
    });
  });

  test('la media query se encuentra en cualquier región de código de la página', () => {
    // Quick Start tiene ```dynamic-react-base-template``` en una frase: esa
    // triple comilla en línea no puede desplazar el emparejamiento de los bloques.
    const quickStart = fs.readFileSync(path.join(ROOT, 'stories/QuickStart.mdx'), 'utf8');
    expect(quickStart).toMatch(/[^\n`]```[\w-]+```/);
    const quickStartDir = fs.mkdtempSync(path.join(workdir, 'stories-'));
    fs.writeFileSync(path.join(quickStartDir, 'QuickStart.mdx'), `${quickStart}\n\n${DARK_ROOT}\n`);
    const appended = run(['--stories', quickStartDir]);
    expect(appended.status).toBe(1);
    expect(appended.stderr).toContain('design-system-quick-start--docs:');
    expect(appended.stderr).toContain('[color-scheme-root]');

    // El contenido de `<style>`, en un bloque HTML o en `<Source>`.
    const css = DARK_ROOT.replace(/^```css\n|\n```$/g, '');

    // Bloques con virgulillas, con cuatro comillas (también mostrando otro bloque
    // dentro) y sin cierre, que en CommonMark llega hasta el final de la página.
    [
      `~~~css\n${css}\n~~~`,
      `\`\`\`\`css\n${css}\n\`\`\`\``,
      `\`\`\`\`md\n${DARK_ROOT}\n\`\`\`\``,
      `~~~css\n${css}`,
      // `<Source>` con el literal en sus propias líneas, como en useFormatCurrency.mdx.
      `<Source\n  code={\n    \`\n${css}\n\`\n  }\n  language="css"\n/>`,
      // Un bloque abierto detrás de una viñeta de lista.
      `- \`\`\`css\n${css.split('\n').map((line) => `  ${line}`).join('\n')}\n  \`\`\``,
      `1. \`\`\`css\n${css.split('\n').map((line) => `   ${line}`).join('\n')}\n   \`\`\``,
      // La forma booleana de la característica, sin valor.
      `\`\`\`css\n${css.replace('(prefers-color-scheme: dark)', '(prefers-color-scheme)')}\n\`\`\``,
      // Sin distinguir mayúsculas, como en CSS.
      `\`\`\`css\n${css.replace('@media (prefers-color-scheme', '@MEDIA (Prefers-Color-Scheme').replace(':root', ':ROOT')}\n\`\`\``,
      `\`\`\`css\n${css.replace('@media', '@Media').replace('  :root {', '  BODY {')}\n\`\`\``,
      // Un bloque dentro de una cita, también anidada.
      DARK_ROOT.split('\n').map((line) => `> ${line}`).join('\n'),
      DARK_ROOT.split('\n').map((line) => `> > ${line}`).join('\n'),
      // Una llave dentro de una cadena no cierra la media query.
      `\`\`\`css\n${css.replace('  :root {', '  .icon::before { content: "}"; }\n  :root {')}\n\`\`\``,
    ].forEach((body) => {
      const result = run(['--stories', storiesWith('Design System/Examples/Dark Utilities', body)]);
      expect(result.status).toBe(1);
      expect(result.stderr).toContain('[color-scheme-root]');
    });
    const styleTag = `<style>\n${css}\n</style>`;
    [`\`\`\`html\n${styleTag}\n\`\`\``, `<Source code={\`\n${styleTag}\n\`} language="html" />`].forEach((body) => {
      const result = run(['--stories', storiesWith('Design System/Examples/Dark Utilities', body)]);
      expect(result.status).toBe(1);
      expect(result.stderr).toContain('design-system-examples-dark-utilities--docs:5  [color-scheme-root]');
    });
  });

  test('un /* dentro de una cadena no abre comentario ni esconde lo que sigue', () => {
    const quoted = '.icon::before { content: "/*"; }';
    const media = run(['--stories', storiesWith('Design System/Examples/Dark Utilities', DARK_ROOT.replace('```css\n', `\`\`\`css\n${quoted}\n`).replace(/\n```$/, '\n/* nota */\n```'))]);
    expect(media.status).toBe(1);
    expect(media.stderr).toContain('[color-scheme-root]');

    const hex = run(['--stories', storiesWith('Design System/Foundations/Colors', `\`\`\`css\n${quoted}\n:root {\n  --bs-primary: #123456;\n}\n/* nota */\n\`\`\``)]);
    expect(hex.status).toBe(1);
    expect(hex.stderr).toContain('design-system-foundations-colors--docs:6  [role-hex]');
  });

  test('un /* fuera de CSS no se empareja con nada ni esconde los bloques siguientes', () => {
    const hexBlock = '```css\n:root {\n  --bs-primary: #123456;\n}\n```';
    ['```shell\ncp dist/* public/\n```', 'Copy `dist/*` to the server.'].forEach((prefix) => {
      const media = run(['--stories', storiesWith('Design System/Examples/Dark Utilities', `${prefix}\n\n${DARK_ROOT}\n\n\`\`\`css\n/* nota */\n\`\`\``)]);
      expect(media.status).toBe(1);
      expect(media.stderr).toContain('[color-scheme-root]');

      const hex = run(['--stories', storiesWith('Design System/Foundations/Colors', `${prefix}\n\n${hexBlock}`)]);
      expect(hex.status).toBe(1);
      expect(hex.stderr).toContain('[role-hex]');
    });
  });

  test('un hex sobre un role falla; el triplete y otras variables no', () => {
    const hex = run(['--stories', storiesWith('Design System/Foundations/Colors', '```css\n:root {\n  --bs-danger: #d32f2f;\n}\n```')]);
    expect(hex.status).toBe(1);
    expect(hex.stderr).toContain('design-system-foundations-colors--docs:5  [role-hex]');

    const spaced = run(['--stories', storiesWith('Design System/Foundations/Colors', '```css\n:root {\n  --bs-primary : #123456;\n}\n```')]);
    expect(spaced.status).toBe(1);
    expect(spaced.stderr).toContain('[role-hex]');

    const commented = run(['--stories', storiesWith('Design System/Foundations/Colors', '```css\n:root {\n  --bs-primary: /* brand */ #123456;\n}\n```')]);
    expect(commented.status).toBe(1);
    expect(commented.stderr).toContain('design-system-foundations-colors--docs:5  [role-hex]');

    const ok = '```css\n:root {\n  --bs-danger-rgb: 211, 47, 47;\n  --bs-focus-ring-border-color: #0b74ff;\n}\n```';
    expect(run(['--stories', storiesWith('Design System/Foundations/Colors', ok)]).status).toBe(0);
  });
});

describe('check-docs-manifest: rutas absolutas', () => {
  function manifestWith(name: string, manifest: unknown): string {
    const file = path.join(workdir, name);
    fs.writeFileSync(file, JSON.stringify(manifest));
    return file;
  }

  test('el components.json de 2.12.0 falla por definedInFile', () => {
    const result = run([FIXTURE_COMPONENTS]);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('$.components.design-system-components-box.reactDocgen.definedInFile  [ruta-absoluta]');
    expect(result.stderr).toContain('/home/runner/work/dynamic-ui/dynamic-ui/src/components/DBox/DBox.tsx');
    expect(result.stderr).toContain('2 problema(s) en 2 componente(s).');
  });

  test('con definedInFile relativo a la raíz pasa', () => {
    const manifest = JSON.parse(fs.readFileSync(FIXTURE_COMPONENTS, 'utf8'));
    Object.values(manifest.components).forEach((entry) => {
      const { reactDocgen } = entry as { reactDocgen: { definedInFile: string } };
      reactDocgen.definedInFile = reactDocgen.definedInFile.replace('/home/runner/work/dynamic-ui/dynamic-ui/', '');
    });
    const result = run([manifestWith('components.json', manifest)]);
    expect(result.stderr).toBe('');
    expect(result.stdout).toBe('2 componente(s) sin problemas.\n');
    expect(result.status).toBe(0);
  });

  test('detecta rutas de macOS, Linux, Windows e import() en docs.json; no las URLs ni las rutas relativas', () => {
    const page = (content: string) => ({ docs: { 'page--docs': { content } } });
    [
      'Built from /Users/dev/dynamic-ui/src.',
      'Built from /home/runner/work/dynamic-ui/dynamic-ui/src.',
      'Built from /private/var/folders/x/src.',
      'Built from C:\\work\\dynamic-ui\\src.',
      'type: import("/x/node_modules/@types/react/index").FC',
    ].forEach((content, i) => {
      const result = run([manifestWith(`docs-bad-${i}.json`, page(content))]);
      expect(result.status).toBe(1);
      expect(result.stderr).toContain("$.docs.page--docs.content  [ruta-absoluta]");
    });

    const ok = 'See https://example.com/home/docs and src/components/home/Home.tsx. Use https://cdn.dynamicframework.dev/assets/.';
    const result = run([manifestWith('docs-ok.json', page(ok))]);
    expect(result.stderr).toBe('');
    expect(result.status).toBe(0);
  });

  test('rechaza un JSON que no es docs.json ni components.json', () => {
    const result = run([manifestWith('other.json', { v: 0 })]);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('no tiene la forma { v, docs } ni { v, components }');
  });
});
