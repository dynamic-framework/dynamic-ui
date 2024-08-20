import type { BaseProps, FamilyIconProps, LabelIconProps, PinInputMode, PinInputType, StateIcons } from '../interface';
type Props = BaseProps & LabelIconProps & FamilyIconProps & StateIcons & {
    id?: string;
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
export default function DInputPin({ id: idProp, label, labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, placeholder, type, disabled, loading, secret, iconFamilyClass, iconFamilyPrefix, characters, invalidIcon: invalidIconProp, validIcon: validIconProp, innerInputMode, hint, invalid, valid, className, style, dataAttributes, onChange, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
