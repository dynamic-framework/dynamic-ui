import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DTimeline, { DTimelineItem } from './DTimeline';

const items: DTimelineItem[] = [
  {
    title: 'Order placed',
    description: 'Your order has been placed',
    time: '10:00 AM',
    status: 'success',
  },
  {
    title: 'Order shipped',
    description: 'Your order is on its way',
    time: '11:00 AM',
    status: 'info',
  },
  {
    title: 'Order delayed',
    description: 'There was an issue with your order',
    status: 'warning',
  },
];

describe('<DTimeline /> a11y', () => {
  it('should have no violations with multiple items and statuses', async () => {
    const { container } = render(<DTimeline items={items} />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a single item without description or time', async () => {
    const { container } = render(<DTimeline items={[{ title: 'Only item' }]} />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with an empty list of items', async () => {
    const { container } = render(<DTimeline items={[]} />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a danger status item', async () => {
    const { container } = render(
      <DTimeline items={[{ title: 'Order cancelled', status: 'danger', icon: 'X' }]} />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
