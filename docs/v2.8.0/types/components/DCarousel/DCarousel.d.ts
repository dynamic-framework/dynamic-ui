import { Splide } from '@splidejs/react-splide';
import type { ComponentProps } from 'react';
import type { SplideProps } from '@splidejs/react-splide';
import DIcon from '../DIcon';
import DCarouselSlide from './components/DCarouselSlide';
import type { BaseProps } from '../interface';
type ArrowIconProps = {
    /** DIcon props used to render the "previous" arrow icon. */
    iconArrowLeft?: ComponentProps<typeof DIcon>;
    /** DIcon props used to render the "next" arrow icon. */
    iconArrowRight?: ComponentProps<typeof DIcon>;
};
declare const _default: import("react").ForwardRefExoticComponent<SplideProps & BaseProps & {
    children?: import("react").ReactNode;
} & ArrowIconProps & import("react").RefAttributes<Splide>> & {
    Slide: typeof DCarouselSlide;
};
export default _default;
