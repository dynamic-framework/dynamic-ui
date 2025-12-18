import { Meta, StoryObj } from '@storybook/react-vite';

import { ComponentProps } from 'react';
import DStepper from '../../src/components/DStepper/DStepper';

import { CONTEXT_PROVIDER_CONFIG_MATERIAL, ICONS } from '../config/constants';
import { DContextProvider, DStepperMobile } from '../../src';

const config: Meta<typeof DStepper> = {
  title: 'Design System/Components/Stepper',
  component: DStepper,
  parameters: {
    docs: {
      description: {
        component: `
The Stepper component is designed to provide a responsive step-by-step navigation interface.
It intelligently switches between a desktop and a mobile layout based on the screen size using media queries.
This ensures an optimal user experience across different devices.

## Overview and Usage
The Stepper component dynamically switches between [DStepperDesktop](/docs/design-system-components-stepper-desktop--docs)
for larger screens and [DStepperMobile](/docs/design-system-components-stepper-mobile--docs) for smaller screens.

This is managed through media queries, which ensure that the appropriate version is displayed based on the user's device.
By default, the breakpoint for switching between \`DStepperDesktop\` and \`DStepperMobile\` is set to **lg** (large screens)
at \`992px\`, however this breakpoint can be customized to meet specific requirements.

+ **\`DStepperMobile\`** is displayed on screens narrower than 992px.
+ **\`DStepperDesktop\`** is displayed on screens wider than 992px.

If your project's requirements do not require dynamic switching between components based on screen size, you can use
the single \`DStepperDesktop\` or \`DStepperMobile\` component independently and fine-tune its behavior and appearance to suit your needs. This
provides a simpler alternative for scenarios where responsive behavior is not needed.
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
    currentStep: {
      control: 'number',
      type: 'number',
      description: 'Current step number',
    },
    iconSuccess: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
    },
    iconSuccessMaterialStyle: {
      control: 'boolean',
      type: 'boolean',
    },
    iconSuccessFamilyClass: {
      control: 'text',
      type: 'string',
    },
    iconSuccessFamilyPrefix: {
      control: 'text',
      type: 'string',
    },
    vertical: {
      control: 'boolean',
      type: 'boolean',
      description: 'Display vertical stepper',
    },
    completed: {
      control: 'boolean',
      type: 'boolean',
      description: 'Display all steps as completed',
    },
    breakpoint: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', 'xxl'],
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DStepper>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '768px', height: '300px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DStepper {...args} />
  ),
  args: {
    currentStep: 2,
    options: [
      { label: 'Personal Information', value: 1 },
      { label: 'Payment Details', value: 2 },
      { label: 'Confirmation', value: 3 },
    ],
  },
};

export const DefaultMobile: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '768px', height: '300px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DStepperMobile {...args} />
  ),
  args: {
    currentStep: 2,
    options: [
      { label: 'Select Service', value: 1 },
      { label: 'Choose Plan', value: 2 },
      { label: 'Review Order', value: 3 },
    ],
  },
};

export const Vertical: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '768px', height: '300px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DStepper {...args} />
  ),
  args: {
    currentStep: 2,
    options: [
      { label: 'Upload Documents', value: 1 },
      { label: 'Verify Information', value: 2 },
      { label: 'Submit Application', value: 3 },
    ],
    vertical: true,
  },
};

export const WithDescription: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '768px', height: '400px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DStepper {...args} />
  ),
  args: {
    currentStep: 2,
    options: [
      {
        label: 'Account Information',
        description: 'Enter your personal details',
        value: 1,
      },
      {
        label: 'Billing Address',
        description: 'Provide your billing information',
        value: 2,
      },
      {
        label: 'Confirmation',
        description: 'Review and confirm your order',
        value: 3,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Stepper with description text for each step. Descriptions provide additional context about what the user should do in each step.',
      },
    },
  },
};

export const WithDescriptionVertical: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '768px', height: '500px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DStepper {...args} />
  ),
  args: {
    currentStep: 2,
    options: [
      {
        label: 'Create Account',
        description: 'Sign up with your email and password',
        value: 1,
      },
      {
        label: 'Verify Email',
        description: 'Check your inbox for verification link',
        value: 2,
      },
      {
        label: 'Complete Profile',
        description: 'Add your profile information and preferences',
        value: 3,
      },
    ],
    vertical: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Vertical stepper with descriptions. Descriptions are especially useful in vertical layouts where there is more space.',
      },
    },
  },
};

/**
 * To use Stepper with Material Symbols style use a `DContextProvider` with `familyClass`
 * and the flag `materialStyle=true` or use the flags directly over the
 * `DStepper` component as a props
 */
export const MaterialStyle: Story = {
  render: (args: ComponentProps<typeof DStepper>) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DStepper {...args} />
    </DContextProvider>
  ),
  args: {
    currentStep: 2,
    options: [
      { label: 'Account Setup', value: 1 },
      { label: 'Security Settings', value: 2 },
      { label: 'Get Started', value: 3 },
    ],
    iconSuccess: 'verified',
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};
