/* eslint-disable no-console */
import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { MList, MListItemMovement } from '../../components';

const config: Meta<typeof MListItemMovement> = {
  title: 'Design System/Components/List Item Movement',
  component: MListItemMovement,
  argTypes: {
    className: {
      type: 'string',
    },
  },
};

export default config;
type Story = StoryObj<typeof MListItemMovement>;

export const Movement: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 'calc(300px - 1rem)' }} className="position-relative">
        <MList isFlush>
          <Story />
        </MList>
      </div>
    ),
  ],
  render: (args) => (
    <MListItemMovement
      description={args.description}
      date={args.date}
      amount={args.amount}
    />
  ),
  args: {
    description: 'Credit card',
    date: '10/08/2023',
    amount: 5000,
  },
};

export const Movements: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 'calc(300px - 1rem)' }} className="position-relative">
        <MList isFlush>
          <Story />
        </MList>
      </div>
    ),
  ],
  render: (args) => (
    <>
      {[1, 2, 3, 4, 5].map((item) => (
        <MListItemMovement
          key={item}
          description={args.description}
          date={args.date}
          amount={args.amount * (item % 2 === 0 ? 1 : -1)}
          onMClick={args.onMClick}
        />
      ))}
    </>
  ),
  args: {
    description: 'Credit card',
    date: '10/08/2023',
    amount: 5000,
    onMClick: () => console.log('Click'),
  },
};
