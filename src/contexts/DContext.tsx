/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';

import type { PropsWithChildren } from 'react';

import { DPortalContextProvider, PortalContextProps } from './DPortalContext';

import { PREFIX_BS } from '../components/config';
import type { AlertThemeIconMap } from '../components/interface';
import getCssVariable from '../utils/getCssVariable';

/**
 * Currency formatting configuration used by `DContextProvider`.
 */
export type CurrencyProps = {
  /** Currency symbol (e.g. `"$"`, `"€"`). */
  symbol: string;
  /** Number of decimal places (e.g. `2`). */
  precision: number;
  /** Thousands separator character (e.g. `","`). */
  separator: string;
  /** Decimal separator character (e.g. `"."`). */
  decimal: string;
};

/**
 * Icon font configuration used by `DContextProvider` to resolve icon classes.
 */
export type IconProps = {
  /** CSS class that identifies the icon font family (e.g. `"bi"`). */
  familyClass: string;
  /** CSS prefix for icon names within the family (e.g. `"bi-"`). */
  familyPrefix: string;
  /** When `true`, icons are rendered in Material Design outlined style. */
  materialStyle: boolean;
};

/**
 * Map of semantic icon names to their icon-font class suffixes.
 * Used by Dynamic UI components to look up icons consistently.
 */
export type IconMapProps = {
  /** Class suffix for the generic close/dismiss icon. */
  x: string;
  /** Class suffix for the large close/dismiss icon. */
  xLg: string;
  /** Class suffix for the chevron-down icon. */
  chevronDown: string;
  /** Class suffix for the chevron-up icon. */
  chevronUp: string;
  /** Class suffix for the chevron-left icon. */
  chevronLeft: string;
  /** Class suffix for the chevron-right icon. */
  chevronRight: string;
  /** Per-state alert icon map (one icon per `ComponentStateColor` value). */
  alert: AlertThemeIconMap;
  /** Class suffix for the upload/attach icon. */
  upload: string;
  /** Class suffix for the calendar/date-picker icon. */
  calendar: string;
  /** Class suffix for the checkmark icon. */
  check: string;
  /** Icon class suffixes for text input adornments. */
  input: {
    /** Search/magnifier icon. */
    search: string;
    /** Show password icon. */
    show: string;
    /** Hide password icon. */
    hide: string;
    /** Numeric decrease icon. */
    decrease: string;
    /** Numeric increase icon. */
    increase: string;
  };
};

/**
 * CSS breakpoint pixel values resolved from Bootstrap CSS variables at runtime.
 * These are populated automatically by `DContextProvider` on mount.
 */
export type BreakpointProps = {
  /** `--bs-breakpoint-xs` value (usually `"0px"`). */
  xs: string;
  /** `--bs-breakpoint-sm` value (usually `"576px"`). */
  sm: string;
  /** `--bs-breakpoint-md` value (usually `"768px"`). */
  md: string;
  /** `--bs-breakpoint-lg` value (usually `"992px"`). */
  lg: string;
  /** `--bs-breakpoint-xl` value (usually `"1200px"`). */
  xl: string;
  /** `--bs-breakpoint-xxl` value (usually `"1400px"`). */
  xxl: string;
};

type Props<T extends Record<string, unknown>> = {
  language: string;
  currency: CurrencyProps,
  icon: IconProps;
  iconMap: IconMapProps;
  breakpoints: BreakpointProps;
} & PortalContextProps<T>;

type Context<T extends Record<string, unknown>> = Props<T> & {
  setContext: (value: Partial<Props<T>>) => void;
};

const DEFAULT_STATE = {
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
    x: 'X',
    xLg: 'X',
    chevronUp: 'ChevronUp',
    chevronDown: 'ChevronDown',
    chevronLeft: 'ChevronLeft',
    chevronRight: 'ChevronRight',
    upload: 'Upload',
    calendar: 'Calendar',
    check: 'Check',
    alert: {
      warning: 'AlertCircle',
      danger: 'AlertTriangle',
      success: 'CheckCircle',
      info: 'Info',
    },
    input: {
      search: 'Search',
      show: 'Eye',
      hide: 'EyeOff',
      increase: 'Plus',
      decrease: 'Minus',
    },
  },
  breakpoints: {
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
    xxl: '',
  },
  setContext: () => {},
  portalName: 'd-portal',
};

export const DContext = createContext<Partial<Context<any>>>(DEFAULT_STATE);

/**
 * Root context provider for Dynamic UI. Wrap your application with this
 * component to configure icons, currency, language, and portal settings
 * for all descendant Dynamic UI components.
 *
 * @template T - Map of portal name → payload shape (e.g. `{ modal: { title: string } }`).
 *   Pass it once at the top level: `<DContextProvider<MyPortals> ...>`.
 */
export function DContextProvider<T extends Record<string, unknown>>(
  {
    language = DEFAULT_STATE.language,
    currency = DEFAULT_STATE.currency,
    icon = DEFAULT_STATE.icon,
    iconMap = DEFAULT_STATE.iconMap,
    portalName = DEFAULT_STATE.portalName,
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
    breakpoints: DEFAULT_STATE.breakpoints,
  });

  const setContext = useCallback((newValue: Partial<Props<T>>) => (
    setInternalContext((prevInternalContext) => ({
      ...prevInternalContext,
      ...newValue,
    }))
  ), []);

  useLayoutEffect(() => {
    setContext({
      breakpoints: {
        xs: getCssVariable(`--${PREFIX_BS}breakpoint-xs`),
        sm: getCssVariable(`--${PREFIX_BS}breakpoint-sm`),
        md: getCssVariable(`--${PREFIX_BS}breakpoint-md`),
        lg: getCssVariable(`--${PREFIX_BS}breakpoint-lg`),
        xl: getCssVariable(`--${PREFIX_BS}breakpoint-xl`),
        xxl: getCssVariable(`--${PREFIX_BS}breakpoint-xxl`),
      },
    });
  }, [setContext]);

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

/**
 * Returns the Dynamic UI context value set by `DContextProvider`.
 * Use it to read or update icon, currency, language, and portal configuration.
 *
 * @requires DContextProvider
 * @template T - Map of portal name → payload shape. Must match the type passed
 *   to the nearest `DContextProvider`.
 */
export function useDContext<T extends Record<string, unknown>>() {
  const context = useContext(DContext) as Context<T>;

  if (context === undefined) {
    throw new Error('useDContext was used outside of DContextProvider');
  }

  return context;
}
