import { useState, useEffect } from 'react';

/**
 * @internal
 * Creates a DOM `<div>` portal mount point and appends it to `document.body`.
 * This hook is used exclusively by `DPortalContextProvider` and is **not** part
 * of the public API. Use `useDPortalContext` instead.
 */
function usePortal(portalName) {
    const [hasPortal, setHasPortal] = useState(false);
    useEffect(() => {
        const previousPortal = document.querySelector(`#${portalName}`);
        if (previousPortal) {
            previousPortal.remove();
        }
        const portal = document.createElement('div');
        portal.id = portalName;
        portal.className = 'd-portal';
        document.body.appendChild(portal);
        setHasPortal(true);
    }, [portalName]);
    return { created: hasPortal };
}

export { usePortal as default };
//# sourceMappingURL=usePortal.js.map
