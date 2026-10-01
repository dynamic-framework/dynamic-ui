import { Meta, StoryObj } from '@storybook/react-vite';

import type { ComponentProps } from 'react';

import DInputPassword from '../../src/components/DInputPassword/DInputPassword';
import { CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';
import { DContextProvider } from '../../src';

const config: Meta<typeof DInputPassword> = {
  title: 'Design System/Components/Input Password',
  component: DInputPassword,
  parameters: {
    docs: {
      description: {
        component: `
Component composition with \`d-input\` to make a password input component.

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
| \`--df-input-disabled-bg\`             | css color   | Disabled background                                                                                                                                                               |
| \`--df-input-disabled-fg\`             | css color   | Disabled foreground                                                                                                                                                               |
| \`--df-input-disabled-border-color\`   | css color   | Disabled border color                                                                                                                                                             |
| \`--df-input-sm-padding-block\`        | css length  | Sm padding block                                                                                                                                                                  |
| \`--df-input-sm-padding-inline\`       | css length  | Sm padding inline                                                                                                                                                                 |
| \`--df-input-sm-font-size\`            | css length  | Sm font size                                                                                                                                                                      |
| \`--df-input-lg-padding-block\`        | css length  | Lg padding block                                                                                                                                                                  |
| \`--df-input-lg-padding-inline\`       | css length  | Lg padding inline                                                                                                                                                                 |
| \`--df-input-lg-font-size\`            | css length  | Lg font size                                                                                                                                                                      |
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
      control: 'text',
      type: 'string',
      description: 'The value of the input',
      table: { category: 'Content' },
    },
    size: {
      control: {
        type: 'radio',
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
    hint: {
      control: 'text',
      type: 'string',
      description: 'Hint to display, also used to display validity feedback',
      table: { category: 'Content' },
    },
    iconEndAriaLabel: {
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
};

export default config;
type Story = StoryObj<typeof DInputPassword>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    iconEndAriaLabel: 'show/hide password',
  },
};

export const Invalid: Story = {
  args: {
    id: 'componentId2',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    invalid: true,
    iconEndAriaLabel: 'show/hide password',
  },
};

export const Valid: Story = {
  args: {
    id: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    valid: true,
    iconEndAriaLabel: 'show/hide password',
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    disabled: true,
    iconEndAriaLabel: 'show/hide password',
  },
};

export const Floating: Story = {
  args: {
    id: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    iconEndAriaLabel: 'show/hide password',
    floatingLabel: true,
  },
};

export const MaterialIcon: Story = {
  render: (args: ComponentProps<typeof DInputPassword>) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DInputPassword {...args} />
    </DContextProvider>
  ),
  args: {
    id: 'componentId6',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    iconEndAriaLabel: 'show/hide password',
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};
