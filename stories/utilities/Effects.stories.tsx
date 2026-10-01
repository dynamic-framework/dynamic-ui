import type { Meta, StoryObj } from '@storybook/react-vite';

import Demo from './Demo';
import FamilyTable from './FamilyTable';

const meta: Meta = {
  title: 'Design System/Utilities/Borders & Effects',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Border width, radius, shadow, opacity and z-index.

None of these take a breakpoint prefix — a corner is not rounder on a desktop.
\`shadow\` and \`opacity\` take \`hover:\`, and \`shadow\` takes \`dark:\`, because a
shadow has to be heavier on a dark ground to read at all.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

/** The ones that react to something. */
export const Examples: Story = {
  render: () => (
    <div className="df-p-6">
      <Demo
        title="A card that lifts on hover"
        note="`hover:` is part of the class name, sitting next to its base."
        markup={'<div class="df-shadow-sm df-hover:shadow-lg df-rounded-control df-p-6">…</div>'}
      >
        <div className="df-bg-raised df-shadow-sm df-hover:shadow-lg df-rounded-control df-p-6" style={{ inlineSize: 'fit-content', transition: 'box-shadow .2s' }}>
          Hover me
        </div>
      </Demo>

      <Demo
        title="A shadow that survives dark mode"
        note="`dark:` follows both the OS setting and an explicit `data-df-theme`. Switch the theme in the toolbar."
        markup={'<div class="df-shadow-md df-dark:shadow-lg df-rounded-control df-p-6">…</div>'}
      >
        <div className="df-bg-raised df-shadow-md df-dark:shadow-lg df-rounded-control df-p-6" style={{ inlineSize: 'fit-content' }}>
          Elevated
        </div>
      </Demo>

      <Demo
        title="Dimmed until hovered"
        markup={'<img class="df-opacity-50 df-hover:opacity-100" …>'}
      >
        <div className="df-flex df-gap-3">
          {[1, 2, 3].map((n) => (
            <span
              key={n}
              className="df-bg-primary df-opacity-50 df-hover:opacity-100 df-rounded-control"
              style={{
                display: 'block', inlineSize: '4rem', blockSize: '2.5rem', transition: 'opacity .2s',
              }}
            />
          ))}
        </div>
      </Demo>

      <Demo
        title="Borders draw a colour"
        note={(
          <>
            {'A width utility sets all three: width, style and colour. It used to set only the first two, and CSS initialises '}
            <code>border-color</code>
            {' to '}
            <code>currentcolor</code>
            {' — so the line took the text colour. An explicit colour still wins.'}
          </>
        )}
        markup={'<div class="df-border-1">grey by default</div>\n<div class="df-border-2 df-border-primary">explicit colour wins</div>'}
      >
        <div className="df-flex df-gap-3">
          <span className="df-border-1 df-rounded-control df-p-3">df-border-1</span>
          <span className="df-border-2 df-border-primary df-rounded-control df-p-3">+ df-border-primary</span>
          <span className="df-border-2 df-border-danger df-rounded-control df-p-3">+ df-border-danger</span>
        </div>
      </Demo>

      <Demo
        title="Corners, per side"
        note="`t` and `b` are block start and end; `s` and `e` follow the writing direction."
        markup={'<div class="df-rounded-t-surface-lg">…</div>'}
      >
        <div className="df-flex df-gap-3">
          {['rounded-control', 'rounded-surface', 'rounded-t-surface-lg', 'rounded-pill'].map((name) => (
            <div key={name} className="df-flex df-flex-col df-gap-1">
              <span className={`df-${name} df-bg-muted`} style={{ display: 'block', inlineSize: '5rem', blockSize: '2.5rem' }} />
              <code className="df-fs-body-xs df-text-muted">{`df-${name}`}</code>
            </div>
          ))}
        </div>
      </Demo>
    </div>
  ),
};

/** Every border, shape and effect class. */
export const Classes: Story = {
  render: () => (
    <div className="df-p-6">
      <FamilyTable names={['border-width', 'radius', 'shadow', 'opacity', 'z-index']} />
    </div>
  ),
};
