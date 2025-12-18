import classNames from 'classnames';

import DIcon from '../DIcon';

type Props = {
  password: string;
  regex: RegExp;
  text: string;
};

export default function PasswordCheckItem(
  {
    password,
    regex,
    text,
  }: Props,
) {
  const isValid = regex.test(password);

  return (
    <li className="d-flex gap-2 align-items-start small text-gray-600">
      <DIcon
        className={classNames(
          'flex-shrink-0',
          isValid ? 'text-success' : 'text-gray-300',
        )}
        icon={isValid ? 'CircleCheck' : 'Circle'}
        size="16px"
      />
      <span className={classNames({ 'text-success': isValid })}>
        {text}
      </span>
    </li>
  );
}
