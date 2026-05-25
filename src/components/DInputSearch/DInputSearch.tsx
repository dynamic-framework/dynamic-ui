import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentProps,
} from 'react';
import DInput from '../DInput';

type DInputProps = ComponentProps<typeof DInput>;

export type DInputSearchProps = Omit<DInputProps, 'onChange' | 'defaultValue'> & {
  debounceMs?: number;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onImmediateChange?: (value: string) => void;
};

function normalizeValue(value: string | undefined): string {
  return value ?? '';
}

export default function DInputSearch({
  debounceMs = 300,
  onChange,
  onImmediateChange,
  value,
  defaultValue,
  placeholder = 'Search...',
  ...props
}: DInputSearchProps) {
  const isControlled = value !== undefined;
  const onChangeRef = useRef(onChange);
  useEffect(() => { onChangeRef.current = onChange; });

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
      type="search"
      {...props}
      value={internalValue}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}
