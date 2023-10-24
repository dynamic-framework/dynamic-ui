import { Meta } from '@storybook/react';

import DButton from '../DButton';
import DToastContainer from './DToastContainer';

import { useToast as useToastHook } from '../../hooks';

import { THEMES } from '../../stories/config/constants';

import { AlertType } from '../interface';

type Props = {
  message: string;
  type: AlertType;
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
  title: 'Design System/Patterns/Alert',
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
