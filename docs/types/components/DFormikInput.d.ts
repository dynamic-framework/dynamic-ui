import type { ComponentProps } from 'react';
import { DInput } from './proxies';
declare type Props = Omit<ComponentProps<typeof DInput>, 'name' | 'value'> & {
    name: string;
};
export default function DFormikInput({ name, hint, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
