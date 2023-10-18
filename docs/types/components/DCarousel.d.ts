import type { PropsWithChildren } from 'react';
import type { SplideProps } from '@splidejs/react-splide';
type Props = SplideProps & PropsWithChildren<{
    className?: string;
}>;
export default function DCarousel({ children, className, options, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
