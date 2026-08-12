import { type Transition } from 'framer-motion';
import { type PropsWithChildren } from 'react';
import { ResponsiveProp } from '../../hooks/useResponsiveProp';
import DOffcanvasHeader from './components/DOffcanvasHeader';
import DOffcanvasBody from './components/DOffcanvasBody';
import DOffcanvasFooter from './components/DOffcanvasFooter';
import type { BaseProps, OffcanvasPositionToggleFrom } from '../interface';
type OffcanvasResponsivePlacement = Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl', OffcanvasPositionToggleFrom>>;
type Props = BaseProps & PropsWithChildren<{
    name: string;
    staticBackdrop?: boolean;
    scrollable?: boolean;
    openFrom?: OffcanvasPositionToggleFrom | OffcanvasResponsivePlacement;
    /**
     * Overrides the offcanvas size on the `start`/`end` placements (defaults to `400px`).
     * Accepts any CSS length (e.g. `'320px'`, `'50vw'`, `'100%'`) or a `ResponsiveProp` object.
     */
    width?: string | ResponsiveProp;
    /**
     * Overrides the offcanvas size on the `top`/`bottom` placements (defaults to `100%`).
     * Accepts any CSS length (e.g. `'50vh'`, `'320px'`) or a `ResponsiveProp` object.
     */
    height?: string | ResponsiveProp;
    transition?: Transition;
}>;
declare function DOffcanvas({ name, className, style, staticBackdrop, scrollable, openFrom, width, height, transition, children, dataAttributes, }: Props): import("react").JSX.Element;
declare const _default: typeof DOffcanvas & {
    Header: typeof DOffcanvasHeader;
    Body: typeof DOffcanvasBody;
    Footer: typeof DOffcanvasFooter;
};
export default _default;
