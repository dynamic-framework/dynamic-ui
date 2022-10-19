import { AxiosInstance, AxiosRequestConfig } from 'axios';

export default function createControlledRequest<T, R = T>(
  client: AxiosInstance,
  config: AxiosRequestConfig<T>,
) {
  const abortController = new AbortController();
  return {
    perform: () => client.request<R>({
      ...config,
      signal: abortController.signal,
    }),
    abortController,
  };
}
