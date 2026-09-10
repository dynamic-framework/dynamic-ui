import { jsx } from 'react/jsx-runtime';
import { useCallback } from 'react';
import { getErrorMessage, ErrorBoundary } from 'react-error-boundary';
export { getErrorMessage, useErrorBoundary } from 'react-error-boundary';
import DefaultErrorBoundary from './components/DefaultErrorBoundary.js';

function DErrorBoundary({ name, fallback, resetKeys, onReset, onError, children, }) {
    const handleError = useCallback((error, info) => {
        // eslint-disable-next-line no-console
        console.error(`[DErrorBoundary${name ? `:${name}` : ''}]`, getErrorMessage(error), info);
        onError === null || onError === void 0 ? void 0 : onError(error, info);
    }, [name, onError]);
    const FallbackRender = useCallback((props) => {
        if (fallback)
            return fallback(props);
        return (jsx(DefaultErrorBoundary, { resetErrorBoundary: props.resetErrorBoundary }));
    }, [fallback]);
    return (jsx(ErrorBoundary, { resetKeys: resetKeys, onReset: onReset, onError: handleError, fallbackRender: FallbackRender, children: children }));
}

export { DErrorBoundary as default };
//# sourceMappingURL=DErrorBoundary.js.map
