import { Meta, StoryObj } from '@storybook/react-vite';

import type { ComponentProps } from 'react';

import DButton from '../../src/components/DButton/DButton';

import {
  COMPONENT_SIZE,
  CONTEXT_PROVIDER_CONFIG_MATERIAL,
  ICONS,
  INPUT_STATE,
  THEMES,
} from '../config/constants';
import { PREFIX_BS } from '../../src/components/config';
import { DContextProvider } from '../../src';

const config: Meta<typeof DButton> = {
  title: 'Design System/Components/Button',
  component: DButton,
  parameters: {
    docs: {
      description: {
        component: `
> We work with button variables at two levels, variables in root per variant (default, outline, link)
>and internal variables in each button that use the previous ones.

> - in the root there are variables for theme (\`--bs-primary\`, \`--bs-info\`, ...),
> - then variables for variant and theme for buttons (\`--bs-btn-primary-color\`, \`--bs-btn-outline-hover-border-color\`, ...)
> - and finally for selectors by variant and theme (\`.btn-primary\`, \`.btn-outline-info\`, ...)
>   we define internal variables (\`.btn-color\`, \`.btn-hover- bg\`, ...) that use the previous ones.


The style of our buttons is highly based on bootstrap, however,
boostrap darkens or lightens the color of a button to generate its different states,
we use the established palettes in the variables.

## Differences between bootstrap and our implementation:

### For our buttons:

#### normal
* **default** background \`-500\`, text contrast with background
* **hover** background \`-600\`, text contrast with background
* **focus** background \`-500\`, text contrast with background
* **active** background \`-700\`, text contrast with background
* **disabled** background \`-500\`, text contrast with background

#### outline
* **default** border-color \`-500\`, background transparent, text color \`-500\`
* **hover** border-color \`-500\`, background hover \`-100\`, text color \`-500\`
* **focus** border-color \`-500\`, background focus \`transparent\`, text color \`-500\`
* **active** border-color \`-700\`, background active \`-100\`, text color \`-700\`
* **disabled** border-color \`-500\`, background transparent, text color \`-500\`

### For bootstrap buttons:

#### normal
* **default** background \`-500\`, text contrast with background

> **mix-color**: The other states use the default color of the text to determine which color to mix with, if it is light, \`black\` is used, if it is dark, \`white\` is used.

* **hover** background mix between \`mix-color\` and \`-500\` at \`15%\`, text contrast with background color, border-color mix at \`20%\` for dark and \`10%\` for light.
* **focus** use hover settings with outline
* **active** background mix between \`mix-color\` and \`-500\` at \`20%\`, text contrast with background color, border-color mix at \`25%\` for dark and \`10%\` for light.
* **disabled** default style with \`.65\` opacity.

#### outline
* **default** border-color \`-500\`, text color \`-500\`
* **hover** border-color \`-500\`, background hover \`-500\`, text contrast with background
* **focus** use hover settings with outline
* **active** use hover settings
* **disabled** default style with \`.65\` opacity.

## CSS Variables

The Bootstrap documentation provides details on the default [Button CSS Variables](https://getbootstrap.com/docs/5.3/components/buttons/#css)

| Variable                             | Class | Type            | Description                     |
|--------------------------------------|-------|-----------------|---------------------------------|
| --${PREFIX_BS}btn-padding-x          | .btn  | css length unit | Button padding horizontal       |
| --${PREFIX_BS}btn-padding-y          | .btn  | css length unit | Button padding vertical         |
| --${PREFIX_BS}btn-font-family        | .btn  | css font family | Button font family              |
| --${PREFIX_BS}btn-font-size          | .btn  | css length unit | Button font size                |
| --${PREFIX_BS}btn-font-weight        | .btn  | css weight unit | Button font weight              |
| --${PREFIX_BS}btn-line-height        | .btn  | css length unit | Button line height              |
| --${PREFIX_BS}btn-color              | .btn  | css color unit  | Button text color               |
| --${PREFIX_BS}btn-bg                 | .btn  | css color unit  | Button background color         |
| --${PREFIX_BS}btn-border-width       | .btn  | css length unit | Button border width             |
| --${PREFIX_BS}btn-border-color       | .btn  | css color unit  | Button border color             |
| --${PREFIX_BS}btn-hover-border-color | .btn  | css color unit  | Button hover border color       |
| --${PREFIX_BS}btn-box-shadow         | .btn  | css box shadow  | Button box shadow               |
| --${PREFIX_BS}btn-disabled-opacity   | .btn  | css length unit | Button link padding vertical    |
| --${PREFIX_BS}btn-focus-box-shadow   | .btn  | css box shadow  | Button focus box shadow         |
| --${PREFIX_BS}btn–text-decoration    | .btn  | text decoration | Button text decoration          |
| --${PREFIX_BS}btn-lg-padding-x       | .btn  | css length unit | Button large padding horizontal |
| --${PREFIX_BS}btn-lg-padding-y       | .btn  | css length unit | Button large padding vertical   |
| --${PREFIX_BS}btn-lg-font-size       | .btn  | css length unit | Button large font size          |
| --${PREFIX_BS}btn-sm-padding-x       | .btn  | css length unit | Button small padding horizontal |
| --${PREFIX_BS}btn-sm-padding-y       | .btn  | css length unit | Button small padding vertical   |
| --${PREFIX_BS}btn-sm-font-size       | .btn  | css length unit | Button small font size          |
| --${PREFIX_BS}btn-border-radius      | :root | css length unit | Button border radius            |
| --${PREFIX_BS}btn-lg-border-radius   | :root | css length unit | Button large border radius      |
| --${PREFIX_BS}btn-sm-border-radius   | :root | css length unit | Button small border radius      |
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
    id: {
      control: 'text',
      type: 'string',
    },
    form: {
      control: 'text',
      type: 'string',
    },
    ariaLabel: {
      control: 'text',
      type: 'string',
    },
    theme: {
      control: 'select',
      type: { name: 'string', required: true },
      options: THEMES,
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: {
        type: 'select',
        labels: {
          undefined: 'default',
        },
      },
      type: 'string',
      options: COMPONENT_SIZE,
    },
    text: {
      control: 'text',
      type: 'string',
      description: 'The text to display.',
    },
    type: {
      control: 'select',
      type: 'string',
      options: ['submit', 'reset', 'button'],
      table: { defaultValue: { summary: 'button' } },
      description: 'The html type of the button.',
    },
    variant: {
      type: 'string',
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, 'outline', 'link'],
      description: 'The variant to use.',
    },
    iconStart: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
    },
    iconStartDisabled: {
      control: 'boolean',
      type: 'boolean',
    },
    iconStartFamilyClass: {
      control: 'text',
      type: 'string',
    },
    iconStartFamilyPrefix: {
      control: 'text',
      type: 'string',
    },
    iconStartMaterialStyle: {
      control: 'boolean',
      type: 'boolean',
    },
    iconStartAriaLabel: {
      control: 'text',
      type: 'string',
    },
    iconStartTabIndex: {
      control: 'number',
      type: 'number',
    },
    iconEnd: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
    },
    iconEndDisabled: {
      control: 'boolean',
      type: 'boolean',
    },
    iconEndFamilyClass: {
      control: 'text',
      type: 'string',
    },
    iconEndFamilyPrefix: {
      control: 'text',
      type: 'string',
    },
    iconEndMaterialStyle: {
      control: 'boolean',
      type: 'boolean',
    },
    iconEndAriaLabel: {
      control: 'text',
      type: 'string',
    },
    iconEndTabIndex: {
      control: 'number',
      type: 'number',
    },
    value: {
      control: 'text',
      type: 'string',
      description: 'The html value of the button.',
    },
    loading: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
      type: 'boolean',
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
      type: 'boolean',
    },
    loadingAriaLabel: {
      control: 'text',
      type: 'string',
    },
    state: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...INPUT_STATE],
      type: 'string',
      description: 'Change the state of the button',
    },
    stopPropagationEnabled: {
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } },
      type: 'boolean',
    },
    onClick: {
      action: 'onClick',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DButton>;

export const Primary: Story = {
  args: {
    theme: 'primary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: undefined,
    loading: false,
    iconStart: undefined,
    iconEnd: undefined,
  },
};

export const PrimaryIconRight: Story = {
  args: {
    theme: 'primary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: undefined,
    loading: false,
    iconStart: undefined,
    iconEnd: 'chevron-right',
  },
};

export const Secondary: Story = {
  args: {
    theme: 'secondary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: 'outline',
    loading: false,
    iconStart: undefined,
    iconEnd: undefined,
  },
};

export const SecondaryIconRight: Story = {
  args: {
    theme: 'secondary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: 'outline',
    loading: false,
    iconStart: undefined,
    iconEnd: 'chevron-right',
  },
};

export const Link: Story = {
  args: {
    theme: 'secondary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: 'link',
    loading: false,
    iconStart: undefined,
    iconEnd: undefined,
  },
};

export const LinkIconRight: Story = {
  args: {
    theme: 'secondary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: 'link',
    loading: false,
    iconStart: undefined,
    iconEnd: 'chevron-right',
  },
};

/**
 * To use buttons with Material Symbols style use a `DContextProvider` with `familyClass`
 * and the flag `materialStyle=true` or use the flags directly over the
 * `DButton` component as a props
 */
export const MaterialSecondaryIconRight: Story = {
  render: (args: ComponentProps<typeof DButton>) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DButton {...args} />
    </DContextProvider>
  ),
  args: {
    theme: 'primary',
    size: undefined,
    text: 'Default',
    type: 'button',
    loading: false,
    iconStart: undefined,
    iconEnd: 'chevron_right',
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};
