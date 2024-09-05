import type { BaseProps } from '../interface';
type Step = {
    label: string;
    description?: string;
    value: number;
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
    alignStart?: boolean;
};
export default function DStepper({ options, currentStep, iconSuccess: iconSuccessProp, iconSuccessFamilyClass, iconSuccessFamilyPrefix, iconSuccessMaterialStyle, vertical, completed, alignStart, className, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
