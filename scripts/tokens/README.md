# `token-overrides.json` — producer/maintenance docs

Maintenance documentation for the **token-overrides** build artifact: how it is
generated, why it is shaped the way it is, and how to change it safely.

This is **producer** documentation, for whoever touches
`scripts/generate-token-overrides.mjs`, reviews its PRs, or needs to understand
the artifact. It is **not** a guide for recreating a brand — that lives at
[docs.modyo.com theming](https://docs.modyo.com/en/dynamic/customization/theming.html).
Do not duplicate the rebrand narrative here; link to it.

---

## 1.1 What it is and why it exists

`registry/token-overrides.json` is a machine-readable descriptor of Dynamic UI's
**CSS custom-property override surface**. It lets agents/AI recreate a client's
brand by overriding custom properties **without parsing the ~1.27 MB compiled
CSS**: it classifies what to override, what propagates on its own, what is baked,
and what gaps exist.

It is deliberately **not**:

- **Not DTCG / not the 3.0 contract.** That is a different, in-progress approach
  (open PRs #1104 / #1107). This artifact is additive and independent; it does
  not share names with those PRs (`generate-tokens.mjs` / `registry/tokens.json`
  / etc.).
- **Not a change to distribution.** No `src/style/**` is touched; the shipped CSS
  is byte-identical. This is a new build artifact only.
- **Not a human theming guide.** The "how do I recreate a brand" narrative
  (the L1/L2/L3 mental model for designers, step-by-step rebrand examples) lives
  at [docs.modyo.com theming](https://docs.modyo.com/en/dynamic/customization/theming.html).

---

## 1.2 How it is generated

```bash
npm run generate:token-overrides   # writes registry/token-overrides.json + the schema
npm run validate:token-overrides   # validates the JSON against the schema
```

`generate:registry` now chains all four registry generators in order:
`generate-api.mjs` → `generate-schema.mjs` → `generate-token-overrides.mjs` →
`generate-token-overrides-schema.mjs`.

### Two dart-sass passes (and why two)

The generator does **not** parse the compiled distribution CSS. It compiles two
small, scoped harnesses with the **dart-sass in `node_modules/.bin`** (never the
`sass` on `PATH`, which is the Ruby gem with an incompatible CPU target), using
load paths `./` and `src/style/`:

| Pass | Harness | Imports | Used for |
|---|---|---|---|
| **defs** | `scripts/tokens/_defs-harness.scss` | abstracts + root only (no components) | token **values** and **classification** |
| **full** | `scripts/tokens/_full-harness.scss` | full chain (incl. components) | scanning `var(--bs-*)` **references** for slot detection |

- **defs** compiles clean (~1262 lines). Because the component layer is excluded,
  the carousel typo never reaches this output, so values/classification are clean.
- **full** is used **only** to extract the set of referenced custom properties.
  It does include the carousel typo — that is expected and filtered out
  (see [1.4](#14-slot-algorithm) / [1.5](#15-known-issues--css-typos-in-source)).

---

## 1.3 JSON structure (high level)

The **authoritative** shape is the JSON Schema at
`registry/schema/token-overrides.v1.json`. Do not re-describe it field by field
here — read the schema. Orientation only:

**Dual axis per token:**

- `class` — runtime override behavior: `override-base` / `override-leaf` /
  `follows` / `not-overridable`.
- `layer` — consumer vocabulary: `palette` / `role` / `semantic` / `component`.

**Top-level sections:** `color.ramps` (16 ramps: 6 role + 9 family + 1 neutral),
`color.hueGroups` (4), `color.rebrandScope` (default `role`, plus the `warning`
about the half-rebrand), `typography`, `spacing` (31 levels), `radius` (7),
`shadow` (partial coverage), `slots`, `gaps`, `componentTokens` (deferred).

All counts here are **illustrative** — the generator is data-driven and the
emitted artifact is the source of truth.

---

## 1.4 Slot algorithm

This documents the **implemented** algorithm, which corrects the naïve version
from the original spec.

A **slot** is a custom property that Dynamic **references but never defines in any
selector** — something a consuming theme is expected to fill.

- `R` = all `var(--bs-*)` references in the **full** harness output.
- `D` = custom properties defined **anywhere** in the full harness output — in
  **any selector**, not just `:root`.
- Slots = `R − D − denylist`.

> **The correction:** the original spec defined `D` as only the `:root` block from
> the defs pass. That yields ~699 candidates, almost all of which are
> **component-local tokens** (`--bs-btn-*`, `--bs-card-*`, …) that *are* defined —
> inside their own component selector. Those are exactly the **Layer 3** tokens
> that 2.6 defers (`componentTokens.status: "deferred-2.6"`), not slots. Defining
> `D` as "defined anywhere" drops them and leaves the genuinely unfilled
> references.

Current result: **60 slots**, split into:

- `suspected: false` (**confident**) — a regular, recognizable pattern
  (family-hue semantic followers: `--bs-{hue}-bg-subtle` / `-text-emphasis` /
  `-border-subtle`, which Dynamic defines only for the 8 theme colors).
- `suspected: true` — not classifiable by rule; emitted **with its source
  `referencedBy`** for human inspection.

> A `suspected` entry may be a legitimate slot **or** a typo (see
> [1.5](#15-known-issues--css-typos-in-source)). Consumers must **not** treat
> `suspected` entries as certainties.

---

## 1.5 Known issues — CSS typos in source

The slot scan surfaced **three** real typos in Dynamic's own SCSS. These are
**CSS bugs, not slots.** 2.6 **routes around** them (denylist / suspected) but
**does not fix** them.

| Typo | Location | Handling in 2.6 | Rule-detectable |
|---|---|---|---|
| `--bs---bs-ref-spacer-4` | `src/style/components/_d-carousel.scss:53` (double prefix) | `slots.denylist` | yes (leading dash) |
| `--bs-bs-gray-400` | `src/style/abstracts/variables/_forms.scss:3` (double `bs-`) | `slots.denylist` | yes (double `bs-`) |
| `--bs-subtle-primary` | `src/style/abstracts/variables/_list-group.scss:17` (transposition; likely meant `--bs-primary-*-subtle`) | slot `suspected` | no |

The denylist is auto-detected by regex (leading dash or double `bs-` after the
`--bs-` prefix), so it catches the first two. The third is a transposition that no
rule can prove is a typo, so it appears as a `suspected` slot pointing at its
source line.

**Recommendation:** fix these in a **separate, trivial PR** (one line each, under
`src/style/**`), independent of 2.6. Once fixed, `--bs-subtle-primary` stops
appearing as a suspected slot and the other two drop out of the denylist. Until
then, the denylist keeps them out of the catalog.

---

## 1.6 Versioning

- **`dynamicUi`** = the library version, **read live from `package.json`**
  (data-driven, never hardcoded). Today `2.5.2`; it becomes `2.6.0` when
  release-please bumps the version.
- **Schema versioning (values vs. shape):** a rebrand changes *values* → it does
  **not** bump the schema (`token-overrides.v1.json` stays valid). Only bump to
  `token-overrides.v2.json` when the document **shape** changes (add/remove/retype
  fields in a breaking way). Additive fields do not break consumers.

---

## 1.7 Publication

`registry/` is gitignored — the JSON is **regenerated in CI before the `aws s3 cp`
steps**, never committed to git. The release job runs generate → validate → upload.

CDN paths:

- Versioned: `assets/{semver}/ui-react/tokens/token-overrides.json`
- Latest (stable releases only): `assets/latest/ui-react/tokens/token-overrides.json`
- Schema: `assets/schema/token-overrides.v1.json`

The source of truth for the publish flow is
[`.github/workflows/cdn.yml`](../../.github/workflows/cdn.yml) (trigger:
`release: published`). Read it there; it is not duplicated here.

---

## 1.8 How to change the artifact (short runbook)

| Change | Steps |
|---|---|
| Change a value / brand default | Regenerate. No schema change. |
| Add an additive field | Edit the generator **and** the schema. No schema major bump. |
| Change the shape (breaking) | Edit the generator + schema; bump to `vN` only if it breaks consumers. |

Always, before committing changes to the generator:

```bash
npm run generate:token-overrides && npm run validate:token-overrides
```

---

## Related

- **Authoritative shape:** `registry/schema/token-overrides.v1.json`
- **Publish flow:** [`.github/workflows/cdn.yml`](../../.github/workflows/cdn.yml)
- **Pattern precedent:** [`API_CONTRACT.md`](../../API_CONTRACT.md) (the `api.json` contract this mirrors)
- **Consumer theming guide (rebrand):** [docs.modyo.com](https://docs.modyo.com/en/dynamic/customization/theming.html)
