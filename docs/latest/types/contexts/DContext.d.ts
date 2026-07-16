import { type PropsWithChildren } from 'react';
import { type PortalContextProps } from './DPortalContext';
import type { AlertThemeIconMap, IconComponent } from '../components/interface';
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
type Props = {
    language: string;
    currency: CurrencyProps;
    icon: IconProps;
    iconRegistry?: Record<string, IconComponent>;
    iconMap: IconMapProps;
    breakpoints: BreakpointProps;
};
type DContextProviderProps<T extends Record<string, unknown>> = Props & PortalContextProps<T>;
type Context = Props & {
    setContext: (value: Partial<Props>) => void;
};
export declare const DContext: import("react").Context<Context>;
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
export declare function DContextProvider<T extends Record<string, unknown>>({ language, currency, icon, iconRegistry, iconMap, portalName, availablePortals, children, }: PropsWithChildren<Partial<DContextProviderProps<T>>>): import("react").JSX.Element;
/**
 * Returns the Dynamic UI context value set by `DContextProvider`.
 * Falls back to the library's built-in defaults when no `DContextProvider`
 * is present in the tree — wrap your application with `DContextProvider`
 * to customise icons, currency, language, and portal settings.
 */
export declare function useDContext(): Context;
export {};
