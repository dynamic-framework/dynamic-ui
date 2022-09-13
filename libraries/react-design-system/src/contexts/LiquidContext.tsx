import {
  createContext,
  useContext,
  useMemo,
} from 'react';
import type { PropsWithChildren } from 'react';
import type { Currency } from 'dinero.js';

// import { liquidParser } from '@modyolabs/design-system';

interface LiquidContextInterface {
  language: string;
  currency: Currency;
  currencyWithDecimals: boolean;
}

export const LiquidContext = createContext<LiquidContextInterface>({
  language: 'en-US',
  currency: 'USD' as Currency,
  currencyWithDecimals: true,
});

export function LiquidContextProvider(
  {
    children,
  }: PropsWithChildren,
) {
  /*
  // FIXME
  const value = useMemo(() => ({
    language: liquidParser.parse('{{site.language}}'),
    currency: liquidParser.parse('{{site.currency}}') as Currency,
    currencyWithDecimals: liquidParser.parse('{{site.currencyWithDecimals}}') as unknown as boolean,
  }), []);
  */

  const value = useMemo(() => ({
    language: 'en-US',
    currency: 'USD' as Currency,
    currencyWithDecimals: true,
  }), []);

  return (
    <LiquidContext.Provider value={value}>
      {children}
    </LiquidContext.Provider>
  );
}

export function useLiquidContext() {
  const context = useContext(LiquidContext);

  if (context === undefined) {
    throw new Error('useLiquidContext was used outside of LiquidContextProvider');
  }

  return context;
}

export default LiquidContext;
