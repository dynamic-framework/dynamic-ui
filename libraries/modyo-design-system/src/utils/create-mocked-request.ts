import Deferred from './Deferred';

/**
 * @deprecated
 * @param config
 * @param data
 */
export default function createMockedRequest<T, R = T>(
  data: R,
) {
  const deferred = new Deferred<void>();
  const timer = setTimeout(() => deferred.resolve(), 1000);
  return {
    abort: () => {
      deferred.reject(new Error('AbortError'));
      clearTimeout(timer);
    },
    perform: async (): Promise<R> => {
      await deferred.promise;
      return data as unknown as R;
    },
  };
}
