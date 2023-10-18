type Props = {
    id: string;
    name?: string;
    label: string;
    hint: string;
    isChecked?: boolean;
    isDisabled?: boolean;
    onClick?: (isChecked: boolean | undefined) => void;
};
export default function DQuickActionSwitch({ id, name, label, hint, isChecked, isDisabled, onClick, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
