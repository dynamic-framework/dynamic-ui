import { Splide, SplideTrack } from '@splidejs/react-splide';
import classNames from 'classnames';
import { forwardRef } from 'react';

import type {
  ComponentProps,
  ForwardedRef,
  PropsWithChildren,
} from 'react';
import type { SplideProps } from '@splidejs/react-splide';

import DIcon from '../DIcon';
import DCarouselSlide from './components/DCarouselSlide';

import type { BaseProps } from '../interface';

type ArrowIconProps = {
  /** DIcon props used to render the "previous" arrow icon. */
  iconArrowLeft?: ComponentProps<typeof DIcon>;
  /** DIcon props used to render the "next" arrow icon. */
  iconArrowRight?: ComponentProps<typeof DIcon>;
};

type Props =
& SplideProps
& PropsWithChildren<BaseProps>
& ArrowIconProps;

const DEFAULT_ARROW_PATH = 'm15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z';

function DefaultArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      width={40}
      height={40}
      focusable="false"
      aria-hidden="true"
    >
      <path d={DEFAULT_ARROW_PATH} />
    </svg>
  );
}

function DCarousel(
  {
    children,
    className,
    style,
    options,
    dataAttributes,
    iconArrowLeft,
    iconArrowRight,
    ...props
  }: Props,
  ref: ForwardedRef<Splide>,
) {
  const hasCustomArrows = Boolean(iconArrowLeft || iconArrowRight);

  return (
    <Splide
      className={classNames('d-carousel', className)}
      style={style}
      ref={ref}
      hasTrack={!hasCustomArrows}
      options={{
        ...options,
        classes: {
          // Arrows
          arrows: 'splide__arrows d-carousel-arrows',
          arrow: 'splide__arrow d-carousel-arrow',
          prev: 'splide__arrow--prev d-carousel-arrow-prev',
          next: 'splide__arrow--next d-carousel-arrow-next',
          // Paginator
          pagination: 'splide__pagination d-carousel-pagination',
          page: 'splide__pagination__page d-carousel-pagination-page',
        },
      }}
      {...dataAttributes}
      {...props}
    >
      {hasCustomArrows ? (
        <>
          <SplideTrack>
            {children}
          </SplideTrack>
          <div className="splide__arrows d-carousel-arrows">
            <button
              type="button"
              className="splide__arrow splide__arrow--prev d-carousel-arrow d-carousel-arrow-prev"
            >
              {iconArrowLeft ? <DIcon {...iconArrowLeft} /> : <DefaultArrowIcon />}
            </button>
            <button
              type="button"
              className="splide__arrow splide__arrow--next d-carousel-arrow d-carousel-arrow-next"
            >
              {iconArrowRight ? <DIcon {...iconArrowRight} /> : <DefaultArrowIcon />}
            </button>
          </div>
        </>
      ) : children}
    </Splide>
  );
}
const ForwardedDCarousel = forwardRef<Splide, Props>(DCarousel);
ForwardedDCarousel.displayName = 'DCarousel';
export default Object.assign(ForwardedDCarousel, {
  Slide: DCarouselSlide,
});
