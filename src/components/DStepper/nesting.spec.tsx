/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';

import DStepper from './DStepper';

const OPTIONS = [
  { label: 'Amount', value: 1 },
  { label: 'Review', value: 2 },
  { label: 'Done', value: 3 },
];

/**
 * A component must not render the same class twice, one inside the other.
 *
 * `DStepper` did. It wrapped each pane in a `<div>` carrying the breakpoint
 * attribute, and the sub-component inside rendered the SAME class without it —
 * so `.df-stepper-desktop[data-from="lg"]` matched the wrapper and never the
 * inner element, which kept `display: none` from the base rule. The desktop
 * stepper was invisible at every width, and the mobile one, with the mirror
 * image of the bug, was visible at every width.
 *
 * Nothing caught it: the classes all exist, the attributes are all present, the
 * CSS is all valid. The only observable symptom is a nesting that should never
 * happen, so that is what this asserts.
 */
function duplicateNesting(root: HTMLElement): string[] {
  const offenders = new Set<string>();

  Array.from(root.querySelectorAll('[class]')).forEach((element) => {
    Array.from(element.classList)
      .filter((name) => name.startsWith('df-'))
      .filter((name) => element.parentElement?.closest(`.${name}`))
      .forEach((name) => offenders.add(name));
  });

  return Array.from(offenders);
}

describe('<DStepper />', () => {
  it('should render one element per pane, not a pane inside a pane', () => {
    const { container } = render(<DStepper options={OPTIONS} currentStep={2} />);
    expect(duplicateNesting(container)).toEqual([]);
  });

  /**
   * The attribute has to be on the element the stylesheet selects. On a wrapper
   * it is read by a rule that matches nothing.
   */
  it('should put the breakpoint attribute on the panes themselves', () => {
    const { container } = render(
      <DStepper options={OPTIONS} currentStep={2} breakpoint="md" />,
    );

    expect(container.querySelector('.df-stepper-mobile')).toHaveAttribute('data-below', 'md');
    expect(container.querySelector('.df-stepper-desktop')).toHaveAttribute('data-from', 'md');
  });
});
