import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type ForwardedRef,
  type RefObject,
} from 'react';
import DInput from '../DInput';
import useProvidedRefOrCreate from '../../hooks/useProvidedRefOrCreate';

type DInputProps = ComponentProps<typeof DInput>;

export type DInputSearchProps = Omit<DInputProps, 'onChange' | 'defaultValue' | 'type'> & {
  debounceMs?: number;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onImmediateChange?: (value: string) => void;
};

function normalizeValue(value: string | undefined): string {
  return value ?? '';
}

function DInputSearch({
  debounceMs = 300,
  onChange,
  onImmediateChange,
  value,
  defaultValue,
  placeholder = 'Search...',
  ...props
}: DInputSearchProps, ref: ForwardedRef<HTMLInputElement>) {
  const inputRef = useProvidedRefOrCreate(ref as RefObject<HTMLInputElement | null>);
  const isControlled = value !== undefined;
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const [internalValue, setInternalValue] = useState<string>(
    normalizeValue(isControlled ? value : defaultValue),
  );
  // null = no keystroke has occurred yet (skip debounce on mount)
  const [pendingValue, setPendingValue] = useState<string | null>(null);

  useEffect(() => {
    if (!isControlled) return;
    setInternalValue(normalizeValue(value));
  }, [isControlled, value]);

  const handleChange = useCallback((nextValue: string) => {
    if (!isControlled) {
      setInternalValue(nextValue);
    }
    setPendingValue(nextValue);
    onImmediateChange?.(nextValue);
  }, [isControlled, onImmediateChange]);

  useEffect(() => {
    let timeoutId: number | undefined;

    if (pendingValue !== null) {
      if (debounceMs <= 0) {
        onChangeRef.current?.(pendingValue);
        setPendingValue(null);
      } else {
        timeoutId = window.setTimeout(() => {
          onChangeRef.current?.(pendingValue);
          setPendingValue(null);
        }, debounceMs);
      }
    }

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [debounceMs, pendingValue]);

  return (
    <DInput
      ref={inputRef}
      {...props}
      type="search"
      value={internalValue}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}

const ForwardedDInputSearch = forwardRef<HTMLInputElement, DInputSearchProps>(DInputSearch);
ForwardedDInputSearch.displayName = 'DInputSearch';
export default ForwardedDInputSearch;
