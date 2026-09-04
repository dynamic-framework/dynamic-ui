import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DStepper from './DStepper';

describe('<DStepper /> a11y', () => {
  const options = [
    { label: 'Step 1', value: 1 },
    { label: 'Step 2', value: 2 },
    { label: 'Step 3', value: 3 },
  ];

  it('should have no violations with default props', async () => {
    const { container } = render(
      <DStepper
        options={options}
        currentStep={1}
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when vertical and completed', async () => {
    const { container } = render(
      <DStepper
        options={options}
        currentStep={3}
        vertical
        completed
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a custom breakpoint', async () => {
    const { container } = render(
      <DStepper
        options={options}
        currentStep={2}
        breakpoint="md"
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
