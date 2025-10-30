import type { PropsWithChildren, ReactNode, ReactElement } from 'react';
import type { BaseProps, FamilyIconProps } from '../interface';
type Props = BaseProps & FamilyIconProps & PropsWithChildren<{
    id?: string;
    Component: ReactElement<unknown> | ReactNode;
    hasSeparator?: boolean;
    defaultCollapsed?: boolean;
    onChange?: (value: boolean) => void;
    iconOpen?: string;
    iconClose?: string;
}>;
export default function DCollapse({ id, className, style, Component, hasSeparator, defaultCollapsed, onChange, children, iconOpen: iconOpenProp, iconClose: iconCloseProp, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, dataAttributes, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
