import { Meta, StoryObj } from '@storybook/react-vite';

import DCard from '../../src/components/DCard/DCard';
import DButton from '../../src/components/DButton';

const config: Meta<typeof DCard> = {
  title: 'Design System/Components/Card',
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

## CSS Variables

Every value below is a design token: set it on the component, on an ancestor, or
on \`:root\` to retheme. The table is generated from \`tokens/component/card.json\`,
so it cannot fall out of step with the stylesheet.

| Variable                                     | Type           | Description                    |
|----------------------------------------------|----------------|--------------------------------|
| \`--df-card-padding-block\`                  | css length     | Padding block                  |
| \`--df-card-padding-inline\`                 | css length     | Padding inline                 |
| \`--df-card-gap\`                            | css length     | Gap                            |
| \`--df-card-radius\`                         | css length     | Radius                         |
| \`--df-card-border-width\`                   | css length     | Border width                   |
| \`--df-card-bg\`                             | css color      | Background                     |
| \`--df-card-fg\`                             | css color      | Foreground                     |
| \`--df-card-border-color\`                   | css color      | Border color                   |
| \`--df-card-shadow\`                         | css box-shadow | Shadow                         |
| \`--df-card-header-padding-block\`           | css length     | Header padding block           |
| \`--df-card-header-border-color\`            | css color      | Header border color            |
| \`--df-card-header-font-size\`               | css length     | Header font size               |
| \`--df-card-header-font-weight\`             | font weight    | Header font weight             |
| \`--df-card-footer-padding-block\`           | css length     | Footer padding block           |
| \`--df-card-footer-border-color\`            | css color      | Footer border color            |
| \`--df-card-footer-bg\`                      | css color      | Footer background              |
| \`--df-card-interactive-border-color-hover\` | css color      | Interactive border color hover |
| \`--df-card-interactive-shadow-hover\`       | css box-shadow | Interactive shadow hover       |

        `,
      },
    },
  },
  argTypes: {
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
type Story = StoryObj<typeof DCard>;

export const Default: Story = {
  render: (args) => (
    <DCard {...args}>
      <DCard.Header>
        <h5 className="df-fs-heading-5 df-fw-semibold df-mb-0">Title #1</h5>
      </DCard.Header>
      <DCard.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quo?
      </DCard.Body>
      <DCard.Footer className="df-flex df-justify-end">
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
        <h5 className="df-fs-heading-5 df-fw-semibold df-mb-0">Title #1</h5>
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
        className="df-card-media"
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
      <div className="df-grid df-grid-cols-12 df-gap-0">
        <div className="df-md:col-span-4">
          <img
            src="https://placehold.co/200x300"
            className="df-w-full df-h-auto df-rounded-s-control"
            alt="200x200"
          />
        </div>
        <div className="df-md:col-span-8">
          <DCard.Body>
            <h5 className="df-fs-heading-5 df-fw-semibold df-mb-0">Card title</h5>
            <p className="df-fs-body">
              This is a wider card with supporting text
              below as a natural lead-in to additional
              content. This content is a little bit longer.
            </p>
            <p className="df-fs-body">
              <small className="df-text-muted">
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
