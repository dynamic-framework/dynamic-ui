declare type Step = {
    label: string;
    description?: string;
    value: number;
};
declare type Props = {
    options: Array<Step>;
    currentStep: number;
};
export default function DStepper({ options, currentStep, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
