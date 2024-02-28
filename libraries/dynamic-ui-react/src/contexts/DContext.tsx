import {
  createContext, useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

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
  currency: CurrencyProps,
  icon: IconProps;
  iconMap: IconMapProps;
};

type Context = Props & {
  setContext: (value: Partial<Props>) => void;
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
    x: 'x',
    xLg: 'x-lg',
    chevronUp: 'chevron-up',
    chevronDown: 'chevron-down',
    chevronLeft: 'chevron-left',
    chevronRight: 'chevron-right',
    upload: 'cloud-upload',
    calendar: 'calendar',
    check: 'check',
    alert: {
      warning: 'exclamation-circle',
      danger: 'exclamation-triangle',
      success: 'check-circle',
      info: 'info-circle',
      dark: 'info-circle',
      light: 'info-circle',
      primary: 'info-circle',
      secondary: 'info-circle',
    },
    input: {
      invalid: 'exclamation-circle',
      valid: 'check',
      search: 'search',
      show: 'eye',
      hide: 'eye-slash',
      increase: 'plus-square',
      decrease: 'dash-square',
    },
  },
  setContext: () => {},
};

export const DContext = createContext<Partial<Context>>(defaultState);

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
  ] = useState<Partial<Props>>({
    language,
    currency,
    icon,
    iconMap,
  });

  const setContext = useCallback((newValue: Partial<Props>) => (
    setInternalContext((prevInternalContext) => ({
      ...prevInternalContext,
      ...newValue,
    }))
  ), []);

  const value = useMemo(() => ({
    ...internalContext,
    setContext,
  }), [internalContext, setContext]);

  return (
    <DContext.Provider value={value}>
      {children}
    </DContext.Provider>
  );
}

export function useDContext() {
  const context = useContext(DContext) as Context;

  if (context === undefined) {
    throw new Error('useDContext was used outside of DContextProvider');
  }

  return context;
}
