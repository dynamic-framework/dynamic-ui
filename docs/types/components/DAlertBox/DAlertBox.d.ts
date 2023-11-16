import type { PropsWithChildren } from 'react';
import type { BaseProps, AlertBoxTheme, FamilyIconProps } from '../interface';
type Props = BaseProps & FamilyIconProps & PropsWithChildren<{
    id?: string;
    theme?: AlertBoxTheme;
    icon?: string;
}>;
export default function DAlertBox({ theme, icon, iconFamilyClass, iconFamilyPrefix, children, id, className, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
