import { Meta, StoryObj } from '@storybook/react-vite';

import type { ComponentProps } from 'react';

import DInput from '../../src/components/DInput/DInput';
import { ICONS, CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';
import { DContextProvider, DIcon } from '../../src';

import domEventAction from '../config/domEventAction';

const config: Meta<typeof DInput> = {
  title: 'Design System/Components/Input',
  component: DInput,
  parameters: {
    docs: {
      description: {
        component: `
Wrapper around Bootstrap input group elements.

Give textual form controls like \`<input>s\`, \`<textarea>s\` and \`<label>s\` an upgrade with custom styles, sizing, focus states, and more.

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
  args: {
    onFocus: domEventAction('onFocus'),
    onBlur: domEventAction('onBlur'),
    onWheel: domEventAction('onWheel'),
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
      description: 'Name of the input',
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
    type: {
      control: 'select',
      options: ['text', 'email', 'number'],
      type: 'string',
      description: 'The type of the input',
      table: { category: 'HTML Attributes' },
    },
    value: {
      control: 'text',
      type: 'string',
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
    inputMode: {
      control: 'text',
      type: 'string',
      description: 'Input mode',
      table: { category: 'HTML Attributes' },
    },
    pattern: {
      control: 'text',
      type: 'string',
      description: 'Pattern to validate',
      table: { category: 'HTML Attributes' },
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
    iconStartDisabled: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    iconStartAriaLabel: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    iconStartTabIndex: {
      control: 'number',
      type: 'number',
      table: { category: 'HTML Attributes' },
    },
    iconStartFamilyClass: {
      control: 'text',
      type: 'string',
      table: { category: 'Icon' },
    },
    iconStartFamilyPrefix: {
      control: 'text',
      type: 'string',
      table: { category: 'Icon' },
    },
    iconStartMaterialStyle: {
      control: 'boolean',
      type: 'boolean',
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
    iconEndDisabled: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    iconEndAriaLabel: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    iconEndTabIndex: {
      control: 'number',
      type: 'number',
      table: { category: 'HTML Attributes' },
    },
    iconEndFamilyClass: {
      control: 'text',
      type: 'string',
      table: { category: 'Icon' },
    },
    iconEndFamilyPrefix: {
      control: 'text',
      type: 'string',
      table: { category: 'Icon' },
    },
    iconEndMaterialStyle: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Icon' },
    },
    hint: {
      control: 'text',
      type: 'string',
      description: 'Hint to display, also used to display validity feedback',
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
    onIconStartClick: {
      action: 'onIconStartClicked',
      table: { category: 'Events' },
    },
    onIconEndClick: {
      action: 'onIconEndClicked',
      table: { category: 'Events' },
    },
    onChange: {
      action: 'onChange',
      table: { category: 'Events' },
    },
    onBlur: {
      table: { category: 'Events' },
    },
    onFocus: {
      table: { category: 'Events' },
    },
    onWheel: {
      table: { category: 'Events' },
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DInput>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    value: undefined,
    hint: 'Assistive text',
  },
};

export const Invalid: Story = {
  args: {
    id: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    value: undefined,
    iconStart: 'Smile',
    iconStartAriaLabel: 'start action',
    iconEnd: undefined,
    hint: 'Assistive text',
    invalid: true,
  },
};

export const Valid: Story = {
  args: {
    id: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    value: undefined,
    iconStart: 'Smile',
    iconStartAriaLabel: 'start action',
    iconEnd: undefined,
    hint: 'Assistive text',
    valid: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    value: undefined,
    iconEnd: 'ArrowRight',
    iconEndAriaLabel: 'start action',
    hint: 'Assistive text',
    disabled: true,
  },
};

export const Floating: Story = {
  args: {
    id: 'componentId7',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    value: '',
    iconEnd: 'ArrowRight',
    iconEndAriaLabel: 'end action',
    hint: 'Assistive text',
    floatingLabel: true,
  },
};

export const CustomInputStart: Story = {
  args: {
    id: 'componentId8',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    inputStart: (
      <DIcon
        icon="User"
      />
    ),
  },
};

export const CustomInputEnd: Story = {
  args: {
    id: 'componentId9',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    inputEnd: (
      <DIcon
        icon="ArrowRight"
      />
    ),
  },
};

export const MaterialIcon: Story = {
  render: (args: ComponentProps<typeof DInput>) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DInput {...args} />
    </DContextProvider>
  ),
  args: {
    id: 'componentId10',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    iconStart: 'face_5',
    iconStartAriaLabel: 'start action',
  },
};
