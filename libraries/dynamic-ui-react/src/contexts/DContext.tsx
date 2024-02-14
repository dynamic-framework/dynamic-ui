import {
  createContext,
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
  alert: AlertTypeIconMap;
  upload: string;
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
    x: 'x',
    xLg: 'x-lg',
    chevronDown: 'chevron-down',
    chevronUp: 'chevron-up',
    upload: 'cloud-upload',
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
