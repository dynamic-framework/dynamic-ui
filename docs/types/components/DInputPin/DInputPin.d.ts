import type { BaseProps, FamilyIconProps, LabelIconProps, PinInputMode, PinInputType } from '../interface';
type Props = BaseProps & LabelIconProps & FamilyIconProps & {
    id: string;
    label?: string;
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
};
export default function DInputPin({ id, label, labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, placeholder, type, disabled, loading, secret, iconFamilyClass, iconFamilyPrefix, characters, innerInputMode, hint, invalid, valid, className, style, onChange, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
