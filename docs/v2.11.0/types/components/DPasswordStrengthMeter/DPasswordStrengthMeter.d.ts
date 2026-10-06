import type { ReactNode } from 'react';
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
export default function DPasswordStrengthMeter({ id, label, 'aria-label': ariaLabel, placeholder, value, name, disabled, invalid, validationMessages, enabledChecks, className, style, dataAttributes, onChange, readonly, }: Props): import("react").JSX.Element;
export {};
