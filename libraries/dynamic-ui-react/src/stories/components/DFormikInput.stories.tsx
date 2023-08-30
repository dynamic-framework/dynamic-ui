import { Formik } from 'formik';
import { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import { DFormikInput } from '../../components';

const config: Meta<typeof DFormikInput> = {
  title: 'Design System/Components/Formik Input',
  component: DFormikInput,
};

export default config;
type Story = StoryObj<typeof DFormikInput>;

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
  render: (args: ComponentProps<typeof DFormikInput>) => (
    <DFormikInput {...args} />
  ),
  args: {
    innerId: 'field1',
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
    <DFormikInput {...args} />
  ),
  args: {
    innerId: 'field2',
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
