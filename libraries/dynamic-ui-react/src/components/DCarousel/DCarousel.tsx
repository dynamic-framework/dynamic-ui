import { Splide } from '@splidejs/react-splide';
import classNames from 'classnames';

import type { PropsWithChildren } from 'react';
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
) {
  return (
    <Splide
      className={classNames('d-carousel', className)}
      style={style}
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

export default Object.assign(DCarousel, {
  Slide: DCarouselSlide,
});
