import { Meta, StoryObj } from '@storybook/react-vite';

import type { ComponentProps } from 'react';

import DButtonIcon from '../../src/components/DButtonIcon/DButtonIcon';

import { DContextProvider } from '../../src';
import {
  COMPONENT_SIZE,
  CONTEXT_PROVIDER_CONFIG_MATERIAL,
  ICONS,
  INPUT_STATE,
  THEMES,
} from '../config/constants';

const config: Meta<typeof DButtonIcon> = {
  title: 'Design System/Components/Button Icon',
  component: DButtonIcon,
  parameters: {
    docs: {
      description: {
        component: `
> We work with button variables at two levels, variables in root per variant (default, outline, link)
>and internal variables in each button that use the previous ones.

> - in the root there are variables for color (\`--df-role-primary-base\`, \`--df-role-info-base\`, ...),
> - then the variant and colour attributes (\`data-variant\`, \`data-color\`),
> - and finally the component's own variables (\`--df-button-bg\`, \`--df-button-hover-bg\`, ...),
>   which the variant&colour matrix fills from the ones above.

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

Every value below is a design token: set it on the component, on an ancestor, or
on \`:root\` to retheme. The table is generated from \`tokens/component/button.json\`,
so it cannot fall out of step with the stylesheet.

| Variable                          | Type        | Description       |
|-----------------------------------|-------------|-------------------|
| \`--df-button-padding-block\`     | css length  | Padding block     |
| \`--df-button-padding-inline\`    | css length  | Padding inline    |
| \`--df-button-gap\`               | css length  | Gap               |
| \`--df-button-font-family\`       | font family | Font family       |
| \`--df-button-font-size\`         | css length  | Font size         |
| \`--df-button-font-weight\`       | font weight | Font weight       |
| \`--df-button-line-height\`       | number      | Line height       |
| \`--df-button-radius\`            | css length  | Radius            |
| \`--df-button-border-width\`      | css length  | Border width      |
| \`--df-button-disabled-opacity\`  | number      | Disabled opacity  |
| \`--df-button-sm-padding-block\`  | css length  | Sm padding block  |
| \`--df-button-sm-padding-inline\` | css length  | Sm padding inline |
| \`--df-button-sm-font-size\`      | css length  | Sm font size      |
| \`--df-button-sm-radius\`         | css length  | Sm radius         |
| \`--df-button-lg-padding-block\`  | css length  | Lg padding block  |
| \`--df-button-lg-padding-inline\` | css length  | Lg padding inline |
| \`--df-button-lg-font-size\`      | css length  | Lg font size      |
| \`--df-button-lg-radius\`         | css length  | Lg radius         |

        `,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      type: 'string',
      table: { category: 'Appearance' },
    },
    style: {
      control: 'object',
      table: { category: 'Appearance' },
    },
    id: {
      control: 'text',
      type: 'string',
      table: { category: 'HTML Attributes' },
    },

    href: {
      control: 'text',
      description: 'If provided, renders as an &lt;a&gt; element instead of &lt;button&gt;.',
      table: { category: 'HTML Attributes' },
    },
    target: {
      control: 'select',
      options: [undefined, '_self', '_blank', '_parent', '_top'],
      description: 'Anchor target when href is set.',
      table: { category: 'HTML Attributes' },
    },
    rel: {
      control: 'text',
      description: 'Anchor rel attribute (use "noopener noreferrer" with target="_blank").',
      table: { category: 'HTML Attributes' },
    },
    color: {
      control: 'select',
      options: THEMES,
      table: {
        defaultValue: { summary: 'primary' },
        category: 'Appearance',
      },
    },
    size: {
      control: {
        type: 'select',
      },
      type: 'string',
      options: COMPONENT_SIZE,
      table: { category: 'Appearance' },
    },
    type: {
      control: 'select',
      type: 'string',
      options: ['submit', 'reset', 'button'],
      table: {
        defaultValue: { summary: 'button' },
        category: 'HTML Attributes',
      },
      description: 'The html type of the button.',
    },
    icon: {
      control: {
        type: 'select',
        table: {
          defaultValue: { summary: 'arrow-left' },
          category: 'Icon',
        },
      },
      options: [undefined, ...ICONS],
    },
    iconFamilyClass: {
      control: 'text',
      type: 'string',
      table: { category: 'Icon' },
    },
    iconFamilyPrefix: {
      control: 'text',
      type: 'string',
      table: { category: 'Icon' },
    },
    iconMaterialStyle: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Icon' },
    },
    loading: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
      type: 'boolean',
    },
    disabled: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
      type: 'boolean',
    },
    loadingAriaLabel: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
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
      table: { category: 'Behavior' },
    },
    stopPropagationEnabled: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'true' },
        category: 'Behavior',
      },
      type: 'boolean',
    },
    onClick: {
      action: 'onClick',
      table: { category: 'Events' },
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'link', 'soft'],
      table: {
        defaultValue: { summary: 'solid' },
        category: 'Appearance',
      },
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DButtonIcon>;

export const Default: Story = {
  args: {
    color: 'primary',
    size: undefined,
    type: 'button',
    variant: 'solid',
    loading: false,
    icon: 'ArrowLeft',
    'aria-label': 'Go back',
  },
};

export const Outline: Story = {
  args: {
    color: 'primary',
    size: undefined,
    type: 'button',
    variant: 'outline',
    loading: false,
    icon: 'ArrowLeft',
    'aria-label': 'Go back',
  },
};

export const Link: Story = {
  args: {
    color: 'primary',
    size: undefined,
    type: 'button',
    variant: 'link',
    loading: false,
    icon: 'ArrowLeft',
    'aria-label': 'Go back',
  },
};

export const Soft: Story = {
  args: {
    color: 'primary',
    size: undefined,
    type: 'button',
    variant: 'soft',
    loading: false,
    icon: 'ArrowLeft',
    'aria-label': 'Go back',
  },
};

export const VariantsByColor: Story = {
  render: () => (
    <>
      <div className="df-flex df-flex-col df-gap-4">
        <h6>
          Solid
          <small className="df-text-muted df-fw-normal"> (default variant)</small>
        </h6>
        <div className="df-flex df-flex-wrap df-gap-2 df-items-center">
          {THEMES.filter((color) => color !== 'light').map((color) => (
            <DButtonIcon
              key={color}
              color={color}
              icon="ArrowLeft"
              aria-label={`Default or Solid ${color} icon button`}
            />
          ))}
        </div>
        <h6>Outline</h6>
        <div className="df-flex df-flex-wrap df-gap-2 df-items-center">
          {THEMES.filter((color) => color !== 'light').map((color) => (
            <DButtonIcon
              key={color}
              color={color}
              variant="outline"
              icon="ArrowLeft"
              aria-label={`Outline ${color} icon button`}
            />
          ))}
        </div>
        <h6>Link</h6>
        <div className="df-flex df-flex-wrap df-gap-2 df-items-center">
          {THEMES.filter((color) => color !== 'light').map((color) => (
            <DButtonIcon
              key={color}
              color={color}
              variant="link"
              icon="ArrowLeft"
              aria-label={`Link ${color} icon button`}
            />
          ))}
        </div>
        <h6>Soft</h6>
        <div className="df-flex df-flex-wrap df-gap-2 df-items-center">
          {THEMES.filter((color) => color !== 'light').map((color) => (
            <DButtonIcon
              key={color}
              color={color}
              variant="soft"
              icon="ArrowLeft"
              aria-label={`Soft ${color} icon button`}
            />
          ))}
        </div>
      </div>

      <hr className="df-my-4" />
      <div>
        <p className="df-mb-1 df-fs-body-sm">The Light color for dark backgrounds</p>
        <div className="df-flex df-gap-2 df-p-4 df-rounded-control" style={{ background: 'var(--df-role-primary-base-active, #1a237e)' }}>
          <DButtonIcon
            variant="solid"
            color="light"
            icon="ArrowLeft"
            aria-label="Default or solid light icon button"
          />
          <DButtonIcon
            color="light"
            variant="outline"
            icon="ArrowLeft"
            aria-label="Outline light icon button"
          />
          <DButtonIcon
            color="light"
            variant="link"
            icon="ArrowLeft"
            aria-label="Link light icon button"
          />
          <DButtonIcon
            color="light"
            variant="soft"
            icon="ArrowLeft"
            aria-label="Soft light icon button"
          />
        </div>
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All variants of icon button across semantic colors. Includes light variant on dark background for contrast validation.',
      },
    },
  },
};

export const AsAnchor: Story = {
  args: {
    color: 'primary',
    icon: 'ArrowRight',
    href: 'https://dynamicframework.dev',
    target: '_blank',
    rel: 'noopener noreferrer',
    'aria-label': 'Open page in new tab',
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
    color: 'primary',
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
