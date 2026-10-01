import type { Meta, StoryObj } from '@storybook/react-vite';

import Demo from './Demo';
import FamilyTable from './FamilyTable';

const meta: Meta = {
  title: 'Design System/Utilities/Typography',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Size, weight, line-height, alignment, wrapping and decoration.

\`font-size\` takes a breakpoint prefix — type that does not scale is the other
half of a layout that does. \`font-weight\` and \`line-height\` do not: a heading
is not bolder on a desktop.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

/** Type that scales, and text that behaves. */
export const Examples: Story = {
  render: () => (
    <div className="df-p-6">
      <Demo
        title="Type that scales with the viewport"
        note="`font-size` is responsive; the unprefixed class is the phone."
        markup={'<h2 class="df-fs-heading-4 df-md:fs-heading-2 df-lg:fs-display-6">\n  Your balance\n</h2>'}
      >
        <span className="df-fs-heading-4 df-md:fs-heading-2 df-lg:fs-display-6">Your balance</span>
      </Demo>

      <Demo
        title="Truncation"
        note="One line with an ellipsis, versus wrapping. The container has to have a width for either to mean anything."
        markup={'<p class="df-text-truncate">A very long transaction description…</p>'}
      >
        <div style={{ maxWidth: '18rem' }}>
          <p className="df-text-truncate df-m-0 df-bg-muted df-p-2 df-rounded-control">
            Transfer to Ana Pérez — reference 884-221 — processed 12 March
          </p>
        </div>
      </Demo>

      <Demo
        title="Balanced headings"
        note="`df-text-balance` evens the line lengths so a two-line heading does not leave one word alone."
        markup={'<h3 class="df-text-balance">Review the details before you confirm</h3>'}
      >
        <div style={{ maxWidth: '20rem' }}>
          <span className="df-fs-heading-4 df-text-balance" style={{ display: 'block' }}>
            Review the details before you confirm
          </span>
        </div>
      </Demo>

      <Demo
        title="Alignment, responsively"
        note="Centred on a phone where the column is narrow, left-aligned once there is room."
        markup={'<p class="df-text-center df-md:text-start">…</p>'}
      >
        <p className="df-text-center df-md:text-start df-m-0 df-bg-muted df-p-3 df-rounded-control">
          Centred below md, start-aligned from md up
        </p>
      </Demo>
    </div>
  ),
};

/** Every typography class. */
export const Classes: Story = {
  render: () => (
    <div className="df-p-6">
      <FamilyTable names={['font-size', 'font-weight', 'line-height', 'text', 'decoration']} />
    </div>
  ),
};
