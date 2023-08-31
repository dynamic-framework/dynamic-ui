import { Meta } from '@storybook/react';

import type { AlertType } from '@dynamic-framework/ui';

import { DButton, DToastContainer } from '../../components';
import { useToast as useToastHook } from '../../hooks';

import { THEMES } from '../constants';

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
        onEventClick={() => toast(message, { type, showClose })}
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
    showClose: false,
  },
};
