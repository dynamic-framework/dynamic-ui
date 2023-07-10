import { Meta, StoryObj } from '@storybook/react';

import { useFormatCurrency } from '../../hooks';
import { LiquidContextProvider } from '../../contexts';

const ExampleChildren = () => {
  const { values } = useFormatCurrency(100, 234.12, -233);
  return (
    <>
      {values.map((value) => (
        <pre key={value}>{value}</pre>
      ))}
    </>
  );
};

const Example = () => (
  <LiquidContextProvider>
    <ExampleChildren />
  </LiquidContextProvider>
);

const config: Meta<typeof Example> = {
  title: 'Hooks/useFormatCurrency',
  component: Example,
};

export default config;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  decorators: [
    (Story) => {
      // eslint-disable-next-line global-require
      require('../config/liquidConfig');
      return <Story />;
    },
  ],
};
