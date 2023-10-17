import {
  createContext,
  useContext,
  useMemo,
} from 'react';

import type { PropsWithChildren } from 'react';

import { liquidParser } from '../utils';

interface LiquidContextInterface {
  language: string;
  currency: {
    symbol: string;
    precision: number;
    separator: string;
    decimal: string;
  }
}

export const LiquidContext = createContext<LiquidContextInterface>({
  language: 'en',
  currency: {
    symbol: '$',
    precision: 2,
    separator: ',',
    decimal: '.',
  },
});

export function LiquidContextProvider(
  {
    children,
  }: PropsWithChildren,
) {
  const value = useMemo(() => ({
    language: liquidParser.parse('{{site.language}}'),
    currency: {
      symbol: liquidParser.parse('{{vars.currency-symbol}}'),
      precision: parseInt(liquidParser.parse('{{vars.currency-precision}}'), 10),
      separator: liquidParser.parse('{{vars.currency-separator}}'),
      decimal: liquidParser.parse('{{vars.currency-decimal}}'),
    },
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
