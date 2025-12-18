import { Meta, StoryObj } from '@storybook/react-vite';
import DButtonIcon from '../../src/components/DButtonIcon';
import { PREFIX_BS } from '../../src/components/config';
import DDropdown, { DropdownAction } from '../../src/components/DDropdown/DDropdown';
import { DButton } from '../../src';

const config: Meta<typeof DDropdown> = {
  title: 'Design System/Components/Dropdown',
  component: DDropdown,
  parameters: {
    docs: {
      description: {
        component: `
## Description
A dropdown menu component to display a list of actions (buttons, links, dividers, etc).

The dropdown automatically adjusts its position depending on the available space in the viewport.

---

## Props

| Prop            | Type                              | Description |
| ---------------- | --------------------------------- | ----------- |
| actions          | \`DropdownAction[]\`              | List of menu actions |
| dropdownToggle   | \`(props) => ReactNode\`          | Custom toggle renderer or element |
| className        | \`string\`                        | Additional class names for the wrapper |

---

## DropdownAction

| Prop        | Type | Description |
| ------------ | ---- | ----------- |
| label        | \`string\` | Action text label |
| icon         | \`string\` | Icon name (optional) |
| href         | \`string\` | If provided, renders as a link |
| onClick      | \`({ open, toggle }) => void\` | Callback fired on click |
| disabled     | \`boolean\` | Disables the action |
| color        | \`'default' | 'danger' | 'success' | 'warning' | 'info'\` | Visual variant |
| isDivider    | \`boolean\` | Renders a divider line between items |

---

## CSS Variables

| Variable | Class | Type | Description |
| -------- | ------ | ---- | ----------- |
| --${PREFIX_BS}dropdown-bg | .dropdown-menu | color | Menu background color |
| --${PREFIX_BS}dropdown-border-radius | .dropdown-menu | length | Border radius of the dropdown |
| --${PREFIX_BS}dropdown-item-padding | .dropdown-item | length | Inner padding of each item |
        `,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional class names for the dropdown container',
      type: 'string',
    },
    actions: {
      control: 'object',
      description: 'List of actions displayed in the dropdown menu',
      table: {
        type: {
          summary: 'DropdownAction[]',
          detail: `{
  label: string;
  icon?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  color?: 'default' | 'danger' | 'success' | 'warning' | 'info';
  isDivider?: boolean;
}`,
        },
      },
    },
    dropdownToggle: {
      control: false,
      description: 'Custom element or function to render the dropdown toggle button',
    },
  },
  tags: ['autodocs'],
};

export default config;

type Story = StoryObj<typeof DDropdown>;

const baseActions: DropdownAction[] = [
  { label: 'Edit', icon: 'Pencil', onClick: () => {} },
  { label: 'Duplicate', icon: 'Copy' },
  { isDivider: true, label: '' },
  { label: 'Delete', icon: 'Trash2', color: 'danger' },
];

export const DisabledActions: Story = {
  render: (args) => (
    <div style={{ height: 300 }}>
      <DDropdown {...args} />
    </div>
  ),
  args: {
    actions: [
      { label: 'Active action', icon: 'Check' },
      { label: 'Disabled action', disabled: true },
    ],
  },
};

export const CustomToggle: Story = {
  render: (args) => (
    <div style={{ height: 300 }}>
      <DDropdown {...args} />
    </div>
  ),
  args: {
    actions: baseActions,
    dropdownToggle: ({ open, toggle }) => (
      <DButtonIcon
        icon={open ? 'ChevronUp' : 'ChevronDown'}
        color="primary"
        variant="link"
        onClick={toggle}
      />
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Example using a custom button component as the dropdown toggle.',
      },
    },
  },
};

export const CustomToggle2: Story = {
  render: (args) => (
    <div style={{ height: 300 }}>
      <DDropdown {...args} />
    </div>
  ),
  args: {
    actions: baseActions,
    dropdownToggle: ({ open, toggle }) => (
      <DButton
        iconEnd={open ? 'ChevronUp' : 'ChevronDown'}
        color="primary"
        text="Button"
        onClick={toggle}
      />
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Example using a custom button component as the dropdown toggle.',
      },
    },
  },
};

export const WithLinks: Story = {
  args: {
    actions: [
      { label: 'Open Google', href: 'https://google.com', icon: 'Globe' },
      { label: 'Open Storybook Docs', href: 'https://storybook.js.org', icon: 'Book' },
    ],
  },
};

export const WithDividers: Story = {
  render: (args) => (
    <div style={{ height: 300 }}>
      <DDropdown {...args} />
    </div>
  ),
  args: {
    dropdownToggle: ({ toggle }) => (
      <DButton onClick={toggle} text="Button" />
    ),
    actions: [
      { label: 'First action', icon: 'Star' },
      { isDivider: true, label: '' },
      { label: 'Second action', icon: 'Check' },
      { isDivider: true, label: '' },
      { label: 'Third action', icon: 'Trash2', color: 'danger' },
    ],
  },
};
