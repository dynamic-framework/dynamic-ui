import { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import DBoxFile from '../../src/components/DBoxFile/DBoxFile';
import { PREFIX_BS } from '../../src/components/config';
import { CONTEXT_PROVIDER_CONFIG_MATERIAL, ICONS } from '../config/constants';
import { DContextProvider } from '../../src';

const config: Meta<typeof DBoxFile> = {
  title: 'Design System/Components/Box File',
  component: DBoxFile,
  parameters: {
    docs: {
      description: {
        component: `
Drag'n'drop zone component for files.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [React Dropzone](https://react-dropzone.js.org/)

## CSS Variables
| Variable                                  | Type            | Description               |
|-------------------------------------------|-----------------|---------------------------|
| --${PREFIX_BS}box-file-gap                | css length unit | Space between elements    |
| --${PREFIX_BS}box-file-bg                 | css color unit  | Background                |
| --${PREFIX_BS}box-file-border             | css border      | Border                    |
| --${PREFIX_BS}box-file-border-radius      | css length unit | Border radius             |
| --${PREFIX_BS}box-file-padding            | css length unit | Padding                   |
| --${PREFIX_BS}box-file-content-max-width  | css length unit | Max width of the content  |
| --${PREFIX_BS}box-file-icon-size          | css length unit | Icon size                 |
| --${PREFIX_BS}box-file-icon-color         | css color unit  | Icon color                |
| --${PREFIX_BS}box-file-hover-border       | css border      | Hover Border              |
| --${PREFIX_BS}box-file-hover-bg           | css color unit  | Hover background          |
| --${PREFIX_BS}box-file-selected-border    | css border      | Selected border           |
| --${PREFIX_BS}box-file-selected-bg        | css color unit  | Selected background       |
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      type: 'boolean',
    },
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
    },
    icon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
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
    minSize: {
      control: 'number',
      type: 'number',
    },
    maxSize: {
      control: 'number',
      type: 'number',
    },
    maxFiles: {
      control: 'number',
      type: 'number',
    },
    onDrop: {
      action: 'onDrop',
    },
    onDropAccepted: {
      action: 'onDropAccepted',
    },
    onDropRejected: {
      action: 'onDropRejected',
    },
    onFileDialogCancel: {
      action: 'onFileDialogCancel',
    },
    onFileDialogOpen: {
      action: 'onFileDialogOpen',
    },
  },
};

export default config;
type Story = StoryObj<typeof DBoxFile>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DBoxFile {...args}>
      <div className="text-center">
        <span className="text-secondary text-decoration-underline me-1">Select and upload the file</span>
        or drag and drop it here (png)
      </div>
    </DBoxFile>
  ),
  args: {
    accept: {
      'image/png': ['.png'],
    },
    disabled: false,
  },
};

export const MaterialIcon: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args: ComponentProps<typeof DBoxFile>) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DBoxFile {...args}>
        <div className="text-center">
          <span className="text-secondary text-decoration-underline me-1">Select and upload the file</span>
          or drag and drop it here (png)
        </div>
      </DBoxFile>
    </DContextProvider>
  ),
  args: {
    accept: {
      'image/png': ['.png'],
    },
    disabled: false,
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};
