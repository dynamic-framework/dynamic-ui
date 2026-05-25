import {
  useCallback,
  useEffect,
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
  iconStart = 'Search',
  placeholder = 'Search...',
  ...props
}: DInputSearchProps) {
  const isControlled = value !== undefined;
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
        onChange?.(pendingValue);
      } else {
        timeoutId = window.setTimeout(() => {
          onChange?.(pendingValue);
        }, debounceMs);
      }
    }

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [debounceMs, pendingValue, onChange]);

  return (
    <DInput
      {...props}
      value={internalValue}
      onChange={handleChange}
      iconStart={iconStart}
      placeholder={placeholder}
    />
  );
}
