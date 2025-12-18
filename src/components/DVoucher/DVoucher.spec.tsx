import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import DVoucher from './DVoucher';

const mockDownload = jest.fn().mockResolvedValue(undefined);
const mockShare = jest.fn().mockResolvedValue(undefined);

jest.mock('./hooks/useScreenshotDownload', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    downloadRef: { current: null },
    download: mockDownload,
  })),
}));

jest.mock('./hooks/useScreenshotWebShare', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    shareRef: { current: null },
    share: mockShare,
  })),
}));

describe('<DVoucher />', () => {
  const defaultProps = {
    title: 'Payment Successful',
    message: 'Your payment has been processed',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders component with required props', () => {
    render(<DVoucher {...defaultProps} />);

    expect(screen.getByText('Payment Successful')).toBeInTheDocument();
    expect(screen.getByText('Your payment has been processed')).toBeInTheDocument();
  });

  it('renders with default icon and color', () => {
    render(<DVoucher {...defaultProps} />);

    const voucherElement = screen.getByText('Payment Successful').closest('.d-voucher');
    expect(voucherElement).toBeInTheDocument();
  });

  it('renders custom icon and color', () => {
    render(
      <DVoucher
        {...defaultProps}
        icon="CheckCircle"
        color="primary"
      />,
    );

    expect(screen.getByText('Payment Successful')).toBeInTheDocument();
  });

  it('renders amount when provided', () => {
    render(
      <DVoucher
        {...defaultProps}
        amount="$100.00"
      />,
    );

    expect(screen.getByText('$100.00')).toBeInTheDocument();
  });

  it('renders amount with details', () => {
    const amountDetails = <span className="text-muted">USD</span>;

    render(
      <DVoucher
        {...defaultProps}
        amount="$100.00"
        amountDetails={amountDetails}
      />,
    );

    expect(screen.getByText('$100.00')).toBeInTheDocument();
    expect(screen.getByText('USD')).toBeInTheDocument();
  });

  it('does not render amount section when amount is not provided', () => {
    const { container } = render(<DVoucher {...defaultProps} />);

    const amountSection = container.querySelector('.d-voucher-amount');
    expect(amountSection).not.toBeInTheDocument();
  });

  it('renders children content', () => {
    render(
      <DVoucher {...defaultProps}>
        <div>Custom Content</div>
      </DVoucher>,
    );

    expect(screen.getByText('Custom Content')).toBeInTheDocument();
  });

  it('renders share button with default text', () => {
    render(<DVoucher {...defaultProps} />);

    expect(screen.getByText('Share')).toBeInTheDocument();
  });

  it('renders download button with default text', () => {
    render(<DVoucher {...defaultProps} />);

    expect(screen.getByText('Download')).toBeInTheDocument();
  });

  it('renders share button with custom text', () => {
    render(
      <DVoucher
        {...defaultProps}
        shareText="Share Voucher"
      />,
    );

    expect(screen.getByText('Share Voucher')).toBeInTheDocument();
  });

  it('renders download button with custom text', () => {
    render(
      <DVoucher
        {...defaultProps}
        downloadText="Download Voucher"
      />,
    );

    expect(screen.getByText('Download Voucher')).toBeInTheDocument();
  });

  it('calls share function when share button is clicked', async () => {
    mockShare.mockClear();

    const user = userEvent.setup();
    render(<DVoucher {...defaultProps} />);

    const shareButton = screen.getByText('Share');
    await user.click(shareButton);

    await waitFor(() => {
      expect(mockShare).toHaveBeenCalled();
    });
  });

  it('calls download function when download button is clicked', async () => {
    mockDownload.mockClear();

    const user = userEvent.setup();
    render(<DVoucher {...defaultProps} />);

    const downloadButton = screen.getByText('Download');
    await user.click(downloadButton);

    await waitFor(() => {
      expect(mockDownload).toHaveBeenCalled();
    });
  });

  it('calls onError when share fails', async () => {
    const error = new Error('Share failed');
    mockShare.mockRejectedValueOnce(error);
    const mockOnError = jest.fn();

    const user = userEvent.setup();
    render(
      <DVoucher
        {...defaultProps}
        onError={mockOnError}
      />,
    );

    const shareButton = screen.getByText('Share');
    await user.click(shareButton);

    await waitFor(() => {
      expect(mockOnError).toHaveBeenCalledWith(error);
    });
  });

  it('calls onError when download fails', async () => {
    const error = new Error('Download failed');
    mockDownload.mockRejectedValueOnce(error);
    const mockOnError = jest.fn();

    const user = userEvent.setup();
    render(
      <DVoucher
        {...defaultProps}
        onError={mockOnError}
      />,
    );

    const downloadButton = screen.getByText('Download');
    await user.click(downloadButton);

    await waitFor(() => {
      expect(mockOnError).toHaveBeenCalledWith(error);
    });
  });

  it('renders voucher with complete props', () => {
    const amountDetails = <span className="text-muted">USD</span>;

    render(
      <DVoucher
        title="Transaction Complete"
        message="Your transaction was successful"
        amount="$250.50"
        amountDetails={amountDetails}
        icon="CheckCircle"
        color="success"
        downloadText="Save PDF"
        shareText="Share Receipt"
      >
        <div>
          <p>Transaction ID: 12345</p>
          <p>Date: 2025-11-13</p>
        </div>
      </DVoucher>,
    );

    expect(screen.getByText('Transaction Complete')).toBeInTheDocument();
    expect(screen.getByText('Your transaction was successful')).toBeInTheDocument();
    expect(screen.getByText('$250.50')).toBeInTheDocument();
    expect(screen.getByText('USD')).toBeInTheDocument();
    expect(screen.getByText('Transaction ID: 12345')).toBeInTheDocument();
    expect(screen.getByText('Date: 2025-11-13')).toBeInTheDocument();
    expect(screen.getByText('Save PDF')).toBeInTheDocument();
    expect(screen.getByText('Share Receipt')).toBeInTheDocument();
  });

  it('has proper CSS classes', () => {
    const { container } = render(<DVoucher {...defaultProps} />);

    expect(container.querySelector('.d-voucher')).toBeInTheDocument();
    expect(container.querySelector('.d-voucher-header')).toBeInTheDocument();
    expect(container.querySelector('.d-voucher-footer')).toBeInTheDocument();
  });
});
