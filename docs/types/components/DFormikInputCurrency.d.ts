import type { ComponentProps } from 'react';
import DInputCurrency from './DInputCurrency';
type Props = Omit<ComponentProps<typeof DInputCurrency>, 'name' | 'value'> & {
    name: string;
};
export default function DFormikInputCurrency({ name, hint, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
