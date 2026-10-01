import type { Meta, StoryObj } from '@storybook/react-vite';

import Demo from './Demo';
import { families } from './manifest';

/**
 * Colour utilities arranged by ROLE rather than by property.
 *
 * The generated reference lists `text-*`, `bg-*` and `border-*` as three
 * families, which is how they are built. It is not how they are used: you
 * reach for "the danger colour" and then decide whether it is going on text, a
 * fill or an edge. This page is that view, assembled from the same manifest.
 */

const ROLES = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'neutral', 'inverse'];

/** The roles that carry a numbered scale. `inverse` has none — see below. */
const STEPPED = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'neutral'];
const STEPS = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

/** Every palette ramp, read from the build so a new seed shows up here. */
const HUES: string[] = [];
(families.find((f) => f.name === 'background-hue')?.rules ?? []).forEach((rule) => {
  const hue = rule.name.replace(/^bg-/, '').replace(/-\d+$/, '');
  if (!HUES.includes(hue)) HUES.push(hue);
});

const namesIn = (family: string) => (families.find((f) => f.name === family)?.rules ?? [])
  .map((rule) => rule.name);

function Swatch({ className, label }: { className: string; label: string }) {
  return (
    <div className="df-flex df-flex-col df-gap-1">
      <span
        className={className}
        style={{ display: 'block', blockSize: '2.5rem', borderRadius: 'var(--df-shape-control)' }}
      />
      <code className="df-fs-caption df-text-muted">{label}</code>
    </div>
  );
}

function Roles() {
  const bg = namesIn('background');
  const text = namesIn('text-colour');
  const border = namesIn('border-colour');

  return (
    <div className="df-p-6">
      <h2 className="df-mb-1">By role</h2>
      <p className="df-text-muted df-mb-6">
        {'Each role answers one question — what does this MEAN — and then the '}
        {'property decides where it lands. `-subtle` is the quiet fill meant to '}
        {'carry dark text; the plain one is the emphatic fill meant to carry '}
        `df-text-on-emphasis`.
      </p>

      <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 1rem' }}>
        <thead>
          <tr className="df-text-muted df-fs-caption" style={{ textAlign: 'start' }}>
            <th style={{ textAlign: 'start' }}>role</th>
            <th style={{ textAlign: 'start' }}>bg</th>
            <th style={{ textAlign: 'start' }}>bg -subtle</th>
            <th style={{ textAlign: 'start' }}>text</th>
            <th style={{ textAlign: 'start' }}>border</th>
          </tr>
        </thead>
        <tbody>
          {ROLES.map((role) => (
            <tr key={role}>
              <td><code>{role}</code></td>
              <td style={{ inlineSize: '10rem' }}>
                {bg.includes(`bg-${role}`) && (
                  <Swatch className={`df-bg-${role}`} label={`df-bg-${role}`} />
                )}
              </td>
              <td style={{ inlineSize: '10rem' }}>
                {bg.includes(`bg-${role}-subtle`) && (
                  <Swatch className={`df-bg-${role}-subtle`} label={`df-bg-${role}-subtle`} />
                )}
              </td>
              <td style={{ inlineSize: '12rem' }}>
                {text.includes(`text-${role}`) && (
                  <>
                    <span className={`df-text-${role}`}>Almost before we knew it</span>
                    <br />
                    <code className="df-fs-caption df-text-muted">{`df-text-${role}`}</code>
                  </>
                )}
              </td>
              <td style={{ inlineSize: '10rem' }}>
                {border.includes(`border-${role}`) && (
                  <Swatch
                    className={`df-border-${role} df-border-2 df-bg-surface`}
                    label={`df-border-${role}`}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="df-mt-8 df-mb-1">Surfaces and text, by depth</h2>
      <p className="df-text-muted df-mb-4">
        {'These carry no meaning — they are the page stack. `canvas` is the page, '}
        `surface` sits on it, `raised` sits on that.
      </p>
      <div className="df-grid df-grid-cols-2 df-md:grid-cols-4 df-gap-4">
        {bg.filter((name) => !ROLES.some((role) => name.startsWith(`bg-${role}`))).map((name) => (
          <Swatch
            key={name}
            className={`df-${name} df-border-1 df-border-muted`}
            label={`df-${name}`}
          />
        ))}
      </div>

      <div className="df-mt-6 df-flex df-flex-col df-gap-2">
        {text.filter((name) => !ROLES.some((role) => name === `text-${role}`)).map((name) => (
          <div key={name} className="df-flex df-gap-3 df-items-baseline">
            <span className={`df-${name}`}>Almost before we knew it</span>
            <code className="df-fs-caption df-text-muted">{`df-${name}`}</code>
          </div>
        ))}
      </div>
    </div>
  );
}

const meta: Meta = {
  title: 'Design System/Utilities/Colors',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

/** Every colour utility, arranged the way you reach for one. */
export const ByRole: Story = { render: () => <Roles /> };

/**
 * The two prefixes colour DOES take.
 *
 * There is no breakpoint prefix on any colour family — `df-md:text-primary`
 * matches no rule. See the note at the bottom of this page.
 */
export const HoverAndDark: Story = {
  render: () => (
    <div className="df-p-6">
      <Demo
        title="hover:"
        note="The base and the variant sit side by side; the prefix is part of the class name, not a second class."
        markup={'<a class="df-text-link df-hover:text-primary">Read the terms</a>'}
      >
        <div className="df-flex df-gap-6 df-items-center">
          <a href="#hover" className="df-text-link df-hover:text-primary">Read the terms</a>
          <span className="df-bg-surface df-hover:bg-primary-subtle df-border-1 df-border-muted df-rounded-control df-p-3">
            df-hover:bg-primary-subtle
          </span>
          <span className="df-border-2 df-border-muted df-hover:border-primary df-rounded-control df-p-3">
            df-hover:border-primary
          </span>
        </div>
      </Demo>

      <Demo
        title="dark:"
        note="Applies to the OS setting AND to an explicit data-df-theme, so a toggle wins in both directions. Switch the theme in the toolbar."
        markup={'<div class="df-bg-surface df-dark:bg-inverse df-text-default df-dark:text-inverse">…</div>'}
      >
        <div className="df-flex df-gap-6 df-items-center">
          <span className="df-bg-surface df-dark:bg-primary-subtle df-border-1 df-border-muted df-rounded-control df-p-3">
            df-dark:bg-primary-subtle
          </span>
          <span className="df-text-default df-dark:text-link df-p-3">
            df-dark:text-link
          </span>
        </div>
      </Demo>

      <Demo
        title="They do not stack"
        note={(
          <>
            {'One prefix per class. There is no '}
            <code>df-dark</code>
            <code>:hover:bg-muted</code>
            {' — the build emits the two as separate variants, not a matrix of both. '}
            {'For a hover that differs by theme, give the element a '}
            <code>dark:</code>
            {' base and let the single hover sit on top of it.'}
          </>
        )}
        markup={'<span class="df-bg-surface df-dark:bg-inverse df-hover:bg-muted">…</span>'}
      >
        <span className="df-bg-surface df-dark:bg-inverse df-hover:bg-muted df-border-1 df-border-muted df-rounded-control df-p-3" style={{ display: 'inline-block' }}>
          Hover, in either theme
        </span>
      </Demo>

      <div className="df-bg-warning-subtle df-p-4 df-rounded-control">
        <strong>No breakpoint prefix on colour.</strong>
        {' '}
        {'`text-colour`, `background` and `border-colour` are not responsive, so '}
        <code>df-md:text-primary</code>
        {' matches no rule — it is not an error, it is a class name with nothing behind it. '}
        The layout, spacing and font-size families are the responsive ones.
      </div>
    </div>
  ),
};

/**
 * The numbered scale.
 *
 * `bg-primary` and `bg-primary-subtle` are the two shades the ROLE vocabulary
 * exposes, and for a component that is right — a button does not need eleven
 * blues. For a page it is not enough: there is nothing between `subtle` and
 * `base`.
 */
export const Steps: Story = {
  render: () => (
    <div className="df-p-6">
      <h2 className="df-mb-1">Steps</h2>
      <p className="df-text-muted df-mb-6">
        {'Eleven steps per role, for '}
        <code>bg</code>
        {', '}
        <code>text</code>
        {' and '}
        <code>border</code>
        . They go through the role, not straight at the palette, so repointing
        a role moves every numbered class with it.
      </p>

      {STEPPED.map((role) => (
        <section key={role} className="df-mb-6">
          <h3 className="df-mb-2">{role}</h3>
          <div className="df-flex df-flex-wrap df-gap-2">
            {STEPS.map((step) => (
              <div key={step} className="df-flex df-flex-col df-gap-1">
                <span
                  className={`df-bg-${role}-${step} df-border-1 df-border-muted`}
                  style={{
                    display: 'block', inlineSize: '4rem', blockSize: '2.5rem', borderRadius: 'var(--df-shape-control)',
                  }}
                />
                <code className="df-fs-caption df-text-muted">{step}</code>
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="df-bg-warning-subtle df-p-4 df-rounded-control df-mb-4">
        <strong>A step is not a state.</strong>
        {' A number names a position on a scale, so '}
        <code>df-bg-primary-100</code>
        {' is the same pale blue on a dark page as on a light one — it does not flip, and there is no '}
        <code>dark:</code>
        {' variant for it. '}
        <code>df-bg-primary-subtle</code>
        {' is the one that adapts. Reach for the role when the colour means something, and for the step when you just want that shade.'}
      </div>

      <div className="df-bg-muted df-p-4 df-rounded-control">
        <strong>No steps on `inverse`.</strong>
        {' It is neutral-900 in light and neutral-25 in dark — inverted by definition — so a numbered step has no stable meaning for it.'}
      </div>
    </div>
  ),
};

/**
 * The palette itself, by hue.
 *
 * These reach straight into the primitives, which every other utility is
 * forbidden from doing — and that is right here. There is no role called pink
 * and there should not be; the author has asked for that hue, and routing it
 * through an invented semantic would be indirection pointing nowhere.
 *
 * Every ramp goes through the same OKLCh generator, so `slate-700` sits at the
 * same perceptual step as `blue-700`. That is not true of Bootstrap's or
 * Tailwind's own palettes and it is the reason the generator exists.
 */
export const Palette: Story = {
  render: () => (
    <div className="df-p-6">
      <h2 className="df-mb-1">Palette</h2>
      <p className="df-text-muted df-mb-6">
        {`${HUES.length} ramps, eleven steps each, for `}
        <code>bg</code>
        {', '}
        <code>text</code>
        {' and '}
        <code>border</code>
        .
      </p>

      {HUES.map((hue) => (
        <section key={hue} className="df-mb-5">
          <div className="df-flex df-gap-2 df-items-baseline df-mb-2">
            <h3 className="df-m-0">{hue}</h3>
            <code className="df-fs-caption df-text-muted">{`df-bg-${hue}-500`}</code>
          </div>
          <div className="df-flex df-flex-wrap df-gap-1">
            {STEPS.map((step) => (
              <div key={step} className="df-flex df-flex-col df-gap-1">
                <span
                  className={`df-bg-${hue}-${step} df-border-1 df-border-muted`}
                  style={{
                    display: 'block', inlineSize: '3.5rem', blockSize: '2.25rem', borderRadius: 'var(--df-shape-control)',
                  }}
                />
                <code className="df-fs-caption df-text-subtle">{step}</code>
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="df-bg-warning-subtle df-p-4 df-rounded-control">
        <strong>These are not for UI state.</strong>
        {' A chip that means "error" takes '}
        <code>df-bg-danger-subtle</code>
        {', which follows a rebrand and flips in dark mode. One that takes '}
        <code>df-bg-rose-100</code>
        {' does neither. Reach for a hue when you want that colour — illustration, '}
        category coding, a marketing page — and for a role when the colour means something.
      </div>
    </div>
  ),
};
