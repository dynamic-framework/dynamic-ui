/**
 * Tests de check-css-vars.
 *
 * El script se ejercita por CLI, como check-docs-manifest, para validar
 * también el código de salida y el mensaje.
 *
 * El fixture `pre-1117.css` es el CSS que se compilaba antes de #1117
 * (bc491ab5e^), con las dos erratas reales: `--bs-bs-gray-400` en .form-text y
 * `--bs---bs-ref-spacer-4` en el carrusel. Si el script lo aceptara, el check
 * no serviría de nada. `post-1117.css` es el mismo recorte del CSS de hoy.
 */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const ROOT = path.resolve(__dirname, '..');
const CHECK = path.join(ROOT, 'scripts/check-css-vars.mjs');
const FIXTURES = path.join(ROOT, 'scripts/fixtures/check-css-vars');
const PRE = path.join(FIXTURES, 'pre-1117.css');
const POST = path.join(FIXTURES, 'post-1117.css');

let workdir: string;

beforeAll(() => {
  workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'dynamic-css-vars-'));
});

afterAll(() => {
  fs.rmSync(workdir, { recursive: true, force: true });
});

type Run = { status: number; stdout: string; stderr: string };

function run(args: string[]): Run {
  const spawned = spawnSync('node', [CHECK, ...args], {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  return { status: spawned.status ?? -1, stdout: spawned.stdout, stderr: spawned.stderr };
}

function write(name: string, content: string): string {
  const file = path.join(workdir, name);
  fs.writeFileSync(file, content, 'utf8');
  return file;
}

describe('check-css-vars', () => {
  it('falla con el CSS anterior a #1117 y nombra las dos erratas', () => {
    const { status, stderr } = run([PRE]);

    expect(status).toBe(1);
    expect(stderr).toContain('--bs-bs-gray-400');
    expect(stderr).toContain('--bs---bs-ref-spacer-4');
    expect(stderr).toContain('2 custom propertie(s)');
  });

  it('propone el nombre bien formado para cada errata', () => {
    const { stderr } = run([PRE]);

    expect(stderr).toContain('[prefijo-duplicado]  --bs-bs-gray-400: lleva el prefijo --bs- dos veces; probablemente se quería --bs-gray-400');
    expect(stderr).toContain('[segmento-vacio]  --bs---bs-ref-spacer-4: lleva un segmento vacío; probablemente se quería --bs-ref-spacer-4');
  });

  it('pasa con el CSS de hoy', () => {
    const { status, stdout } = run([POST]);

    expect(status).toBe(0);
    expect(stdout).toContain('sin custom properties mal formadas');
  });

  it('no confunde una clase BEM con doble guion con una custom property', () => {
    const file = write('bem.css', '.react-datepicker__header--time--only { color: red; }\n');

    expect(run([file]).status).toBe(0);
  });

  it('detecta el nombre mal formado tanto en la declaración como en var()', () => {
    const declaration = write('decl.css', ':root { --bs-bs-gray-400: #ccc; }\n');
    const reference = write('ref.css', '.a { color: var(--bs-bs-gray-400); }\n');

    expect(run([declaration]).status).toBe(1);
    expect(run([reference]).status).toBe(1);
  });

  it('detecta el nombre mal formado aunque var() tenga respaldo', () => {
    // Con respaldo la regla no se rompe, pero usa un valor que no es el que
    // se quería: la errata sigue siendo una errata.
    const file = write('fallback.css', '.a { margin-top: var(--bs---bs-ref-spacer-4, 0); }\n');

    expect(run([file]).status).toBe(1);
  });

  it('detecta el nombre mal formado en el CSS comprimido, sin saltos de línea', () => {
    const file = write('min.css', '.a{color:var(--bs-bs-gray-400)}.b{margin-top:var(--bs---bs-ref-spacer-4)}');
    const { status, stderr } = run([file]);

    expect(status).toBe(1);
    expect(stderr).toContain('--bs-bs-gray-400');
    expect(stderr).toContain('--bs---bs-ref-spacer-4');
  });

  it('cuenta una vez cada nombre, no cada aparición', () => {
    const file = write('repeated.css', [
      ':root { --bs-bs-gray-400: #ccc; }',
      '.a { color: var(--bs-bs-gray-400); }',
      '.b { color: var(--bs-bs-gray-400); }',
    ].join('\n'));

    expect(run([file]).stderr).toContain('1 custom propertie(s)');
  });

  it('falla si el CSS no está compilado', () => {
    const { status, stderr } = run([path.join(workdir, 'no-existe.css')]);

    expect(status).toBe(1);
    expect(stderr).toContain('npm run build:scss');
  });
});
