# Design token contract

What a consumer of Dynamic Framework — a person, a build tool, or an agent
recreating a client's brand — may rely on.

**Contract version 1.0.0.** Mirrors the register of
[`API_CONTRACT.md`](./API_CONTRACT.md); for how tokens are authored, read
[`tokens/README.md`](./tokens/README.md).

> ### This replaces `token-overrides.json`
>
> Dynamic 2.6 published `token-overrides.json`: a descriptor of the CSS
> custom-property override surface, built by compiling two SCSS harnesses and
> parsing the resulting CSS, explicitly so that agents could rebrand without
> reading the 1.29 MB stylesheet.
>
> It solved a real problem that no longer exists. The override surface is no
> longer something to infer from compiled output — it is the published DTCG
> document, authored directly, with layer and mode declared per token. There is
> nothing left to reverse-engineer, so the artefact, its schema, and its three
> generator scripts were removed rather than kept in parallel.
>
> If you consumed `token-overrides.json`, the mapping is:
> its `class` axis (`override-base` / `override-leaf` / `follows`) is now just
> **which layer a token is in** — override the semantic layer, and everything
> downstream follows by construction.

---

## 1. Published artefacts

Per released version, under
`https://cdn.dynamicframework.dev/assets/{semver}/ui-react/tokens/`, and at
`/assets/latest/ui-react/tokens/` for stable releases:

| File | What it is | Use it when |
|---|---|---|
| `dynamic.tokens.json` | The DTCG contract. Every token, every collection, every mode. | You are reading or transforming the system programmatically. **This is the contract.** |
| `dynamic.tokens.css` | Custom properties, layered, both colour modes. | You are styling anything. |
| `dynamic.tokens.scss` | Sass variables. | You are on Sass and migrating. |
| `dynamic.tokens.ts` | Token names, types, primitive literals. | You are in React and want autocompletion. |

`dynamic.figma.json` is a build intermediate for the Figma push and is **not**
published.

---

## 2. Three layers

Every token belongs to exactly one, and that is the only thing you need to know
to use the system correctly.

| Layer | Example | Holds | Override it to… |
|---|---|---|---|
| **Primitive** | `--df-color-blue-500`, `--df-size-4` | literal values | change the raw palette or scale |
| **Semantic** | `--df-bg-surface`, `--df-role-primary-base` | aliases to primitives | **rebrand** — this is the layer you want |
| **Component** | `--df-button-padding-inline` | aliases to semantic | retune one component |

References only ever point downward, so an override propagates upward for free.
Change `--df-color-blue-500` and every primary surface, border, hover state and
focus ring follows, because each of them is an alias chain ending there.

### Rebranding, in full

```css
/* Your theme. Unlayered, so it beats Dynamic's @layer without !important. */
:root {
  --df-color-blue-500: #0b5fff;   /* the brand action colour */
  --df-color-neutral-500: #6b7280; /* the neutral ramp's anchor */
}
```

That is the whole operation for a hue swap. Two caveats:

- **You are overriding one step, not a ramp.** `--df-color-blue-500` is step 500;
  steps 25–900 keep their old values and will no longer be tints of your new
  hue. Three ways out, in order of preference:

  1. **Link `dynamic.live-ramp.css`.** An opt-in sheet that redefines the ten
     derived steps in terms of their own 500, so overriding one variable moves
     the whole ramp — no build step, which is the case a CDN consumer is in.

     ```html
     <link rel="stylesheet" href=".../dynamic.css">
     <link rel="stylesheet" href=".../dynamic.live-ramp.css">
     <style>:root { --df-color-blue-500: #0a7d4b; }</style>
     ```

     Every expression in it evaluates to the hex it replaces — the build fails
     if one does not — so linking it changes nothing until you override a seed.
     It needs relative colour syntax (Chrome 119, Safari 16.4, Firefox 128).

  2. **Regenerate from the seed** (`tokens/README.md` § 4) and override all
     eleven steps. This is what the library itself does.

  3. **Override the semantic layer directly**, below.
- **Contrast is not re-checked at runtime.** Dynamic asserts every
  foreground/background pair in CI against *its* values. Your values are yours
  to verify.

To retheme without touching the palette, override semantics instead — this is
the more precise tool:

```css
:root {
  --df-role-primary-base: var(--df-color-indigo-500);
  --df-role-primary-on-base: var(--df-color-white);
  --df-bg-canvas: var(--df-color-neutral-25);
}
```

---

## 3. Naming

CSS custom property = `--df-` + the token's DTCG path, joined with `-`.
Figma variable = the same path, joined with `/`.

```
color.blue.500        ->  --df-color-blue-500        ->  color/blue/500
role.primary.base     ->  --df-role-primary-base     ->  role/primary/base
button.padding-inline ->  --df-button-padding-inline ->  button/padding-inline
```

State always comes last: `--df-role-primary-base-hover`, not `-hover-base`.

### Moving from `--bs-*`

`--bs-` is gone; the prefix no longer names a vendor Dynamic does not use. The
patterns worth knowing:

| 2.x | 3.x | Note |
|---|---|---|
| `--bs-blue-500` | `--df-color-blue-500` | |
| `--bs-primary` | `--df-role-primary-base` | `primary` meant both "brand colour" and "button fill" |
| `--bs-primary-rgb` | *(removed)* | see below |
| `--bs-body-color` | `--df-fg-default` | |
| `--bs-secondary-color` | `--df-fg-muted` | `secondary` was both a brand role and "muted text" |
| `--bs-primary-bg-subtle` | `--df-role-primary-subtle` | |
| `--bs-primary-text-emphasis` | `--df-role-primary-emphasis` | |
| `--bs-border-color` | `--df-border-default` | |
| `--bs-ref-spacer-4` | `--df-size-4` | the 2.x reference layer, generalised |
| `--bs-btn-soft-warning-hover-bg` | *(not a token)* | § 5 |

**The `-rgb` channel is gone.** 2.x stored every colour twice —
`--bs-primary-rgb: 32, 104, 213` plus `--bs-primary: rgb(var(--bs-primary-rgb))`
— so that utilities could do `rgba(var(--bs-primary-rgb), .5)`. That form cannot
be a Figma variable and it doubled the colour system. Use `color-mix()`:

```css
/* was: rgba(var(--bs-primary-rgb), .1) */
background: color-mix(in oklab, var(--df-role-primary-base) 10%, var(--df-bg-surface));
```

Mixing against the actual surface rather than transparency also gives the
correct result in dark mode with no extra rule.

---

## 4. Colour modes

The Semantic collection has two modes, and every token that differs between
them is emitted **once**, carrying both values:

```css
:root                    { color-scheme: light dark; }
[data-df-theme="light"]  { color-scheme: light; }
[data-df-theme="dark"]   { color-scheme: dark; }

@supports (color: light-dark(#000, #fff)) {
  :root {
    --df-bg-surface: light-dark(var(--df-color-white), var(--df-color-neutral-800));
    /* …one line per mode-varying token */
  }
}
```

- Set **nothing** to follow the OS. This is the default and what most visitors get.
- Set `data-df-theme="dark"` or `="light"` on **any element** to force a mode
  for it and everything inside it; an explicit choice beats the OS in both
  directions.

Every semantic token is defined in both modes — CI enforces it — so there is no
partial-theme state where one mode's text lands on the other mode's ground.

### A mode applies to a subtree, at every layer

`data-df-theme` is not restricted to `<html>`. A dark band on a light page, a
light card on a dark page, two modes side by side in one document: all of them
are one attribute.

That used to be only three-quarters true, and the missing quarter was invisible
until measured. A custom property is substituted **where it is declared**. The
Components collection has one mode, so `--df-card-bg: var(--df-bg-surface)` was
resolved on `:root` and the resulting *hex* is what inherited down the tree —
redefining `--df-bg-surface` further in changed nothing for it, while the text
on top, painted by a rule on the element itself, did flip. 197 of the 575
component declarations had that shape; `.df-text-muted` on a `.df-card` inside a
dark subtree measured **2.38:1**.

`light-dark()` moves the decision from substitution time to **used-value** time.
The pair travels through any number of `var()` hops as an unresolved token
stream, and the browser picks a side from the `color-scheme` of the element that
finally paints it. A component token declared once on `:root` therefore lands
correctly inside a zone, with nothing for a component author to remember.

Three consequences worth knowing:

- **`color-scheme` is part of the contract now,** not just a scrollbar
  handshake. Set it if you introduce a themed scope of your own; the attribute
  selectors above already do.
- **Reading a semantic token in JavaScript needs a paint.**
  `getComputedStyle(el).getPropertyValue('--df-fg-default')` returns the literal
  string `light-dark(#15151a, #f0f0ef)`, because a custom property's computed
  value is substituted but not resolved. Assign it to a real property and read
  that back instead:

  ```js
  const probe = document.createElement('span');
  probe.style.color = 'var(--df-fg-default)';
  el.appendChild(probe);
  const painted = getComputedStyle(probe).color;  // rgb(…), resolved for this element
  probe.remove();
  ```

- **Below Chrome 123 / Safari 17.5 / Firefox 120** an `@supports not` block
  carries the previous per-mode emission. Those browsers get the same light and
  dark they always did at the document level, and the same partial behaviour in
  a subtree.

---

## 5. What is *not* a token

Deliberately, and worth knowing before you go looking:

**Variant × colour combinations.** There is no `--df-button-solid-primary-bg`.
2.x emitted roughly 350 such combinations (4 variants × 8 colours × 4 states ×
3 properties) as global custom properties, which is a large part of why its
stylesheet is 1.29 MB, and none of them are design decisions — they are
derivations of the role semantics. The CSS assigns them per selector instead:

```css
.df-button[data-variant="solid"][data-color="primary"] {
  --df-button-bg: var(--df-role-primary-base);
  --df-button-fg: var(--df-role-primary-on-base);
}
```

To restyle one combination, use that selector. To restyle all of them, override
the role.

**Fluid type.** 2.x scaled font sizes with `rfs()`. A fluid value cannot be a
Figma variable — a designer works on fixed-width frames — so the type scale is
discrete. Responsive scaling will arrive as a Breakpoint collection with
`sm`/`md`/`lg` modes.

**Shadows, motion and z-index as Figma variables.** They exist as CSS custom
properties and in the DTCG document, but Figma has no variable type for them.
Shadows are exported as Figma effect styles; motion and z-index stay
code-and-docs only.

---

## 6. For agents

Read `dynamic.tokens.json`. It is a single self-describing DTCG document; you do
not need to parse CSS, and you should not.

- `$extensions["dev.dynamicframework.contract"].collections` lists each
  collection with its `layer` and `modes`.
- A token's `$value` is **either** a literal **or** a `{dotted.path}` alias.
  There is no third form — no `calc()`, no `rgba(var(…))`, no Sass. You can
  resolve the whole graph with a lookup and a loop.
- To rebrand: rewrite values in the **Semantic** collection, or regenerate the
  primitive ramps from seeds. Do not write literals into Semantic — it breaks
  mode switching, because a literal cannot differ between `light` and `dark`.
- To override one semantic token **in CSS**, write a `light-dark()` pair on
  `:root` rather than a value under `[data-df-theme="dark"]`. A pair is what
  the token layer emits, and it is the form that also reaches a themed subtree
  — see § 4.

  ```css
  :root {
    --df-role-primary-base: light-dark(var(--df-color-blue-500), var(--df-color-blue-300));
  }
  ```
- `$extensions["dev.dynamicframework.ramp"]` on each colour family records its
  `seed`, `anchorStep` and `method`, which is what you need to regenerate a ramp
  rather than guess at one. **Known gap:** it is present in the authored
  `tokens/primitives/color.json` and currently stripped from the published
  `dynamic.tokens.json`, because the emitter rebuilds the tree from leaf tokens
  and group-level `$extensions` are lost. Read the method here until that is
  fixed: eleven steps in OKLCh from one seed, which is step 500 exactly.
- Contrast is **not** re-checked at runtime. If you change values, re-check the
  pairs — reading a semantic token needs a paint, see § 4.

Contrast is asserted in CI for Dynamic's own values only. If you change values,
re-check the pairs listed in `scripts/tokens/validate.mjs`.

---

## 7. Versioning

Two version numbers, deliberately independent:

- **`contract`** (in `$manifest.json` and every artefact's `$extensions`) —
  the document *shape*. Bumps only when the shape changes in a way that breaks a
  reader.
- **`library`** — the npm package version, read live from `package.json`.

A rebrand changes values, not shape, so it does **not** bump the contract.
Adding a token or a field is additive and does not bump it either. Removing or
retyping a token does.

Token names are public API. They are removed only in a major release, and only
with a deprecation entry.

---

## Related

- [`tokens/README.md`](./tokens/README.md) — authoring rules, ramp algorithm, Figma flow
- [`API_CONTRACT.md`](./API_CONTRACT.md) — the `api.json` component contract
- [DTCG specification](https://tr.designtokens.org/format/)
