import type {
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosResponseHeaders,
} from 'axios';

import Deferred from './Deferred';

export default function createMockedRequest<T>(
  config: AxiosRequestConfig<T>,
  data: T,
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
    perform: async (): Promise<AxiosResponse<T>> => {
      await deferred.promise;
      return {
        data,
        status: 200,
        statusText: 'ok',
        headers: config.headers as RawAxiosResponseHeaders,
        config,
      };
    },
  };
}
