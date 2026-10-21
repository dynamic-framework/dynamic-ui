import { jsx, Fragment } from 'react/jsx-runtime';

/**
 * Portal stack without animations. Default renderer until an overlay component
 * registers the animated `DPortalStack`.
 */
function DPortalStackStatic({ stack }) {
    return (jsx(Fragment, { children: stack.flatMap(({ Component, name, payload, }) => [
            jsx("div", { className: "backdrop show" }, `${name}-backdrop`),
            jsx(Component, { name: name, payload: payload }, name),
        ]) }));
}

export { DPortalStackStatic as default };
//# sourceMappingURL=DPortalStackStatic.js.map
