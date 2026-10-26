import type { PropsWithChildren } from 'react';
type Props = PropsWithChildren<{
    defaultSelected: string;
}>;
/**
 * Owns the selected tab so the tab bar (`DTabs`) and its panels (`DTabs.Tab`)
 * can live anywhere inside it, e.g. the bar in a header and the panels in
 * another column.
 */
export default function DTabsProvider({ defaultSelected, children, }: Props): import("react").JSX.Element;
export {};
