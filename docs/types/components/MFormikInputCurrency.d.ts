import type { ComponentProps } from 'react';
import MInputCurrency from './MInputCurrency';
declare type Props = Omit<ComponentProps<typeof MInputCurrency>, 'name' | 'value'> & {
    name: string;
};
export default function MFormikInputCurrency({ name, hint, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
