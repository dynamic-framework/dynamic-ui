import type { Meta, StoryObj } from '@storybook/react-vite';

import DInputSelect from '../../src/components/DInputSelect';
import { ICONS } from '../config/constants';

import type { DInputSelectProps } from '../../src/components/DInputSelect';

import domEventAction from '../config/domEventAction';

const config: Meta<typeof DInputSelect> = {
  title: 'Design System/Components/Input Select',
  component: DInputSelect,
  parameters: {
    docs: {
      description: {
        component: `
Customize the native \`<select>s\` with custom CSS that changes the element’s initial appearance, with a partial API of \`d-input\` over the HTML select component.

## CSS Variables

Every value below is a design token: set it on the component, on an ancestor, or
on \`:root\` to retheme. The table is generated from \`tokens/component/select.json\`,
so it cannot fall out of step with the stylesheet.

| Variable                             | Type       | Description          |
|--------------------------------------|------------|----------------------|
| \`--df-select-padding-block\`        | css length | Padding block        |
| \`--df-select-padding-inline\`       | css length | Padding inline       |
| \`--df-select-indicator-space\`      | css length | Indicator space      |
| \`--df-select-font-size\`            | css length | Font size            |
| \`--df-select-radius\`               | css length | Radius               |
| \`--df-select-border-width\`         | css length | Border width         |
| \`--df-select-bg\`                   | css color  | Background           |
| \`--df-select-fg\`                   | css color  | Foreground           |
| \`--df-select-border-color\`         | css color  | Border color         |
| \`--df-select-indicator-color\`      | css color  | Indicator color      |
| \`--df-select-focus-border-color\`   | css color  | Focus border color   |
| \`--df-select-invalid-border-color\` | css color  | Invalid border color |
| \`--df-select-valid-border-color\`   | css color  | Valid border color   |
| \`--df-select-disabled-bg\`          | css color  | Disabled background  |
| \`--df-select-disabled-fg\`          | css color  | Disabled foreground  |

        `,
      },
    },
  },
  args: {
    onBlur: domEventAction('onBlur'),
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
    value: {
      control: 'text',
      type: 'string',
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
    label: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
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
    hint: {
      control: 'text',
      type: 'string',
      description: 'Hint to display, also used to display validity feedback',
      table: { category: 'Content' },
    },
    disabled: {
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
    labelExtractor: {
      table: {
        defaultValue: {
          summary: '(item: any) => item?.label',
        },
        category: 'Behavior',
      },
    },
    valueExtractor: {
      table: {
        defaultValue: {
          summary: '(item: any) => item?.value',
        },
        category: 'Behavior',
      },
    },
    onIconStartClick: {
      action: 'onIconStartClick',
      table: { category: 'Events' },
    },
    onIconEndClick: {
      action: 'onIconEndClick',
      table: { category: 'Events' },
    },
    onChange: {
      action: 'onChange',
      table: { category: 'Events' },
    },
    onBlur: {
      table: { category: 'Events' },
    },
    floatingLabel: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Appearance',
      },
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DInputSelect>;

export const Default: Story = {
  args: {
    label: 'Label',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
    hint: 'Assistive text',
  },
};

export const Selected: Story = {
  args: {
    id: 'componentId2',
    label: 'Label',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
    value: '2',
    hint: 'Assistive text',
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId3',
    label: 'Label',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
    hint: 'Assistive text',
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    id: 'componentId4',
    label: 'Label',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
    hint: 'Assistive text',
    invalid: true,
  },
};

export const Valid: Story = {
  args: {
    id: 'componentId5',
    label: 'Label',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
    hint: 'Assistive text',
    valid: true,
  },
};

export const Icon: Story = {
  args: {
    id: 'componentId6',
    label: 'Label',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
    hint: 'Assistive text',
    iconStart: 'Smile',
    iconEnd: 'Smile',
    iconStartAriaLabel: 'start action',
    iconEndAriaLabel: 'end action',
  },
};

export const Extractors: StoryObj<DInputSelectProps<{ id: string; text: string; }>> = {
  render: (args) => (
    <DInputSelect<{ id: string; text: string; }> {...args} />
  ),
  args: {
    id: 'componentId7',
    label: 'Label',
    options: [
      { id: '1', text: 'Option 1' },
      { id: '2', text: 'Option 2' },
    ],
    labelExtractor: (item: { text: string }) => item.text,
    valueExtractor: (item: { id: string }) => item.id,
    hint: 'Assistive text',
  },
};

export const Floating: Story = {
  args: {
    id: 'componentId8',
    label: 'Label',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
    hint: 'Assistive text',
    floatingLabel: true,
  },
};
