import type { PropsWithChildren } from 'react';
import DListGroupItem from './components/DListGroupItem';
import type { BaseProps } from '../interface';
type Props = BaseProps & PropsWithChildren<{
    as?: 'ul' | 'ol' | 'div';
    numbered?: boolean;
    flush?: boolean;
    horizontal?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    /**
     * Accessible name of the list, so screen readers can tell it apart from
     * other lists on the page (e.g. "Recent movements"). Ignored when
     * `ariaLabelledBy` is set.
     */
    ariaLabel?: string;
    /**
     * Id of a visible element that names the list, such as the heading above
     * it. When set, `aria-label` is not rendered.
     */
    ariaLabelledBy?: string;
}>;
declare function DListGroup({ as, numbered, flush, horizontal, ariaLabel, ariaLabelledBy, children, className, style, dataAttributes, }: Props): import("react").JSX.Element;
declare const _default: typeof DListGroup & {
    Item: typeof DListGroupItem;
};
export default _default;
