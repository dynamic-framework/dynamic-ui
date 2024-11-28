import { useSyncExternalStore } from 'react';

import { subscribeToMediaQuery, checkMediaQuery } from '../utils/mediaQuery';

export default function useMediaQuery(mediaQuery: string, useListener: boolean = false) {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const noop = (_: () => void) => () => {};

  return useSyncExternalStore(
    useListener ? (cb) => subscribeToMediaQuery(mediaQuery, cb) : noop,
    () => (mediaQuery ? checkMediaQuery(mediaQuery) : true),
    () => false,
  );
}
