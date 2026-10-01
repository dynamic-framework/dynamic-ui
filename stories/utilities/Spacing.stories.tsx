import type { Meta, StoryObj } from '@storybook/react-vite';

import Demo from './Demo';
import { families } from './manifest';

/**
 * The spacing scale, once, with the sides table beside it.
 *
 * `margin` and `padding` are 441 classes between them, which the generated
 * reference can only list. They are really one 31-step scale times ten side
 * selectors times two properties, and that is three short tables.
 */

const STEPS = (families.find((f) => f.name === 'padding')?.rules ?? [])
  .filter((rule) => /^p-\d+$/.test(rule.name))
  .map((rule) => rule.name.slice(2));

const SIDES: [string, string][] = [
  ['', 'all four'],
  ['x', 'inline — left and right'],
  ['y', 'block — top and bottom'],
  ['t', 'block start'],
  ['b', 'block end'],
  ['s', 'inline start'],
  ['e', 'inline end'],
];

function SpacingScale() {
  return (
    <div className="df-p-6">
      <h2 className="df-mb-1">The scale</h2>
      <p className="df-text-muted df-mb-4">
        {'31 steps, the same ones the design tokens use. The number is the step, '}
        not a pixel value — `4` is `--df-size-4`, which a client can retune.
      </p>

      <div className="df-flex df-flex-col df-gap-1 df-mb-8">
        {STEPS.map((step) => (
          <div key={step} className="df-flex df-gap-3 df-items-center">
            <code className="df-fs-body-xs df-text-muted" style={{ inlineSize: '3rem' }}>{step}</code>
            <span
              className="df-bg-primary"
              style={{
                display: 'block',
                blockSize: '0.75rem',
                inlineSize: `var(--df-size-${step})`,
                borderRadius: '2px',
              }}
            />
            <code className="df-fs-body-xs df-text-subtle">{`var(--df-size-${step})`}</code>
          </div>
        ))}
      </div>

      <h2 className="df-mb-1">The sides</h2>
      <p className="df-text-muted df-mb-4">
        {'`m` is margin, `p` is padding, and the letter after it picks the sides. '}
        {'They are logical: `s` and `e` follow the writing direction, so a layout '}
        built with them works in Arabic without a second stylesheet.
      </p>

      <table style={{ borderCollapse: 'separate', borderSpacing: '0 0.5rem' }}>
        <tbody>
          {SIDES.map(([letter, meaning]) => (
            <tr key={letter || 'all'}>
              <td style={{ paddingInlineEnd: '1.5rem' }}>
                <code>{`df-m${letter}-4`}</code>
                {'  '}
                <code>{`df-p${letter}-4`}</code>
              </td>
              <td className="df-text-muted">{meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="df-mt-8 df-mb-1">Gap</h2>
      <p className="df-text-muted df-mb-4">
        {'`df-gap-N` on a flex or grid container, and `df-gap-x-N` / `df-gap-y-N` '}
        {'per axis. Prefer it to margins between siblings — a gap cannot collapse, '}
        leak out of its container, or need trimming at the ends.
      </p>
      <div className="df-flex df-gap-4 df-bg-muted df-p-4 df-rounded-control" style={{ inlineSize: 'fit-content' }}>
        {[1, 2, 3].map((n) => (
          <span key={n} className="df-bg-raised df-p-4 df-rounded-control">{n}</span>
        ))}
      </div>
      <p className="df-fs-body-xs df-text-muted df-mt-2">
        <code>df-flex df-gap-4</code>
      </p>
    </div>
  );
}

const meta: Meta = {
  title: 'Design System/Utilities/Spacing',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

/** The scale, the side letters, and gap. */
export const Scale: Story = { render: () => <SpacingScale /> };

/**
 * Spacing is one of the responsive families, and the common reason to reach
 * for a prefix: a phone wants tight padding, a desktop wants room.
 */
export const Responsive: Story = {
  render: () => (
    <div className="df-p-6">
      <Demo
        title="Padding that opens up"
        note="The unprefixed class is the phone; each prefix takes over from its breakpoint up."
        markup={'<section class="df-p-3 df-md:p-6 df-lg:p-10">…</section>'}
      >
        <div className="df-p-3 df-md:p-6 df-lg:p-10 df-bg-primary-subtle df-rounded-control">
          <div className="df-bg-raised df-p-3 df-rounded-control">Resize the viewport</div>
        </div>
      </Demo>

      <Demo
        title="A gap that grows"
        markup={'<div class="df-flex df-gap-2 df-lg:gap-8">…</div>'}
      >
        <div className="df-flex df-gap-2 df-lg:gap-8">
          {[1, 2, 3].map((n) => (
            <span key={n} className="df-bg-muted df-p-3 df-rounded-control">{n}</span>
          ))}
        </div>
      </Demo>

      <Demo
        title="Margin on one side only"
        note="The side letters take prefixes too, and they are logical — this is inline start, which follows the writing direction."
        markup={'<p class="df-ms-0 df-md:ms-8">…</p>'}
      >
        <div className="df-bg-muted df-rounded-control" style={{ overflow: 'hidden' }}>
          <p className="df-ms-0 df-md:ms-8 df-my-0 df-bg-raised df-p-3">Indented from md up</p>
        </div>
      </Demo>
    </div>
  ),
};
