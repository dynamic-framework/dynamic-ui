import Deferred from './Deferred';
/**
 * @deprecated
 * @param config
 * @param data
 */
export default function createMockedRequest(data) {
  const deferred = new Deferred();
  const timer = setTimeout(() => deferred.resolve(), 1000);
  return {
    abort: () => {
      deferred.reject(new Error('AbortError'));
      clearTimeout(timer);
    },
    perform: async () => {
      await deferred.promise;
      return data;
    },
  };
}
