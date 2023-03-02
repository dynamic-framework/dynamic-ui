import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MProgressBar } from '../../components';

const config: ComponentMeta<typeof MProgressBar> = {
  title: 'Stencil/MProgressBar',
  component: MProgressBar,
  argTypes: {
    currentValue: {
      control: 'number',
    },
    minValue: {
      control: 'number',
    },
    maxValue: {
      control: 'number',
    },
    enableStripedAnimation: {
      control: 'boolean',
    },
    enableDarkMode: {
      control: 'boolean',
    },
  },
};

export default config;

const Template: ComponentStory<typeof MProgressBar> = (args) => (
  <div className="d-flex justify-content-center p-3">
    <MProgressBar {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  currentValue: 33,
  minValue: 0,
  maxValue: 100,
  enableStripedAnimation: false,
  enableDarkMode: false,
};