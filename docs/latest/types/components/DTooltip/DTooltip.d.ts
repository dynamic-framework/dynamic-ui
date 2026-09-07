import type { ReactNode } from 'react';
import type { Placement } from '@floating-ui/react';
import type { BaseProps, ComponentSize } from '../interface';
export type Props = BaseProps & {
    /** CSS class applied to the wrapper element that surrounds `Component` (the trigger). */
    childrenClassName?: string;
    /**
     * Distance in pixels between the trigger and the floating tooltip.
     * Defaults to arrow height + gap.
     */
    offSet?: number;
    /** Virtual padding, in pixels, used to keep the tooltip within the viewport boundaries. */
    padding?: number;
    /** When true, the tooltip opens when the pointer hovers over the trigger element. */
    withHover?: boolean;
    /**
     * When true, the tooltip opens when the trigger element receives keyboard focus
     * (recommended for accessibility).
     */
    withFocus?: boolean;
    /** When true, the tooltip toggles open/closed when the trigger element is clicked. */
    withClick?: boolean;
    /** Controls the initial open state of the tooltip. */
    open?: boolean;
    /** Size of the tooltip content. Omit for the default size. */
    size?: ComponentSize;
    /**
     * Preferred position of the tooltip relative to the trigger element.
     * Flips automatically if there isn't enough space.
     */
    placement?: Placement;
    /**
     * Element that triggers the tooltip. It is rendered inside a wrapper `<div>`
     * that holds the Floating UI reference and the interaction handlers, so the
     * trigger area is that wrapper rather than this node itself. Style it with
     * `childrenClassName`.
     */
    Component: ReactNode;
    /**
     * Floating content rendered inside the tooltip body. Keep it short and
     * non-critical: the tooltip is only visible while it is open.
     */
    children?: ReactNode;
};
/**
 * Tooltip is an abstraction component that wraps any element (`Component`) and displays
 * floating contextual content (`children`) positioned relative to it using Floating UI.
 * Use it to add short, non-critical hints or descriptions triggered by hover, focus, or
 * click, without altering the surrounding layout.
 */
export default function DTooltip({ className, childrenClassName, style, offSet, padding, withFocus, withClick, withHover, open, placement, size, Component, children, }: Props): import("react").JSX.Element;
