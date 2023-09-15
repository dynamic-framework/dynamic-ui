declare type Step = {
    label: string;
    value: number;
};
declare type Props = {
    options: Array<Step>;
    currentStep: number;
    successIcon?: string;
    isVertical?: boolean;
};
export default function DStepper({ options, currentStep, successIcon, isVertical, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
