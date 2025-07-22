import { SplideSlide } from '@splidejs/react-splide';
import classNames from 'classnames';

type Props = React.ComponentProps<typeof SplideSlide>;

export default function DCarouselSlide({ className, ...props }: Props) {
  return (
    <SplideSlide
      className={classNames(
        'd-carousel-slide',
        className as string,
      )}
      {...props}
    />
  );
}
