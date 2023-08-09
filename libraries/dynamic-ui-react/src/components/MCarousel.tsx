/* eslint-disable react/jsx-props-no-spreading */
import { Splide, SplideProps } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';

type Props = SplideProps & PropsWithChildren<{
  className?: string;
}>;

export default function MCarousel({
  children,
  className,
  options,
  ...props
}: Props) {
  return (
    <Splide
      className={classNames('m-carousel', className)}
      options={{
        ...options,
        classes: {
          // Arrows
          arrows: 'splide__arrows m-carousel-arrows',
          arrow: 'splide__arrow m-carousel-arrow',
          prev: 'splide__arrow--prev m-carousel-arrow-prev',
          next: 'splide__arrow--next m-carousel-arrow-next',
          // Paginator
          pagination: 'splide__pagination m-carousel-pagination',
          page: 'splide__pagination__page m-carousel-pagination-page',
        },
      }}
      {...props}
    >
      {children}
    </Splide>
  );
}
