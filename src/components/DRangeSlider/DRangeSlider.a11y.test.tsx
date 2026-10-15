import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import axe from '../../../tests/a11y/axeHelper';
import DRangeSlider from '.';

/**
 * What the native element buys.
 *
 * Each thumb is a real `<input type="range">`, so it arrives with the `slider`
 * role and with `aria-valuenow`, `aria-valuemin` and `aria-valuemax` already
 * correct and already updated as it moves. None of that is this component's to
 * maintain — which is the argument for not building it out of divs.
 */
describe('<DRangeSlider /> a11y', () => {
  it('has no violations with default props', async () => {
    const { container } = render(<DRangeSlider min={0} max={100} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations with a label and a histogram', async () => {
    const { container } = render(
      <DRangeSlider
        label="Price range"
        min={0}
        max={1000}
        defaultValue={[200, 800]}
        histogram={[1, 5, 9, 4, 2]}
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations when disabled', async () => {
    const { container } = render(<DRangeSlider min={0} max={100} disabled />);
    expect(await axe(container)).toHaveNoViolations();
  });

  /** Two sliders on one control need telling apart. */
  it('names each thumb', () => {
    render(<DRangeSlider min={0} max={100} />);

    expect(screen.getByRole('slider', { name: 'Minimum' })).toBeInTheDocument();
    expect(screen.getByRole('slider', { name: 'Maximum' })).toBeInTheDocument();
  });

  it('takes its labels from i18n', () => {
    render(<DRangeSlider min={0} max={100} i18n={{ minimum: 'Mínimo', maximum: 'Máximo' }} />);

    expect(screen.getByRole('slider', { name: 'Mínimo' })).toBeInTheDocument();
    expect(screen.getByRole('slider', { name: 'Máximo' })).toBeInTheDocument();
  });

  /**
   * A price filter that announces "420" has told the reader a number, not a
   * price. `formatValue` is what makes it say "$420".
   */
  it('announces formatted values when asked', () => {
    render(
      <DRangeSlider
        min={0}
        max={1000}
        defaultValue={[200, 800]}
        formatValue={(value) => `$${value}`}
      />,
    );

    expect(screen.getByRole('slider', { name: 'Minimum' })).toHaveAttribute('aria-valuetext', '$200');
    expect(screen.getByRole('slider', { name: 'Maximum' })).toHaveAttribute('aria-valuetext', '$800');
  });

  /** The group carries the visible label, so the pair is named as one thing. */
  it('names the group from the visible label', () => {
    render(<DRangeSlider label="Price range" min={0} max={100} />);

    expect(screen.getByRole('group', { name: 'Price range' })).toBeInTheDocument();
  });

  /**
   * A bar chart read bar by bar is noise — "3, 7, 12" is nothing a reader can
   * act on, and the thumbs already announce the range being chosen.
   */
  it('hides the histogram from assistive technology', () => {
    const { container } = render(<DRangeSlider min={0} max={100} histogram={[1, 2, 3]} />);

    expect(container.querySelector('.d-range-slider-histogram'))
      .toHaveAttribute('aria-hidden', 'true');
  });
});
