import { Meta, StoryObj } from '@storybook/react';

import DPopover from '../../src/components/DPopover/DPopover';
import DQuickActionButton from '../../src/components/DQuickActionButton';
import DButton from '../../src/components/DButton';

const config: Meta<typeof DPopover> = {
  title: 'Design System/Patterns/Popover',
  parameters: {
    docs: {
      description: {
        component: `
![Shield Badge](https://img.shields.io/badge/Abstraction%20Component-4848b7)

This component only complies with the behavior of a popover, it has no design, other components are used as an example to assemble it.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Floating UI](https://floating-ui.com/docs/react)
        `,
      },
    },
  },
  component: DPopover,
  argTypes: {
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
    },
    adjustContentToRender: {
      control: 'boolean',
      type: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DPopover>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DPopover {...args}>
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
    </DPopover>
  ),
  args: {
    renderComponent: (toggle) => (
      <div className="d-grid">
        <DButton
          text="Dropdown Component"
          iconEnd={`${toggle ? 'chevron-up' : 'chevron-down'}`}
          stopPropagationEnabled={false}
        />
      </div>
    ),
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

export const AdjustToContent: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DPopover {...args}>
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
    </DPopover>
  ),
  args: {
    adjustContentToRender: true,
    renderComponent: (toggle) => (
      <div className="d-grid">
        <DButton
          text="Dropdown Component"
          iconEnd={`${toggle ? 'chevron-up' : 'chevron-down'}`}
          stopPropagationEnabled={false}
        />
      </div>
    ),
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

export const Open: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DPopover {...args}>
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
    </DPopover>
  ),
  args: {
    adjustContentToRender: true,
    renderComponent: (toggle) => (
      <div className="d-grid">
        <DButton
          text="Dropdown Component"
          iconEnd={`${toggle ? 'chevron-up' : 'chevron-down'}`}
          stopPropagationEnabled={false}
        />
      </div>
    ),
    open: true,
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

export const Plain: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DPopover {...args}>
      Ipsum
    </DPopover>
  ),
  args: {
    renderComponent: () => (
      <div>Lorem</div>
    ),
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};
