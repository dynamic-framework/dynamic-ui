import { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import DInputSearch from '../../src/components/DInputSearch/DInputSearch';
import { ICONS, CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';
import { PREFIX_BS } from '../../src/components/config';
import { DContextProvider } from '../../src';

const config: Meta<typeof DInputSearch> = {
  title: 'Design System/Components/Input Search',
  component: DInputSearch,
  parameters: {
    docs: {
      description: {
        component: `
Component composition with \`d-input\` to make a search input component.

## CSS Variables
| Variable                                         | Type            | Description                   |
|--------------------------------------------------|-----------------|-------------------------------|
| --${PREFIX_BS}label-color                        | css color unit  | Label color                   |
| --${PREFIX_BS}label-font-weight                  | css font weight | Label font weight             |
| --${PREFIX_BS}label-font-size                    | css length unit | Label font size               |
| --${PREFIX_BS}label-padding-x                    | css length unit | Label horizontal padding      |
| --${PREFIX_BS}label-padding-y                    | css length unit | Label vertical padding        |
| --${PREFIX_BS}input-border-color                 | css color unit  | Input border color            |
| --${PREFIX_BS}input-border-width                 | css length unit | Input border width            |
| --${PREFIX_BS}input-border-radius                | css length unit | Input border radius           |
| --${PREFIX_BS}input-focus-border-color           | css color unit  | Input focus border color      |
| --${PREFIX_BS}input-focus-box-shadow             | css shadow      | Input focus box shadow        |
| --${PREFIX_BS}input-disabled-bg                  | css color unit  | Input disable background      |
| --${PREFIX_BS}input-disabled-color               | css color unit  | Input disable color           |
| --${PREFIX_BS}input-disabled-border-color        | css color unit  | Input disable border color    |
| --${PREFIX_BS}form-text-padding                  | css length unit | Hint padding                  |
| --${PREFIX_BS}form-text-gap                      | css length unit | Space between hint elements   |
| --${PREFIX_BS}form-text-color                    | css color unit  | Hint color                    |
| --${PREFIX_BS}form-control-text-align            | css text align  | Input text align              |
        `,
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      type: 'string',
      description: 'The id of the input',
    },
    name: {
      control: 'text',
      type: 'string',
      description: 'The name of the input',
    },
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
    },
    label: {
      control: 'text',
      type: 'string',
    },
    labelIcon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
    },
    placeholder: {
      control: 'text',
      type: 'string',
    },
    value: {
      control: 'text',
      type: 'string',
      description: 'The value of the input',
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    readOnly: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    loading: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    hint: {
      control: 'text',
      type: 'string',
      description: 'Hint to display, also used to display validity feedback',
    },
    iconEndAriaLabel: {
      control: 'text',
      type: 'string',
    },
    invalid: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    valid: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    floatingLabel: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    onClick: {
      action: 'onClick',
    },
    onChange: {
      action: 'onChange',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DInputSearch>;

export const Default: Story = {
  args: {
    id: 'componentId1',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    iconEndAriaLabel: 'search',
  },
};

export const Error: Story = {
  args: {
    id: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    invalid: true,
    iconEndAriaLabel: 'search',
  },
};

export const Confirm: Story = {
  args: {
    id: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    valid: true,
    iconEndAriaLabel: 'search',
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    disabled: true,
    iconEndAriaLabel: 'search',
  },
};

export const Floating: Story = {
  args: {
    id: 'componentId6',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    iconEndAriaLabel: 'search',
    floatingLabel: true,
  },
};

export const MaterialIcon: Story = {
  render: (args: ComponentProps<typeof DInputSearch>) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DInputSearch {...args} />
    </DContextProvider>
  ),
  args: {
    id: 'componentId7',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    iconEndAriaLabel: 'search',
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};
