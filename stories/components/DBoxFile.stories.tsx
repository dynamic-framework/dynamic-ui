import { Meta, StoryObj } from '@storybook/react-vite';

import DBoxFile from '../../src/components/DBoxFile/DBoxFile';
import { ICONS } from '../config/constants';

const config: Meta<typeof DBoxFile> = {
  title: 'Design System/Components/Box File',
  component: DBoxFile,
  argTypes: {
    disabled: {
      control: 'boolean',
      type: 'boolean',
    },
    accept: {
      control: 'object',
    },
    multiple: {
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
    value: {
      control: 'text',
      type: 'string',
      description: 'Array of file URLs to preload',
    },
    noClick: {
      control: 'boolean',
      type: 'boolean',
    },
    noKeyboard: {
      control: 'boolean',
      type: 'boolean',
    },
    noDrag: {
      control: 'boolean',
      type: 'boolean',
    },
    autoFocus: {
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
    onDrop: {
      action: 'onDrop',
    },
    onDragEnter: {
      action: 'onDragEnter',
    },
    onDragLeave: {
      action: 'onDragLeave',
    },
    onError: {
      action: 'onError',
    },
    children: {
      control: 'text',
      table: {
        type: {
          summary: 'ReactNode | ((openFileDialog: () => void) => ReactNode)',
        },
        defaultValue: {
          summary: 'String',
          detail: 'Drag and drop some files here, or click to select files',
        },
      },
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
  args: {
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.svg'],
    },
    disabled: false,
    children: 'Drag and drop some files here, or click to select files',
    autoFocus: false,
  },
};
