import { Meta, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';
import MPaginator, { MPaginatorProps } from '../../components/MPaginator';

const meta: Meta<typeof MPaginator> = {
  title: 'Design System/Components/Paginator',
  component: MPaginator,
  argTypes: {
    total: {
      control: 'number',
    },
    current: {
      control: 'number',
    },
    onPageChange: {
      type: 'function',
    },
    previousLabel: {
      control: 'text',
    },
    nextLabel: {
      control: 'text',
    },
    showArrows: {
      control: 'boolean',
      type: 'boolean',
    },
    maxWidth: {
      control: 'number',
    },
    className: {
      control: 'text',
      type: 'string',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MPaginator>;

const MPaginatorExample = ({
  current,
  maxWidth = 400,
  className,
  ...props
}: MPaginatorProps) => {
  const [currentPageState, setCurrentPageState] = useState(current);
  const handlerChange = useCallback((page: number) => {
    setCurrentPageState(page);
  }, []);
  return (
    <div style={{ width: 'calc(100dvw - 64px)' }}>
      <MPaginator
        {...props}
        current={currentPageState}
        onPageChange={(page) => handlerChange(page)}
        maxWidth={maxWidth}
        className={`justify-content-center ${className ?? ''}`}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => (
    <MPaginatorExample {...args} />
  ),
  args: {
    total: 20,
  },
};

export const LabelArrows: Story = {
  render: (args) => (
    <MPaginatorExample {...args} />
  ),
  args: {
    total: 20,
    nextLabel: 'Next',
    previousLabel: 'Previous',
  },
};

export const NoArrows: Story = {
  render: (args) => (
    <MPaginatorExample {...args} />
  ),
  args: {
    showArrows: false,
    total: 20,
  },
};

export const CustomCurrentPage: Story = {
  render: (args) => (
    <MPaginatorExample {...args} />
  ),
  args: {
    total: 20,
    current: 10,
  },
};

export const CustomMaxWidth: Story = {
  render: (args) => (
    <MPaginatorExample {...args} />
  ),
  args: {
    total: 20,
    maxWidth: 400,
  },
};
