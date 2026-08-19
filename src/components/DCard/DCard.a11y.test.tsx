import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DCard from '.';

describe('<DCard /> a11y', () => {
  it('has no violations with a body', async () => {
    const { container } = render(
      <DCard className="custom-card">
        Card body
      </DCard>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations with header, body and footer', async () => {
    const { container } = render(
      <DCard>
        <DCard.Header>Header</DCard.Header>
        <DCard.Body>Body</DCard.Body>
        <DCard.Footer>Footer</DCard.Footer>
      </DCard>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations with data attributes', async () => {
    const { container } = render(
      <DCard dataAttributes={{ 'data-test': 'card' }}>
        Card content
      </DCard>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
