import type { PropsWithChildren } from 'react';
import DOffcanvasHeader from './components/DOffcanvasHeader';
import DOffcanvasBody from './components/DOffcanvasBody';
import DOffcanvasFooter from './components/DOffcanvasFooter';
import type { BaseProps, OffcanvasPositionToggleFrom } from '../interface';
type Props = BaseProps & PropsWithChildren<{
    name: string;
    staticBackdrop?: boolean;
    scrollable?: boolean;
    openFrom?: OffcanvasPositionToggleFrom;
}>;
declare function DOffcanvas({ name, className, style, staticBackdrop, scrollable, openFrom, children, }: Props): import("react/jsx-runtime").JSX.Element;
declare const _default: typeof DOffcanvas & {
    Header: typeof DOffcanvasHeader;
    Body: typeof DOffcanvasBody;
    Footer: typeof DOffcanvasFooter;
};
export default _default;
