import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MProgressBar } from '../../components';

const config: ComponentMeta<typeof MProgressBar> = {
  title: 'Stencil/MProgressBar',
  component: MProgressBar,
  argTypes: {
    valueCurrent: {
      control: 'number',
    },
    valueMin: {
      control: 'number',
    },
    valueMax: {
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
  valueCurrent: 33,
  valueMin: 0,
  valueMax: 100,
  enableStripedAnimation: false,
  enableDarkMode: false,
};
