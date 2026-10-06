import { useSyncExternalStore } from 'react';
import { subscribeToMediaQuery, checkMediaQuery } from '../utils/mediaQuery.js';

function useMediaQuery(mediaQuery, useListener = false) {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    const noop = (_) => () => { };
    return useSyncExternalStore(useListener ? (cb) => subscribeToMediaQuery(mediaQuery, cb) : noop, () => (mediaQuery ? checkMediaQuery(mediaQuery) : true), () => false);
}

export { useMediaQuery as default };
//# sourceMappingURL=useMediaQuery.js.map
