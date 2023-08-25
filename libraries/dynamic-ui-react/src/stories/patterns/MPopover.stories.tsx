import { Meta, StoryObj } from '@storybook/react';

import { DButton, MPopover, DQuickActionButton } from '../../components';

const config: Meta<typeof MPopover> = {
  title: 'Design System/Patterns/Popover',
  component: MPopover,
};

export default config;
type Story = StoryObj<typeof MPopover>;

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
    <MPopover {...args}>
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
    </MPopover>
  ),
  args: {
    renderComponent: (toggle) => (
      <DButton
        text="Dropdown Component"
        iconEnd={`${toggle ? 'chevron-up' : 'chevron-down'}`}
        className="d-grid"
      />
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
    <MPopover {...args}>
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
    </MPopover>
  ),
  args: {
    renderComponent: (toggle) => (
      <DButton
        text="Dropdown Component"
        iconEnd={`${toggle ? 'chevron-up' : 'chevron-down'}`}
        className="d-grid"
      />
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
    <MPopover {...args}>
      Ipsum
    </MPopover>
  ),
  args: {
    renderComponent: () => (
      <div>Lorem</div>
    ),
  },
};
