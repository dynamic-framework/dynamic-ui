import { PropsWithChildren } from 'react';
declare type Props = PropsWithChildren<{
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
    iconFamilyClass?: string;
    iconFamilyPrefix?: string;
}>;
export default function MCollapseIconText({ children, icon, iconSize, iconTheme, title, iconFamilyClass, iconFamilyPrefix, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
