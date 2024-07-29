/* eslint-disable jsx-a11y/anchor-is-valid */
import { Meta, StoryObj } from '@storybook/react';

import { ComponentProps } from 'react';
import DAlert from '../../src/components/DAlert/DAlert';
import { COLOR_THEMES, ICONS, CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';
import { DContextProvider } from '../../src';
import { PREFIX_BS } from '../../src/components/config';

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
| --${PREFIX_BS}alert-box-shadow            | .alert           | css box shadow   | Toast box shadow         |
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
    theme: {
      control: 'select',
      type: 'string',
      options: COLOR_THEMES,
      table: { defaultValue: { summary: 'success' } },
      description: 'Toast type',
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
    hideClose: {
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
  render: (args) => (
    <DAlert {...args}>
      <div>
        <h5 className="mb-2">Heading</h5>
        <p className="m-0">
          Nuestras oficinas atienden de 9:00 a 13:00 horas éste Lunes 1 de
          Diciembre. Prefiere nuestros Servicios en líneaNuestras oficinas
          atienden de 9:00 a 13:00 horas éste Lunes 1 de Diciembre. Prefiere
          nuestros Servicios en líneaNuestras oficinas atienden de 9:00 a
          13:00 horas éste Lunes 1 de Diciembre. Prefiere nuestros Servicios
          en línea
        </p>
        <a href="#" className="text-primary">Link</a>
      </div>
    </DAlert>
  ),
  args: {
    hideClose: true,
  },
};

export const Danger: Story = {
  render: (args) => (
    <DAlert {...args}>
      <div>
        <h5 className="mb-2">Heading</h5>
        <p className="m-0">
          Nuestras oficinas atienden de 9:00 a 13:00 horas éste Lunes 1 de
          Diciembre. Prefiere nuestros Servicios en líneaNuestras oficinas
          atienden de 9:00 a 13:00 horas éste Lunes 1 de Diciembre. Prefiere
          nuestros Servicios en líneaNuestras oficinas atienden de 9:00 a
          13:00 horas éste Lunes 1 de Diciembre. Prefiere nuestros Servicios
          en línea
        </p>
        <a href="#" className="text-primary">Link</a>
      </div>
    </DAlert>
  ),
  args: {
    theme: 'danger',
  },
};

export const Info: Story = {
  render: (args) => (
    <DAlert {...args}>
      <div>
        <h5 className="mb-2">Heading</h5>
        <p className="m-0">
          Nuestras oficinas atienden de 9:00 a 13:00 horas éste Lunes 1 de
          Diciembre. Prefiere nuestros Servicios en líneaNuestras oficinas
          atienden de 9:00 a 13:00 horas éste Lunes 1 de Diciembre. Prefiere
          nuestros Servicios en líneaNuestras oficinas atienden de 9:00 a
          13:00 horas éste Lunes 1 de Diciembre. Prefiere nuestros Servicios
          en línea
        </p>
        <a href="#" className="text-primary">Link</a>
      </div>
    </DAlert>
  ),
  args: {
    theme: 'info',
  },
};

export const Warning: Story = {
  render: (args) => (
    <DAlert {...args}>
      <div>
        <h5 className="mb-2">Heading</h5>
        <p className="m-0">
          Nuestras oficinas atienden de 9:00 a 13:00 horas éste Lunes 1 de
          Diciembre. Prefiere nuestros Servicios en líneaNuestras oficinas
          atienden de 9:00 a 13:00 horas éste Lunes 1 de Diciembre. Prefiere
          nuestros Servicios en líneaNuestras oficinas atienden de 9:00 a
          13:00 horas éste Lunes 1 de Diciembre. Prefiere nuestros Servicios
          en línea
        </p>
        <a href="#" className="text-primary">Link</a>
      </div>
    </DAlert>
  ),
  args: {
    theme: 'warning',
  },
};

export const SuccessIcon: Story = {
  render: (args) => (
    <DAlert {...args}>
      <div>
        <h5 className="mb-2">Heading</h5>
        <p className="m-0">
          Nuestras oficinas atienden de 9:00 a 13:00 horas éste Lunes 1 de
          Diciembre. Prefiere nuestros Servicios en líneaNuestras oficinas
          atienden de 9:00 a 13:00 horas éste Lunes 1 de Diciembre. Prefiere
          nuestros Servicios en líneaNuestras oficinas atienden de 9:00 a
          13:00 horas éste Lunes 1 de Diciembre. Prefiere nuestros Servicios
          en línea
        </p>
        <a href="#" className="text-primary">Link</a>
      </div>
    </DAlert>
  ),
  args: {
    theme: 'success',
  },
};

export const DangerIcon: Story = {
  render: (args) => (
    <DAlert {...args}>
      <div>
        <h5 className="mb-2">Heading</h5>
        <p className="m-0">
          Nuestras oficinas atienden de 9:00 a 13:00 horas éste Lunes 1 de
          Diciembre. Prefiere nuestros Servicios en líneaNuestras oficinas
          atienden de 9:00 a 13:00 horas éste Lunes 1 de Diciembre. Prefiere
          nuestros Servicios en líneaNuestras oficinas atienden de 9:00 a
          13:00 horas éste Lunes 1 de Diciembre. Prefiere nuestros Servicios
          en línea
        </p>
        <a href="#" className="text-primary">Link</a>
      </div>
    </DAlert>
  ),
  args: {
    theme: 'danger',
  },
};

export const InfoIcon: Story = {
  render: (args) => (
    <DAlert {...args}>
      <div>
        <h5 className="mb-2">Heading</h5>
        <p className="m-0">
          Nuestras oficinas atienden de 9:00 a 13:00 horas éste Lunes 1 de
          Diciembre. Prefiere nuestros Servicios en líneaNuestras oficinas
          atienden de 9:00 a 13:00 horas éste Lunes 1 de Diciembre. Prefiere
          nuestros Servicios en líneaNuestras oficinas atienden de 9:00 a
          13:00 horas éste Lunes 1 de Diciembre. Prefiere nuestros Servicios
          en línea
        </p>
        <a href="#" className="text-primary">Link</a>
      </div>
    </DAlert>
  ),
  args: {
    theme: 'info',
  },
};

export const WarningIcon: Story = {
  render: (args) => (
    <DAlert {...args}>
      <div>
        <h5 className="mb-2">Heading</h5>
        <p className="m-0">
          Nuestras oficinas atienden de 9:00 a 13:00 horas éste Lunes 1 de
          Diciembre. Prefiere nuestros Servicios en líneaNuestras oficinas
          atienden de 9:00 a 13:00 horas éste Lunes 1 de Diciembre. Prefiere
          nuestros Servicios en líneaNuestras oficinas atienden de 9:00 a
          13:00 horas éste Lunes 1 de Diciembre. Prefiere nuestros Servicios
          en línea
        </p>
        <a href="#" className="text-primary">Link</a>
      </div>
    </DAlert>
  ),
  args: {
    theme: 'warning',
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
    hideClose: true,
    theme: 'secondary',
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};
