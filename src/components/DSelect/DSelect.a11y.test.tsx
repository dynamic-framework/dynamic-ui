import { act } from 'react';
import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DSelect from './DSelect';

// The menu is rendered through a `FloatingPortal` directly under
// `document.body`, outside of any page landmark, so the generic "region" rule
// — which expects all page content to live inside one — is not applicable to
// an isolated component test.
const axeOptions = { rules: { region: { enabled: false } } };

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

  it('should have no violations with a floating label', async () => {
    const { container } = render(
      <DSelect
        id="componentId1"
        label="Select an option"
        options={options}
        floatingLabel
        defaultValue="2"
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // The menu is portalled, so it is axed through `baseElement` rather than the
  // render container — scanning the container alone would report a clean
  // control and never look at the list.
  it('should have no violations with the menu open over grouped options', async () => {
    // Wrapped: floating-ui measures and positions the menu in an effect, and
    // the state it sets lands outside React's work loop otherwise.
    let baseElement: HTMLElement;
    act(() => {
      ({ baseElement } = render(
        <DSelect
          id="componentId1"
          label="Select an option"
          options={[
            { label: 'Group A', options: [options[0], options[1]] },
            { label: 'Group B', options: [options[2]] },
          ]}
          defaultOpen
        />,
      ));
    });

    const results = await axe(baseElement!, axeOptions);
    expect(results).toHaveNoViolations();
  });
});
