/* eslint-disable react/jsx-props-no-spreading */
import { SplideSlide } from '@splidejs/react-splide';
import classNames from 'classnames';

type Props = React.ComponentProps<typeof SplideSlide>;

export default function MCarouselSlide({ className, ...props }: Props) {
  return (
    <SplideSlide
      className={classNames(
        'm-carousel-slide',
        className,
      )}
      {...props}
    />
  );
}
