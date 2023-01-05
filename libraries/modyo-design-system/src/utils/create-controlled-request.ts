import {
  AxiosInstance,
  AxiosRequestConfig,
} from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ControlledRequest<ResponseData, RequestData = any> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,max-len
  perform: (config?: { data?: RequestData; params?: any }) => Promise<ResponseData>;
  abort: () => void;
};

/**
 * @deprecated
 * @param client
 * @param config
 */
export default function createControlledRequest<T, R = T>(
  client: AxiosInstance,
  config: AxiosRequestConfig<T>,
): ControlledRequest<R, T> {
  const abortController = new AbortController();
  return {
    perform: async () => {
      const { data } = await client.request<R>({
        ...config,
        signal: abortController.signal,
      });
      return data;
    },
    abort: () => abortController.abort(),
  };
}
