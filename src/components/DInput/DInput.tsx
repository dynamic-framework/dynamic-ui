import {
  forwardRef,
  useCallback,
  useMemo,
  useId,
} from 'react';
import classNames from 'classnames';

import type {
  RefObject,
  ForwardedRef,
  ReactNode,
  ComponentPropsWithoutRef,
  ChangeEvent,
} from 'react';

import DIcon from '../DIcon';
import useProvidedRefOrCreate from '../../hooks/useProvidedRefOrCreate';

import type {
  BaseProps,
  ComponentSize,
  EndIconProps,
  FamilyIconProps,
  StartIconProps,
} from '../interface';
import type { Merge } from '../../types';

type NonHTMLInputElementProps =
& BaseProps
& FamilyIconProps
& StartIconProps
& EndIconProps
& {
  value?: string;
  label?: string;
  loading?: boolean;
  hint?: string;
  size?: ComponentSize;
  invalid?: boolean;
  valid?: boolean;
  floatingLabel?: boolean;
  inputStart?: ReactNode;
  inputEnd?: ReactNode;
  readonly?: boolean;
  onChange?: (value: string) => void;
  onIconStartClick?: (value?: string) => void;
  onIconEndClick?: (value?: string) => void;
};

type Props = Merge<
Omit<ComponentPropsWithoutRef<'input'>, 'onChange' | 'value'>,
NonHTMLInputElementProps
>;

function DInput(
  {
    id: idProp,
    style,
    className,
    label = '',
    disabled = false,
    loading = false,
    iconFamilyClass,
    iconFamilyPrefix,
    iconMaterialStyle,
    iconStart,
    iconStartDisabled,
    iconStartFamilyClass,
    iconStartFamilyPrefix,
    iconStartAriaLabel,
    iconStartTabIndex,
    iconStartMaterialStyle,
    iconEnd,
    iconEndDisabled,
    iconEndFamilyClass,
    iconEndFamilyPrefix,
    iconEndAriaLabel,
    iconEndTabIndex,
    iconEndMaterialStyle,
    hint,
    size,
    invalid = false,
    valid = false,
    floatingLabel = false,
    inputStart,
    inputEnd,
    value,
    placeholder = '',
    dataAttributes,
    readonly,
    onChange,
    onIconStartClick,
    onIconEndClick,
    ...inputProps
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const inputRef = useProvidedRefOrCreate(ref as RefObject<HTMLInputElement | null>);
  const innerId = useId();
  const id = useMemo(() => idProp || innerId, [idProp, innerId]);

  const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.currentTarget.value);
  }, [onChange]);

  const handleOnIconStartClick = useCallback(() => {
    onIconStartClick?.(value);
  }, [onIconStartClick, value]);

  const handleOnIconEndClick = useCallback(() => {
    onIconEndClick?.(value);
  }, [onIconEndClick, value]);

  const ariaDescribedby = useMemo(() => (
    [
      !!inputStart && `${id}InputStart`,
      !!iconStart && `${id}Start`,
      (invalid || valid) && !iconEnd && !loading && `${id}State`,
      (iconEnd && !loading) && `${id}End`,
      loading && `${id}Loading`,
      !!inputEnd && `${id}InputEnd`,
      !!hint && `${id}Hint`,
    ]
      .filter(Boolean)
      .join(' ')
  ), [
    id,
    inputStart,
    iconStart,
    invalid,
    valid,
    iconEnd,
    loading,
    inputEnd,
    hint,
  ]);

  const inputComponent = useMemo(() => (
    <input
      ref={inputRef}
      id={id}
      className="df-input"
      {...invalid && { 'data-invalid': '' }}
      {...valid && { 'data-valid': '' }}
      disabled={disabled || loading}
      readOnly={readonly}
      value={value}
      onChange={handleOnChange}
      {...(floatingLabel || placeholder) && { placeholder: floatingLabel ? '' : placeholder }}
      {...ariaDescribedby && { 'aria-describedby': ariaDescribedby }}
      {...inputProps}
    />
  ), [
    ariaDescribedby,
    disabled,
    handleOnChange,
    id,
    inputProps,
    inputRef,
    invalid,
    loading,
    placeholder,
    floatingLabel,
    valid,
    value,
    readonly,
  ]);

  const labelComponent = useMemo(() => (
    <label className="df-label" htmlFor={id}>
      {label}
    </label>
  ), [
    id,
    label,
  ]);

  const dynamicComponent = useMemo(() => {
    if (floatingLabel) {
      return (
        <div className="df-input-floating">
          {inputComponent}
          {labelComponent}
        </div>
      );
    }
    return inputComponent;
  }, [floatingLabel, inputComponent, labelComponent]);

  return (
    <div
      className={classNames('df-field', className)}
      style={style}
      {...dataAttributes}
    >
      {label && !floatingLabel && labelComponent}
      <div
        className="df-input-group"
        {...size && { 'data-size': size }}
      >
        {!!inputStart && (
          <div className="df-input-group-addon" id={`${id}InputStart`}>
            {inputStart}
          </div>
        )}
        {iconStart && (
          onIconStartClick ? (
            <button
              type="button"
              className="df-input-group-addon"
              id={`${id}Start`}
              onClick={handleOnIconStartClick}
              disabled={disabled || loading || iconStartDisabled}
              aria-label={iconStartAriaLabel || (typeof iconStart === 'string' ? iconStart : 'start icon')}
              tabIndex={iconStartTabIndex}
            >
              <DIcon
                icon={iconStart}
                familyClass={iconStartFamilyClass}
                familyPrefix={iconStartFamilyPrefix}
                materialStyle={iconStartMaterialStyle}
              />
            </button>
          ) : (
            <div
              className="df-input-group-addon"
              id={`${id}Start`}
              aria-hidden="true"
              tabIndex={-1}
            >
              <DIcon
                icon={iconStart}
                familyClass={iconStartFamilyClass}
                familyPrefix={iconStartFamilyPrefix}
                materialStyle={iconStartMaterialStyle}
              />
            </div>
          )
        )}
        {dynamicComponent}
        {(iconEnd && !loading) && (
          onIconEndClick ? (
            <button
              type="button"
              className="df-input-group-addon"
              id={`${id}End`}
              onClick={handleOnIconEndClick}
              disabled={disabled || loading || iconEndDisabled}
              aria-label={iconEndAriaLabel || (typeof iconEnd === 'string' ? iconEnd : 'end icon')}
              tabIndex={iconEndTabIndex}
            >
              <DIcon
                icon={iconEnd}
                familyClass={iconEndFamilyClass}
                familyPrefix={iconEndFamilyPrefix}
                materialStyle={iconEndMaterialStyle}
              />
            </button>
          ) : (
            <div
              className="df-input-group-addon"
              id={`${id}End`}
              aria-hidden="true"
              tabIndex={-1}
            >
              <DIcon
                icon={iconEnd}
                familyClass={iconEndFamilyClass}
                familyPrefix={iconEndFamilyPrefix}
                materialStyle={iconEndMaterialStyle}
              />
            </div>
          )
        )}
        {loading && (
          <div className="df-input-group-addon" id={`${id}Loading`}>
            <span
              className="df-spinner"
              role="status"
              aria-hidden="true"
              data-testid="loading-spinner"
            >
              <span className="df-sr-only">Loading...</span>
            </span>
          </div>
        )}
        {!!inputEnd && (
          <div className="df-input-group-addon" id={`${id}InputEnd`}>
            {inputEnd}
          </div>
        )}
      </div>
      {hint && (
        <div
          className="df-help"
          id={`${id}Hint`}
        >
          {hint}
        </div>
      )}
    </div>
  );
}

const ForwardedDInput = forwardRef<HTMLInputElement, Props>(DInput);
ForwardedDInput.displayName = 'DInput';
export default ForwardedDInput;
