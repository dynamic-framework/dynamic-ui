import type { ReactNode } from 'react';
import type { BaseProps, FamilyIconProps, PinInputMode, PinInputType } from '../interface';
type Props = BaseProps & FamilyIconProps & {
    id?: string;
    /**
     * Visible label of the group. Each character input carries its own
     * `aria-label`, so this never acts as the accessible name and a non-text
     * label does not warn here the way it does on the other inputs.
     */
    label?: ReactNode;
    placeholder?: string;
    type?: PinInputType;
    disabled?: boolean;
    readOnly?: boolean;
    loading?: boolean;
    secret?: boolean;
    characters?: number;
    innerInputMode?: PinInputMode;
    hint?: string;
    invalid?: boolean;
    valid?: boolean;
    onChange?: (value: string) => void;
    /**
     * Accessible name given to every character input, suffixed with its position
     * — "Pin character number 2 of 4". Each input is named on its own, which is
     * why `label` never acts as the accessible name here.
     */
    'aria-label'?: string;
};
export default function DInputPin({ id: idProp, label, placeholder, type, disabled, loading, secret, characters, innerInputMode, hint, invalid, valid, className, style, dataAttributes, onChange, 'aria-label': ariaLabel, }: Props): import("react").JSX.Element;
export {};
