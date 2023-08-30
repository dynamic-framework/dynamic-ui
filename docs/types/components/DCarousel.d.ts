import { SplideProps } from '@splidejs/react-splide';
import { PropsWithChildren } from 'react';
declare type Props = SplideProps & PropsWithChildren<{
    className?: string;
}>;
export default function DCarousel({ children, className, options, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
