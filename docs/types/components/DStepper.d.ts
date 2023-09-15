import { BreakpointSize } from '@dynamic-framework/ui/dist/types/utils/component-interface';
declare type Step = {
    label: string;
    value: number;
    description?: string;
};
declare type Props = {
    options: Array<Step>;
    currentStep: number;
    successIcon?: string;
    isVertical?: boolean;
    breakpoint?: BreakpointSize;
};
export default function DStepper({ options, currentStep, successIcon, isVertical, breakpoint, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
