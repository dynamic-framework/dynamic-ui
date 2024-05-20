import { Meta, StoryObj } from '@storybook/react';
import DCarousel from '../../src/components/DCarousel/DCarousel';
import { PREFIX_BS } from '../../src/components/config';

const config: Meta<typeof DCarousel> = {
  title: 'Design System/Patterns/Carousel',
  component: DCarousel,
  parameters: {
    docs: {
      description: {
        component: `
Carousel of elements and components

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Splide](https://splidejs.com/)
+ [Splide React Integration](https://splidejs.com/integration/react-splide/)

## CSS Variables
| Variable                                         | Class       | Type            | Description                   |
|--------------------------------------------------|-------------|-----------------|-------------------------------|
| --${PREFIX_BS}carousel-arrow-space               | .d-carousel | css length unit | Arrow separation              |
| --${PREFIX_BS}carousel-pagination-bottom         | .d-carousel | css length unit | Pagination bottom separation  |
| --${PREFIX_BS}carousel-pagination-page-bg        | .d-carousel | css color       | Background of dot page        |
| --${PREFIX_BS}carousel-pagination-active-page-bg | .d-carousel | css color       | Background of active dot page |
| --${PREFIX_BS}carousel-focus-outline-color       | .d-carousel | css color       | Color of focus ring           |
        `,
      },
    },
  },
  argTypes: {
    options: {
      control: 'object',
    },
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DCarousel>;

export const Default: Story = {
  render: (args) => (
    <DCarousel
      {...args}
    >
      {[1, 2, 3, 4, 5].map((el) => (
        <DCarousel.Slide key={el}>
          <div className="d-flex flex-column bg-light border p-3 rounded text-center">
            <h5>{`Slide ${el}`}</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque?
              Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis
              expedita incidunt itaque odio non necessitatibus dolore molestias,
              harum dicta a!
            </p>
          </div>
        </DCarousel.Slide>
      ))}
    </DCarousel>
  ),
  args: {
    options: {
      perPage: 1,
      width: 532,
      updateOnMove: true,
      gap: '0.5rem',
      padding: '1rem',
    },
  },
};

export const TwoPerPage: Story = {
  render: (args) => (
    <DCarousel
      {...args}
    >
      {[1, 2, 3, 4, 5].map((el) => (
        <DCarousel.Slide key={el}>
          <div className="d-flex flex-column bg-light border p-3 rounded text-center">
            <h5>{`Slide ${el}`}</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque?
              Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis
              expedita incidunt itaque odio non necessitatibus dolore molestias,
              harum dicta a!
            </p>
          </div>
        </DCarousel.Slide>
      ))}
    </DCarousel>
  ),
  args: {
    options: {
      perMove: 1,
      perPage: 2,
      type: 'loop',
      width: 532,
      gap: '0.5rem',
      padding: '1rem',
      omitEnd: false,
      updateOnMove: true,
    },
  },
};

export const WithBreakpoints: Story = {
  render: (args) => (
    <DCarousel
      {...args}
    >
      {[1, 2, 3, 4, 5].map((el) => (
        <DCarousel.Slide key={el}>
          <div className="d-flex flex-column bg-light border p-3 rounded text-center">
            <h5>{`Slide ${el}`}</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque?
              Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis
              expedita incidunt itaque odio non necessitatibus dolore molestias,
              harum dicta a!
            </p>
          </div>
        </DCarousel.Slide>
      ))}
    </DCarousel>
  ),
  args: {
    options: {
      pagination: true,
      width: 532,
      padding: 16,
      gap: 8,
      perMove: 1,
      perPage: 3,
      type: 'loop',
      focus: 'center',
      arrows: true,
      breakpoints: {
        375: {
          width: 375 - 32,
          arrows: false,
          perPage: 1,
        },
        552: {
          width: 'calc(100vw - 32px)',
          perPage: 2,
        },
      },
    },
  },
};

export const AutoplayAndLoop: Story = {
  render: (args) => (
    <DCarousel
      {...args}
    >
      {[1, 2, 3, 4, 5].map((el) => (
        <DCarousel.Slide key={el}>
          <div className="d-flex flex-column bg-light border p-3 rounded text-center">
            <h5>{`Slide ${el}`}</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque?
              Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis
              expedita incidunt itaque odio non necessitatibus dolore molestias,
              harum dicta a!
            </p>
          </div>
        </DCarousel.Slide>
      ))}
    </DCarousel>
  ),
  args: {
    options: {
      perPage: 1,
      width: 532,
      updateOnMove: true,
      gap: '0.5rem',
      padding: '1rem',
      type: 'loop',
      autoplay: true,
      interval: 3000,
    },
  },
};
