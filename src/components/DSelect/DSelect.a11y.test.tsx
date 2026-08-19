import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DSelect from './DSelect';

describe('<DSelect /> a11y', () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  it('should have no violations with default props', async () => {
    const { container } = render(
      <DSelect
        id="componentId1"
        label="Select an option"
        options={options}
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when disabled', async () => {
    const { container } = render(
      <DSelect
        id="componentId1"
        label="Select an option"
        options={options}
        disabled
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when invalid with a hint', async () => {
    const { container } = render(
      <DSelect
        id="componentId1"
        label="Select an option"
        options={options}
        invalid
        hint="This field is required"
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when multi and clearable', async () => {
    const { container } = render(
      <DSelect
        id="componentId1"
        label="Select options"
        options={options}
        multi
        clearable
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
