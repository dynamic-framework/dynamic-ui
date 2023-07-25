import { Meta } from '@storybook/react';

import type { AlertType } from '@dynamic-framework/ui';

import { MButton, MToastContainer } from '../../components';
import { useToast as useToastHook } from '../../hooks';

import { ALERT_TYPES } from '../constants';

type Props = {
  message: string;
  type: AlertType;
  showClose: boolean;
};

const Example = ({ message, type, showClose }: Props) => {
  const { toast } = useToastHook();
  return (
    <>
      <MButton
        text="Show Toast"
        onClick={() => toast(message, { type, showClose })}
      />
      <MToastContainer />
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
      options: ALERT_TYPES,
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
    showClose: false,
  },
};
