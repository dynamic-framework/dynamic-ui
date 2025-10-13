/* eslint-disable jsx-a11y/anchor-is-valid */
import { Meta, StoryObj } from '@storybook/react-vite';

import { COLOR_THEMES, ICONS } from '../config/constants';
import DDropdown from '../../src/components/DDropdown/DDropdown';
import DButtonIcon from '../../src/components/DButtonIcon/DButtonIcon';
import { PREFIX_BS } from '../../src/components/config';

const config: Meta<typeof DDropdown> = {
  title: 'Design System/Components/DDropdown',
  component: DDropdown,
  parameters: {
    docs: {
      description: {
        component: `
To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Alerts](https://getbootstrap.com/docs/5.3/components/alerts/)

## CSS Variables

The Bootstrap documentation provides details on the default [Alert CSS Variables](https://getbootstrap.com/docs/5.3/components/alerts/#css)

| Variable                                  | Class            | Type             | Description              |
|-------------------------------------------|------------------|------------------|--------------------------|
| --${PREFIX_BS}alert-gap                   | .alert           | css length unit  | Content separation       |
| --${PREFIX_BS}alert-icon-color            | .alert           | css color unit   | Toast icon color         |
| --${PREFIX_BS}alert-close-icon-size       | .alert           | css length unit  | Toast close icon size    |
        `,
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      type: 'string',
    },
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
    },
    theme: {
      control: 'select',
      type: 'string',
      options: COLOR_THEMES,
      table: { defaultValue: { summary: 'success' } },
      description: 'Toast type',
    },
    icon: {
      control: 'select',
      type: 'string',
      options: ICONS,
      description: 'Name of icon to use (in kebab-case)',
    },
    iconFamilyClass: {
      control: 'text',
      type: 'string',
    },
    iconFamilyPrefix: {
      control: 'text',
      type: 'string',
    },
    iconMaterialStyle: {
      control: 'boolean',
      type: 'boolean',
    },
    showClose: {
      control: 'boolean',
      type: 'boolean',
      description: 'Show close button',
    },
    iconClose: {
      control: 'select',
      type: 'string',
      options: ICONS,
      description: 'Name of icon to use (in kebab-case)',
    },
    onClose: {
      action: 'onClose',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DDropdown>;

export const Label: Story = {
  render: (args) => (
    <DDropdown {...args} />
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
    <DDropdown {...args} />
  ),
  args: {
    dropdownToggle: ({ toggle }) => (
      <DButtonIcon
        icon="three-dots-vertical"
        onClick={toggle}
        variant="link"
        theme="secondary"
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
