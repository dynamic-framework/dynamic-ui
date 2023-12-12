import { Meta } from '@storybook/react';

import DButton from '../../src/components/DButton';
import DToastContainer from '../../src/components/DToastContainer/DToastContainer';

import useToastHook from '../../src/components/DToastContainer/useToast';

import { THEMES } from '../config/constants';

import { AlertType } from '../../src/components/interface';

type Props = {
  message: string;
  type: AlertType;
  showClose: boolean;
  autoClose: number | false;
};

const Example = (
  {
    message,
    type,
    showClose,
    autoClose,
  }: Props,
) => {
  const { toast } = useToastHook();
  return (
    <>
      <DButton
        text="Show Toast"
        onClick={() => toast(message, { type, showClose, autoClose })}
      />
      <DToastContainer position="bottom-center" />
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
    autoClose: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'number',
      options: [undefined, 1000, 3000, 6000],
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
