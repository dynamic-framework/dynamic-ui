import { Formik } from 'formik';
import { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import { MFormikInput } from '../../components';

const config: Meta<typeof MFormikInput> = {
  title: 'Design System/Components/Formik Input',
  component: MFormikInput,
};

export default config;
type Story = StoryObj<typeof MFormikInput>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <Formik
        initialValues={{ field: 'Value' }}
        onSubmit={console.log}
        enableReinitialize
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Story />
          </form>
        )}
      </Formik>
    ),
  ],
  render: (args: ComponentProps<typeof MFormikInput>) => (
    <MFormikInput {...args} />
  ),
  args: {
    mId: 'field1',
    label: 'Label',
    name: 'field',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    iconStart: 'emoji-smile-upside-down',
    iconEnd: 'emoji-smile-upside-down',
    hint: 'Assistive text',
  },
};

export const Empty: Story = {
  decorators: [
    (Story) => (
      <Formik
        initialValues={{ field: '' }}
        onSubmit={console.log}
        enableReinitialize
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Story />
          </form>
        )}
      </Formik>
    ),
  ],
  render: (args) => (
    <MFormikInput {...args} />
  ),
  args: {
    mId: 'field2',
    label: 'Label',
    name: 'field',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    iconStart: 'emoji-smile-upside-down',
    iconEnd: 'emoji-smile-upside-down',
    hint: 'Assistive text',
  },
};
