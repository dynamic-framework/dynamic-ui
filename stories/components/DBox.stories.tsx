import { Meta, StoryObj } from '@storybook/react-vite';

import DBox from '../../src/components/DBox/DBox';

const config: Meta<typeof DBox> = {
  title: 'Design System/Components/DBox',
  component: DBox,
  parameters: {
    docs: {
      description: {
        component: `
        DBox is a semantic and straightforward component designed to frame sections of content.
        Think of it as a pre-styled <code>div</code> that provides a consistent container for your UI elements.

        ### Key Features:

        - **Semantic Grouping:** Use <code>DBox</code> to logically group related content, improving readability and maintainability.
        - **Consistent Styling:** It applies a default style (<code>.d-box</code>) that can be easily extended with custom classes.
        - **Flexible:** You can customize the padding, margins, and other styles using the <code>className</code> prop.

        ### When to Use:

        - When you need a simple container for a section of content.
        - To apply consistent spacing and borders around a group of elements.
        - As a base for more complex components.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DBox>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h4>Hello world</h4>
        <p>Loren ipsum dolor</p>
      </>
    ),
  },
};

export const CustomPadding: Story = {
  parameters: {
    docs: {
      description: {
        story: 'You can customize the padding of the DBox by using standard Bootstrap spacing classes.',
      },
    },
  },
  args: {
    className: 'p-8',
    children: (
      <>
        <h4>Hello world</h4>
        <p>Loren ipsum dolor</p>
      </>
    ),
  },
};
