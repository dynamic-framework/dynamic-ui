import type {
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosResponseHeaders,
} from 'axios';

import Deferred from './Deferred';

export default function createMockedRequest<T, R = T>(
  config: AxiosRequestConfig<T>,
  data: R,
) {
  const deferred = new Deferred<void>();
  const timer = setTimeout(() => deferred.resolve(), 1000);
  return {
    abortController: {
      abort: () => {
        deferred.reject(new Error('AbortError'));
        clearTimeout(timer);
      },
    },
    perform: async (): Promise<AxiosResponse<R>> => {
      await deferred.promise;
      return {
        data: data as unknown as R,
        status: 200,
        statusText: 'ok',
        headers: config.headers as RawAxiosResponseHeaders,
        config,
      };
    },
  };
}
