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

`{semver}` is the bare semver string (no leading `v`), e.g. `2.4.0`.

> **Stability guarantee**: once a versioned URL is published it is immutable.
> The `latest` alias always points to the most-recent non-prerelease version.

---

## `api.json` structure

```jsonc
{
  "$schema": "https://cdn.dynamicframework.dev/assets/schema/v1.json",
  "schemaVersion": "1.0.0",   // version of this JSON structure (not the package)
  "packageVersion": "2.4.0",  // npm package version
  "repository": "https://github.com/dynamic-framework/dynamic-ui/releases/tag/v2.4.0",
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
| `packageVersion` | `string` (semver) | npm version of `@dynamic-framework/ui-react` |
| `repository` | `string \| null` | GitHub release tag URL when published via CI (`releases/tag/vX.Y.Z`); repo root URL when generated locally; `null` if no `repository` field in `package.json` |
| `generatedAt` | `string` (ISO 8601) | Build timestamp |
| `components` | `object` | Component prop tables (keyed by component name) |
| `hooks` | `object` | Hook API tables (keyed by hook name) |
| `contexts` | `object` | Context API tables (keyed by context name) |

### `components[name]`

Each component entry is an object with the following shape:

```jsonc
{
  "DButton": {
    "description": "Primary action button.",
    "sourcePath": "src/components/DButton/DButton.tsx",
    "props": {
      "text": {
        "type": "string | undefined",
        "required": false,
        "defaultValue": null,
        "description": "Button label"
      }
    }
  }
}
```

### `hooks[name]`

Each hook entry has this shape:

```jsonc
{
  "useDToast": {
    "name": "useDToast",
    "source": "src/components/DToastContainer/useDToast.tsx",
    "kind": "hook",
    "description": "Hook that provides a toast dispatcher.",
    "signature": "useDToast() => { toast }",
    "requires": ["DContextProvider", "DToastContainer"],
    "parameters": [],
    "returns": {
      "toast": {
        "type": "function",
        "description": "Dispatches a toast notification.",
        "parameters": [{ "name": "data", "type": "ToastData", "required": true, "description": "" }],
        "returns": { "type": "string" }
      }
    },
    "types": {
      "ToastData": { "description": "...", "type": "object", "fields": { ... } }
    }
  }
}
```

### `contexts[name]`

Context entries describe React context providers. Unlike hooks, they use `props` instead
of `parameters`/`returns`:

```jsonc
{
  "DContextProvider": {
    "name": "DContextProvider",
    "source": "src/contexts/DContext.tsx",
    "kind": "component",
    "description": "Root context provider for Dynamic UI.",
    "signature": "DContextProvider<T>({ language?, currency?, ... }) => JSX.Element",
    "props": {
      "language": { "type": "string", "required": false, "description": "" },
      "currency": { "type": "string", "required": false, "description": "" }
    },
    "requires": [],
    "types": {}
  }
}
```

| Field | Required | Description |
|---|---|---|
| `name` | ✓ | Entry name (matches the object key) |
| `source` | ✓ | Relative path to the source file |
| `kind` | ✓ | `"context"` or `"component"` |
| `description` | ✓ | JSDoc description |
| `signature` | ✓ | Full TypeScript signature |
| `props` | ✓ | Props accepted by the provider component (same shape as `components[name].props`) |
| `requires` | — | Names of components/hooks this context depends on |
| `returns` | — | Present if the context hook returns values |
| `types` | — | Named TypeScript types referenced by this entry |

---

## `manifest.json` structure

The manifest lists every published release so that tooling can discover the
exact `api.json` URL for any version without hardcoding path patterns.

```jsonc
{
  "updatedAt": "2025-01-01T00:00:00.000Z",
  "latest": "2.4.0",
  "versions": {
    "2.4.0": {
      "ui-react": "https://cdn.dynamicframework.dev/assets/2.4.0/ui-react/api.json",
      "publishedAt": "2025-01-01T00:00:00.000Z",
      "deprecated": false
    },
    "2.4.0-rc.1": {
      "ui-react": "https://cdn.dynamicframework.dev/assets/2.4.0-rc.1/ui-react/api.json",
      "publishedAt": "2024-12-15T00:00:00.000Z",
      "deprecated": false,
      "prerelease": true
    },
    "2.3.1": {
      "ui-react": "https://cdn.dynamicframework.dev/assets/2.3.1/ui-react/api.json",
      "publishedAt": "2024-12-01T00:00:00.000Z",
      "deprecated": false
    }
  }
}
```

Versions are stored as an unordered object keyed by semver. Do not rely on
key insertion order — it is not guaranteed to be preserved across all
JSON parsers and languages. To find the current stable release, read the
`latest` field. To sort versions chronologically, use `publishedAt` or sort
the keys with a semver comparator.
Prerelease versions (tags containing `-`) are included in `versions` but do **not** advance `latest`
and carry a `"prerelease": true` flag.

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

This writes `registry/api.json` and `registry/schema/v1.json`. The manifest is
generated separately because it requires a `RELEASE_TAG` and fetches the
existing manifest from the CDN to preserve prior version history:

```
registry/
├── api.json
├── schema/
│   └── v1.json
└── manifest.json   (generated separately — see below)
```

To run the scripts individually:

```bash
node scripts/generate-api.mjs
node scripts/generate-schema.mjs
RELEASE_TAG=v0.0.0 node scripts/generate-manifest.mjs
```

> **Note:** Use a stable tag (no `-` suffix) for local testing.
> `generate-manifest.mjs` will exit with an error if a prerelease tag is used
> and no existing manifest with a stable `latest` is provided.

---

## See also

- [CONTRIBUTING.md](CONTRIBUTING.md) — development workflow
- [`scripts/generate-api.mjs`](scripts/generate-api.mjs) — source of truth for `api.json`
- [`scripts/generate-schema.mjs`](scripts/generate-schema.mjs) — JSON Schema generator
- [`scripts/generate-manifest.mjs`](scripts/generate-manifest.mjs) — manifest generator
