import { Meta, StoryObj } from '@storybook/react';

import useFormatCurrency from '../../src/hooks/useFormatCurrency';
import { DContextProvider } from '../../src/contexts/DContext';

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
  <DContextProvider>
    <ExampleChildren />
  </DContextProvider>
);

const config: Meta<typeof Example> = {
  title: 'Hooks/useFormatCurrency',
  component: Example,
};

export default config;
type Story = StoryObj<typeof Example>;

export const Default: Story = {};
