/**
 * @deprecated
 * @param config
 * @param data
 */
export default function createMockedRequest<T, R = T>(data: R): {
  abort: () => void;
  perform: () => Promise<R>;
};
