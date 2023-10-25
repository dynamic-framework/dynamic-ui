import type { PropsWithChildren } from 'react';
export type Props = {
    language?: string;
    currency?: {
        symbol: string;
        precision: number;
        separator: string;
        decimal: string;
    };
};
export declare const DContext: import("react").Context<Required<Props>>;
export declare function DContextProvider({ language, currency, children, }: PropsWithChildren<Props>): import("react/jsx-runtime").JSX.Element;
export declare function useDContext(): Required<Props>;
