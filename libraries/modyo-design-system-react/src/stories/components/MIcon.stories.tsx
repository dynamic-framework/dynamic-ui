import { Meta, StoryObj } from '@storybook/react';
import {
  PREFIX_BS,
  ICON_FAMILY_PREFIX,
  ICON_FAMILY_CLASS,
} from '@modyo-dynamic/modyo-design-system';

import { MIcon } from '../../components';
import { FIRST_ICON } from '../constants';

const meta: Meta<typeof MIcon> = {
  title: 'Components-Molecules/Icon',
  component: MIcon,
  argTypes: {
    icon: {
      type: 'string',
      description: 'Name of icon to use (in kebab-case)',
    },
    theme: {
      type: 'string',
      description: 'Theme of the icon',
    },
    size: {
      type: 'string',
      control: 'text',
      description: 'Size of the icon in css length unit',
      table: { defaultValue: { summary: '1rem' } },
    },
    isLoading: {
      type: 'boolean',
      description: 'Enable loading animation',
    },
    loadingDuration: {
      type: 'number',
      control: 'number',
      description: 'Loading animation duration, in seconds',
      table: { defaultValue: { summary: 1.8 } },
    },
    hasCircle: {
      type: 'boolean',
      control: 'boolean',
      description: 'Add circle around the icon',
      table: { defaultValue: { summary: false } },
    },
    circleSize: {
      type: 'string',
      control: 'text',
      description: 'Circle size in css length unit',
      table: { defaultValue: { summary: `calc(var(--${PREFIX_BS}m-icon-component-size) * 2)` } },
    },
    color: {
      type: 'string',
      description: 'Icon color in css color unit or var',
      control: 'color',
    },
    backgroundColor: {
      type: 'string',
      description: 'Icon background color in css color unit or var',
      control: 'color',
    },
    familyClass: {
      type: 'string',
      description: 'Change the family prefix to use another icon suite',
      table: { defaultValue: { summary: ICON_FAMILY_CLASS } },
    },
    familyPrefix: {
      type: 'string',
      description: 'Change the family class to use another icon suite',
      table: { defaultValue: { summary: ICON_FAMILY_PREFIX } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MIcon>;

export const Default: Story = {
  args: {
    icon: FIRST_ICON,
    size: '120px',
    hasCircle: false,
    isLoading: false,
  },
};

export const Circle: Story = {
  args: {
    icon: FIRST_ICON,
    size: '120px',
    hasCircle: true,
    isLoading: false,
    circleSize: `calc(var(--${PREFIX_BS}m-icon-component-size) * 2)`,
  },
};
