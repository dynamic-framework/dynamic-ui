import { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import DButtonIcon from '../../src/components/DButtonIcon/DButtonIcon';

import {
  COMPONENT_SIZE,
  CONTEXT_PROVIDER_CONFIG_MATERIAL,
  ICONS,
  INPUT_STATE,
  THEMES,
} from '../config/constants';
import { PREFIX_BS } from '../../src/components/config';
import { DContextProvider } from '../../src';

const config: Meta<typeof DButtonIcon> = {
  title: 'Design System/Components/Button Icon',
  component: DButtonIcon,
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
    type: {
      control: 'select',
      type: 'string',
      options: ['submit', 'reset', 'button'],
      table: { defaultValue: { summary: 'button' } },
      description: 'The html type of the button.',
    },
    icon: {
      control: {
        type: 'select',
        table: { defaultValue: { summary: 'arrow-left' } },
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
type Story = StoryObj<typeof DButtonIcon>;

export const Primary: Story = {
  args: {
    theme: 'primary',
    size: undefined,
    type: 'button',
    variant: undefined,
    loading: false,
    icon: 'arrow-left',
  },
};

export const Secondary: Story = {
  args: {
    theme: 'secondary',
    size: undefined,
    type: 'button',
    variant: 'outline',
    loading: false,
    icon: 'arrow-left',
  },
};

export const Link: Story = {
  args: {
    theme: 'secondary',
    size: undefined,
    type: 'button',
    variant: 'link',
    loading: false,
    icon: 'arrow-left',
  },
};

/**
 * To use buttons with Material Symbols style use a `DContextProvider` with `familyClass`
 * and the flag `materialStyle=true` or use the flags directly over the
 * `DButtonIcon` component as a props
 */
export const MaterialSecondaryIconRight: Story = {
  render: (args: ComponentProps<typeof DButtonIcon>) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DButtonIcon {...args} />
    </DContextProvider>
  ),
  args: {
    theme: 'primary',
    size: undefined,
    type: 'button',
    loading: false,
    icon: 'arrow_back',
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};
