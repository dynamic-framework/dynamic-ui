import { Splide, SplideProps } from '@splidejs/react-splide';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';

type Props = SplideProps & PropsWithChildren<{
  className?: string;
}>;

export default function DCarousel({
  children,
  className,
  options,
  ...props
}: Props) {
  return (
    <Splide
      className={classNames('d-carousel', className)}
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
