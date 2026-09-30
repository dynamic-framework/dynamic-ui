import { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type ComponentProps } from 'react';

import DInputCurrency from '../../src/components/DInputCurrency/DInputCurrency';
import { ICONS } from '../config/constants';
import { DContextProvider } from '../../src';

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

Every value below is a design token: set it on the component, on an ancestor, or
on \`:root\` to retheme. The table is generated from \`tokens/component/input.json\`,
so it cannot fall out of step with the stylesheet.

| Variable                               | Type        | Description                                                                                                                                                                       |
|----------------------------------------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| \`--df-input-padding-block\`           | css length  | Padding block                                                                                                                                                                     |
| \`--df-input-padding-inline\`          | css length  | Padding inline                                                                                                                                                                    |
| \`--df-input-font-family\`             | font family | Font family                                                                                                                                                                       |
| \`--df-input-font-size\`               | css length  | Font size                                                                                                                                                                         |
| \`--df-input-line-height\`             | number      | Line height                                                                                                                                                                       |
| \`--df-input-radius\`                  | css length  | Radius                                                                                                                                                                            |
| \`--df-input-border-width\`            | css length  | Border width                                                                                                                                                                      |
| \`--df-input-bg\`                      | css color   | Background                                                                                                                                                                        |
| \`--df-input-fg\`                      | css color   | Foreground                                                                                                                                                                        |
| \`--df-input-border-color\`            | css color   | Border color                                                                                                                                                                      |
| \`--df-input-placeholder-color\`       | css color   | 2.x aliased the placeholder to $border-color (gray-100), which gives a 1.3:1 ratio against a white field — well under the 4.5:1 WCAG minimum for text. Moved to fg.muted (4.9:1). |
| \`--df-input-hover-border-color\`      | css color   | Hover border color                                                                                                                                                                |
| \`--df-input-focus-border-color\`      | css color   | Focus border color                                                                                                                                                                |
| \`--df-input-invalid-border-color\`    | css color   | Invalid border color                                                                                                                                                              |
| \`--df-input-invalid-fg\`              | css color   | Invalid foreground                                                                                                                                                                |
| \`--df-input-valid-border-color\`      | css color   | Valid border color                                                                                                                                                                |
| \`--df-input-valid-fg\`                | css color   | Valid foreground                                                                                                                                                                  |
| \`--df-input-disabled-bg\`             | css color   | Disabled background                                                                                                                                                               |
| \`--df-input-disabled-fg\`             | css color   | Disabled foreground                                                                                                                                                               |
| \`--df-input-disabled-border-color\`   | css color   | Disabled border color                                                                                                                                                             |
| \`--df-input-sm-padding-block\`        | css length  | Sm padding block                                                                                                                                                                  |
| \`--df-input-sm-padding-inline\`       | css length  | Sm padding inline                                                                                                                                                                 |
| \`--df-input-sm-font-size\`            | css length  | Sm font size                                                                                                                                                                      |
| \`--df-input-lg-padding-block\`        | css length  | Lg padding block                                                                                                                                                                  |
| \`--df-input-lg-padding-inline\`       | css length  | Lg padding inline                                                                                                                                                                 |
| \`--df-input-lg-font-size\`            | css length  | Lg font size                                                                                                                                                                      |
| \`--df-input-label-margin-block-end\`  | css length  | Label margin block end                                                                                                                                                            |
| \`--df-input-label-font-size\`         | css length  | Label font size                                                                                                                                                                   |
| \`--df-input-label-font-weight\`       | font weight | Label font weight                                                                                                                                                                 |
| \`--df-input-label-color\`             | css color   | Label color                                                                                                                                                                       |
| \`--df-input-help-margin-block-start\` | css length  | Help margin block start                                                                                                                                                           |
| \`--df-input-help-font-size\`          | css length  | Help font size                                                                                                                                                                    |
| \`--df-input-help-color\`              | css color   | 2.x used gray-400 here (3.5:1) and then forced gray-500 through _shame.scss with !important. Both paths now resolve to the same token.                                            |

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
      control: 'number',
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
    minValue: 0,
    maxValue: 100000,
  },
};

export const Invalid: Story = {
  args: {
    id: 'componentId2',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    invalid: true,
  },
};

export const Valid: Story = {
  args: {
    id: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    valid: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    disabled: true,
  },
};

export const WithCurrencyCode: Story = {
  args: {
    id: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    currencyCode: 'CLP',
  },
};

export const Floating: Story = {
  args: {
    id: 'componentId6',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    floatingLabel: true,
  },
};
