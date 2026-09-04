import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DStepperMobile from './DStepperMobile';

const mockSteps = [
  { label: 'Step 1', value: 1, description: 'First step description' },
  { label: 'Step 2', value: 2, description: 'Second step description' },
  { label: 'Step 3', value: 3, description: 'Third step description' },
];

describe('<DStepperMobile /> a11y', () => {
  it('should have no violations for the first step', async () => {
    const { container } = render(<DStepperMobile options={mockSteps} currentStep={1} />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations for a middle step', async () => {
    const { container } = render(<DStepperMobile options={mockSteps} currentStep={2} />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations for the last step', async () => {
    const { container } = render(<DStepperMobile options={mockSteps} currentStep={3} />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations for a step without description', async () => {
    const stepsWithoutDescription = [
      { label: 'Step 1', value: 1 },
      { label: 'Step 2', value: 2 },
    ];

    const { container } = render(
      <DStepperMobile options={stepsWithoutDescription} currentStep={1} />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
