/**
 * Tests de .storybook/manifest-docgen.ts.
 *
 * El manifest de Storybook (`components.json`) y `api.json` tienen que salir
 * con el mismo criterio. Se carga el módulo real con Node (strip-types), como
 * lo carga Storybook, con un manifest casi sin props de babel, para que lo
 * que devuelve venga de scripts/component-docgen.mjs.
 */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(__dirname, '..');
const MANIFEST_DOCGEN = path.join(ROOT, '.storybook/manifest-docgen.ts');

jest.setTimeout(120000);

type DocgenProp = {
  required?: boolean;
  tsType?: { name: string };
  defaultValue?: { value: string };
};

const COMPONENTS = {
  DButton: 'src/components/DButton/DButton.tsx',
  DSkeleton: 'src/components/DSkeleton/DSkeleton.tsx',
  DInputRange: 'src/components/DInputRange/DInputRange.tsx',
  DBadge: 'src/components/DBadge/DBadge.tsx',
  DButtonIcon: 'src/components/DButtonIcon/DButtonIcon.tsx',
};

let props: Record<string, Record<string, DocgenProp>>;
let definedInFiles: Record<string, string>;

// Props que trae babel para DBadge: una propia, con metadatos que deben
// prevalecer, y un atributo de @types/react que el filtro descarta.
const BABEL_PROPS: Record<string, Record<string, DocgenProp>> = {
  DBadge: {
    text: { required: false, tsType: { name: 'string' }, defaultValue: { value: "'from babel'" } },
    tabIndex: { required: false, tsType: { name: 'number' } },
  },
};

beforeAll(() => {
  const manifests = {
    components: {
      components: Object.fromEntries(Object.entries(COMPONENTS).map(([name, file]) => [
        name,
        {
          reactDocgen: {
            displayName: name,
            definedInFile: path.join(ROOT, file),
            props: BABEL_PROPS[name] ?? {},
          },
        },
      ])),
    },
  };
  const script = `
    const { enrichComponentsManifest } = await import(${JSON.stringify(MANIFEST_DOCGEN)});
    const result = enrichComponentsManifest(${JSON.stringify(manifests)});
    const entries = Object.entries(result.components.components);
    process.stdout.write(JSON.stringify({
      props: Object.fromEntries(entries.map(([name, { reactDocgen }]) => [name, reactDocgen.props])),
      files: Object.fromEntries(entries.map(([name, { reactDocgen }]) => [name, reactDocgen.definedInFile])),
    }));
  `;
  const run = spawnSync('node', ['--experimental-strip-types', '--no-warnings', '--input-type=module', '-e', script], {
    cwd: ROOT,
    encoding: 'utf8',
  });
  if (run.status !== 0) throw new Error(run.stderr);
  ({ props, files: definedInFiles } = JSON.parse(run.stdout));
});

describe('manifest-docgen', () => {
  test('recupera los mismos defaults que api.json (#1282)', () => {
    expect(props.DButton.variant.defaultValue?.value).toBe('solid');
    expect(props.DSkeleton.ariaLabel.defaultValue?.value).toBe('Loading...');
    expect(props.DInputRange.filledValue.defaultValue?.value).toBe('true');
    expect(props.DBadge.color.defaultValue?.value).toBe('primary');
  });

  test('aplica el mismo filtro de props que api.json (#1283)', () => {
    expect(props.DButtonIcon).toHaveProperty('color');
    expect(props.DButtonIcon).toHaveProperty('onClick');
    expect(props.DButton.type.defaultValue?.value).toBe('button');
    expect(props.DButton).toHaveProperty('className');
    expect(props.DInputRange.min.defaultValue?.value).toBe('0');
    expect(props.DBadge).not.toHaveProperty('tabIndex');
  });

  test('descarta las props de babel que el filtro rechaza y conserva las demás (#1283)', () => {
    expect(props.DBadge).not.toHaveProperty('tabIndex');
    expect(props.DBadge.text.defaultValue?.value).toBe("'from babel'");
  });

  test('publica definedInFile relativo a la raíz del repo, sin la ruta de la máquina de build', () => {
    expect(definedInFiles).toEqual(COMPONENTS);
  });
});

/**
 * Los nombres de las entradas `patterns-*` (#1352). Las stories de patrones
 * declaran un `component` de relleno para satisfacer `Meta<typeof X>`, y
 * Storybook sacaba de ahí el `name`: 14 patrones se publicaban como `DBox` y
 * otros pisaban la entrada del componente que documentan.
 */
describe('nombres de los patrones', () => {
  const PATTERNS_DIR = path.join(ROOT, 'stories/patterns');

  function storyFiles(dir: string): string[] {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return storyFiles(full);
      return entry.name.endsWith('.stories.tsx') ? [full] : [];
    });
  }

  const files = storyFiles(PATTERNS_DIR).sort();
  const designSystemStory = path.join(ROOT, 'stories/components/DCollapse.stories.tsx');

  let names: Record<string, string | null>;

  beforeAll(() => {
    const targets = [...files, designSystemStory].map((file) => path.relative(ROOT, file));
    const script = `
      const { patternNameFromStory } = await import(${JSON.stringify(MANIFEST_DOCGEN)});
      const targets = ${JSON.stringify(targets)};
      process.stdout.write(JSON.stringify(Object.fromEntries(
        targets.map((file) => [file, patternNameFromStory(file) ?? null]),
      )));
    `;
    const run = spawnSync('node', ['--experimental-strip-types', '--no-warnings', '--input-type=module', '-e', script], {
      cwd: ROOT,
      encoding: 'utf8',
    });
    if (run.status !== 0) throw new Error(run.stderr);
    names = JSON.parse(run.stdout);
  });

  function patternNames() {
    return files.map((file) => names[path.relative(ROOT, file)]);
  }

  test('cada story de patterns resuelve un nombre desde el título de su meta', () => {
    const missing = files
      .map((file) => path.relative(ROOT, file))
      .filter((file) => !names[file]);

    expect(missing).toEqual([]);
    expect(files.length).toBeGreaterThan(0);
  });

  test('no hay dos patrones con el mismo nombre', () => {
    const resolved = patternNames();
    const duplicated = resolved.filter((name, index) => resolved.indexOf(name) !== index);

    expect(duplicated).toEqual([]);
  });

  test('ningún patrón se llama como un componente exportado', () => {
    const index = fs.readFileSync(path.join(ROOT, 'src/components/index.ts'), 'utf8');
    const exported = new Set([...index.matchAll(/as\s+(D[A-Za-z0-9]+)/g)].map(([, name]) => name));

    expect(exported.size).toBeGreaterThan(50);
    expect(patternNames().filter((name) => exported.has(name as string))).toEqual([]);
  });

  test('conserva el prefijo de grupo, que es lo que separa OTP de Mobile/OTP', () => {
    expect(names['stories/patterns/OtpPatterns.stories.tsx']).toBe('OTP');
    expect(names['stories/patterns/mobile/MobileOtpPatterns.stories.tsx']).toBe('Mobile/OTP');
  });

  test('no toca las stories que no son de patterns', () => {
    expect(names[path.relative(ROOT, designSystemStory)]).toBeNull();
  });
});
