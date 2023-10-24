import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { ComponentProps, useState } from 'react';

import DPaginator from './DPaginator';

const meta: Meta<typeof DPaginator> = {
  title: 'Design System/Components/Paginator',
  component: DPaginator,
  argTypes: {
    total: {
      control: 'number',
    },
    page: {
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
type Story = StoryObj<typeof DPaginator>;

export const Default: Story = {
  decorators: [
    (Story: StoryFn) => (
      <div style={{ width: 'calc(100dvw - 64px)' }}>
        <Story />
      </div>
    ),
  ],
  render: function Render(
    {
      page: initialPage,
      ...args
    }: ComponentProps<typeof DPaginator>,
  ) {
    const [page, setPage] = useState<number>(initialPage);
    return (
      <DPaginator
        {...args}
        page={page}
        onPageChange={setPage}
        className="justify-content-center"
      />
    );
  },
  args: {
    total: 20,
    maxWidth: 400,
  },
};

export const LabelArrows: Story = {
  decorators: [
    (Story: StoryFn) => (
      <div style={{ width: 'calc(100dvw - 64px)' }}>
        <Story />
      </div>
    ),
  ],
  render: function Render(
    {
      page: initialPage,
      ...args
    }: ComponentProps<typeof DPaginator>,
  ) {
    const [page, setPage] = useState<number>(initialPage);
    return (
      <DPaginator
        {...args}
        page={page}
        onPageChange={setPage}
        className="justify-content-center"
      />
    );
  },
  args: {
    total: 20,
    nextLabel: 'Next',
    previousLabel: 'Previous',
    maxWidth: 200,
  },
};

export const NoArrows: Story = {
  decorators: [
    (Story: StoryFn) => (
      <div style={{ width: 'calc(100dvw - 64px)' }}>
        <Story />
      </div>
    ),
  ],
  render: function Render(
    {
      page: initialPage,
      ...args
    }: ComponentProps<typeof DPaginator>,
  ) {
    const [page, setPage] = useState<number>(initialPage);
    return (
      <DPaginator
        {...args}
        page={page}
        onPageChange={setPage}
        className="justify-content-center"
      />
    );
  },
  args: {
    showArrows: false,
    total: 20,
    maxWidth: 200,
  },
};

export const CustomCurrentPage: Story = {
  decorators: [
    (Story: StoryFn) => (
      <div style={{ width: 'calc(100dvw - 64px)' }}>
        <Story />
      </div>
    ),
  ],
  render: function Render(
    {
      page: initialPage,
      ...args
    }: ComponentProps<typeof DPaginator>,
  ) {
    const [page, setPage] = useState<number>(initialPage);
    return (
      <DPaginator
        {...args}
        page={page}
        onPageChange={setPage}
        className="justify-content-center"
      />
    );
  },
  args: {
    total: 20,
    page: 10,
    maxWidth: 200,
  },
};

export const CustomMaxWidth: Story = {
  decorators: [
    (Story: StoryFn) => (
      <div style={{ width: 'calc(100dvw - 64px)' }}>
        <Story />
      </div>
    ),
  ],
  render: function Render(
    {
      page: initialPage,
      ...args
    }: ComponentProps<typeof DPaginator>,
  ) {
    const [page, setPage] = useState<number>(initialPage);
    return (
      <DPaginator
        {...args}
        page={page}
        onPageChange={setPage}
        className="justify-content-center"
      />
    );
  },
  args: {
    total: 20,
    maxWidth: 400,
  },
};
