import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import axe from '../../../tests/a11y/axeHelper';
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

describe('<DVoucher /> a11y', () => {
  const defaultProps = {
    title: 'Payment Successful',
    message: 'Your payment has been processed',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should have no violations with required props only', async () => {
    const { container } = render(<DVoucher {...defaultProps} />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with amount and details', async () => {
    const amountDetails = <span className="text-muted">USD</span>;

    const { container } = render(
      <DVoucher
        {...defaultProps}
        amount="$100.00"
        amountDetails={amountDetails}
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when actions are hidden', async () => {
    const { container } = render(<DVoucher {...defaultProps} hideActions />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with custom children content', async () => {
    const { container } = render(
      <DVoucher {...defaultProps}>
        <div>Transaction ID: 12345</div>
      </DVoucher>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
