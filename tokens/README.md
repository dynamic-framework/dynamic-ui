# `tokens/` — the source of truth

This directory **is** the Dynamic Framework design system's values. The CSS, the
Sass variables, the TypeScript types, the published DTCG contract and the Figma
Variables are all generated from it.

If you change a colour anywhere else, you have introduced a bug.

> **Producer documentation.** This is for whoever authors tokens or touches
> `scripts/tokens/**`. For what consumers and agents may rely on, read
> [`TOKENS_CONTRACT.md`](../TOKENS_CONTRACT.md).

---

## 1. What changed from 2.x, and why

Dynamic 2.x built its values as Sass variables, merged them into Sass maps, and
emitted ~1,260 custom properties from `src/style/root/_root.scss`. The JSON
artefacts (`registry/tokens.json`, `registry/token-overrides.json`) were then
**derived from that** — `scripts/generate-token-overrides.mjs` compiled two
SCSS harnesses with dart-sass and parsed the resulting CSS.

That works for documentation and it cannot work for Figma. A round trip needs
the JSON to be the origin, not a report about the origin. So the direction is
inverted: `tokens/` is authored, everything else is output.

Five things that were impossible before are now structural:

| | 2.x | 3.x |
|---|---|---|
| Rebrand | edit Sass, rebuild, hope | edit one seed, `npm run tokens` |
| Figma sync | paste hex by hand | `tokens:figma:push` / `:pull`, diffed in CI |
| Dark mode | `$enable-dark-mode: false` | a mode of the Semantic collection |
| Contrast | `color-contrast-var()` at build, result buried in CSS | explicit token pairs, asserted in CI |
| Typos | `--bs---bs-ref-spacer-4` shipped | impossible; names are paths, not strings |

The 2.x pipeline is gone: `generate-token-overrides.mjs`,
`generate-token-overrides-schema.mjs`, `validate-token-overrides.mjs` and the
two SCSS harnesses were deleted rather than kept alongside. There is one source
of truth or there is none.

So is Bootstrap. `src/style/`, `scripts/build-scss.js`, the `bootstrap` and
`@popperjs/core` dependencies, the `cp:bootstrap` / `cp:popper` steps and the
`stylelint-config-twbs-bootstrap` config are all removed — 106 SCSS files and
about 7,100 lines. Nothing in the build reads a `--bs-*` custom property any
more; `scripts/css/legacy-selectors.json` keeps a frozen inventory of the class
names it defined, purely so `npm run css:audit` can still tell a Bootstrap class
from one of ours while the remaining components are ported.

---

## 2. Layout

```
tokens/
  $manifest.json           collections, modes, and which files feed which mode
  primitives/
    color.json             GENERATED — do not edit; edit the seeds instead
    dimension.json         spacing, radius, border widths
    typography.json        families, the numeric size scale, weights, leading
    effect.json            opacity
    motion.json            duration, easing, z-index
  semantic/
    color.light.json       the light mode of every semantic colour
    color.dark.json        the dark mode of the same set
    shared.json            type roles, shape, stroke, elevation, motion roles
  component/
    button.json            per-component geometry and type
    input.json
```

`component/*.json` is globbed, so a new component file needs no manifest edit.

---

## 3. The five rules

These are enforced by `npm run tokens:validate`, which fails the build. Each
exists because 2.x violated it somewhere and the violation surfaced downstream.

### A. A token is a literal or an alias. Never an expression.

This is the rule everything else rests on. Figma Variables hold a value or a
reference to another variable — there is no third option. `calc()`,
`rgba(var(--x-rgb), .5)`, `clamp()` and Sass functions are all unrepresentable.

Maths belongs in the CSS rule, not in the token:

```css
/* Not a token. A rule that uses tokens. */
.df-alert[data-color="primary"] {
  background: color-mix(in oklab,
    var(--df-role-primary-base) 10%,
    var(--df-bg-surface));
}
```

**Composites are the one nuance.** A `shadow` or `typography` token holds an
object, and rule A applies member by member: geometry may be literal (a 4px
offset is not something anyone rebrands), but **every colour member must be an
alias**, because colour is exactly what a rebrand changes.

### B. Only `primitives/` holds literals.

A semantic or component token whose value is a hex, a px or a bare number is an
error. That is what makes a rebrand a one-file change: if `bg.canvas` aliases
`{color.neutral.50}`, changing the neutral seed moves the page ground with it.

2.x hardcoded `#f5f6fa` as the body background — a colour that sat off the
neutral ramp, with a source comment asking whether it should be added to the
palette. Under rule B that cannot be written down.

### C. References point down the layers. Never up or sideways.

```
component  ->  semantic  ->  primitive
```

A component may alias semantic or primitive. Semantic may alias primitive only.
Primitives alias nothing. A component reaching straight for `{color.blue.500}`
is the failure this prevents: it survives a rebrand and then doesn't.

### D. Token names are unique across collections.

Every token becomes one custom property, so two collections declaring
`radius.none` would emit `--df-radius-none` twice — and the second, being an
alias to the first name, would alias *itself*.

This is not hypothetical: the first draft of this directory had exactly that
bug, with a semantic `radius.*` role group colliding with the primitive
`radius.*` scale. Hence `shape.*` for radius roles and `stroke.*` for border
widths. **Role groups never share a name with the primitive scale they alias.**

### E. Every mode declares the same token set.

`color.light.json` and `color.dark.json` must contain exactly the same keys. A
token present in light and missing from dark does not fall back to something
sensible — it keeps the light value and renders light-mode text on a dark
ground.

### F. Foreground/background pairs clear their contrast threshold, in every mode.

`scripts/tokens/validate.mjs` holds the pair list: body text on every ground it
can sit on, each role's `on-base` against its `base` and `base-hover`, each
role's `emphasis` against the canvas and the surface, form field internals.
4.5:1 for text, 3:1 for boundaries and large text (WCAG AA / 1.4.11).

Adding a semantic colour pair means adding it to `CONTRAST_RULES`. This is the
rule with teeth: it caught four real failures on the first run, including two
inherited from 2.x — `.text-muted` at 4.44:1 on the page canvas, and a
placeholder aliased to `$border-color` at 1.3:1 against a white field.

---

## 4. Colour ramps

`primitives/color.json` is **generated**. Do not edit it; edit the seeds in
[`scripts/tokens/build-primitives.mjs`](../scripts/tokens/build-primitives.mjs)
and run `npm run tokens:primitives`. CI fails if the committed file and the
generator disagree.

Each family is 11 steps (25 … 900) computed in OKLCh from one seed, with the
resulting hex written into the JSON. Figma reads those literals; CSS reads those
literals; nothing recomputes a tint.

Two properties are worth knowing:

**Step 500 is the seed, exactly.** Client brands are defined as
`--df-blue-500`-style values, so the seed cannot move. This rules out pinning
every family's 500 to a shared lightness (the Material approach): Dynamic's
seeds span L 0.47 for purple to 0.82 for yellow, so a shared lightness would
turn `yellow-500` into a dark gold.

**`neutral` is the anchor.** The shipped 2.x gray ramp turned out to be
unusually well-behaved in OKLCh — near-constant hue at ~285.5° and a smooth
lightness scale — so it is used as the reference: its measured lightness values
*are* the shared lightness scale, and its measured chroma profile *is* the
neutral chroma curve. The generator therefore reproduces the shipped grays byte
for byte. `npm run tokens:verify` asserts that, and fails if anyone edits
`LIGHTNESS_SCALE` away from the anchor.

What the change actually buys, measured by `tokens:verify`:

```
     contrast-vs-white spread across the 10 chromatic families
     step        2.x      3.x   change
      500       5.48     5.48   +0.00     <- seeds untouched, by design
      700       8.01     7.03   -0.98
      800       7.81     5.16   -2.65
      900       4.27     0.78   -3.49
```

In 2.x, contrast-vs-white at step 900 ranged from 15.07 (yellow) to 19.35
(indigo) — `warning-900` and `primary-900` were not the same step in any useful
sense. The light steps (25–400) stay within dL 0.05 of their 2.x values, so the
tints people already use barely move.

### Rebranding

1. Change the seed in `scripts/tokens/build-primitives.mjs`.
2. `npm run tokens` — regenerates, verifies, validates, builds.
3. Read the diff. If a contrast rule now fails, the semantic mapping needs a
   step adjustment; the error message names the pair and the ratio.
4. `npm run tokens:figma:push -- --write` to bring Figma along.

Do not change the `neutral` seed casually. The shared lightness scale is derived
from it, so it moves every other family.

---

## 5. Figma

`npm run tokens:build` emits `dist/tokens/dynamic.figma.json`, a normalised
payload; `tokens:figma:push` turns it into REST calls.

| Collection | Modes | In the published library |
|---|---|---|
| Primitives | `Value` | no — `hiddenFromPublishing` |
| Semantic | `light`, `dark` | yes |
| Components | `Value` | yes |

Primitives **are** created in Figma even though designers shouldn't compose with
them: a Figma alias needs its target to exist in the file. Hiding them from
publishing is the correct mechanism, not skipping their creation — an early
draft skipped it and every semantic alias failed to resolve.

What cannot become a Figma variable, and what happens instead:

| | Why | Handling |
|---|---|---|
| `elevation.*` | shadows are effect styles, not variables | `publish: false`, exported as effect styles |
| `motion.*`, `duration`, `easing` | no variable type | `publish: false`; CSS and docs only |
| `z.*` | not a design-surface value | `publish: false` |

`tokens:figma:push` **upserts by name and never deletes.** Removing a variable
breaks every design bound to it, so deletion stays a deliberate act in Figma.
Dry run is the default; `--write` plus `FIGMA_TOKEN` and `FIGMA_FILE_KEY` are
required to write.

`tokens:figma:pull` **reports; it does not overwrite.** A designer changing a
value in Figma is a proposal, not a fact — letting Figma write straight into
`tokens/` would mean an unreviewed edit could change every client's production
colours. It exits non-zero on drift, so it works as a PR check, and its output
is what a scheduled job would turn into a PR.

---

## 6. Commands

```bash
npm run tokens              # the whole chain; what CI runs
npm run tokens:primitives   # regenerate the colour ramps
npm run tokens:verify       # assert the ramp properties
npm run tokens:validate     # enforce rules A-F
npm run tokens:build        # emit dist/tokens/*
npm run tokens:figma:push   # dry run; add -- --write to apply
npm run tokens:figma:pull   # drift report
```

---

## 7. Adding tokens

**A new component.** Create `component/<name>.json`. It is globbed, so no
manifest change. Alias semantic roles for colour and `shape.*` / `stroke.*` /
`size.*` for geometry.

Keep it **structural**. Do not write out a variant × colour matrix:
`component/button.json` has a long note on why. In short, 2.x emitted ~350 of
those combinations as global custom properties, which is a large part of the
1.29 MB stylesheet, and none of them are decisions a designer makes. The CSS
assigns them as local custom properties per selector instead:

```css
.df-button[data-variant="soft"][data-color="primary"] {
  --df-button-bg: var(--df-role-primary-subtle);
  --df-button-fg: var(--df-role-primary-on-subtle);
}
```

A client can still override one combination with that same selector, and
overriding the role propagates everywhere at once.

**A new semantic colour.** Add it to *both* `color.light.json` and
`color.dark.json` (rule E), alias-only (rule B), and add its contrast pair to
`CONTRAST_RULES` in `scripts/tokens/validate.mjs` (rule F).

**A new primitive.** Only if no existing one fits. A primitive is a value with
no opinion; if you find yourself naming it after a use, it belongs in
`semantic/`.

---

## 8. Open decisions

Two mappings in here are deliberate changes that want design sign-off, both
reversible in one line:

- **`role.info` now maps to cyan.** In 2.x `info` aliased blue — the same hue as
  `primary` — so an info alert was indistinguishable from a primary one. Because
  cyan is too light to carry white text, `info.on-base` is dark, like `warning`.
- **`role.neutral` and `role.inverse` replace `light` and `dark`.** A role
  called "light" has no meaning in a system with a dark mode. Component props
  keep the old names and map onto the new roles, so `<DButton color="light">`
  still works.

Not yet built, and noted in the manifest as future work: a **Breakpoint**
collection of dimension tokens with `sm`/`md`/`lg` modes. That is the
replacement for 2.x's `rfs()` fluid type, which is elegant in CSS and
unrepresentable in Figma, where a designer works on fixed-width frames.

---

## Related

- [`TOKENS_CONTRACT.md`](../TOKENS_CONTRACT.md) — what consumers and agents may rely on
- [`API_CONTRACT.md`](../API_CONTRACT.md) — the `api.json` contract this mirrors
- [DTCG specification](https://tr.designtokens.org/format/) — the `$value` / `$type` format
- [Figma Variables REST API](https://www.figma.com/developers/api#variables) — what `figma-push` calls
