import { render, screen } from '@testing-library/react';
import DStepperDesktop from './DStepperDesktop';
import { DContextProvider } from '../../contexts';

const mockSteps = [
  { label: 'Step 1', value: 1, description: 'First step description' },
  { label: 'Step 2', value: 2, description: 'Second step description' },
  { label: 'Step 3', value: 3 },
];

const renderWithContext = (ui: React.ReactElement) => render(
  <DContextProvider>
    {ui}
  </DContextProvider>,
);

describe('<DStepperDesktop />', () => {
  it('should render stepper with steps', () => {
    renderWithContext(
      <DStepperDesktop options={mockSteps} currentStep={1} />,
    );

    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
    expect(screen.getByText('First step description')).toBeInTheDocument();
    expect(screen.getByText('Second step description')).toBeInTheDocument();
  });

  it('should show current step correctly', () => {
    const { container } = renderWithContext(
      <DStepperDesktop options={mockSteps} currentStep={2} />,
    );

    const currentStepIcon = container.querySelector('[data-state="current"]');
    expect(currentStepIcon).toBeInTheDocument();
    expect(currentStepIcon).toHaveTextContent('2');
  });

  it('should show completed steps with check icons', () => {
    const { container } = renderWithContext(
      <DStepperDesktop options={mockSteps} currentStep={3} />,
    );

    const checkIcons = container.querySelectorAll('[data-state="done"]');
    expect(checkIcons).toHaveLength(2); // Step 1 and 2 should be completed

    const iconElements = container.querySelectorAll('[data-state="done"] .df-icon');
    expect(iconElements).toHaveLength(2);
  });

  it('should show all steps as completed when completed prop is true', () => {
    const { container } = renderWithContext(
      <DStepperDesktop options={mockSteps} currentStep={3} completed />,
    );

    const checkIcons = container.querySelectorAll('[data-state="done"]');
    expect(checkIcons).toHaveLength(3); // All steps should be completed
  });

  it('should render vertical stepper', () => {
    const { container } = renderWithContext(
      <DStepperDesktop options={mockSteps} currentStep={1} vertical />,
    );

    expect(container.firstChild).toHaveAttribute('data-orientation', 'vertical');
  });

  it('should render with align start', () => {
    const { container } = renderWithContext(
      <DStepperDesktop options={mockSteps} currentStep={1} alignStart />,
    );

    expect(container.firstChild).toHaveAttribute('data-align', 'start');
  });

  it('should not apply align start class when vertical is true', () => {
    const { container } = renderWithContext(
      <DStepperDesktop options={mockSteps} currentStep={1} alignStart vertical />,
    );

    expect(container.firstChild).not.toHaveAttribute('data-align', 'start');
    expect(container.firstChild).toHaveAttribute('data-orientation', 'vertical');
  });

  it('should apply custom className and style', () => {
    const { container } = renderWithContext(
      <DStepperDesktop
        options={mockSteps}
        currentStep={1}
        className="custom-stepper"
        style={{ margin: '10px' }}
      />,
    );

    expect(container.firstChild).toHaveClass('custom-stepper');
    expect(container.firstChild).toHaveStyle({ margin: '10px' });
  });

  it('should use custom success icon', () => {
    const { container } = renderWithContext(
      <DStepperDesktop
        options={mockSteps}
        currentStep={2}
        iconSuccess="star"
        iconSuccessFamilyClass="fas"
        iconSuccessFamilyPrefix="fa"
        iconSuccessMaterialStyle
      />,
    );

    const iconElement = container.querySelector('[data-state="done"] .df-icon');
    expect(iconElement).toHaveClass('df-icon', 'fas');
  });

  it('should throw error when currentStep is less than 1', () => {
    expect(() => {
      renderWithContext(
        <DStepperDesktop options={mockSteps} currentStep={0} />,
      );
    }).toThrow('Current step should be in the range from 1 to options length');
  });

  it('should throw error when currentStep is greater than options length', () => {
    expect(() => {
      renderWithContext(
        <DStepperDesktop options={mockSteps} currentStep={4} />,
      );
    }).toThrow('Current step should be in the range from 1 to options length');
  });

  it('should render steps without descriptions', () => {
    const stepsWithoutDescription = [
      { label: 'Step 1', value: 1 },
      { label: 'Step 2', value: 2 },
    ];

    const { container } = renderWithContext(
      <DStepperDesktop options={stepsWithoutDescription} currentStep={1} />,
    );

    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(container.querySelector('.df-step-description')).not.toBeInTheDocument();
  });

  it('should have correct base classes', () => {
    const { container } = renderWithContext(
      <DStepperDesktop options={mockSteps} currentStep={1} />,
    );

    expect(container.firstChild).toHaveClass('df-stepper-desktop');

    const steps = container.querySelectorAll('.df-step');
    expect(steps).toHaveLength(3);

    const stepValues = container.querySelectorAll('.df-step-marker');
    expect(stepValues).toHaveLength(3);

    const stepTexts = container.querySelectorAll('.df-step-text');
    expect(stepTexts).toHaveLength(3);

    const stepLabels = container.querySelectorAll('.df-step-label');
    expect(stepLabels).toHaveLength(3);
  });

  it('should show step number for future steps', () => {
    const { container } = renderWithContext(
      <DStepperDesktop options={mockSteps} currentStep={1} />,
    );

    const stepIcons = container.querySelectorAll('.df-step-marker');
    expect(stepIcons[1]).toHaveTextContent('2'); // Step 2 should show number
    expect(stepIcons[2]).toHaveTextContent('3'); // Step 3 should show number
  });
});
