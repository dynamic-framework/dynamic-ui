import { AxiosInstance, AxiosRequestConfig } from 'axios';

export default function createControlledRequest<T>(
  client: AxiosInstance,
  config: AxiosRequestConfig<T>,
) {
  const abortController = new AbortController();
  return {
    perform: () => client.request<T>({
      ...config,
      signal: abortController.signal,
    }),
    abortController,
  };
}
