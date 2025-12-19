import type { PropsWithChildren } from 'react';
import { PortalContextProps } from './DPortalContext';
import type { AlertThemeIconMap } from '../components/interface';
export type CurrencyProps = {
    symbol: string;
    precision: number;
    separator: string;
    decimal: string;
};
type IconProps = {
    familyClass: string;
    familyPrefix: string;
    materialStyle: boolean;
};
type IconMapProps = {
    x: string;
    xLg: string;
    chevronDown: string;
    chevronUp: string;
    chevronLeft: string;
    chevronRight: string;
    alert: AlertThemeIconMap;
    upload: string;
    calendar: string;
    check: string;
    input: {
        invalid: string;
        valid: string;
        search: string;
        show: string;
        hide: string;
        decrease: string;
        increase: string;
    };
};
export type BreakpointProps = {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
};
type Props<T extends Record<string, unknown>> = {
    language: string;
    currency: CurrencyProps;
    icon: IconProps;
    iconMap: IconMapProps;
    breakpoints: BreakpointProps;
} & PortalContextProps<T>;
type Context<T extends Record<string, unknown>> = Props<T> & {
    setContext: (value: Partial<Props<T>>) => void;
};
export declare const DContext: import("react").Context<Partial<Context<any>>>;
export declare function DContextProvider<T extends Record<string, unknown>>({ language, currency, icon, iconMap, portalName, availablePortals, children, }: PropsWithChildren<Partial<Props<T>>>): import("react/jsx-runtime").JSX.Element;
export declare function useDContext<T extends Record<string, unknown>>(): Context<T>;
export {};
