import type { Meta, StoryObj } from '@storybook/react-vite';

import { breakpoints, families } from './manifest';

/**
 * The three prefixes, and — more usefully — which families accept each.
 *
 * The list is read from the build, so a family that loses or gains a variant
 * moves in this table on the next `npm run css`. Writing `df-dark:p-4` when
 * `padding` has no dark variant produces nothing and reports nothing, so
 * "which families" is the part worth documenting precisely.
 */

function Column({ title, note, names }: { title: string; note: string; names: string[] }) {
  return (
    <div>
      <h3 className="df-mb-1">{title}</h3>
      <p className="df-text-muted df-fs-body-sm df-mb-3">{note}</p>
      <ul className="df-m-0" style={{ paddingInlineStart: '1.1rem' }}>
        {names.map((name) => <li key={name}><code>{name}</code></li>)}
      </ul>
    </div>
  );
}

function Variants() {
  const hover = families.filter((f) => f.hover).map((f) => f.name);
  const dark = families.filter((f) => f.dark).map((f) => f.name);
  const responsive = families.filter((f) => f.responsive).map((f) => f.name);

  return (
    <div className="df-p-6 df-flex df-flex-col df-gap-8">
      <section>
        <h2 className="df-mb-2">Live</h2>
        <div className="df-flex df-gap-4 df-flex-wrap">
          <span className="df-bg-surface df-hover:bg-primary-subtle df-p-4 df-rounded-control df-border-1 df-border-muted">
            df-hover:bg-primary-subtle
          </span>
          <span className="df-text-default df-dark:text-link df-p-4 df-rounded-control df-border-1 df-border-muted">
            df-dark:text-link
          </span>
          <span className="df-bg-muted df-p-2 df-md:p-8 df-rounded-control">
            df-md:p-8
          </span>
        </div>
        <p className="df-text-muted df-fs-body-sm df-mt-2">
          {'The third is padding, not a colour, and that is the point: '}
          <code>background</code>
          {' takes no breakpoint prefix, so '}
          <code>df-md:bg-success-subtle</code>
          {' matches no rule. This page was written with that class in it; '}
          <code>css:usage</code>
          {' failed the build.'}
        </p>
      </section>

      <div className="df-grid df-grid-cols-1 df-md:grid-cols-3 df-gap-6">
        <Column
          title="hover:"
          note="Applies on :hover. Only where hovering a thing should change it — spacing and layout are not hover states."
          names={hover}
        />
        <Column
          title="dark:"
          note="Applies in dark mode, both the OS setting and an explicit data-df-theme. Colour only: a shadow and a fill change in the dark, a margin does not."
          names={dark}
        />
        <Column
          title={breakpoints.map((b) => `${b.name}:`).join(' ')}
          note="Applies from that breakpoint up. Layout families only, and they are min-width: a class with no prefix is the small-screen case."
          names={responsive}
        />
      </div>
    </div>
  );
}

const meta: Meta = {
  title: 'Design System/Utilities/Variants',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
\`df-hover:bg-muted\`, \`df-dark:text-inverse\`, \`df-md:grid-cols-3\`.

A prefix is part of the class name, not a separate class: write
\`class="df-bg-surface df-hover:bg-muted"\` and the base and the variant sit
side by side.

**Not every family takes every prefix**, and that is the thing worth checking
before you write one — an unsupported combination is not an error, it is a
class name that matches no rule. The three lists below are read from the
build.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

/** Which families take which prefix, read from the build. */
export const Overview: Story = { render: () => <Variants /> };
