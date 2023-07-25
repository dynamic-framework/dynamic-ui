import { Formik } from 'formik';
import { Meta, StoryObj } from '@storybook/react';

import { MFormikInputSelect } from '../../components';

const config: Meta<typeof MFormikInputSelect> = {
  title: 'Design System/Components/Formik Input Select',
  component: MFormikInputSelect,
};

export default config;
type Story = StoryObj<typeof MFormikInputSelect>;

const OPTIONS = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
];

export const Default: Story = {
  decorators: [
    (Story) => (
      <Formik
        initialValues={{ field: OPTIONS.at(-1) }}
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
    <MFormikInputSelect {...args} />
  ),
  args: {
    mId: 'field1',
    label: 'Label',
    labelIcon: undefined,
    name: 'field',
    options: OPTIONS,
    hint: 'Assistive text',
  },
};

export const Empty: Story = {
  decorators: [
    (Story) => (
      <Formik
        initialValues={{ field: {} }}
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
    <MFormikInputSelect {...args} />
  ),
  args: {
    mId: 'field2',
    label: 'Label',
    labelIcon: undefined,
    name: 'field',
    options: OPTIONS,
    hint: 'Assistive text',
  },
};
