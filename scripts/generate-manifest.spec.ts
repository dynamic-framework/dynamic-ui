/**
 * Tests de generate-manifest.
 *
 * El script escribe en `<raíz>/registry/manifest.json`, con la raíz resuelta
 * desde su propia ubicación; por eso se copia a un directorio temporal y se
 * ejercita por CLI, sin tocar el registry/ del repo.
 */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const SOURCE = path.resolve(__dirname, 'generate-manifest.mjs');

type Entry = { 'ui-react': string; publishedAt: string; deprecated: boolean; prerelease?: boolean };
type Manifest = { updatedAt: string; latest: string | null; versions: Record<string, Entry> };

let workdir: string;

beforeEach(() => {
  workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'dynamic-manifest-'));
  fs.mkdirSync(path.join(workdir, 'scripts'));
  fs.copyFileSync(SOURCE, path.join(workdir, 'scripts/generate-manifest.mjs'));
});

afterEach(() => {
  fs.rmSync(workdir, { recursive: true, force: true });
});

function entry(version: string, publishedAt: string, deprecated = false): Entry {
  return {
    'ui-react': `https://cdn.dynamicframework.dev/assets/${version}/ui-react/api.json`,
    publishedAt,
    deprecated,
  };
}

// Índice anterior con 2.12.0 como latest y 2.11.0 marcada deprecated.
const PREVIOUS: Manifest = {
  updatedAt: '2026-10-21T23:10:00.000Z',
  latest: '2.12.0',
  versions: {
    '2.12.0': entry('2.12.0', '2026-10-21T23:05:06Z'),
    '2.11.0': entry('2.11.0', '2026-10-06T19:30:11Z', true),
    '2.10.0': entry('2.10.0', '2026-09-10T20:09:21Z'),
  },
};

function generate(tag: string, previous: Manifest = PREVIOUS): Manifest {
  const prevPath = path.join(workdir, 'manifest-prev.json');
  fs.writeFileSync(prevPath, JSON.stringify(previous));
  const spawned = spawnSync('node', [path.join(workdir, 'scripts/generate-manifest.mjs'), prevPath], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, RELEASE_TAG: tag, RELEASE_PUBLISHED_AT: '2026-10-27T12:00:00Z' },
  });
  expect(spawned.stderr).toBe('');
  expect(spawned.status).toBe(0);
  return JSON.parse(fs.readFileSync(path.join(workdir, 'registry/manifest.json'), 'utf8'));
}

describe('generate-manifest', () => {
  test('un parche de una versión menor no hace retroceder latest', () => {
    const manifest = generate('v2.11.1');
    expect(manifest.latest).toBe('2.12.0');
    expect(manifest.versions['2.11.1']).toEqual(entry('2.11.1', '2026-10-27T12:00:00Z'));
  });

  test('una versión mayor avanza latest', () => {
    expect(generate('v2.12.1').latest).toBe('2.12.1');
    expect(generate('v2.13.0').latest).toBe('2.13.0');
    expect(generate('v3.0.0').latest).toBe('3.0.0');
  });

  test('compara por semver, no por texto', () => {
    const previous = { ...PREVIOUS, latest: '2.9.0', versions: { '2.9.0': entry('2.9.0', '2026-09-07T18:30:46Z') } };
    expect(generate('v2.10.0', previous).latest).toBe('2.10.0');
  });

  test('los metadatos de build no hacen retroceder latest', () => {
    const previous = { ...PREVIOUS, latest: '2.12.2', versions: { '2.12.2': entry('2.12.2', '2026-10-27T00:00:00Z') } };
    expect(generate('v2.12.1+build.1', previous).latest).toBe('2.12.2');
    expect(generate('v2.12.3+build.1', previous).latest).toBe('2.12.3+build.1');
  });

  test('un prerelease no mueve latest', () => {
    const manifest = generate('v2.13.0-rc.1');
    expect(manifest.latest).toBe('2.12.0');
    expect(manifest.versions['2.13.0-rc.1'].prerelease).toBe(true);
  });

  test('conserva publishedAt y deprecated de las versiones existentes', () => {
    const manifest = generate('v2.12.1');
    expect(Object.keys(manifest.versions)).toEqual(['2.12.1', '2.12.0', '2.11.0', '2.10.0']);
    Object.entries(PREVIOUS.versions).forEach(([version, previous]) => {
      expect(manifest.versions[version]).toEqual(previous);
    });

    // Volver a publicar una versión ya indexada no pisa sus datos.
    const rerun = generate('v2.11.0');
    expect(rerun.versions['2.11.0']).toEqual(PREVIOUS.versions['2.11.0']);
    expect(rerun.latest).toBe('2.12.0');
  });
});
