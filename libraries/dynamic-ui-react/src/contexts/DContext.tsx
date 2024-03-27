/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import type { PropsWithChildren } from 'react';

import { DPortalContextProvider, PortalContextProps } from './DPortalContext';

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

type Props<T extends Record<string, unknown>> = {
  language: string;
  currency: CurrencyProps,
  icon: IconProps;
  iconMap: IconMapProps;
} & PortalContextProps<T>;

type Context<T extends Record<string, unknown>> = Props<T> & {
  setContext: (value: Partial<Props<T>>) => void;
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
  portalName: 'd-portal',
};

export const DContext = createContext<Partial<Context<any>>>(defaultState);

export function DContextProvider<T extends Record<string, unknown>>(
  {
    language = defaultState.language,
    currency = defaultState.currency,
    icon = defaultState.icon,
    iconMap = defaultState.iconMap,
    portalName = defaultState.portalName,
    availablePortals,
    children,
  }: PropsWithChildren<Partial<Props<T>>>,
) {
  const [
    internalContext,
    setInternalContext,
  ] = useState<Partial<Props<T>>>({
    language,
    currency,
    icon,
    iconMap,
  });

  const setContext = useCallback((newValue: Partial<Props<T>>) => (
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
      <DPortalContextProvider
        portalName={portalName}
        availablePortals={availablePortals}
      >
        {children}
      </DPortalContextProvider>
    </DContext.Provider>
  );
}

export function useDContext<T extends Record<string, unknown>>() {
  const context = useContext(DContext) as Context<T>;

  if (context === undefined) {
    throw new Error('useDContext was used outside of DContextProvider');
  }

  return context;
}
