import { Formik } from 'formik';
import { Meta, StoryObj } from '@storybook/react';
import * as Yup from 'yup';
import type { ComponentProps } from 'react';

import { DButton, DFormikInputCurrency } from '../../components';
import { LiquidContextProvider } from '../../contexts';

const config: Meta<typeof DFormikInputCurrency> = {
  title: 'Design System/Components/Formik Input Currency',
  component: DFormikInputCurrency,
};

export default config;
type Story = StoryObj<typeof DFormikInputCurrency>;

export const Default: Story = {
  decorators: [
    (Story: typeof DFormikInputCurrency, { args }) => {
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
              <Story {...args} />
            </form>
          )}
        </Formik>
      );
    },
  ],
  render: (args: ComponentProps<typeof DFormikInputCurrency>) => (
    <LiquidContextProvider>
      <DFormikInputCurrency {...args} />
    </LiquidContextProvider>
  ),
  args: {
    innerId: 'field1',
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
    (Story: typeof DFormikInputCurrency, { args }) => {
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
              <Story {...args} />
            </form>
          )}
        </Formik>
      );
    },
  ],
  render: (args: ComponentProps<typeof DFormikInputCurrency>) => (
    <LiquidContextProvider>
      <DFormikInputCurrency {...args} />
    </LiquidContextProvider>
  ),
  args: {
    innerId: 'field2',
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
    (Story: typeof DFormikInputCurrency, { args }) => {
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
              <Story {...args} />
              <DButton
                onEventClick={() => handleSubmit()}
                text="submit"
              />
            </form>
          )}
        </Formik>
      );
    },
  ],
  render: (args: ComponentProps<typeof DFormikInputCurrency>) => (
    <LiquidContextProvider>
      <DFormikInputCurrency {...args} />
    </LiquidContextProvider>
  ),
  args: {
    innerId: 'field2',
    label: 'Label',
    name: 'field',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    iconStart: 'emoji-smile-upside-down',
    iconEnd: 'emoji-smile-upside-down',
    hint: 'Assistive text',
  },
};
