/**
 * Tests de .storybook/manifest-docgen.ts.
 *
 * El manifest de Storybook (`components.json`) y `api.json` tienen que salir
 * con el mismo criterio. Se carga el módulo real con Node (strip-types), como
 * lo carga Storybook, y se le pasa un manifest sin props de babel, para que
 * todo lo que devuelve venga de scripts/component-docgen.mjs.
 */

import { spawnSync } from 'node:child_process';
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

beforeAll(() => {
  const manifests = {
    components: {
      components: Object.fromEntries(Object.entries(COMPONENTS).map(([name, file]) => [
        name,
        { reactDocgen: { displayName: name, definedInFile: path.join(ROOT, file), props: {} } },
      ])),
    },
  };
  const script = `
    const { enrichComponentsManifest } = await import(${JSON.stringify(MANIFEST_DOCGEN)});
    const result = enrichComponentsManifest(${JSON.stringify(manifests)});
    const out = Object.fromEntries(Object.entries(result.components.components)
      .map(([name, { reactDocgen }]) => [name, reactDocgen.props]));
    process.stdout.write(JSON.stringify(out));
  `;
  const run = spawnSync('node', ['--experimental-strip-types', '--no-warnings', '--input-type=module', '-e', script], {
    cwd: ROOT,
    encoding: 'utf8',
  });
  if (run.status !== 0) throw new Error(run.stderr);
  props = JSON.parse(run.stdout);
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
});
