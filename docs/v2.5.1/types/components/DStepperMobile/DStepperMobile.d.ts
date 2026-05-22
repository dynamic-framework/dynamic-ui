import type { BaseProps } from '../interface';
type Step = {
    label: string;
    description?: string;
    value: number;
};
type Props = BaseProps & {
    options: Array<Step>;
    currentStep: number;
};
export default function DStepper({ options, currentStep, className, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
