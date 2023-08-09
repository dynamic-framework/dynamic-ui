import { Formik } from 'formik';
import { Meta, StoryObj } from '@storybook/react';
import * as Yup from 'yup';
import type { ComponentProps } from 'react';

import { MButton, MFormikInputCurrency } from '../../components';
import { LiquidContextProvider } from '../../contexts';

const config: Meta<typeof MFormikInputCurrency> = {
  title: 'Design System/Components/Formik Input Currency',
  component: MFormikInputCurrency,
};

export default config;
type Story = StoryObj<typeof MFormikInputCurrency>;

export const Default: Story = {
  decorators: [
    (Story: MFormikInputCurrency) => {
      // eslint-disable-next-line global-require
      require('../config/liquidConfig');
      return (
        <Formik
          initialValues={{ field: 1234 }}
          onSubmit={console.log}
          enableReinitialize
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Story />
            </form>
          )}
        </Formik>
      );
    },
  ],
  render: (args: ComponentProps<typeof MFormikInputCurrency>) => (
    <LiquidContextProvider>
      <MFormikInputCurrency {...args} />
    </LiquidContextProvider>
  ),
  args: {
    mId: 'field1',
    label: 'Label',
    name: 'field',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    iconStart: 'emoji-smile-upside-down',
    iconEnd: 'emoji-smile-upside-down',
    hint: 'Assistive text',
  },
};

export const Empty: Story = {
  decorators: [
    (Story: MFormikInputCurrency) => {
      // eslint-disable-next-line global-require
      require('../config/liquidConfig');
      return (
        <Formik
          initialValues={{ field: undefined }}
          onSubmit={console.log}
          enableReinitialize
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Story />
            </form>
          )}
        </Formik>
      );
    },
  ],
  render: (args: ComponentProps<MFormikInputCurrency>) => (
    <LiquidContextProvider>
      <MFormikInputCurrency {...args} />
    </LiquidContextProvider>
  ),
  args: {
    mId: 'field2',
    label: 'Label',
    name: 'field',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    iconStart: 'emoji-smile-upside-down',
    iconEnd: 'emoji-smile-upside-down',
    hint: 'Assistive text',
  },
};

const Schema = Yup.object().shape({
  field: Yup.string().required('this field is required'),
});

export const WithErrors: Story = {
  decorators: [
    (Story: MFormikInputCurrency) => {
      // eslint-disable-next-line global-require
      require('../config/liquidConfig');
      return (
        <Formik
          initialValues={{ field: undefined }}
          onSubmit={console.log}
          enableReinitialize
          validationSchema={Schema}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
              <Story />
              <MButton
                onMClick={() => handleSubmit()}
                text="submit"
              />
            </form>
          )}
        </Formik>
      );
    },
  ],
  render: (args: ComponentProps<MFormikInputCurrency>) => (
    <LiquidContextProvider>
      <MFormikInputCurrency {...args} />
    </LiquidContextProvider>
  ),
  args: {
    mId: 'field2',
    label: 'Label',
    name: 'field',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    iconStart: 'emoji-smile-upside-down',
    iconEnd: 'emoji-smile-upside-down',
    // hint: 'Assistive text',
  },
};
