import type { BaseProps, BreakpointSize } from '../interface';
export type Step = {
    label: string;
    value: number;
    description?: string;
};
type Props = BaseProps & {
    options: Array<Step>;
    currentStep: number;
    successIcon?: string;
    vertical?: boolean;
    breakpoint?: BreakpointSize;
};
export default function DStepper({ options, currentStep, successIcon, vertical, breakpoint, className, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
