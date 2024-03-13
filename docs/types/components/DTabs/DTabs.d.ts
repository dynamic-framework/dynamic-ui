import type { PropsWithChildren } from 'react';
import DTabContent from './components/DTabContent';
import type { BaseProps } from '../interface';
export type DTabOption = {
    label: string;
    tab: string;
    disabled?: boolean;
};
export type TabVariant = 'tabs' | 'pills' | 'underline';
type Props = BaseProps & PropsWithChildren<{
    onChange: (option: DTabOption) => void;
    options: Array<DTabOption>;
    defaultSelected: string;
    vertical?: boolean;
    variant?: TabVariant;
}>;
declare function DTabs({ children, defaultSelected, onChange, options, className, style, vertical, variant, }: Props): import("react/jsx-runtime").JSX.Element;
declare const _default: typeof DTabs & {
    Tab: typeof DTabContent;
};
export default _default;
