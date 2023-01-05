export default class Deferred<T> {
  resolve!: ((value: T) => void);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reject!: ((reason: any) => void);

  promise: Promise<T>;

  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}
