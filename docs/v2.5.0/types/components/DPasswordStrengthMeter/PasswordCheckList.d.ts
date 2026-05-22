import type { ValidationMessages, ValidationCheck } from './DPasswordStrengthMeter';
type Props = {
    password: string;
    validationMessages: ValidationMessages;
    enabledChecks: ValidationCheck[];
};
export declare const CHECK_REGEX: {
    uppercase: RegExp;
    lowercase: RegExp;
    number: RegExp;
    specialChar: RegExp;
};
export default function PasswordChecksList({ password, validationMessages, enabledChecks, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
