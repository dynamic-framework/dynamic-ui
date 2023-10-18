import type { BreakpointSize } from './interface';
export type Step = {
    label: string;
    value: number;
    description?: string;
};
type Props = {
    options: Array<Step>;
    currentStep: number;
    successIcon?: string;
    isVertical?: boolean;
    breakpoint?: BreakpointSize;
};
export default function DStepper({ options, currentStep, successIcon, isVertical, breakpoint, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
