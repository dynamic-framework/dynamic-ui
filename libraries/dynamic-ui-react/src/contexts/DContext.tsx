import {
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

import type { PropsWithChildren } from 'react';

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
  xIcon: string;
  xLgIcon: string;
  chevronDownIcon: string;
};

type Props = {
  language: string;
  currency: CurrencyProps,
  icon: IconProps;
  iconMap: IconMapProps;
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
  icon: {
    familyClass: 'bi',
    familyPrefix: 'bi-',
    materialStyle: false,
  },
  iconMap: {
    xIcon: 'x',
    xLgIcon: 'x-lg',
    chevronDownIcon: 'chevron-down',
  },
  setContext: () => {},
};

export const DContext = createContext<Context>(defaultState);

export function DContextProvider(
  {
    language = defaultState.language,
    currency = defaultState.currency,
    icon = defaultState.icon,
    iconMap = defaultState.iconMap,
    children,
  }: PropsWithChildren<Partial<Props>>,
) {
  const [
    internalContext,
    setInternalContext,
  ] = useState<Props>({
    language,
    currency,
    icon,
    iconMap,
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
