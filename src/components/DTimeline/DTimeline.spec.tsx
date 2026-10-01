/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';

import DTimeline from './DTimeline';
import { DContextProvider } from '../../contexts/DContext';

/**
 * A marker shows a glyph only when it was given one.
 *
 * It used to fall back to `Check`, so every event rendered a completed
 * checkmark — including the ones that have not happened. "Delivered ·
 * Pending" beside a tick says the opposite of the truth, and because the
 * fallback was deliberate-looking code it read as a design choice rather than
 * a bug.
 *
 * `status` does not supply one either, and that is the other half of the
 * decision: a check is right for `success` and wrong for `warning` and
 * `danger`, so the glyph belongs to the caller.
 */
const renderTimeline = (items: Parameters<typeof DTimeline>[0]['items']) => render(
  <DContextProvider>
    <DTimeline items={items} />
  </DContextProvider>,
);

describe('<DTimeline />', () => {
  it('should leave a marker empty when the item has no icon', () => {
    const { container } = renderTimeline([{ title: 'Delivered', time: 'Pending' }]);

    const marker = container.querySelector('.df-timeline-item-marker')!;
    expect(marker).toBeInTheDocument();
    expect(marker.querySelector('.df-icon')).toBeNull();
  });

  it('should not invent a glyph from the status either', () => {
    const { container } = renderTimeline([
      { title: 'Payment failed', status: 'danger' },
      { title: 'Shipped', status: 'success' },
    ]);

    expect(container.querySelectorAll('.df-icon')).toHaveLength(0);
    expect(container.querySelector('.df-timeline-item')).toHaveAttribute('data-color', 'danger');
  });

  it('should render the glyph it was given', () => {
    const { container } = renderTimeline([{ title: 'Order placed', icon: 'Check' }]);

    expect(container.querySelector('.df-timeline-item-marker .df-icon')).toBeInTheDocument();
  });

  /** The size moved to the stylesheet, so the component must not set one. */
  it('should not carry an inline icon size', () => {
    const { container } = renderTimeline([{ title: 'Order placed', icon: 'Check' }]);

    const icon = container.querySelector('.df-timeline-item-marker .df-icon') as HTMLElement;
    expect(icon.style.getPropertyValue('--df-icon-inline-size')).toBe('');
  });
});
