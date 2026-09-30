/* eslint-disable jsx-a11y/anchor-is-valid */
import { Meta, StoryObj } from '@storybook/react-vite';

import { ComponentProps } from 'react';
import { DContextProvider } from '../../src';
import DAlert from '../../src/components/DAlert/DAlert';
import {
  COLOR_STATES,
  CONTEXT_PROVIDER_CONFIG_MATERIAL,
  ICONS,
} from '../config/constants';

const config: Meta<typeof DAlert> = {
  title: 'Design System/Components/Alert',
  component: DAlert,
  parameters: {
    docs: {
      description: {
        component: `
## CSS Variables

Every value below is a design token: set it on the component, on an ancestor, or
on \`:root\` to retheme. The table is generated from \`tokens/component/alert.json\`,
so it cannot fall out of step with the stylesheet.

| Variable                         | Type        | Description       |
|----------------------------------|-------------|-------------------|
| \`--df-alert-padding-block\`     | css length  | Padding block     |
| \`--df-alert-padding-inline\`    | css length  | Padding inline    |
| \`--df-alert-gap\`               | css length  | Gap               |
| \`--df-alert-radius\`            | css length  | Radius            |
| \`--df-alert-border-width\`      | css length  | Border width      |
| \`--df-alert-font-size\`         | css length  | Font size         |
| \`--df-alert-line-height\`       | number      | Line height       |
| \`--df-alert-icon-size\`         | css length  | Icon size         |
| \`--df-alert-title-font-weight\` | font weight | Title font weight |

        `,
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      type: 'string',
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
    color: {
      control: 'select',
      type: 'string',
      options: COLOR_STATES,
      table: {
        defaultValue: { summary: 'success' },
        category: 'Appearance',
      },
      description: 'Alert color',
    },
    icon: {
      control: 'select',
      type: 'string',
      options: ICONS,
      description: 'Name of icon to use (in kebab-case)',
      table: { category: 'Icon' },
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
    showClose: {
      control: 'boolean',
      type: 'boolean',
      description: 'Show close button',
      table: { category: 'Behavior' },
    },
    iconClose: {
      control: 'select',
      type: 'string',
      options: ICONS,
      description: 'Name of icon to use (in kebab-case)',
      table: { category: 'Icon' },
    },
    iconCloseFamilyClass: {
      control: 'text',
      type: 'string',
      table: { category: 'Icon' },
    },
    iconCloseFamilyPrefix: {
      control: 'text',
      type: 'string',
      table: { category: 'Icon' },
    },
    iconCloseMaterialStyle: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Icon' },
    },
    onClose: {
      action: 'onClose',
      table: { category: 'Events' },
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DAlert>;

export const Success: Story = {
  args: {
    color: 'success',
    children: 'This is a success alert',
    className: undefined,
    icon: undefined,
    iconClose: undefined,
    showClose: false,
    id: undefined,
    style: undefined,
  },
};

export const Danger: Story = {
  args: {
    color: 'danger',
    children: 'This is a danger alert',
  },
};

export const Info: Story = {
  args: {
    color: 'info',
    children: 'This is a info alert',
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    children: 'This is a warning alert',
  },
};

export const SuccessIcon: Story = {
  render: (args) => (
    <DAlert {...args}>
      <div>
        <h5 className="df-mb-2">Heading</h5>
        <p className="df-m-0">
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services Our offices are open from 9:00 AM
          to 1:00 PM this Monday, December 1st. Please consider using our online services
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services
        </p>
        <a href="#" className="df-text-primary">Link</a>
      </div>
    </DAlert>
  ),
  args: {
    color: 'success',
  },
};

export const DangerIcon: Story = {
  render: (args) => (
    <DAlert {...args}>
      <div>
        <h5 className="df-mb-2">Heading</h5>
        <p className="df-m-0">
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services Our offices are open from 9:00 AM
          to 1:00 PM this Monday, December 1st. Please consider using our online services
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services
        </p>
        <a href="#" className="df-text-primary">Link</a>
      </div>
    </DAlert>
  ),
  args: {
    color: 'danger',
  },
};

export const InfoIcon: Story = {
  render: (args) => (
    <DAlert {...args}>
      <div>
        <h5 className="df-mb-2">Heading</h5>
        <p className="df-m-0">
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services Our offices are open from 9:00 AM
          to 1:00 PM this Monday, December 1st. Please consider using our online services
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services
        </p>
        <a href="#" className="df-text-primary">Link</a>
      </div>
    </DAlert>
  ),
  args: {
    color: 'info',
  },
};

export const WarningIcon: Story = {
  render: (args) => (
    <DAlert {...args}>
      <div>
        <h5 className="df-mb-2">Heading</h5>
        <p className="df-m-0">
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services Our offices are open from 9:00 AM
          to 1:00 PM this Monday, December 1st. Please consider using our online services
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services
        </p>
        <a href="#" className="df-text-primary">Link</a>
      </div>
    </DAlert>
  ),
  args: {
    color: 'warning',
  },
};

/**
 * To use alerts with Material Symbols style use a `DContextProvider` with `familyClass`
 * and the flag `materialStyle=true` or use the flags directly over the
 * `DAlert` component as a props
 */
export const MaterialStyle: Story = {
  render: (args: ComponentProps<typeof DAlert>) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DAlert {...args}>
        <div>
          <h5 className="df-mb-2">Heading</h5>
          <p className="df-m-0">Nuestras oficinas atienden de 9:00 a 13:00 horas éste Lunes 1 de Diciembre. Prefiere nuestros Servicios en líneaNuestras oficinas atienden de 9:00 a 13:00 horas éste Lunes 1 de Diciembre. Prefiere nuestros Servicios en líneaNuestras oficinas atienden de 9:00 a 13:00 horas éste Lunes 1 de Diciembre. Prefiere nuestros Servicios en línea</p>
          <a href="#" className="df-text-primary">Link</a>
        </div>
      </DAlert>
    </DContextProvider>
  ),
  args: {
    showClose: true,
    color: 'info',
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};
