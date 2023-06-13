import { Formik } from 'formik';
import { Meta, StoryObj } from '@storybook/react';

import { MFormikInput } from '../../components';

const config: Meta<typeof MFormikInput> = {
  title: 'Design System/Components/Formik Input',
  component: MFormikInput,
};

export default config;
type Story = StoryObj<typeof MFormikInput>;

export const Default: Story = {
  render: (args) => (
    <Formik
      initialValues={{ field: 'Value' }}
      onSubmit={console.log}
      enableReinitialize
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <MFormikInput {...args} />
        </form>
      )}
    </Formik>
  ),

  args: {
    mId: 'field',
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
  render: (args) => (
    <Formik
      initialValues={{ field: '' }}
      onSubmit={console.log}
      enableReinitialize
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <MFormikInput {...args} />
        </form>
      )}
    </Formik>
  ),

  args: {
    mId: 'field',
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
