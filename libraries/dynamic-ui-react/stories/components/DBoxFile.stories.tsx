import { Meta, StoryObj } from '@storybook/react';

import DBoxFile from '../../src/components/DBoxFile/DBoxFile';

const config: Meta<typeof DBoxFile> = {
  title: 'Design System/Components/Box File',
  component: DBoxFile,
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
