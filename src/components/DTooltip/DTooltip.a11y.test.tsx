import { act } from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import axe from '../../../tests/a11y/axeHelper';
import DTooltip from './DTooltip';

// The tooltip content is rendered via a `FloatingPortal` directly under
// `document.body`, outside of any page landmark, so the generic "region"
// rule (which expects all page content to live inside a landmark) is not
// applicable to this isolated component test and is disabled here.
const axeOptions = { rules: { region: { enabled: false } } };

describe('<DTooltip /> a11y', () => {
  const tooltipText = 'Tooltip text';

  it('should have no violations when closed', async () => {
    const { baseElement } = render(
      <DTooltip Component={<span>Hover me</span>}>
        {tooltipText}
      </DTooltip>,
    );

    const results = await axe(baseElement, axeOptions);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when open by default', async () => {
    let baseElement: HTMLElement;
    act(() => {
      ({ baseElement } = render(
        <DTooltip
          open
          Component={<span>Tooltip target</span>}
        >
          {tooltipText}
        </DTooltip>,
      ));
    });

    const results = await axe(baseElement!, axeOptions);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when triggered by click with a button', async () => {
    let baseElement: HTMLElement;
    act(() => {
      ({ baseElement } = render(
        <DTooltip
          open
          withClick
          Component={<button type="button">Click me</button>}
        >
          {tooltipText}
        </DTooltip>,
      ));
    });

    const results = await axe(baseElement!, axeOptions);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a size variant', async () => {
    let baseElement: HTMLElement;
    act(() => {
      ({ baseElement } = render(
        <DTooltip
          open
          size="sm"
          Component={<span>Hover me</span>}
        >
          {tooltipText}
        </DTooltip>,
      ));
    });

    const results = await axe(baseElement!, axeOptions);
    expect(results).toHaveNoViolations();
  });
});
