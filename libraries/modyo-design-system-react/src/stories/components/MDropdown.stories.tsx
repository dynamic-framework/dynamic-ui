import { Meta, StoryObj } from '@storybook/react';

import { MButton, MDropdown } from '../../components';

const config: Meta<typeof MDropdown> = {
  title: 'Design System/Components/Dropdown',
  component: MDropdown,
};

export default config;
type Story = StoryObj<typeof MDropdown>;

export const Default: Story = {
  render: (args) => (
    <div
      style={{ width: '320px', height: '320px' }}
      className="d-flex flex-column align-items-stretch justify-content-center"
    >
      <MDropdown {...args}>
        <span>hola</span>
      </MDropdown>
    </div>
  ),
  args: {
    renderComponent: (toggle) => (
      <MButton
        text="Dropdown Component"
        iconEnd={`${toggle ? 'chevron-up' : 'chevron-down'}`}
        className="d-grid flex-1"
      />
    ),
  },
};
