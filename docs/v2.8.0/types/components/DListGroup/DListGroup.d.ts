import type { PropsWithChildren } from 'react';
import DListGroupItem from './components/DListGroupItem';
import type { BaseProps } from '../interface';
type Props = BaseProps & PropsWithChildren<{
    as?: 'ul' | 'ol' | 'div';
    numbered?: boolean;
    flush?: boolean;
    horizontal?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}>;
declare function DListGroup({ as, numbered, flush, horizontal, children, className, style, dataAttributes, }: Props): import("react").JSX.Element;
declare const _default: typeof DListGroup & {
    Item: typeof DListGroupItem;
};
export default _default;
