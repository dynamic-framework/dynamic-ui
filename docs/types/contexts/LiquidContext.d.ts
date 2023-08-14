import type { PropsWithChildren } from 'react';
interface LiquidContextInterface {
    language: string;
    currency: {
        symbol: string;
        precision: number;
        separator: string;
        decimal: string;
    };
}
export declare const LiquidContext: import("react").Context<LiquidContextInterface>;
export declare function LiquidContextProvider({ children, }: PropsWithChildren): import("react/jsx-runtime").JSX.Element;
export declare function useLiquidContext(): LiquidContextInterface;
export default LiquidContext;
