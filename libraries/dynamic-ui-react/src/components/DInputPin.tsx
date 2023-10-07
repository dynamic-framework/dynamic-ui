import {
  ChangeEvent,
  FocusEvent,
  FormEvent,
  KeyboardEvent,
  MouseEvent,
  WheelEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';

import classNames from 'classnames';
import { PREFIX_BS } from '../interfaces/component-config';
import { FamilyIcon, LabelIcon } from '../interfaces/component-interface';
import { PinInputMode, PinInputType } from '../interfaces/DInputPinInterface';
import DIcon from './DIcon';

type Props = LabelIcon
& FamilyIcon
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

export default function DInputPin({
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
  onChange,
}: Props) {
  const [pattern, setPattern] = useState<string>('');

  useEffect(() => {
    setPattern(type === 'number' ? '[0-9]+' : '^[a-zA-Z0-9]+$');
  }, [type]);

  const nextInput = (event: ChangeEvent<HTMLInputElement>) => {
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
  };

  const prevInput = (e: KeyboardEvent) => {
    if (e.key === 'Backspace') {
      const { value } = e.currentTarget as HTMLInputElement;
      const input = e.target as HTMLInputElement;

      if (input.previousSibling && value === '') {
        (input.previousSibling as HTMLElement)?.focus();
      } else {
        input.blur();
        input.focus();
      }
    }
  };

  const focusInput = useCallback((e: FocusEvent) => {
    const input = e.target as HTMLInputElement;
    input.value = '';
  }, []);

  const wheelInput = useCallback((e: WheelEvent) => {
    const input = e.target as HTMLInputElement;
    input.blur();
  }, []);

  const formChange = useCallback((e: FormEvent) => {
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const values = Array.from(formData.values()).join('');
    onChange?.(values);
  }, [onChange]);

  const preventDefaultEvent = (e: MouseEvent | FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="d-input-pin">
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
