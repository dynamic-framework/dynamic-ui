import {
  CSSProperties,
  ChangeEvent,
  FocusEvent,
  ForwardedRef,
  MouseEvent,
  ReactNode,
  WheelEvent,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';
import { PREFIX_BS } from '../interfaces/component-config';
import {
  EndIcon,
  FamilyIcon,
  LabelIcon,
  StartIcon,
} from '../interfaces/component-interface';
import DIcon from './DIcon';

type Props = FamilyIcon
& LabelIcon
& StartIcon
& EndIcon
& {
  id: string;
  className?: string;
  style?: CSSProperties;
  name?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string | number;
  innerInputMode?: 'text' | 'search' | 'email' | 'tel' | 'url' | 'none' | 'numeric' | 'decimal' | undefined;
  pattern?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isLoading?: boolean;
  hint?: string;
  isInvalid?: boolean;
  isValid?: boolean;
  inputStart?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent) => void;
  onWheel?: (e: WheelEvent) => void;
  onIconStartClick?: (e: MouseEvent) => void;
  onIconEndClick?: (e: MouseEvent) => void;
};
type Ref = {
  blur: () => void;
};

function DInput(
  {
    id,
    style,
    className,
    name,
    label = '',
    labelIcon,
    labelIconFamilyClass,
    labelIconFamilyPrefix,
    placeholder = '',
    type = 'text',
    value = '',
    innerInputMode,
    pattern,
    isDisabled = false,
    isReadOnly = false,
    isLoading = false,
    iconFamilyClass,
    iconFamilyPrefix,
    iconStart,
    iconStartFamilyClass,
    iconStartFamilyPrefix,
    iconEnd,
    iconEndFamilyClass,
    iconEndFamilyPrefix,
    hint,
    isInvalid = false,
    isValid = false,
    inputStart,
    onChange,
    onBlur,
    onFocus,
    onWheel,
    onIconStartClick,
    onIconEndClick,
  }: Props,
  ref: ForwardedRef<Ref>,
) {
  const [innerValue, setInnerValue] = useState(value);
  const innerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInnerValue(value);
  }, [value]);

  useImperativeHandle(ref, () => ({
    blur() {
      innerRef.current?.blur();
    },
  }), []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInnerValue(event.target.value);
    onChange?.(event);
  };

  return (
    <div
      className={classNames({
        'd-input': true,
        className: !!className,
      })}
      style={style}
    >
      {label && (
        <label htmlFor={id}>
          {label}
          {labelIcon && (
            <DIcon
              className="d-input-icon"
              icon={labelIcon}
              size={`var(--${PREFIX_BS}input-label-font-size)`}
              familyClass={labelIconFamilyClass}
              familyPrefix={labelIconFamilyPrefix}
            />
          )}
        </label>
      )}
      <div className="d-input-control">
        <div
          className={classNames({
            'input-group': true,
            'has-validation': isInvalid,
            disabled: isDisabled || isLoading,
          })}
        >
          {!!inputStart && (
            <div className="input-group-text">
              {inputStart}
            </div>
          )}
          {iconStart && (
            <button
              type="button"
              className="input-group-text"
              id={`${id}Start`}
              onClick={onIconStartClick}
              disabled={isDisabled || isLoading}
            >
              {iconStart && (
                <DIcon
                  className="d-input-icon"
                  icon={iconStart}
                  familyClass={iconStartFamilyClass}
                  familyPrefix={iconStartFamilyPrefix}
                />
              )}
            </button>
          )}
          <input
            ref={innerRef}
            id={id}
            name={name}
            type={type}
            className={classNames('form-control', {
              'is-invalid': isInvalid,
              'is-valid': isValid,
            })}
            placeholder={placeholder}
            aria-label={label}
            disabled={isDisabled || isLoading}
            readOnly={isReadOnly}
            value={innerValue}
            aria-describedby={`${id}Add ${id}Hint`}
            pattern={pattern}
            onChange={(event) => handleInputChange(event)}
            onBlur={onBlur}
            onFocus={onFocus}
            onWheel={onWheel}
            {...innerInputMode && { inputMode: innerInputMode }}
          />
          {((isInvalid || isValid) && !iconEnd && !isLoading) && (
            <span
              className="input-group-text"
              id={`${id}State`}
            >
              <DIcon
                className="d-input-validation-icon"
                icon={isInvalid ? 'exclamation-circle' : 'check'}
                familyClass={iconFamilyClass}
                familyPrefix={iconFamilyPrefix}
              />
            </span>
          )}
          {(iconEnd && !isLoading) && (
            <button
              type="button"
              className="input-group-text"
              id={`${id}End`}
              onClick={onIconEndClick}
              disabled={isDisabled || isLoading}
            >
              {iconEnd && (
                <DIcon
                  className="d-input-icon"
                  icon={iconEnd}
                  familyClass={iconEndFamilyClass}
                  familyPrefix={iconEndFamilyPrefix}
                />
              )}
            </button>
          )}
          {isLoading && (
            <div className="input-group-text d-input-icon">
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
    </div>
  );
}

const ForwardedDInput = forwardRef(DInput);
ForwardedDInput.displayName = 'DInput';
export default ForwardedDInput;
