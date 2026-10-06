/// <reference types="react" />
type Props = {
    password: string;
    regex: RegExp;
    text: string;
};
export default function PasswordCheckItem({ password, regex, text, }: Props): import("react").JSX.Element;
export {};
