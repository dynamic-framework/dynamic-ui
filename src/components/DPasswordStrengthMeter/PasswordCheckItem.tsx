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
    <li className="df-password-check" {...isValid && { 'data-met': '' }}>
      <DIcon
        className="df-password-check-icon"
        icon={isValid ? 'CircleCheck' : 'Circle'}
        size="16px"
      />
      <span>{text}</span>
    </li>
  );
}
