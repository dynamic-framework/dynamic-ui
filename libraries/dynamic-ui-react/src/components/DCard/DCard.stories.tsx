import { Meta, StoryObj } from '@storybook/react';

import DCard from './DCard';
import DCardHeader from './components/DCardHeader';
import DCardBody from './components/DCardBody';
import DCardFooter from './components/DCardFooter';
import DButton from '../DButton';

const config: Meta<typeof DCard> = {
  title: 'Design System/Patterns/Card',
  component: DCard,
  argTypes: {
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
    },
  },
};

export default config;
type Story = StoryObj<typeof DCard>;

export const Default: Story = {
  render: (args) => (
    <DCard {...args}>
      <DCardHeader>
        <h5 className="card-title">Title #1</h5>
      </DCardHeader>
      <DCardBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quo?
      </DCardBody>
      <DCardFooter className="d-flex justify-content-end">
        <DButton
          text="Click me!"
        />
      </DCardFooter>
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
      <DCardHeader>
        <h5 className="card-title">Title #1</h5>
      </DCardHeader>
      <DCardBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quo?
      </DCardBody>
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
      <DCardBody>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quos magni ex explicabo sint repudiandae quia commodi reiciendis
        reprehenderit minima voluptatibus suscipit adipisci modi, veniam
        doloribus. Laudantium magni tenetur sint eligendi?
      </DCardBody>
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
      <DCardBody>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eum nihil exercitationem debitis aperiam consectetur beatae
        dolor error quod voluptatem laboriosam.
      </DCardBody>
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
          <DCardBody>
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
          </DCardBody>
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
