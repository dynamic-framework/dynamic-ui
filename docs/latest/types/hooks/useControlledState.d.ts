/**
 * Backs a value that the consumer may or may not drive, so a control works in
 * both modes without a copy of the state drifting away from the props.
 *
 * A control counts as controlled only when the consumer passes the value *and*
 * an `onChange` to push it back. The value on its own has always meant "start
 * here" in this library — `<DInputCheck type="radio" checked />` inside a radio
 * group, for one — so treating it as controlled would silently freeze those
 * controls, and React emits no warning to say why: the components always attach
 * their own `onChange` handler.
 *
 * @param value the value coming from props, or `undefined` when not passed.
 * @param isControlled whether the consumer can drive the value back.
 * @param initialValue what to start from when no value is passed.
 * @returns the value to render, and a setter to call on every user change.
 */
export default function useControlledState<T>(value: T | undefined, isControlled: boolean, initialValue: T): [T, (next: T) => void];
