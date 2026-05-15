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
 * the previous release (fetched from the docs branch in CI). If omitted or
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

const { RELEASE_TAG, CDN_BASE_URL = 'https://cdn.dynamicframework.dev/assets' } = process.env;
if (!RELEASE_TAG) {
  process.stderr.write('RELEASE_TAG environment variable is required (e.g. "v2.4.0").\n');
  process.exit(1);
}

// --- Load existing manifest (if provided) ---
const { argv } = process;
const existingManifestPath = argv[2];
let existingManifest = { versions: [] };

if (existingManifestPath && existsSync(existingManifestPath)) {
  try {
    const raw = readFileSync(existingManifestPath, 'utf8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed?.versions)) {
      existingManifest = parsed;
      process.stdout.write(`  Loaded existing manifest with ${parsed.versions.length} version(s)\n`);
    }
  } catch {
    process.stdout.write('  Existing manifest malformed — starting fresh\n');
  }
}

// --- Build new version entry ---
// Strip leading "v" from tag to get the semver string (e.g. "v2.4.0" → "2.4.0")
const semver = RELEASE_TAG.replace(/^v/, '');

const newEntry = {
  tag: RELEASE_TAG,
  packageVersion: semver,
  apiUrl: `${CDN_BASE_URL}/${semver}/ui-react/api.json`,
  publishedAt: new Date().toISOString(),
  deprecated: false,
};

// Deduplicate: replace entry with same tag if it already exists, otherwise prepend
const filtered = existingManifest.versions.filter((v) => v.tag !== RELEASE_TAG);
const versions = [newEntry, ...filtered];

const manifest = {
  updatedAt: new Date().toISOString(),
  latest: RELEASE_TAG,
  versions,
};

const OUTPUT_PATH = resolve(OUTPUT_DIR, 'manifest.json');
writeFileSync(OUTPUT_PATH, JSON.stringify(manifest, null, 2));
process.stdout.write(
  `Generated registry/manifest.json (${versions.length} version(s), latest: ${RELEASE_TAG})\n`,
);
