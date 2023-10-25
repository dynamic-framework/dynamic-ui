import {
  useCallback,
  useEffect,
  useState,
} from 'react';
import classNames from 'classnames';

import type {
  ChangeEvent,
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
} from '../interface';

type Props =
& BaseProps
& LabelIconProps
& FamilyIconProps
& {
  id: string;
  label?: string;
  placeholder?: string;
  type?: PinInputType;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isLoading?: boolean;
  isSecret?: boolean;
  characters?: number;
  innerInputMode?: PinInputMode;
  hint?: string;
  isInvalid?: boolean;
  isValid?: boolean;
  onChange?: (value: string) => void;
};

export default function DInputPin(
  {
    id,
    label = '',
    labelIcon,
    labelIconFamilyClass,
    labelIconFamilyPrefix,
    placeholder = '•',
    type = 'text',
    isDisabled = false,
    isLoading = false,
    isSecret = false,
    iconFamilyClass,
    iconFamilyPrefix,
    characters = 4,
    innerInputMode = 'text',
    hint,
    isInvalid = false,
    isValid = false,
    className,
    style,
    onChange,
  }: Props,
) {
  const [pattern, setPattern] = useState<string>('');

  useEffect(() => {
    setPattern(type === 'number' ? '[0-9]+' : '^[a-zA-Z0-9]+$');
  }, [type]);

  const nextInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const regex = new RegExp(pattern);

    if (!regex.test(input.value)) {
      input.value = '';
    }

    if (input.value !== '') {
      if (input.nextSibling) {
        (input.nextSibling as HTMLElement)?.focus();
      } else {
        input.blur();
      }
    }
  }, [pattern]);

  const prevInput = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace') {
      const { value } = event.currentTarget;

      if (event.currentTarget.previousSibling && value === '') {
        (event.currentTarget.previousSibling as HTMLElement)?.focus();
      } else {
        event.currentTarget.blur();
        event.currentTarget.focus();
      }
    }
  }, []);

  const focusInput = useCallback((event: FocusEvent<HTMLInputElement>) => {
    // eslint-disable-next-line no-param-reassign
    event.currentTarget.value = '';
  }, []);

  const wheelInput = useCallback((event: WheelEvent<HTMLInputElement>) => {
    event.currentTarget.blur();
  }, []);

  const formChange = useCallback((event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const values = Array.from(formData.values()).join('');
    onChange?.(values);
  }, [onChange]);

  const preventDefaultEvent = useCallback((event: MouseEvent | FormEvent) => {
    event.preventDefault();
  }, []);

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
              className="d-input-pin-icon"
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
        className="d-input-pin-controls"
        onInput={formChange}
        onSubmit={preventDefaultEvent}
      >
        {Array.from({ length: characters }).map((_, index) => (
          <input
            className={classNames({
              'form-control': true,
              'is-invalid': isInvalid,
              'is-valid': isValid,
            })}
            type={isSecret ? 'password' : type}
            aria-describedby={`${id}State`}
            inputMode={innerInputMode}
            id={`pinIndex${index}`}
            name={`pin-${index}`}
            maxLength={1}
            onChange={nextInput}
            onKeyDown={prevInput}
            onFocus={focusInput}
            onWheel={wheelInput}
            onClick={preventDefaultEvent}
            autoComplete="off"
            placeholder={placeholder}
            disabled={isDisabled || isLoading}
            required
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            {...type === 'number' && (
              { min: 0, max: 9 }
            )}
          />
        ))}
        {(isInvalid || isValid) && !isLoading && (
          <span
            className="input-group-text"
            id={`${id}State`}
          >
            <DIcon
              className="d-input-pin-validation-icon"
              icon={isInvalid ? 'exclamation-circle' : 'check'}
              familyClass={iconFamilyClass}
              familyPrefix={iconFamilyPrefix}
            />
          </span>
        )}
        {isLoading && (
          <div className="input-group-text d-input-pin-icon">
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
