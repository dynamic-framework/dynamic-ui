import { Meta } from '@storybook/react';

import DButton from '../../src/components/DButton';
import DToastContainer from '../../src/components/DToastContainer/DToastContainer';

import useToastHook from '../../src/components/DToastContainer/useToast';

import { THEMES } from '../config/constants';

import { ToastType } from '../../src/components/interface';

type Props = {
  message: string;
  type: ToastType;
  showClose: boolean;
};

const Example = ({ message, type, showClose }: Props) => {
  const { toast } = useToastHook();
  return (
    <>
      <DButton
        text="Show Toast"
        onClick={() => toast(message, { type, showClose })}
      />
      <DToastContainer />
    </>
  );
};

const config: Meta<typeof Example> = {
  title: 'Design System/Patterns/Toast',
  component: Example,
  argTypes: {
    type: {
      control: 'select',
      type: 'string',
      options: THEMES,
    },
    showClose: {
      control: 'boolean',
      type: 'boolean',
    },
  },
};

export default config;

export const useToast = {
  args: {
    message: 'the default message',
    type: 'info',
    showClose: true,
  },
};
