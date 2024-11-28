import { Splide } from '@splidejs/react-splide';
import classNames from 'classnames';
import { forwardRef } from 'react';

import type {
  ForwardedRef,
  PropsWithChildren,
} from 'react';
import type { SplideProps } from '@splidejs/react-splide';

import DCarouselSlide from './components/DCarouselSlide';

import type { BaseProps } from '../interface';

type Props =
& SplideProps
& PropsWithChildren<BaseProps>;

function DCarousel(
  {
    children,
    className,
    style,
    options,
    dataAttributes,
    ...props
  }: Props,
  ref: ForwardedRef<Splide>,
) {
  return (
    <Splide
      className={classNames('d-carousel', className)}
      style={style}
      ref={ref}
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
      {children}
    </Splide>
  );
}
const ForwardedDCarousel = forwardRef<Splide, Props>(DCarousel);
ForwardedDCarousel.displayName = 'DCarousel';
export default Object.assign(ForwardedDCarousel, {
  Slide: DCarouselSlide,
});
