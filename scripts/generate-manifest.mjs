/**
 * generate-manifest.mjs
 *
 * Generates (or updates) registry/manifest.json — an index of all deployed
 * api.json versions. Consumers (e.g., the MCP server) read this file to
 * discover the exact api.json URL for any given package version without
 * hardcoding path conventions.
 *
 * Usage:
 *   node scripts/generate-manifest.mjs [path-to-existing-manifest.json]
 *
 * The optional first argument should be the path to the manifest.json from
 * the previous release (fetched from the CDN in CI). If omitted or
 * if the file is absent/malformed, the manifest is initialised from scratch.
 *
 * Environment variables:
 *   RELEASE_TAG    — current release tag, e.g. "v2.4.0" (required)
 *   CDN_BASE_URL   — base URL for all api.json links
 *                    (default: "https://cdn.dynamicframework.dev/assets")
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const dirPath = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(dirPath, '..');
const OUTPUT_DIR = resolve(ROOT, 'registry');

if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

const { RELEASE_TAG, CDN_BASE_URL: cdnBaseRaw = 'https://cdn.dynamicframework.dev/assets' } = process.env;
const CDN_BASE_URL = cdnBaseRaw.replace(/\/$/, '');
if (!RELEASE_TAG) {
  process.stderr.write('RELEASE_TAG environment variable is required (e.g. "v2.4.0").\n');
  process.exit(1);
}

// --- Load existing manifest (if provided) ---
const { argv } = process;
const existingManifestPath = argv[2];
let existingManifest = { versions: {} };

if (existingManifestPath && existsSync(existingManifestPath)) {
  try {
    const raw = readFileSync(existingManifestPath, 'utf8');
    const parsed = JSON.parse(raw);
    if (parsed?.versions && typeof parsed.versions === 'object' && !Array.isArray(parsed.versions)) {
      existingManifest = parsed;
      process.stdout.write(`  Loaded existing manifest with ${Object.keys(parsed.versions).length} version(s)\n`);
    }
  } catch {
    process.stdout.write('  Existing manifest malformed — starting fresh\n');
  }
}

// --- Build new version entry ---
// Strip leading "v" from tag to get the semver string (e.g. "v2.4.0" → "2.4.0")
const semver = RELEASE_TAG.replace(/^v/, '');

// Detect prereleases: any semver with a hyphen suffix (e.g. "2.4.0-rc.1", "2.5.0-beta.2")
const isPrerelease = semver.includes('-');

const newEntry = {
  'ui-react': `${CDN_BASE_URL}/${semver}/ui-react/api.json`,
  publishedAt: existingManifest.versions[semver]?.publishedAt ?? new Date().toISOString(),
  deprecated: existingManifest.versions[semver]?.deprecated ?? false,
  ...(isPrerelease ? { prerelease: true } : {}),
};

// Prepend the new version, skipping any existing entry with the same semver key
const { [semver]: _replaced, ...rest } = existingManifest.versions;
const versions = { [semver]: newEntry, ...rest };

// Advance `latest` only for stable releases (never for prereleases)
const currentLatest = existingManifest.latest ?? null;
if (isPrerelease && !currentLatest) {
  process.stderr.write(
    'ERROR: Cannot publish a prerelease as the first version — no stable "latest" exists in the manifest.\n'
    + 'Publish a stable release first.\n',
  );
  process.exit(1);
}
const latest = isPrerelease ? currentLatest : semver;

const manifest = {
  updatedAt: new Date().toISOString(),
  latest,
  versions,
};

const OUTPUT_PATH = resolve(OUTPUT_DIR, 'manifest.json');
writeFileSync(OUTPUT_PATH, JSON.stringify(manifest, null, 2));
process.stdout.write(
  `Generated registry/manifest.json (${Object.keys(versions).length} version(s), latest: ${latest ?? 'none'})\n`,
);
