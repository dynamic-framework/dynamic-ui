import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DCarousel from '.';

/**
 * Run WITHOUT a rule suppression, deliberately.
 *
 * The previous version disabled `aria-allowed-role` with a comment explaining
 * that Splide gave every slide `<li role="tabpanel">`, which axe rejects, and
 * that it "cannot be fixed here without modifying the vendor library". The
 * vendor library is gone: the markup is this component's now, so the
 * suppression would be hiding our own defect rather than somebody else's.
 */
const slides = (count: number) => Array.from({ length: count }, (_, i) => (
  // eslint-disable-next-line react/no-array-index-key
  <DCarousel.Slide key={i}>{`Slide ${i + 1}`}</DCarousel.Slide>
));

describe('<DCarousel /> a11y', () => {
  it('has no violations with default slides', async () => {
    const { container } = render(<DCarousel>{slides(3)}</DCarousel>);
    expect(await axe(container)).toHaveNoViolations();
  });

  /** `label` is what turns it into an announced carousel rather than a group. */
  it('has no violations when named', async () => {
    const { container } = render(
      <DCarousel label="Featured products">{slides(3)}</DCarousel>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations with custom arrow icons', async () => {
    const { container } = render(
      <DCarousel
        iconArrowLeft={{ icon: 'ArrowLeft', color: 'success' }}
        iconArrowRight={{ icon: 'ArrowRight', color: 'danger' }}
      >
        {slides(2)}
      </DCarousel>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations when arrows and pagination are disabled', async () => {
    const { container } = render(
      <DCarousel arrows={false} pagination={false}>{slides(2)}</DCarousel>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  /**
   * The autoplay toggle is the WCAG 2.2.2 control: anything that moves for more
   * than five seconds needs a way to stop it.
   */
  it('has no violations with autoplay running', async () => {
    const { container } = render(
      <DCarousel autoplay label="Promotions">{slides(3)}</DCarousel>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations with several slides visible at once', async () => {
    const { container } = render(
      <DCarousel perPage={{ xs: 1, md: 3 }} gap={4} peek={4}>{slides(6)}</DCarousel>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
