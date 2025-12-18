import { Meta, StoryObj } from '@storybook/react-vite';

import DTimeline from '../../src/components/DTimeline/DTimeline';
import { DCard } from '../../src';
import DBox from '../../src/components/DBox';

const config: Meta<typeof DTimeline> = {
  title: 'Design System/Components/Timeline',
  component: DTimeline,
  parameters: {
    docs: {
      description: {
        component: `
A modern timeline component inspired by Vercel's design.
It's used to display a list of events in chronological order.

### Key Features:

- **Modern Design:** A clean and minimalist design.
- **Status Indicators:** Each event can have a status (success, warning, danger, info) to visually represent its state.
- **Custom Icons:** You can provide a custom icon for each event.
- **Flexible Content:** Each event can have a title, description, and time.
`,
      },
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DTimeline>;

export const Default: Story = {
  args: {
    items: [
      {
        title: 'Event 1',
        description: 'This is the first event.',
        time: '10:00 AM',
      },
      {
        title: 'Event 2',
        description: 'This is the second event.',
        time: '11:00 AM',
      },
      {
        title: 'Event 3',
        description: 'This is the third event.',
        time: '12:00 PM',
      },
    ],
  },
};

export const WithStatus: Story = {
  args: {
    items: [
      {
        title: 'Deployment Succeeded',
        description: 'The deployment was successful.',
        time: '10:00 AM',
        status: 'success',
      },
      {
        title: 'Build Warning',
        description: 'The build completed with warnings.',
        time: '11:00 AM',
        status: 'warning',
      },
      {
        title: 'Test Failed',
        description: 'The test suite failed.',
        time: '12:00 PM',
        status: 'danger',
      },
      {
        title: 'Info',
        description: 'This is an informational message.',
        time: '1:00 PM',
        status: 'info',
      },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      {
        title: 'Deployment Succeeded',
        description: 'The deployment was successful.',
        time: '10:00 AM',
        icon: 'check',
        status: 'success',
      },
      {
        title: 'Build Warning',
        description: 'The build completed with warnings.',
        time: '11:00 AM',
        icon: 'exclamation-triangle',
        status: 'warning',
      },
      {
        title: 'Test Failed',
        description: 'The test suite failed.',
        time: '12:00 PM',
        icon: 'x',
        status: 'danger',
      },
      {
        title: 'Info',
        description: 'This is an informational message.',
        time: '1:00 PM',
        icon: 'info-circle',
        status: 'info',
      },
    ],
  },
};

export const WithChildren: Story = {
  args: {
    items: [
      {
        title: 'Deployment Succeeded',
        description: 'The deployment was successful.',
        time: '10:00 AM',
      },
      {
        title: 'Build Warning',
        description: 'The build completed with warnings.',
        time: '11:00 AM',
        children: (
          <div className="mt-4">
            <p>Additional content</p>
            <DCard>
              <DCard.Header>
                <h6 className="card-title mb-0">Card header</h6>
              </DCard.Header>
              <DCard.Body>Card simple with content</DCard.Body>
            </DCard>
          </div>
        ),
      },
    ],
  },
};

export const WhiteBackground: Story = {
  render: (args) => (
    <DBox style={{ width: 700 }}>
      <DTimeline {...args} />
    </DBox>
  ),
  args: {
    items: [
      {
        title: 'Deployment Succeeded',
        description: 'The deployment was successful.',
        time: '10:00 AM',
      },
      {
        title: 'Build Warning',
        description: 'The build completed with warnings.',
        time: '11:00 AM',
        children: (
          <div className="mt-4">
            <p>Additional content</p>
            <DCard>
              <DCard.Header>
                <h6 className="card-title mb-0">Card header</h6>
              </DCard.Header>
              <DCard.Body>Card simple with content</DCard.Body>
            </DCard>
          </div>
        ),
      },
    ],
  },
};
