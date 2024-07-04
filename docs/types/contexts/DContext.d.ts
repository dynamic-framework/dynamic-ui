import type { PropsWithChildren } from 'react';
import { PortalContextProps } from './DPortalContext';
import type { AlertTypeIconMap } from '../components/interface';
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
    alert: AlertTypeIconMap;
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
type Props<T extends Record<string, unknown>> = {
    language: string;
    currency: CurrencyProps;
    icon: IconProps;
    iconMap: IconMapProps;
} & PortalContextProps<T>;
type Context<T extends Record<string, unknown>> = Props<T> & {
    setContext: (value: Partial<Props<T>>) => void;
};
export declare const DContext: import("react").Context<Partial<Context<any>>>;
export declare function DContextProvider<T extends Record<string, unknown>>({ language, currency, icon, iconMap, portalName, availablePortals, children, }: PropsWithChildren<Partial<Props<T>>>): import("react/jsx-runtime").JSX.Element;
export declare function useDContext<T extends Record<string, unknown>>(): Context<T>;
export {};
