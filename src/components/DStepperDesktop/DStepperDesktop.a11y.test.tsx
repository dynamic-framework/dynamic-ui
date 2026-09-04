import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
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

describe('<DStepperDesktop /> a11y', () => {
  it('should have no violations with default props', async () => {
    const { container } = renderWithContext(
      <DStepperDesktop options={mockSteps} currentStep={1} />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when vertical and completed', async () => {
    const { container } = renderWithContext(
      <DStepperDesktop options={mockSteps} currentStep={3} vertical completed />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with align start and a custom success icon', async () => {
    const { container } = renderWithContext(
      <DStepperDesktop
        options={mockSteps}
        currentStep={2}
        alignStart
        iconSuccess="star"
        iconSuccessFamilyClass="fas"
        iconSuccessFamilyPrefix="fa"
        iconSuccessMaterialStyle
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
