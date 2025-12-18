/* eslint-disable no-return-assign */
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
} from 'react';
import classNames from 'classnames';

import type {
  ClipboardEvent,
  FormEvent,
  KeyboardEvent,
  WheelEvent,
} from 'react';

import type {
  BaseProps,
  FamilyIconProps,
  PinInputMode,
  PinInputType,
} from '../interface';

type Props =
& BaseProps
& FamilyIconProps
& {
  id?: string;
  label?: string;
  placeholder?: string;
  type?: PinInputType;
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  secret?: boolean;
  characters?: number;
  innerInputMode?: PinInputMode;
  hint?: string;
  invalid?: boolean;
  valid?: boolean;
  onChange?: (value: string) => void;
};

export default function DInputPin(
  {
    id: idProp,
    label = '',
    placeholder,
    type = 'text',
    disabled = false,
    loading = false,
    secret = false,
    characters = 4,
    innerInputMode = 'text',
    hint,
    invalid = false,
    valid = false,
    className,
    style,
    dataAttributes,
    onChange,
  }: Props,
) {
  const innerId = useId();
  const id = useMemo(() => idProp || innerId, [idProp, innerId]);
  const [pattern, setPattern] = useState<string>('');
  const [activeInput, setActiveInput] = useState(Array.from<string>({ length: characters }).fill(''));
  const isInputNum = useMemo(() => type === 'number' || type === 'tel', [type]);

  useEffect(() => {
    setPattern(type === 'number' ? '[0-9]+' : '^[a-zA-Z0-9]+$');
  }, [type]);

  const handleOTPChange = useCallback((otp: Array<string>) => {
    const otpValue = otp.join('');
    onChange?.(otpValue);
  }, [onChange]);

  useEffect(() => {
    handleOTPChange(activeInput);
  }, [activeInput, handleOTPChange]);

  const handlePaste = useCallback((event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData('text/plain');
    const cleanData = isInputNum ? pastedData.replace(/[^0-9]/gmi, '') : pastedData;
    const newInput = Array.from<string>({ length: characters }).map((_, index) => cleanData[index] || '');
    setActiveInput(newInput);
    event.currentTarget.blur();
  }, [characters, isInputNum]);

  const nextInput = useCallback((
    event: FormEvent<HTMLInputElement>,
    index: number,
  ) => {
    const regex = new RegExp(pattern);
    const input = event.currentTarget;
    if (!regex.test(input.value)) {
      input.value = '';
    }

    if (input.value !== '') {
      setActiveInput((prev) => {
        const newValue = [...prev];
        newValue[index] = input.value;
        return newValue;
      });
      if (input.nextSibling) {
        (input.nextSibling as HTMLElement)?.focus();
      } else {
        input.blur();
      }
    }
  }, [pattern]);

  const prevInput = useCallback((
    { key, currentTarget }: KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (key === 'Backspace') {
      const { value } = currentTarget;
      setActiveInput((prev) => {
        const newVal = [...prev];
        newVal[index] = '';
        return newVal;
      });
      if (currentTarget.previousSibling && value === '') {
        (currentTarget.previousSibling as HTMLElement)?.focus();
      } else {
        currentTarget.blur();
        currentTarget.focus();
      }
    }
  }, []);

  const focusInput = useCallback((
    index: number,
  ) => {
    setActiveInput((prev) => {
      const newVal = [...prev];
      newVal[index] = '';
      return newVal;
    });
  }, []);

  const wheelInput = useCallback((event: WheelEvent<HTMLInputElement>) => {
    event.currentTarget.blur();
  }, []);

  return (
    <div
      className={classNames('d-input-pin', className)}
      style={style}
      {...dataAttributes}
    >
      {label && (
        <label htmlFor="pinIndex0">
          {label}
        </label>
      )}
      <div className="d-input-pin-group" id={id}>
        {Array.from({ length: characters }).map((_, index) => (
          <input
            className={classNames({
              'form-control': true,
              'is-invalid': invalid,
              'is-valid': valid,
            })}
            value={activeInput[index]}
            type={secret ? 'password' : type}
            aria-describedby={`${id}State`}
            inputMode={innerInputMode}
            id={`pinIndex${index}`}
            name={`pin-${index}`}
            maxLength={1}
            onInput={(event) => nextInput(event, index)}
            onKeyDown={(event) => prevInput(event, index)}
            onFocus={() => focusInput(index)}
            onWheel={wheelInput}
            onClick={(event) => event.preventDefault()}
            onPaste={(event) => handlePaste(event)}
            autoComplete="off"
            placeholder={placeholder}
            disabled={disabled || loading}
            required
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            {...type === 'number' && (
              { min: 0, max: 9 }
            )}
          />
        ))}
        {loading && (
          <div className="input-group-text">
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            >
              <span className="visually-hidden">Loading...</span>
            </span>
          </div>
        )}
      </div>
      {hint && (
        <div
          className="form-text"
          id={`${id}Hint`}
        >
          {hint}
        </div>
      )}
    </div>
  );
}
