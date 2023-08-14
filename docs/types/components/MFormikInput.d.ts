import type { ComponentProps } from 'react';
import { MInput } from './proxies';
declare type Props = Omit<ComponentProps<typeof MInput>, 'name' | 'value'> & {
    name: string;
};
export default function MFormikInput({ name, hint, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
