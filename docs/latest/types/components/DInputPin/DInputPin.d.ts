import type { BaseProps, FamilyIconProps, PinInputMode, PinInputType } from '../interface';
type Props = BaseProps & FamilyIconProps & {
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
export default function DInputPin({ id: idProp, label, placeholder, type, disabled, loading, secret, characters, innerInputMode, hint, invalid, valid, className, style, dataAttributes, onChange, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
