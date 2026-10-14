import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DPaginator from './DPaginator';

/**
 * Run WITHOUT a rule suppression, deliberately.
 *
 * The previous version disabled `aria-prohibited-attr` with a comment
 * explaining that `react-responsive-pagination` rendered the spent Previous
 * control as a bare `<span aria-label="Previous">` — `aria-label` is not
 * allowed on a plain span — and that it "can't be fixed from this component
 * without patching that dependency".
 *
 * The dependency is gone. The markup is this component's now, so the
 * suppression would be hiding our own defect rather than somebody else's: a
 * spent arrow is a real `<button disabled>`, which carries a role and may be
 * labelled.
 */
describe('<DPaginator /> a11y', () => {
  it('should have no violations with default props', async () => {
    const { container } = render(
      <DPaginator total={3} current={1} onPageChange={() => {}} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  /** The first page is where the old markup broke: Previous is spent. */
  it('should have no violations on the first page', async () => {
    const { container } = render(
      <DPaginator total={10} current={1} onPageChange={() => {}} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should have no violations on the last page', async () => {
    const { container } = render(
      <DPaginator total={10} current={10} onPageChange={() => {}} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  /** Long enough to render both ellipses. */
  it('should have no violations with gaps at both ends', async () => {
    const { container } = render(
      <DPaginator total={40} current={20} onPageChange={() => {}} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should have no violations with a single page', async () => {
    const { container } = render(
      <DPaginator total={1} current={1} onPageChange={() => {}} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should have no violations when the pages are links', async () => {
    const { container } = render(
      <DPaginator total={10} current={4} pageHref={(page) => `/items?page=${page}`} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should have no violations without arrows', async () => {
    const { container } = render(
      <DPaginator total={10} current={4} arrows={false} onPageChange={() => {}} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
