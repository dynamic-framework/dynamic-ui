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

const PATTERNS = {
  'patterns-otp': 'stories/patterns/OtpPatterns.stories.tsx',
  'patterns-mobile-otp': 'stories/patterns/mobile/MobileOtpPatterns.stories.tsx',
};
const OTHER_PATTERN_FILES = ['stories/patterns', 'stories/patterns/mobile']
  .flatMap((dir) => fs.readdirSync(path.join(ROOT, dir))
    .filter((file) => file.endsWith('.stories.tsx'))
    .map((file) => `${dir}/${file}`))
  .filter((file) => !Object.values(PATTERNS).includes(file));
const ALL_PATTERNS = {
  ...PATTERNS,
  ...Object.fromEntries(OTHER_PATTERN_FILES.map((file, index) => [`patterns-fixture-${index}`, file])),
};

let props: Record<string, Record<string, DocgenProp>>;
let definedInFiles: Record<string, string>;
let names: Record<string, string>;

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
      components: {
        ...Object.fromEntries(Object.entries(COMPONENTS).map(([name, file]) => [
          name,
          {
            name,
            reactDocgen: {
              displayName: name,
              definedInFile: path.join(ROOT, file),
              props: BABEL_PROPS[name] ?? {},
            },
          },
        ])),
        ...Object.fromEntries(Object.entries(ALL_PATTERNS).map(([id, file]) => [
          id,
          { id, name: 'DBox', path: `./${file}` },
        ])),
      },
    },
  };
  const script = `
    const { enrichComponentsManifest } = await import(${JSON.stringify(MANIFEST_DOCGEN)});
    const result = enrichComponentsManifest(${JSON.stringify(manifests)});
    const entries = Object.entries(result.components.components);
    process.stdout.write(JSON.stringify({
      props: Object.fromEntries(entries.map(([name, { reactDocgen }]) => [name, reactDocgen?.props])),
      files: Object.fromEntries(entries.map(([name, { reactDocgen }]) => [name, reactDocgen?.definedInFile])),
      names: Object.fromEntries(entries.map(([id, entry]) => [id, entry.name])),
    }));
  `;
  const run = spawnSync('node', ['--experimental-strip-types', '--no-warnings', '--input-type=module', '-e', script], {
    cwd: ROOT,
    encoding: 'utf8',
  });
  if (run.status !== 0) throw new Error(run.stderr);
  ({ props, files: definedInFiles, names } = JSON.parse(run.stdout));
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

  test('nombra los patrones por su título y conserva los nombres de componentes', () => {
    expect(names['patterns-otp']).toBe('Patterns/OTP');
    expect(names['patterns-mobile-otp']).toBe('Patterns/Mobile/OTP');
    expect(names.DButton).toBe('DButton');
  });

  test('los 21 patrones tienen nombres únicos que no son componentes exportados', () => {
    const patternNames = Object.keys(ALL_PATTERNS).map((id) => names[id]);
    expect(patternNames).toHaveLength(21);
    patternNames.forEach((name) => expect(name).toMatch(/^Patterns\//));
    expect(new Set(patternNames).size).toBe(patternNames.length);
    const exportedComponents = new Set(
      [...fs.readFileSync(path.join(ROOT, 'src/components/index.ts'), 'utf8').matchAll(/\b(?:default as|^\s*)(D[A-Z]\w*)\b/gm)]
        .map((match) => match[1]),
    );
    patternNames.forEach((name) => expect(exportedComponents.has(name)).toBe(false));
  });
});
