import type { PropsWithChildren } from 'react';
import DLayoutPane from './components/DLayoutPane';
import type { BaseProps } from '../interface';
/**
 * Define the spacing (gap) on a scale from 0 to 30 (Bootstrap gap utilities).
 */
export type DLayoutGap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30;
type Props = PropsWithChildren<BaseProps & {
    gap?: DLayoutGap;
    gapSm?: DLayoutGap;
    gapMd?: DLayoutGap;
    gapLg?: DLayoutGap;
    gapXl?: DLayoutGap;
    gapXxl?: DLayoutGap;
    columns?: number;
}>;
declare function DLayout({ className, style, children, gap, columns, gapSm, gapMd, gapLg, gapXl, gapXxl, dataAttributes, }: Props): import("react").JSX.Element;
declare const _default: typeof DLayout & {
    Pane: typeof DLayoutPane;
};
export default _default;
