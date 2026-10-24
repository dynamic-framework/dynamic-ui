/**
 * Tests de validate-registry.
 *
 * El script se ejercita por CLI, como check-docs-manifest. El fixture
 * `develop-api.json` es el api.json de develop antes de #1290, reducido a sus
 * 3 hooks (sin componentes ni tipos): cumple el schema, pero le faltan los
 * demás exports `use*` del índice, así que el validador tiene que rechazarlo.
 */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const ROOT = path.resolve(__dirname, '..');
const VALIDATE = path.join(ROOT, 'scripts/validate-registry.mjs');
const FIXTURE = path.join(ROOT, 'scripts/fixtures/validate-registry/develop-api.json');
// api.json de develop antes de #1282, #1283 y #1281, con 8 componentes y los
// 25 hooks (sin types).
const FIXTURE_B = path.join(ROOT, 'scripts/fixtures/validate-registry/develop-b-api.json');

// El validador arma un programa de TypeScript sobre src/index.ts.
jest.setTimeout(120000);

let workdir: string;

beforeAll(() => {
  workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'dynamic-registry-'));
  // registry/ no se versiona: el schema se genera antes de validar.
  spawnSync('node', [path.join(ROOT, 'scripts/generate-schema.mjs')], { stdio: 'ignore' });
});

afterAll(() => {
  fs.rmSync(workdir, { recursive: true, force: true });
});

type Run = { status: number; stdout: string; stderr: string };

function run(file: string): Run {
  const spawned = spawnSync('node', [VALIDATE, file], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  return { status: spawned.status ?? -1, stdout: spawned.stdout, stderr: spawned.stderr };
}

function missingHooks(stderr: string): string[] {
  return [...stderr.matchAll(/^ {2}- (use\w+)$/gm)].map(([, name]) => name);
}

function stubHook(name: string) {
  return {
    name,
    source: 'src/index.ts',
    kind: 'hook',
    description: '',
    requires: [],
    signature: `${name}() => void`,
    parameters: [],
    returns: {},
    returnType: 'void',
    types: {},
  };
}

describe('validate-registry', () => {
  test('el api.json de develop falla por los hooks sin entrada', () => {
    const result = run(FIXTURE);
    expect(result.status).toBe(1);
    expect(result.stderr).not.toContain('no cumple el schema');
    expect(result.stderr).toMatch(/^\d+ hooks sin entrada en hooks/);

    const missing = missingHooks(result.stderr);
    expect(missing).toEqual(expect.arrayContaining([
      'useMediaBreakpointUpXs',
      'useOtp',
      'useErrorBoundary',
      'useTabContext',
    ]));
    expect(missing).not.toContain('useDToast');
  });

  test('pasa cuando todos los exports use* tienen entrada', () => {
    const api = JSON.parse(fs.readFileSync(FIXTURE, 'utf8'));
    missingHooks(run(FIXTURE).stderr).forEach((name) => {
      api.hooks[name] = stubHook(name);
    });
    const file = path.join(workdir, 'api.json');
    fs.writeFileSync(file, JSON.stringify(api));

    const result = run(file);
    expect(result.stderr).toBe('');
    expect(result.status).toBe(0);
  });

  test('sigue validando el schema', () => {
    const api = JSON.parse(fs.readFileSync(FIXTURE, 'utf8'));
    api.hooks.useDToast.returnType = 42;
    const file = path.join(workdir, 'api-invalid.json');
    fs.writeFileSync(file, JSON.stringify(api));

    const result = run(file);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('no cumple el schema');
    expect(result.stderr).toContain('/hooks/useDToast/returnType');
  });

  test('el api.json de develop falla por los defaults que no llegan a defaultValue (#1282)', () => {
    const result = run(FIXTURE_B);
    expect(result.status).toBe(1);
    expect(result.stderr).not.toContain('no cumple el schema');
    expect(result.stderr).not.toContain('hooks sin entrada');
    expect(result.stderr).toContain('defaults declarados en el código que no llegan a defaultValue');
    [
      'DButton.variant: "solid" en el código, null en api.json',
      'DBadge.color: "primary" en el código, null en api.json',
      'DSkeleton.ariaLabel: "Loading..." en el código, null en api.json',
      'DInputRange.filledValue: true en el código, null en api.json',
    ].forEach((line) => expect(result.stderr).toContain(line));
  });
});
