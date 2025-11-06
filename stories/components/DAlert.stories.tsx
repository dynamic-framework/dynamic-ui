/* eslint-disable jsx-a11y/anchor-is-valid */
import { Meta, StoryObj } from '@storybook/react-vite';

import { ComponentProps } from 'react';
import { DContextProvider } from '../../src';
import { PREFIX_BS } from '../../src/components/config';
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
To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Alerts](https://getbootstrap.com/docs/5.3/components/alerts/)

## CSS Variables

The Bootstrap documentation provides details on the default [Alert CSS Variables](https://getbootstrap.com/docs/5.3/components/alerts/#css)

| Variable                                  | Class            | Type             | Description              |
|-------------------------------------------|------------------|------------------|--------------------------|
| --${PREFIX_BS}alert-gap                   | .alert           | css length unit  | Content separation       |
| --${PREFIX_BS}alert-icon-color            | .alert           | css color unit   | Toast icon color         |
| --${PREFIX_BS}alert-close-icon-size       | .alert           | css length unit  | Toast close icon size    |
        `,
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      type: 'string',
    },
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
    },
    color: {
      control: 'select',
      type: 'string',
      options: COLOR_STATES,
      table: { defaultValue: { summary: 'success' } },
      description: 'Alert color',
    },
    icon: {
      control: 'select',
      type: 'string',
      options: ICONS,
      description: 'Name of icon to use (in kebab-case)',
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
    showClose: {
      control: 'boolean',
      type: 'boolean',
      description: 'Show close button',
    },
    iconClose: {
      control: 'select',
      type: 'string',
      options: ICONS,
      description: 'Name of icon to use (in kebab-case)',
    },
    onClose: {
      action: 'onClose',
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
        <h5 className="mb-2">Heading</h5>
        <p className="m-0">
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services Our offices are open from 9:00 AM
          to 1:00 PM this Monday, December 1st. Please consider using our online services
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services
        </p>
        <a href="#" className="text-primary">Link</a>
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
        <h5 className="mb-2">Heading</h5>
        <p className="m-0">
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services Our offices are open from 9:00 AM
          to 1:00 PM this Monday, December 1st. Please consider using our online services
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services
        </p>
        <a href="#" className="text-primary">Link</a>
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
        <h5 className="mb-2">Heading</h5>
        <p className="m-0">
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services Our offices are open from 9:00 AM
          to 1:00 PM this Monday, December 1st. Please consider using our online services
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services
        </p>
        <a href="#" className="text-primary">Link</a>
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
        <h5 className="mb-2">Heading</h5>
        <p className="m-0">
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services Our offices are open from 9:00 AM
          to 1:00 PM this Monday, December 1st. Please consider using our online services
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services
        </p>
        <a href="#" className="text-primary">Link</a>
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
          <h5 className="mb-2">Heading</h5>
          <p className="m-0">Nuestras oficinas atienden de 9:00 a 13:00 horas éste Lunes 1 de Diciembre. Prefiere nuestros Servicios en líneaNuestras oficinas atienden de 9:00 a 13:00 horas éste Lunes 1 de Diciembre. Prefiere nuestros Servicios en líneaNuestras oficinas atienden de 9:00 a 13:00 horas éste Lunes 1 de Diciembre. Prefiere nuestros Servicios en línea</p>
          <a href="#" className="text-primary">Link</a>
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
