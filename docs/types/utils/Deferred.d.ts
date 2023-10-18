export default class Deferred<T> {
  resolve: ((value: T) => void);
  reject: ((reason: any) => void);
  promise: Promise<T>;
  constructor();
}
