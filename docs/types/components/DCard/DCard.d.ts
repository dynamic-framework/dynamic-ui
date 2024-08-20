import type { PropsWithChildren } from 'react';
import DCardHeader from './components/DCardHeader';
import DCardBody from './components/DCardBody';
import DCardFooter from './components/DCardFooter';
import type { BaseProps } from '../interface';
type Props = PropsWithChildren<BaseProps>;
declare function DCard({ className, style, children, dataAttributes, }: Props): import("react/jsx-runtime").JSX.Element;
declare const _default: typeof DCard & {
    Header: typeof DCardHeader;
    Body: typeof DCardBody;
    Footer: typeof DCardFooter;
};
export default _default;
