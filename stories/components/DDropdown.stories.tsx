import { Meta, StoryObj } from '@storybook/react-vite';
import DButtonIcon from '../../src/components/DButtonIcon';
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

Every value below is a design token: set it on the component, on an ancestor, or
on \`:root\` to retheme. The table is generated from \`tokens/component/floating.json\`,
so it cannot fall out of step with the stylesheet.

| Variable                                 | Type           | Description              |
|------------------------------------------|----------------|--------------------------|
| \`--df-floating-bg\`                     | css color      | Background               |
| \`--df-floating-fg\`                     | css color      | Foreground               |
| \`--df-floating-border-color\`           | css color      | Border color             |
| \`--df-floating-border-width\`           | css length     | Border width             |
| \`--df-floating-radius\`                 | css length     | Radius                   |
| \`--df-floating-shadow\`                 | css box-shadow | Shadow                   |
| \`--df-floating-padding-block\`          | css length     | Padding block            |
| \`--df-floating-padding-inline\`         | css length     | Padding inline           |
| \`--df-floating-min-width\`              | css length     | Min width                |
| \`--df-floating-z\`                      | number         | Z                        |
| \`--df-floating-item-padding-block\`     | css length     | Item padding block       |
| \`--df-floating-item-padding-inline\`    | css length     | Item padding inline      |
| \`--df-floating-item-gap\`               | css length     | Item gap                 |
| \`--df-floating-item-font-size\`         | css length     | Item font size           |
| \`--df-floating-item-fg\`                | css color      | Item foreground          |
| \`--df-floating-item-hover-bg\`          | css color      | Item hover background    |
| \`--df-floating-item-active-bg\`         | css color      | Item active background   |
| \`--df-floating-item-active-fg\`         | css color      | Item active foreground   |
| \`--df-floating-item-disabled-fg\`       | css color      | Item disabled foreground |
| \`--df-floating-divider-color\`          | css color      | Divider color            |
| \`--df-floating-divider-margin-block\`   | css length     | Divider margin block     |
| \`--df-floating-popover-padding\`        | css length     | Popover padding          |
| \`--df-floating-popover-z\`              | number         | Popover z                |
| \`--df-floating-tooltip-bg\`             | css color      | Tooltip background       |
| \`--df-floating-tooltip-fg\`             | css color      | Tooltip foreground       |
| \`--df-floating-tooltip-padding-block\`  | css length     | Tooltip padding block    |
| \`--df-floating-tooltip-padding-inline\` | css length     | Tooltip padding inline   |
| \`--df-floating-tooltip-font-size\`      | css length     | Tooltip font size        |
| \`--df-floating-tooltip-radius\`         | css length     | Tooltip radius           |
| \`--df-floating-tooltip-max-width\`      | css length     | Tooltip max width        |
| \`--df-floating-tooltip-z\`              | number         | Tooltip z                |

        `,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional class names for the dropdown container',
      type: 'string',
      table: { category: 'Appearance' },
    },
    actions: {
      control: 'object',
      description: 'List of actions displayed in the dropdown menu',
      table: {
        category: 'Content',
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
      table: { category: 'Content' },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ height: 250 }}>
        <Story />
      </div>
    ),
  ],
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
  args: {
    actions: [
      { label: 'Active action', icon: 'Check' },
      { label: 'Disabled action', disabled: true },
    ],
  },
};

export const CustomToggle: Story = {
  args: {
    actions: baseActions,
    dropdownToggle: ({ open, toggle }: { open: boolean, toggle: () => void }) => (
      <DButtonIcon
        icon={open ? 'ChevronUp' : 'ChevronDown'}
        color="primary"
        variant="link"
        onClick={toggle}
        aria-label="Open dropdown"
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
  args: {
    actions: baseActions,
    dropdownToggle: ({ open, toggle }: { open: boolean, toggle: () => void }) => (
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
  args: {
    dropdownToggle: ({ toggle }: { open: boolean, toggle: () => void }) => (
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
