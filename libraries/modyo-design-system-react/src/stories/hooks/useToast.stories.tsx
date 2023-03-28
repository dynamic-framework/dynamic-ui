import { Meta } from '@storybook/react';

import { MButton, MToastContainer } from '../../components';
import { useToast } from '../../hooks';
import { THEMES } from '../constants';

type Props = {
  message: string;
  theme: (typeof THEMES)[number];
  showClose: boolean;
};

const Example = ({ message, theme, showClose }: Props) => {
  const { toast } = useToast();
  return (
    <>
      <MButton
        text="Show Toast"
        onClick={() => toast(message, { theme, showClose })}
      />
      <MToastContainer />
    </>
  );
};

const config: Meta<typeof Example> = {
  title: 'React/hooks/useToast',
  component: Example,
  argTypes: {
    theme: {
      control: 'select',
      options: THEMES,
    },
    showClose: {
      control: 'boolean',
    },
  },
};

export default config;

export const Default = {
  args: {
    message: 'the default message',
    theme: 'primary',
    showClose: false,
  },
};
