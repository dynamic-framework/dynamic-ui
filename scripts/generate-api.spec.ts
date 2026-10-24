/**
 * Tests de generate-api.
 *
 * El script se ejercita por CLI y se lee el registry/api.json que escribe,
 * el mismo que genera `npm run build`.
 */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(__dirname, '..');
const GENERATE = path.join(ROOT, 'scripts/generate-api.mjs');
const OUTPUT = path.join(ROOT, 'registry/api.json');

// El generador recorre todos los componentes con react-docgen-typescript.
jest.setTimeout(180000);

type Param = { name: string; required: boolean };

type Api = {
  contexts: Record<string, { props: Record<string, { description: string; required: boolean }> }>;
  hooks: Record<string, {
    signature: string;
    returns: Record<string, { parameters?: Param[] }>;
    returnType: string;
    types: Record<string, unknown>;
  }>;
};

function callParams(hook: string, fn: string) {
  return (api.hooks[hook].returns[fn].parameters ?? [])
    .map(({ name, required }) => ({ name, required }));
}

let api: Api;

beforeAll(() => {
  const generated = spawnSync('node', [GENERATE], { encoding: 'utf8' });
  if (generated.status !== 0) throw new Error(generated.stderr);
  api = JSON.parse(fs.readFileSync(OUTPUT, 'utf8'));
});

describe('generate-api', () => {
  test('breakpoints de DContextProvider aparece deprecada', () => {
    const { breakpoints } = api.contexts.DContextProvider.props;
    expect(breakpoints.required).toBe(false);
    expect(breakpoints.description).toBe(
      '@deprecated No effect since 2.11.0: breakpoints are read from the --bs-breakpoint-* custom properties',
    );
  });

  test('las demás props de DContextProvider no se marcan deprecadas', () => {
    const { breakpoints, ...others } = api.contexts.DContextProvider.props;
    Object.values(others).forEach(({ description }) => {
      expect(description).not.toContain('@deprecated');
    });
  });

  test('un hook que no devuelve un objeto tiene returns vacío y returnType', () => {
    expect(api.hooks.useMediaBreakpointUpMd).toMatchObject({
      signature: 'useMediaBreakpointUpMd(useListener?: boolean) => boolean',
      returns: {},
      returnType: 'boolean',
    });
  });

  test('los parámetros opcionales de las funciones devueltas no son obligatorios', () => {
    expect(callParams('useScreenshotDownload', 'download')).toEqual([{ name: 'fileName', required: false }]);
    expect(callParams('useScreenshotWebShare', 'share')).toEqual([{ name: 'fileName', required: false }]);
    expect(callParams('useScreenshot', 'takeBlob')).toEqual([{ name: 'type', required: false }]);
    expect(callParams('useDToast', 'toast')).toEqual([
      { name: 'data', required: true },
      { name: 'toastProps', required: false },
    ]);
  });
});
