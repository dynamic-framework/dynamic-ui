/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Meta, StoryObj } from '@storybook/react-vite';

import DButtonIcon from '../../src/components/DButtonIcon/DButtonIcon';
import DDropdown from '../../src/components/DDropdown/DDropdown';

const config: Meta<typeof DDropdown> = {
  title: 'Design System/Components/DDropdown',
  component: DDropdown,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {},
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DDropdown>;

export const Label: Story = {
  render: (args) => (
    <div style={{ height: 300 }}>
      <DDropdown {...args} />
    </div>
  ),
  args: {
    dropdownToggle: ({ open, toggle }) => (
      <button
        type="button"
        className="btn btn-primary"
        onClick={toggle}
      >
        {open ? 'Close' : 'Open'}
      </button>
    ),
    actions: [
      {
        label: 'Action 1',
        onClick: () => console.log('Action 1'),
      },
      {
        label: 'Action 2',
        onClick: () => console.log('Action 2'),
      },
    ],
  },
};

export const LabelIcon: Story = {
  render: (args) => (
    <div style={{ height: 300 }}>
      <DDropdown {...args} />
    </div>
  ),
  args: {
    dropdownToggle: ({ toggle }) => (
      <DButtonIcon
        icon="three-dots-vertical"
        onClick={toggle}
        variant="link"
        color="secondary"
      />
    ),
    actions: [
      {
        label: 'Action 1',
        onClick: () => console.log('Action 1'),
      },
      {
        label: 'Action 2',
        onClick: () => console.log('Action 2'),
      },
    ],
  },
};

export const Divider: Story = {
  render: (args) => (
    <div style={{ height: 300 }}>
      <DDropdown {...args} />
    </div>
  ),
  args: {
    dropdownToggle: ({ toggle }) => (
      <DButtonIcon
        icon="three-dots-vertical"
        onClick={toggle}
        variant="link"
        color="secondary"
      />
    ),
    actions: [
      {
        label: 'Action 1',
        onClick: () => console.log('Action 1'),
      },
      {
        label: '',
        isDivider: true,
      },
      {
        label: 'Action 2',
        onClick: () => console.log('Action 2'),
        icon: 'trash',
        color: 'danger',
      },
    ],
  },
};
