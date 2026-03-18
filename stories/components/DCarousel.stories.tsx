import { Meta, StoryObj } from '@storybook/react-vite';
import DCarousel from '../../src/components/DCarousel/DCarousel';
import { PREFIX_BS } from '../../src/components/config';

const config: Meta<typeof DCarousel> = {
  title: 'Design System/Components/Carousel',
  component: DCarousel,
  parameters: {
    docs: {
      description: {
        component: `
![Shield Badge](https://img.shields.io/badge/Wrapper%20Component-red)

Carousel of elements and components

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Splide](https://splidejs.com/)
+ [Splide React Integration](https://splidejs.com/integration/react-splide/)

## CSS Variables
| Variable                                         | className       | Type            | Description                   |
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
      table: { category: 'Behavior' },
    },
    className: {
      control: 'text',
      type: 'string',
      table: { category: 'Appearance' },
    },
    style: {
      control: 'object',
      table: { category: 'Appearance' },
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

export const BaseBootstrap: Story = {
  render: () => (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <svg aria-label="Placeholder: First slide" className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" height="400" preserveAspectRatio="xMidYMid slice" role="img" width="800" xmlns="http://www.w3.org/2000/svg">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
          </svg>
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <svg aria-label="Placeholder: First slide" className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" height="400" preserveAspectRatio="xMidYMid slice" role="img" width="800" xmlns="http://www.w3.org/2000/svg">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
          </svg>
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <svg aria-label="Placeholder: First slide" className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" height="400" preserveAspectRatio="xMidYMid slice" role="img" width="800" xmlns="http://www.w3.org/2000/svg">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
          </svg>
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
      <div className="carousel-indicators mt-4">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" />
      </div>
    </div>
  ),
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
