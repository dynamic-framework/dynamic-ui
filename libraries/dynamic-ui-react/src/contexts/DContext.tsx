import {
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

import type { PropsWithChildren } from 'react';

type Props = {
  language: string;
  currency: {
    symbol: string;
    precision: number;
    separator: string;
    decimal: string;
  }
};

type Context = Props & {
  setContext: (value: Props) => void;
};

const defaultState = {
  language: 'en',
  currency: {
    symbol: '$',
    precision: 2,
    separator: ',',
    decimal: '.',
  },
  setContext: () => {},
};

export const DContext = createContext<Context>(defaultState);

export function DContextProvider(
  {
    language = defaultState.language,
    currency = defaultState.currency,
    children,
  }: PropsWithChildren<Partial<Props>>,
) {
  const [
    internalContext,
    setInternalContext,
  ] = useState<Props>({
    language,
    currency,
  });

  const value = useMemo(() => ({
    ...internalContext,
    setContext: (newValue: Props) => setInternalContext(newValue),
  }), [internalContext]);

  return (
    <DContext.Provider value={value}>
      {children}
    </DContext.Provider>
  );
}

export function useDContext() {
  const context = useContext(DContext);

  if (context === undefined) {
    throw new Error('useDContext was used outside of DContextProvider');
  }

  return context;
}
