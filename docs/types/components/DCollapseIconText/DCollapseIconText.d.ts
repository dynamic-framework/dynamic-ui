import type { PropsWithChildren } from 'react';
import type { BaseProps, FamilyIconProps } from '../interface';
type Props = BaseProps & FamilyIconProps & PropsWithChildren<{
    /**
     * Icon name
     */
    icon: string;
    /**
     * Icon theme
     */
    iconTheme?: string;
    /**
     * Icon size
     */
    iconSize?: string;
    /**
     * Title
     */
    title: string;
}>;
export default function DCollapseIconText({ children, icon, iconSize, iconTheme, title, iconFamilyClass, iconFamilyPrefix, className, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
