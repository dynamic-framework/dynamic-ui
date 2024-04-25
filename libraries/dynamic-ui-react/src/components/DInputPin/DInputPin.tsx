/* eslint-disable no-return-assign */
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import classNames from 'classnames';

import type {
  ChangeEvent,
  ClipboardEvent,
  FocusEvent,
  FormEvent,
  KeyboardEvent,
  MouseEvent,
  WheelEvent,
} from 'react';

import DIcon from '../DIcon';
import { PREFIX_BS } from '../config';

import type {
  BaseProps,
  FamilyIconProps,
  LabelIconProps,
  PinInputMode,
  PinInputType,
  StateIcons,
} from '../interface';
import { useDContext } from '../../contexts';

type Props =
& BaseProps
& LabelIconProps
& FamilyIconProps
& StateIcons
& {
  id: string;
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
    id,
    label = '',
    labelIcon,
    labelIconFamilyClass,
    labelIconFamilyPrefix,
    placeholder,
    type = 'text',
    disabled = false,
    loading = false,
    secret = false,
    iconFamilyClass,
    iconFamilyPrefix,
    characters = 4,
    invalidIcon: invalidIconProp,
    validIcon: validIconProp,
    innerInputMode = 'numeric',
    hint,
    invalid = false,
    valid = false,
    className,
    style,
    onChange,
  }: Props,
) {
  const [pattern, setPattern] = useState<string>('');
  const isInputNum = innerInputMode === 'numeric' || innerInputMode === 'tel';

  const [activeInput, setActiveInput] = useState(Array.from<string | number>({ length: characters }).fill(''));

  useEffect(() => {
    setPattern(type === 'number' ? '[0-9]+' : '^[a-zA-Z0-9]+$');
  }, [type]);

  const nextInput = useCallback((
    { target }: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const input = target;
    const regex = new RegExp(pattern);

    if (!regex.test(input.value)) {
      input.value = '';
    }

    if (input.value !== '') {
      setActiveInput((prev) => prev.with(index, input.value));
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
      setActiveInput((prev) => prev.with(index, ''));
      if (currentTarget.previousSibling && value === '') {
        (currentTarget.previousSibling as HTMLElement)?.focus();
      } else {
        currentTarget.blur();
        currentTarget.focus();
      }
    }
  }, []);

  const focusInput = useCallback((
    { currentTarget }: FocusEvent<HTMLInputElement>,
    index: number,
  ) => {
    setActiveInput((prev) => prev.with(index, ''));
    // eslint-disable-next-line no-param-reassign
    currentTarget.value = '';
  }, []);

  const wheelInput = useCallback((event: WheelEvent<HTMLInputElement>) => {
    event.currentTarget.blur();
  }, []);

  const formChange = useCallback(() => {
    onChange?.(activeInput.join(''));
  }, [activeInput, onChange]);

  const handlePaste = ({ clipboardData }: ClipboardEvent<HTMLFormElement>) => {
    // validate numbers in the input and extract to paste
    const pastedData = clipboardData
      .getData('text/plain')
      .slice(0, characters)
      .split('');

    if (isInputNum && pastedData.some((value) => Number.isNaN(Number(value)))) { /* empty */ }
    setActiveInput(pastedData);
  };

  const preventDefaultEvent = useCallback((event: MouseEvent | FormEvent) => {
    event.preventDefault();
  }, []);

  const { iconMap: { input } } = useDContext();
  const invalidIcon = useMemo(
    () => invalidIconProp || input.invalid,
    [input.invalid, invalidIconProp],
  );
  const validIcon = useMemo(
    () => validIconProp || input.valid,
    [input.valid, validIconProp],
  );

  return (
    <div
      className={classNames('d-input-pin', className)}
      style={style}
    >
      {label && (
        <label htmlFor="pinIndex0">
          {label}
          {labelIcon && (
            <DIcon
              icon={labelIcon}
              size={`var(--${PREFIX_BS}input-label-font-size)`}
              familyClass={labelIconFamilyClass}
              familyPrefix={labelIconFamilyPrefix}
            />
          )}
        </label>
      )}
      <form
        id={id}
        onInput={formChange}
        onSubmit={preventDefaultEvent}
        onPaste={(clipboard) => handlePaste(clipboard)}
      >
        {activeInput.map((value, index) => (
          <input
            className={classNames({
              'form-control': true,
              'is-invalid': invalid,
              'is-valid': valid,
            })}
            value={value}
            type={secret ? 'password' : type}
            aria-describedby={`${id}State`}
            inputMode={innerInputMode}
            id={`pinIndex${index}`}
            name={`pin-${index}`}
            maxLength={1}
            onChange={(event) => nextInput(event, index)}
            onKeyDown={(event) => prevInput(event, index)}
            onFocus={(event) => focusInput(event, index)}
            onWheel={wheelInput}
            onClick={preventDefaultEvent}
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
        {(invalid || valid) && !loading && (
          <span
            className="input-group-text"
            id={`${id}State`}
          >
            <DIcon
              className="input-group-validation-icon"
              icon={invalid ? invalidIcon : validIcon}
              familyClass={iconFamilyClass}
              familyPrefix={iconFamilyPrefix}
            />
          </span>
        )}
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
      </form>
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
