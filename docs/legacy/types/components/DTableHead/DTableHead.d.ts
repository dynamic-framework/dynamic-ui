import { BaseProps } from '../interface';
type Props = BaseProps & {
    field: string;
    label: string;
    value?: string;
    onChange: (value: string) => void;
};
export default function DTableHead({ className, style, field, label, value, onChange, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
