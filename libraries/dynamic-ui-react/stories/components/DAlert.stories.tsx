import { Meta, StoryObj } from '@storybook/react';

import { ComponentProps } from 'react';
import DAlert from '../../src/components/DAlert/DAlert';
import { THEMES, ICONS, CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';
import { DContextProvider } from '../../src';
import { PREFIX_BS } from '../../src/components/config';

const config: Meta<typeof DAlert> = {
  title: 'Design System/Components/Alert',
  component: DAlert,
  parameters: {
    docs: {
      description: {
        component: `
To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Alerts](https://getbootstrap.com/docs/5.3/components/alerts/)

## CSS Variables
| Variable                                  | Type             | Description              |
|-------------------------------------------|------------------|--------------------------|
| --${PREFIX_BS}alert-gap                   | css length unit  | Content separation       |
| --${PREFIX_BS}alert-box-shadow            | css box shadow   | Toast box shadow         |
| --${PREFIX_BS}alert-icon-color            | css color unit   | Toast icon color         |
| --${PREFIX_BS}alert-separator-opacity     | css length unit  | Toast separator opacity  |
| --${PREFIX_BS}alert-close-icon-size       | css length unit  | Toast close icon size    |
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
    type: {
      control: 'select',
      type: 'string',
      options: THEMES,
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
    showIcon: {
      control: 'boolean',
      type: 'boolean',
      description: 'Show toast icon',
    },
    iconClose: {
      control: 'select',
      type: 'string',
      options: ICONS,
      description: 'Name of icon to use (in kebab-case)',
    },
    soft: {
      control: 'boolean',
      type: 'boolean',
      description: 'Soft style',
    },
    onClose: {
      action: 'onClose',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DAlert>;

export const Success: Story = {
  args: {
    showIcon: false,
    children: 'Default toast',
  },
};

export const Danger: Story = {
  args: {
    showIcon: false,
    children: 'Default toast',
    type: 'danger',
  },
};

export const Info: Story = {
  args: {
    showIcon: false,
    children: 'Default toast',
    type: 'info',
  },
};

export const Warning: Story = {
  args: {
    showIcon: false,
    children: 'Default toast',
    type: 'warning',
  },
};

export const SuccessIcon: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'success',
  },
};

export const DangerIcon: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'danger',
  },
};

export const InfoIcon: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'info',
  },
};

export const WarningIcon: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'warning',
  },
};

export const SuccessSoft: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'success',
    soft: true,
  },
};

export const DangerSoft: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'danger',
    soft: true,
  },
};

export const InfoSoft: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'info',
    soft: true,
  },
};

export const WarningSoft: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'warning',
    soft: true,
  },
};

export const PrimarySoft: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'primary',
    soft: true,
  },
};

export const SecondarySoft: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'secondary',
    soft: true,
  },
};

export const LightSoft: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'light',
    soft: true,
  },
};

/**
 * To use alerts with Material Symbols style use a `DContextProvider` with `familyClass`
 * and the flag `materialStyle=true` or use the flags directly over the
 * `DAlert` component as a props
 */
export const MaterialStyle: Story = {
  render: (args: ComponentProps<typeof DAlert>) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DAlert {...args} />
    </DContextProvider>
  ),
  args: {
    showClose: true,
    children: 'Default toast',
    type: 'secondary',
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};
