import { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import DPasswordStrengthMeter from '../../src/components/DPasswordStrengthMeter/DPasswordStrengthMeter';

const config: Meta<typeof DPasswordStrengthMeter> = {
  title: 'Design System/Components/Password Strength Meter',
  component: DPasswordStrengthMeter,
  parameters: {
    docs: {
      description: {
        component: `
Password strength meter component that provides visual feedback on password complexity.

This component combines a password input field with real-time validation checks and a visual strength indicator.

## Features

- **Visual Strength Indicator**: Color-coded progress bar showing password strength
- **Validation Checklist**: Live feedback on password requirements:
  - Uppercase letter
  - Lowercase letter
  - Number
  - Special character
- **Real-time Validation**: Updates as user types
- **Customizable Messages**: All validation messages can be customized via props
- **Configurable Checks**: Enable/disable specific validation checks
- **Default Messages in English**: No i18n required if using default messages

## Password Strength Levels

The strength bar color is calculated based on the percentage of passed checks:

| Percentage | Strength | Color   |
|------------|----------|---------|
| 0%         | None     | Gray    |
| 1-25%      | Weak     | Red     |
| 26-50%     | Fair     | Yellow  |
| 51-75%     | Good     | Blue    |
| 76-100%    | Strong   | Green   |

## Default Validation Messages

\`\`\`json
{
  "number": "At least one number",
  "lowercaseLetter": "At least one lowercase letter",
  "uppercaseLetter": "At least one uppercase letter",
  "especialChar": "At least one of these special characters: ~!@#$^*-_=[]{}|;,.?",
  "notMatch": "The password confirmation and the new password do not match."
}
\`\`\`

## Available Validation Checks

- \`uppercase\`: Requires at least one uppercase letter (A-Z)
- \`lowercase\`: Requires at least one lowercase letter (a-z)
- \`number\`: Requires at least one number (0-9)
- \`specialChar\`: Requires at least one special character (~!@#$^*-_=[]{}|;,.?)

## Usage with Formik

\`\`\`tsx
<Formik
  initialValues={{ password: '' }}
  onSubmit={handleSubmit}
>
  {({ values, setFieldValue }) => (
    <DPasswordStrengthMeter
      value={values.password}
      onChange={(value) => setFieldValue('password', value)}
    />
  )}
</Formik>
\`\`\`

## Custom Messages

\`\`\`tsx
<DPasswordStrengthMeter
  validationMessages={{
    number: 'Al menos un número',
    lowercaseLetter: 'Al menos una letra minúscula',
    uppercaseLetter: 'Al menos una letra mayúscula',
    especialChar: 'Al menos un carácter especial',
  }}
/>
\`\`\`

## Enable Only Specific Checks

\`\`\`tsx
// Only require uppercase, lowercase, and number (3 checks)
<DPasswordStrengthMeter
  enabledChecks={['uppercase', 'lowercase', 'number']}
/>

// Only require number and special character (2 checks)
<DPasswordStrengthMeter
  enabledChecks={['number', 'specialChar']}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      type: 'string',
      description: 'The id of the input',
    },
    label: {
      control: 'text',
      type: 'string',
      description: 'The label text for the password input',
    },
    placeholder: {
      control: 'text',
      type: 'string',
      description: 'Placeholder text for the input',
    },
    value: {
      control: 'text',
      type: 'string',
      description: 'The current password value',
    },
    name: {
      control: 'text',
      type: 'string',
      description: 'The name attribute for the input',
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      description: 'Whether the input is disabled',
    },
    readonly: {
      control: 'boolean',
      type: 'boolean',
      description: 'Whether the input is readonly',
    },
    invalid: {
      control: 'boolean',
      type: 'boolean',
      description: 'Whether the input has validation errors',
    },
    className: {
      control: 'text',
      type: 'string',
      description: 'Additional CSS classes',
    },
    validationMessages: {
      control: 'object',
      description: 'Custom validation messages for each check',
      table: {
        type: {
          summary: 'ValidationMessages',
          detail: '{\n  number: string;\n  lowercaseLetter: string;\n  uppercaseLetter: string;\n  especialChar: string;\n  notMatch?: string;\n}',
        },
        defaultValue: {
          summary: 'Default English messages',
        },
      },
    },
    enabledChecks: {
      control: 'multi-select',
      options: ['uppercase', 'lowercase', 'number', 'specialChar'],
      description: 'Array of validation checks to enable. Controls which requirements are shown and validated.',
      table: {
        type: {
          summary: 'ValidationCheck[]',
          detail: "Array of: 'uppercase' | 'lowercase' | 'number' | 'specialChar'",
        },
        defaultValue: {
          summary: "['uppercase', 'lowercase', 'number', 'specialChar']",
        },
      },
    },
    onChange: {
      action: 'onChange',
      description: 'Callback when password changes',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DPasswordStrengthMeter>;

export const Default: Story = {
  args: {
    id: 'password1',
    label: 'Password',
    placeholder: 'Enter your password',
  },
};

export const WithValue: Story = {
  args: {
    id: 'password2',
    label: 'Password',
    value: 'Test123!',
  },
};

export const CustomLabel: Story = {
  args: {
    id: 'password3',
    label: 'Create New Password',
    placeholder: 'Must be at least 8 characters',
  },
};

export const Disabled: Story = {
  args: {
    id: 'password4',
    label: 'Password',
    value: 'Test123!',
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    id: 'password5',
    label: 'Password',
    invalid: true,
  },
};

export const Readonly: Story = {
  args: {
    id: 'password6',
    label: 'Password',
    value: 'Test123!',
    readonly: true,
  },
};

export const Interactive: Story = {
  render: function InteractiveRender(args) {
    const [password, setPassword] = useState('');

    return (
      <div>
        <DPasswordStrengthMeter
          {...args}
          value={password}
          onChange={setPassword}
        />
        <div className="mt-3 p-3 bg-light rounded">
          <small className="text-muted">
            Current password:
            {' '}
            <code>{password || '(empty)'}</code>
          </small>
        </div>
      </div>
    );
  },
  args: {
    id: 'password7',
    label: 'Try typing a password',
    placeholder: 'Type to see strength meter update',
  },
};

export const WithFeedback: Story = {
  render: function WithFeedbackRender(args) {
    const [password, setPassword] = useState('');
    const isValid = password.length >= 8
      && /[A-Z]/.test(password)
      && /[a-z]/.test(password)
      && /\d/.test(password)
      && /[~!@#$^*\-_=[\]{}|;,.?]/.test(password);

    return (
      <DPasswordStrengthMeter
        {...args}
        value={password}
        onChange={setPassword}
        invalid={password.length > 0 && !isValid}
      />
    );
  },
  args: {
    id: 'password8',
    label: 'Password with validation',
    placeholder: 'Must meet all requirements',
  },
};

export const CustomMessages: Story = {
  args: {
    id: 'password9',
    label: 'Contraseña',
    placeholder: 'Ingresa tu contraseña',
    validationMessages: {
      number: 'Al menos un número',
      lowercaseLetter: 'Al menos una letra minúscula',
      uppercaseLetter: 'Al menos una letra mayúscula',
      especialChar: 'Al menos uno de estos caracteres especiales: ~!@#$^*-_=[]{}|;,.?',
    },
  },
};

export const CustomMessagesInteractive: Story = {
  render: function CustomMessagesInteractiveRender(args) {
    const [password, setPassword] = useState('');

    return (
      <DPasswordStrengthMeter
        {...args}
        value={password}
        onChange={setPassword}
        validationMessages={{
          number: '✓ Un número (0-9)',
          lowercaseLetter: '✓ Una minúscula (a-z)',
          uppercaseLetter: '✓ Una mayúscula (A-Z)',
          especialChar: '✓ Un símbolo especial',
        }}
      />
    );
  },
  args: {
    id: 'password10',
    label: 'Password with emoji messages',
    placeholder: 'Try it out!',
  },
};

export const OnlyThreeChecks: Story = {
  args: {
    id: 'password11',
    label: 'Password (3 requirements)',
    placeholder: 'Only uppercase, lowercase, and number required',
    enabledChecks: ['uppercase', 'lowercase', 'number'],
  },
};

export const OnlyTwoChecks: Story = {
  args: {
    id: 'password12',
    label: 'Simple Password',
    placeholder: 'Only number and special character required',
    enabledChecks: ['number', 'specialChar'],
  },
};

export const OnlyOneCheck: Story = {
  args: {
    id: 'password13',
    label: 'Very Simple Password',
    placeholder: 'Only uppercase letter required',
    enabledChecks: ['uppercase'],
  },
};

export const CustomChecksInteractive: Story = {
  render: function CustomChecksInteractiveRender(args) {
    const [password, setPassword] = useState('');

    return (
      <div>
        <DPasswordStrengthMeter
          {...args}
          value={password}
          onChange={setPassword}
          enabledChecks={['lowercase', 'number', 'specialChar']}
        />
        <div className="mt-3 p-3 bg-light rounded">
          <small className="text-muted">
            <strong>Note:</strong>
            {' '}
            This example only requires lowercase, number, and special character (3 checks total)
          </small>
        </div>
      </div>
    );
  },
  args: {
    id: 'password14',
    label: 'Custom Requirements',
    placeholder: 'No uppercase required',
  },
};
