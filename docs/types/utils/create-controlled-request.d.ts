import { AxiosInstance, AxiosRequestConfig } from 'axios';
export type ControlledRequest<ResponseData, RequestData = any> = {
  perform: (config?: {
    data?: RequestData;
    params?: any;
  }) => Promise<ResponseData>;
  abort: () => void;
};
/**
 * @deprecated
 * @param client
 * @param config
 */
export default function createControlledRequest<T, R = T>(client: AxiosInstance, config: AxiosRequestConfig<T>): ControlledRequest<R, T>;
