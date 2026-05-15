# API Contract

The Dynamic UI library publishes a machine-readable description of its public
API as a JSON file (`api.json`) on every release. This document specifies the
stable URLs, the file structure, and the versioning policy that consumers can
rely on.

---

## Stable URLs

| Resource | URL |
|---|---|
| Latest `api.json` | `https://cdn.dynamicframework.dev/assets/latest/ui-react/api.json` |
| Versioned `api.json` | `https://cdn.dynamicframework.dev/assets/{semver}/ui-react/api.json` |
| Version manifest | `https://cdn.dynamicframework.dev/assets/manifest.json` |
| JSON Schema (v1) | `https://cdn.dynamicframework.dev/assets/schema/v1.json` |

`{tag}` is the full release tag, e.g. `v2.4.0`.

> **Stability guarantee**: once a versioned URL is published it is immutable.
> The `latest` alias always points to the most-recent non-prerelease version.

---

## `api.json` structure

```jsonc
{
  "$schema": "https://cdn.dynamicframework.dev/assets/schema/v1.json",
  "schemaVersion": "1.0.0",   // version of this JSON structure (not the package)
  "packageVersion": "2.4.0",  // npm package version
  "repository": "https://github.com/dynamic-framework/dynamic-ui",
  "generatedAt": "2025-01-01T00:00:00.000Z",
  "components": { ... },
  "hooks": { ... },
  "contexts": { ... }
}
```

### Root fields

| Field | Type | Description |
|---|---|---|
| `$schema` | `string` | URI of the JSON Schema that describes this file |
| `schemaVersion` | `string` (semver) | Version of the `api.json` structure itself |
| `packageVersion` | `string` (semver) | npm version of `@dynamic-framework/dynamic-ui` |
| `repository` | `string` (URL) | GitHub repository URL of the design system |
| `generatedAt` | `string` (ISO 8601) | Build timestamp |
| `components` | `object` | Component prop tables (keyed by component name) |
| `hooks` | `object` | Hook API tables (keyed by hook name) |
| `contexts` | `object` | Context API tables (keyed by context name) |

### `components[name]`

Each component entry is an array of prop descriptors:

```jsonc
{
  "DButton": [
    {
      "name": "text",
      "type": "string",
      "required": false,
      "defaultValue": "",
      "description": "Button label"
    }
  ]
}
```

### `hooks[name]` / `contexts[name]`

Hook and context entries share the same shape as component entries.

---

## `manifest.json` structure

The manifest lists every published release so that tooling can discover the
exact `api.json` URL for any version without hardcoding path patterns.

```jsonc
{
  "updatedAt": "2025-01-01T00:00:00.000Z",
  "latest": "v2.4.0",
  "versions": [
    {
      "tag": "v2.4.0",
      "packageVersion": "2.4.0",
      "apiUrl": "https://cdn.dynamicframework.dev/assets/2.4.0/ui-react/api.json",
      "publishedAt": "2025-01-01T00:00:00.000Z",
      "deprecated": false
    }
  ]
}
```

Versions are sorted newest-first (`versions[0]` is always the latest).

---

## Versioning policy

| Scenario | Effect |
|---|---|
| New component, hook or context | Minor bump — non-breaking |
| New root field added to `api.json` | Minor bump — non-breaking |
| Field removed or renamed | Major `schemaVersion` bump |
| `packageVersion` changed | Always reflected in `api.json` and manifest |

The `schemaVersion` field follows semantic versioning and is independent of
the npm package version. Consumers should validate responses against the
JSON Schema (`$schema` field) and check `schemaVersion` before relying on
specific fields.

---

## Generating `api.json` locally

```bash
npm run generate:registry
```

The files are written to `registry/`:

```
registry/
├── api.json
├── manifest.json        (requires RELEASE_TAG env var)
└── schema/
    └── v1.json
```

To run the scripts individually:

```bash
node scripts/generate-hooks.mjs
node scripts/generate-schema.mjs
RELEASE_TAG=v0.0.0-local node scripts/generate-manifest.mjs
```

---

## See also

- [CONTRIBUTING.md](CONTRIBUTING.md) — development workflow
- [`scripts/generate-api.mjs`](scripts/generate-api.mjs) — source of truth for `api.json`
- [`scripts/generate-schema.mjs`](scripts/generate-schema.mjs) — JSON Schema generator
- [`scripts/generate-manifest.mjs`](scripts/generate-manifest.mjs) — manifest generator
