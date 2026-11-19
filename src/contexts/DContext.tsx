import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';

import {
  DPortalContextProvider,
  type PortalContextProps,
} from './DPortalContext';
import {
  createConfirmModalStore,
  ConfirmModalStoreContext,
} from '../components/DConfirmModal/confirmModalStore';

import {
  DEFAULT_ICON_FAMILY_CLASS,
  DEFAULT_ICON_FAMILY_PREFIX,
  PREFIX_BS,
} from '../components/config';
import type { AlertThemeIconMap, IconComponent } from '../components/interface';
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
 * Icon-font fallback used by `DIcon`. It only applies to icon names that are
 * neither registered in `iconRegistry` nor exported by lucide-react: those
 * render as `<i class="{familyClass} {familyPrefix}{name}">`. The default
 * family is Bootstrap Icons (`"bi"` / `"bi-"`); Lucide icons do not use it.
 */
export type IconProps = {
  /** CSS class of the icon-font family for fallback icons (default `"bi"`). */
  familyClass: string;
  /** Prefix prepended to the icon name to build its font class (default `"bi-"`). */
  familyPrefix: string;
  /**
   * When `true`, string icons skip lucide-react and render as the text of the
   * icon-font element (Material Symbols ligatures). Default `false`.
   */
  materialStyle: boolean;
};

/**
 * Icon names that Dynamic UI components use for their built-in icons (close,
 * chevrons, alerts, inputs…). Each value is an icon name that `DIcon`
 * resolves in order: `iconRegistry`, then a PascalCase lucide-react export,
 * then the icon-font fallback configured in `icon`. The defaults are
 * lucide-react names (e.g. `"X"`, `"ChevronDown"`, `"AlertTriangle"`).
 */
export type IconMapProps = {
  /** Generic close/dismiss icon (default `"X"`). */
  x: string;
  /** Large close/dismiss icon (default `"X"`). */
  xLg: string;
  /** Chevron-down icon (default `"ChevronDown"`). */
  chevronDown: string;
  /** Chevron-up icon (default `"ChevronUp"`). */
  chevronUp: string;
  /** Chevron-left icon (default `"ChevronLeft"`). */
  chevronLeft: string;
  /** Chevron-right icon (default `"ChevronRight"`). */
  chevronRight: string;
  /** Per-state alert icon names (one per `ComponentStateColor` value). */
  alert: AlertThemeIconMap;
  /** Upload/attach icon (default `"Upload"`). */
  upload: string;
  /** Calendar/date-picker icon (default `"Calendar"`). */
  calendar: string;
  /** Checkmark icon (default `"Check"`). */
  check: string;
  /** Icon names for text input adornments. */
  input: {
    /** Search/magnifier icon (default `"Search"`). */
    search: string;
    /** Show password icon (default `"Eye"`). */
    show: string;
    /** Hide password icon (default `"EyeOff"`). */
    hide: string;
    /** Numeric decrease icon (default `"Minus"`). */
    decrease: string;
    /** Numeric increase icon (default `"Plus"`). */
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

type ConfigProps = {
  language: string;
  currency: CurrencyProps,
  icon: IconProps;
  iconRegistry?: Record<string, IconComponent>;
  iconMap: IconMapProps;
};

type Props = ConfigProps & {
  breakpoints: BreakpointProps;
};

// `breakpoints` sigue en el valor del contexto, que la rellena desde el CSS;
// como prop del provider se ignora y solo se conserva para no romper a quien
// la pase.
type DContextProviderProps<T extends Record<string, unknown>> = ConfigProps & {
  /**
   * @deprecated No effect since 2.11.0: breakpoints are read from the
   * --bs-breakpoint-* custom properties
   */
  breakpoints: BreakpointProps;
} & PortalContextProps<T>;

type Context = Props & {
  setContext: (value: Partial<Props>) => void;
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
    familyClass: DEFAULT_ICON_FAMILY_CLASS,
    familyPrefix: DEFAULT_ICON_FAMILY_PREFIX,
    materialStyle: false,
  },
  iconRegistry: undefined,
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
};

export const DContext = createContext<Context>(DEFAULT_STATE);

/**
 * Root context provider for Dynamic UI. Wrap your application with this
 * component to configure icons, currency, language, and portal settings
 * for all descendant Dynamic UI components.
 *
 * To enable confirmation modals you must also mount `DConfirmModalContainer`
 * somewhere inside this provider (typically right before the closing tag of
 * your root layout), similar to how `DToastContainer` works:
 *
 * ```tsx
 * // Default: portalName="d-portal"
 * <DContextProvider>
 *   <App />
 *   <DConfirmModalContainer nodeId="d-portal" />
 * </DContextProvider>
 * ```
 *
 * If you customize `portalName`, match it in `DConfirmModalContainer.nodeId`:
 *
 * ```tsx
 * // Custom portalName
 * <DContextProvider portalName="my-custom-portal">
 *   <App />
 *   <DConfirmModalContainer nodeId="my-custom-portal" />
 * </DContextProvider>
 * ```
 *
 * @template T - Map of portal name → payload shape (e.g. `{ modal: { title: string } }`).
 *   Pass it once at the top level: `<DContextProvider<MyPortals> ...>`.
 */
export function DContextProvider<T extends Record<string, unknown>>(
  {
    language = DEFAULT_STATE.language,
    currency = DEFAULT_STATE.currency,
    icon = DEFAULT_STATE.icon,
    iconRegistry = DEFAULT_STATE.iconRegistry,
    iconMap = DEFAULT_STATE.iconMap,
    portalName = 'd-portal',
    availablePortals,
    children,
  }: PropsWithChildren<Partial<DContextProviderProps<T>>>,
) {
  const [
    internalContext,
    setInternalContext,
  ] = useState<Props>({
    language,
    currency,
    icon,
    iconRegistry,
    iconMap,
    breakpoints: DEFAULT_STATE.breakpoints,
  });

  const setContext = useCallback((newValue: Partial<Props>) => (
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

  const value = useMemo<Context>(() => ({
    ...internalContext,
    setContext,
  }), [internalContext, setContext]);

  const confirmStore = useMemo(
    () => createConfirmModalStore(),
    [],
  );

  return (
    <ConfirmModalStoreContext.Provider value={confirmStore}>
      <DContext.Provider value={value}>
        <DPortalContextProvider
          portalName={portalName}
          availablePortals={availablePortals}
        >
          {children}
        </DPortalContextProvider>
      </DContext.Provider>
    </ConfirmModalStoreContext.Provider>
  );
}

/**
 * Returns the Dynamic UI context value set by `DContextProvider`.
 * Falls back to the library's built-in defaults when no `DContextProvider`
 * is present in the tree — wrap your application with `DContextProvider`
 * to customise icons, currency, language, and portal settings.
 */
export function useDContext(): Context {
  return useContext(DContext);
}
