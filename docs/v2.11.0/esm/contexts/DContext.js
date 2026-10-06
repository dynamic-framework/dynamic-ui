import { jsx } from 'react/jsx-runtime';
import { createContext, useContext, useState, useCallback, useLayoutEffect, useMemo } from 'react';
import { DPortalContextProvider } from './DPortalContext.js';
import { createConfirmModalStore, ConfirmModalStoreContext } from '../components/DConfirmModal/confirmModalStore.js';
import { DEFAULT_ICON_FAMILY_PREFIX, DEFAULT_ICON_FAMILY_CLASS, PREFIX_BS } from '../components/config.js';
import getCssVariable from '../utils/getCssVariable.js';

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
    setContext: () => { },
};
const DContext = createContext(DEFAULT_STATE);
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
function DContextProvider({ language = DEFAULT_STATE.language, currency = DEFAULT_STATE.currency, icon = DEFAULT_STATE.icon, iconRegistry = DEFAULT_STATE.iconRegistry, iconMap = DEFAULT_STATE.iconMap, portalName = 'd-portal', availablePortals, children, }) {
    const [internalContext, setInternalContext,] = useState({
        language,
        currency,
        icon,
        iconRegistry,
        iconMap,
        breakpoints: DEFAULT_STATE.breakpoints,
    });
    const setContext = useCallback((newValue) => (setInternalContext((prevInternalContext) => (Object.assign(Object.assign({}, prevInternalContext), newValue)))), []);
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
    const value = useMemo(() => (Object.assign(Object.assign({}, internalContext), { setContext })), [internalContext, setContext]);
    const confirmStore = useMemo(() => createConfirmModalStore(), []);
    return (jsx(ConfirmModalStoreContext.Provider, { value: confirmStore, children: jsx(DContext.Provider, { value: value, children: jsx(DPortalContextProvider, { portalName: portalName, availablePortals: availablePortals, children: children }) }) }));
}
/**
 * Returns the Dynamic UI context value set by `DContextProvider`.
 * Falls back to the library's built-in defaults when no `DContextProvider`
 * is present in the tree — wrap your application with `DContextProvider`
 * to customise icons, currency, language, and portal settings.
 */
function useDContext() {
    return useContext(DContext);
}

export { DContext, DContextProvider, useDContext };
//# sourceMappingURL=DContext.js.map
