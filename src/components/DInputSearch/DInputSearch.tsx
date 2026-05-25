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
  iconStart = 'Search',
  placeholder = 'Search...',
  ...props
}: DInputSearchProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<string>(
    normalizeValue(isControlled ? value : defaultValue),
  );
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isControlled) return;
    setInternalValue(normalizeValue(value));
  }, [isControlled, value]);

  const handleChange = useCallback((nextValue: string) => {
    if (!isControlled) {
      setInternalValue(nextValue);
    }
    onImmediateChange?.(nextValue);
  }, [isControlled, onImmediateChange]);

  useEffect(() => {
    let timeoutId: number | undefined;

    if (onChange) {
      if (isFirstRender.current) {
        isFirstRender.current = false;
      } else if (debounceMs <= 0) {
        onChange(internalValue);
      } else {
        timeoutId = window.setTimeout(() => {
          onChange(internalValue);
        }, debounceMs);
      }
    }

    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [debounceMs, internalValue, onChange]);

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
