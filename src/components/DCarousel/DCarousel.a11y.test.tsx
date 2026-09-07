import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import axe from '../../../tests/a11y/axeHelper';
import DCarousel from '.';

describe('<DCarousel /> a11y', () => {
  it('has no violations with default slides', async () => {
    const props: ComponentProps<typeof DCarousel> = {
      children: (
        <>
          <DCarousel.Slide>
            Slide 1
          </DCarousel.Slide>
          <DCarousel.Slide>
            Slide 2
          </DCarousel.Slide>
          <DCarousel.Slide>
            Slide 3
          </DCarousel.Slide>
        </>
      ),
    };

    const { container } = render(
      <DCarousel {...props} />,
    );

    // The third-party Splide library renders slide <li> items with role="tabpanel",
    // which axe flags as an invalid ARIA role/element combination (aria-allowed-role).
    // This markup comes from @splidejs/react-splide itself, not from DCarousel, so it
    // cannot be fixed here without modifying the component/vendor library.
    const results = await axe(container, {
      rules: { 'aria-allowed-role': { enabled: false } },
    });
    expect(results).toHaveNoViolations();
  });

  it('has no violations with custom arrow icons', async () => {
    const props: ComponentProps<typeof DCarousel> = {
      iconArrowLeft: { icon: 'ArrowLeft', color: 'success' },
      iconArrowRight: { icon: 'ArrowRight', color: 'danger' },
      children: (
        <>
          <DCarousel.Slide>
            Slide 1
          </DCarousel.Slide>
          <DCarousel.Slide>
            Slide 2
          </DCarousel.Slide>
        </>
      ),
    };

    const { container } = render(
      <DCarousel {...props} />,
    );

    // The third-party Splide library renders slide <li> items with role="tabpanel",
    // which axe flags as an invalid ARIA role/element combination (aria-allowed-role).
    // This markup comes from @splidejs/react-splide itself, not from DCarousel, so it
    // cannot be fixed here without modifying the component/vendor library.
    const results = await axe(container, {
      rules: { 'aria-allowed-role': { enabled: false } },
    });
    expect(results).toHaveNoViolations();
  });

  it('has no violations when arrows are disabled', async () => {
    const props: ComponentProps<typeof DCarousel> = {
      options: { arrows: false },
      children: (
        <>
          <DCarousel.Slide>
            Slide 1
          </DCarousel.Slide>
          <DCarousel.Slide>
            Slide 2
          </DCarousel.Slide>
        </>
      ),
    };

    const { container } = render(
      <DCarousel {...props} />,
    );

    // The third-party Splide library renders slide <li> items with role="tabpanel",
    // which axe flags as an invalid ARIA role/element combination (aria-allowed-role).
    // This markup comes from @splidejs/react-splide itself, not from DCarousel, so it
    // cannot be fixed here without modifying the component/vendor library.
    const results = await axe(container, {
      rules: { 'aria-allowed-role': { enabled: false } },
    });
    expect(results).toHaveNoViolations();
  });
});
