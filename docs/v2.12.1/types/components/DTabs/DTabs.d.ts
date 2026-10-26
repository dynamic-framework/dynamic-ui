import type { PropsWithChildren } from 'react';
import DTabContent from './components/DTabContent';
import DTabsProvider from './components/DTabsProvider';
import type { BaseProps } from '../interface';
export type DTabOption = {
    label: string | React.ReactNode;
    tab: string;
    disabled?: boolean;
};
export type TabVariant = 'tabs' | 'pills' | 'underline' | 'toggle-button-group';
type Props = BaseProps & PropsWithChildren<{
    classNameTab?: string;
    /**
     * Class for the panels container. It is only rendered when `DTabs` has
     * children, so a tab bar used as pure navigation leaves no empty node.
     */
    classNameContent?: string;
    onChange?: (option: DTabOption) => void;
    options: Array<DTabOption>;
    /**
     * Ignored inside `DTabs.Provider`, which owns the selection. Without it, the
     * first enabled tab is selected when omitted.
     */
    defaultSelected?: string;
    vertical?: boolean;
    variant?: TabVariant;
    ariaLabel?: string;
    ariaLabelledBy?: string;
}>;
declare function DTabs({ children, defaultSelected, onChange, options, className, classNameTab, classNameContent, style, vertical, variant, dataAttributes, ariaLabel, ariaLabelledBy, }: Props): import("react").JSX.Element;
declare const _default: typeof DTabs & {
    Tab: typeof DTabContent;
    Provider: typeof DTabsProvider;
};
export default _default;
