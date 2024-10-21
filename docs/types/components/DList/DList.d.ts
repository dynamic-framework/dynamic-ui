import type { PropsWithChildren } from 'react';
import DListItem from './components/DListItem';
import type { BaseProps, BreakpointSize } from '../interface';
type Props = BaseProps & PropsWithChildren<{
    flush?: boolean;
    numbered?: boolean;
    horizontal?: boolean;
    horizontalBreakpoint?: BreakpointSize;
}>;
/**
 * @deprecated Please use DListGroup instead
 */
declare function DList({ children, className, style, flush, numbered, horizontal, horizontalBreakpoint, dataAttributes, }: Props): import("react/jsx-runtime").JSX.Element;
declare const _default: typeof DList & {
    Item: typeof DListItem;
};
export default _default;
