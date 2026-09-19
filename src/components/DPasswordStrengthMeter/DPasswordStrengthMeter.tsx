import { useState, useEffect } from 'react';

import type { ReactNode } from 'react';

import DInputPassword from '../DInputPassword';
import PasswordChecksList from './PasswordCheckList';

import type { BaseProps } from '../interface';

export type ValidationMessages = {
  number: string;
  lowercaseLetter: string;
  uppercaseLetter: string;
  especialChar: string;
  notMatch?: string;
};

export type ValidationCheck = 'uppercase' | 'lowercase' | 'number' | 'specialChar';

type Props = BaseProps & {
  id?: string;
  /**
   * The label of the password field. Any node is accepted, so it can carry a
   * link or an info trigger.
   *
   * Text doubles as the control's accessible name. A richer label does not, so
   * pass `aria-label` alongside it; a development-only warning says so when it
   * is missing.
   */
  label?: ReactNode;
  /**
   * Accessible name of the password field. Spelled as the native attribute
   * because it is forwarded straight to the nested input, which is also the
   * component the development-only naming warning comes from — so the advice it
   * gives names a prop this component accepts.
   */
  'aria-label'?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  disabled?: boolean;
  invalid?: boolean;
  validationMessages?: ValidationMessages;
  enabledChecks?: ValidationCheck[];
  onChange?: (value: string) => void;
  readonly?: boolean;
};

const DEFAULT_VALIDATION_MESSAGES: ValidationMessages = {
  number: 'At least one number',
  lowercaseLetter: 'At least one lowercase letter',
  uppercaseLetter: 'At least one uppercase letter',
  especialChar: 'At least one of these special characters: ~!@#$^*-_=[]{}|;,.?',
  notMatch: 'The password confirmation and the new password do not match.',
};

const DEFAULT_ENABLED_CHECKS: ValidationCheck[] = ['uppercase', 'lowercase', 'number', 'specialChar'];

export default function DPasswordStrengthMeter({
  id,
  label = 'Password',
  'aria-label': ariaLabel,
  placeholder,
  value = '',
  name,
  disabled = false,
  invalid = false,
  validationMessages = DEFAULT_VALIDATION_MESSAGES,
  enabledChecks = DEFAULT_ENABLED_CHECKS,
  className,
  style,
  dataAttributes,
  onChange,
  readonly = false,
}: Props) {
  const [password, setPassword] = useState<string>(value);

  useEffect(() => {
    setPassword(value);
  }, [value]);

  const handleChange = (newValue: string) => {
    setPassword(newValue);
    onChange?.(newValue);
  };

  return (
    <div className={className} style={style} {...dataAttributes}>
      <DInputPassword
        id={id}
        label={label}
        aria-label={ariaLabel}
        placeholder={placeholder}
        value={password}
        name={name}
        disabled={disabled}
        invalid={invalid}
        onChange={handleChange}
        readonly={readonly}
      />

      <PasswordChecksList
        password={password}
        validationMessages={validationMessages}
        enabledChecks={enabledChecks}
      />
    </div>
  );
}
