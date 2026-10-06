import { jsx, Fragment } from 'react/jsx-runtime';
import { ErrorState } from './components/ErrorState.js';
import { EmptyState } from './components/EmptyState.js';
import { LoadingState } from './components/LoadingState.js';

function render(renderable) {
    if (renderable === undefined)
        return null;
    return typeof renderable === 'function' ? renderable() : renderable;
}
function isEmpty(data) {
    if (Array.isArray(data))
        return data.length === 0;
    return data === null || data === undefined;
}
function DDataStateWrapper({ isLoading, isError, data, onRetry, messages, renderLoading, renderEmpty, renderError, children, }) {
    // 1. Loading
    if (isLoading) {
        if (renderLoading)
            return render(renderLoading);
        return jsx(LoadingState, { ariaLabel: messages === null || messages === void 0 ? void 0 : messages.loading });
    }
    // 2. Error
    if (isError) {
        if (renderError)
            return render(renderError);
        return (jsx(ErrorState, { onRetry: onRetry, message: messages === null || messages === void 0 ? void 0 : messages.error, retryMessage: messages === null || messages === void 0 ? void 0 : messages.retry }));
    }
    // 3. Empty: no items for a collection, null/undefined for a single resource
    if (isEmpty(data)) {
        if (renderEmpty)
            return render(renderEmpty);
        return (jsx(EmptyState, { message: messages === null || messages === void 0 ? void 0 : messages.empty }));
    }
    // 4. Success: the render prop gets the same shape it was given
    // Both overloads pair `data` with its own `children` signature, so the
    // value is handed back exactly as it was received.
    return jsx(Fragment, { children: children(data) });
}

export { DDataStateWrapper as default };
//# sourceMappingURL=DDataStateWrapper.js.map
