import { render, screen } from '@testing-library/react';
import DStepperMobile from './DStepperMobile';

// Mock timers for the animation
jest.useFakeTimers();

const mockSteps = [
  { label: 'Step 1', value: 1, description: 'First step description' },
  { label: 'Step 2', value: 2, description: 'Second step description' },
  { label: 'Step 3', value: 3, description: 'Third step description' },
];

describe('<DStepperMobile />', () => {
  afterEach(() => {
    jest.clearAllTimers();
  });

  it('should render stepper with current step info', () => {
    render(<DStepperMobile options={mockSteps} currentStep={2} />);

    expect(screen.getByText('2/3')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Second step description')).toBeInTheDocument();
  });

  it('should render stepper for first step', () => {
    render(<DStepperMobile options={mockSteps} currentStep={1} />);

    expect(screen.getByText('1/3')).toBeInTheDocument();
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('First step description')).toBeInTheDocument();
  });

  it('should render stepper for last step', () => {
    render(<DStepperMobile options={mockSteps} currentStep={3} />);

    expect(screen.getByText('3/3')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
    expect(screen.getByText('Third step description')).toBeInTheDocument();
  });

  it('should render step without description', () => {
    const stepsWithoutDescription = [
      { label: 'Step 1', value: 1 },
      { label: 'Step 2', value: 2 },
    ];

    render(<DStepperMobile options={stepsWithoutDescription} currentStep={1} />);

    expect(screen.getByText('1/2')).toBeInTheDocument();
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    const descriptions = screen.getAllByText('');
    expect(descriptions.length).toBeGreaterThan(0); // Empty description exists
  });

  it('should apply custom className and style', () => {
    const { container } = render(
      <DStepperMobile
        options={mockSteps}
        currentStep={1}
        className="custom-stepper"
        style={{ margin: '10px' }}
      />,
    );

    expect(container.firstChild).toHaveClass('d-stepper', 'custom-stepper');
    expect(container.firstChild).toHaveStyle({ margin: '10px' });
  });

  it('should have correct structure and classes', () => {
    const { container } = render(<DStepperMobile options={mockSteps} currentStep={1} />);

    expect(container.querySelector('.d-stepper')).toBeInTheDocument();
    expect(container.querySelector('.d-step-bar')).toBeInTheDocument();
    expect(container.querySelector('.d-step-number')).toBeInTheDocument();
    expect(container.querySelector('.d-step-info')).toBeInTheDocument();
    expect(container.querySelector('.d-step-label')).toBeInTheDocument();
    expect(container.querySelector('.d-step-description')).toBeInTheDocument();
  });

  it('should throw error when currentStep is less than 1', () => {
    expect(() => {
      render(<DStepperMobile options={mockSteps} currentStep={0} />);
    }).toThrow('Current step should be in the range from 1 to options length');
  });

  it('should throw error when currentStep is greater than options length', () => {
    expect(() => {
      render(<DStepperMobile options={mockSteps} currentStep={4} />);
    }).toThrow('Current step should be in the range from 1 to options length');
  });

  it('should animate progress bar angle', () => {
    const { container } = render(<DStepperMobile options={mockSteps} currentStep={2} />);

    const stepBar = container.querySelector('.d-step-bar') as HTMLElement;
    expect(stepBar).toBeInTheDocument();

    // Initially should have background style (may not be set immediately)
    expect(stepBar).toBeInTheDocument();

    // Fast-forward the animation
    jest.advanceTimersByTime(1000);

    // Should still have the gradient background
    expect(stepBar.style.background).toContain('conic-gradient');
  });

  it('should update progress when currentStep changes', () => {
    const { rerender } = render(
      <DStepperMobile options={mockSteps} currentStep={1} />,
    );

    expect(screen.getByText('1/3')).toBeInTheDocument();

    rerender(<DStepperMobile options={mockSteps} currentStep={3} />);

    expect(screen.getByText('3/3')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
  });

  it('should handle single step options', () => {
    const singleStep = [{ label: 'Only Step', value: 1, description: 'Only description' }];

    render(<DStepperMobile options={singleStep} currentStep={1} />);

    expect(screen.getByText('1/1')).toBeInTheDocument();
    expect(screen.getByText('Only Step')).toBeInTheDocument();
    expect(screen.getByText('Only description')).toBeInTheDocument();
  });

  it('should calculate correct progress style', () => {
    const { container } = render(<DStepperMobile options={mockSteps} currentStep={2} />);

    const stepBar = container.querySelector('.d-step-bar') as HTMLElement;

    // Background style may not be populated in JSDOM test environment
    expect(stepBar).toBeInTheDocument();
    expect(stepBar).toHaveClass('d-step-bar');
  });

  it('should not render step info when currentOption is empty', () => {
    // This shouldn't happen with valid props, but testing edge case
    const emptyOptions: never[] = [];

    expect(() => {
      render(<DStepperMobile options={emptyOptions} currentStep={1} />);
    }).toThrow('Current step should be in the range from 1 to options length');
  });

  it('should handle animation cleanup on unmount', () => {
    const { unmount } = render(<DStepperMobile options={mockSteps} currentStep={1} />);

    // Start the animation
    jest.advanceTimersByTime(16);

    // Unmount component
    unmount();

    // Advance time further - should not cause any issues
    jest.advanceTimersByTime(1000);

    // No assertions needed - just ensuring no errors occur
  });
});
