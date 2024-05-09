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
To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Pagination](https://getbootstrap.com/docs/5.3/components/pagination/)
+ [React Responsive Pagination](https://react-responsive-pagination.elantha.com/)

## CSS Variables
The Bootstrap documentation provides details on the default [Pagination CSS Variables](https://getbootstrap.com/docs/5.3/components/pagination/#css)

| Variable                                                  | Type                    | Description                           |
|-----------------------------------------------------------|-------------------------|---------------------------------------|
| --${PREFIX_BS}pagination-page-item-size                   | css length unit         | Size of page item                     |
| --${PREFIX_BS}pagination-page-link-bg                     | css color unit          | Background page item                  |
| --${PREFIX_BS}pagination-page-border-radius               | css border radius unit  | Radius page item                      |
| --${PREFIX_BS}pagination-arrow-font-size                  | css length unit         | Text font arrow                       |
| --${PREFIX_BS}pagination-arrow-padding-y                  | css length unit         | Padding Y axis arrow                  |
| --${PREFIX_BS}pagination-arrow-padding-x                  | css length unit         | Padding X axis page arrow             |
| --${PREFIX_BS}pagination-arrow-border-radius              | css border radius unit  | Border radius arrow                   |
| --${PREFIX_BS}pagination-arrow-color                      | css color unit          | Text color arrow                      |
| --${PREFIX_BS}pagination-focus-arrow-bg                   | css color unit          | Focus bg arrow                        |
| --${PREFIX_BS}pagination-arrow-prev-icon-bg-image         | css base64 bg image     | Previous icon default                 |
| --${PREFIX_BS}pagination-disabled-arrow-prev-icon-bg-image| css base64 bg image     | Previous icon :focus :hover           |
| --${PREFIX_BS}pagination-arrow-next-icon-bg-image         | css base64 bg image     | Next icon default                     |
| --${PREFIX_BS}pagination-disabled-arrow-next-icon-bg-image| css base64 bg image     | Next icon :focus :hover               |
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
