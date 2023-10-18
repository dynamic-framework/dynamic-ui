import type { FamilyIcon, LabelIcon, PinInputMode, PinInputType } from './interface';
type Props = LabelIcon & FamilyIcon & {
    id: string;
    label?: string;
    placeholder?: string;
    type?: PinInputType;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isLoading?: boolean;
    isSecret?: boolean;
    characters?: number;
    innerInputMode?: PinInputMode;
    hint?: string;
    isInvalid?: boolean;
    isValid?: boolean;
    onChange?: (value: string) => void;
};
export default function DInputPin({ id, label, labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, placeholder, type, isDisabled, isLoading, isSecret, iconFamilyClass, iconFamilyPrefix, characters, innerInputMode, hint, isInvalid, isValid, onChange, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
