/* eslint-disable no-console */
import { Meta, StoryObj } from '@storybook/react';

import DList from '../../src/components/DList/DList';
import DListItemMovement from '../../src/components/DListItemMovement/DListItemMovement';

const config: Meta<typeof DListItemMovement> = {
  title: 'Design System/Components/List Item Movement',
  component: DListItemMovement,
  argTypes: {
    className: {
      type: 'string',
    },
  },
};

export default config;
type Story = StoryObj<typeof DListItemMovement>;

export const Movement: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 'calc(300px - 1rem)' }} className="position-relative">
        <DList flush>
          <Story />
        </DList>
      </div>
    ),
  ],
  render: (args) => (
    <DListItemMovement
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
        <DList flush>
          <Story />
        </DList>
      </div>
    ),
  ],
  render: (args) => (
    <>
      {[1, 2, 3, 4, 5].map((item) => (
        <DListItemMovement
          key={item}
          description={args.description}
          date={args.date}
          amount={args.amount * (item % 2 === 0 ? 1 : -1)}
        />
      ))}
    </>
  ),
  args: {
    description: 'Credit card',
    date: '10/08/2023',
    amount: 5000,
  },
};
