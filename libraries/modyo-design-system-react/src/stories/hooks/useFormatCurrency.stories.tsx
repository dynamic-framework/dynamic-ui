import { Meta } from '@storybook/react';

import { useFormatCurrency } from '../../hooks';
import { LiquidContextProvider } from '../../contexts';

type Props = {
  valuesToFormat: Array<number>;
};

const Example = ({ valuesToFormat }: Props) => {
  const { values } = useFormatCurrency(...valuesToFormat);
  return (
    <LiquidContextProvider>
      {values.map((value) => (
        <pre key={value}>{value}</pre>
      ))}
    </LiquidContextProvider>
  );
};

const config: Meta<typeof Example> = {
  title: 'React/hooks/useFormatCurrency',
  component: Example,
};

export default config;

export const Default = {
  args: {
    valuesToFormat: [100, 234.12, -233],
  },
};
