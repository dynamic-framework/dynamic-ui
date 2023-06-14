import type { ComponentProps } from 'react';
import { MInput } from './proxies';
declare type Props = Omit<ComponentProps<typeof MInput>, 'name' | 'value'> & {
    name: string;
};
export default function MFormikInput({ name, ...props }: Props): JSX.Element;
export {};
