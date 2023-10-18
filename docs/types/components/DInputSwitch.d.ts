interface Props {
    label?: string;
    id: string;
    name?: string;
    isChecked?: boolean;
    isDisabled?: boolean;
    isReadonly?: boolean;
    onChange?: (isChecked: boolean) => void;
}
export default function DInputSwitch({ label, id, name, isChecked, isDisabled, isReadonly, onChange, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
