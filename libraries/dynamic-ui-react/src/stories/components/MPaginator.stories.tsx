import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, useState } from 'react';
import MPaginator from '../../components/MPaginator';

const meta: Meta<typeof MPaginator> = {
  title: 'Design System/Alpha/MPaginator',
  component: MPaginator,
  argTypes: {
    currentPage: {
      control: 'number',
      type: 'number',
    },
    pageSize: {
      control: 'number',
      type: 'number',
    },
    totalCount: {
      control: 'number',
      type: 'number',
    },
    siblingCount: {
      control: 'number',
      type: 'number',
    },
    prevText: {
      control: 'text',
      type: 'string',
    },
    nextText: {
      control: 'text',
      type: 'string',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MPaginator>;

const MPaginatorExample = ({ currentPage, ...props }: ComponentProps<typeof MPaginator>) => {
  const [currentPageState, setCurrentPageState] = useState(currentPage);
  return (
    <MPaginator
      {...props}
      currentPage={currentPageState}
      setCurrentPage={setCurrentPageState}
    />
  );
};

export const Default: Story = {
  render: (args) => (
    <MPaginatorExample {...args} />
  ),
  args: {
    pageSize: 10,
    totalCount: 100,
    currentPage: 1,
  },
};

export const ArrowText: Story = {
  render: (args) => (
    <MPaginatorExample {...args} />
  ),
  args: {
    pageSize: 10,
    totalCount: 100,
    currentPage: 1,
    prevText: 'Previous',
    nextText: 'Next',
  },
};

export const CurrentPage: Story = {
  render: (args) => (
    <MPaginatorExample {...args} />
  ),
  args: {
    pageSize: 10,
    totalCount: 100,
    currentPage: 5,
    siblingCount: 2,
  },
  name: 'Current page on 5 and sibling 2',
};

export const Sibling: Story = {
  render: (args) => (
    <MPaginatorExample {...args} />
  ),
  args: {
    pageSize: 10,
    totalCount: 100,
    currentPage: 5,
    siblingCount: 0,
  },
  name: 'Current page on 5 and sibling 0',
};
