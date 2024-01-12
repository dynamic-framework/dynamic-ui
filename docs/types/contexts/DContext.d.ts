import type { PropsWithChildren } from 'react';
type Props = {
    language: string;
    currency: {
        symbol: string;
        precision: number;
        separator: string;
        decimal: string;
    };
};
type Context = Props & {
    setContext: (value: Props) => void;
};
export declare const DContext: import("react").Context<Context>;
export declare function DContextProvider({ language, currency, children, }: PropsWithChildren<Partial<Props>>): import("react/jsx-runtime").JSX.Element;
export declare function useDContext(): Context;
export {};
