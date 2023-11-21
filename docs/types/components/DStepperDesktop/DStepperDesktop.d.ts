import type { BaseProps } from '../interface';
type Step = {
    label: string;
    value: number;
};
type Props = BaseProps & {
    options: Array<Step>;
    currentStep: number;
    successIcon?: string;
    vertical?: boolean;
};
export default function DStepper({ options, currentStep, successIcon, vertical, className, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
