import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DateTime } from 'luxon';

import type { ComponentProps } from 'react';

import { MCalendar } from '../../components';

const config: Meta<typeof MCalendar> = {
  title: 'Design System/Alpha/Patterns/Calendar',
  component: MCalendar,
};

export default config;
type Story = StoryObj<typeof MCalendar>;

const MCalendarExample = (props: ComponentProps<typeof MCalendar>) => {
  const [date, setDate] = useState<string>(DateTime.now().toISO());
  return (
    <MCalendar
      {...props}
      date={date}
      setDate={(value) => setDate(value as string)}
    />
  );
};

export const Default: Story = {
  render: (args) => (
    <MCalendarExample {...args} />
  ),
  args: {},
};
