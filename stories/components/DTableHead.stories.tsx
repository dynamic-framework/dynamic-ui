import type { Meta, StoryObj } from '@storybook/react-vite';

import DTableHead from '../../src/components/DTableHead';

const config: Meta<typeof DTableHead> = {
  title: 'Design System/Components/Table Head',
  component: DTableHead,
  parameters: {
    docs: {
      description: {
        component: `
Component to assist in the construction of sortable table headers

To see the usage go to [Table example section](/docs/design-system-examples-tables--docs)
        `,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS class for styling',
      type: { name: 'string', required: false },
    },
    style: {
      control: 'object',
      description: 'Inline styles object',
    },
    field: {
      control: 'text',
      description: 'Field name for sorting',
      type: { name: 'string', required: true },
    },
    label: {
      control: 'text',
      description: 'Label text for table header',
      type: { name: 'string', required: true },
    },
    value: {
      control: 'text',
      description: 'Current sorting value',
      type: { name: 'string', required: false },
    },
    onChange: {
      action: 'onChange',
      description: 'Callback function when sorting value changes',
      type: { name: 'function', required: true },
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DTableHead>;

export const Default: Story = {
  args: {
    field: 'default',
    label: 'Default',
    value: '',
  },
};

export const SortedAscending: Story = {
  args: {
    field: 'default',
    label: 'Default',
    value: 'default',
  },
};

export const SortedDescending: Story = {
  args: {
    field: 'default',
    label: 'Default',
    value: '-default',
  },
};
