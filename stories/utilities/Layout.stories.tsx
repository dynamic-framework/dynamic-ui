import type { Meta, StoryObj } from '@storybook/react-vite';

import Demo from './Demo';
import FamilyTable from './FamilyTable';

const meta: Meta = {
  title: 'Design System/Utilities/Layout',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Display, flex, alignment, grid and container.

These are the families that take a **breakpoint prefix**, because a layout that
cannot change at a breakpoint is not responsive — it is a fixed design that
happens to fit one screen.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

/**
 * Resize the viewport.
 *
 * Every prefix is `min-width`, so the UNPREFIXED class is the small-screen
 * case and each prefix takes over from its breakpoint up. Writing
 * `df-grid-cols-1 df-md:grid-cols-3` means one column on a phone, three from
 * `md` — not "three columns, except on a phone".
 */
export const Responsive: Story = {
  render: () => (
    <div className="df-p-6">
      <Demo
        title="A grid that reflows"
        note="One column, two from md, four from lg."
        markup={'<div class="df-grid df-grid-cols-1 df-md:grid-cols-2 df-lg:grid-cols-4 df-gap-4">\n  <div class="df-bg-muted df-p-4 df-rounded-control">1</div>\n  …\n</div>'}
      >
        <div className="df-grid df-grid-cols-1 df-md:grid-cols-2 df-lg:grid-cols-4 df-gap-4">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="df-bg-muted df-p-4 df-rounded-control">{n}</div>
          ))}
        </div>
      </Demo>

      <Demo
        title="Stack on a phone, row on a desktop"
        note="The most common responsive change there is."
        markup={'<div class="df-flex df-flex-col df-md:flex-row df-gap-4">\n  <div class="df-bg-muted df-p-4 df-rounded-control">Sidebar</div>\n  <div class="df-bg-muted df-p-4 df-rounded-control df-grow">Content</div>\n</div>'}
      >
        <div className="df-flex df-flex-col df-md:flex-row df-gap-4">
          <div className="df-bg-muted df-p-4 df-rounded-control">Sidebar</div>
          <div className="df-bg-muted df-p-4 df-rounded-control df-grow">Content</div>
        </div>
      </Demo>

      <Demo
        title="Hidden until there is room"
        note="`df-hidden` then `df-lg:block` — the row of actions only appears when the screen can hold it."
        markup={'<span class="df-hidden df-lg:block">Only from lg up</span>'}
      >
        <div className="df-flex df-gap-4 df-items-center">
          <span className="df-bg-muted df-p-2 df-rounded-control">Always</span>
          <span className="df-hidden df-lg:block df-bg-primary-subtle df-p-2 df-rounded-control">
            Only from lg up
          </span>
        </div>
      </Demo>

      <Demo
        title="Spacing changes too"
        note="margin, padding and gap are responsive — tighter on a phone, roomier on a desktop."
        markup={'<div class="df-p-2 df-md:p-6 df-lg:p-10">…</div>'}
      >
        <div className="df-p-2 df-md:p-6 df-lg:p-10 df-bg-primary-subtle df-rounded-control">
          <div className="df-bg-raised df-p-2 df-rounded-control">Resize me</div>
        </div>
      </Demo>
    </div>
  ),
};

/** Every layout class. */
export const Classes: Story = {
  render: () => (
    <div className="df-p-6">
      <FamilyTable names={['display', 'flex', 'alignment', 'grid-columns', 'container', 'box']} />
    </div>
  ),
};
