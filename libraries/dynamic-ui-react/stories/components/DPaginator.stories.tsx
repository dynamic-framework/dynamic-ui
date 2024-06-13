import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { ComponentProps, useState } from 'react';

import DPaginator from '../../src/components/DPaginator/DPaginator';
import { PREFIX_BS } from '../../src/components/config';

const meta: Meta<typeof DPaginator> = {
  title: 'Design System/Components/Paginator',
  component: DPaginator,
  parameters: {
    docs: {
      description: {
        component: `
![Shield Badge](https://img.shields.io/badge/Abstraction%20Component-4848b7)

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Pagination](https://getbootstrap.com/docs/5.3/components/pagination/)
+ [React Responsive Pagination](https://react-responsive-pagination.elantha.com/)

## CSS Variables
The Bootstrap documentation provides details on the default [Pagination CSS Variables](https://getbootstrap.com/docs/5.3/components/pagination/#css)

| Variable                                    | Class       | Type                   | Description       |
|---------------------------------------------|-------------|------------------------|-------------------|
| --${PREFIX_BS}pagination-page-item-size     | .pagination | css length unit        | Size of page item |
| --${PREFIX_BS}pagination-page-border-radius | .pagination | css border radius unit | Radius page item  |
       `,
      },
    },
  },
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
  tags: ['autodocs'],
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
