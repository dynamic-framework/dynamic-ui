import { Meta, StoryObj } from '@storybook/react-vite';
import DVoucher from '../../src/components/DVoucher';
import DBox from '../../src/components/DBox';
import { DContextProvider } from '../../src';

const meta = {
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
- **Actions**: Built-in download and share buttons, with an optional "fileName" (base name only) for the generated image; the extension is always appended by the underlying hook so the file stays valid
- **hideActions**: Hides the built-in share/download buttons (defaults to false, fully backward compatible) so you can render your own custom actions elsewhere using the exported \`useScreenshotDownload\`/\`useScreenshotWebShare\` hooks
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
      table: { category: 'Icon' },
    },

    className: {
      control: 'text',
      description: 'Optional CSS class for the voucher root element',
      table: { category: 'Appearance' },
    },
    title: {
      control: 'text',
      description: 'Main title of the voucher',
      table: { category: 'Content' },
    },
    message: {
      control: 'text',
      description: 'Descriptive message',
      table: { category: 'Content' },
    },
    amount: {
      control: 'text',
      description: 'Optional amount to display',
      table: { category: 'Content' },
    },
    amountDetails: {
      control: 'text',
      description: 'Optional additional details for the amount',
      table: { category: 'Content' },
    },
    downloadText: {
      control: 'text',
      description: 'Text for download button',
      table: { category: 'Content' },
    },
    shareText: {
      control: 'text',
      description: 'Text for share button',
      table: { category: 'Content' },
    },
    fileName: {
      control: 'text',
      description: 'Optional base file name for the generated image (no extension). The correct extension is always appended by the hook, e.g. "receipt" -> "receipt.jpg" / "receipt.jpeg"',
      table: { category: 'Content', defaultValue: { summary: 'voucher' } },
    },
    hideActions: {
      control: 'boolean',
      description: 'Hides the built-in share/download buttons and footer, for when you render your own custom actions elsewhere using the exported screenshot hooks',
      table: { category: 'Content', defaultValue: { summary: 'false' } },
    },
    onError: {
      action: 'error',
      description: 'Error handler for download/share failures',
      table: { category: 'Events' },
    },
    children: {
      control: false,
      table: {
        type: {
          summary: 'ReactNode',
        },
        category: 'Content',
      },
    },
  },
} satisfies Meta<typeof DVoucher>;

export default meta;
type Story = StoryObj<typeof meta>;

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
          <span className="text-muted">Processing payment</span>
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
    fileName: 'receipt-ORD-2025-1234',
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

export const HiddenActions: Story = {
  parameters: {
    docs: {
      description: {
        story: `Set \`hideActions\` to hide the built-in share/download buttons and footer entirely.
This is meant to be combined with the exported \`useScreenshotDownload\`/\`useScreenshotWebShare\`
hooks to render your own custom actions anywhere in your layout — see
[Design System / Hooks / useScreenshot](/docs/design-system-hooks-usescreenshot--docs)
for concrete examples.`,
      },
    },
  },
  args: {
    icon: { icon: 'CircleCheckBig', color: 'success' },
    title: 'Payment Successful',
    message: 'Your transaction has been completed successfully',
    amount: '$125.00',
    hideActions: true,
    children: (
      <div className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between">
          <span className="text-muted">Transaction ID:</span>
          <span className="fw-medium">TXN-123456789</span>
        </div>
      </div>
    ),
  },
};
