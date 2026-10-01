import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DStepper from './DStepper';

/**
 * Stand-ins for the two panes.
 *
 * They forward `dataAttributes` because the real components do, and because
 * that is the whole mechanism being tested here: `DStepper` puts the breakpoint
 * attribute on the PANE, and the media queries in `stepper.css` read it there.
 *
 * A mock that dropped it would pass while the real thing was broken — which is
 * what happened. The attribute used to go on a wrapper `DStepper` rendered
 * itself, so these mocks never had to carry it, and the nesting bug that made
 * the desktop pane invisible at every width was invisible to this file too.
 */
jest.mock('../DStepperMobile', () => ({
  __esModule: true,
  default: jest.fn(({ currentStep, dataAttributes }) => (
    <div data-testid="mobile-stepper" className="df-stepper-mobile" {...dataAttributes}>
      {`Mobile Step: ${currentStep}`}
    </div>
  )),
}));

jest.mock('../DStepperDesktop', () => ({
  __esModule: true,
  default: jest.fn((props: { currentStep: number; dataAttributes?: Record<string, string> }) => (
    <div data-testid="desktop-stepper" className="df-stepper-desktop" {...props.dataAttributes}>
      {`Desktop Step: ${props.currentStep}`}
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

  beforeEach(() => {
    jest.clearAllMocks();
  });

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
    expect(container.querySelector('[data-below="lg"]')).toBeInTheDocument();
    expect(container.querySelector('[data-from="lg"]')).toBeInTheDocument();
  });

  it('applies a custom breakpoint if specified', () => {
    const { container } = render(<DStepper {...baseProps} breakpoint="md" />);
    expect(container.querySelector('[data-below="md"]')).toBeInTheDocument();
    expect(container.querySelector('[data-from="md"]')).toBeInTheDocument();
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
    expect(stepperElement).toHaveStyle('background-color: rgb(255, 0, 0)');
  });
});
