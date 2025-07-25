import { SplideSlide } from '@splidejs/react-splide';
import classNames from 'classnames';

type Props = Omit<React.ComponentProps<typeof SplideSlide>, 'className'> & {
  className?: string;
};

export default function DCarouselSlide({ className, ...props }: Props) {
  return (
    <SplideSlide
      {...props}
      className={classNames(
        'd-carousel-slide',
        className as string,
      )}
    />
  );
}
