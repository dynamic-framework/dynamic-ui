/// <reference types="react" />
import { SplideSlide } from '@splidejs/react-splide';
type Props = Omit<React.ComponentProps<typeof SplideSlide>, 'className'> & {
    className?: string;
};
export default function DCarouselSlide({ className, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
