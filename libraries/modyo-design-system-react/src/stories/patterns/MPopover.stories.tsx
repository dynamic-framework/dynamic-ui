import { Meta, StoryObj } from '@storybook/react';

import { MButton, MPopover, MQuickActionButton } from '../../components';

const config: Meta<typeof MPopover> = {
  title: 'Design System/Patterns/Popover',
  component: MPopover,
};

export default config;
type Story = StoryObj<typeof MPopover>;

export const Default: Story = {
  render: (args) => (
    <div
      style={{ width: '320px', height: '320px' }}
      className="d-flex flex-column align-items-stretch justify-content-center"
    >
      <MPopover {...args}>
        <MQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
        <MQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
        <MQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
      </MPopover>
    </div>
  ),
  args: {
    renderComponent: (toggle) => (
      <MButton
        text="Dropdown Component"
        iconEnd={`${toggle ? 'chevron-up' : 'chevron-down'}`}
        className="d-grid"
      />
    ),
  },
};

export const Open: Story = {
  render: (args) => (
    <div
      style={{ width: '320px', height: '320px' }}
      className="d-flex flex-column align-items-stretch justify-content-center"
    >
      <MPopover {...args}>
        <MQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
        <MQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
        <MQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
      </MPopover>
    </div>
  ),
  args: {
    renderComponent: (toggle) => (
      <MButton
        text="Dropdown Component"
        iconEnd={`${toggle ? 'chevron-up' : 'chevron-down'}`}
        className="d-grid"
      />
    ),
    isOpen: true,
  },
};

export const Plain: Story = {
  render: (args) => (
    <div
      style={{ width: '320px', height: '320px' }}
      className="d-flex flex-column align-items-stretch justify-content-center"
    >
      <MPopover {...args}>
        Ipsum
      </MPopover>
    </div>
  ),
  args: {
    renderComponent: () => (
      <div>Lorem</div>
    ),
  },
};
