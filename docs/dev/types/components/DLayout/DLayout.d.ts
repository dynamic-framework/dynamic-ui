import type { PropsWithChildren } from 'react';
import DLayoutPane from './components/DLayoutPane';
import type { BaseProps } from '../interface';
/**
 * Define the spacing (gap) on a scale from 0 to 30.
 * @type {number}
 */
type Gap = number;
type Props = PropsWithChildren<BaseProps & {
    gap?: Gap;
    gapSm?: Gap;
    gapMd?: Gap;
    gapLg?: Gap;
    gapXl?: Gap;
    gapXxl?: Gap;
    columns?: number;
}>;
declare function DLayout({ className, style, children, gap, columns, gapSm, gapMd, gapLg, gapXl, gapXxl, dataAttributes, }: Props): import("react/jsx-runtime").JSX.Element;
declare const _default: typeof DLayout & {
    Pane: typeof DLayoutPane;
};
export default _default;
