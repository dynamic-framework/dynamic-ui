import type { BaseProps, ComponentColor } from '../interface';
import { ResponsiveProp } from '../../hooks/useResponsiveProp';
type Props = BaseProps & {
    icon: string;
    color?: ComponentColor;
    size?: string | ResponsiveProp;
    /**
     * Enables real-time breakpoint listeners for responsive size changes.
     * When set to true, the component will listen for size changes and update responsively.
     * Note: Enabling this feature may have performance implications, especially
     * in complex or frequently updated components.
     */
    useListenerSize?: boolean;
    hasCircle?: boolean;
    materialStyle?: boolean;
    familyClass?: string;
    familyPrefix?: string;
    strokeWidth?: number;
};
export default function DIconBase({ icon, color, style, className, size, useListenerSize, hasCircle, materialStyle, familyClass, familyPrefix, strokeWidth, dataAttributes, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
