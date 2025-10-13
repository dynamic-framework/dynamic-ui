/* eslint-disable jsx-a11y/anchor-is-valid */
import { Meta, StoryObj } from '@storybook/react-vite';

import { COLOR_THEMES, ICONS } from '../config/constants';
import { DCreditCard } from '../../src';
import { PREFIX_BS } from '../../src/components/config';

const config: Meta<typeof DCreditCard> = {
  title: 'Design System/Components/DCreditCard',
  component: DCreditCard,
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
type Story = StoryObj<typeof DCreditCard>;

export const Visa: Story = {
  render: (args) => (
    <DCreditCard {...args} />
  ),
  args: {
    nameOnCard: 'John Doe',
    cardNumber: '4242 4242 4242 4242',
  },
};

export const Mastercard: Story = {
  render: (args) => (
    <DCreditCard {...args} />
  ),
  args: {
    nameOnCard: 'John Doe',
    type: 'mastercard',
    cardNumber: '4242 4242 4242 4242',
  },
};
