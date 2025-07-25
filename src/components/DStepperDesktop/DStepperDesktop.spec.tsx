import { render, screen } from '@testing-library/react';
import DStepperDesktop from './DStepperDesktop';
import { DContextProvider } from '../../contexts';

const mockSteps = [
  { label: 'Step 1', value: 1, description: 'First step description' },
  { label: 'Step 2', value: 2, description: 'Second step description' },
  { label: 'Step 3', value: 3 },
];

const renderWithContext = (ui: React.ReactElement) => {
  return render(
    <DContextProvider>
      {ui}
    </DContextProvider>
  );
};

describe('<DStepperDesktop />', () => {
  it('should render stepper with steps', () => {
    renderWithContext(
      <DStepperDesktop options={mockSteps} currentStep={1} />
    );

    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
    expect(screen.getByText('First step description')).toBeInTheDocument();
    expect(screen.getByText('Second step description')).toBeInTheDocument();
  });

  it('should show current step correctly', () => {
    const { container } = renderWithContext(
      <DStepperDesktop options={mockSteps} currentStep={2} />
    );

    const currentStepIcon = container.querySelector('.d-step-current');
    expect(currentStepIcon).toBeInTheDocument();
    expect(currentStepIcon).toHaveTextContent('2');
  });

  it('should show completed steps with check icons', () => {
    const { container } = renderWithContext(
      <DStepperDesktop options={mockSteps} currentStep={3} />
    );

    const checkIcons = container.querySelectorAll('.d-step-check');
    expect(checkIcons).toHaveLength(2); // Step 1 and 2 should be completed
    
    const iconElements = container.querySelectorAll('.d-step-check .d-step-icon');
    expect(iconElements).toHaveLength(2);
  });

  it('should show all steps as completed when completed prop is true', () => {
    const { container } = renderWithContext(
      <DStepperDesktop options={mockSteps} currentStep={3} completed />
    );

    const checkIcons = container.querySelectorAll('.d-step-check');
    expect(checkIcons).toHaveLength(3); // All steps should be completed
  });

  it('should render vertical stepper', () => {
    const { container } = renderWithContext(
      <DStepperDesktop options={mockSteps} currentStep={1} vertical />
    );

    expect(container.firstChild).toHaveClass('is-vertical');
  });

  it('should render with align start', () => {
    const { container } = renderWithContext(
      <DStepperDesktop options={mockSteps} currentStep={1} alignStart />
    );

    expect(container.firstChild).toHaveClass('is-align-start');
  });

  it('should not apply align start class when vertical is true', () => {
    const { container } = renderWithContext(
      <DStepperDesktop options={mockSteps} currentStep={1} alignStart vertical />
    );

    expect(container.firstChild).not.toHaveClass('is-align-start');
    expect(container.firstChild).toHaveClass('is-vertical');
  });

  it('should apply custom className and style', () => {
    const { container } = renderWithContext(
      <DStepperDesktop 
        options={mockSteps} 
        currentStep={1} 
        className="custom-stepper" 
        style={{ margin: '10px' }} 
      />
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
        iconSuccessMaterialStyle={true}
      />
    );

    const iconElement = container.querySelector('.d-step-check .d-step-icon');
    expect(iconElement).toHaveClass('fa-star', 'fas');
  });

  it('should throw error when currentStep is less than 1', () => {
    expect(() => {
      renderWithContext(
        <DStepperDesktop options={mockSteps} currentStep={0} />
      );
    }).toThrow('Current step should be in the range from 1 to options length');
  });

  it('should throw error when currentStep is greater than options length', () => {
    expect(() => {
      renderWithContext(
        <DStepperDesktop options={mockSteps} currentStep={4} />
      );
    }).toThrow('Current step should be in the range from 1 to options length');
  });

  it('should render steps without descriptions', () => {
    const stepsWithoutDescription = [
      { label: 'Step 1', value: 1 },
      { label: 'Step 2', value: 2 },
    ];

    const { container } = renderWithContext(
      <DStepperDesktop options={stepsWithoutDescription} currentStep={1} />
    );

    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(container.querySelector('.d-step-description')).not.toBeInTheDocument();
  });

  it('should have correct base classes', () => {
    const { container } = renderWithContext(
      <DStepperDesktop options={mockSteps} currentStep={1} />
    );

    expect(container.firstChild).toHaveClass('d-stepper-desktop');
    
    const steps = container.querySelectorAll('.d-step');
    expect(steps).toHaveLength(3);
    
    const stepValues = container.querySelectorAll('.d-step-value');
    expect(stepValues).toHaveLength(3);
    
    const stepTexts = container.querySelectorAll('.d-step-text-container');
    expect(stepTexts).toHaveLength(3);
    
    const stepLabels = container.querySelectorAll('.d-step-label');
    expect(stepLabels).toHaveLength(3);
  });

  it('should show step number for future steps', () => {
    const { container } = renderWithContext(
      <DStepperDesktop options={mockSteps} currentStep={1} />
    );

    const stepIcons = container.querySelectorAll('.d-step-icon-container');
    expect(stepIcons[1]).toHaveTextContent('2'); // Step 2 should show number
    expect(stepIcons[2]).toHaveTextContent('3'); // Step 3 should show number
  });
});