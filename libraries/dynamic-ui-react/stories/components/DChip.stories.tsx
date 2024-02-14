import { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import DChip from '../../src/components/DChip/DChip';
import { ICONS, THEMES } from '../config/constants';
import { PREFIX_BS } from '../../src/components/config';
import DInputPassword from '../../src/components/DInputPassword/DInputPassword';
import { DContextProvider } from '../../src';
import { DContextProviderConfigMaterial } from '../config/contextProviderMaterial';

const config: Meta<typeof DChip> = {
  title: 'Design System/Components/Chip',
  component: DChip,
  parameters: {
    docs: {
      description: {
        component: `
## CSS Variables
| Variable                            | Type            | Description                        |
|-------------------------------------|-----------------|------------------------------------|
| --${PREFIX_BS}chip-bg               | css color unit  | Background color                   |
| --${PREFIX_BS}chip-gap              | css length unit | Separation between chip elements   |
| --${PREFIX_BS}chip-color            | css color unit  | Text color                         |
| --${PREFIX_BS}chip-border-radius    | css length unit | Border radius                      |
| --${PREFIX_BS}chip-padding-x        | css length unit | Padding horizontal                 |
| --${PREFIX_BS}chip-padding-y        | css length unit | Padding vertical                   |
| --${PREFIX_BS}chip-font-size        | css length unit | Font size                          |
| --${PREFIX_BS}chip-font-weight      | css font weight | Font weight                        |
| --${PREFIX_BS}chip-line-height      | css length unit | Line height                        |
        `,
      },
    },
  },
  argTypes: {
    style: {
      control: 'object',
    },
    className: {
      control: 'text',
      type: 'string',
    },
    text: {
      control: 'text',
      type: 'string',
      description: 'Text of badge',
    },
    theme: {
      control: 'select',
      type: 'string',
      options: THEMES,
      table: { defaultValue: { summary: 'primary' } },
      description: 'The theme to use.',
    },
    icon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
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
    iconClose: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
    },
    iconCloseFamilyClass: {
      control: 'text',
      type: 'string',
    },
    iconCloseFamilyPrefix: {
      control: 'text',
      type: 'string',
    },
    iconCloseMaterialStyle: {
      control: 'boolean',
      type: 'boolean',
    },
    showClose: {
      control: 'boolean',
      table: { defaultValue: { summary: false } },
      type: 'boolean',
    },
    closeAriaLabel: {
      control: 'text',
      type: 'string',
    },
    onClose: {
      action: 'onClose',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DChip>;

export const Primary: Story = {
  args: {
    theme: 'primary',
    text: 'Default',
  },
};

export const Secondary: Story = {
  args: {
    theme: 'secondary',
    text: 'Default',
  },
};

export const Icon: Story = {
  args: {
    theme: 'secondary',
    text: 'Default',
    icon: 'fire',
  },
};

export const Close: Story = {
  args: {
    theme: 'secondary',
    text: 'Default',
    icon: 'fire',
    showClose: true,
  },
};

export const MaterialIcon: Story = {
  render: (args: ComponentProps<typeof DInputPassword>) => (
    <DContextProvider
      {...DContextProviderConfigMaterial}
    >
      <DChip {...args} />
    </DContextProvider>
  ),
  args: {
    theme: 'secondary',
    text: 'Default',
    icon: 'local_fire_department',
    showClose: true,
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};
