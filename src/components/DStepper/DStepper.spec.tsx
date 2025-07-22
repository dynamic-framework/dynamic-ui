import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DStepper from './DStepper';

// Mock mobile and desktop stepper components
jest.mock('../DStepperMobile', () => ({
  __esModule: true,
  default: jest.fn(({ currentStep }) => (
    <div data-testid="mobile-stepper">
      {`Mobile Step: ${currentStep}`}
    </div>
  )),
}));

jest.mock('../DStepperDesktop', () => ({
  __esModule: true,
  default: jest.fn(({ currentStep }) => (
    <div data-testid="desktop-stepper">
      {`Desktop Step: ${currentStep}`}
    </div>
  )),
}));

describe('DStepper', () => {
  const baseProps = {
    options: [
      { label: 'Step 1', value: 1 },
      { label: 'Step 2', value: 2 },
    ],
    currentStep: 1,
  };

  it('renders both mobile and desktop components', () => {
    render(<DStepper {...baseProps} />);
    expect(screen.getByTestId('mobile-stepper')).toBeInTheDocument();
    expect(screen.getByTestId('desktop-stepper')).toBeInTheDocument();
  });

  it('passes the correct currentStep value to both variants', () => {
    render(<DStepper {...baseProps} currentStep={2} />);
    expect(screen.getByText('Mobile Step: 2')).toBeInTheDocument();
    expect(screen.getByText('Desktop Step: 2')).toBeInTheDocument();
  });

  it('uses "lg" as default breakpoint when none is provided', () => {
    const { container } = render(<DStepper {...baseProps} />);
    expect(container.querySelector('.d-lg-none')).toBeInTheDocument();
    expect(container.querySelector('.d-lg-block')).toBeInTheDocument();
  });

  it('applies a custom breakpoint if specified', () => {
    const { container } = render(<DStepper {...baseProps} breakpoint="md" />);
    expect(container.querySelector('.d-md-none')).toBeInTheDocument();
    expect(container.querySelector('.d-md-block')).toBeInTheDocument();
  });

  it('applies custom className, inline styles, and data attributes', () => {
    const customStyle = { backgroundColor: 'red' };

    render(
      <DStepper
        {...baseProps}
        className="custom-class"
        style={customStyle}
        dataAttributes={{ 'data-testid': 'stepper' }}
      />,
    );

    const stepperElement = screen.getByTestId('stepper');
    expect(stepperElement).toHaveClass('custom-class');
    expect(stepperElement).toHaveStyle('background-color: red');
  });
});
