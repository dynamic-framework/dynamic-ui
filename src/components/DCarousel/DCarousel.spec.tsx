/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import DCarousel from '.';

describe('<DCarousel />', () => {
  it('Should render a carousel with 3 slides', () => {
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

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          aria-roledescription="carousel"
          class="splide d-carousel splide--slide splide--ltr splide--draggable is-active is-initialized"
          id="splide01"
          role="region"
        >
          <div
            class="splide__arrows d-carousel-arrows splide__arrows--ltr"
          >
            <button
              aria-controls="splide01-track"
              aria-label="Previous slide"
              class="splide__arrow d-carousel-arrow splide__arrow--prev d-carousel-arrow-prev"
              disabled=""
              type="button"
            >
              <svg
                focusable="false"
                height="40"
                viewBox="0 0 40 40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"
                />
              </svg>
            </button>
            <button
              aria-controls="splide01-track"
              aria-label="Next slide"
              class="splide__arrow d-carousel-arrow splide__arrow--next d-carousel-arrow-next"
              type="button"
            >
              <svg
                focusable="false"
                height="40"
                viewBox="0 0 40 40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"
                />
              </svg>
            </button>
          </div>
          <div
            aria-atomic="true"
            aria-live="polite"
            class="splide__track splide__track--slide splide__track--ltr splide__track--draggable"
            id="splide01-track"
            style="padding-left: 0px; padding-right: 0px;"
          >
            <ul
              class="splide__list"
              id="splide01-list"
              role="presentation"
              style="transform: translateX(0px);"
            >
              <li
                aria-label="1 of 3"
                aria-roledescription="slide"
                class="splide__slide d-carousel-slide is-active is-visible"
                id="splide01-slide01"
                role="tabpanel"
                style="width: calc(100%);"
              >
                Slide 1
              </li>
              <li
                aria-label="2 of 3"
                aria-roledescription="slide"
                class="splide__slide d-carousel-slide is-visible is-next"
                id="splide01-slide02"
                role="tabpanel"
                style="width: calc(100%);"
              >
                Slide 2
              </li>
              <li
                aria-label="3 of 3"
                aria-roledescription="slide"
                class="splide__slide d-carousel-slide is-visible"
                id="splide01-slide03"
                role="tabpanel"
                style="width: calc(100%);"
              >
                Slide 3
              </li>
            </ul>
          </div>
          <ul
            aria-label="Select a slide to show"
            class="splide__pagination d-carousel-pagination splide__pagination--ltr"
            role="tablist"
          >
            <li
              role="presentation"
            >
              <button
                aria-controls="splide01-slide01"
                aria-label="Go to slide 1"
                aria-selected="true"
                class="splide__pagination__page d-carousel-pagination-page is-active"
                role="tab"
                type="button"
              />
            </li>
            <li
              role="presentation"
            >
              <button
                aria-controls="splide01-slide02"
                aria-label="Go to slide 2"
                class="splide__pagination__page d-carousel-pagination-page"
                role="tab"
                tabindex="-1"
                type="button"
              />
            </li>
            <li
              role="presentation"
            >
              <button
                aria-controls="splide01-slide03"
                aria-label="Go to slide 3"
                class="splide__pagination__page d-carousel-pagination-page"
                role="tab"
                tabindex="-1"
                type="button"
              />
            </li>
          </ul>
        </div>
      </div>
    `);
  });

  it('Should render custom arrow icons when iconArrowLeft/iconArrowRight are provided', () => {
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

    const prevButton = container.querySelector('.splide__arrow--prev');
    const nextButton = container.querySelector('.splide__arrow--next');

    expect(prevButton?.querySelector('.d-icon.d-icon-color-success')).toBeInTheDocument();
    expect(nextButton?.querySelector('.d-icon.d-icon-color-danger')).toBeInTheDocument();
    expect(prevButton).toHaveAttribute('aria-label', 'Previous slide');
    expect(nextButton).toHaveAttribute('aria-label', 'Next slide');
  });

  it('Should fall back to the default arrow icon on the side without a custom icon', () => {
    const props: ComponentProps<typeof DCarousel> = {
      iconArrowLeft: { icon: 'ArrowLeft' },
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

    const nextButton = container.querySelector('.splide__arrow--next');

    expect(nextButton?.querySelector('svg')).toBeInTheDocument();
  });

  it('Should not render arrows when options.arrows is explicitly false, even with icon props', () => {
    const props: ComponentProps<typeof DCarousel> = {
      iconArrowLeft: { icon: 'ArrowLeft' },
      iconArrowRight: { icon: 'ArrowRight' },
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

    expect(container.querySelector('.splide__arrows')).not.toBeInTheDocument();
  });

  it('Should let a consumer-provided hasTrack take precedence when no icon props are set', () => {
    const props: ComponentProps<typeof DCarousel> = {
      hasTrack: false,
      children: (
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide">Custom track content</li>
          </ul>
        </div>
      ),
    };

    const { container } = render(
      <DCarousel {...props} />,
    );

    // Splide's own SplideTrack wrapper is not rendered; only the consumer-provided one is.
    expect(container.querySelectorAll('.splide__track')).toHaveLength(1);
    expect(container).toHaveTextContent('Custom track content');
  });
});
