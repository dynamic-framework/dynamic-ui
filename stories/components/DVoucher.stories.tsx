import { Meta, StoryObj } from '@storybook/react-vite';
import DVoucher from '../../src/components/DVoucher';
import DBox from '../../src/components/DBox';
import { DContextProvider } from '../../src';

const meta: Meta<typeof DVoucher> = {
  title: 'Design System/Components/Voucher',
  component: DVoucher,
  parameters: {
    docs: {
      description: {
        component: `
**DVoucher** is a component designed to display transaction receipts, confirmations, or vouchers with download and share capabilities.

---

## 💡 Overview

The voucher component provides:
- Success/error state indicators with customizable icons
- Amount display with optional details
- Download and share functionality via screenshot
- Error handling for async operations
- Fully customizable content area

---

## 🎨 Features

- Icon customization: Accepts string name, object of DIcon props ({ icon, color, size, hasCircle }), or false/null to hide.
- Defaults: icon="CircleCheckBig", color="success", size="1rem", hasCircle=true.

- **Amount Display**: Optional amount with supporting details
- **Actions**: Built-in download and share buttons
- **className**: Optional CSS class to style the voucher root container
- **Content Area**: Flexible children for additional information
- **Error Handling**: Optional error callback for failed operations
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <DContextProvider>
        <DBox className="p-8" style={{ width: '700px', margin: '0 auto' }}>
          <Story />
        </DBox>
      </DContextProvider>
    ),
  ],
  argTypes: {
    icon: {
      control: 'object',
      description: 'Icon can be a string (name), an object of DIcon props ({ icon, color, size, hasCircle }), or false/null to hide',
    },

    className: {
      control: 'text',
      description: 'Optional CSS class for the voucher root element',
    },
    title: {
      control: 'text',
      description: 'Main title of the voucher',
    },
    message: {
      control: 'text',
      description: 'Descriptive message',
    },
    amount: {
      control: 'text',
      description: 'Optional amount to display',
    },
    amountDetails: {
      control: 'text',
      description: 'Optional additional details for the amount',
    },
    downloadText: {
      control: 'text',
      description: 'Text for download button',
    },
    shareText: {
      control: 'text',
      description: 'Text for share button',
    },
    onError: {
      action: 'error',
      description: 'Error handler for download/share failures',
    },
    children: {
      control: false,
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DVoucher>;

export const Default: Story = {
  args: {
    icon: { icon: 'CircleCheckBig', color: 'success' },
    title: 'Payment Successful',
    message: 'Your transaction has been completed successfully',
    amount: '$125.00',
    downloadText: 'Download',
    shareText: 'Share',
    children: (
      <div className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between">
          <span className="text-muted">Transaction ID:</span>
          <span className="fw-medium">TXN-123456789</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="text-muted">Date:</span>
          <span className="fw-medium">Nov 13, 2025</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="text-muted">Payment Method:</span>
          <span className="fw-medium">Credit Card ****1234</span>
        </div>
      </div>
    ),
  },
};

export const WithAmountDetails: Story = {
  args: {
    icon: { icon: 'CircleCheckBig', color: 'success' },
    title: 'Payment Received',
    message: 'Thank you for your payment',
    amount: '$250.00',
    amountDetails: (
      <div className="text-center text-muted small">
        <div>Subtotal: $225.00</div>
        <div>Tax: $25.00</div>
      </div>
    ),
    children: (
      <div className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between">
          <span className="text-muted">Invoice:</span>
          <span className="fw-medium">INV-2025-001</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="text-muted">Customer:</span>
          <span className="fw-medium">John Doe</span>
        </div>
      </div>
    ),
  },
};

export const ErrorState: Story = {
  args: {
    icon: { icon: 'CircleX', color: 'danger' },
    title: 'Payment Failed',
    message: 'We could not process your payment. Please try again.',
    children: (
      <div className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between">
          <span className="text-muted">Error Code:</span>
          <span className="fw-medium text-danger">ERR-500</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="text-muted">Attempted:</span>
          <span className="fw-medium">Nov 13, 2025 15:45</span>
        </div>
      </div>
    ),
  },
};

export const WarningState: Story = {
  args: {
    icon: { icon: 'AlertTriangle', color: 'warning' },
    title: 'Payment Pending',
    message: 'Your payment is being processed. This may take a few minutes.',
    amount: '$99.99',
    children: (
      <div className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between">
          <span className="text-muted">Reference:</span>
          <span className="fw-medium">REF-456789</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="text-muted">Status:</span>
          <span className="fw-medium text-warning">Pending</span>
        </div>
      </div>
    ),
  },
};

export const WithoutAmount: Story = {
  args: {
    icon: { icon: 'CheckCircle2', color: 'info' },
    title: 'Registration Complete',
    message: 'Welcome! Your account has been created successfully.',
    children: (
      <div className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between">
          <span className="text-muted">Username:</span>
          <span className="fw-medium">johndoe</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="text-muted">Email:</span>
          <span className="fw-medium">john@example.com</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="text-muted">Member Since:</span>
          <span className="fw-medium">Nov 13, 2025</span>
        </div>
      </div>
    ),
  },
};

export const CustomButtonText: Story = {
  args: {
    icon: { icon: 'CircleCheckBig', color: 'success' },
    title: 'Receipt Generated',
    message: 'Your receipt is ready',
    amount: '$1,234.56',
    downloadText: 'Download Receipt',
    shareText: 'Share Receipt',
    children: (
      <div className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between">
          <span className="text-muted">Order Number:</span>
          <span className="fw-medium">ORD-2025-1234</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="text-muted">Merchant:</span>
          <span className="fw-medium">Example Store</span>
        </div>
      </div>
    ),
  },
};
