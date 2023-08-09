import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { MList } from '../../components';
import MListItemMovement from '../../components/MListItemMovement';

const config: Meta<typeof MListItemMovement> = {
  title: 'Design System/Components/Custom/Movements',
  component: MList,
  argTypes: {
    className: {
      type: 'string',
    },
  },
};

export default config;
type Story = StoryObj<typeof MList>;

const MListExampleMovements = (args: ComponentProps<typeof MList>) => (
  <MList {...args}>
    {[1, 2, 3, 4, 5].map((item) => (
      <MListItemMovement
        key={item}
        description={`Credit Card ${item}`}
        date="22/05/23"
        amount={item % 2 === 1 ? 5000 : -5000}
      >
        Lorem ipsum dolor sit amet consectetur.
      </MListItemMovement>
    ))}
  </MList>
);

export const ListMovements: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 'calc(300px - 1rem)' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <MListExampleMovements {...args} />
  ),
  args: {
    isFlush: true,
  },
  name: 'Custom list - Movements',
};
