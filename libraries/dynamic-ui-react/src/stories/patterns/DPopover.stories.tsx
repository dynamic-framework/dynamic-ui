import { Meta, StoryObj } from '@storybook/react';

import { DButton, DPopover, DQuickActionButton } from '../../components';

const config: Meta<typeof DPopover> = {
  title: 'Design System/Patterns/Popover',
  component: DPopover,
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
    adjustContentToRender: true,
    renderComponent: (toggle) => (
      <div className="d-grid">
        <DButton
          text="Dropdown Component"
          iconEnd={`${toggle ? 'chevron-up' : 'chevron-down'}`}
          isStopPropagationEnabled={false}
        />
      </div>
    ),
  },
};

export const WithoutAdjustToContent: Story = {
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
          isStopPropagationEnabled={false}
        />
      </div>
    ),
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
          isStopPropagationEnabled={false}
        />
      </div>
    ),
    isOpen: true,
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
};
