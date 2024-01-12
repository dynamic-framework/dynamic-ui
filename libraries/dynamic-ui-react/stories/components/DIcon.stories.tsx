import { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

import DIcon from '../../src/components/DIcon/DIcon';
import {
  THEMES_WITH_EMPTY,
  FIRST_ICON,
  ICONS,
} from '../config/constants';
import {
  ICON_FAMILY_CLASS,
  ICON_FAMILY_PREFIX,
  PREFIX_BS,
} from '../../src/components/config';
import { DContextProvider, DInput } from '../../src';

const meta: Meta<typeof DIcon> = {
  title: 'Design System/Components/Icon',
  component: DIcon,
  argTypes: {
    icon: {
      control: 'select',
      type: { name: 'string', required: true },
      options: ICONS,
      description: 'Name of icon to use (in kebab-case)',
    },
    theme: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: THEMES_WITH_EMPTY,
      type: 'string',
      description: 'Theme of the icon',
    },
    className: {
      control: 'text',
      type: 'string',
      description: 'Add classes',
    },
    size: {
      type: 'string',
      control: 'text',
      description: 'Size of the icon in css length unit',
      table: { defaultValue: { summary: '1rem' } },
    },
    loading: {
      control: 'boolean',
      table: { defaultValue: { summary: false } },
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
      table: { defaultValue: { summary: `calc(var(--${PREFIX_BS}icon-component-size) * 2)` } },
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
type Story = StoryObj<typeof DIcon>;

export const Default: Story = {
  args: {
    icon: FIRST_ICON,
    size: '120px',
    hasCircle: false,
  },
};

export const Circle: Story = {
  args: {
    icon: FIRST_ICON,
    size: '120px',
    hasCircle: true,
    circleSize: `calc(var(--${PREFIX_BS}icon-component-size) * 1)`,
  },
};

export const MaterialStyle: Story = {
  render: (args: ComponentProps<typeof DIcon>) => (
    <DContextProvider
      icon={{
        materialStyle: true,
        familyClass: 'material-symbols-outlined',
      }}
    >
      <DIcon {...args} />
    </DContextProvider>
  ),
  args: {
    icon: 'rebase',
    size: '120px',
  },
  argTypes: {
    icon: {
      control: 'text',
      type: 'string',
      description: 'Material style icon',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'To use icons with Material Symbols style configuration it is necessary to use a DContextProvide with familyClass and the flag materialStyle=true',
      },
    },
  },
};

export const MaterialStyleHasCircle: Story = {
  render: (args: ComponentProps<typeof DIcon>) => (
    <DContextProvider
      icon={{
        materialStyle: true,
        familyClass: 'material-symbols-outlined',
      }}
    >
      <DIcon {...args} />
    </DContextProvider>
  ),
  args: {
    icon: 'rebase',
    size: '120px',
    hasCircle: true,
  },
  argTypes: {
    icon: {
      control: 'text',
      type: 'string',
      description: 'Material style icon',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'To use icons with Material Symbols style configuration it is necessary to use a DContextProvide with familyClass and the flag materialStyle=true',
      },
    },
  },
};

export const InputWithMaterialIcons: StoryObj<typeof DInput> = {
  render: (args: ComponentProps<typeof DInput>) => (
    <DContextProvider
      icon={{
        materialStyle: true,
        familyClass: 'material-symbols-outlined',
      }}
    >
      <DInput
        {...args}
      />
    </DContextProvider>
  ),
  args: {
    iconStart: 'alternate_email',
    iconEnd: 'cached',
  },
  parameters: {
    docs: {
      description: {
        story: 'The DContextProvider configuration can be used in conjunction with any other component that uses DIcon',
      },
    },
  },
};
