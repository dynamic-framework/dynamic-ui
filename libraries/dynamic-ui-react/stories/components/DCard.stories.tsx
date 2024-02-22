import { Meta, StoryObj } from '@storybook/react';

import DCard from '../../src/components/DCard/DCard';
import DButton from '../../src/components/DButton';

const config: Meta<typeof DCard> = {
  title: 'Design System/Patterns/Card',
  component: DCard,
  parameters: {
    docs: {
      description: {
        component: `
Card component

Dynamic framework exports 4 card-related components:

+ **DCard**: The main component to display a card.
+ **DCard.Header** | **DCardHeader**: Commonly used for the title of a card.
+ **DCard.Body** | **DCardBody**: The content of the card.
+ **DCard.Footer** | **DCardFooter**: Commonly used for actions.

To understand in more detail the aspects and css varibles covered by this component,
review the following documentation:

+ [Bootstrap Cards](https://getbootstrap.com/docs/5.3/components/card/)
        `,
      },
    },
  },
  argTypes: {
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
type Story = StoryObj<typeof DCard>;

export const Default: Story = {
  render: (args) => (
    <DCard {...args}>
      <DCard.Header>
        <h5 className="card-title">Title #1</h5>
      </DCard.Header>
      <DCard.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quo?
      </DCard.Body>
      <DCard.Footer className="d-flex justify-content-end">
        <DButton
          text="Click me!"
        />
      </DCard.Footer>
    </DCard>
  ),
  args: {
    style: {
      width: 360,
    },
  },
};

export const HeaderAndBody: Story = {
  render: (args) => (
    <DCard {...args}>
      <DCard.Header>
        <h5 className="card-title">Title #1</h5>
      </DCard.Header>
      <DCard.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quo?
      </DCard.Body>
    </DCard>
  ),
  args: {
    style: {
      width: 360,
    },
  },
};

export const OnlyBody: Story = {
  render: (args) => (
    <DCard {...args}>
      <DCard.Body>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quos magni ex explicabo sint repudiandae quia commodi reiciendis
        reprehenderit minima voluptatibus suscipit adipisci modi, veniam
        doloribus. Laudantium magni tenetur sint eligendi?
      </DCard.Body>
    </DCard>
  ),
  args: {
    style: {
      width: 360,
    },
  },
};

export const TopImage: Story = {
  render: (args) => (
    <DCard {...args}>
      <img
        src="https://placehold.co/200x200"
        className="card-img-top"
        alt="200x200"
      />
      <DCard.Body>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eum nihil exercitationem debitis aperiam consectetur beatae
        dolor error quod voluptatem laboriosam.
      </DCard.Body>
    </DCard>
  ),
  args: {
    style: {
      width: 360,
    },
  },
};

export const Horizontal: Story = {
  render: (args) => (
    <DCard {...args}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://placehold.co/200x300"
            className="img-fluid rounded-start"
            alt="200x200"
          />
        </div>
        <div className="col-md-8">
          <DCard.Body>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text
              below as a natural lead-in to additional
              content. This content is a little bit longer.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </DCard.Body>
        </div>
      </div>
    </DCard>
  ),
  args: {
    style: {
      width: 400,
    },
  },
};
