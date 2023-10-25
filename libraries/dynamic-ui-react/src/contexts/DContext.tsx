import {
  createContext,
  useContext,
  useMemo,
} from 'react';

import type { PropsWithChildren } from 'react';

export type Props = {
  language?: string;
  currency?: {
    symbol: string;
    precision: number;
    separator: string;
    decimal: string;
  }
};

const defaultState = {
  language: 'en',
  currency: {
    symbol: '$',
    precision: 2,
    separator: ',',
    decimal: '.',
  },
};

export const DContext = createContext<Props>(defaultState);

export function DContextProvider(
  {
    language = defaultState.language,
    currency = defaultState.currency,
    children,
  }: PropsWithChildren<Props>,
) {
  const value = useMemo(() => ({
    language,
    currency,
  }), [language, currency]);

  return (
    <DContext.Provider value={value}>
      {children}
    </DContext.Provider>
  );
}

export function useDContext(): Required<Props> {
  const context = useContext(DContext);

  if (context === undefined) {
    throw new Error('useDContext was used outside of DContextProvider');
  }

  return context as Required<Props>;
}
