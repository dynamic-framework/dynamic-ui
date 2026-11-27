import {
  useCallback, useInsertionEffect, useLayoutEffect, useMemo, useRef, useState,
} from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import DAlert from '../../src/components/DAlert/DAlert';
import DAvatar from '../../src/components/DAvatar/DAvatar';
import DBadge from '../../src/components/DBadge/DBadge';
import DButton from '../../src/components/DButton/DButton';
import DCard from '../../src/components/DCard/DCard';
import DChip from '../../src/components/DChip/DChip';
import DIcon from '../../src/components/DIcon/DIcon';
import DInput from '../../src/components/DInput/DInput';
import DInputCheck from '../../src/components/DInputCheck/DInputCheck';
import DListGroup from '../../src/components/DListGroup/DListGroup';
import DProgress from '../../src/components/DProgress/DProgress';
import DTabs from '../../src/components/DTabs/DTabs';

import {
  BRANDS, CONTRAST_PAIRS, FAMILY_ROLE, brandCss, cssVar, seedCss, tally, type Brand,
} from './themes';

/* The extension is part of the path — see the note in `themes.ts`. */
// eslint-disable-next-line import/extensions
import { buildRamp, STEPS } from '../../scripts/tokens/lib/ramps.mjs';
// eslint-disable-next-line import/extensions
import { contrastRatio } from '../../scripts/tokens/lib/color.mjs';

/* ------------------------------------------------------------------ *
 * Reading what the browser actually computed
 * ------------------------------------------------------------------ */

/** `rgb(32, 104, 213)` -> `#2068d5`. Alpha is dropped; no pair here has one. */
function rgbToHex(value: string): string {
  const parts = value.match(/[\d.]+/g);
  if (!parts || parts.length < 3) return value;
  return `#${parts.slice(0, 3)
    .map((n) => Math.round(Number(n)).toString(16).padStart(2, '0'))
    .join('')}`;
}

/**
 * The colour a token actually paints with, on this element.
 *
 * Reading `getComputedStyle(el).getPropertyValue('--df-fg-default')` would be
 * the obvious way and it is the wrong one. A custom property's computed value
 * is its specified value with `var()` substituted — which used to mean a hex,
 * and since the token layer emits `light-dark(a, b)` means exactly that
 * string, both halves, unresolved. Resolving it in JavaScript would mean
 * re-deciding here which mode applies, which is the decision this whole
 * mechanism exists to leave to the browser.
 *
 * So it is assigned to a real property and read back. `color` resolves
 * `light-dark()` against the element's own `color-scheme`, exactly as a paint
 * would, and `getComputedStyle` hands back the resolved `rgb()`. What comes
 * out is what the pixel would be.
 */
function paintedColor(element: HTMLElement | null, name: string): string {
  if (!element) return '';
  const probe = document.createElement('span');
  probe.style.color = `var(${cssVar(name)})`;
  probe.style.display = 'none';
  element.appendChild(probe);
  const painted = getComputedStyle(probe).color;
  probe.remove();
  return rgbToHex(painted);
}

/**
 * A token's computed value, verbatim.
 *
 * For anything that is not a colour — a length, a weight — this is the answer,
 * because there is no mode to resolve and nothing to paint it into.
 */
function rawToken(element: HTMLElement | null, name: string): string {
  if (!element) return '';
  return getComputedStyle(element).getPropertyValue(cssVar(name)).trim();
}

/** `contrastRatio` throws on anything that is not a 6-digit hex. */
function ratio(a: string, b: string): number | null {
  try {
    return contrastRatio(a, b);
  } catch {
    return null;
  }
}

/**
 * Re-reads values from the DOM after every paint that could have changed them.
 *
 * `read` runs in a layout effect because the `<style>` element carrying the
 * theme is written in one too, and a value read before it lands is the
 * previous brand's.
 */
function useComputed<T>(read: () => T, deps: unknown[]): T | null {
  const [value, setValue] = useState<T | null>(null);
  const readRef = useRef(read);
  readRef.current = read;

  useLayoutEffect(() => {
    setValue(readRef.current());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return value;
}

/**
 * Puts a stylesheet in the document, and takes it out again.
 *
 * A `<style>` element rather than inline `style` on the wrapper, because a
 * theme is not only custom properties on one element: the dark-mode remedy is
 * a rule with its own selector, and an inline style cannot express a
 * selector. It is unlayered, so it beats `@layer df.tokens` with no
 * `!important` — the same mechanism the token contract tells a client to use.
 */
function useStylesheet(id: string, css: string) {
  /*
   * `useInsertionEffect`, not `useLayoutEffect`.
   *
   * The gate and the palette strip read computed values in layout effects,
   * and a child's layout effect runs BEFORE its parent's — so a sheet
   * injected from the parent lands after they have already measured, and
   * every number on the page is one brand behind. React runs insertion
   * effects before any layout effect for exactly this: stylesheets that
   * something downstream is about to measure.
   */
  useInsertionEffect(() => {
    const element = document.createElement('style');
    element.id = id;
    element.textContent = css;
    document.head.appendChild(element);
    return () => element.remove();
  }, [id, css]);
}

/**
 * The brand's web fonts, in the document only while the brand is on.
 *
 * A `<link>` rather than an `@import` inside the theme sheet: an `@import`
 * inside an injected `<style>` is fetched after that sheet parses, which puts
 * the font request behind everything instead of alongside it.
 *
 * Every family lands in the token with its fallbacks — see `Brand.fonts`. If
 * the request fails, the stack is what renders, and the only thing lost is the
 * face. A theme whose type disappears offline would be worse than one that
 * never asked for a font.
 */
function useWebFont(href: string | undefined) {
  useInsertionEffect(() => {
    if (!href) return undefined;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
    return () => link.remove();
  }, [href]);
}

/* ------------------------------------------------------------------ *
 * Scaffolding
 * ------------------------------------------------------------------ */

const MONO = 'var(--df-font-family-mono)';

function Section({ title, hint, children }: {
  title: string;
  hint?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section style={{ display: 'grid', gap: 'var(--df-size-4)', marginBlockEnd: 'var(--df-size-10)' }}>
      <header style={{ display: 'grid', gap: 'var(--df-size-1)', maxWidth: '62ch' }}>
        <h3 style={{ margin: 0, fontSize: 'var(--df-text-heading-5-font-size)' }}>{title}</h3>
        {hint && (
          <p style={{ margin: 0, color: 'var(--df-fg-muted)', fontSize: 'var(--df-text-body-sm-font-size)' }}>
            {hint}
          </p>
        )}
      </header>
      {children}
    </section>
  );
}

function Page({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="sb-unstyled"
      style={{
        background: 'var(--df-bg-canvas)',
        color: 'var(--df-fg-default)',
        padding: 'var(--df-size-6)',
        fontFamily: 'var(--df-text-body-font-family)',
      }}
    >
      {children}
    </div>
  );
}

function Code({ children, maxHeight }: { children: string; maxHeight?: string }) {
  return (
    <pre
      style={{
        margin: 0,
        padding: 'var(--df-size-4)',
        background: 'var(--df-bg-sunken)',
        color: 'var(--df-fg-default)',
        border: '1px solid var(--df-border-default)',
        borderRadius: 'var(--df-shape-surface)',
        fontFamily: MONO,
        fontSize: 'var(--df-text-body-xs-font-size)',
        lineHeight: 1.6,
        overflow: 'auto',
        maxHeight,
      }}
    >
      {children}
    </pre>
  );
}

/** A labelled value, monospaced, for anything read out of the document. */
function Mono({ children }: { children: React.ReactNode }) {
  return <span style={{ fontFamily: MONO, fontSize: 'var(--df-text-body-xs-font-size)' }}>{children}</span>;
}

/* ------------------------------------------------------------------ *
 * 1. The three layers
 * ------------------------------------------------------------------ */

/**
 * One alias chain, resolved against the live document.
 *
 * Every row is read with `getComputedStyle`, so the hex at the bottom is the
 * one the browser is painting with right now — including whatever the toolbar
 * says about the colour mode. Hardcoding it would make this a diagram; reading
 * it makes it a measurement, and a measurement breaks when the chain does.
 */
const isColor = (value: string | undefined) => /^#[0-9a-f]{3,8}$/i.test(value ?? '');

const LAYER_COLOR: Record<string, 'info' | 'primary' | 'neutral'> = {
  component: 'info',
  semantic: 'primary',
  primitive: 'neutral',
};

type ChainStep = {
  layer: string;
  token: string;
  /* A colour has to be painted to be read; a length is already the answer. */
  kind: 'color' | 'length';
  note: string;
};

function Chain({ steps }: { steps: ChainStep[] }) {
  const probe = useRef<HTMLDivElement>(null);
  const values = useComputed(
    () => steps.map((step) => (step.kind === 'color'
      ? paintedColor(probe.current, step.token)
      : rawToken(probe.current, step.token))),
    [steps],
  );

  return (
    <div ref={probe} style={{ display: 'grid', gap: 'var(--df-size-2)' }}>
      {steps.map((step, index) => (
        <div
          key={step.token}
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(5rem, auto) minmax(12rem, 1fr) minmax(6rem, auto) 2fr',
            gap: 'var(--df-size-3)',
            alignItems: 'center',
            padding: 'var(--df-size-3)',
            background: 'var(--df-bg-surface)',
            border: '1px solid var(--df-border-default)',
            borderRadius: 'var(--df-shape-surface)',
            marginInlineStart: `calc(var(--df-size-6) * ${index})`,
          }}
        >
          <DBadge variant="soft" color={LAYER_COLOR[step.layer]} text={step.layer} />
          <Mono>{cssVar(step.token)}</Mono>
          <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--df-size-2)' }}>
            {/* A dimension has no swatch. The component row is deliberately one. */}
            {isColor(values?.[index]) && (
              <span
                aria-hidden
                style={{
                  width: '1.25rem',
                  height: '1.25rem',
                  borderRadius: 'var(--df-shape-control-sm)',
                  border: '1px solid var(--df-border-strong)',
                  background: values?.[index],
                }}
              />
            )}
            <Mono>{values?.[index] || '—'}</Mono>
          </span>
          <span style={{ color: 'var(--df-fg-muted)', fontSize: 'var(--df-text-body-sm-font-size)' }}>
            {step.note}
          </span>
        </div>
      ))}
    </div>
  );
}

function Layers() {
  return (
    <Page>
      <Section
        title="A button's fill, all the way down"
        hint={(
          <>
            Three names, one literal. Each row is read from the document with
            <Mono> getComputedStyle</Mono>
            , so the hex is what the browser is painting — switch the toolbar to dark and
            every row below the primitive moves.
          </>
        )}
      >
        <Chain
          steps={[
            {
              layer: 'component',
              kind: 'length',
              token: 'button-padding-inline',
              note: 'Geometry only. There is no --df-button-bg in the token document: the '
                + 'variant × colour matrix is assigned per selector, not published as 350 '
                + 'global properties.',
            },
            {
              layer: 'semantic',
              kind: 'color',
              token: 'role-primary-base',
              note: 'What the CSS rule for [data-variant="solid"][data-color="primary"] '
                + 'assigns to the button\'s local --df-button-bg. This is the layer a '
                + 'rebrand touches.',
            },
            {
              layer: 'primitive',
              kind: 'color',
              token: 'color-blue-500',
              note: 'Step 500 is the seed, exactly. Overriding this one value is the '
                + 'shortest rebrand there is.',
            },
          ]}
        />
      </Section>

      <Section
        title="Why the direction matters"
        hint="References point down the layers and never up or sideways, which is what makes an
          override propagate for free. A component that reached straight for {color.blue.500}
          would survive a rebrand and then not."
      >
        <Code>
          {`component  ->  semantic  ->  primitive

button.padding-inline   {size.4}                literal: 1rem
role.primary.base       {color.blue.500}        literal: #2068d5
color.blue.500          --                      literal: #2068d5   <- the only literal`}
        </Code>
      </Section>

      <Section
        title="The same three layers, as the agent sees them"
        hint={(
          <>
            <Mono>dynamic.tokens.json</Mono>
            {' '}
            is one self-describing DTCG document. A value is a literal or a
            <Mono>{' {dotted.path} '}</Mono>
            alias — there is no third form, so the whole graph resolves with a lookup and a loop.
          </>
        )}
      >
        <Code>
          {`{
  "$extensions": {
    "dev.dynamicframework.contract": {
      "contract": "1.0.0",
      "prefix": "df",
      "collections": [
        { "name": "Primitives", "layer": "primitive", "modes": ["Value"] },
        { "name": "Semantic",   "layer": "semantic",  "modes": ["light", "dark"] },
        { "name": "Components", "layer": "component", "modes": ["Value"] }
      ]
    }
  },
  "Semantic": {
    "light": { "role": { "primary": { "base": { "$type": "color", "$value": "{color.blue.500}" } } } },
    "dark":  { "role": { "primary": { "base": { "$type": "color", "$value": "{color.blue.400}" } } } }
  },
  "Primitives": {
    "Value": { "color": { "blue": { "500": { "$type": "color", "$value": "#2068d5" } } } }
  }
}`}
        </Code>
      </Section>
    </Page>
  );
}

/* ------------------------------------------------------------------ *
 * 2. One seed, eleven steps
 * ------------------------------------------------------------------ */

function Ramp() {
  const [seed, setSeed] = useState('#0a7d4b');
  const ramp = useMemo(() => buildRamp(seed), [seed]);

  return (
    <Page>
      <Section
        title="One seed, eleven steps"
        hint={(
          <>
            Pick a colour. The eleven swatches are computed by
            <Mono> buildRamp </Mono>
            from
            <Mono> scripts/tokens/lib/ramps.mjs</Mono>
            {' '}
            — the function that writes
            <Mono> tokens/primitives/color.json</Mono>
            . Nothing here is an approximation of the build; it is the build.
          </>
        )}
      >
        <label
          htmlFor="seed"
          style={{
            display: 'flex', gap: 'var(--df-size-3)', alignItems: 'center', flexWrap: 'wrap',
          }}
        >
          <span style={{ fontWeight: 'var(--df-font-weight-medium)' }}>Seed (step 500)</span>
          <input
            id="seed"
            type="color"
            value={seed}
            onChange={(event) => setSeed(event.currentTarget.value)}
            style={{
              width: '3rem',
              height: '2rem',
              padding: 0,
              border: '1px solid var(--df-border-strong)',
              borderRadius: 'var(--df-shape-control)',
              background: 'none',
            }}
          />
          <Mono>{seed}</Mono>
        </label>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--df-size-2)' }}>
          {STEPS.map((step) => {
            const value = ramp[step];
            const onWhite = ratio(value, '#ffffff');
            return (
              <div
                key={step}
                style={{
                  display: 'grid',
                  gap: 'var(--df-size-1)',
                  minWidth: '6.5rem',
                  flex: '1 1 6.5rem',
                }}
              >
                <div
                  style={{
                    height: '3.5rem',
                    background: value,
                    borderRadius: 'var(--df-shape-control)',
                    border: step <= 50 ? '1px solid var(--df-border-default)' : 'none',
                    outline: step === 500 ? '2px solid var(--df-fg-default)' : 'none',
                    outlineOffset: '2px',
                  }}
                />
                <Mono>{step === 500 ? `${step} · seed` : step}</Mono>
                <Mono>{value}</Mono>
                <span style={{ color: 'var(--df-fg-muted)', fontFamily: MONO, fontSize: '0.6875rem' }}>
                  {onWhite ? `${onWhite.toFixed(2)}:1 vs white` : '—'}
                </span>
              </div>
            );
          })}
        </div>
      </Section>

      <Section
        title="Why the ramp is generated and not picked"
        hint="Each step is computed in OKLCh: a shared lightness scale measured off the neutral
          ramp, a chroma envelope, and the seed's own hue. The point is that a green-700 and a
          blue-700 land on the same perceptual step, which is not true of hand-picked ramps."
      >
        <Code>
          {`Step 500 is the seed, byte for byte, because client brands are defined as
that value and it cannot move.

contrast-vs-white, spread across the ten chromatic families:

  step        2.x      3.x   change
   500       5.48     5.48   +0.00     <- seeds untouched, by design
   700       8.01     7.03   -0.98
   800       7.81     5.16   -2.65
   900       4.27     0.78   -3.49

In 2.x the spread at step 900 ran from 15.07 (yellow) to 19.35 (indigo) —
warning-900 and primary-900 were not the same step in any useful sense.`}
        </Code>
      </Section>

      <Section
        title="…and why a browser can do it without a build"
        hint={(
          <>
            <Mono>dynamic.live-ramp.css</Mono>
            {' '}
            is an opt-in sheet that re-expresses the ten derived steps as relative colours
            against their own 500. Link it and overriding one variable moves the whole family.
            Every expression in it evaluates to the hex it replaces — the build fails if one
            does not — so linking it changes nothing until a seed is overridden.
          </>
        )}
      >
        <Code>
          {`--df-color-blue-700: oklch(from var(--df-color-blue-500)
                            calc(l * 0.7016) calc(c * 0.7805) calc(h + 0.11));

Not color-mix(): the dark end of the ramp converges on a shared ABSOLUTE
lightness, not on a shared mix fraction. Seeds run from L 0.47 (purple) to
0.82 (yellow), so the fraction toward black has to differ by family —
0.577 against 0.758 — and one percentage cannot be both.

Needs relative colour syntax: Chrome 119, Safari 16.4, Firefox 128.`}
        </Code>
      </Section>
    </Page>
  );
}

/* ------------------------------------------------------------------ *
 * 3. A theme, applied
 * ------------------------------------------------------------------ */

/**
 * A realistic product surface, so a theme has something to be wrong on.
 *
 * The mode is an attribute on this element, not on the document, and the two
 * panels sit side by side on one page — which is a thing this component could
 * not do until the token layer started emitting `light-dark()`.
 *
 * Before that, the Components collection was emitted once at `:root`, so
 * `--df-card-bg: var(--df-bg-surface)` was substituted THERE and the resolved
 * hex is what inherited down. A `[data-df-theme="dark"]` further in redefined
 * `--df-bg-surface` and nothing re-read it: the card kept its light fill
 * inside the dark panel while the text on it went light, measured at 2.38:1.
 * The token now carries both halves and the browser picks one from this
 * element's `color-scheme`, so every layer follows the panel.
 */
function Product({ mode, idPrefix }: { mode: 'light' | 'dark'; idPrefix: string }) {
  const [amount, setAmount] = useState('120.000');

  return (
    <div
      data-df-theme={mode}
      style={{
        background: 'var(--df-bg-canvas)',
        color: 'var(--df-fg-default)',
        padding: 'var(--df-size-5)',
        borderRadius: 'var(--df-shape-surface)',
        border: '1px solid var(--df-border-default)',
        display: 'grid',
        gap: 'var(--df-size-5)',
        /* The three body type roles, so a brand that retunes them shows it. */
        fontFamily: 'var(--df-text-body-font-family)',
        fontSize: 'var(--df-text-body-font-size)',
        lineHeight: 'var(--df-text-body-line-height)',
      }}
    >
      <header style={{ display: 'flex', alignItems: 'center', gap: 'var(--df-size-3)' }}>
        <DAvatar name="Ana Lopez" />
        <div style={{ display: 'grid' }}>
          <strong style={{ fontFamily: 'var(--df-text-heading-font-family)' }}>Ana Lopez</strong>
          <span style={{ color: 'var(--df-fg-muted)', fontSize: 'var(--df-text-body-sm-font-size)' }}>
            {mode === 'light' ? 'Cuenta vista · light' : 'Cuenta vista · dark'}
          </span>
        </div>
        <span style={{ marginInlineStart: 'auto' }}>
          <DBadge color="success" variant="soft" text="Al día" />
        </span>
      </header>

      {/*
        * An editorial block, purely so the type roles have somewhere to show.
        * Heading family, heading weight, heading leading, body size, body
        * leading and the small rung are six separate tokens, and a brand that
        * moves them is unreadable from a button alone.
        */}
      <div style={{ display: 'grid', gap: 'var(--df-size-2)' }}>
        <h3
          style={{
            margin: 0,
            fontFamily: 'var(--df-text-heading-font-family)',
            fontWeight: 'var(--df-text-heading-font-weight)',
            lineHeight: 'var(--df-text-heading-line-height)',
            fontSize: 'var(--df-text-heading-3-font-size)',
          }}
        >
          Tu resumen de marzo
        </h3>
        <p style={{ margin: 0 }}>
          Revisa los movimientos del mes y programa la próxima transferencia. Nada de
          este texto sabe qué marca está puesta: toma familia, tamaño e interlineado
          de los roles de tipografía.
        </p>
        <span
          style={{
            color: 'var(--df-fg-muted)',
            fontSize: 'var(--df-text-body-sm-font-size)',
            lineHeight: 'var(--df-text-body-sm-line-height)',
          }}
        >
          Actualizado hace 4 minutos
        </span>
      </div>

      <DCard>
        <DCard.Header>Cuenta corriente</DCard.Header>
        <DCard.Body>
          <span
            style={{
              fontSize: 'var(--df-text-heading-3-font-size)',
              fontFamily: 'var(--df-text-heading-font-family)',
              fontWeight: 'var(--df-text-heading-font-weight)',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            $1.240.500
          </span>
          <span style={{ color: 'var(--df-fg-muted)' }}>•••• 4821</span>
          <DProgress currentValue={62} />
        </DCard.Body>
        <DCard.Footer>
          <DButton variant="link" color="primary" size="sm" text="Ver detalle" />
        </DCard.Footer>
      </DCard>

      <DTabs
        ariaLabel="Movimientos"
        defaultSelected="a"
        variant="underline"
        options={[
          { tab: 'a', label: 'Transferir' },
          { tab: 'b', label: 'Historial' },
        ]}
      >
        <DTabs.Tab tab="a">
          <div style={{ display: 'grid', gap: 'var(--df-size-4)', paddingBlockStart: 'var(--df-size-4)' }}>
            <DInput
              label="Monto"
              value={amount}
              onChange={setAmount}
              iconStart="DollarSign"
              hint="Disponible: $1.240.500"
            />
            <div style={{ display: 'flex', gap: 'var(--df-size-2)', flexWrap: 'wrap' }}>
              <DButton color="primary" text="Transferir" />
              <DButton color="secondary" variant="outline" text="Cancelar" />
              <DButton color="primary" variant="soft" text="Programar" />
            </div>
          </div>
        </DTabs.Tab>
        <DTabs.Tab tab="b">
          <div style={{ paddingBlockStart: 'var(--df-size-4)' }}>
            <DListGroup>
              <DListGroup.Item iconStart="ArrowUpRight" iconEnd="ChevronRight" action>
                Ana Lopez · $120.000
              </DListGroup.Item>
              <DListGroup.Item iconStart="ArrowDownLeft" iconEnd="ChevronRight" action active>
                Sueldo · $980.000
              </DListGroup.Item>
            </DListGroup>
          </div>
        </DTabs.Tab>
      </DTabs>

      <DAlert color="info">Tu clave vence en 5 días.</DAlert>

      <div style={{
        display: 'flex', gap: 'var(--df-size-2)', flexWrap: 'wrap', alignItems: 'center',
      }}
      >
        <DChip color="primary" text="Favorito" icon="Star" />
        <DChip color="warning" text="Pendiente" icon="Clock" />
        <DIcon icon="Heart" color="primary" size="24px" hasCircle />
        <DInputCheck
          type="checkbox"
          id={`${idPrefix}-check`}
          label="Guardar destinatario"
          checked
        />
      </div>
    </div>
  );
}

/** The two colours of a contrast pair, as the eye sees them. */
function Pair({ fg, bg }: { fg: string; bg: string }) {
  return (
    <span
      aria-hidden
      style={{
        display: 'inline-block',
        minWidth: '2.5rem',
        padding: '0 0.35rem',
        textAlign: 'center',
        background: bg,
        color: fg,
        border: '1px solid var(--df-border-default)',
        borderRadius: 'var(--df-shape-control-sm)',
      }}
    >
      Aa
    </span>
  );
}

/**
 * The semantic palette, resolved for one mode.
 *
 * The swatches are the values `paintedColor` read off a probe inside an
 * element carrying this mode — so they are what the panel above is built from,
 * not a second list that has to be kept in step with it.
 */
const PALETTE_ROWS: Array<{ label: string; tokens: string[] }> = [
  { label: 'ground', tokens: ['bg-canvas', 'bg-surface', 'bg-sunken', 'bg-muted', 'bg-inverse'] },
  { label: 'text', tokens: ['fg-default', 'fg-muted', 'fg-subtle', 'fg-link'] },
  {
    label: 'primary',
    tokens: [
      'role-primary-subtle', 'role-primary-border', 'role-primary-base',
      'role-primary-base-hover', 'role-primary-emphasis', 'role-primary-on-base',
    ],
  },
  { label: 'line', tokens: ['border-muted', 'border-default', 'border-strong', 'focus-ring'] },
];

function ModePalette({ mode, nonce }: { mode: 'light' | 'dark'; nonce: string }) {
  const probe = useRef<HTMLDivElement>(null);

  const rows = useComputed(
    () => PALETTE_ROWS.map((row) => ({
      label: row.label,
      swatches: row.tokens.map((token) => ({
        token,
        value: paintedColor(probe.current, token),
      })),
    })),
    [mode, nonce],
  );

  return (
    <div style={{ display: 'grid', gap: 'var(--df-size-2)' }}>
      <div ref={probe} data-df-theme={mode} style={{ display: 'none' }} />
      <strong style={{ textTransform: 'capitalize' }}>{mode}</strong>
      {(rows ?? []).map((row) => (
        <div key={row.label} style={{ display: 'grid', gap: 'var(--df-size-1)' }}>
          <Mono>{row.label}</Mono>
          <div style={{ display: 'flex', gap: '2px' }}>
            {row.swatches.map((swatch) => (
              <span
                key={swatch.token}
                title={`${cssVar(swatch.token)} = ${swatch.value}`}
                style={{
                  flex: 1,
                  height: '2.25rem',
                  background: swatch.value,
                  border: '1px solid var(--df-border-default)',
                  borderRadius: 'var(--df-shape-control-sm)',
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * How much of the system this brand actually moves.
 *
 * Worth printing, because the interesting number is small and the page is
 * large. Four seeds become 44 committed palette steps through `buildRamp`;
 * everything else is one declaration per role. A reader who only sees the
 * result has no way to tell whether that took fifty lines or five hundred.
 */
function Tally({ brand, counts }: { brand: Brand; counts: ReturnType<typeof tally> }) {
  if (brand.id === 'dynamic') return null;

  const chip = (label: string, value: string) => (
    <span
      key={label}
      style={{
        display: 'inline-flex',
        gap: 'var(--df-size-2)',
        alignItems: 'baseline',
        padding: 'var(--df-size-1) var(--df-size-3)',
        background: 'var(--df-bg-surface)',
        border: '1px solid var(--df-border-default)',
        borderRadius: 'var(--df-shape-control)',
        fontSize: 'var(--df-text-body-sm-font-size)',
      }}
    >
      <strong style={{ fontFamily: MONO }}>{value}</strong>
      <span style={{ color: 'var(--df-fg-muted)' }}>{label}</span>
    </span>
  );

  return (
    <div style={{ display: 'grid', gap: 'var(--df-size-3)', maxWidth: '70ch' }}>
      <div style={{ display: 'flex', gap: 'var(--df-size-2)', flexWrap: 'wrap' }}>
        {chip(`seeds → ${counts.primitives} pasos de paleta`, String(counts.families))}
        {chip('roles semánticos', String(counts.semantic))}
        {counts.groups.map((g) => chip(g.label, String(g.count)))}
      </div>

      <div style={{ display: 'grid', gap: 'var(--df-size-1)' }}>
        {Object.entries(brand.seeds).map(([family, seed]) => (
          <div
            key={family}
            style={{
              display: 'flex', gap: 'var(--df-size-2)', alignItems: 'center', flexWrap: 'wrap',
            }}
          >
            <span
              aria-hidden
              style={{
                width: '1rem',
                height: '1rem',
                background: seed,
                borderRadius: 'var(--df-shape-control-sm)',
                border: '1px solid var(--df-border-strong)',
              }}
            />
            <Mono>{`color.${family}.500 = ${seed}`}</Mono>
            <span style={{ color: 'var(--df-fg-muted)', fontSize: 'var(--df-text-body-xs-font-size)' }}>
              {FAMILY_ROLE[family] ?? 'decorative'}
            </span>
          </div>
        ))}
      </div>

      {brand.fonts && (
        <div style={{ display: 'grid', gap: 'var(--df-size-1)' }}>
          <span style={{ fontFamily: 'var(--df-text-heading-font-family)', fontSize: 'var(--df-text-heading-5-font-size)' }}>
            {`Títulos — ${brand.fonts.heading.split(',')[0].replace(/"/g, '')}`}
          </span>
          <span style={{ fontFamily: 'var(--df-text-body-font-family)' }}>
            {`Cuerpo — ${brand.fonts.body.split(',')[0].replace(/"/g, '')}`}
          </span>
        </div>
      )}
    </div>
  );
}

/**
 * The gate, run against the document rather than against `tokens/`.
 *
 * `npm run tokens:validate` checks these pairs in Node, for Dynamic's own
 * values, and fails the build. It cannot check a client's override, because
 * the override does not exist when CI runs — which is exactly the gap the
 * token contract names: "contrast is not re-checked at runtime. Your values
 * are yours to verify." This is that verification, and it is eleven lines of
 * code, which is the point: an agent can run it on its own output.
 */
function Gate({ mode, nonce }: { mode: 'light' | 'dark'; nonce: string }) {
  const probe = useRef<HTMLDivElement>(null);

  const rows = useComputed(() => CONTRAST_PAIRS.map((pair) => {
    const fg = paintedColor(probe.current, pair.fg);
    const bg = paintedColor(probe.current, pair.bg);
    return {
      pair, fg, bg, value: ratio(fg, bg),
    };
  }), [mode, nonce]);

  const failures = (rows ?? []).filter((row) => row.value !== null && row.value < row.pair.min);

  return (
    <div style={{ display: 'grid', gap: 'var(--df-size-2)' }}>
      <div ref={probe} data-df-theme={mode} style={{ display: 'none' }} />
      <div style={{ display: 'flex', gap: 'var(--df-size-2)', alignItems: 'center' }}>
        <strong style={{ textTransform: 'capitalize' }}>{mode}</strong>
        <DBadge
          color={failures.length ? 'danger' : 'success'}
          variant="soft"
          text={failures.length
            ? `${failures.length} de ${CONTRAST_PAIRS.length} bajo el umbral`
            : `${CONTRAST_PAIRS.length} pares OK`}
        />
      </div>
      <table style={{ borderCollapse: 'collapse', fontFamily: MONO, fontSize: 'var(--df-text-body-xs-font-size)' }}>
        <tbody>
          {(rows ?? []).map((row) => {
            const failed = row.value !== null && row.value < row.pair.min;
            return (
              <tr
                key={`${row.pair.fg}/${row.pair.bg}`}
                style={{ color: failed ? 'var(--df-role-danger-emphasis)' : 'var(--df-fg-muted)' }}
              >
                <td style={{ padding: '0.15rem 0.5rem 0.15rem 0' }}>{failed ? '✗' : '✓'}</td>
                <td style={{ padding: '0.15rem 0.5rem 0.15rem 0' }}>
                  {`${row.pair.fg} / ${row.pair.bg}`}
                </td>
                <td style={{ padding: '0.15rem 0.5rem 0.15rem 0' }}>
                  <Pair fg={row.fg} bg={row.bg} />
                </td>
                <td style={{ padding: '0.15rem 0.5rem 0.15rem 0', textAlign: 'right' }}>
                  {row.value === null ? '—' : `${row.value.toFixed(2)}:1`}
                </td>
                <td style={{ padding: '0.15rem 0', textAlign: 'right' }}>{`min ${row.pair.min}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function Studio() {
  const [brandId, setBrandId] = useState('araucaria');
  const [remedy, setRemedy] = useState(false);

  const brand: Brand = BRANDS.find((item) => item.id === brandId) ?? BRANDS[0];
  const css = useMemo(() => brandCss(brand, remedy), [brand, remedy]);

  useStylesheet('df-brand-demo', css);
  useWebFont(brand.fonts?.href);

  const counts = useMemo(() => tally(brand), [brand]);

  /* What the readers below key their re-measurement on. The sheet is replaced
     wholesale per brand, so one string covers every value it could change. */
  const nonce = `${brand.id}:${remedy}`;

  const pick = useCallback((id: string) => {
    setBrandId(id);
    setRemedy(false);
  }, []);

  return (
    <Page>
      <Section
        title="Four brands, a few dozen tokens each"
        hint={(
          <>
            Everything below changes with the picker, in both colour modes at once — colour,
            type, radius, border weight, shadow and motion. Nothing in the component tree
            knows which brand is on, and no component takes a brand prop.
          </>
        )}
      >
        <div style={{ display: 'flex', gap: 'var(--df-size-2)', flexWrap: 'wrap' }}>
          {BRANDS.map((item) => (
            <DButton
              key={item.id}
              text={item.name}
              color={item.id === brand.id ? 'primary' : 'secondary'}
              variant={item.id === brand.id ? 'solid' : 'outline'}
              onClick={() => pick(item.id)}
            />
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gap: 'var(--df-size-2)',
            padding: 'var(--df-size-4)',
            background: 'var(--df-bg-muted)',
            borderRadius: 'var(--df-shape-surface)',
            maxWidth: '70ch',
          }}
        >
          <span style={{ color: 'var(--df-fg-muted)', fontSize: 'var(--df-text-body-xs-font-size)' }}>
            El brief
          </span>
          <p style={{ margin: 0 }}>{brand.brief}</p>
          <span style={{ color: 'var(--df-fg-muted)', fontSize: 'var(--df-text-body-sm-font-size)' }}>
            {brand.note}
          </span>
        </div>

        <Tally brand={brand} counts={counts} />
      </Section>

      <>
        <Section
          title="Applied, both modes, on one page"
          hint={(
            <>
              Two panels, one document, one theme. The mode is
              <Mono>{' data-df-theme '}</Mono>
              on the panel — not on
              <Mono>{' <html> '}</Mono>
              — and every layer follows it, down to the card fill and the native checkbox,
              because the token layer emits each mode-varying value as a
              <Mono>{' light-dark() '}</Mono>
              pair and the browser resolves it against the panel&apos;s own
              <Mono>{' color-scheme'}</Mono>
              .
            </>
          )}
        >
          <div
            style={{
              display: 'grid',
              gap: 'var(--df-size-4)',
              gridTemplateColumns: 'repeat(auto-fit, minmax(22rem, 1fr))',
            }}
          >
            <Product mode="light" idPrefix={`${brand.id}-light`} />
            <Product mode="dark" idPrefix={`${brand.id}-dark`} />
          </div>
        </Section>

        <Section
          title="The palette behind both panels"
          hint="No second theme and no dark-mode palette: the dark column is the same two
            seeds, mapped to different steps of the same ramps. Each swatch is read back by
            painting the token into a probe and measuring what came out, which is the only
            way to see which half of a light-dark() pair applied."
        >
          <div
            style={{
              display: 'grid',
              gap: 'var(--df-size-6)',
              gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
            }}
          >
            <ModePalette mode="light" nonce={nonce} />
            <ModePalette mode="dark" nonce={nonce} />
          </div>
        </Section>

        <Section
          title="The gate, run on the result"
          hint={(
            <>
              Read back out of the live document with
              <Mono> getComputedStyle</Mono>
              {' '}
              and measured with the same
              <Mono> contrastRatio </Mono>
              that
              <Mono> npm run tokens:validate </Mono>
              fails the build with. CI checks Dynamic&apos;s own values; a client&apos;s
              override only exists at runtime, so this is where it gets checked.
            </>
          )}
        >
          {brand.remedy && (
            <DAlert color={remedy ? 'success' : 'warning'}>
              <div style={{ display: 'grid', gap: 'var(--df-size-2)' }}>
                <span>{brand.remedy.why}</span>
                <span>
                  <DButton
                    size="sm"
                    variant={remedy ? 'solid' : 'outline'}
                    color={remedy ? 'success' : 'warning'}
                    text={remedy ? 'Remedio aplicado' : 'Aplicar el remedio'}
                    onClick={() => setRemedy((value) => !value)}
                  />
                </span>
              </div>
            </DAlert>
          )}
          <div
            style={{
              display: 'grid',
              gap: 'var(--df-size-6)',
              gridTemplateColumns: 'repeat(auto-fit, minmax(22rem, 1fr))',
            }}
          >
            <Gate mode="light" nonce={nonce} />
            <Gate mode="dark" nonce={nonce} />
          </div>
        </Section>
      </>

      <Section
        title="What the agent writes"
        hint={(
          <>
            Two declarations and a
            <Mono>{' <link> '}</Mono>
            , for a consumer with no build step. The browser derives the other twenty steps
            from
            <Mono> dynamic.live-ramp.css</Mono>
            .
          </>
        )}
      >
        <Code>{seedCss(brand)}</Code>
      </Section>

      <Section
        title="What this page is actually running"
        hint="The same values, expanded ahead of time. The live-ramp sheet needs a real
          stylesheet link and this page swaps brands on a click, so the expansion happens in
          JavaScript — with buildRamp, the build's own function. The string below is injected
          into a <style> element and printed here: one value, used twice, so what is on screen
          cannot drift from what is painting the page."
      >
        <Code maxHeight="24rem">{css}</Code>
      </Section>
    </Page>
  );
}

/* ------------------------------------------------------------------ *
 * 4. The workflow
 * ------------------------------------------------------------------ */

function Workflow() {
  return (
    <Page>
      <Section
        title="1 — What the agent reads"
        hint={(
          <>
            One file.
            <Mono> dynamic.tokens.json</Mono>
            {' '}
            is published per release and is self-describing: no CSS to parse, no stylesheet to
            reverse-engineer, no Sass to evaluate.
          </>
        )}
      >
        <Code>
          {`https://cdn.dynamicframework.dev/assets/{semver}/ui-react/tokens/dynamic.tokens.json

Three guarantees it can rely on:

  A value is a literal OR a {dotted.path} alias. There is no third form —
  no calc(), no rgba(var(…)), no Sass — so the graph resolves with a
  lookup and a loop.

  References point DOWN: component -> semantic -> primitive. An override
  propagates upward for free, by construction.

  Every semantic token exists in BOTH modes. CI fails otherwise, so there
  is no partial theme where one mode's text lands on the other's ground.`}
        </Code>
      </Section>

      <Section
        title="2 — What it decides"
        hint="Two hexes is the floor and usually the ceiling. Everything past that is a
          deliberate departure from the system's own proportions, not a requirement of
          rebranding."
      >
        <Code>
          {`{
  "seeds":  { "blue": "#0a7d4b", "neutral": "#6f6a62" },
  "shape":  { "control": "{radius.lg}", "surface": "{radius.xl}" },
  "type":   { "heading.font-family": "Georgia, serif" }
}

"blue" is a SLOT, not a description. role.primary.* aliases {color.blue.*},
so re-seeding that family is how the brand colour arrives — the family name
is the system's internal label for the primary ramp. TOKENS_CONTRACT.md
makes the same move with the same green.

The alternative, when a brand wants primary and link to be different hues:
leave the family alone and repoint the role.

  :root { --df-role-primary-base: var(--df-color-emerald-500); }`}
        </Code>
      </Section>

      <Section
        title="3 — What it must not do"
        hint="Three rules, each of which produced a real bug before it was a rule."
      >
        <Code>
          {`Do not write a literal into the Semantic layer.
    --df-role-primary-base: #0a7d4b;          <- breaks mode switching
    --df-role-primary-base: var(--df-color-blue-500);   <- correct

  A literal cannot differ between light and dark, so a hardcoded semantic
  value paints the light-mode colour on the dark-mode ground.

Do not override one ramp step and assume the family followed.
    :root { --df-color-blue-500: #0a7d4b; }

  Steps 25-900 keep their old values unless dynamic.live-ramp.css is
  linked or the ramp is regenerated. Half-migrated ramps are the single
  most common rebrand bug.

Do not trust a palette it has not measured.
    Contrast is asserted in CI for Dynamic's values only. The pair list is
    in scripts/tokens/validate.mjs — 54 pairs across eight roles.`}
        </Code>
      </Section>

      <Section
        title="4 — What it verifies"
        hint={(
          <>
            The gate in the
            <Mono> A theme, applied </Mono>
            story, as code. Eleven lines, no dependency on the library, and it runs against
            whatever the browser computed — which is the only thing that can be checked once
            a client override is in play.
          </>
        )}
      >
        <Code>
          {`const PAIRS = [
  ['--df-fg-default', '--df-bg-canvas', 4.5],
  ['--df-role-primary-on-base', '--df-role-primary-base', 4.5],
  ['--df-focus-ring', '--df-bg-surface', 3.0],
  // … scripts/tokens/validate.mjs holds the full list
];

const read = (el, name) => getComputedStyle(el).getPropertyValue(name).trim();

for (const [fg, bg, min] of PAIRS) {
  const ratio = contrastRatio(read(el, fg), read(el, bg));
  if (ratio < min) report(\`\${fg} on \${bg}: \${ratio.toFixed(2)}:1 < \${min}\`);
}

A custom property's computed value is its specified value with every var()
already substituted, so this reads the hex at the end of the alias chain —
including the active mode. The browser resolved the graph; nothing needs to
resolve it again.`}
        </Code>
      </Section>

      <Section
        title="5 — Where it lands"
        hint="The same seeds drive the stylesheet, the Sass variables, the TypeScript token
          names and the Figma Variables, because all four are generated from tokens/."
      >
        <Code>
          {`tokens/                      authored — the source of truth
  primitives/color.json      GENERATED from one seed per family
  semantic/color.light.json  alias-only
  semantic/color.dark.json   same keys, enforced
  component/*.json           globbed

npm run tokens
  -> dist/tokens/dynamic.tokens.json    the DTCG contract
  -> dist/tokens/dynamic.tokens.css     custom properties, both modes
  -> dist/tokens/dynamic.tokens.scss    Sass variables
  -> dist/tokens/dynamic.tokens.ts      names, types, primitive literals
  -> dist/css/dynamic.live-ramp.css     the runtime ramp

npm run tokens:figma:push -- --write    upserts by name, never deletes`}
        </Code>
      </Section>
    </Page>
  );
}

/* ------------------------------------------------------------------ */

const meta: Meta = {
  title: 'Dynamic 3.x/Tokens & AI Theming',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The design system's values live in \`tokens/\` as DTCG JSON — the community's
standard format — and the CSS, the Sass variables, the TypeScript types, the
published contract and the Figma Variables are all generated from it. Nothing
else is authored.

That inversion is what makes a theme something an agent can write. In 2.x the
values were Sass, the JSON was a *report about* the Sass produced by compiling
two SCSS harnesses and parsing the output, and rebranding meant editing Sass and
rebuilding. There was a published \`token-overrides.json\` whose entire purpose
was to describe the override surface so an agent would not have to read a
1.29 MB stylesheet to infer it. That artefact is gone, because there is nothing
left to infer.

**The claim these four stories make, in order**

1. **Three layers** — component aliases semantic aliases primitive, references
   only ever point down, so one override propagates upward for free.
2. **One seed, eleven steps** — a family is generated in OKLCh from a single
   hex, and \`dynamic.live-ramp.css\` lets the browser do the same derivation
   with no build step.
3. **A theme, applied** — four brands, two hexes each, both colour modes, live.
   One of them fails the contrast gate on purpose.
4. **The workflow** — what an agent reads, decides, must not do, and verifies.

**Nothing on these pages is an illustration of the pipeline.** The ramps are
computed by \`buildRamp\` from \`scripts/tokens/lib/ramps.mjs\`, the same function
that writes \`tokens/primitives/color.json\`. The contrast numbers come from the
same \`contrastRatio\` that \`npm run tokens:validate\` fails the build with. The
CSS printed under each theme is the string injected into the page.

See [\`TOKENS_CONTRACT.md\`](https://github.com/modyo/dynamic-framework) for what
a consumer may rely on, and \`tokens/README.md\` for the authoring rules.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ThreeLayers: Story = { name: 'The three layers', render: () => <Layers /> };
export const SeedRamp: Story = { name: 'One seed, eleven steps', render: () => <Ramp /> };
export const ThemeApplied: Story = { name: 'A theme, applied', render: () => <Studio /> };
export const AgentWorkflow: Story = { name: 'The agent workflow', render: () => <Workflow /> };
