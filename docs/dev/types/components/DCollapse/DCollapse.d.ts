import type { PropsWithChildren, ReactElement, ReactNode } from 'react';
import type { BaseProps, FamilyIconProps } from '../interface';
type Props = BaseProps & FamilyIconProps & PropsWithChildren<{
    id?: string;
    Component: ReactElement<unknown> | ReactNode;
    hasSeparator?: boolean;
    /**
     * Reactive prop for controlled and uncontrolled mode.
     *
     * @param true show the component closed (collapsed)
     * @param false show the component open (expanded)
     */
    defaultCollapsed?: boolean;
    onChange?: (value: boolean) => void;
    iconOpen?: string;
    iconClose?: string;
}>;
export default function DCollapse({ id, className, style, Component, hasSeparator, defaultCollapsed, onChange, children, iconOpen: iconOpenProp, iconClose: iconCloseProp, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, dataAttributes, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
