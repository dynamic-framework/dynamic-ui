import type { PropsWithChildren } from 'react';
import type { AlertTypeIconMap } from '../components/interface';
type CurrencyProps = {
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
type Props = {
    language: string;
    currency: CurrencyProps;
    icon: IconProps;
    iconMap: IconMapProps;
};
type Context = Props & {
    setContext: (value: Partial<Props>) => void;
};
export declare const DContext: import("react").Context<Partial<Context>>;
export declare function DContextProvider({ language, currency, icon, iconMap, children, }: PropsWithChildren<Partial<Props>>): import("react/jsx-runtime").JSX.Element;
export declare function useDContext(): Context;
export {};
