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
import { DContextProviderConfigMaterial } from '../config/contextProviderMaterial';

const meta: Meta<typeof DIcon> = {
  title: 'Design System/Components/Icon',
  component: DIcon,
  parameters: {
    docs: {
      description: {
        component: `
Wrapper Component around [Bootstrap Icons.](https://icons.getbootstrap.com/)

To use the DIcon you need to add the icon suite CSS to your site, we recommend adding this CSS in the platform but you can add it in the index.html of the widget as well.

## CSS Variables

| Variable                            | Type            | Description                           |
|-------------------------------------|-----------------|---------------------------------------|
| --${PREFIX_BS}icon-color            | css color unit  | The icon color                        |
| --${PREFIX_BS}icon-bg-color         | css color unit  | The icon background color             |
| --${PREFIX_BS}icon-size             | css length unit | The size of icon                      |
| --${PREFIX_BS}icon-padding          | css length unit | The padding to make icon circle       |
| --${PREFIX_BS}icon-loading-duration | number          | The duration of the loading animation |

> The colors can ref another css var like a var(--${PREFIX_BS}primary)

## Fonts with material symbols style configuration

By default the DIcon is configured to use icon fonts that define the icon from a class, icon fonts that work in the material symbols style define the name of the icon in the content of the tag.

To work with libraries that use this style, there is the materialStyle flag. By setting it to true, the icon is selected by placing its name in the content of the tag, and not, using the name and the familyClass to generate a class.

### Normal icon font render:
\`\`\`
<i class="bi bi-123" />
\`\`\`

### Material Symbols icon font render:
\`\`\`
<i class="material-symbols-outlined">rebase</i>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
    },
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
    materialStyle: {
      type: 'boolean',
      control: 'boolean',
      description: 'To use material style icons',
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
  tags: ['autodocs'],
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

/**
 * To use icons with Material Symbols style configuration it is necessary to use a
 * `DContextProvide` with ``familyClass`` and the flag `materialStyle=true`
 */
export const MaterialStyle: Story = {
  render: (args: ComponentProps<typeof DIcon>) => (
    <DContextProvider
      {...DContextProviderConfigMaterial}
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
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

/**
 * To use icons with Material Symbols style configuration it is necessary to use a
 * `DContextProvide` with `familyClass` and the flag `materialStyle=true`
 */
export const MaterialStyleHasCircle: Story = {
  render: (args: ComponentProps<typeof DIcon>) => (
    <DContextProvider
      {...DContextProviderConfigMaterial}
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
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

/**
 * The `DContextProvider` configuration can be used in conjunction with any other
 * component that uses `DIcon`
 */
export const InputWithMaterialIcons: StoryObj<typeof DInput> = {
  render: (args: ComponentProps<typeof DInput>) => (
    <DContextProvider
      {...DContextProviderConfigMaterial}
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
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};
