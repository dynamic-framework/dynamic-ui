import { Splide } from '@splidejs/react-splide';
import classNames from 'classnames';

import { forwardRef } from 'react';
import type {
  PropsWithChildren,
  Ref,
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
    ...props
  }: Props,
  ref: Ref<Splide>,
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
      {...props}
    >
      {children}
    </Splide>
  );
}
const ForwardedDInput = forwardRef(DCarousel);
ForwardedDInput.displayName = 'DCarousel';
export default Object.assign(ForwardedDInput, {
  Slide: DCarouselSlide,
});
