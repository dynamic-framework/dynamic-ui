/* eslint-disable react/jsx-props-no-spreading */
import { SplideSlide } from '@splidejs/react-splide';

export default function MCarouselSlide(props: React.ComponentProps<typeof SplideSlide>) {
  return (
    <SplideSlide {...props} />
  );
}
