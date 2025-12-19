import type { PropsWithChildren } from 'react';
import type { BaseProps } from '../../interface';
type Props = PropsWithChildren<BaseProps & {
    cols?: string | number;
    colsXs?: string | number;
    colsSm?: string | number;
    colsMd?: string | number;
    colsLg?: string | number;
    colsXl?: string | number;
    colsXxl?: string | number;
}>;
export default function DLayoutPane({ className, style, children, cols, colsXs, colsSm, colsMd, colsLg, colsXl, colsXxl, dataAttributes, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
