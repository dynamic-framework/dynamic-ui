/// <reference types="react" />
import { Splide } from '@splidejs/react-splide';
import type { SplideProps } from '@splidejs/react-splide';
import DCarouselSlide from './components/DCarouselSlide';
import type { BaseProps } from '../interface';
declare const _default: import("react").ForwardRefExoticComponent<SplideProps & BaseProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<Splide>> & {
    Slide: typeof DCarouselSlide;
};
export default _default;
