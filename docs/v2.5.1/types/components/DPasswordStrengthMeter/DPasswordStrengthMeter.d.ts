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
    invalid?: boolean;
    validationMessages?: ValidationMessages;
    enabledChecks?: ValidationCheck[];
    onChange?: (value: string) => void;
};
export default function DPasswordStrengthMeter({ id, label, placeholder, value, name, disabled, invalid, validationMessages, enabledChecks, className, style, dataAttributes, onChange, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
