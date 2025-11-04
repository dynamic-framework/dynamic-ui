import type { PropsWithChildren } from 'react';
import DLayoutPane from './components/DLayoutPane';
import type { BaseProps } from '../interface';
type Props = PropsWithChildren<BaseProps & {
    gap?: string | number;
}>;
declare function DLayout({ className, style, children, gap, dataAttributes, }: Props): import("react/jsx-runtime").JSX.Element;
declare const _default: typeof DLayout & {
    Pane: typeof DLayoutPane;
};
export default _default;
