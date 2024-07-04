import type { BaseProps, BreakpointSize } from '../interface';
export type Step = {
    label: string;
    value: number;
    description?: string;
};
type Props = BaseProps & {
    options: Array<Step>;
    currentStep: number;
    iconSuccess?: string;
    iconSuccessFamilyClass?: string;
    iconSuccessFamilyPrefix?: string;
    iconSuccessMaterialStyle?: boolean;
    vertical?: boolean;
    completed?: boolean;
    breakpoint?: BreakpointSize;
};
export default function DStepper({ options, currentStep, iconSuccess, iconSuccessFamilyClass, iconSuccessFamilyPrefix, iconSuccessMaterialStyle, vertical, breakpoint, className, completed, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
