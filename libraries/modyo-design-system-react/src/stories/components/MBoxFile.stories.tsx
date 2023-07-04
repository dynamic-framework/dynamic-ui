import { Meta, StoryObj } from '@storybook/react';

import { MBoxFile } from '../../components';

const config: Meta<typeof MBoxFile> = {
  title: 'Design System/Components/Box File',
  component: MBoxFile,
};

export default config;
type Story = StoryObj<typeof MBoxFile>;

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
    <MBoxFile {...args}>
      <div className="text-center">
        <span className="text-secondary text-decoration-underline me-1">Select and upload the file</span>
        or drag and drop it here (png)
      </div>
    </MBoxFile>
  ),
  args: {
    accept: {
      'image/png': ['.png'],
    },
    isDisabled: false,
  },
};
