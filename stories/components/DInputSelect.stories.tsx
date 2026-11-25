import type { Meta, StoryObj } from '@storybook/react-vite';

import { DInputSelect } from '../../src';
import { ICONS } from '../config/constants';
import { PREFIX_BS } from '../../src/components/config';

import type { DInputSelectProps } from '../../src';

const meta = {
  title: 'Design System/Components/Input Select',
  component: DInputSelect,
  parameters: {
    docs: {
      description: {
        component: `
Customize the native \`<select>s\` with custom CSS that changes the element’s initial appearance, with a partial API of \`d-input\` over the HTML select component.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Select](https://getbootstrap.com/docs/5.3/forms/select/)
+ [Bootstrap Custom Select](https://getbootstrap.com/docs/5.3/forms/input-group/#custom-select)

## CSS Variables

The Bootstrap documentation provides details on the default [Select CSS Variables](https://getbootstrap.com/docs/5.3/forms/select/#css)

| Variable                                  | Class        | Type            | Description                 |
|-------------------------------------------|--------------|-----------------|-----------------------------|
| --${PREFIX_BS}label-color                 | :root        | css color unit  | Label color                 |
| --${PREFIX_BS}label-font-weight           | :root        | css font weight | Label font weight           |
| --${PREFIX_BS}label-font-size             | :root        | css length unit | Label font size             |
| --${PREFIX_BS}label-padding-x             | :root        | css length unit | Label horizontal padding    |
| --${PREFIX_BS}label-padding-y             | :root        | css length unit | Label vertical padding      |
| --${PREFIX_BS}input-border-color          | .input-group | css color unit  | Input border color          |
| --${PREFIX_BS}input-border-width          | .input-group | css length unit | Input border width          |
| --${PREFIX_BS}input-border-radius         | .input-group | css length unit | Input border radius         |
| --${PREFIX_BS}input-focus-border-color    | .input-group | css color unit  | Input focus border color    |
| --${PREFIX_BS}input-focus-box-shadow      | .input-group | css shadow      | Input focus box shadow      |
| --${PREFIX_BS}input-disabled-bg           | .input-group | css color unit  | Input disable background    |
| --${PREFIX_BS}input-disabled-color        | .input-group | css color unit  | Input disable color         |
| --${PREFIX_BS}input-disabled-border-color | .input-group | css color unit  | Input disable border color  |
| --${PREFIX_BS}form-text-padding           | .form-text   | css length unit | Hint padding                |
| --${PREFIX_BS}form-text-gap               | .form-text   | css length unit | Space between hint elements |
| --${PREFIX_BS}form-text-color             | .form-text   | css color unit  | Hint color                  |

### Icon

The chevron on the right of the control is an SVG served as a data URL, declared on \`:root\`:
overriding it there changes every native select at once.

| Variable                           | Class  | Type         | Description            |
|------------------------------------|--------|--------------|------------------------|
| --${PREFIX_BS}form-select-icon     | :root  | data url svg | Chevron of the select  |

\`\`\`css
/* After dynamic-ui.css */
:root {
  /* A thicker chevron, in the brand gray */
  --${PREFIX_BS}form-select-icon:
    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='%236d6d82' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/></svg>");
}
\`\`\`

Two things to keep in mind when writing the value:

+ **The color inside the SVG has to be a literal.** A \`var()\` there does not resolve: the browser
renders an SVG used as an image as a separate document, which does not inherit the page's custom
properties, so the stroke falls back to its initial value. Write \`%236d6d82\`,
\`rgb(109 109 130)\` or a named color — not \`var(--${PREFIX_BS}gray-500)\`.
+ **Percent-encode \`#\`.** Inside a URL it starts a fragment, so a hex color has to be written as
\`%236d6d82\`. Using \`rgb()\` or a named color avoids the question.

\`:root\` is the place to theme every select. For a single one, \`.form-select\` exposes
\`--${PREFIX_BS}form-select-bg-img\`, which reads the variable above and can be set on the element
instead. The drawn size is not a CSS variable: it is fixed at build time by the
\`$form-select-bg-size\` Sass variable, so the SVG has to be authored to fit it.
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
      description: 'Accepts any ReactNode. A text label doubles as the accessible name; a richer one needs an explicit ariaLabel.',
      table: { category: 'Content', type: { summary: 'ReactNode' } },
    },
    ariaLabel: {
      control: 'text',
      type: 'string',
      description: 'Accessible name of the control. Required when `label` is not plain text.',
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
      action: 'onBlur',
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
} satisfies Meta<typeof DInputSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

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
