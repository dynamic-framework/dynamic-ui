import { ComponentStory, ComponentMeta } from '@storybook/react';

import { useFormatCurrency } from '../../hooks';
import { LiquidContextProvider } from '../../contexts';

type Props = {
  valuesToFormat: Array<number>;
};

const Example = (
  {
    valuesToFormat,
  }: Props,
) => {
  const { values } = useFormatCurrency(...valuesToFormat);
  return (
    <LiquidContextProvider>
      {values.map((value) => (
        <pre>{value}</pre>
      ))}
    </LiquidContextProvider>
  );
};

const config: ComponentMeta<typeof Example> = {
  title: 'React/hooks/useFormatCurrency',
  component: Example,
};

export default config;

const Template: ComponentStory<typeof Example> = (args) => (
  <Example {...args} />
);

export const Default = Template.bind({});
Default.args = {
  valuesToFormat: [100, 234.12, -233],
};
