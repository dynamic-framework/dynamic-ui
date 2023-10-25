import { Meta, StoryObj } from '@storybook/react';
import DCarousel from '../../src/components/DCarousel/DCarousel';
import DCarouselSlide from '../../src/components/DCarousel/components/DCarouselSlide';

const config: Meta<typeof DCarousel> = {
  title: 'Design System/Patterns/Carousel',
  component: DCarousel,
  argTypes: {
    options: {
      control: 'object',
    },
  },
};

export default config;
type Story = StoryObj<typeof DCarousel>;

export const Default: Story = {
  render: (args) => (
    <DCarousel
      {...args}
    >
      {[1, 2, 3, 4, 5].map((el) => (
        <DCarouselSlide key={el}>
          <div className="d-flex flex-column bg-light border p-3 rounded text-center">
            <h5>{`Slide ${el}`}</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque?
              Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis
              expedita incidunt itaque odio non necessitatibus dolore molestias,
              harum dicta a!
            </p>
          </div>
        </DCarouselSlide>
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
        <DCarouselSlide key={el}>
          <div className="d-flex flex-column bg-light border p-3 rounded text-center">
            <h5>{`Slide ${el}`}</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque?
              Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis
              expedita incidunt itaque odio non necessitatibus dolore molestias,
              harum dicta a!
            </p>
          </div>
        </DCarouselSlide>
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
        <DCarouselSlide key={el}>
          <div className="d-flex flex-column bg-light border p-3 rounded text-center">
            <h5>{`Slide ${el}`}</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque?
              Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis
              expedita incidunt itaque odio non necessitatibus dolore molestias,
              harum dicta a!
            </p>
          </div>
        </DCarouselSlide>
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
        <DCarouselSlide key={el}>
          <div className="d-flex flex-column bg-light border p-3 rounded text-center">
            <h5>{`Slide ${el}`}</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque?
              Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis
              expedita incidunt itaque odio non necessitatibus dolore molestias,
              harum dicta a!
            </p>
          </div>
        </DCarouselSlide>
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
