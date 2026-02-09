import { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentProps } from 'react';

import DPaginator from '../../src/components/DPaginator/DPaginator';
import { PREFIX_BS } from '../../src/components/config';

type Story = StoryObj<typeof DPaginator>;

const meta: Meta<typeof DPaginator> = {
  title: 'Design System/Components/Paginator',
  component: DPaginator,
  parameters: {
    docs: {
      description: {
        component: `
![Shield Badge](https://img.shields.io/badge/Wrapper%20Component-red)

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Pagination](https://getbootstrap.com/docs/5.3/components/pagination/)
+ [React Responsive Pagination](https://react-responsive-pagination.elantha.com/)

## CSS Variables
The Bootstrap documentation provides details on the default [Pagination CSS Variables](https://getbootstrap.com/docs/5.3/components/pagination/#css)

| Variable                                             | Class       | Type                   | Description                  |
|------------------------------------------------------|-------------|------------------------|------------------------------|
| --${PREFIX_BS}pagination-page-item-size              | .pagination | css length unit        | Size of page item            |
| --${PREFIX_BS}pagination-page-border-radius          | .pagination | css border radius unit | Radius page item             |
| --${PREFIX_BS}pagination-page-control-color          | .pagination | css color unit         | Page control color           |
| --${PREFIX_BS}pagination-page-control-disabled-color | .pagination | css color unit         | Page control disabled color  |
       `,
      },
    },
  },
  argTypes: {
    total: {
      control: 'number',
      table: { category: 'Content' },
    },
    current: {
      control: 'number',
      type: 'number',
      table: { category: 'Content' },
    },
    onPageChange: {
      action: 'onPageChange',
      type: { name: 'function' },
      table: { category: 'Events' },
    },
    maxWidth: {
      control: 'number',
      table: { category: 'Appearance' },
    },
    className: {
      control: 'text',
      table: { category: 'Appearance' },
    },
    extraClassName: {
      control: 'text',
      table: { category: 'Appearance' },
    },
    pageItemClassName: {
      control: 'text',
      table: { category: 'Appearance' },
    },
    pageLinkClassName: {
      control: 'text',
      table: { category: 'Appearance' },
    },
    activeItemClassName: {
      control: 'text',
      table: { category: 'Appearance' },
    },
    disabledItemClassName: {
      control: 'text',
      table: { category: 'Appearance' },
    },
    disabledLinkClassName: {
      control: 'text',
      table: { category: 'Appearance' },
    },
    navClassName: {
      control: 'text',
      table: { category: 'Appearance' },
    },
    previousClassName: {
      control: 'text',
      table: { category: 'Appearance' },
    },
    nextClassName: {
      control: 'text',
      type: 'string',
      table: { category: 'Appearance' },
    },
    previousLabel: {
      control: 'text',
      table: { category: 'Content' },
    },
    nextLabel: {
      control: 'text',
      table: { category: 'Content' },
    },
    ariaPreviousLabel: {
      control: 'text',
      table: { category: 'Content' },
    },
    ariaNextLabel: {
      control: 'text',
      table: { category: 'Content' },
    },
    renderNav: {
      control: 'boolean',
      table: { category: 'Appearance' },
    },
    ariaCurrentAttr: {
      control: 'boolean',
      table: { category: 'HTML Attributes' },
    },
    linkHref: {
      control: {
        type: 'radio',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, 'hash', 'omit'],
      table: { category: 'HTML Attributes' },
    },
  },
  tags: ['autodocs'],
  render: function Render(props: ComponentProps<typeof DPaginator>) {
    return (
      <DPaginator
        {...props}
      />
    );
  },
  decorators: [
    (Story) => (
      <div style={{ width: '800' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default: Story = {
  args: {
    total: 20,
    maxWidth: 400,
  },
};

export const LabelArrows: Story = {
  args: {
    total: 20,
    nextLabel: 'Next',
    previousLabel: 'Previous',
    maxWidth: 200,
  },
};

export const NoArrows: Story = {
  args: {
    renderNav: false,
    total: 20,
    maxWidth: 200,
  },
};

export const CustomCurrentPage: Story = {
  args: {
    total: 20,
    current: 10,
    maxWidth: 200,
  },
};

export const CustomMaxWidth: Story = {
  args: {
    total: 20,
    maxWidth: 400,
  },
};
