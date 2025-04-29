import { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import { ICONS, CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';
import { DBadge, DContextProvider } from '../../src';
import DInputPhone from '../../src/components/DInputPhone';

const config: Meta<typeof DInputPhone> = {
  title: 'Design System/Components/Input Phone',
  component: DInputPhone,
  parameters: {
    docs: {
      description: {
        component: `
Wrapper around Bootstrap input group elements.
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
      description: 'Name of the input',
    },
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
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
    labelIconFamilyClass: {
      control: 'text',
      type: 'string',
    },
    labelIconFamilyPrefix: {
      control: 'text',
      type: 'string',
    },
    labelIconMaterialStyle: {
      control: 'boolean',
      type: 'boolean',
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
    size: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, 'sm', 'lg'],
    },
    inputMode: {
      control: 'text',
      type: 'string',
      description: 'Input mode',
    },
    pattern: {
      control: 'text',
      type: 'string',
      description: 'Pattern to validate',
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    readOnly: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    loading: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
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
    },
    iconEndDisabled: {
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
    hint: {
      control: 'text',
      type: 'string',
      description: 'Hint to display, also used to display validity feedback',
    },
    invalid: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    valid: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    floatingLabel: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    onIconEndClick: {
      action: 'onIconEndClicked',
    },
    onChange: {
      action: 'onChange',
    },
    onBlur: {
      action: 'onBlur',
    },
    onFocus: {
      action: 'onFocus',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DInputPhone>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '300px', width: '300px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    id: 'componentId1',
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Assistive text',
  },
};

export const Invalid: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '300px', width: '300px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    id: 'componentId2',
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Assistive text',
    invalid: true,
  },
};

export const Valid: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '300px', width: '300px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    id: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Assistive text',
    valid: true,
  },
};

export const Disabled: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '120px', width: '300px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    id: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Assistive text',
    disabled: true,
  },
};

export const FloatingLabel: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '300px', width: '300px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    id: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Assistive text',
    floatingLabel: true,
  },
};

export const CustomInputEnd: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '300px', width: '300px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    id: 'componentId6',
    label: 'Label',
    placeholder: 'Placeholder',
    inputEnd: (
      <DBadge
        text="1"
        soft
      />
    ),
  },
};

export const MaterialIcon: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '300px', width: '300px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args: ComponentProps<typeof DInputPhone>) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DInputPhone {...args} />
    </DContextProvider>
  ),
  args: {
    id: 'componentId7',
    label: 'Label',
    placeholder: 'Placeholder',
    iconEnd: 'face_5',
    iconEndAriaLabel: 'end action',
  },
};

export const MaterialIconError: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '300px', width: '300px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args: ComponentProps<typeof DInputPhone>) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DInputPhone {...args} />
    </DContextProvider>
  ),
  args: {
    id: 'componentId8',
    label: 'Label',
    placeholder: 'Placeholder',
    invalid: true,
  },
};

export const MaterialIconConfirm: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '300px', width: '300px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args: ComponentProps<typeof DInputPhone>) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DInputPhone {...args} />
    </DContextProvider>
  ),
  args: {
    id: 'componentId9',
    label: 'Label',
    placeholder: 'Placeholder',
    valid: true,
  },
};
