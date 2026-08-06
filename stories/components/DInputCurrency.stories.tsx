import { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type ComponentProps } from 'react';

import DInputCurrency from '../../src/components/DInputCurrency/DInputCurrency';
import { ICONS } from '../config/constants';
import { DContextProvider } from '../../src';
import { PREFIX_BS } from '../../src/components/config';

const config: Meta<typeof DInputCurrency> = {
  title: 'Design System/Components/Input Currency',
  component: DInputCurrency,
  parameters: {
    docs: {
      description: {
        component: `
Component composition with \`d-input-currency-base\` to make a currency input component that use
a \`DContextProvider\` to get the currency config.

## CSS Variables

The Bootstrap documentation provides details on the default [Input Form CSS Variables](https://getbootstrap.com/docs/5.3/forms/form-control/#css)
and so it does [Input Group CSS Variables](https://getbootstrap.com/docs/5.3/forms/input-group/#css)

| Variable                                  | Class         | Type            | Description                  |
|-------------------------------------------|---------------|-----------------|------------------------------|
| --${PREFIX_BS}label-color                 | :root         | css color unit  | Label color                  |
| --${PREFIX_BS}label-font-weight           | :root         | css font weight | Label font weight            |
| --${PREFIX_BS}label-font-size             | :root         | css length unit | Label font size              |
| --${PREFIX_BS}label-padding-x             | :root         | css length unit | Label horizontal padding     |
| --${PREFIX_BS}label-padding-y             | :root         | css length unit | Label vertical padding       |
| --${PREFIX_BS}input-border-color          | .input-group  | css color unit  | Input border color           |
| --${PREFIX_BS}input-border-width          | .input-group  | css length unit | Input border width           |
| --${PREFIX_BS}input-border-radius         | .input-group  | css length unit | Input border radius          |
| --${PREFIX_BS}input-focus-border-color    | .input-group  | css color unit  | Input focus border color     |
| --${PREFIX_BS}input-focus-box-shadow      | .input-group  | css shadow      | Input focus box shadow       |
| --${PREFIX_BS}input-disabled-bg           | .input-group  | css color unit  | Input disable background     |
| --${PREFIX_BS}input-disabled-color        | .input-group  | css color unit  | Input disable color          |
| --${PREFIX_BS}input-disabled-border-color | .input-group  | css color unit  | Input disable border color   |
| --${PREFIX_BS}form-text-padding           | .form-text    | css length unit | Hint padding                 |
| --${PREFIX_BS}form-text-gap               | .form-text    | css length unit | Space between hint elements  |
| --${PREFIX_BS}form-text-color             | .form-text    | css color unit  | Hint color                   |
| --${PREFIX_BS}form-control-text-align     | .form-control | css text align  | Input text align             |
| --${PREFIX_BS}input-currency-symbol-color | .input-group  | css color unit  | Color of the currency symbol |
| --${PREFIX_BS}icon-component-color        | .d-icon       | css color unit  | Color of the \`iconStart\`/\`iconEnd\` icon |

## Changing the currency symbol color

The currency symbol (the \`$\`, \`CLP\`, etc. rendered via \`inputStart\`) is wrapped in a
\`.d-input-currency-symbol\` element whose color is controlled by two chained CSS variables, defined in
the component's stylesheet (not via inline style):

- \`--${PREFIX_BS}input-currency-component-symbol-color\`: the "public" variable meant to be overridden.
  Defaults to \`var(--${PREFIX_BS}secondary)\` when not set.
- \`--${PREFIX_BS}input-currency-symbol-color\`: the variable actually consumed by \`.d-input-currency-symbol\`'s
  \`color\`. Falls back to the public variable above.

Since these are regular CSS custom properties (no inline style involved), you can override the public
variable from any ancestor selector, using either \`className\` or the \`style\` prop:

\`\`\`jsx
<DInputCurrency
  className="my-input-currency"
/>
\`\`\`
\`\`\`css
.my-input-currency {
  --${PREFIX_BS}input-currency-component-symbol-color: #dc3545;
}
\`\`\`

\`\`\`jsx
<DInputCurrency
  style={{ '--${PREFIX_BS}input-currency-component-symbol-color': '#dc3545' }}
/>
\`\`\`

## Changing the icon color

\`DInputCurrency\` also supports \`iconStart\`/\`iconEnd\` (inherited from \`DInput\`), rendered via \`DIcon\`.
Their color is controlled by the \`--${PREFIX_BS}icon-component-color\` CSS variable (defined on the
internal \`.d-icon\` element), which is **not** set via inline style, so it can be safely scoped with a
regular \`className\`:

\`\`\`css
.my-input-currency .d-icon {
  --${PREFIX_BS}icon-component-color: #dc3545;
}
\`\`\`

\`\`\`jsx
<DInputCurrency className="my-input-currency" iconStart="Search" />
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      type: 'string',
      description: 'The id of the input',
      table: { category: 'HTML Attributes' },
    },
    name: {
      control: 'text',
      type: 'string',
      description: 'The name of the input',
      table: { category: 'HTML Attributes' },
    },
    className: {
      control: 'text',
      type: 'string',
      table: { category: 'Appearance' },
    },
    style: {
      control: 'object',
      table: { category: 'Appearance' },
    },
    label: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    placeholder: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    value: {
      control: false,
      type: 'number',
      description: 'The value of the input',
      table: { category: 'Content' },
    },
    size: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, 'sm', 'lg'],
      table: { category: 'Appearance' },
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    readOnly: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    loading: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    iconStart: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
      table: { category: 'Icon' },
    },
    iconEnd: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
      table: { category: 'Icon' },
    },
    iconStartAriaLabel: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    iconEndAriaLabel: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    hint: {
      control: 'text',
      type: 'string',
      description: 'Hint to display, also used to display validity feedback',
      table: { category: 'Content' },
    },
    currencyCode: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    invalid: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    valid: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    minValue: {
      control: 'number',
      type: 'number',
      table: { category: 'Behavior' },
    },
    maxValue: {
      control: 'number',
      type: 'number',
      table: { category: 'Behavior' },
    },
    floatingLabel: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Appearance',
      },
    },
    onChange: {
      action: 'onChange',
      table: { category: 'Events' },
    },
  },
  tags: ['autodocs'],
  render: function Render(args: ComponentProps<typeof DInputCurrency>) {
    const [innerValue, setInnerValue] = useState<number | undefined>(args.value);

    return (
      <DContextProvider>
        <DInputCurrency
          {...args}
          value={innerValue}
          onChange={(newValue) => {
            setInnerValue(newValue);
            if (args.onChange) {
              args.onChange(newValue);
            }
          }}
        />
      </DContextProvider>
    );
  },
};

export default config;
type Story = StoryObj<typeof DInputCurrency>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    minValue: undefined,
    maxValue: undefined,
    readOnly: false,
    disabled: false,
    loading: false,
    invalid: false,
    valid: false,
    floatingLabel: false,
  },
};

export const Invalid: Story = {
  args: {
    id: 'componentId2',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    invalid: true,
  },
};

export const Valid: Story = {
  args: {
    id: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    valid: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    disabled: true,
  },
};

export const WithCurrencyCode: Story = {
  args: {
    id: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    currencyCode: 'CLP',
  },
};

export const WithRangeMinMax: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The component can receive a min and max value to limit the input value. This example shows the component with a min value of <strong>$0.00</strong> and a max value of <strong>$10,000.00</strong>.',
      },
    },
  },
  args: {
    id: 'componentId6',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    minValue: 0,
    maxValue: 10000,
  },
};

export const Floating: Story = {
  args: {
    id: 'componentId7',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    floatingLabel: true,
  },
};

export const WithIconColor: Story = {
  args: {
    id: 'componentId7',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    iconEnd: 'Search',
    className: 'd-input-currency-icon-color-demo',
  },
  parameters: {
    docs: {
      description: {
        story: `
Changes the color of the \`iconEnd\` icon using \`className\` to scope the
\`--${PREFIX_BS}icon-component-color\` CSS variable, without affecting the currency symbol color.

\`\`\`css
.d-input-currency-icon-color-demo .d-icon {
  --${PREFIX_BS}icon-component-color: #dc3545;
}
\`\`\`
        `,
      },
    },
  },
  render: function Render(args: ComponentProps<typeof DInputCurrency>) {
    const [innerValue, setInnerValue] = useState<number | undefined>(args.value);

    return (
      <DContextProvider>
        <style>
          {`
            .d-input-currency-icon-color-demo .d-icon {
              --${PREFIX_BS}icon-component-color: #dc3545;
            }
          `}
        </style>
        <DInputCurrency
          {...args}
          value={innerValue}
          onChange={(newValue) => {
            setInnerValue(newValue);
            if (args.onChange) {
              args.onChange(newValue);
            }
          }}
        />
      </DContextProvider>
    );
  },
};

export const WithSymbolColor: Story = {
  args: {
    id: 'componentId8',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    className: 'd-input-currency-symbol-color-demo',
  },
  parameters: {
    docs: {
      description: {
        story: `
Changes the currency symbol color using \`className\` to scope the
\`--${PREFIX_BS}input-currency-component-symbol-color\` CSS variable.

\`\`\`css
.d-input-currency-symbol-color-demo {
  --${PREFIX_BS}input-currency-component-symbol-color: #dc3545;
}
\`\`\`
        `,
      },
    },
  },
  render: function Render(args: ComponentProps<typeof DInputCurrency>) {
    const [innerValue, setInnerValue] = useState<number | undefined>(args.value);

    return (
      <DContextProvider>
        <style>
          {`
            .d-input-currency-symbol-color-demo {
              --${PREFIX_BS}input-currency-component-symbol-color: #dc3545;
            }
          `}
        </style>
        <DInputCurrency
          {...args}
          value={innerValue}
          onChange={(newValue) => {
            setInnerValue(newValue);
            if (args.onChange) {
              args.onChange(newValue);
            }
          }}
        />
      </DContextProvider>
    );
  },
};
