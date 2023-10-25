import type { PropsWithChildren } from 'react';
import type { SplideProps } from '@splidejs/react-splide';
import DCarouselSlide from './components/DCarouselSlide';
import type { BaseProps } from '../interface';
type Props = SplideProps & PropsWithChildren<BaseProps>;
declare function DCarousel({ children, className, style, options, ...props }: Props): import("react/jsx-runtime").JSX.Element;
declare const _default: typeof DCarousel & {
    Slide: typeof DCarouselSlide;
};
export default _default;
