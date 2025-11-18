import PasswordCheckItem from './PasswordCheckItem';
import PasswordStrengthBar from './PasswordStrength';
import type { ValidationMessages, ValidationCheck } from './DPasswordStrengthMeter';

type Props = {
  password: string;
  validationMessages: ValidationMessages;
  enabledChecks: ValidationCheck[];
};

export const CHECK_REGEX = {
  uppercase: /[A-Z]/,
  lowercase: /[a-z]/,
  number: /\d/,
  specialChar: /[~!@#$^*\-_=[\]{}|;,.?]/,
};

type CheckConfig = {
  key: ValidationCheck;
  regex: RegExp;
  text: string;
};

export default function PasswordChecksList({
  password,
  validationMessages,
  enabledChecks,
}: Props) {
  const allChecks: CheckConfig[] = [
    {
      key: 'uppercase',
      regex: CHECK_REGEX.uppercase,
      text: validationMessages.uppercaseLetter,
    },
    {
      key: 'lowercase',
      regex: CHECK_REGEX.lowercase,
      text: validationMessages.lowercaseLetter,
    },
    {
      key: 'number',
      regex: CHECK_REGEX.number,
      text: validationMessages.number,
    },
    {
      key: 'specialChar',
      regex: CHECK_REGEX.specialChar,
      text: validationMessages.especialChar,
    },
  ];

  const passwordChecks = allChecks.filter((check) => enabledChecks.includes(check.key));

  const passed = passwordChecks.filter((r) => r.regex.test(password)).length;
  const total = passwordChecks.length;

  return (
    <div className="mt-2">
      <PasswordStrengthBar strength={passed} total={total} />
      <ul className="list-unstyled m-0 d-flex flex-column gap-2">
        {passwordChecks.map(({ key, regex, text }) => (
          <PasswordCheckItem
            key={key}
            password={password}
            regex={regex}
            text={text}
          />
        ))}
      </ul>
    </div>
  );
}
