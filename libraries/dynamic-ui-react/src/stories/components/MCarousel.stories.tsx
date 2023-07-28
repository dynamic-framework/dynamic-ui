import { Meta, StoryObj } from '@storybook/react';

import { SplideProps } from '@splidejs/react-splide';
import { MCarousel } from '../../components';
import MCarouselSlide from '../../components/MCarouselSlide';

const config: Meta<typeof MCarousel> = {
  title: 'Design System/Alpha/Patterns/Carousel',
  component: MCarousel,
};

export default config;
type Story = StoryObj<typeof MCarousel>;

const MCalendarExample = ({ ...props }: SplideProps) => (
  <MCarousel
    {...props}
  >
    {[1, 2, 3, 4, 5].map((el) => (
      <MCarouselSlide key={el}>
        <div className="d-flex flex-column">
          <img
            src="https://placehold.co/500x300"
            alt={`Pic ${el}`}
          />
        </div>
      </MCarouselSlide>
    ))}
  </MCarousel>
);

export const Custom: Story = {
  render: (props) => (
    <MCalendarExample {...props} />
  ),
  args: {
    options: {
      pagination: true,
      width: 532,
      padding: 16,
      gap: 8,
      perPage: 1,
      drag: true,
      type: 'loop',
      arrows: true,
      focus: 'center',
      updateOnMove: true,
      breakpoints: {
        375: {
          width: 375 - 32,
          arrows: false,
        },
        552: {
          width: 'calc(100vw - 32px)',
        },
      },
    },
  },
};

export const Default: Story = {
  render: (args) => (
    <MCalendarExample {...args} />
  ),
  args: {
    options: {
      perPage: 1,
      width: 532,
      type: 'loop',
      focus: 'center',
      updateOnMove: true,
      gap: '0.5rem',
      padding: '1rem',
    },
  },
};
