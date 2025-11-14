import { useState, useEffect } from 'react';

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
  label?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  disabled?: boolean;
  readonly?: boolean;
  invalid?: boolean;
  validFeedback?: string;
  invalidFeedback?: string;
  validationMessages?: ValidationMessages;
  enabledChecks?: ValidationCheck[];
  onChange?: (value: string) => void;
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
  placeholder,
  value = '',
  name,
  disabled = false,
  readonly = false,
  invalid = false,
  validFeedback,
  invalidFeedback,
  validationMessages = DEFAULT_VALIDATION_MESSAGES,
  enabledChecks = DEFAULT_ENABLED_CHECKS,
  className,
  style,
  dataAttributes,
  onChange,
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
        placeholder={placeholder}
        value={password}
        name={name}
        disabled={disabled}
        readonly={readonly}
        invalid={invalid}
        validFeedback={validFeedback}
        invalidFeedback={invalidFeedback}
        onChange={handleChange}
      />

      <PasswordChecksList
        password={password}
        validationMessages={validationMessages}
        enabledChecks={enabledChecks}
      />
    </div>
  );
}
