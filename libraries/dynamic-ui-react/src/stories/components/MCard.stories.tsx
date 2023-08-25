import { Meta, StoryObj } from '@storybook/react';

import {
  MCard,
  MCardHeader,
  MCardBody,
  MCardFooter,
  DButton,
} from '../../components';

const config: Meta<typeof MCard> = {
  title: 'Design System/Components/Card',
  component: MCard,
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
type Story = StoryObj<typeof MCard>;

export const Default: Story = {
  render: (args) => (
    <MCard {...args}>
      <MCardHeader>
        <h5 className="card-title">Title #1</h5>
      </MCardHeader>
      <MCardBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quo?
      </MCardBody>
      <MCardFooter className="d-flex justify-content-end">
        <DButton
          text="Click me!"
        />
      </MCardFooter>
    </MCard>
  ),
  args: {
    style: {
      width: 360,
    },
  },
};

export const HeaderAndBody: Story = {
  render: (args) => (
    <MCard {...args}>
      <MCardHeader>
        <h5 className="card-title">Title #1</h5>
      </MCardHeader>
      <MCardBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quo?
      </MCardBody>
    </MCard>
  ),
  args: {
    style: {
      width: 360,
    },
  },
};

export const OnlyBody: Story = {
  render: (args) => (
    <MCard {...args}>
      <MCardBody>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quos magni ex explicabo sint repudiandae quia commodi reiciendis
        reprehenderit minima voluptatibus suscipit adipisci modi, veniam
        doloribus. Laudantium magni tenetur sint eligendi?
      </MCardBody>
    </MCard>
  ),
  args: {
    style: {
      width: 360,
    },
  },
};

export const TopImage: Story = {
  render: (args) => (
    <MCard {...args}>
      <img
        src="https://placehold.co/200x200"
        className="card-img-top"
        alt="200x200"
      />
      <MCardBody>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eum nihil exercitationem debitis aperiam consectetur beatae
        dolor error quod voluptatem laboriosam.
      </MCardBody>
    </MCard>
  ),
  args: {
    style: {
      width: 360,
    },
  },
};

export const Horizontal: Story = {
  render: (args) => (
    <MCard {...args}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://placehold.co/200x300"
            className="img-fluid rounded-start"
            alt="200x200"
          />
        </div>
        <div className="col-md-8">
          <MCardBody>
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
          </MCardBody>
        </div>
      </div>
    </MCard>
  ),
  args: {
    style: {
      width: 400,
    },
  },
};
