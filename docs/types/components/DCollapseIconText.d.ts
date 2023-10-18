import type { PropsWithChildren } from 'react';
import type { FamilyIcon } from './interface';
type Props = FamilyIcon & PropsWithChildren<{
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
export default function DCollapseIconText({ children, icon, iconSize, iconTheme, title, iconFamilyClass, iconFamilyPrefix, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
