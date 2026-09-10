import { jsx, Fragment } from 'react/jsx-runtime';
import { ErrorState } from './components/ErrorState.js';
import { EmptyState } from './components/EmptyState.js';
import { LoadingState } from './components/LoadingState.js';

function render(renderable) {
    if (renderable === undefined)
        return null;
    return typeof renderable === 'function' ? renderable() : renderable;
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
    // 3. Empty
    if (!(data === null || data === void 0 ? void 0 : data.length)) {
        if (renderEmpty)
            return render(renderEmpty);
        return (jsx(EmptyState, { message: messages === null || messages === void 0 ? void 0 : messages.empty }));
    }
    // 4. Success
    return jsx(Fragment, { children: children(data) });
}

export { DDataStateWrapper as default };
//# sourceMappingURL=DDataStateWrapper.js.map
